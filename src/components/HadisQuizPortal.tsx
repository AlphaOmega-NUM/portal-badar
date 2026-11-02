/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  allQuizLevels, 
  getQuizSession, 
  calculatePoints, 
  QUIZ_CONFIG, 
  QuizQuestion, 
  QuizLevel 
} from '../data/quizData';
import { Language, translations } from '../data/translations';

interface HadisQuizPortalProps {
  onNavigateHome: () => void;
  onNavigateToHadis40: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  language: Language;
  onOpenSettings: () => void;
}

interface UserProgress {
  unlockedLevels: number[];
  levelHighScores: Record<number, number>;
  levelStars: Record<number, number>;
}

const STORAGE_KEY = 'badar_hadis_quiz_progress_v1';

function loadProgress(): UserProgress {
  if (typeof window === 'undefined') {
    return { unlockedLevels: [1], levelHighScores: {}, levelStars: {} };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed.unlockedLevels) && parsed.unlockedLevels.length > 0) {
        return parsed;
      }
    }
  } catch {
    // fallback
  }
  return { unlockedLevels: [1], levelHighScores: {}, levelStars: {} };
}

function saveProgress(progress: UserProgress) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // ignore
  }
}

export function HadisQuizPortal({
  onNavigateHome,
  onNavigateToHadis40,
  isDarkMode,
  onToggleDarkMode,
  language,
  onOpenSettings
}: HadisQuizPortalProps) {
  const t = translations[language];

  // Game state: 'lobby' | 'playing' | 'summary'
  const [gameState, setGameState] = useState<'lobby' | 'playing' | 'summary'>('lobby');
  const [currentLevel, setCurrentLevel] = useState<number>(1);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [fastBonusCount, setFastBonusCount] = useState<number>(0);
  const [answerFeedback, setAnswerFeedback] = useState<{
    isCorrect: boolean;
    isFastBonus: boolean;
    pointsAwarded: number;
  } | null>(null);

  // Timer state
  const [timeLeft, setTimeLeft] = useState<number>(QUIZ_CONFIG.QUESTION_TIME_LIMIT_SECONDS);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const questionStartTimeRef = useRef<number>(Date.now());

  // User saved progress
  const [userProgress, setUserProgress] = useState<UserProgress>(loadProgress);

  // Listen to external dev tools / storage updates
  useEffect(() => {
    const handleSync = () => {
      setUserProgress(loadProgress());
    };
    window.addEventListener('badar_quiz_progress_updated', handleSync);
    window.addEventListener('storage', handleSync);
    return () => {
      window.removeEventListener('badar_quiz_progress_updated', handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, []);

  // Total accumulated score across all levels
  const totalAccumulatedScore = Object.values(userProgress.levelHighScores).reduce((a, b) => a + b, 0);

  // Start a level session
  const startLevel = (lvlNo: number) => {
    const sessionQuestions = getQuizSession(lvlNo, QUIZ_CONFIG.QUESTIONS_PER_LEVEL);
    if (!sessionQuestions || sessionQuestions.length === 0) return;

    setCurrentLevel(lvlNo);
    setQuestions(sessionQuestions);
    setCurrentQIndex(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setCurrentScore(0);
    setCorrectCount(0);
    setFastBonusCount(0);
    setAnswerFeedback(null);
    setTimeLeft(QUIZ_CONFIG.QUESTION_TIME_LIMIT_SECONDS);
    questionStartTimeRef.current = Date.now();
    setGameState('playing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Timer countdown hook for 'playing' state
  useEffect(() => {
    if (gameState !== 'playing' || hasAnswered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState, hasAnswered, currentQIndex]);

  // Handle timeout (0s remaining without answer)
  const handleTimeout = () => {
    if (hasAnswered) return;
    setHasAnswered(true);
    setSelectedOption(-1);
    setAnswerFeedback({
      isCorrect: false,
      isFastBonus: false,
      pointsAwarded: 0
    });
  };

  // Handle user selecting an option (0, 1, 2, 3)
  const handleSelectOption = (idx: number) => {
    if (hasAnswered || gameState !== 'playing') return;

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    const elapsedSeconds = (Date.now() - questionStartTimeRef.current) / 1000;
    const currentQ = questions[currentQIndex];
    const isCorrect = idx === currentQ.jawapanBetulIndex;

    const { points, isFastBonus } = calculatePoints(
      isCorrect,
      elapsedSeconds,
      QUIZ_CONFIG.BASE_POINTS_PER_QUESTION,
      QUIZ_CONFIG.SPEED_BONUS_MULTIPLIER,
      QUIZ_CONFIG.SPEED_BONUS_THRESHOLD_SECONDS
    );

    setSelectedOption(idx);
    setHasAnswered(true);
    setAnswerFeedback({
      isCorrect,
      isFastBonus,
      pointsAwarded: points
    });

    if (isCorrect) {
      setCurrentScore((prev) => prev + points);
      setCorrectCount((prev) => prev + 1);
      if (isFastBonus) {
        setFastBonusCount((prev) => prev + 1);
      }
    }
  };

  // Advance to next question or end game
  const handleNextQuestion = () => {
    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
      setAnswerFeedback(null);
      setTimeLeft(QUIZ_CONFIG.QUESTION_TIME_LIMIT_SECONDS);
      questionStartTimeRef.current = Date.now();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      finishLevelSession();
    }
  };

  // Finish level and update progress
  const finishLevelSession = () => {
    setGameState('summary');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const passed = currentScore >= QUIZ_CONFIG.PASSING_SCORE;
    
    let stars = 0;
    if (currentScore >= 16 || correctCount === 5) {
      stars = 3;
    } else if (currentScore >= 10) {
      stars = 2;
    } else if (passed) {
      stars = 1;
    }

    setUserProgress((prev) => {
      const nextUnlocked = [...prev.unlockedLevels];
      if (passed && currentLevel < QUIZ_CONFIG.TOTAL_LEVELS) {
        const nextLvl = currentLevel + 1;
        if (!nextUnlocked.includes(nextLvl)) {
          nextUnlocked.push(nextLvl);
        }
      }
      const existingHigh = prev.levelHighScores[currentLevel] || 0;
      const existingStars = prev.levelStars[currentLevel] || 0;

      const updated: UserProgress = {
        unlockedLevels: nextUnlocked,
        levelHighScores: {
          ...prev.levelHighScores,
          [currentLevel]: Math.max(existingHigh, currentScore)
        },
        levelStars: {
          ...prev.levelStars,
          [currentLevel]: Math.max(existingStars, stars)
        }
      };
      saveProgress(updated);
      return updated;
    });
  };

  const handleResetProgress = () => {
    if (window.confirm(language === 'en' ? 'Are you sure you want to reset all quiz progress?' : 'Adakah anda pasti mahu menetapkan semula semua kemajuan kuiz?')) {
      const fresh: UserProgress = { unlockedLevels: [1], levelHighScores: {}, levelStars: {} };
      setUserProgress(fresh);
      saveProgress(fresh);
    }
  };

  // Helper values
  const currentQ = questions[currentQIndex];
  const passedSession = currentScore >= QUIZ_CONFIG.PASSING_SCORE;
  const timeProgressPercent = (timeLeft / QUIZ_CONFIG.QUESTION_TIME_LIMIT_SECONDS) * 100;
  const isSpeedBonusWindow = timeLeft > (QUIZ_CONFIG.QUESTION_TIME_LIMIT_SECONDS - QUIZ_CONFIG.SPEED_BONUS_THRESHOLD_SECONDS);

  const getDifficultyBadge = (difficulty: QuizLevel['tahapKesukaranMs']) => {
    switch (difficulty) {
      case 'Mudah':
        return <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 border-2 border-emerald-400 dark:border-emerald-700 shadow-xs">Mudah / Easy</span>;
      case 'Sederhana':
        return <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 border-2 border-amber-400 dark:border-amber-700 shadow-xs">Sederhana / Medium</span>;
      case 'Sukar':
        return <span className="px-3 py-1 rounded-full text-xs font-black bg-purple-100 text-purple-900 dark:bg-purple-950 dark:text-purple-200 border-2 border-purple-400 dark:border-purple-700 shadow-xs">Sukar / Hard</span>;
      case 'Pakar':
        return <span className="px-3 py-1 rounded-full text-xs font-black bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-200 border-2 border-rose-400 dark:border-rose-700 shadow-xs">Pakar / Expert</span>;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-30 bg-[var(--bg-base)]/95 backdrop-blur-md border-b border-black/10 dark:border-white/10 px-4 sm:px-6 py-3.5 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={gameState === 'lobby' ? onNavigateToHadis40 : () => setGameState('lobby')}
              title={gameState === 'lobby' ? t.quizBtnBackToHadis : t.quizBtnSelectLevel}
              className="neu-btn px-4 py-2 rounded-xl text-sm font-black flex items-center gap-2 text-teal-950 dark:text-amber-300 hover:text-teal-700 transition-colors border border-white/60 dark:border-white/10"
            >
              <i className="fa-solid fa-arrow-left"></i>
              <span className="hidden sm:inline">
                {gameState === 'lobby' ? t.quizBtnBackToHadis : t.quizBtnSelectLevel}
              </span>
            </button>
            <div className="border-l-2 border-teal-800/20 dark:border-white/10 pl-3">
              <h1 className="text-base sm:text-xl font-black font-serif text-slate-950 dark:text-amber-300 leading-tight">
                {t.quizTitle}
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hidden md:block">
                {t.quizSubtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Total Points Badge */}
            <div className="neu-card px-4 py-1.5 rounded-xl flex items-center gap-2 text-sm font-black text-amber-800 dark:text-amber-400 border border-amber-500/30">
              <i className="fa-solid fa-trophy text-amber-500 text-base"></i>
              <span>{totalAccumulatedScore} <span className="font-bold text-xs text-slate-700 dark:text-slate-300">Mata</span></span>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="neu-btn w-9 h-9 rounded-xl flex items-center justify-center text-teal-950 dark:text-amber-300 text-sm border border-white/60 dark:border-white/10"
              title={isDarkMode ? t.darkModeLight : t.darkModeDark}
              aria-label="Tukar tema"
            >
              <i className={`fa-solid ${isDarkMode ? 'fa-sun text-amber-400' : 'fa-moon text-teal-900'}`}></i>
            </button>

            {/* Settings button */}
            <button
              onClick={onOpenSettings}
              className="neu-btn w-9 h-9 rounded-xl flex items-center justify-center text-teal-950 dark:text-amber-300 text-sm border border-white/60 dark:border-white/10"
              title={t.navSettings}
              aria-label={t.navSettings}
            >
              <i className="fa-solid fa-gear"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 md:p-8 flex flex-col justify-start">
        {/* ============================================================== */}
        {/* STATE 1: LOBBY / LEVEL SELECTION SCREEN                        */}
        {/* ============================================================== */}
        {gameState === 'lobby' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Hero / Overview Box */}
            <div className="neu-card p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-white/70 dark:border-white/10">
              <div className="max-w-3xl space-y-3 relative z-10">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-teal-800/15 dark:bg-teal-300/15 text-teal-950 dark:text-teal-200 border-2 border-teal-800/30 dark:border-teal-300/30">
                  <i className="fa-solid fa-brain text-amber-500"></i> Uji Minda Hadis 40
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-slate-950 dark:text-amber-200 tracking-tight">
                  {t.quizTitle}
                </h2>
                <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">
                  {t.quizSubtitle}. Setiap tahap mengandungi 5 soalan objektif rawak berserta huraian komprehensif. Selesaikan kuiz sepantas mungkin untuk menggandakan markah anda!
                </p>
              </div>

              {/* Rules Cards Bar */}
              <div className="mt-6 pt-6 border-t border-black/10 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="neu-card p-4 rounded-2xl flex items-start gap-3">
                  <div className="neu-inset w-9 h-9 rounded-xl text-teal-900 dark:text-teal-200 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-list-check text-sm font-bold"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-950 dark:text-teal-200">5 Soalan / Tahap</h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-snug mt-0.5">{t.quizRuleQuestions}</p>
                  </div>
                </div>

                <div className="neu-card p-4 rounded-2xl flex items-start gap-3">
                  <div className="neu-inset w-9 h-9 rounded-xl text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-coins text-sm font-bold"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-950 dark:text-teal-200">2 Mata Asas</h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-snug mt-0.5">{t.quizRulePoints}</p>
                  </div>
                </div>

                <div className="neu-card p-4 rounded-2xl flex items-start gap-3">
                  <div className="neu-inset w-9 h-9 rounded-xl text-amber-600 dark:text-amber-300 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-bolt text-sm animate-bounce"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-amber-800 dark:text-amber-300">⚡ Bonus Pantas 2X</h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-snug mt-0.5">{t.quizRuleBonus}</p>
                  </div>
                </div>

                <div className="neu-card p-4 rounded-2xl flex items-start gap-3">
                  <div className="neu-inset w-9 h-9 rounded-xl text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-lock-open text-sm font-bold"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-950 dark:text-teal-200">Syarat Lulus</h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-snug mt-0.5">{t.quizRulePass}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Level Grid Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl sm:text-2xl font-black font-serif text-slate-950 dark:text-amber-300 flex items-center gap-2.5">
                  <i className="fa-solid fa-layer-group text-teal-800 dark:text-teal-400"></i>
                  {t.quizSelectLevel}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-black text-slate-800 dark:text-slate-200 bg-white/60 dark:bg-black/30 px-3 py-1 rounded-lg">
                    {userProgress.unlockedLevels.length} / {QUIZ_CONFIG.TOTAL_LEVELS} Terbuka
                  </span>
                  <button
                    onClick={handleResetProgress}
                    className="text-xs font-bold text-slate-600 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 underline transition-colors"
                  >
                    Set Semula Kemajuan
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {allQuizLevels.map((lvl) => {
                  const isUnlocked = userProgress.unlockedLevels.includes(lvl.level);
                  const highScore = userProgress.levelHighScores[lvl.level] || 0;
                  const stars = userProgress.levelStars[lvl.level] || 0;

                  return (
                    <div
                      key={lvl.level}
                      className={`p-4 sm:p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 relative group ${
                        isUnlocked
                          ? 'neu-card cursor-pointer hover:-translate-y-1 hover:border-teal-700 dark:hover:border-amber-400'
                          : 'neu-inset opacity-70 cursor-not-allowed border border-black/5 dark:border-white/5'
                      }`}
                      onClick={() => isUnlocked && startLevel(lvl.level)}
                    >
                      {/* Top Bar: Level number & Lock/Stars */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="w-8 h-8 rounded-xl bg-teal-900 text-white dark:bg-amber-400 dark:text-teal-950 font-black flex items-center justify-center text-sm shadow-sm">
                          {lvl.level}
                        </span>
                        <div>
                          {isUnlocked ? (
                            <div className="flex items-center gap-0.5 text-xs text-amber-500">
                              {[1, 2, 3].map((starIdx) => (
                                <i
                                  key={starIdx}
                                  className={`fa-solid fa-star text-sm ${
                                    starIdx <= stars ? 'text-amber-500' : 'text-stone-300 dark:text-stone-700'
                                  }`}
                                ></i>
                              ))}
                            </div>
                          ) : (
                            <span className="w-8 h-8 rounded-lg bg-stone-300 dark:bg-stone-800 text-stone-700 dark:text-stone-300 flex items-center justify-center text-xs font-bold">
                              <i className="fa-solid fa-lock"></i>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-1.5 mb-4 flex-1">
                        <h4 className="font-black text-sm text-slate-950 dark:text-amber-200 line-clamp-1 leading-snug">
                          {language === 'en' ? lvl.namaEn : lvl.namaMs}
                        </h4>
                        <p className="text-xs text-slate-700 dark:text-slate-300 line-clamp-2 leading-relaxed font-semibold">
                          {language === 'en' ? lvl.peneranganEn : lvl.peneranganMs}
                        </p>
                      </div>

                      {/* Footer Badge & Score */}
                      <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs">
                        {getDifficultyBadge(lvl.tahapKesukaranMs)}
                        {isUnlocked && highScore > 0 && (
                          <span className="font-black text-amber-800 dark:text-amber-400 font-mono text-sm">
                            {highScore} pts
                          </span>
                        )}
                      </div>

                      {/* Play Action for Unlocked */}
                      {isUnlocked && (
                        <div className="mt-3">
                          <button
                            type="button"
                            className="neu-btn-primary w-full py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 shadow-sm"
                          >
                            <i className="fa-solid fa-play text-[10px]"></i>
                            <span>{highScore > 0 ? 'Main Semula' : 'Mula Kuiz'}</span>
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* STATE 2: ACTIVE PLAYING SCREEN                                */}
        {/* ============================================================== */}
        {gameState === 'playing' && currentQ && (
          <div className="max-w-3xl mx-auto w-full space-y-6 animate-fadeIn">
            {/* Top Info Bar: Level Title, Question Counter, Score */}
            <div className="neu-card p-4 sm:p-5 rounded-2xl flex items-center justify-between gap-3 border border-white/80 dark:border-white/10 shadow-md">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-teal-900 text-white dark:bg-amber-400 dark:text-teal-950 font-black flex items-center justify-center text-base shadow-sm">
                  {currentLevel}
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-950 dark:text-amber-300">
                    {language === 'en' ? allQuizLevels.find(l => l.level === currentLevel)?.namaEn : allQuizLevels.find(l => l.level === currentLevel)?.namaMs}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-bold mt-0.5">
                    {t.quizQuestionProgress(currentQIndex + 1, questions.length)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">Mata Semasa</div>
                  <div className="text-2xl font-black text-amber-700 dark:text-amber-400 font-mono leading-none">
                    {currentScore}
                  </div>
                </div>
                <button
                  onClick={() => setGameState('lobby')}
                  className="neu-btn w-9 h-9 rounded-xl flex items-center justify-center text-slate-700 hover:text-rose-600 dark:text-slate-300 dark:hover:text-rose-400 text-sm font-bold border border-white/60 dark:border-white/10"
                  title="Keluar ke lobi"
                  aria-label="Keluar ke lobi"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>

            {/* Timer & Speed Bonus Bar */}
            <div className="neu-card p-4 rounded-2xl space-y-3 border border-white/80 dark:border-white/10 shadow-md">
              <div className="flex items-center justify-between text-xs sm:text-sm font-black">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <i className="fa-regular fa-clock text-teal-800 dark:text-teal-300 text-base"></i>
                  <span>{t.quizTimeRemaining}: <span className="font-mono text-base font-black text-teal-950 dark:text-teal-200 bg-white/80 dark:bg-black/50 px-2 py-0.5 rounded-md border border-black/10 dark:border-white/10">{timeLeft}s</span></span>
                </div>

                {isSpeedBonusWindow && !hasAnswered ? (
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 0.9 }}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md tracking-wide"
                  >
                    <i className="fa-solid fa-bolt"></i>
                    <span>{t.quizFastBonusActive}</span>
                  </motion.div>
                ) : (
                  <span className="text-slate-700 dark:text-slate-300 font-bold text-xs">
                    Masa Asas (2 Mata)
                  </span>
                )}
              </div>

              {/* Progress track */}
              <div className="w-full h-3.5 bg-stone-300/80 dark:bg-black/40 rounded-full overflow-hidden p-0.5 neu-inset">
                <div
                  className={`h-full transition-all duration-1000 ease-linear rounded-full ${
                    isSpeedBonusWindow
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500'
                      : timeLeft <= 5
                      ? 'bg-rose-500'
                      : 'bg-teal-600'
                  }`}
                  style={{ width: `${timeProgressPercent}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="neu-card p-6 sm:p-8 rounded-3xl space-y-6 border border-white/90 dark:border-white/10 shadow-xl">
              {/* Hadis Reference Badge */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-black bg-teal-100 dark:bg-teal-950 text-teal-950 dark:text-teal-200 border-2 border-teal-600/30">
                  <i className="fa-solid fa-book-bookmark text-amber-500"></i>
                  Hadis #{currentQ.hadisNo.toString().padStart(2, '0')}
                </span>

                <span className="text-xs font-black text-slate-600 dark:text-slate-400 font-mono">
                  #{currentQ.id}
                </span>
              </div>

              {/* Question Text with Crystal Clear Typography */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-serif leading-relaxed text-slate-950 dark:text-white">
                {language === 'en' ? currentQ.soalanEn : currentQ.soalanMs}
              </h2>

              {/* Options Grid (A, B, C, D) */}
              <div className="grid grid-cols-1 gap-3.5 pt-2">
                {currentQ.pilihan.map((pilihan, idx) => {
                  const label = pilihan.label;
                  const text = language === 'en' ? pilihan.textEn : pilihan.textMs;
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQ.jawapanBetulIndex;

                  // High-Contrast Styling post-selection
                  let buttonStyle = 'neu-btn text-slate-900 dark:text-white border-2 border-white/80 dark:border-white/10 hover:border-teal-700/60 hover:text-teal-950';
                  let labelStyle = 'bg-teal-900 text-white dark:bg-amber-400 dark:text-teal-950 font-black shadow-sm';
                  let textStyle = 'text-slate-950 dark:text-slate-50 font-semibold';

                  if (hasAnswered) {
                    if (isCorrect) {
                      buttonStyle = 'bg-emerald-600 text-white shadow-lg border-2 border-emerald-400 font-bold';
                      labelStyle = 'bg-emerald-800 text-white shadow-inner';
                      textStyle = 'text-white font-bold';
                    } else if (isSelected && !isCorrect) {
                      buttonStyle = 'bg-rose-600 text-white shadow-lg border-2 border-rose-400 font-bold';
                      labelStyle = 'bg-rose-800 text-white shadow-inner';
                      textStyle = 'text-white font-bold';
                    } else {
                      buttonStyle = 'neu-btn opacity-60 cursor-not-allowed border border-black/5 dark:border-white/5';
                      labelStyle = 'bg-slate-400 text-white dark:bg-slate-700 dark:text-slate-300 font-bold';
                      textStyle = 'text-slate-700 dark:text-slate-300 font-medium';
                    }
                  }

                  return (
                    <button
                      key={label}
                      onClick={() => handleSelectOption(idx)}
                      disabled={hasAnswered}
                      className={`w-full p-4 sm:p-4.5 rounded-2xl text-left transition-all flex items-start gap-4 ${buttonStyle}`}
                    >
                      <span className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-base font-mono ${labelStyle}`}>
                        {label}
                      </span>
                      <span className={`text-base sm:text-lg leading-snug pt-1.5 flex-1 ${textStyle}`}>
                        {text}
                      </span>
                      {hasAnswered && isCorrect && (
                        <i className="fa-solid fa-circle-check text-2xl text-white mt-1.5 shrink-0"></i>
                      )}
                      {hasAnswered && isSelected && !isCorrect && (
                        <i className="fa-solid fa-circle-xmark text-2xl text-white mt-1.5 shrink-0"></i>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback and Explanation Box when answered */}
              <AnimatePresence>
                {hasAnswered && answerFeedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    className="space-y-4 pt-4 border-t-2 border-black/10 dark:border-white/10"
                  >
                    {/* Result Banner */}
                    <div
                      className={`p-4 sm:p-5 rounded-2xl flex items-center justify-between gap-4 shadow-sm ${
                        answerFeedback.isCorrect
                          ? 'bg-emerald-100 border-2 border-emerald-500 text-emerald-950 dark:bg-emerald-950/70 dark:border-emerald-400 dark:text-emerald-100'
                          : 'bg-rose-100 border-2 border-rose-500 text-rose-950 dark:bg-rose-950/70 dark:border-rose-400 dark:text-rose-100'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 shadow-sm ${
                            answerFeedback.isCorrect
                              ? 'bg-emerald-600 text-white'
                              : 'bg-rose-600 text-white'
                          }`}
                        >
                          <i
                            className={`fa-solid ${
                              answerFeedback.isCorrect ? 'fa-check' : 'fa-xmark'
                            }`}
                          ></i>
                        </div>
                        <div>
                          <h4 className="font-black text-base sm:text-lg">
                            {answerFeedback.isCorrect
                              ? answerFeedback.isFastBonus
                                ? t.quizFastBonusAwarded
                                : t.quizCorrectAwarded
                              : selectedOption === -1
                              ? 'Masa Tamat!'
                              : t.quizIncorrectMsg}
                          </h4>
                          {!answerFeedback.isCorrect && (
                            <p className="text-sm sm:text-base mt-1 font-bold text-slate-950 dark:text-white">
                              Jawapan tepat: <span className="underline font-black text-teal-950 dark:text-amber-300">{currentQ.pilihan[currentQ.jawapanBetulIndex].label}: {language === 'en' ? currentQ.pilihan[currentQ.jawapanBetulIndex].textEn : currentQ.pilihan[currentQ.jawapanBetulIndex].textMs}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-2xl font-black font-mono">
                          +{answerFeedback.pointsAwarded}
                        </span>
                        <span className="text-xs block font-bold text-slate-700 dark:text-slate-300">Mata</span>
                      </div>
                    </div>

                    {/* Explanation Details */}
                    <div className="neu-inset p-5 rounded-2xl space-y-2 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/30">
                      <div className="flex items-center gap-2 text-sm font-black text-teal-950 dark:text-teal-200">
                        <i className="fa-solid fa-lightbulb text-amber-500 text-base"></i>
                        <span>{t.quizExplanationTitle}</span>
                      </div>
                      <p className="text-sm sm:text-base text-slate-900 dark:text-slate-100 leading-relaxed font-semibold">
                        {language === 'en' ? currentQ.peneranganEn : currentQ.peneranganMs}
                      </p>
                    </div>

                    {/* Next Question / Finish Action Button */}
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={handleNextQuestion}
                        className="neu-btn-primary px-8 py-3.5 rounded-2xl font-black text-base flex items-center gap-3 shadow-lg"
                      >
                        <span>
                          {currentQIndex + 1 < questions.length
                            ? t.quizNextQuestion
                            : t.quizFinishBtn}
                        </span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* STATE 3: LEVEL SUMMARY / RESULT MODAL                          */}
        {/* ============================================================== */}
        {gameState === 'summary' && (
          <div className="max-w-xl mx-auto w-full space-y-6 animate-fadeIn">
            <div className="neu-card p-6 sm:p-8 rounded-3xl text-center space-y-6 border border-white/80 dark:border-white/10 shadow-xl">
              {/* Trophy / Status Icon */}
              <div className="relative inline-block mx-auto">
                <div
                  className={`w-24 h-24 rounded-3xl flex items-center justify-center text-4xl shadow-xl mx-auto ${
                    passedSession
                      ? 'bg-gradient-to-tr from-amber-500 to-amber-400 text-white shadow-amber-500/20'
                      : 'bg-stone-300 dark:bg-stone-800 text-stone-600'
                  }`}
                >
                  <i
                    className={`fa-solid ${
                      passedSession ? 'fa-trophy animate-bounce' : 'fa-rotate-left'
                    }`}
                  ></i>
                </div>
                {passedSession && (
                  <span className="absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-black bg-emerald-600 text-white shadow-md">
                    LULUS!
                  </span>
                )}
              </div>

              {/* Title & Message */}
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-serif font-black text-slate-950 dark:text-amber-200">
                  {passedSession ? t.quizResultCongratTitle : t.quizResultFailTitle}
                </h2>
                <p className="text-base text-slate-800 dark:text-slate-200 max-w-md mx-auto leading-relaxed font-semibold">
                  {passedSession ? t.quizResultPassedMsg : t.quizResultTryAgainMsg}
                </p>
              </div>

              {/* Detailed Score Breakdown Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="neu-inset p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30">
                  <div className="text-3xl font-black text-amber-800 dark:text-amber-400 font-mono">
                    {currentScore}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-black mt-0.5">
                    {t.quizResultScore}
                  </div>
                </div>

                <div className="neu-inset p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30">
                  <div className="text-3xl font-black text-emerald-800 dark:text-emerald-400 font-mono">
                    {correctCount}/5
                  </div>
                  <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-black mt-0.5">
                    Jawapan Betul
                  </div>
                </div>

                <div className="neu-inset p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30">
                  <div className="text-3xl font-black text-amber-600 dark:text-amber-400 font-mono">
                    {fastBonusCount}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-black mt-0.5">
                    ⚡ Bonus Pantas
                  </div>
                </div>
              </div>

              {/* Next Level Unlock Notification */}
              {passedSession && currentLevel < QUIZ_CONFIG.TOTAL_LEVELS && (
                <div className="p-4 rounded-2xl bg-teal-100 dark:bg-teal-950/70 border-2 border-teal-600/30 text-teal-950 dark:text-teal-200 text-sm font-black flex items-center justify-center gap-2">
                  <i className="fa-solid fa-unlock-keyhole text-amber-500"></i>
                  <span>Tahap {currentLevel + 1} kini telah dibuka untuk anda!</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                {passedSession && currentLevel < QUIZ_CONFIG.TOTAL_LEVELS && (
                  <button
                    onClick={() => startLevel(currentLevel + 1)}
                    className="neu-btn-primary w-full py-3.5 rounded-2xl font-black text-base flex items-center justify-center gap-2.5 shadow-lg"
                  >
                    <span>{t.quizBtnNextLevel}</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    onClick={() => startLevel(currentLevel)}
                    className="neu-btn py-3.5 rounded-2xl font-black text-sm text-teal-950 dark:text-amber-300 flex items-center justify-center gap-2 border border-white/70 dark:border-white/10"
                  >
                    <i className="fa-solid fa-rotate-right"></i>
                    <span>{t.quizBtnRetry}</span>
                  </button>

                  <button
                    onClick={() => setGameState('lobby')}
                    className="neu-btn py-3.5 rounded-2xl font-black text-sm text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2 border border-white/70 dark:border-white/10"
                  >
                    <i className="fa-solid fa-layer-group"></i>
                    <span>{t.quizBtnSelectLevel}</span>
                  </button>
                </div>

                <button
                  onClick={onNavigateToHadis40}
                  className="w-full py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:text-teal-950 dark:hover:text-amber-300 transition-colors flex items-center justify-center gap-1.5 font-bold"
                >
                  <i className="fa-solid fa-book-open"></i>
                  <span>{t.quizBtnBackToHadis}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-black/10 dark:border-white/10 py-4 px-6 text-center text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
        <p>{t.footerCopyright} • {t.footerDevCredit}</p>
      </footer>
    </div>
  );
}

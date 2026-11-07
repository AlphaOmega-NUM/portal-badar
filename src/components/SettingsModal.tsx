import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, translations } from '../data/translations';

export type ArabicFontSize = 'normal' | 'medium' | 'large';

const DEV_PASSWORD = 'hakim100907';
const QUIZ_STORAGE_KEY = 'badar_hadis_quiz_progress_v1';

interface QuizProgressData {
  unlockedLevels: number[];
  levelHighScores: Record<number, number>;
  levelStars: Record<number, number>;
}

function getStoredQuizProgress(): QuizProgressData {
  if (typeof window === 'undefined') {
    return { unlockedLevels: [1], levelHighScores: {}, levelStars: {} };
  }
  try {
    const raw = localStorage.getItem(QUIZ_STORAGE_KEY);
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

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  arabicFontSize: ArabicFontSize;
  onFontSizeChange: (size: ArabicFontSize) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  language,
  onLanguageChange,
  isDarkMode,
  onToggleDarkMode,
  arabicFontSize,
  onFontSizeChange,
}) => {
  const t = translations[language];

  // Dev Tools State
  const [isDevUnlocked, setIsDevUnlocked] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('badar_dev_unlocked') === 'true';
    }
    return false;
  });
  const [isDevBarRevealed, setIsDevBarRevealed] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('badar_dev_unlocked') === 'true';
    }
    return false;
  });
  const [gearClickCount, setGearClickCount] = useState<number>(0);
  const [devPasswordInput, setDevPasswordInput] = useState<string>('');
  const [showDevPassword, setShowDevPassword] = useState<boolean>(false);
  const [devError, setDevError] = useState<string>('');
  const [devToast, setDevToast] = useState<string>('');
  const [quizProgress, setQuizProgress] = useState<QuizProgressData>(getStoredQuizProgress);

  // Sync quiz progress whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setQuizProgress(getStoredQuizProgress());
      setDevError('');
      setDevToast('');
      setGearClickCount(0);
      // If already unlocked from a previous action in this session, keep revealed
      if (typeof window !== 'undefined' && sessionStorage.getItem('badar_dev_unlocked') === 'true') {
        setIsDevBarRevealed(true);
        setIsDevUnlocked(true);
      }
    }
  }, [isOpen]);

  const handleGearClick = () => {
    if (isDevBarRevealed) return;
    const nextCount = gearClickCount + 1;
    if (nextCount >= 5) {
      setIsDevBarRevealed(true);
      setGearClickCount(0);
      setDevToast('Mod Pembangun Diaktifkan! Sila masukkan kata laluan.');
      setTimeout(() => setDevToast(''), 3500);
    } else {
      setGearClickCount(nextCount);
    }
  };

  const updateQuizProgress = (newData: QuizProgressData, message: string) => {
    setQuizProgress(newData);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(newData));
        window.dispatchEvent(new CustomEvent('badar_quiz_progress_updated', { detail: newData }));
      } catch {
        // ignore
      }
    }
    setDevToast(message);
    setTimeout(() => setDevToast(''), 3000);
  };

  const handleUnlockDev = (e: React.FormEvent) => {
    e.preventDefault();
    if (devPasswordInput.trim() === DEV_PASSWORD) {
      setIsDevUnlocked(true);
      setIsDevBarRevealed(true);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('badar_dev_unlocked', 'true');
      }
      setDevError('');
      setDevPasswordInput('');
      setDevToast('Akses Pembangun Dibenarkan!');
      setTimeout(() => setDevToast(''), 3000);
    } else {
      setDevError('Kata laluan tidak sah! Sila cuba lagi.');
    }
  };

  const handleLockDev = () => {
    setIsDevUnlocked(false);
    setIsDevBarRevealed(false);
    setGearClickCount(0);
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('badar_dev_unlocked');
    }
    setDevToast('');
    setDevError('');
  };

  const handleUnlockAllLevels = () => {
    const all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const updated: QuizProgressData = {
      ...quizProgress,
      unlockedLevels: all,
    };
    updateQuizProgress(updated, 'Semua 10 tahap kuiz berjaya dibuka!');
  };

  const handleResetAllProgress = () => {
    const resetData: QuizProgressData = {
      unlockedLevels: [1],
      levelHighScores: {},
      levelStars: {},
    };
    updateQuizProgress(resetData, 'Kemajuan kuiz berjaya diset semula ke Tahap 1!');
  };

  const handleToggleSpecificLevel = (level: number) => {
    if (level === 1) return; // Tahap 1 sentiasa terbuka
    const exists = quizProgress.unlockedLevels.includes(level);
    let nextLevels: number[];
    if (exists) {
      nextLevels = quizProgress.unlockedLevels.filter((lvl) => lvl !== level);
    } else {
      nextLevels = [...quizProgress.unlockedLevels, level].sort((a, b) => a - b);
    }
    const updated: QuizProgressData = {
      ...quizProgress,
      unlockedLevels: nextLevels,
    };
    updateQuizProgress(updated, `Tahap ${level} ${exists ? 'dikunci' : 'dibuka'}!`);
  };

  const handleMaxStars = () => {
    const stars: Record<number, number> = {};
    for (let i = 1; i <= 10; i++) {
      stars[i] = 3;
    }
    const updated: QuizProgressData = {
      ...quizProgress,
      levelStars: stars,
    };
    updateQuizProgress(updated, 'Semua tahap telah diberikan 3 Bintang penuh!');
  };

  const handleSetMaxScore = () => {
    const scores: Record<number, number> = {};
    for (let i = 1; i <= 10; i++) {
      scores[i] = 20; // 5 questions * 4 max points (with 2x speed bonus)
    }
    const updated: QuizProgressData = {
      ...quizProgress,
      levelHighScores: scores,
    };
    updateQuizProgress(updated, 'Markah maksimum (200 mata) telah diberikan!');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg neu-raised rounded-3xl p-6 sm:p-8 border border-white/50 dark:border-white/10 z-10 space-y-6 shadow-2xl max-h-[88vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-300/40 pb-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleGearClick}
                  aria-label="Ikon Tetapan"
                  className="neu-inset w-10 h-10 rounded-xl flex items-center justify-center text-teal-800 dark:text-teal-300 text-lg cursor-pointer transition-transform duration-200 active:scale-90 select-none"
                  title={!isDevBarRevealed ? (gearClickCount > 0 ? `Tekan ${5 - gearClickCount} kali lagi` : 'Tetapan') : 'Alat Pembangun Dibuka'}
                >
                  <i 
                    className="fa-solid fa-gear transition-transform duration-300"
                    style={{ transform: `rotate(${gearClickCount * 72}deg)` }}
                  ></i>
                </button>
                <div>
                  <h3 className="text-lg font-black text-teal-950 dark:text-white flex items-center gap-2">
                    <span>{t.settingsTitle}</span>
                    {gearClickCount > 0 && !isDevBarRevealed && (
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-teal-800/10 dark:bg-teal-300/15 text-teal-700 dark:text-teal-300 animate-pulse">
                        {gearClickCount}/5
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.settingsSubtitle}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Tutup tetapan"
                className="neu-btn w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 hover:text-teal-900 transition"
              >
                <i className="fa-solid fa-xmark text-base"></i>
              </button>
            </div>

            {/* Section 1: Pilihan Bahasa (Language Selection) */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-teal-900 flex items-center gap-2">
                  <i className="fa-solid fa-globe text-teal-700"></i> {t.langSectionTitle}
                </label>
                <p className="text-[11px] text-slate-500">{t.langSectionDesc}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Bahasa Melayu */}
                <button
                  type="button"
                  onClick={() => onLanguageChange('ms')}
                  className={`p-3.5 rounded-2xl flex items-center gap-3 text-left transition ${
                    language === 'ms'
                      ? 'neu-inset border-2 border-teal-600/50 bg-teal-500/10'
                      : 'neu-btn hover:border hover:border-teal-400/30'
                  }`}
                >
                  <span className="text-2xl">🇲🇾</span>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-teal-950">Bahasa Melayu</h4>
                  </div>
                  {language === 'ms' && (
                    <i className="fa-solid fa-circle-check text-teal-700 ml-auto text-sm"></i>
                  )}
                </button>

                {/* English */}
                <button
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  className={`p-3.5 rounded-2xl flex items-center gap-3 text-left transition ${
                    language === 'en'
                      ? 'neu-inset border-2 border-teal-600/50 bg-teal-500/10'
                      : 'neu-btn hover:border hover:border-teal-400/30'
                  }`}
                >
                  <span className="text-2xl">🇬🇧</span>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-teal-950">English</h4>
                    <p className="text-[10px] text-slate-500">powered by David</p>
                  </div>
                  {language === 'en' && (
                    <i className="fa-solid fa-circle-check text-teal-700 ml-auto text-sm"></i>
                  )}
                </button>
              </div>
            </div>

            {/* Section 2: Tema Paparan (Theme) */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-teal-900 flex items-center gap-2">
                  <i className="fa-solid fa-palette text-teal-700"></i> {t.themeSectionTitle}
                </label>
                <p className="text-[11px] text-slate-500">{t.themeSectionDesc}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Mod Cerah */}
                <button
                  type="button"
                  onClick={() => { if (isDarkMode) onToggleDarkMode(); }}
                  className={`p-3.5 rounded-2xl flex items-center gap-3 text-left transition ${
                    !isDarkMode
                      ? 'neu-inset border-2 border-teal-600/50 bg-teal-500/10'
                      : 'neu-btn hover:border hover:border-teal-400/30'
                  }`}
                >
                  <span className="neu-raised-sm w-8 h-8 rounded-xl flex items-center justify-center text-amber-500 text-sm">
                    <i className="fa-solid fa-sun"></i>
                  </span>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-teal-950">{t.themeLight}</h4>
                    <p className="text-[10px] text-slate-500">Pencahayaan Siang</p>
                  </div>
                  {!isDarkMode && (
                    <i className="fa-solid fa-circle-check text-teal-700 ml-auto text-sm"></i>
                  )}
                </button>

                {/* Mod Gelap */}
                <button
                  type="button"
                  onClick={() => { if (!isDarkMode) onToggleDarkMode(); }}
                  className={`p-3.5 rounded-2xl flex items-center gap-3 text-left transition ${
                    isDarkMode
                      ? 'neu-inset border-2 border-teal-600/50 bg-teal-500/10'
                      : 'neu-btn hover:border hover:border-teal-400/30'
                  }`}
                >
                  <span className="neu-raised-sm w-8 h-8 rounded-xl flex items-center justify-center text-teal-300 text-sm">
                    <i className="fa-solid fa-moon"></i>
                  </span>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-teal-950">{t.themeDark}</h4>
                    <p className="text-[10px] text-slate-500">Pencahayaan Malam</p>
                  </div>
                  {isDarkMode && (
                    <i className="fa-solid fa-circle-check text-teal-700 ml-auto text-sm"></i>
                  )}
                </button>
              </div>
            </div>

            {/* Section 3: Saiz Fon Teks Arab Hadis */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-teal-900 flex items-center gap-2">
                  <i className="fa-solid fa-font text-teal-700"></i> {t.fontSizeSectionTitle}
                </label>
                <p className="text-[11px] text-slate-500">{t.fontSizeSectionDesc}</p>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {(['normal', 'medium', 'large'] as ArabicFontSize[]).map((size) => {
                  const isSelected = arabicFontSize === size;
                  const label =
                    size === 'normal'
                      ? t.fontSizeNormal
                      : size === 'medium'
                      ? t.fontSizeMedium
                      : t.fontSizeLarge;
                  const previewText = size === 'normal' ? 'بِسْمِ اللَّهِ' : size === 'medium' ? 'بِسْمِ اللَّهِ' : 'بِسْمِ اللَّهِ';
                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => onFontSizeChange(size)}
                      className={`p-3 rounded-2xl text-center transition flex flex-col items-center justify-center gap-1 ${
                        isSelected
                          ? 'neu-inset border-2 border-teal-600/50 bg-teal-500/10'
                          : 'neu-btn'
                      }`}
                    >
                      <span className="font-arabic text-sm sm:text-base text-teal-950 font-medium">
                        {previewText}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase">{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Section 4: Alat Pembangun (Dev Tools) - Tersorok secara rahsia: Hanya muncul selepas tekan ikon tetapan 5 kali */}
            <AnimatePresence>
              {(isDevBarRevealed || isDevUnlocked) && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="pt-2 border-t border-slate-300/40 dark:border-white/10 space-y-3 overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-teal-900 dark:text-teal-200 flex items-center gap-2">
                        <i className="fa-solid fa-code text-teal-700 dark:text-teal-300"></i> Alat Pembangun (Dev Tools)
                      </label>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400">
                        Akses khas kawalan tahap, skor, dan data kuiz.
                      </p>
                    </div>

                    {isDevUnlocked && (
                      <button
                        type="button"
                        onClick={handleLockDev}
                        className="text-[11px] font-bold text-rose-600 hover:text-rose-700 dark:text-rose-400 underline flex items-center gap-1"
                      >
                        <i className="fa-solid fa-lock text-[10px]"></i> Kunci Semula
                      </button>
                    )}
                  </div>

                  {!isDevUnlocked ? (
                    /* Password Entry Form */
                    <form onSubmit={handleUnlockDev} className="neu-card p-4 rounded-2xl space-y-3 border border-white/60 dark:border-white/10">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                        <i className="fa-solid fa-key text-amber-500"></i>
                        <span>Masukkan Kata Laluan Pembangun:</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="relative flex-1">
                          <input
                            type={showDevPassword ? 'text' : 'password'}
                            value={devPasswordInput}
                            onChange={(e) => {
                              setDevPasswordInput(e.target.value);
                              if (devError) setDevError('');
                            }}
                            placeholder="Kata laluan dev..."
                            className="w-full neu-inset px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-mono text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none border border-black/5 dark:border-white/5"
                          />
                          <button
                            type="button"
                            onClick={() => setShowDevPassword(!showDevPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-teal-900 dark:hover:text-teal-200 text-xs"
                            title={showDevPassword ? 'Sembunyi' : 'Papar'}
                          >
                            <i className={`fa-solid ${showDevPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                          </button>
                        </div>

                        <button
                          type="submit"
                          className="neu-btn-primary px-4 py-2.5 rounded-xl text-xs font-black flex items-center gap-1.5 shrink-0 shadow-sm"
                        >
                          <i className="fa-solid fa-unlock text-[11px]"></i>
                          <span>Akses</span>
                        </button>
                      </div>

                      {devError && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5"
                        >
                          <i className="fa-solid fa-circle-exclamation text-xs"></i>
                          {devError}
                        </motion.p>
                      )}
                    </form>
                  ) : (
                    /* Unlocked Dev Panel */
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-4 neu-card p-4 sm:p-5 rounded-2xl border border-teal-600/30 dark:border-teal-400/20 bg-teal-500/5"
                    >
                      {/* Status Banner */}
                      <div className="flex items-center justify-between text-xs pb-3 border-b border-black/10 dark:border-white/10">
                        <span className="flex items-center gap-1.5 font-black text-emerald-700 dark:text-emerald-400">
                          <i className="fa-solid fa-shield-check text-sm"></i>
                          Akses Dibenarkan (Hakim)
                        </span>
                        <span className="font-mono text-[11px] font-bold text-slate-700 dark:text-slate-300">
                          {quizProgress.unlockedLevels.length}/10 Tahap • {Object.values(quizProgress.levelHighScores).reduce((a, b) => a + b, 0)} Mata
                        </span>
                      </div>

                      {/* Toast Feedback */}
                      {devToast && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-500/50 text-emerald-900 dark:text-emerald-200 text-xs font-black flex items-center gap-2"
                        >
                          <i className="fa-solid fa-circle-check text-emerald-600"></i>
                          <span>{devToast}</span>
                        </motion.div>
                      )}

                      {/* Main Actions */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {/* 1. Unlock All Levels */}
                        <button
                          type="button"
                          onClick={handleUnlockAllLevels}
                          className="neu-btn p-3 rounded-xl flex items-center gap-2.5 text-left border hover:border-emerald-500 transition group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                            <i className="fa-solid fa-lock-open text-xs"></i>
                          </div>
                          <div>
                            <div className="font-black text-xs text-slate-950 dark:text-white group-hover:text-emerald-700">
                              Buka Semua Tahap
                            </div>
                            <div className="text-[10px] text-slate-600 dark:text-slate-400">
                              Buka tahap 1 hingga 10
                            </div>
                          </div>
                        </button>

                        {/* 2. Reset All Progress */}
                        <button
                          type="button"
                          onClick={handleResetAllProgress}
                          className="neu-btn p-3 rounded-xl flex items-center gap-2.5 text-left border hover:border-rose-500 transition group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center shrink-0">
                            <i className="fa-solid fa-rotate-left text-xs"></i>
                          </div>
                          <div>
                            <div className="font-black text-xs text-slate-950 dark:text-white group-hover:text-rose-700">
                              Reset Tahap Kuiz
                            </div>
                            <div className="text-[10px] text-slate-600 dark:text-slate-400">
                              Kembali ke Tahap 1 (0 mata)
                            </div>
                          </div>
                        </button>

                        {/* 3. Max Stars for All Levels */}
                        <button
                          type="button"
                          onClick={handleMaxStars}
                          className="neu-btn p-3 rounded-xl flex items-center gap-2.5 text-left border hover:border-amber-500 transition group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0">
                            <i className="fa-solid fa-star text-xs"></i>
                          </div>
                          <div>
                            <div className="font-black text-xs text-slate-950 dark:text-white group-hover:text-amber-600">
                              3 Bintang Penuh
                            </div>
                            <div className="text-[10px] text-slate-600 dark:text-slate-400">
                              Set 3 bintang semua tahap
                            </div>
                          </div>
                        </button>

                        {/* 4. Set Max Score (200 pts) */}
                        <button
                          type="button"
                          onClick={handleSetMaxScore}
                          className="neu-btn p-3 rounded-xl flex items-center gap-2.5 text-left border hover:border-teal-500 transition group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-teal-700 text-white flex items-center justify-center shrink-0">
                            <i className="fa-solid fa-trophy text-xs"></i>
                          </div>
                          <div>
                            <div className="font-black text-xs text-slate-950 dark:text-white group-hover:text-teal-700">
                              Maksimumkan Mata (200)
                            </div>
                            <div className="text-[10px] text-slate-600 dark:text-slate-400">
                              20 mata setiap tahap
                            </div>
                          </div>
                        </button>
                      </div>

                      {/* Individual Level Toggle (1 - 10) */}
                      <div className="space-y-2 pt-2 border-t border-black/10 dark:border-white/10">
                        <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
                          <span>Buka/Kunci Tahap Tertentu:</span>
                          <span className="text-[10px] text-slate-500">(Tekan nombor untuk tukar)</span>
                        </div>

                        <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((lvl) => {
                            const isUnlocked = quizProgress.unlockedLevels.includes(lvl);
                            return (
                              <button
                                key={lvl}
                                type="button"
                                onClick={() => handleToggleSpecificLevel(lvl)}
                                disabled={lvl === 1}
                                title={lvl === 1 ? 'Tahap 1 sentiasa dibuka' : `Tekan untuk ${isUnlocked ? 'kunci' : 'buka'} Tahap ${lvl}`}
                                className={`h-9 rounded-xl font-mono text-xs font-black transition flex flex-col items-center justify-center relative ${
                                  isUnlocked
                                    ? 'bg-teal-700 text-white shadow-sm'
                                    : 'neu-inset text-slate-400 opacity-60'
                                } ${lvl === 1 ? 'cursor-not-allowed' : 'hover:scale-105'}`}
                              >
                                <span>{lvl}</span>
                                <span className="text-[8px] leading-none opacity-80">
                                  {isUnlocked ? '✓' : '🔒'}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Live JSON / Status Details */}
                      <div className="neu-inset p-3 rounded-xl space-y-1 text-[11px] font-mono text-slate-700 dark:text-slate-300 border border-black/5 dark:border-white/5 bg-white/40 dark:bg-black/20">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Tahap Terbuka:</span>
                          <span className="font-bold text-teal-800 dark:text-teal-300">[{quizProgress.unlockedLevels.join(', ')}]</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Bintang Terkumpul:</span>
                          <span className="font-bold text-amber-600 dark:text-amber-400">
                            {Object.values(quizProgress.levelStars).reduce((a, b) => a + b, 0)} / 30 ★
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Jumlah Mata Kuiz:</span>
                          <span className="font-bold text-emerald-700 dark:text-emerald-400">
                            {Object.values(quizProgress.levelHighScores).reduce((a, b) => a + b, 0)} pts
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer Action */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full neu-btn-primary py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <i className="fa-solid fa-check"></i>
                <span>{t.closeBtn}</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

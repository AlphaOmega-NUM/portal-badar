import { QuizOption, QuizQuestion, QuizLevel, quizLevels1to5 } from './quizLevels1to5';
import { quizLevels6to10 } from './quizLevels6to10';

export type { QuizOption, QuizQuestion, QuizLevel };

export const allQuizLevels: QuizLevel[] = [
  ...quizLevels1to5,
  ...quizLevels6to10
];

export const QUIZ_CONFIG = {
  TOTAL_LEVELS: 10,
  QUESTIONS_PER_LEVEL: 5,
  BASE_POINTS_PER_QUESTION: 2,
  SPEED_BONUS_MULTIPLIER: 2, // 2x points = 4 points total
  SPEED_BONUS_THRESHOLD_SECONDS: 8, // Answered within 8s gets 2x bonus
  QUESTION_TIME_LIMIT_SECONDS: 20, // 20s per question
  PASSING_SCORE: 6 // 3 correct out of 5 minimum to pass level
};

/**
 * Fisher-Yates shuffle array
 */
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Get a randomized session of 5 questions for a given level
 */
export function getQuizSession(levelNo: number, count: number = QUIZ_CONFIG.QUESTIONS_PER_LEVEL): QuizQuestion[] {
  const levelData = allQuizLevels.find(l => l.level === levelNo);
  if (!levelData) return [];
  const pool = levelData.soalanPool;
  const shuffled = shuffleArray(pool);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Calculate points for an answer:
 * If correct:
 * - within speed threshold: base * multiplier (4 points)
 * - else: base points (2 points)
 * If incorrect: 0 points
 */
export function calculatePoints(
  isCorrect: boolean,
  timeTakenSeconds: number,
  basePoints: number = QUIZ_CONFIG.BASE_POINTS_PER_QUESTION,
  speedBonusMultiplier: number = QUIZ_CONFIG.SPEED_BONUS_MULTIPLIER,
  speedThreshold: number = QUIZ_CONFIG.SPEED_BONUS_THRESHOLD_SECONDS
): { points: number; isFastBonus: boolean } {
  if (!isCorrect) {
    return { points: 0, isFastBonus: false };
  }
  const isFastBonus = timeTakenSeconds <= speedThreshold;
  const points = isFastBonus ? basePoints * speedBonusMultiplier : basePoints;
  return { points, isFastBonus };
}

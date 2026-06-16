import type { ToneKey } from './content';

/**
 * 장식용 tone 필드를 amber 하우스의 소프트 텍스트 액센트 3색 순환으로 매핑.
 * A=amber(term-accent), B=sky, C=violet. 크롬/배경은 중립(term-*)으로 통일.
 */
export const softAccentByTone: Record<ToneKey, string> = {
  amber: 'text-[var(--term-accent)]',
  blue: 'text-[var(--term-accent)]',
  emerald: 'text-[var(--term-accent)]',
  sky: 'text-sky-600 dark:text-sky-300',
  cyan: 'text-sky-600 dark:text-sky-300',
  indigo: 'text-sky-600 dark:text-sky-300',
  violet: 'text-violet-600 dark:text-violet-300',
  teal: 'text-violet-600 dark:text-violet-300',
};

/**
 * 작은 점/마커용 소프트 솔리드. softAccentByTone과 짝.
 */
export const softDotByTone: Record<ToneKey, string> = {
  amber: 'bg-[var(--term-accent)]',
  blue: 'bg-[var(--term-accent)]',
  emerald: 'bg-[var(--term-accent)]',
  sky: 'bg-sky-400 dark:bg-sky-500',
  cyan: 'bg-sky-400 dark:bg-sky-500',
  indigo: 'bg-sky-400 dark:bg-sky-500',
  violet: 'bg-violet-400 dark:bg-violet-500',
  teal: 'bg-violet-400 dark:bg-violet-500',
};

/**
 * 다이어그램 SVG 점선 커넥터용 소프트 stroke 색.
 */
export const softStrokeByTone: Record<ToneKey, string> = {
  amber: 'text-[var(--term-accent)]',
  blue: 'text-[var(--term-accent)]',
  emerald: 'text-[var(--term-accent)]',
  sky: 'text-sky-400 dark:text-sky-600',
  cyan: 'text-sky-400 dark:text-sky-600',
  indigo: 'text-sky-400 dark:text-sky-600',
  violet: 'text-violet-400 dark:text-violet-600',
  teal: 'text-violet-400 dark:text-violet-600',
};

import type { Tone } from './content';

export type ToneClasses = {
  iconBg: string;
  iconText: string;
  border: string;
  hoverBorder: string;
  num: string;
  text: string;
  chip: string;
  ribbon: string;
};

/** 중립 크롬 공통값 — 색은 텍스트 액센트와 작은 ribbon 바에만 입힌다. */
const chrome = {
  iconBg: 'bg-[var(--term-surface)] border border-[var(--term-border)]',
  border: 'border-[var(--term-border)]',
  hoverBorder: 'hover:border-[var(--term-accent)]',
};

const surfaceChip = 'bg-[var(--term-surface)] border border-[var(--term-border)]';

/** A: amber(테마 액센트) */
const accentA: ToneClasses = {
  ...chrome,
  iconText: 'text-[var(--term-accent)]',
  num: `${surfaceChip} text-[var(--term-accent)]`,
  text: 'text-[var(--term-accent)]',
  chip: `${surfaceChip} text-[var(--term-accent)]`,
  ribbon: 'bg-[var(--term-accent)]',
};

/** B: sky */
const accentB: ToneClasses = {
  ...chrome,
  iconText: 'text-sky-600 dark:text-sky-300',
  num: `${surfaceChip} text-sky-600 dark:text-sky-300`,
  text: 'text-sky-600 dark:text-sky-300',
  chip: `${surfaceChip} text-sky-600 dark:text-sky-300`,
  ribbon: 'bg-sky-400 dark:bg-sky-500',
};

/** C: violet */
const accentC: ToneClasses = {
  ...chrome,
  iconText: 'text-violet-600 dark:text-violet-300',
  num: `${surfaceChip} text-violet-600 dark:text-violet-300`,
  text: 'text-violet-600 dark:text-violet-300',
  chip: `${surfaceChip} text-violet-600 dark:text-violet-300`,
  ribbon: 'bg-violet-400 dark:bg-violet-500',
};

/** 선언 순서대로 A·B·C 순환 — 중립 크롬 위 부드러운 3색 액센트. */
export const tones: Record<Tone, ToneClasses> = {
  blue: accentA,
  teal: accentB,
  lavender: accentC,
  cyan: accentA,
  mint: accentB,
  coral: accentC,
  indigo: accentA,
};

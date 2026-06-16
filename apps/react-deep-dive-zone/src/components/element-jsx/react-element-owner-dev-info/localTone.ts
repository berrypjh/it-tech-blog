import type { ToneKey } from '../../shared/tones';

/** A/B/C 3색 순환을 위한 로컬 토큰. 장식은 중립 크롬, 텍스트만 색을 띤다. */
export type LocalTone = {
  text: string;
  chip: string;
};

const A: LocalTone = {
  text: 'text-[var(--term-accent)]',
  chip: 'bg-[var(--term-surface)] text-[var(--term-accent)] border-[var(--term-border)]',
};

const B: LocalTone = {
  text: 'text-sky-600 dark:text-sky-300',
  chip: 'bg-[var(--term-surface)] text-sky-600 dark:text-sky-300 border-[var(--term-border)]',
};

const C: LocalTone = {
  text: 'text-violet-600 dark:text-violet-300',
  chip: 'bg-[var(--term-surface)] text-violet-600 dark:text-violet-300 border-[var(--term-border)]',
};

/** content.ts의 tone 값을 amber 하우스의 A/B/C로 매핑한다. */
export const localTone = (tone: ToneKey): LocalTone => {
  if (tone === 'sky' || tone === 'blue' || tone === 'cyan') return B;
  if (tone === 'violet' || tone === 'indigo') return C;
  return A; // teal / emerald / amber
};

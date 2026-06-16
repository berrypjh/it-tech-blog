import type { ToneKey } from './content';

/**
 * 페이지 로컬 톤 헬퍼.
 * content의 tone 값을 amber 터미널 하우스에 맞는 소프트 액센트 + 중립 크롬으로 매핑한다.
 * 액센트는 텍스트/점에만 쓰고, 크롬(테두리/배경)은 항상 term 토큰을 유지한다.
 */

type Accent = 'a' | 'b' | 'c';

const accentOf = (tone: ToneKey): Accent => {
  if (tone === 'sky' || tone === 'blue' || tone === 'cyan') return 'b';
  if (tone === 'violet' || tone === 'indigo') return 'c';
  return 'a';
};

const text: Record<Accent, string> = {
  a: 'text-[var(--term-accent)]',
  b: 'text-sky-600 dark:text-sky-300',
  c: 'text-violet-600 dark:text-violet-300',
};

const dot: Record<Accent, string> = {
  a: 'bg-[var(--term-accent)]',
  b: 'bg-sky-400 dark:bg-sky-500',
  c: 'bg-violet-400 dark:bg-violet-500',
};

const chrome = 'bg-[var(--term-surface)] border border-[var(--term-border)]';
const borderHover = 'hover:border-[var(--term-accent)]';

export type LocalTone = {
  text: string;
  dot: string;
  chip: string;
  borderHover: string;
};

export const localTone = (tone: ToneKey): LocalTone => {
  const a = accentOf(tone);
  return {
    text: text[a],
    dot: dot[a],
    chip: chrome,
    borderHover,
  };
};

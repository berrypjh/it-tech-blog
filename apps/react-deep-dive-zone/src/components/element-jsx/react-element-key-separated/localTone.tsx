import { cn } from '@it-tech-blog/utils';

import type { ToneKey } from './content';

/**
 * 페이지 로컬 톤 헬퍼.
 * content.ts의 tone 값을 amber 터미널 하우스에 맞는 소프트 액센트 + 중립 크롬으로 매핑한다.
 * 액센트는 텍스트/작은 점에만 쓰고, 크롬(테두리/배경)은 항상 term 토큰을 유지한다.
 * shared 톤 토큰/컴포넌트 대신 이 헬퍼를 소비한다.
 */

type Accent = 'a' | 'b' | 'c';

const accentOf = (tone: ToneKey): Accent => {
  if (tone === 'sky' || tone === 'blue' || tone === 'cyan') return 'b';
  if (tone === 'violet' || tone === 'indigo') return 'c';
  return 'a';
};

const accentText: Record<Accent, string> = {
  a: 'text-[var(--term-accent)]',
  b: 'text-sky-600 dark:text-sky-300',
  c: 'text-violet-600 dark:text-violet-300',
};

const accentDot: Record<Accent, string> = {
  a: 'bg-[var(--term-accent)]',
  b: 'bg-sky-400 dark:bg-sky-500',
  c: 'bg-violet-400 dark:bg-violet-500',
};

const chrome = 'bg-[var(--term-surface)] border border-[var(--term-border)]';
const borderHover = 'hover:border-[var(--term-accent)]';

/** tone → 소프트 텍스트 액센트 클래스 */
export const toneText = (tone: ToneKey) => accentText[accentOf(tone)];

/** tone → 작은 점/ribbon 솔리드 클래스(작은 장식 전용) */
export const toneDot = (tone: ToneKey) => accentDot[accentOf(tone)];

/** 중립 크롬 칩(텍스트만 액센트) */
export const toneChip = (tone: ToneKey) => cn(chrome, toneText(tone));

/** hover 시 액센트 테두리 */
export const toneBorderHover = () => borderHover;

type Size = 'sm' | 'md';

const sizeClass: Record<Size, string> = {
  sm: 'w-9 h-9',
  md: 'w-11 h-11',
};

type IconBoxProps = {
  tone: ToneKey;
  size?: Size;
  children: React.ReactNode;
  className?: string;
};

/** 중립 크롬 아이콘 박스(텍스트만 액센트) */
export const ToneIconBox = ({ tone, size = 'md', children, className }: IconBoxProps) => (
  <span
    aria-hidden="true"
    className={cn(
      'inline-flex items-center justify-center rounded-md border',
      'bg-[var(--term-surface)] border-[var(--term-border)]',
      toneText(tone),
      sizeClass[size],
      className,
    )}
  >
    {children}
  </span>
);

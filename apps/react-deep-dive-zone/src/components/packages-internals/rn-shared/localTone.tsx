import { cn } from '@it-tech-blog/utils';

import type { ToneKey } from './content';

/**
 * 페이지 로컬 톤 헬퍼.
 * shared 톤 토큰 대신 amber 하우스 + 소프트 텍스트 액센트(A/B/C)와
 * 중립 크롬을 적용한다. content.ts의 tone 필드는 건드리지 않는다.
 */

type Accent = 'A' | 'B' | 'C';

const toneToAccent: Record<ToneKey, Accent> = {
  teal: 'A',
  emerald: 'A',
  amber: 'A',
  sky: 'B',
  blue: 'B',
  cyan: 'B',
  violet: 'C',
  indigo: 'C',
};

const accentText: Record<Accent, string> = {
  A: 'text-[var(--term-accent)]',
  B: 'text-sky-600 dark:text-sky-300',
  C: 'text-violet-600 dark:text-violet-300',
};

/** tone → 소프트 텍스트 액센트 클래스 */
export const toneText = (tone: ToneKey) => accentText[toneToAccent[tone]];

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

import { cn } from '@it-tech-blog/utils';

import type { ReactNode } from 'react';

import type { ToneKey } from './content';

/**
 * 페이지 로컬 톤 헬퍼.
 * content.ts의 tone 필드를 소프트 텍스트 액센트 + 중립 크롬으로 매핑한다.
 * A=amber 하우스(term-accent), B=sky, C=violet 3색 순환.
 */
type LocalTone = {
  /** 텍스트 액센트 */
  text: string;
  /** 작은 점/리본 solid */
  dot: string;
  /** 중립 크롬 hover */
  borderHover: string;
  /** 배지/아이콘 박스: 중립 표면 + 액센트 텍스트 */
  chip: string;
};

const A: LocalTone = {
  text: 'text-[var(--term-accent)]',
  dot: 'bg-[var(--term-accent)]',
  borderHover: 'hover:border-[var(--term-accent)]',
  chip: 'bg-[var(--term-surface)] border-[var(--term-border)] text-[var(--term-accent)]',
};

const B: LocalTone = {
  text: 'text-sky-600 dark:text-sky-300',
  dot: 'bg-sky-400 dark:bg-sky-500',
  borderHover: 'hover:border-[var(--term-accent)]',
  chip: 'bg-[var(--term-surface)] border-[var(--term-border)] text-sky-600 dark:text-sky-300',
};

const C: LocalTone = {
  text: 'text-violet-600 dark:text-violet-300',
  dot: 'bg-violet-400 dark:bg-violet-500',
  borderHover: 'hover:border-[var(--term-accent)]',
  chip: 'bg-[var(--term-surface)] border-[var(--term-border)] text-violet-600 dark:text-violet-300',
};

const localToneByKey: Record<ToneKey, LocalTone> = {
  teal: A,
  emerald: A,
  amber: A,
  sky: B,
  blue: B,
  cyan: B,
  violet: C,
  indigo: C,
};

export const localTone = (tone: ToneKey): LocalTone => localToneByKey[tone];

type IconBoxSize = 'sm' | 'md';

const iconBoxSize: Record<IconBoxSize, string> = {
  sm: 'w-9 h-9',
  md: 'w-11 h-11',
};

type LocalToneIconBoxProps = {
  tone: ToneKey;
  size?: IconBoxSize;
  children: ReactNode;
  className?: string;
};

/** 중립 표면 크롬 + 톤 텍스트 액센트 아이콘 박스. */
export const LocalToneIconBox = ({
  tone,
  size = 'md',
  children,
  className,
}: LocalToneIconBoxProps) => (
  <span
    aria-hidden="true"
    className={cn(
      'inline-flex items-center justify-center rounded-md border',
      iconBoxSize[size],
      localTone(tone).chip,
      className,
    )}
  >
    {children}
  </span>
);

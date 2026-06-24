import { cn } from '@it-tech-blog/utils';

import type { ReactNode } from 'react';

type Size = 'sm' | 'md';

const sizeClass: Record<Size, string> = {
  sm: 'w-7 h-7 border text-xxsm',
  md: 'w-9 h-9 border-2 text-sm',
};

type Props = {
  children: ReactNode;
  size?: Size;
  className?: string;
};

export const StepNumberBadge = ({ children, size = 'sm', className }: Props) => (
  <span
    aria-hidden="true"
    className={cn(
      'inline-flex shrink-0 items-center justify-center rounded-full',
      'bg-[var(--term-surface)] border-[var(--term-border)] text-[var(--term-accent)] font-bold tabular-nums',
      sizeClass[size],
      className,
    )}
  >
    {children}
  </span>
);

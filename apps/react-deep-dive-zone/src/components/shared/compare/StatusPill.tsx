import { cn } from '@it-tech-blog/utils';

import type { ReactNode } from 'react';

type Props = {
  /** 좌측 아이콘(`h-3.5 w-3.5` 크기로 전달). 색은 tone(currentColor)을 따른다. */
  icon: ReactNode;
  /** 의미 상태 색 텍스트 클래스(예: 'text-rose-600 dark:text-rose-300', 'text-[var(--term-accent)]'). */
  tone: string;
  children: ReactNode;
};

/** 비교 패널 사이드 라벨 알약: 아이콘 + 대문자 라벨, surface 배경. 의미색은 tone으로. */
export const StatusPill = ({ icon, tone, children }: Props) => (
  <span
    className={cn(
      'inline-flex items-center gap-1.5 self-start rounded-full border px-2.5 py-1',
      'bg-[var(--term-surface)] border-[var(--term-border)]',
      'text-[10px] font-bold uppercase tracking-wider',
      tone,
    )}
  >
    {icon}
    {children}
  </span>
);

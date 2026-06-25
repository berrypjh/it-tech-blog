import { cn } from '@it-tech-blog/utils';

import type { ReactNode } from 'react';

/** 카드 셸·아이콘 배지·헤더 텍스트에 입힐 톤 클래스 번들. */
type ToneClasses = { card: string; iconBadge: string; header: string };

type Props = {
  tone: ToneClasses;
  /** 헤더 원형 배지에 담길 아이콘(`h-3.5 w-3.5` 크기로 전달). */
  icon: ReactNode;
  title: ReactNode;
  /** 헤더 h3 id(+ article aria-labelledby). a11y 연결용. */
  headerId?: string;
  /** 본문(보통 점 불릿 `<ul>`). 섹션마다 자유롭게 구성. */
  children: ReactNode;
};

/**
 * 1:1 비교 패널 공통 셸.
 * 흰 배경 카드 + dashed 밑줄 헤더(원형 아이콘 배지 + 제목) + 본문 슬롯.
 */
export const ComparePanel = ({ tone, icon, title, headerId, children }: Props) => (
  <article
    aria-labelledby={headerId}
    className={cn(
      'flex flex-col gap-md rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg transition-all hover:-translate-y-px',
      tone.card,
    )}
  >
    <header className="flex items-center gap-2 pb-sm border-b border-dashed border-[var(--term-border)]">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-7 h-7 rounded-full',
          tone.iconBadge,
        )}
      >
        {icon}
      </span>
      <h3
        id={headerId}
        className={cn('text-xsm sm:text-sm font-bold tracking-tight break-keep', tone.header)}
      >
        {title}
      </h3>
    </header>

    {children}
  </article>
);

import type { ReactNode } from 'react';

type Props = {
  /** 중앙 원형 배지에 담길 아이콘(`h-5 w-5` 크기로 전달). */
  icon: ReactNode;
  headline: ReactNode;
  sub: ReactNode;
};

/**
 * 1:1 비교 패널 사이의 중앙 브리지 메시지.
 * 원형 아이콘 배지 + 굵은 헤드라인 + 보조 설명.
 */
export const CompareBridge = ({ icon, headline, sub }: Props) => (
  <div className="flex flex-col items-center justify-center gap-md text-center lg:px-sm py-md">
    <span
      aria-hidden="true"
      className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)] shadow-[0_2px_0_var(--term-border)]"
    >
      {icon}
    </span>
    <p className="text-md sm:text-lg font-bold tracking-tight text-[var(--term-fg)] break-keep leading-snug whitespace-pre-line">
      {headline}
    </p>
    <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">{sub}</p>
  </div>
);

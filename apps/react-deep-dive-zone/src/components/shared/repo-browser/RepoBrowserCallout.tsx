import { cn } from '@it-tech-blog/utils';

type Props = {
  /** 좌측 원형 배지에 담길 아이콘 */
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

/**
 * 디테일 패널 하단 콜아웃 박스. 원형 아이콘 + 본문.
 * `mt-auto`로 패널 바닥에 붙어 정렬을 맞춘다.
 */
export const RepoBrowserCallout = ({ icon, children, className }: Props) => (
  <aside
    className={cn(
      'mt-auto flex items-start gap-sm rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] p-sm sm:p-md',
      className,
    )}
  >
    <span
      aria-hidden="true"
      className="inline-flex shrink-0 items-center justify-center w-7 h-7 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]"
    >
      {icon}
    </span>
    <p className="text-xsm text-[var(--term-fg)] leading-relaxed break-keep">{children}</p>
  </aside>
);

import { cn } from '@it-tech-blog/utils';

type Props = {
  /** 좌측 사각 배지에 담길 아이콘(`h-4 w-4` 크기로 전달). */
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

/**
 * 섹션 하단 보조 노트 배너. 사각 아이콘 박스 + 본문 한두 줄.
 * 아이콘과 본문은 항상 세로 중앙 정렬.
 */
export const SectionNote = ({ icon, children, className }: Props) => (
  <div
    className={cn(
      'flex items-center gap-sm rounded-lg border px-md py-md',
      'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
      className,
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-8 h-8 rounded-md border shrink-0',
        'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]',
      )}
    >
      {icon}
    </span>
    <p className="text-xsm sm:text-sm leading-snug font-medium break-keep">{children}</p>
  </div>
);

import { cn } from '@it-tech-blog/utils';

type Size = 'sm' | 'md';

type Props = {
  /** sm: px-2 py-1 text-[10px] (default), md: px-2.5 py-1 text-xxsm */
  size?: Size;
  /** dot 색 클래스. 미지정 시 var(--term-accent) */
  dotClassName?: string;
  /** dot을 숨기고 아이콘/장식을 children에 직접 넣을 때 사용 */
  showDot?: boolean;
  className?: string;
  children: React.ReactNode;
};

const sizeClass: Record<Size, string> = {
  sm: 'px-2 py-1 text-[10px]',
  md: 'px-2.5 py-1 text-xxsm',
};

export const TerminalBadge = ({
  size = 'sm',
  dotClassName,
  showDot = true,
  className,
  children,
}: Props) => (
  <span
    className={cn(
      'inline-flex items-center gap-1.5 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
      sizeClass[size],
      className,
    )}
  >
    {showDot && (
      <span
        aria-hidden="true"
        className={cn(
          'inline-block w-1.5 h-1.5 rounded-full',
          dotClassName ?? 'bg-[var(--term-accent)]',
        )}
      />
    )}
    {children}
  </span>
);

import { cx } from '@berrypjh/react-ui';

type Size = 'sm' | 'md';

type Props = {
  size?: Size;
  dotClassName?: string;
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
    className={cx(
      'inline-flex items-center gap-1.5 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
      sizeClass[size],
      className,
    )}
  >
    {showDot && (
      <span
        aria-hidden="true"
        className={cx(
          'inline-block w-1.5 h-1.5 rounded-full',
          dotClassName ?? 'bg-[var(--term-accent)]',
        )}
      />
    )}
    {children}
  </span>
);

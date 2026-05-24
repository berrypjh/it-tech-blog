import { cn } from '@it-tech-blog/utils';

type Props = {
  id: string;
  number: number;
  eyebrow: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
};

export const NumberedSectionHeader = ({ id, number, eyebrow, title, description, icon }: Props) => (
  <header className="flex flex-col gap-sm mb-lg">
    <div className="flex items-center gap-sm w-full">
      <span className="text-[var(--term-accent)] font-bold text-xsm">{'//'}</span>
      <span className="text-xxsm tabular-nums uppercase tracking-wider text-[var(--term-muted)]">
        {eyebrow}
      </span>
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-[var(--term-border)] translate-y-[-0.15em]"
      />
    </div>

    <div className="flex items-center gap-sm">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full',
          'text-sm font-mono font-bold tabular-nums',
          'bg-blue-600 text-white shadow-[0_2px_0_rgba(29,78,216,0.3)] dark:bg-blue-500',
        )}
      >
        {number}
      </span>
      {icon && (
        <span className="text-[var(--term-accent)] shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
      <h2
        id={`heading-${id}`}
        className="text-xl sm:text-xxl font-bold tracking-tight text-[var(--term-fg)] break-keep"
      >
        {title}
      </h2>
    </div>

    {description && (
      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] max-w-[60ch]">
        {description}
      </p>
    )}
  </header>
);

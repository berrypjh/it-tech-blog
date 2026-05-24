import { cn } from '@it-tech-blog/utils';

type Props = {
  id: string;
  step: number;
  eyebrow: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
};

/**
 * events 챕터 sub-section 전용 헤더.
 * 좌측에 파란 원형 step number badge + 점선 eyebrow + 큰 타이틀.
 */
export const NumberedSectionHeader = ({ id, step, eyebrow, title, description, icon }: Props) => (
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

    <div className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full',
          'bg-blue-600 text-white font-mono font-bold text-sm sm:text-md tabular-nums',
          'shadow-[0_3px_0_rgba(29,78,216,0.3)] dark:bg-blue-500',
        )}
      >
        {step}
      </span>
      {icon && (
        <span className="text-blue-600 dark:text-blue-300 shrink-0" aria-hidden="true">
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
      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] max-w-[68ch] break-keep">
        {description}
      </p>
    )}
  </header>
);

import { cn } from '@it-tech-blog/utils';

type Props = {
  id: string;
  sectionNumber: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  tone?: 'default' | 'mint';
  as?: 'section';
};

/**
 * Plugin Event System 페이지 전용 섹션 프레임.
 * - 좌측 상단 작은 rounded `01`, `02` 형식 pill
 * - 아래 h2 제목 + 옵션 description
 * - children 영역
 */
export const SectionFrame = ({
  id,
  sectionNumber,
  title,
  description,
  icon,
  children,
  tone = 'default',
}: Props) => (
  <section
    aria-labelledby={`heading-${id}`}
    className={cn(
      'rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
      'shadow-[0_2px_0_var(--term-border)]',
      tone === 'mint'
        ? 'border-emerald-300/80 bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/40 dark:border-emerald-700/70 dark:from-emerald-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/20'
        : 'border-[var(--term-border)] bg-[var(--term-bg)]',
    )}
  >
    <header className="flex flex-col gap-sm mb-md sm:mb-lg">
      <div className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-7 sm:h-8 items-center justify-center rounded-lg px-2.5',
            'font-mono text-xsm sm:text-sm font-bold tabular-nums tracking-wider',
            tone === 'mint'
              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200'
              : 'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-200',
          )}
        >
          {sectionNumber}
        </span>
        {icon && (
          <span
            className={cn(
              'shrink-0',
              tone === 'mint'
                ? 'text-emerald-600 dark:text-emerald-300'
                : 'text-blue-600 dark:text-blue-300',
            )}
            aria-hidden="true"
          >
            {icon}
          </span>
        )}
        <h2
          id={`heading-${id}`}
          className="text-lg sm:text-xl font-bold tracking-tight text-[var(--term-fg)] break-keep"
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

    {children}
  </section>
);

import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../start/_shared/ToneIconBox';
import type { SchedulerContent } from '../content';
import { schedulerIcon } from '../icons';

type Props = { hero: SchedulerContent['hero']; className?: string };

/**
 * Hero 우측 다이어그램.
 * 좌 - 섞여있는 작업 / 중앙 - scheduler / 우 - 재정렬된 실행 순서.
 */
export const QueueFlowDiagram = ({ hero, className }: Props) => {
  return (
    <div
      className={cn(
        'relative w-full rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'px-md py-lg sm:p-lg overflow-hidden',
        className,
      )}
    >
      {/* 글로우 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.14),transparent_55%)]"
      />
      <p className="sr-only">{hero.a11yFlow}</p>

      <div
        className={cn(
          'relative grid items-stretch gap-md',
          'grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]',
        )}
      >
        {/* 좌측: 섞여 있는 작업 */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-xl border p-md',
            'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
            'border-[var(--term-border)]',
          )}
          aria-label={hero.mixedTitle}
        >
          <h3 className="text-xsm font-bold tracking-tight text-[var(--term-fg)]">
            {hero.mixedTitle}
          </h3>
          <ul className="flex flex-col gap-1.5">
            {hero.mixed.map((item) => (
              <li
                key={item}
                className={cn(
                  'rounded-md border px-2.5 py-1.5 text-[11px] leading-snug text-[var(--term-fg)] break-keep',
                  'border-dashed border-[var(--term-border)] bg-[var(--term-surface)]',
                )}
              >
                {item}
              </li>
            ))}
          </ul>
        </article>

        {/* 중앙: scheduler 카드 + dashed connector */}
        <div className="relative flex flex-col items-center justify-center gap-sm">
          {/* desktop dashed connectors */}
          <span
            aria-hidden="true"
            className="hidden lg:block pointer-events-none absolute left-[-60%] top-1/2 -translate-y-1/2 w-[60%] h-[40%]"
          >
            <DashedSide direction="left" />
          </span>
          <span
            aria-hidden="true"
            className="hidden lg:block pointer-events-none absolute right-[-60%] top-1/2 -translate-y-1/2 w-[60%] h-[40%]"
          >
            <DashedSide direction="right" />
          </span>

          <SchedulerCenterCard hero={hero} />
        </div>

        {/* 우측: 재정렬된 실행 순서 */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-xl border p-md',
            'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
            'border-[var(--term-border)]',
          )}
          aria-label={hero.orderedTitle}
        >
          <h3 className="text-xsm font-bold tracking-tight text-[var(--term-fg)]">
            {hero.orderedTitle}
          </h3>
          <ol className="flex flex-col gap-1.5">
            {hero.ordered.map((item, index) => (
              <li key={item} className="flex items-stretch gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center shrink-0 w-7 h-7 rounded-full mt-0.5',
                    'border-2 border-violet-300/80 bg-violet-50 text-violet-700 font-mono text-[11px] font-bold',
                    'dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
                  )}
                >
                  {index + 1}
                </span>
                <span className="flex-1 self-center text-[11px] leading-snug text-[var(--term-fg)] break-keep">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </article>
      </div>

      {/* 하단 강조 */}
      <p
        className={cn(
          'relative mt-md rounded-lg border px-md py-2.5 text-center text-xsm font-bold tracking-tight',
          'border-sky-300/80 bg-sky-50 text-sky-900',
          'dark:border-sky-800/70 dark:bg-sky-950/40 dark:text-sky-100',
        )}
      >
        {hero.emphasis}
      </p>
    </div>
  );
};

const SchedulerCenterCard = ({ hero }: { hero: SchedulerContent['hero'] }) => {
  const Icon = schedulerIcon.clock;
  return (
    <div
      className={cn(
        'relative flex flex-col items-center justify-center gap-1 rounded-xl border min-w-[10rem]',
        'border-violet-300/80 bg-violet-50/80 text-violet-900',
        'dark:border-violet-700/60 dark:bg-violet-950/40 dark:text-violet-100',
        'shadow-[0_3px_0_var(--term-border)] px-md py-md',
      )}
    >
      <ToneIconBox tone="violet" size="md">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </ToneIconBox>
      <span className="text-lg font-bold font-mono tracking-tight text-violet-700 dark:text-violet-200">
        {hero.schedulerTitle}
      </span>
      <span className="text-[10px] uppercase tracking-wider text-violet-700/80 dark:text-violet-300/80">
        {hero.schedulerSubtitle}
      </span>
      <ul className="flex flex-col gap-0.5 mt-1">
        {hero.schedulerNotes.map((note) => (
          <li
            key={note}
            className="text-[10.5px] leading-snug text-violet-800 dark:text-violet-200 break-keep"
          >
            · {note}
          </li>
        ))}
      </ul>
    </div>
  );
};

const DashedSide = ({ direction }: { direction: 'left' | 'right' }) => {
  const start = direction === 'left' ? 0 : 100;
  const end = direction === 'left' ? 100 : 0;
  return (
    <svg
      className="h-full w-full text-violet-300/80 dark:text-violet-700/80"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {[20, 50, 80].map((y) => (
        <path
          key={y}
          d={`M ${start} ${y} Q 50 50 ${end} 50`}
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 4"
          fill="none"
        />
      ))}
    </svg>
  );
};

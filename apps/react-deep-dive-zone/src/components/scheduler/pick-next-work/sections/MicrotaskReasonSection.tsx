import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { RootSchedulerContent } from '../content';
import { ArrowRightIcon, LightbulbIcon, TimerIcon } from '../icons';

type Props = { content: RootSchedulerContent['microReason'] };

export const MicrotaskReasonSection = ({ content }: Props) => (
  <section aria-labelledby="heading-micro-reason">
    <NumberedSectionHeader
      id="micro-reason"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<TimerIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-md items-stretch">
      {/* description */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-amber-300/80 bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30',
          'dark:border-amber-700/70 dark:from-amber-950/30 dark:via-[var(--term-bg)] dark:to-amber-950/10',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60"
          >
            <LightbulbIcon className="h-5 w-5" />
          </span>
          <h3 className="text-sm sm:text-md font-bold text-amber-700 dark:text-amber-300 break-keep">
            왜 microtask인가
          </h3>
        </header>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.description}
        </p>
      </article>

      {/* timeline */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* labels */}
        <div className="flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-wider">
          <span className="text-blue-700 dark:text-blue-300">{content.captionCurrent}</span>
          <span className="text-teal-700 dark:text-teal-300">{content.captionNext}</span>
        </div>

        {/* horizontal timeline (desktop) */}
        <ol
          className="hidden md:grid items-start relative"
          style={{ gridTemplateColumns: `repeat(${content.timeline.length}, minmax(0, 1fr))` }}
        >
          {content.timeline.map((step, i) => {
            const isLast = i === content.timeline.length - 1;
            const accent = step.phase === 'current' ? 'blue' : 'teal';
            return (
              <li key={step.label} className="flex flex-col items-center gap-2 relative">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-5 w-5 items-center justify-center rounded-full border-2 z-10',
                    accent === 'blue'
                      ? 'bg-blue-500 border-blue-500 dark:bg-blue-400 dark:border-blue-400'
                      : 'bg-teal-500 border-teal-500 dark:bg-teal-400 dark:border-teal-400',
                  )}
                />
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute left-1/2 top-2 h-1 w-full',
                      step.phase === 'current' && content.timeline[i + 1]?.phase === 'current'
                        ? 'bg-blue-400 dark:bg-blue-500'
                        : step.phase === 'next'
                          ? 'bg-teal-400 dark:bg-teal-500'
                          : 'bg-gradient-to-r from-blue-400 to-teal-400 dark:from-blue-500 dark:to-teal-500',
                    )}
                  />
                )}
                <span
                  className={cn(
                    'mt-2 text-center text-xsm sm:text-sm font-bold leading-snug break-keep',
                    accent === 'blue'
                      ? 'text-blue-700 dark:text-blue-300'
                      : 'text-teal-700 dark:text-teal-300',
                  )}
                >
                  {step.label}
                </span>
                <span className="font-mono text-[10px] text-[var(--term-muted)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </li>
            );
          })}
        </ol>

        {/* mobile vertical timeline */}
        <ol className="md:hidden flex flex-col gap-3">
          {content.timeline.map((step, i) => {
            const isLast = i === content.timeline.length - 1;
            const accent = step.phase === 'current' ? 'blue' : 'teal';
            return (
              <li key={step.label} className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2',
                      accent === 'blue'
                        ? 'bg-blue-500 border-blue-500'
                        : 'bg-teal-500 border-teal-500',
                    )}
                  />
                  <span
                    className={cn(
                      'text-xsm font-bold leading-tight break-keep',
                      accent === 'blue'
                        ? 'text-blue-700 dark:text-blue-300'
                        : 'text-teal-700 dark:text-teal-300',
                    )}
                  >
                    {step.label}
                  </span>
                  {step.phase === 'next' &&
                    i === content.timeline.findIndex((s) => s.phase === 'next') && (
                      <ArrowRightIcon
                        aria-hidden="true"
                        className="ml-auto h-3.5 w-3.5 text-[var(--term-muted)]"
                      />
                    )}
                </div>
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="ml-2 my-1 inline-block h-3 w-0.5 bg-[var(--term-border)]"
                  />
                )}
              </li>
            );
          })}
        </ol>

        <p className="sr-only">
          {content.timeline.map((s, i) => `${i + 1}. ${s.label}`).join(' → ')}
        </p>
      </article>
    </div>
  </section>
);

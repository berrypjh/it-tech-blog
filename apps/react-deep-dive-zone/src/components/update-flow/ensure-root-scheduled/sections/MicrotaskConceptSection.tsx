import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { EnsureRootScheduledContent } from '../content';
import { ClockIcon, LightbulbIcon, SparklesIcon, TimerResetIcon } from '../icons';

type Props = { content: EnsureRootScheduledContent['microtask'] };

export const MicrotaskConceptSection = ({ content }: Props) => (
  <section id="microtask" aria-labelledby="heading-microtask" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="microtask"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ClockIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.2fr)] gap-md lg:gap-lg items-stretch">
      {/* Left description */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-sky-200/80 dark:border-sky-800/70',
          'bg-gradient-to-br from-white via-sky-50/40 to-cyan-50/30',
          'dark:from-[var(--term-bg)] dark:via-sky-950/25 dark:to-cyan-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-2xl border',
              'bg-amber-100 text-amber-700 border-amber-200/80',
              'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
            )}
          >
            <TimerResetIcon className="h-5 w-5" />
          </span>
          <span className="text-[10px] uppercase tracking-wider font-mono text-sky-700/80 dark:text-sky-300/80">
            schedule later, not now
          </span>
        </header>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep whitespace-pre-line">
          {content.description}
        </p>

        <div
          className={cn(
            'mt-auto flex items-start gap-sm rounded-2xl border-2 px-md py-3',
            'border-emerald-200/80 bg-emerald-50/60',
            'dark:border-emerald-800/70 dark:bg-emerald-950/30',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-xl',
              'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950',
            )}
          >
            <LightbulbIcon className="h-3.5 w-3.5" />
          </span>
          <p className="text-xsm sm:text-sm font-bold leading-snug text-emerald-900 dark:text-emerald-100 break-keep">
            {content.highlight}
          </p>
        </div>
      </article>

      {/* Right diagram */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-emerald-200/80 dark:border-emerald-800/70',
          'bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/25',
          'dark:from-emerald-950/25 dark:via-[var(--term-bg)] dark:to-teal-950/15',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-sm">
          <h3 className="text-sm sm:text-md font-bold text-emerald-900 dark:text-emerald-100 leading-tight">
            {content.diagramTitle}
          </h3>
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700/80 dark:text-emerald-300/80 rounded-md border border-emerald-200/70 dark:border-emerald-800/60 px-2 py-0.5">
            microtask
          </span>
        </header>

        {/* Visual queue lane */}
        <div
          className={cn(
            'rounded-2xl border bg-[var(--term-bg)] px-md py-4',
            'border-emerald-200/80 dark:border-emerald-800/70',
          )}
        >
          <div className="flex items-center justify-center gap-1.5 sm:gap-3 flex-wrap">
            <span aria-hidden="true" className="text-emerald-500 dark:text-emerald-400 font-mono">
              ...
            </span>
            <span aria-hidden="true" className="text-emerald-500 dark:text-emerald-400">
              →
            </span>
            {/* main processRootSchedule box */}
            <span
              className={cn(
                'inline-flex flex-col items-center gap-1 rounded-2xl border-2 px-4 py-3',
                'border-emerald-400/80 bg-emerald-50/80',
                'dark:border-emerald-600/70 dark:bg-emerald-950/40',
                'shadow-[0_8px_22px_-10px_rgba(16,185,129,0.45)]',
              )}
            >
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950"
              >
                <ClockIcon className="h-4 w-4" />
              </span>
              <code
                className={cn(
                  'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[11px] font-bold',
                  'border-slate-800 bg-slate-950 text-slate-100',
                )}
              >
                <span className="text-amber-300">{content.diagramMain}</span>
              </code>
              <span className="text-[10px] text-emerald-900/85 dark:text-emerald-100/85 text-center break-keep">
                {content.diagramSub}
              </span>
            </span>
            <span aria-hidden="true" className="text-emerald-500 dark:text-emerald-400">
              →
            </span>
            <span aria-hidden="true" className="text-emerald-500 dark:text-emerald-400 font-mono">
              ...
            </span>
          </div>
        </div>

        <div
          className={cn(
            'mt-auto flex items-start gap-sm rounded-xl border px-3 py-2',
            'border-[var(--term-border)] bg-slate-50/60 dark:bg-slate-900/30',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md',
              'bg-amber-100 text-amber-700 border border-amber-200/80',
              'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
            )}
          >
            <SparklesIcon className="h-3 w-3" />
          </span>
          <p className="text-xxsm sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
            {content.diagramSide}
          </p>
        </div>
      </article>
    </div>
  </section>
);

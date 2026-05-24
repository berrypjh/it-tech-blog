import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { SyntheticEventContent } from '../content';
import { ArrowRightIcon, ClockIcon, HistoryIcon, SparklesIcon } from '../icons';

type Props = { content: SyntheticEventContent['persist'] };

export const PersistModernNote = ({ content }: Props) => (
  <section aria-labelledby="heading-persist">
    <NumberedSectionHeader
      id="persist"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ClockIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
        'border-amber-300/80 bg-gradient-to-br from-amber-50/70 via-white to-rose-50/30',
        'dark:border-amber-700/70 dark:from-amber-950/30 dark:via-[var(--term-bg)] dark:to-rose-950/10',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-md lg:gap-lg items-stretch">
        {/* Description */}
        <div className="flex flex-col gap-md">
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-white shadow-[0_2px_0_rgba(217,119,6,0.3)] dark:bg-amber-400 dark:text-slate-900"
            >
              <HistoryIcon className="h-4 w-4" />
            </span>
            <span className="text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
              {content.label}
            </span>
          </header>
          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.description}
          </p>
        </div>

        {/* Old → modern compare */}
        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3">
          <article
            className={cn(
              'flex flex-col items-center gap-1 rounded-2xl border-2 p-md text-center',
              'border-rose-200/80 bg-white dark:border-rose-800/60 dark:bg-slate-950/40',
              'shadow-[0_1px_0_var(--term-border)]',
            )}
          >
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-200"
            >
              <HistoryIcon className="h-4 w-4" />
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">
              {content.oldLabel}
            </span>
            <code className="font-mono text-xsm sm:text-sm font-bold text-rose-700 dark:text-rose-200 break-keep">
              {content.oldText}
            </code>
          </article>

          <span
            aria-hidden="true"
            className="self-center inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-white shadow-[0_2px_0_rgba(217,119,6,0.3)] sm:rotate-0 rotate-90 dark:bg-amber-400 dark:text-slate-900"
          >
            <ArrowRightIcon className="h-4 w-4" />
          </span>

          <article
            className={cn(
              'flex flex-col items-center gap-1 rounded-2xl border-2 p-md text-center',
              'border-emerald-300/80 bg-white dark:border-emerald-800/60 dark:bg-slate-950/40',
              'shadow-[0_1px_0_var(--term-border)]',
            )}
          >
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200"
            >
              <SparklesIcon className="h-4 w-4" />
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
              {content.modernLabel}
            </span>
            <code className="font-mono text-xsm sm:text-sm font-bold text-emerald-700 dark:text-emerald-200 break-keep">
              {content.modernText}
            </code>
          </article>
        </div>
      </div>
    </article>
  </section>
);

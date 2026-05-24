import { cn } from '@it-tech-blog/utils';

import type { RootNativeEventContent } from '../content';
import { HelpCircleIcon, LightbulbIcon } from '../icons';

type Props = { content: RootNativeEventContent['question'] };

export const TodayQuestionBanner = ({ content }: Props) => (
  <section
    aria-labelledby="question-heading"
    className={cn(
      'relative rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
      'border-blue-200/70 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/50',
      'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_minmax(0,320px)] gap-md lg:gap-lg items-center">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-full',
          'bg-blue-600 text-white shadow-[0_4px_0_rgba(29,78,216,0.3)] dark:bg-blue-500',
        )}
      >
        <HelpCircleIcon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={2.4} />
      </span>

      <div className="flex flex-col gap-2 min-w-0">
        <p className="text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
          {content.eyebrow}
        </p>
        <h2
          id="question-heading"
          className="text-md sm:text-lg lg:text-xl font-bold leading-snug text-[var(--term-fg)] break-keep"
        >
          {content.title}
        </h2>
      </div>

      <article
        className={cn(
          'flex flex-col gap-2 rounded-2xl border-2 p-md',
          'border-teal-300/80 bg-teal-50/70',
          'dark:border-teal-700/60 dark:bg-teal-950/30',
          'shadow-[0_1px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-teal-200 bg-white text-teal-700 dark:border-teal-800/60 dark:bg-slate-950/40 dark:text-teal-200"
          >
            <LightbulbIcon className="h-4 w-4" />
          </span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
            {content.insight.label}
          </span>
        </header>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.insight.body}
        </p>
      </article>
    </div>
  </section>
);

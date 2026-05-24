import { cn } from '@it-tech-blog/utils';

import type { HooksEntryFlowContent } from '../content';
import { TrophyIcon } from '../icons';

type Props = { content: HooksEntryFlowContent['summary'] };

export const KeyTakeaways = ({ content }: Props) => (
  <section
    aria-labelledby="heading-summary"
    className={cn(
      'rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
      'border-emerald-300/70 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/40',
      'dark:border-emerald-800/60 dark:from-emerald-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <div className="flex flex-col gap-md sm:flex-row sm:items-start sm:gap-lg">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full',
          'bg-emerald-500 text-white shadow-[0_4px_0_rgba(5,150,105,0.25)]',
          'dark:bg-emerald-400 dark:text-slate-900',
        )}
      >
        <TrophyIcon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.2} />
      </span>

      <div className="flex flex-col gap-md min-w-0 flex-1">
        <div className="flex flex-col gap-1">
          <p className="text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
            {content.eyebrow}
          </p>
          <h2
            id="heading-summary"
            className="text-md sm:text-lg lg:text-xl font-bold text-[var(--term-fg)] break-keep"
          >
            {content.title}
          </h2>
        </div>

        <ol className="flex flex-col gap-2.5">
          {content.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className={cn(
                  'mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full',
                  'bg-emerald-500 text-white text-xsm font-bold tabular-nums',
                  'dark:bg-emerald-400 dark:text-slate-900',
                )}
              >
                {i + 1}
              </span>
              <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep pt-1">
                {item}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

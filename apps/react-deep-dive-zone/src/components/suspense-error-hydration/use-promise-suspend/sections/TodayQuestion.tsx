import { cn } from '@it-tech-blog/utils';

import type { UsePromiseSuspendContent } from '../content';
import {
  CircleHelpIcon,
  PauseCircleIcon,
  RefreshCcwIcon,
  ShieldCheckIcon,
  ZapIcon,
} from '../icons';
import { sectionNumberBadge } from '../tone';

type Props = { content: UsePromiseSuspendContent['question'] };

const conceptIcon = {
  pause: PauseCircleIcon,
  lightning: ZapIcon,
  refresh: RefreshCcwIcon,
  shield: ShieldCheckIcon,
} as const;

const conceptTone = {
  pause:
    'text-violet-600 bg-violet-100 border-violet-200 dark:text-violet-300 dark:bg-violet-950/60 dark:border-violet-800/60',
  lightning:
    'text-blue-600 bg-blue-100 border-blue-200 dark:text-blue-300 dark:bg-blue-950/60 dark:border-blue-800/60',
  refresh:
    'text-cyan-600 bg-cyan-100 border-cyan-200 dark:text-cyan-300 dark:bg-cyan-950/60 dark:border-cyan-800/60',
  shield:
    'text-emerald-600 bg-emerald-100 border-emerald-200 dark:text-emerald-300 dark:bg-emerald-950/60 dark:border-emerald-800/60',
} as const;

export const TodayQuestion = ({ content }: Props) => (
  <section
    aria-labelledby="question-heading"
    className={cn(
      'rounded-3xl border-2 p-md sm:p-lg',
      'border-blue-200/80 bg-white dark:border-blue-800/60 dark:bg-[var(--term-bg)]',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-3 mb-md">
      <span aria-hidden="true" className={sectionNumberBadge}>
        {content.number}
      </span>
      <h2
        id="question-heading"
        className="text-md sm:text-lg font-bold text-[var(--term-fg)] break-keep"
      >
        {content.title}
      </h2>
    </header>

    <div className="grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)] items-center">
      {/* LEFT: big ? icon */}
      <div
        aria-hidden="true"
        className={cn(
          'inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full mx-auto lg:mx-0',
          'bg-blue-100 text-blue-600 shadow-[inset_0_-2px_0_rgba(59,130,246,0.15)]',
          'dark:bg-blue-950/60 dark:text-blue-300',
        )}
      >
        <CircleHelpIcon className="h-9 w-9 sm:h-11 sm:w-11" strokeWidth={2.2} />
      </div>

      {/* CENTER: question */}
      <p className="text-md sm:text-lg leading-snug font-bold text-[var(--term-fg)] break-keep">
        {content.question}
      </p>

      {/* RIGHT: 4 concept cards */}
      <ul className="grid grid-cols-2 gap-2">
        {content.concepts.map((c) => {
          const Icon = conceptIcon[c.icon];
          return (
            <li
              key={c.label}
              className={cn(
                'flex items-start gap-2 rounded-xl border bg-slate-50/50 px-3 py-2',
                'dark:bg-slate-900/30 dark:border-slate-700',
                'border-slate-200',
                'transition-colors motion-safe:hover:border-blue-300/70',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border',
                  conceptTone[c.icon],
                )}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className="text-[11px] sm:text-xsm font-bold text-[var(--term-fg)] break-keep">
                {c.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

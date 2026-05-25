import { cn } from '@it-tech-blog/utils';

import type { RecoveryModelOverviewContent } from '../content';
import { CircleHelpIcon } from '../icons';

type Props = { content: RecoveryModelOverviewContent['question'] };

export const QuestionSection = ({ content }: Props) => (
  <section
    aria-labelledby="question-heading"
    className={cn(
      'rounded-3xl border-2 p-md sm:p-lg',
      'border-blue-200/80 bg-white dark:border-blue-800/60 dark:bg-[var(--term-bg)]',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <h2 id="question-heading" className="sr-only">
      {content.title}
    </h2>

    <div className="grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,1.6fr)] items-center">
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

      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
          {content.title}
        </span>
        <p className="text-md sm:text-lg leading-snug font-bold text-[var(--term-fg)] break-keep">
          {content.question}
        </p>
      </div>

      <ul className="flex flex-wrap gap-2">
        {content.badges.map((badge) => (
          <li
            key={badge}
            className={cn(
              'inline-flex items-center rounded-full border bg-slate-50 px-3 py-1',
              'border-slate-200 dark:border-slate-700 dark:bg-slate-900/50',
              'text-[11px] sm:text-xsm font-bold text-[var(--term-fg)] break-keep',
            )}
          >
            {badge}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

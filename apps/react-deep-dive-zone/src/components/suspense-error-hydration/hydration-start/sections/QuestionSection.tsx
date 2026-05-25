import { cn } from '@it-tech-blog/utils';

import type { HydrationStartContent } from '../content';
import { CircleHelpIcon, HelpCircleIcon } from '../icons';
import { sectionNumberBadge } from '../tone';

type Props = { content: HydrationStartContent['question'] };

export const QuestionSection = ({ content }: Props) => (
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

    <div className="grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[auto_minmax(0,1fr)_auto] items-center">
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

      <p className="text-md sm:text-lg leading-snug font-bold text-[var(--term-fg)] break-keep">
        {content.question}
      </p>

      <div
        aria-hidden="true"
        className={cn(
          'hidden lg:inline-flex h-14 w-14 items-center justify-center rounded-2xl',
          'border border-blue-200/70 bg-blue-50/50 text-blue-400',
          'dark:border-blue-800/60 dark:bg-blue-950/30 dark:text-blue-300/60',
        )}
      >
        <HelpCircleIcon className="h-7 w-7" />
      </div>
    </div>
  </section>
);

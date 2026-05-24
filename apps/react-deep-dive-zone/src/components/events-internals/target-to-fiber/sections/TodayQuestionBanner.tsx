import { cn } from '@it-tech-blog/utils';

import type { TargetFiberContent } from '../content';
import { HelpCircleIcon } from '../icons';

type Props = { content: TargetFiberContent['question'] };

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
    <div className="flex items-center gap-md sm:gap-lg">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-full',
          'bg-blue-600 text-white shadow-[0_4px_0_rgba(29,78,216,0.3)] dark:bg-blue-500',
        )}
      >
        <HelpCircleIcon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={2.4} />
      </span>

      <div className="flex flex-col gap-2 min-w-0 flex-1">
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
    </div>
  </section>
);

import { cn } from '@it-tech-blog/utils';

import type { ActionsUpdateFlowContent } from '../content';
import { CircleHelpIcon } from '../icons';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: ActionsUpdateFlowContent['question'] };

export const TodayQuestionSection = ({ content }: Props) => (
  <section aria-labelledby="today-question-heading" className="flex flex-col">
    <SectionHeader
      id="today-question-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.questionLines.join(' ')}
    />

    <div
      className={cn(
        'rounded-2xl border-2 p-md sm:p-lg',
        'border-blue-300/80 bg-blue-50/40 dark:border-blue-700/70 dark:bg-blue-950/30',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[auto_minmax(0,_5fr)_minmax(0,_7fr)] items-stretch">
        {/* Big ? icon */}
        <div className="flex justify-center lg:justify-start">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl',
              'border-2 border-blue-300 bg-white text-blue-700',
              'dark:border-blue-600 dark:bg-blue-950/40 dark:text-blue-200',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <CircleHelpIcon className="h-8 w-8 sm:h-10 sm:w-10" />
          </span>
        </div>

        {/* Question text */}
        <div className="flex flex-col justify-center gap-2 min-w-0">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-200">
            Question
          </span>
          <h3 className="text-md sm:text-lg lg:text-xl font-bold leading-snug text-[var(--term-fg)] break-keep">
            {content.questionLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>
        </div>

        {/* Support cards (3) */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 self-stretch">
          {content.supportCards.map((sc) => {
            const Icon = iconRegistry[sc.iconKey];
            return (
              <li key={sc.title} className="h-full">
                <article
                  className={cn(
                    'flex h-full flex-col items-start gap-1.5 rounded-xl border-2 p-3',
                    'border-blue-200 bg-white dark:border-blue-800/60 dark:bg-[var(--term-bg)]',
                    'transition-all motion-safe:hover:-translate-y-0.5',
                    'hover:border-blue-400 dark:hover:border-blue-600',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <h4 className="text-xsm font-bold text-blue-700 dark:text-blue-200 break-keep">
                    {sc.title}
                  </h4>
                  <p className="text-xxsm leading-relaxed text-[var(--term-muted)] break-keep">
                    {sc.body}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </section>
);

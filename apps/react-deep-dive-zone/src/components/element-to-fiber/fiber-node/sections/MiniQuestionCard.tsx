import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { FiberStoredInformationContent } from '../content';
import { CheckCircleIcon, ChevronDownIcon, HelpCircleIcon } from '../icons';

type Props = { content: FiberStoredInformationContent['miniQuestion'] };

export const MiniQuestionCard = ({ content }: Props) => (
  <section
    id="mini-question"
    aria-labelledby="heading-mini-question"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="mini-question"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <details
      open
      className={cn(
        'group rounded-3xl border-2 bg-[var(--term-bg)]',
        'border-sky-300/70 dark:border-sky-700/70',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <summary
        className={cn(
          'flex items-start gap-sm cursor-pointer select-none list-none',
          'p-md sm:p-lg rounded-3xl',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-2xl shrink-0',
            'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
            'font-mono text-md font-extrabold',
            'shadow-[0_8px_22px_-8px_rgba(2,132,199,0.55)]',
          )}
        >
          {content.questionLabel}
        </span>
        <div className="flex flex-col gap-1 min-w-0 flex-1">
          <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-sky-700/80 dark:text-sky-300/80">
            question
          </span>
          <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
            {content.question}
          </p>
        </div>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-8 h-8 rounded-full shrink-0',
            'border border-[var(--term-border)] bg-[var(--term-surface)] text-sky-600 dark:text-sky-300',
            'transition-transform group-open:rotate-180',
          )}
        >
          <ChevronDownIcon className="h-4 w-4" />
        </span>
      </summary>

      <div className="px-md sm:px-lg pb-md sm:pb-lg pt-0">
        <div
          className={cn(
            'flex items-start gap-sm rounded-2xl border-2 p-md',
            'border-emerald-300/80 bg-emerald-50',
            'dark:border-emerald-700/70 dark:bg-emerald-950/40',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-10 h-10 rounded-full shrink-0',
              'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
              'font-mono text-sm font-extrabold',
            )}
          >
            <CheckCircleIcon className="h-5 w-5" />
          </span>
          <div className="flex flex-col gap-1 min-w-0">
            <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-emerald-700 dark:text-emerald-300">
              {content.answerLabel}
            </span>
            <p className="text-sm leading-relaxed text-emerald-900 dark:text-emerald-100 break-keep font-bold">
              {content.answer}
            </p>
          </div>
        </div>
      </div>
    </details>
  </section>
);

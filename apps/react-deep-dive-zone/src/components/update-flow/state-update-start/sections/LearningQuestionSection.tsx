import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { StateUpdateStartContent } from '../content';
import { CheckCircleIcon, HelpCircleIcon } from '../icons';

type Props = { content: StateUpdateStartContent['question'] };

export const LearningQuestionSection = ({ content }: Props) => (
  <section id="question" aria-labelledby="heading-question" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="question"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'border-sky-200/80 dark:border-sky-800/70',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.2fr)] gap-md lg:gap-lg items-stretch">
        {/* Question column */}
        <div className="flex flex-col gap-sm">
          <div className="flex items-start gap-sm">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full',
                'bg-sky-100 text-sky-700 font-mono font-bold text-md',
                'dark:bg-sky-950/60 dark:text-sky-200',
              )}
            >
              Q.
            </span>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-[10px] uppercase tracking-wider font-mono text-sky-700/80 dark:text-sky-300/80">
                {content.questionLabel}
              </span>
              <p className="text-md sm:text-lg font-bold leading-snug text-[var(--term-fg)] break-keep">
                {content.question}
              </p>
            </div>
          </div>
        </div>

        {/* Vertical divider for desktop */}
        <div className="relative lg:pl-lg lg:border-l border-dashed border-[var(--term-border)] flex flex-col gap-sm">
          {/* Top control */}
          <div className="flex items-center justify-between gap-sm pt-sm border-t border-dashed border-[var(--term-border)] lg:border-t-0 lg:pt-0">
            <span className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-9 w-9 items-center justify-center rounded-full',
                  'bg-emerald-100 text-emerald-700 font-mono font-bold',
                  'dark:bg-emerald-950/60 dark:text-emerald-200',
                )}
              >
                A.
              </span>
              <span className="text-[10px] uppercase tracking-wider font-mono text-emerald-700/80 dark:text-emerald-300/80">
                {content.answerLabel}
              </span>
            </span>
            <button
              type="button"
              aria-pressed="true"
              className={cn(
                'inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider',
                'border-sky-300/70 bg-sky-50 text-sky-700 hover:bg-sky-100 transition-colors',
                'dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-200 dark:hover:bg-sky-950/60',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
              )}
            >
              <span aria-hidden="true">▾</span>
              {content.buttonText}
            </button>
          </div>

          {/* Answer body */}
          <div
            className={cn(
              'flex items-start gap-sm rounded-2xl border-2 p-md',
              'border-emerald-300/70 bg-emerald-50/70',
              'dark:border-emerald-700/70 dark:bg-emerald-950/30',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full',
                'bg-emerald-600 text-white',
                'dark:bg-emerald-500 dark:text-slate-950',
              )}
            >
              <CheckCircleIcon className="h-4 w-4" />
            </span>
            <div className="flex flex-col gap-1.5 min-w-0">
              <p className="text-sm sm:text-md font-bold leading-snug text-emerald-900 dark:text-emerald-100 break-keep">
                {content.answerTitle}
              </p>
              <p className="text-xsm leading-relaxed text-emerald-900/85 dark:text-emerald-100/85 break-keep">
                {content.answerBody}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
);

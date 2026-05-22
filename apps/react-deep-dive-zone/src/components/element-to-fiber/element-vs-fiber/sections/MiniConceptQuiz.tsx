import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { ElementVsFiberContent } from '../content';
import { HelpCircleIcon, LightbulbIcon } from '../icons';

type Props = { content: ElementVsFiberContent['quiz'] };

export const MiniConceptQuiz = ({ content }: Props) => (
  <section id="quiz" aria-labelledby="heading-quiz" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="quiz"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="flex flex-col gap-md">
        {/* Question */}
        <div className="flex items-start gap-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-10 h-10 rounded-full shrink-0',
              'bg-sky-100 text-sky-700 font-mono font-bold',
              'dark:bg-sky-950/60 dark:text-sky-200',
            )}
          >
            Q.
          </span>
          <div className="flex flex-col gap-1 min-w-0">
            <span className="text-[10px] uppercase tracking-wider font-mono text-sky-700/80 dark:text-sky-300/80">
              {content.questionLabel}
            </span>
            <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
              {content.question}
            </p>
          </div>
        </div>

        {/* Answer */}
        <div
          className={cn(
            'flex items-start gap-sm rounded-2xl border-2 p-md',
            'border-sky-300/70 bg-sky-50/70',
            'dark:border-sky-700/70 dark:bg-sky-950/30',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-10 h-10 rounded-full shrink-0',
              'bg-sky-600 text-white font-mono font-bold',
              'dark:bg-sky-500 dark:text-slate-950',
            )}
          >
            A.
          </span>
          <div className="flex flex-col gap-1 min-w-0">
            <span className="text-[10px] uppercase tracking-wider font-mono text-sky-700 dark:text-sky-200">
              {content.answerLabel}
            </span>
            <p className="text-sm sm:text-md font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
              {content.answer}
            </p>
          </div>
        </div>

        {/* Hint */}
        <div
          className={cn(
            'flex items-start gap-sm rounded-xl border px-sm py-2',
            'border-amber-200/80 bg-amber-50/60',
            'dark:border-amber-800/60 dark:bg-amber-950/30',
          )}
        >
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200 shrink-0"
          >
            <LightbulbIcon className="h-4 w-4" />
          </span>
          <p className="text-xsm leading-relaxed text-amber-900/90 dark:text-amber-100/90 break-keep">
            {content.hint}
          </p>
        </div>
      </div>
    </article>
  </section>
);

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { LayoutPhaseContent } from '../content';
import { CheckCircleIcon, LightbulbIcon, SparklesIcon } from '../icons';

type Props = {
  quiz: LayoutPhaseContent['quiz'];
};

export const LayoutQuizSection = ({ quiz }: Props) => (
  <section id="quiz" className="space-y-md scroll-mt-xl">
    <div className="space-y-md">
      <SectionBadgeHeader
        id="mini-quiz"
        number={quiz.number}
        eyebrow={quiz.eyebrow}
        title={quiz.title}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <article
          className={cn(
            'flex flex-col gap-2 rounded-2xl border-2 p-md sm:p-lg',
            'border-sky-200/80 bg-sky-50/60',
            'dark:border-sky-800/70 dark:bg-sky-950/30',
            'shadow-[0_1px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-10 w-10 items-center justify-center rounded-xl border-2',
                'bg-sky-100 text-sky-700 border-sky-200/80 font-mono font-bold',
                'dark:bg-sky-950/60 dark:text-sky-100 dark:border-sky-800/60',
              )}
            >
              Q
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300">
              question
            </span>
          </header>
          <p className="text-sm sm:text-md leading-relaxed text-sky-900 dark:text-sky-100 font-bold break-keep">
            {quiz.question}
          </p>
        </article>

        <article
          className={cn(
            'flex flex-col gap-2 rounded-2xl border-2 p-md sm:p-lg',
            'border-teal-200/80 bg-teal-50/60',
            'dark:border-teal-800/70 dark:bg-teal-950/30',
            'shadow-[0_1px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-10 w-10 items-center justify-center rounded-xl border-2',
                  'bg-teal-100 text-teal-700 border-teal-200/80 font-mono font-bold',
                  'dark:bg-teal-950/60 dark:text-teal-100 dark:border-teal-800/60',
                )}
              >
                A
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-teal-700 dark:text-teal-300">
                answer
              </span>
            </div>
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-full',
                'bg-teal-100 text-teal-700 border border-teal-200/80',
                'dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
              )}
            >
              <CheckCircleIcon className="h-5 w-5" />
            </span>
          </header>
          <p className="text-sm sm:text-md leading-relaxed text-teal-900 dark:text-teal-100 font-bold break-keep">
            {quiz.answer}
          </p>
        </article>

        <article
          className={cn(
            'flex flex-col gap-2 rounded-2xl border-2 p-md sm:p-lg',
            'border-amber-200/80 bg-amber-50/70',
            'dark:border-amber-800/70 dark:bg-amber-950/30',
            'shadow-[0_1px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-10 w-10 items-center justify-center rounded-xl border-2',
                'bg-amber-100 text-amber-700 border-amber-200/80',
                'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
              )}
            >
              <LightbulbIcon className="h-5 w-5" />
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800 dark:text-amber-300">
              tip
            </span>
          </header>
          <p className="text-xsm sm:text-sm leading-relaxed text-amber-900 dark:text-amber-100 break-keep">
            {quiz.tip}
          </p>
        </article>
      </div>
    </div>
  </section>
);

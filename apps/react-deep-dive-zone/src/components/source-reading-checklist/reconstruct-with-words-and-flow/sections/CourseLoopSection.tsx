import { Fragment } from 'react';

import { cx } from '@berrypjh/react-ui';
import { ArrowRight, Repeat, Route, Sparkles } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import type { LoopStep, ReconstructContent } from '../content';

type Props = { content: ReconstructContent['courseLoop'] };

export const CourseLoopSection = ({ content }: Props) => {
  return (
    <section id="section-course-loop" aria-labelledby="heading-course-loop" className="space-y-lg">
      <SectionHeader
        id="course-loop"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<Route className="h-5 w-5" aria-hidden="true" />}
      />

      <article
        className={cx(
          'relative overflow-hidden rounded-2xl border-2 p-md sm:p-lg lg:p-xl',
          'border-violet-200 bg-gradient-to-br from-blue-50/80 via-white to-violet-50/40',
          'dark:border-violet-800/60 dark:from-blue-950/40 dark:via-[var(--term-bg)] dark:to-violet-950/30',
          'shadow-[0_3px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2 mb-md">
          <span
            aria-hidden="true"
            className={cx(
              'inline-flex h-9 w-9 items-center justify-center rounded-lg',
              'border border-violet-300 bg-violet-100 text-violet-700',
              'dark:border-violet-700/70 dark:bg-violet-900/60 dark:text-violet-200',
            )}
          >
            <Repeat className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="text-md sm:text-lg font-bold text-violet-900 dark:text-violet-100 break-keep">
            {content.cardTitle}
          </h3>
        </header>

        {/* Loop chain */}
        <ol className="flex flex-wrap items-center gap-1.5">
          {content.steps.map((step, i) => {
            const isLast = i === content.steps.length - 1;
            return (
              <Fragment key={step.id}>
                <li>
                  <LoopStepBadge step={step} index={i + 1} />
                </li>
                {!isLast && (
                  <li aria-hidden="true">
                    <ArrowRight className="h-3.5 w-3.5 text-violet-500" aria-hidden="true" />
                  </li>
                )}
              </Fragment>
            );
          })}
        </ol>

        <p className="mt-md text-xsm sm:text-sm leading-relaxed text-violet-800/90 dark:text-violet-200/90 break-keep">
          {content.description}
        </p>
      </article>
    </section>
  );
};

const LoopStepBadge = ({ step, index }: { step: LoopStep; index: number }) => {
  if (step.highlight) {
    return (
      <span
        className={cx(
          'inline-flex items-center gap-1.5 rounded-full border-2 px-3 py-1.5',
          'border-violet-400 bg-gradient-to-r from-blue-100 to-violet-200 text-violet-900',
          'dark:border-violet-600/80 dark:from-blue-950/60 dark:to-violet-950/60 dark:text-violet-100',
          'text-xsm font-bold uppercase tracking-wider',
          'shadow-[0_3px_0_var(--term-border)]',
        )}
      >
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
        {step.label}
      </span>
    );
  }
  return (
    <span
      className={cx(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1',
        'border-violet-300 bg-white text-violet-700',
        'dark:border-violet-700/70 dark:bg-[var(--term-bg)] dark:text-violet-200',
        'text-[11px] font-mono font-bold',
      )}
    >
      <span
        aria-hidden="true"
        className={cx(
          'inline-flex h-4 w-4 items-center justify-center rounded-full border bg-white dark:bg-[var(--term-bg)]',
          'border-violet-300 dark:border-violet-700/70',
          'text-[9px] font-bold tabular-nums',
        )}
      >
        {index}
      </span>
      {step.label}
    </span>
  );
};

import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { ReconstructContent } from '../content';
import { ArrowRightIcon, LayersIcon } from '../icons';

type Props = { content: ReconstructContent['fiveStep'] };

export const FiveStepSection = ({ content }: Props) => {
  return (
    <section id="section-five-step" aria-labelledby="heading-five-step" className="space-y-lg">
      <SectionHeader
        id="five-step"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<LayersIcon className="h-5 w-5" />}
      />

      {/* 5-column stepper on xl, 2-col on sm, 1-col on mobile */}
      <ol className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-md">
        {content.steps.map((step) => (
          <li key={step.number}>
            <article
              className={cn(
                'group flex h-full flex-col gap-sm rounded-2xl border-2 p-md',
                'bg-white dark:bg-[var(--term-bg)]',
                'border-blue-200 dark:border-blue-800/60',
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-all motion-safe:hover:-translate-y-0.5',
                'motion-safe:hover:border-blue-400 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
                'dark:motion-safe:hover:border-blue-500/80',
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-8 w-8 items-center justify-center rounded-full border-2',
                    'border-blue-400 bg-blue-50 text-blue-700',
                    'dark:border-blue-600/80 dark:bg-blue-950/40 dark:text-blue-200',
                    'font-mono text-xsm font-bold tabular-nums',
                  )}
                >
                  {step.number}
                </span>
              </div>

              <h3 className="text-md font-bold leading-snug text-blue-900 dark:text-blue-100 break-keep">
                {step.title}
              </h3>

              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {step.body}
              </p>

              <div className="mt-auto pt-sm border-t border-dashed border-blue-300/70 dark:border-blue-700/60">
                <code
                  className={cn(
                    'inline-flex items-center rounded-md border px-2 py-0.5',
                    'border-blue-300 bg-blue-50 text-blue-800',
                    'dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
                    'font-mono text-[10.5px] font-bold',
                  )}
                >
                  {step.example}
                </code>
              </div>
            </article>
          </li>
        ))}
      </ol>

      {/* Flow line */}
      <aside
        className={cn(
          'flex flex-wrap items-center gap-2 rounded-2xl border-2 p-md sm:p-lg',
          'border-blue-300 bg-gradient-to-r from-blue-50/60 via-white to-violet-50/30',
          'dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/20',
          'shadow-[0_3px_0_var(--term-border)]',
        )}
        aria-label="flow line"
      >
        <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700 dark:text-blue-300 font-bold">
          {content.flowLineLabel}
        </span>
        <ul className="flex flex-wrap items-center gap-1.5">
          {content.flowLine.map((step, i) => (
            <Fragment key={step}>
              <li>
                <code
                  className={cn(
                    'inline-flex items-center rounded-full border-2 px-2.5 py-1',
                    'border-blue-300 bg-white text-blue-800',
                    'dark:border-blue-700/70 dark:bg-[var(--term-bg)] dark:text-blue-100',
                    'font-mono text-[11px] font-bold',
                  )}
                >
                  {step}
                </code>
              </li>
              {i < content.flowLine.length - 1 && (
                <li aria-hidden="true">
                  <ArrowRightIcon className="h-3.5 w-3.5 text-blue-500" />
                </li>
              )}
            </Fragment>
          ))}
        </ul>
      </aside>
    </section>
  );
};

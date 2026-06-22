import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { TestAsDocContent, ToneKey } from '../content';
import { ArrowDownIcon, RouteIcon, WorkflowIcon } from '../icons';

type Props = { content: TestAsDocContent['trace'] };

const stepTone: ToneKey[] = ['violet', 'cyan', 'blue', 'emerald'];

export const TraceSection = ({ content }: Props) => {
  return (
    <section id="section-trace" aria-labelledby="heading-trace" className="space-y-lg">
      <SectionHeader
        id="trace"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<WorkflowIcon className="h-5 w-5" />}
      />

      <ol
        className={cn(
          'flex flex-col gap-0 rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
          'dark:border-slate-700 dark:bg-[var(--term-bg)]',
        )}
      >
        {/* Start indicator */}
        <li>
          <div
            className={cn(
              'flex items-center gap-3 rounded-xl border-2 px-3 py-3',
              'border-violet-300 bg-violet-50',
              'dark:border-violet-700/70 dark:bg-violet-950/30',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-md',
                'border-2 border-violet-400 bg-white text-violet-700',
                'dark:border-violet-700/70 dark:bg-[var(--term-bg)] dark:text-violet-200',
              )}
            >
              <RouteIcon className="h-4 w-4" />
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-800 dark:text-violet-200">
                start
              </span>
              <code className="font-mono text-md font-bold text-[var(--term-fg)]">test file</code>
            </div>
          </div>
        </li>

        {content.steps.map((step, i) => {
          const t = toneTokens[stepTone[i] ?? 'blue'];
          return (
            <Fragment key={step.number}>
              <li>
                <span aria-hidden="true" className="flex items-center justify-center py-2">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full border border-violet-300 bg-white text-violet-600 dark:border-violet-700/70 dark:bg-[var(--term-bg)] dark:text-violet-300">
                    <ArrowDownIcon className="h-3.5 w-3.5" />
                  </span>
                </span>
              </li>
              <li>
                <article
                  className={cn(
                    'group flex items-start gap-md rounded-xl border-2 p-md',
                    'bg-white dark:bg-[var(--term-bg)]',
                    t.border,
                    'shadow-[0_2px_0_var(--term-border)]',
                    'transition-all motion-safe:hover:-translate-y-0.5',
                    t.borderHover,
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2',
                      t.border,
                      t.chip,
                      'font-mono text-sm font-bold tabular-nums',
                    )}
                  >
                    {step.number}
                  </span>
                  <div className="flex flex-col gap-1.5 min-w-0">
                    <h3 className={cn('text-md font-bold leading-snug break-keep', t.text)}>
                      {step.title}
                    </h3>
                    <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                      {step.body}
                    </p>
                  </div>
                </article>
              </li>
            </Fragment>
          );
        })}
      </ol>
    </section>
  );
};

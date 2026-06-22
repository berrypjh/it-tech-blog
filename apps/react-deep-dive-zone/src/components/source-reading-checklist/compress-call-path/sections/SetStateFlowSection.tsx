import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { CallPathCompressionContent } from '../content';
import { ArrowDownIcon, RefreshIcon, SparkIcon } from '../icons';
import { getStepClasses, StepBadge } from '../StepBadge';

type Props = { content: CallPathCompressionContent['setStateFlow'] };

export const SetStateFlowSection = ({ content }: Props) => {
  return (
    <section
      id="section-set-state-flow"
      aria-labelledby="heading-set-state-flow"
      className="space-y-lg scroll-mt-24"
    >
      <SectionHeader
        id="set-state-flow"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<RefreshIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_7fr)_minmax(0,_5fr)] gap-md lg:gap-lg items-start">
        {/* LEFT — call path */}
        <ol
          className={cn(
            'flex flex-col gap-0 rounded-2xl border-2 p-md sm:p-lg',
            'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
            'dark:border-slate-700 dark:bg-[var(--term-bg)]',
          )}
        >
          {content.flow.map((step, i) => {
            const t = getStepClasses(step.kind);
            const isLast = i === content.flow.length - 1;
            return (
              <Fragment key={`${step.fn}-${i}`}>
                <li>
                  <article
                    className={cn(
                      'group flex items-start gap-3 rounded-xl border-2 p-3',
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
                        'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2',
                        t.border,
                        t.chip,
                        'font-mono text-[11px] font-bold tabular-nums',
                      )}
                    >
                      {i + 1}
                    </span>
                    <div className="flex flex-col gap-1 min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <code className={cn('font-mono text-xsm sm:text-sm font-bold', t.text)}>
                          {step.fn}
                        </code>
                        <StepBadge kind={step.kind} size="sm" />
                      </div>
                      <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
                        {step.note}
                      </p>
                    </div>
                  </article>
                </li>
                {!isLast && (
                  <span aria-hidden="true" className="flex items-center justify-center py-1">
                    <ArrowDownIcon className="h-3.5 w-3.5 text-cyan-500" />
                  </span>
                )}
              </Fragment>
            );
          })}
        </ol>

        {/* RIGHT — one-line summary */}
        <aside
          className={cn(
            'sticky top-24 self-start rounded-2xl border-2 p-md sm:p-lg',
            'border-blue-300 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/40',
            'dark:border-blue-700/70 dark:from-blue-950/40 dark:via-[var(--term-bg)] dark:to-cyan-950/30',
            'shadow-[0_3px_0_var(--term-border)]',
          )}
        >
          <div className="flex items-center gap-2 mb-md">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-8 w-8 items-center justify-center rounded-lg',
                'border border-blue-300 bg-blue-100 text-blue-700',
                'dark:border-blue-700/70 dark:bg-blue-900/60 dark:text-blue-200',
              )}
            >
              <SparkIcon className="h-4 w-4" />
            </span>
            <h3 className="text-xsm sm:text-sm font-bold text-blue-800 dark:text-blue-100 uppercase tracking-wider">
              {content.summaryLabel}
            </h3>
          </div>
          <p className="text-sm sm:text-md font-bold leading-snug text-blue-900 dark:text-blue-100 break-keep">
            {content.summaryLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </aside>
      </div>
    </section>
  );
};

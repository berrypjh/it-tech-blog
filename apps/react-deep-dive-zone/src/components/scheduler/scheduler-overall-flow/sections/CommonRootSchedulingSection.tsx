import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { FullFlowContent } from '../content';
import { ArrowDownIcon, ChevronRightIcon, CompassIcon, GitMergeIcon, WorkflowIcon } from '../icons';

type Props = { content: FullFlowContent['commonRoot'] };

export const CommonRootSchedulingSection = ({ content }: Props) => (
  <section aria-labelledby="heading-common-root">
    <NumberedSectionHeader
      id="common-root"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
        'border-blue-300/80 bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/30',
        'dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-indigo-950/10',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-center">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border-2 px-3 py-1',
            'font-mono text-[10px] font-bold uppercase tracking-wider',
            'border-blue-300 bg-white text-blue-800 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
          )}
        >
          <GitMergeIcon aria-hidden="true" className="h-3.5 w-3.5" />
          {content.mergeLabel}
        </span>
      </header>

      {/* horizontal pipeline */}
      <ol className="grid grid-cols-1 md:grid-flow-col md:auto-cols-fr md:items-stretch gap-2 md:gap-1">
        {content.steps.map((step, i) => {
          const isLast = i === content.steps.length - 1;
          return (
            <li key={step.label} className="contents">
              <div className="flex md:flex-col items-stretch gap-1">
                <article
                  className={cn(
                    'flex flex-col gap-1 rounded-xl border-2 p-3 flex-1 min-w-0',
                    'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
                  )}
                >
                  <header className="flex items-center gap-1.5">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white text-[10px] font-mono font-bold tabular-nums dark:bg-blue-500"
                    >
                      {i + 1}
                    </span>
                    <h3 className="text-xsm sm:text-sm font-mono font-bold text-blue-800 dark:text-blue-200 break-words">
                      {step.label}
                    </h3>
                  </header>
                  <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                    {step.description}
                  </p>
                </article>
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="self-center inline-flex items-center justify-center text-blue-500 dark:text-blue-400"
                  >
                    <span className="md:hidden">
                      <ArrowDownIcon className="h-4 w-4" />
                    </span>
                    <span className="hidden md:inline-flex">
                      <ChevronRightIcon className="h-4 w-4" />
                    </span>
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <aside
        className={cn(
          'flex items-start gap-2 rounded-xl border-2 p-3',
          'border-blue-200/80 bg-blue-50/80 dark:border-blue-700/60 dark:bg-blue-950/30',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-600 text-white dark:bg-blue-500"
        >
          <CompassIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-blue-900 dark:text-blue-100 break-keep">
          {content.explanation}
        </p>
      </aside>
    </article>
  </section>
);

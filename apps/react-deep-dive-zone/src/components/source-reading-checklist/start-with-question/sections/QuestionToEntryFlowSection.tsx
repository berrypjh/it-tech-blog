import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { StartWithQuestionContent } from '../content';
import { RouteIcon, SparkIcon, WorkflowIcon } from '../icons';

type Props = { content: StartWithQuestionContent['questionToEntry'] };

export const QuestionToEntryFlowSection = ({ content }: Props) => {
  return (
    <section
      id="section-question-to-entry"
      aria-labelledby="heading-question-to-entry"
      className="space-y-lg scroll-mt-24"
    >
      <SectionHeader
        id="question-to-entry"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<WorkflowIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_11fr)_minmax(0,_9fr)] gap-md lg:gap-lg items-start">
        {/* LEFT — vertical flow */}
        <ol className="flex flex-col gap-3 relative">
          {content.steps.map((step, i) => {
            const t = toneTokens[step.tone];
            const isLast = i === content.steps.length - 1;
            return (
              <li key={step.number} className="relative">
                <article
                  className={cn(
                    'group flex items-start gap-md rounded-xl border-2 p-md',
                    'bg-white dark:bg-[var(--term-bg)]',
                    'shadow-[0_2px_0_var(--term-border)]',
                    t.border,
                    'transition-all motion-safe:hover:-translate-y-0.5',
                    t.borderHover,
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2',
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
                    <code
                      className={cn(
                        'inline-flex items-center gap-1.5 self-start rounded-md border px-2 py-1',
                        'bg-white dark:bg-[var(--term-bg)]',
                        t.border,
                        t.text,
                        'font-mono text-[11px]',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn('block h-1 w-1 rounded-full', t.dot)}
                      />
                      {step.example}
                    </code>
                  </div>
                </article>

                {!isLast && (
                  <span aria-hidden="true" className="flex justify-center my-1">
                    <span className="block h-4 w-px border-l-2 border-dashed border-[var(--term-border)]" />
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        {/* RIGHT — Example transform card */}
        <aside
          className={cn(
            'sticky top-24 self-start',
            'rounded-2xl border-2 p-md sm:p-lg',
            'border-blue-200 bg-gradient-to-br from-blue-50/70 via-white to-cyan-50/40',
            'dark:border-blue-800/60 dark:from-blue-950/40 dark:via-[var(--term-bg)] dark:to-cyan-950/30',
            'shadow-[0_3px_0_var(--term-border)]',
          )}
          aria-labelledby="example-transform-title"
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
              <RouteIcon className="h-4 w-4" />
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700/70 dark:text-blue-300/70">
                {content.exampleStepLabel}
              </span>
              <h3
                id="example-transform-title"
                className="text-md font-bold text-blue-800 dark:text-blue-100"
              >
                {content.exampleTitle}
              </h3>
            </div>
          </div>

          <dl className="flex flex-col gap-md">
            {/* Phenomenon */}
            <div className="flex flex-col gap-1.5">
              <dt className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.blockLabels.phenomenon}
              </dt>
              <dd className="text-xsm font-bold leading-snug text-[var(--term-fg)] break-keep">
                {content.examplePhenomenon}
              </dd>
            </div>

            {/* Keywords */}
            <div className="flex flex-col gap-1.5">
              <dt className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.blockLabels.keyword}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-1.5">
                  {content.exampleKeywords.map((kw) => (
                    <li key={kw}>
                      <span
                        className={cn(
                          'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5',
                          'border-cyan-300 bg-cyan-50 text-cyan-800',
                          'dark:border-cyan-700/70 dark:bg-cyan-950/40 dark:text-cyan-200',
                          'font-mono text-[10px] font-bold',
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className="block h-1 w-1 rounded-full bg-cyan-500"
                        />
                        {kw}
                      </span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>

            {/* First entry */}
            <div className="flex flex-col gap-1.5">
              <dt className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.blockLabels.entry}
              </dt>
              <dd>
                <code
                  className={cn(
                    'inline-flex items-center gap-2 rounded-md border-2 px-2.5 py-1.5',
                    'border-blue-400 bg-blue-50 text-blue-800',
                    'dark:border-blue-600/80 dark:bg-blue-950/50 dark:text-blue-100',
                    'font-mono text-xsm font-bold',
                    'shadow-[0_2px_0_var(--term-border)]',
                  )}
                >
                  <SparkIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  {content.exampleEntry}
                </code>
              </dd>
            </div>

            {/* Read next */}
            <div className="flex flex-col gap-1.5">
              <dt className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.blockLabels.next}
              </dt>
              <dd>
                <ul className="flex flex-col gap-1">
                  {content.exampleNext.map((step) => (
                    <li key={step}>
                      <code
                        className={cn(
                          'flex items-center gap-1.5 rounded-md border px-2 py-1',
                          'border-[var(--term-border)] bg-white dark:bg-[var(--term-bg)]',
                          'font-mono text-[11px] text-[var(--term-fg)]',
                        )}
                      >
                        <span aria-hidden="true" className="text-cyan-500 font-bold">
                          →
                        </span>
                        {step}
                      </code>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
};

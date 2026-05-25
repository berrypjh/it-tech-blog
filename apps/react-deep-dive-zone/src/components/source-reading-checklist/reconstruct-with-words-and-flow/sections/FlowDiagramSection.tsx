'use client';

import { Fragment, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { ReconstructContent } from '../content';
import { ArrowRightIcon, GitBranchIcon, NetworkIcon, SparkIcon } from '../icons';

type Props = { content: ReconstructContent['flowDiagram'] };

export const FlowDiagramSection = ({ content }: Props) => {
  const [activeId, setActiveId] = useState(content.examples[0].id);
  const active = content.examples.find((e) => e.id === activeId) ?? content.examples[0];

  return (
    <section
      id="section-flow-diagram"
      aria-labelledby="heading-flow-diagram"
      className="space-y-lg"
    >
      <SectionHeader
        id="flow-diagram"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<GitBranchIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
          'dark:border-slate-700 dark:bg-[var(--term-bg)]',
        )}
      >
        {/* Tabs */}
        <div role="tablist" aria-label={content.title} className="flex flex-wrap gap-2 mb-md">
          {content.examples.map((ex) => {
            const isActive = ex.id === activeId;
            return (
              <button
                key={ex.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`flow-panel-${ex.id}`}
                id={`flow-tab-${ex.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(ex.id)}
                onKeyDown={(e) => {
                  if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
                  e.preventDefault();
                  const idx = content.examples.findIndex((x) => x.id === activeId);
                  const next =
                    e.key === 'ArrowRight'
                      ? content.examples[(idx + 1) % content.examples.length]
                      : content.examples[
                          (idx - 1 + content.examples.length) % content.examples.length
                        ];
                  setActiveId(next.id);
                  document.getElementById(`flow-tab-${next.id}`)?.focus();
                }}
                className={cn(
                  'inline-flex items-center gap-2 rounded-md border-2 px-3 py-2',
                  'transition-all',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                  isActive
                    ? cn(
                        'border-blue-400 bg-blue-50 text-blue-800',
                        'dark:border-blue-600/80 dark:bg-blue-950/40 dark:text-blue-100',
                        'shadow-[0_2px_0_var(--term-border)]',
                      )
                    : cn(
                        'border-[var(--term-border)] bg-white text-[var(--term-fg)]',
                        'dark:bg-[var(--term-bg)]',
                        'hover:border-blue-300',
                      ),
                )}
              >
                <NetworkIcon className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="text-xsm font-bold">{ex.title}</span>
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <article
          id={`flow-panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`flow-tab-${active.id}`}
          aria-live="polite"
          tabIndex={0}
          className={cn(
            'flex flex-col gap-md rounded-xl border-2 p-md sm:p-lg',
            'border-blue-200 bg-blue-50/40',
            'dark:border-blue-800/60 dark:bg-blue-950/20',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
          )}
        >
          {/* Flow */}
          <ul
            className={cn(
              'flex flex-wrap items-center gap-1.5 rounded-lg border-2 p-md',
              'border-blue-300 bg-white',
              'dark:border-blue-700/70 dark:bg-[var(--term-bg)]',
            )}
          >
            {active.flow.map((node, i) => (
              <Fragment key={`${active.id}-${i}`}>
                <li>
                  <code
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-full border-2 px-2.5 py-1',
                      'border-blue-300 bg-blue-50 text-blue-800',
                      'dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-100',
                      'font-mono text-[11px] sm:text-xsm font-bold',
                      'shadow-[0_2px_0_var(--term-border)]',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-blue-400 bg-white text-[9px] font-bold tabular-nums dark:bg-[var(--term-bg)]"
                    >
                      {i + 1}
                    </span>
                    {node}
                  </code>
                </li>
                {i < active.flow.length - 1 && (
                  <li aria-hidden="true">
                    <ArrowRightIcon className="h-3.5 w-3.5 text-blue-500" />
                  </li>
                )}
              </Fragment>
            ))}
          </ul>

          {/* Explanation */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
              {content.explanationLabel}
            </span>
            <p className="text-xsm sm:text-sm leading-relaxed text-blue-900 dark:text-blue-100 break-keep">
              {active.explanation}
            </p>
          </div>
        </article>

        {/* Emphasis banner */}
        <aside
          className={cn(
            'mt-md flex items-start gap-3 rounded-xl border-2 p-md',
            'border-violet-300 bg-violet-50 text-violet-900',
            'dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-100',
          )}
          aria-label="emphasis"
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
              'border border-violet-300 bg-white text-violet-700',
              'dark:border-violet-700/70 dark:bg-[var(--term-bg)] dark:text-violet-200',
            )}
          >
            <SparkIcon className="h-4 w-4" />
          </span>
          <p className="text-sm sm:text-md font-bold leading-snug break-keep">{content.emphasis}</p>
        </aside>
      </div>
    </section>
  );
};

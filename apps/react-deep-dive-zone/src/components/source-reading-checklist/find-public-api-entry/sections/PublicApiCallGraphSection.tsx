'use client';

import { Fragment, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { FindPublicApiEntryContent, LayerKey } from '../content';
import { ArrowDownIcon, FileCodeIcon, NetworkIcon, SparkIcon, TargetIcon } from '../icons';
import { layerToneKey } from '../layerTone';

type Props = { content: FindPublicApiEntryContent['callGraph'] };

const layerLabel: Record<LayerKey, string> = {
  user: 'user',
  public: 'public',
  dispatcher: 'dispatcher',
  internal: 'internal',
};

export const PublicApiCallGraphSection = ({ content }: Props) => {
  const [activeId, setActiveId] = useState(content.tabs[0].id);
  const active = content.tabs.find((t) => t.id === activeId) ?? content.tabs[0];

  return (
    <section id="section-call-graph" aria-labelledby="heading-call-graph" className="space-y-lg">
      <SectionHeader
        id="call-graph"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<NetworkIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
          'dark:border-slate-700 dark:bg-[var(--term-bg)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_9fr)_minmax(0,_11fr)] gap-md lg:gap-lg">
          {/* LEFT — Tab list */}
          <div className="flex flex-col gap-sm">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
              {content.tabsLabel}
            </span>
            <div
              role="tablist"
              aria-label={content.tabsLabel}
              aria-orientation="vertical"
              className="flex flex-col gap-2"
            >
              {content.tabs.map((tab) => {
                const isActive = tab.id === activeId;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    id={`callgraph-tab-${tab.id}`}
                    aria-selected={isActive}
                    aria-controls={`callgraph-panel-${tab.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveId(tab.id)}
                    onKeyDown={(e) => {
                      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
                      e.preventDefault();
                      const idx = content.tabs.findIndex((t) => t.id === activeId);
                      const next =
                        e.key === 'ArrowDown'
                          ? content.tabs[(idx + 1) % content.tabs.length]
                          : content.tabs[(idx - 1 + content.tabs.length) % content.tabs.length];
                      setActiveId(next.id);
                      const el = document.getElementById(`callgraph-tab-${next.id}`);
                      el?.focus();
                    }}
                    className={cn(
                      'group flex items-center justify-between gap-3 rounded-xl border-2 p-3 text-left',
                      'transition-all',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                      isActive
                        ? cn(
                            'border-blue-400 bg-blue-50 text-blue-800',
                            'dark:border-blue-600/80 dark:bg-blue-950/40 dark:text-blue-100',
                            'shadow-[0_2px_0_var(--term-border)]',
                          )
                        : cn(
                            'border-[var(--term-border)] bg-white dark:bg-[var(--term-bg)]',
                            'hover:border-blue-300 dark:hover:border-blue-700/70',
                            'motion-safe:hover:-translate-y-0.5',
                          ),
                    )}
                  >
                    <span className="flex items-center gap-2 min-w-0">
                      <span
                        aria-hidden="true"
                        className={cn(
                          'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border',
                          isActive
                            ? 'border-blue-400 bg-white text-blue-700 dark:border-blue-500/80 dark:bg-[var(--term-bg)] dark:text-blue-200'
                            : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
                        )}
                      >
                        <TargetIcon className="h-3.5 w-3.5" />
                      </span>
                      <code
                        className={cn(
                          'font-mono text-xsm sm:text-sm font-bold truncate',
                          isActive ? 'text-blue-800 dark:text-blue-100' : 'text-[var(--term-fg)]',
                        )}
                      >
                        {tab.api}
                      </code>
                    </span>
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="inline-block h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Result panel */}
          <article
            id={`callgraph-panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`callgraph-tab-${active.id}`}
            aria-live="polite"
            tabIndex={0}
            className={cn(
              'flex flex-col gap-md rounded-xl border-2 p-md sm:p-lg',
              'border-blue-200 bg-gradient-to-br from-blue-50/60 via-white to-cyan-50/40',
              'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/20',
              'shadow-[0_2px_0_var(--term-border)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
            )}
          >
            {/* API + signature */}
            <header className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                  {content.resultLabels.api}
                </span>
                <code className="font-mono text-md sm:text-lg font-bold text-blue-800 dark:text-blue-100">
                  {active.api}
                </code>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                  {content.resultLabels.signature}
                </span>
                <pre
                  className={cn(
                    'overflow-x-auto rounded-md border px-2.5 py-1.5',
                    'border-blue-200 bg-white dark:border-blue-800/60 dark:bg-[var(--term-bg)]',
                    'font-mono text-xsm text-[var(--term-fg)]',
                  )}
                >
                  <code>{active.signature}</code>
                </pre>
              </div>
            </header>

            {/* Call graph */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.resultLabels.graph}
              </span>
              <ol className="flex flex-col gap-0">
                {active.graph.map((node, i) => {
                  const tone = toneTokens[layerToneKey[node.layer]];
                  const isLast = i === active.graph.length - 1;
                  return (
                    <Fragment key={`${active.id}-${i}`}>
                      <li
                        className={cn(
                          'flex items-center gap-2.5 rounded-xl border-2 px-3 py-2',
                          'bg-white dark:bg-[var(--term-bg)]',
                          tone.border,
                          node.emphasize && cn(tone.chip, 'shadow-[0_2px_0_var(--term-border)]'),
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border',
                            'font-mono text-[10px] font-bold tabular-nums',
                            tone.chip,
                          )}
                        >
                          {i + 1}
                        </span>
                        <code
                          className={cn(
                            'font-mono text-xsm sm:text-sm break-keep',
                            node.emphasize ? cn(tone.text, 'font-bold') : 'text-[var(--term-fg)]',
                          )}
                        >
                          {node.label}
                        </code>
                        <span
                          className={cn(
                            'ml-auto inline-flex items-center rounded-full border px-2 py-0.5',
                            tone.border,
                            tone.text,
                            'text-[9px] font-mono font-bold uppercase tracking-wider',
                          )}
                        >
                          {layerLabel[node.layer]}
                        </span>
                      </li>
                      {!isLast && (
                        <span
                          aria-hidden="true"
                          className="flex items-center justify-center py-0.5"
                        >
                          <ArrowDownIcon className="h-3.5 w-3.5 text-cyan-500" />
                        </span>
                      )}
                    </Fragment>
                  );
                })}
              </ol>
            </div>

            {/* Reading point */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.resultLabels.readingPoint}
              </span>
              <div
                className={cn(
                  'flex items-start gap-2 rounded-md border-2 p-3',
                  'border-amber-300 bg-amber-50 text-amber-900',
                  'dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-100',
                )}
              >
                <SparkIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <p className="text-xsm sm:text-sm font-bold leading-snug break-keep">
                  {active.readingPoint}
                </p>
              </div>
            </div>

            {/* Keywords */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.resultLabels.keywords}
              </span>
              <ul className="flex flex-wrap gap-1.5">
                {active.keywords.map((kw) => (
                  <li key={kw}>
                    <span
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5',
                        'border-blue-300 bg-white text-blue-800',
                        'dark:border-blue-700/70 dark:bg-[var(--term-bg)] dark:text-blue-200',
                        'font-mono text-[10px] font-bold',
                      )}
                    >
                      <FileCodeIcon className="h-3 w-3" aria-hidden="true" />
                      {kw}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

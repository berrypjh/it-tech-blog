'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { ExperimentTab, TabKey, UseStateInternalsContent } from '../content';
import { LightbulbIcon, SparklesIcon } from '../icons';

type Props = { content: UseStateInternalsContent['experiment'] };

const KEYWORDS = new Set(['const', 'let', 'var', 'function', 'return']);

const renderUserCode = (line: string) => {
  const tokens = line.split(/(\s+|[(){}[\];,.=>])/);
  return tokens.map((tok, i) => {
    if (!tok) return null;
    if (KEYWORDS.has(tok))
      return (
        <span key={i} className="text-sky-300">
          {tok}
        </span>
      );
    if (tok === 'useState')
      return (
        <span key={i} className="text-violet-300">
          {tok}
        </span>
      );
    if (tok === 'heavyInit')
      return (
        <span key={i} className="text-teal-300">
          {tok}
        </span>
      );
    if (/^['"`].*['"`]$/.test(tok))
      return (
        <span key={i} className="text-emerald-300">
          {tok}
        </span>
      );
    if (/^\d+$/.test(tok))
      return (
        <span key={i} className="text-amber-300">
          {tok}
        </span>
      );
    if (/^[a-z][a-zA-Z]*$/.test(tok))
      return (
        <span key={i} className="text-amber-200">
          {tok}
        </span>
      );
    return (
      <span key={i} className="text-slate-200">
        {tok}
      </span>
    );
  });
};

export const UseStateDissectionExperiment = ({ content }: Props) => {
  const [active, setActive] = useState<TabKey>('number');
  const tab = (content.tabs.find((t) => t.key === active) ?? content.tabs[0]) as ExperimentTab;

  return (
    <section
      aria-labelledby="heading-experiment"
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <SectionHeader
        id="experiment"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      {/* Tabs */}
      <div
        role="tablist"
        aria-label="useState experiment"
        className="mb-md flex flex-wrap gap-1 border-b border-[var(--term-border)]"
      >
        {content.tabs.map((t) => {
          const selected = t.key === active;
          return (
            <button
              key={t.key}
              type="button"
              role="tab"
              id={`exp-tab-${t.key}`}
              aria-selected={selected}
              aria-controls={`exp-panel-${t.key}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(t.key)}
              className={cn(
                'relative -mb-px inline-flex items-center gap-1.5 rounded-t-xl border-x border-t px-4 py-2',
                'text-xsm sm:text-sm font-mono font-bold transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                selected
                  ? 'border-blue-400 dark:border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-100'
                  : 'border-transparent text-[var(--term-muted)] hover:text-[var(--term-fg)] hover:bg-[var(--term-border)]/30',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-block h-1.5 w-1.5 rounded-full',
                  selected ? 'bg-blue-500 dark:bg-blue-400' : 'bg-[var(--term-dim)]',
                )}
              />
              {t.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`exp-panel-${active}`}
        aria-labelledby={`exp-tab-${active}`}
        className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_0.7fr)] gap-md"
      >
        {/* Left: user code + flow */}
        <div className="flex flex-col gap-md">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
              {content.userCodeLabel}
            </span>
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
              <pre className="overflow-x-auto px-md py-2 text-[12px] sm:text-xsm leading-[1.7] font-mono">
                <code>{renderUserCode(tab.userCode)}</code>
              </pre>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
              {content.flowLabel}
            </span>
            <ol className="flex flex-col gap-1.5">
              {tab.flow.map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 rounded-lg border border-[var(--term-border)] bg-[var(--term-border)]/15 px-3 py-2"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white text-[10px] font-mono font-bold tabular-nums dark:bg-blue-400 dark:text-slate-900"
                  >
                    {i + 1}
                  </span>
                  <p className="text-[11px] sm:text-xsm text-[var(--term-fg)] break-keep">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Center: internal structure */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
            {content.internalLabel}
          </span>
          <article
            className={cn(
              'flex-1 rounded-xl border-2 p-md font-mono text-[11px] sm:text-xsm leading-[1.85]',
              'border-cyan-300/70 bg-cyan-50/30 dark:border-cyan-800/60 dark:bg-cyan-950/20',
            )}
          >
            <ul className="flex flex-col gap-0.5">
              {tab.internal.map((row) => (
                <li key={row.key}>
                  <div className="flex items-baseline gap-1 break-all">
                    <span className="text-pink-700 dark:text-pink-300 font-bold">{row.key}:</span>
                    {row.value && (
                      <span className="text-violet-700 dark:text-violet-300">{row.value}</span>
                    )}
                  </div>
                  {row.children && (
                    <ul className="ml-3 sm:ml-4 mt-0.5 border-l-2 border-cyan-300/60 dark:border-cyan-700/60 pl-2 flex flex-col gap-0.5">
                      {row.children.map((c) => (
                        <li
                          key={c.key}
                          className="flex items-baseline gap-1 break-all text-[10px] sm:text-[11px]"
                        >
                          <span className="text-pink-700 dark:text-pink-300">{c.key}:</span>
                          <span className="text-amber-700 dark:text-amber-300">{c.value}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Right: tip card */}
        <aside
          className={cn(
            'flex flex-col gap-sm rounded-2xl border-2 p-md',
            'border-teal-300/70 bg-teal-50/60 dark:border-teal-800/60 dark:bg-teal-950/30',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900"
          >
            <LightbulbIcon className="h-5 w-5" />
          </span>
          <h3 className="text-xsm sm:text-sm font-bold text-teal-800 dark:text-teal-100 break-keep">
            {content.tipTitle}
          </h3>
          <p className="text-[11px] sm:text-xsm leading-relaxed text-teal-900/85 dark:text-teal-100/85 break-keep">
            {content.tipBody}
          </p>
        </aside>
      </div>
    </section>
  );
};

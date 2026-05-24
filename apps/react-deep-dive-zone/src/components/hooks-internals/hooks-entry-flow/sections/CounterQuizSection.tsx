'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { HooksEntryFlowContent } from '../content';
import { CheckCircleIcon, CodeIcon, HelpCircleIcon } from '../icons';

type Props = { content: HooksEntryFlowContent['quiz'] };

const renderCodeLine = (line: string, key: number) => {
  // Tokenize lightly: keywords / JSX / numbers / identifiers
  const KEYWORDS = new Set(['function', 'const', 'return']);
  const tokens = line.split(/(\s+|[(){}[\];,.<>=])/);
  return (
    <span key={key} className="block">
      {tokens.map((tok, i) => {
        if (!tok) return null;
        if (KEYWORDS.has(tok))
          return (
            <span key={i} className="text-sky-300">
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
        if (tok === 'useState' || tok === 'setCount' || tok === 'count')
          return (
            <span key={i} className="text-violet-300">
              {tok}
            </span>
          );
        if (/^[A-Z][A-Za-z0-9]*$/.test(tok))
          return (
            <span key={i} className="text-cyan-300">
              {tok}
            </span>
          );
        return (
          <span key={i} className="text-slate-200">
            {tok}
          </span>
        );
      })}
    </span>
  );
};

export const CounterQuizSection = ({ content }: Props) => {
  const answerKey = content.options.find((o) => o.isAnswer)?.key ?? null;
  const [selected, setSelected] = useState<string | null>(answerKey);

  const lines = content.counterCode.split('\n');

  return (
    <section aria-label="counter-quiz" className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg">
      {/* Left: Counter code card */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          'transition-colors hover:border-sky-300/70 dark:hover:border-sky-700/70',
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)]">
            {content.leftTitle}
          </h3>
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[var(--term-border)] bg-white text-[var(--term-muted)] dark:bg-slate-950/50"
          >
            <CodeIcon className="h-3.5 w-3.5" />
          </span>
        </header>

        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 px-md py-1.5">
            <div className="flex items-center gap-1.5">
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span
                aria-hidden="true"
                className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80"
              />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
              jsx
            </span>
          </div>
          <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.7] font-mono">
            <code>
              {lines.map((line, i) => (
                <div key={i} className="flex">
                  <span
                    aria-hidden="true"
                    className="select-none w-7 shrink-0 pr-3 text-right text-slate-600 tabular-nums"
                  >
                    {i + 1}
                  </span>
                  <span className="whitespace-pre">{renderCodeLine(line, i)}</span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      </article>

      {/* Right: quiz card */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
            {content.rightTitle}
          </h3>
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-600 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/60"
          >
            <HelpCircleIcon className="h-4 w-4" />
          </span>
        </header>

        <ul className="flex flex-col gap-2" role="radiogroup" aria-label="quiz options">
          {content.options.map((opt) => {
            const isSelected = selected === opt.key;
            return (
              <li key={opt.key}>
                <button
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => setSelected(opt.key)}
                  className={cn(
                    'group w-full flex items-center gap-3 rounded-xl border-2 px-3 py-3 text-left transition-all',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                    'motion-safe:transition-transform',
                    isSelected
                      ? 'border-blue-500 bg-blue-50/80 dark:bg-blue-950/40 dark:border-blue-400 shadow-[0_2px_0_rgba(59,130,246,0.2)]'
                      : 'border-[var(--term-border)] bg-white dark:bg-slate-950/40 hover:border-blue-300 dark:hover:border-blue-700',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors',
                      isSelected
                        ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400'
                        : 'border-[var(--term-border)] bg-white dark:bg-slate-900',
                    )}
                  >
                    {isSelected && (
                      <span className="block h-2 w-2 rounded-full bg-white dark:bg-slate-900" />
                    )}
                  </span>
                  <code
                    className={cn(
                      'font-mono text-xsm sm:text-sm font-bold',
                      isSelected ? 'text-blue-700 dark:text-blue-200' : 'text-[var(--term-fg)]',
                    )}
                  >
                    {opt.label}
                  </code>
                </button>
              </li>
            );
          })}
        </ul>

        <aside
          className={cn(
            'mt-auto flex items-start gap-sm rounded-xl border-2 p-md',
            'border-emerald-300/70 bg-emerald-50/60',
            'dark:border-emerald-800/60 dark:bg-emerald-950/30',
          )}
          aria-live="polite"
        >
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900"
          >
            <CheckCircleIcon className="h-4 w-4" />
          </span>
          <div className="flex flex-col gap-1 min-w-0">
            <p className="text-xsm sm:text-sm font-bold text-emerald-800 dark:text-emerald-100">
              {content.answerTitle}
            </p>
            <p className="text-[11px] sm:text-xsm leading-relaxed text-emerald-900/85 dark:text-emerald-100/85 break-keep">
              {content.answerDescription}
            </p>
          </div>
        </aside>
      </article>
    </section>
  );
};

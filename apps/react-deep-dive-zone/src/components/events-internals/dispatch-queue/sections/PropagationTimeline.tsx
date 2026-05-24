'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { DispatchQueueOrderContent } from '../content';
import { BanIcon, ClockIcon, PlayCircleIcon, ShieldOffIcon } from '../icons';

type Props = { content: DispatchQueueOrderContent['timeline'] };

const KEYWORDS = new Set(['function', 'return', 'const']);
const renderJsxToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-blue-600 dark:text-blue-400 font-semibold">
        {tok}
      </span>
    );
  if (tok === 'onClickCapture')
    return (
      <span key={i} className="text-violet-700 dark:text-violet-300 font-bold">
        {tok}
      </span>
    );
  if (tok === 'onClick')
    return (
      <span key={i} className="text-teal-700 dark:text-teal-300 font-bold">
        {tok}
      </span>
    );
  if (tok === 'handleSectionCapture' || tok === 'handleDivClick' || tok === 'handleButtonClick')
    return (
      <span key={i} className="text-violet-700 dark:text-violet-300">
        {tok}
      </span>
    );
  if (tok === 'section' || tok === 'div' || tok === 'button')
    return (
      <span key={i} className="text-rose-600 dark:text-rose-300">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-700 dark:text-slate-200">
      {tok}
    </span>
  );
};

const entryTone = (tone: 'violet' | 'teal' | 'rose') => {
  if (tone === 'violet')
    return 'border-violet-300/80 bg-violet-50 text-violet-700 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200';
  if (tone === 'teal')
    return 'border-teal-300/80 bg-teal-50 text-teal-700 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-200';
  return 'border-rose-300/80 bg-rose-50 text-rose-700 dark:border-rose-700/70 dark:bg-rose-950/40 dark:text-rose-200';
};

const entryNumberTone = (tone: 'violet' | 'teal' | 'rose') => {
  if (tone === 'violet') return 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900';
  if (tone === 'teal') return 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900';
  return 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900';
};

export const PropagationTimeline = ({ content }: Props) => {
  const [active, setActive] = useState<'none' | 'stopped'>(content.defaultCase);
  const activeCase = content.cases.find((c) => c.key === active) ?? content.cases[0];
  const lines = content.code.split('\n');

  return (
    <section aria-labelledby="heading-timeline">
      <NumberedSectionHeader
        id="timeline"
        step={content.step}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<ClockIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
          'border-blue-200/70 bg-gradient-to-br from-blue-50/60 via-white to-violet-50/30',
          'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* Toggle */}
        <div role="radiogroup" aria-label="propagation case" className="flex flex-wrap gap-2 mb-md">
          {content.toggles.map((toggle) => {
            const isSelected = toggle.value === active;
            const isStop = toggle.value === 'stopped';
            return (
              <button
                key={toggle.value}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setActive(toggle.value)}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-xl border-2 px-4 py-2',
                  'font-mono text-xsm sm:text-sm font-bold transition-all',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                  'motion-safe:hover:-translate-y-0.5',
                  isSelected
                    ? isStop
                      ? 'border-rose-500 bg-rose-500 text-white shadow-[0_3px_0_rgba(225,29,72,0.3)] dark:border-rose-500/90 dark:bg-rose-500/90'
                      : 'border-blue-600 bg-blue-600 text-white shadow-[0_3px_0_rgba(29,78,216,0.3)] dark:border-blue-500 dark:bg-blue-500'
                    : 'border-blue-200/80 bg-white text-blue-700 hover:border-blue-400 hover:bg-blue-50 dark:border-blue-800/60 dark:bg-slate-950/40 dark:text-blue-200',
                )}
              >
                {isStop ? (
                  <ShieldOffIcon aria-hidden="true" className="h-3.5 w-3.5" />
                ) : (
                  <PlayCircleIcon aria-hidden="true" className="h-3.5 w-3.5" />
                )}
                <span>{toggle.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-md lg:gap-lg items-start">
          {/* Code */}
          <article
            className={cn(
              'overflow-hidden rounded-2xl border bg-[var(--term-bg)] shadow-[0_1px_0_var(--term-border)]',
              'border-[var(--term-border)]',
            )}
          >
            <pre className="overflow-x-auto px-md py-md text-[11px] sm:text-xsm leading-[1.85] font-mono">
              <code>
                {lines.map((line, i) => {
                  const tokens = line.split(/(\s+|[(){}[\];,.<>=/])/);
                  return (
                    <div key={i} className="flex">
                      <span
                        aria-hidden="true"
                        className="select-none w-7 shrink-0 pr-3 text-right text-[var(--term-dim)] tabular-nums"
                      >
                        {i + 1}
                      </span>
                      <span className="whitespace-pre">{tokens.map(renderJsxToken)}</span>
                    </div>
                  );
                })}
              </code>
            </pre>
          </article>

          {/* Timeline */}
          <article
            aria-live="polite"
            className={cn(
              'rounded-2xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
              active === 'stopped'
                ? 'border-rose-300/80 dark:border-rose-700/70'
                : 'border-blue-300/80 dark:border-blue-700/70',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center justify-between mb-md">
              <h3
                className={cn(
                  'text-xsm sm:text-sm font-bold break-keep',
                  active === 'stopped'
                    ? 'text-rose-700 dark:text-rose-200'
                    : 'text-blue-700 dark:text-blue-200',
                )}
              >
                {activeCase.title}
              </h3>
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-8 w-8 items-center justify-center rounded-md',
                  active === 'stopped'
                    ? 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900'
                    : 'bg-blue-500 text-white dark:bg-blue-400 dark:text-slate-900',
                )}
              >
                {active === 'stopped' ? (
                  <ShieldOffIcon className="h-4 w-4" />
                ) : (
                  <ClockIcon className="h-4 w-4" />
                )}
              </span>
            </header>

            <ol className="flex flex-col gap-1.5">
              {activeCase.entries.map((entry, i) => (
                <li
                  key={`${entry.label}-${i}`}
                  className={cn(
                    'flex items-center gap-2 rounded-lg border px-3 py-2',
                    entry.blocked && 'opacity-80',
                    entryTone(entry.tone),
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold',
                      entryNumberTone(entry.tone),
                    )}
                  >
                    {entry.blocked ? <BanIcon className="h-3 w-3" /> : entry.step}
                  </span>
                  <code className="font-mono text-[11px] sm:text-xsm font-bold break-all flex-1">
                    {entry.label}
                  </code>
                  {entry.phase && (
                    <code className="font-mono text-[10px] uppercase tracking-wider opacity-80">
                      {entry.phase}
                    </code>
                  )}
                </li>
              ))}
            </ol>

            <aside
              className={cn(
                'mt-md rounded-xl border p-md text-[11px] sm:text-xsm leading-relaxed break-keep',
                active === 'stopped'
                  ? 'border-rose-200/80 bg-rose-50/40 text-rose-900 dark:border-rose-800/60 dark:bg-rose-950/20 dark:text-rose-100'
                  : 'border-blue-200/80 bg-blue-50/40 text-blue-900 dark:border-blue-800/60 dark:bg-blue-950/20 dark:text-blue-100',
              )}
            >
              {activeCase.note}
            </aside>
          </article>
        </div>
      </div>
    </section>
  );
};

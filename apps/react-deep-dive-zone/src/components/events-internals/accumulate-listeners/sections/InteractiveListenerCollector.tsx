'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { CollectorTarget, ListenerCollectionContent, ListenerEntry } from '../content';
import { MousePointerClickIcon, PlayCircleIcon, TargetIcon } from '../icons';

type Props = { content: ListenerCollectionContent['collector'] };

const ListenerList = ({
  title,
  entries,
  emptyMessage,
  tone,
}: {
  title: string;
  entries: ListenerEntry[];
  emptyMessage: string;
  tone: 'violet' | 'teal';
}) => (
  <div
    className={cn(
      'rounded-2xl border-2 p-md',
      tone === 'violet'
        ? 'border-violet-300/80 bg-white dark:border-violet-700/70 dark:bg-slate-950/40'
        : 'border-teal-300/80 bg-white dark:border-teal-700/70 dark:bg-slate-950/40',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-2 mb-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-7 w-7 items-center justify-center rounded-md',
          tone === 'violet'
            ? 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900'
            : 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
        )}
      >
        <PlayCircleIcon className="h-3.5 w-3.5" />
      </span>
      <span
        className={cn(
          'text-[10px] font-mono font-bold uppercase tracking-wider',
          tone === 'violet'
            ? 'text-violet-700 dark:text-violet-300'
            : 'text-teal-700 dark:text-teal-300',
        )}
      >
        {title}
      </span>
    </header>
    {entries.length === 0 ? (
      <p className="rounded-md border border-dashed border-[var(--term-border)] bg-[var(--term-surface)]/40 px-3 py-3 text-center text-[11px] sm:text-xsm text-[var(--term-muted)] break-keep">
        {emptyMessage}
      </p>
    ) : (
      <ol className="flex flex-col gap-1.5">
        {entries.map((entry) => (
          <li
            key={entry.handler}
            className={cn(
              'flex items-center gap-2 rounded-lg border px-3 py-2',
              tone === 'violet'
                ? 'border-violet-200/70 bg-violet-50/40 dark:border-violet-800/60 dark:bg-violet-950/30'
                : 'border-teal-200/70 bg-teal-50/40 dark:border-teal-800/60 dark:bg-teal-950/30',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-mono font-bold',
                tone === 'violet'
                  ? 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900'
                  : 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
              )}
            >
              {entry.step}
            </span>
            <code
              className={cn(
                'font-mono text-[11px] sm:text-xsm font-bold break-all flex-1',
                tone === 'violet'
                  ? 'text-violet-700 dark:text-violet-200'
                  : 'text-teal-700 dark:text-teal-200',
              )}
            >
              {entry.handler}
            </code>
          </li>
        ))}
      </ol>
    )}
  </div>
);

const KEYWORDS = new Set(['function', 'return']);
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

export const InteractiveListenerCollector = ({ content }: Props) => {
  const [target, setTarget] = useState<CollectorTarget>(content.defaultTarget);
  const [tab, setTab] = useState<'capture' | 'bubble'>(content.defaultTab);

  const state = content.states[target];
  const lines = content.code.split('\n');

  return (
    <section aria-labelledby="heading-collector">
      <NumberedSectionHeader
        id="collector"
        step={content.step}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<TargetIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
          'border-blue-200/70 bg-gradient-to-br from-blue-50/60 via-white to-teal-50/30',
          'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-md lg:gap-lg items-start">
          {/* LEFT: code + target picker */}
          <div className="flex flex-col gap-md">
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

            <article
              className={cn(
                'rounded-2xl border-2 bg-[var(--term-bg)] p-md',
                'border-[var(--term-border)] shadow-[0_1px_0_var(--term-border)]',
              )}
            >
              <header className="flex items-center gap-2 mb-2">
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-blue-600 text-white dark:bg-blue-500"
                >
                  <TargetIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  {content.targetSelectorLabel}
                </span>
              </header>
              <div
                role="radiogroup"
                aria-label={content.targetSelectorLabel}
                className="flex flex-wrap gap-2"
              >
                {content.targets.map((t) => {
                  const isSelected = t.value === target;
                  return (
                    <button
                      key={t.value}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => setTarget(t.value)}
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-xl border-2 px-3 py-2',
                        'font-mono text-xsm sm:text-sm font-bold transition-all',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                        'motion-safe:hover:-translate-y-0.5',
                        isSelected
                          ? 'border-blue-600 bg-blue-600 text-white shadow-[0_3px_0_rgba(29,78,216,0.3)] dark:border-blue-500 dark:bg-blue-500'
                          : 'border-blue-200/80 bg-white text-blue-700 hover:border-blue-400 hover:bg-blue-50 dark:border-blue-800/60 dark:bg-slate-950/40 dark:text-blue-200 dark:hover:bg-blue-950/40',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          'block h-1.5 w-1.5 rounded-full',
                          isSelected ? 'bg-white/90' : 'bg-blue-500 dark:bg-blue-400',
                        )}
                      />
                      <span>{t.label}</span>
                      {t.recommended && (
                        <span className="text-[9px] font-mono uppercase tracking-wider opacity-80">
                          (rec.)
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              <p className="mt-3 text-[10px] sm:text-[11px] font-mono text-[var(--term-muted)]">
                {content.currentSelectionLabel}:{' '}
                <code className="font-mono text-blue-700 dark:text-blue-300 break-all">
                  {state.currentLabel}
                </code>
              </p>
            </article>
          </div>

          {/* RIGHT: tab + result */}
          <article
            aria-live="polite"
            className={cn(
              'rounded-2xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
              'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <div role="tablist" aria-label="phase" className="flex gap-2 mb-md">
              {content.tabs.map((t) => {
                const isSelected = t.value === tab;
                const accent = t.value === 'capture' ? 'violet' : 'teal';
                return (
                  <button
                    key={t.value}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setTab(t.value)}
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-xl border-2 px-4 py-2',
                      'font-mono text-xsm sm:text-sm font-bold transition-all',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                      'motion-safe:hover:-translate-y-0.5',
                      isSelected
                        ? accent === 'violet'
                          ? 'border-violet-500 bg-violet-500 text-white shadow-[0_3px_0_rgba(124,58,237,0.3)] dark:border-violet-400 dark:bg-violet-400 dark:text-slate-900'
                          : 'border-teal-500 bg-teal-500 text-white shadow-[0_3px_0_rgba(13,148,136,0.3)] dark:border-teal-400 dark:bg-teal-400 dark:text-slate-900'
                        : accent === 'violet'
                          ? 'border-violet-200/80 bg-white text-violet-700 hover:border-violet-400 dark:border-violet-800/60 dark:bg-slate-950/40 dark:text-violet-200'
                          : 'border-teal-200/80 bg-white text-teal-700 hover:border-teal-400 dark:border-teal-800/60 dark:bg-slate-950/40 dark:text-teal-200',
                    )}
                  >
                    <MousePointerClickIcon
                      aria-hidden="true"
                      className={cn(
                        'h-3.5 w-3.5 shrink-0',
                        isSelected ? 'opacity-80' : 'opacity-60',
                      )}
                    />
                    <span>{t.label}</span>
                  </button>
                );
              })}
            </div>

            {tab === 'capture' ? (
              <ListenerList
                title={content.captureTitle}
                entries={state.capture}
                emptyMessage={content.emptyMessage}
                tone="violet"
              />
            ) : (
              <ListenerList
                title={content.bubbleTitle}
                entries={state.bubble}
                emptyMessage={content.emptyMessage}
                tone="teal"
              />
            )}
          </article>
        </div>
      </div>
    </section>
  );
};

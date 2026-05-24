'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { SyntheticEventContent } from '../content';
import {
  EyeIcon,
  InfoIcon,
  MousePointerClickIcon,
  RefreshCwIcon,
  ShieldOffIcon,
  TerminalIcon,
} from '../icons';

type Props = { content: SyntheticEventContent['inspector'] };

export const InteractiveEventInspector = ({ content }: Props) => {
  const [stopped, setStopped] = useState(false);
  const [log, setLog] = useState<string[]>([content.logEntries.initial]);

  const handleStop = () => {
    if (!stopped) {
      setStopped(true);
      setLog((prev) => [...prev, content.logEntries.afterStop]);
    }
  };

  const handleReset = () => {
    setStopped(false);
    setLog([content.logEntries.initial, content.logEntries.afterReset]);
  };

  return (
    <section aria-labelledby="heading-inspector">
      <NumberedSectionHeader
        id="inspector"
        step={content.step}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<EyeIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
          'border-blue-200/70 bg-gradient-to-br from-blue-50/60 via-white to-violet-50/30',
          'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-md items-stretch">
          {/* LEFT: Test UI */}
          <article
            className={cn(
              'flex flex-col gap-2 rounded-2xl border-2 p-md',
              'border-blue-300/80 bg-white dark:border-blue-700/70 dark:bg-slate-950/40',
              'shadow-[0_1px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white dark:bg-blue-500"
              >
                <MousePointerClickIcon className="h-4 w-4" />
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                {content.testUiTitle}
              </span>
            </header>
            <div
              className={cn(
                'rounded-xl border-2 border-dashed bg-blue-50/40 px-md py-md',
                'border-blue-300/70 dark:border-blue-700/60 dark:bg-blue-950/20',
              )}
            >
              <p className="text-[10px] font-mono uppercase tracking-wider text-blue-700 dark:text-blue-300">
                {content.panelLabel}
              </p>
              <div
                className={cn(
                  'mt-3 inline-flex items-center gap-2 rounded-lg border-2 bg-white px-3 py-2',
                  'border-blue-400/80 text-blue-700 shadow-[0_2px_0_rgba(29,78,216,0.2)]',
                  'dark:border-blue-500/70 dark:bg-slate-950/60 dark:text-blue-200',
                )}
              >
                <span
                  aria-hidden="true"
                  className="block h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-300"
                />
                <code className="font-mono text-xsm sm:text-sm font-bold">
                  {content.buttonLabel}
                </code>
              </div>
            </div>
          </article>

          {/* MIDDLE: Usage */}
          <article
            className={cn(
              'flex flex-col gap-2 rounded-2xl border-2 p-md',
              'border-[var(--term-border)] bg-[var(--term-bg)]',
              'shadow-[0_1px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-violet-200 bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-200 dark:border-violet-800/60"
              >
                <InfoIcon className="h-4 w-4" />
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
                {content.usageTitle}
              </span>
            </header>
            <p className="text-[11px] sm:text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
              {content.usageBody}
            </p>

            <div className="mt-auto flex flex-col gap-2">
              <button
                type="button"
                onClick={handleStop}
                disabled={stopped}
                aria-pressed={stopped}
                className={cn(
                  'group inline-flex items-center justify-center gap-2 rounded-xl border-2 px-3 py-2',
                  'font-mono text-xsm sm:text-sm font-bold transition-all',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                  'motion-safe:hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0',
                  stopped
                    ? 'border-rose-300/80 bg-rose-50 text-rose-700 dark:border-rose-700/70 dark:bg-rose-950/40 dark:text-rose-200'
                    : 'border-rose-500 bg-rose-500 text-white shadow-[0_3px_0_rgba(225,29,72,0.3)] dark:bg-rose-500/90',
                )}
              >
                <ShieldOffIcon aria-hidden="true" className="h-4 w-4" />
                <span>{content.controls.stopPropagation}</span>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className={cn(
                  'group inline-flex items-center justify-center gap-2 rounded-xl border-2 px-3 py-2',
                  'font-mono text-xsm sm:text-sm font-bold transition-all',
                  'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
                  'hover:border-blue-400 hover:bg-blue-50/40 dark:hover:border-blue-700/70 dark:hover:bg-blue-950/20',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                  'motion-safe:hover:-translate-y-0.5',
                )}
              >
                <RefreshCwIcon aria-hidden="true" className="h-4 w-4" />
                <span>{content.controls.reset}</span>
              </button>
            </div>
          </article>

          {/* RIGHT: Inspector */}
          <article
            aria-live="polite"
            className={cn(
              'flex flex-col gap-2 rounded-2xl border-2 p-md',
              'border-violet-300/80 bg-white dark:border-violet-700/70 dark:bg-slate-950/40',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900"
                >
                  <TerminalIcon className="h-4 w-4" />
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
                  {content.inspectorLabel}
                </span>
              </div>
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[10px] font-bold',
                  stopped
                    ? 'border-rose-300/80 bg-rose-50 text-rose-700 dark:border-rose-700/70 dark:bg-rose-950/40 dark:text-rose-200'
                    : 'border-emerald-300/80 bg-emerald-50 text-emerald-700 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200',
                )}
              >
                <span
                  aria-hidden="true"
                  className="block h-1.5 w-1.5 rounded-full bg-current opacity-70"
                />
                {stopped ? 'stopped' : 'flowing'}
              </span>
            </header>

            <dl className="grid grid-cols-[auto_minmax(0,1fr)]">
              {content.fields.map((field, i) => {
                const isPropagation = field.key === 'isPropagationStopped';
                const displayValue =
                  isPropagation && stopped ? content.afterStopPropagationField.value : field.value;
                return (
                  <div key={field.key} className="contents">
                    <dt
                      className={cn(
                        'px-3 py-2 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[var(--term-muted)]',
                        i > 0 && 'border-t border-[var(--term-border)]',
                      )}
                    >
                      {field.key}
                    </dt>
                    <dd
                      className={cn(
                        'px-3 py-2 font-mono text-[11px] sm:text-xsm font-bold break-all',
                        i > 0 && 'border-t border-[var(--term-border)]',
                        isPropagation && stopped
                          ? 'text-rose-700 dark:text-rose-200'
                          : isPropagation
                            ? 'text-emerald-700 dark:text-emerald-200'
                            : 'text-violet-700 dark:text-violet-200',
                      )}
                    >
                      {displayValue}
                    </dd>
                  </div>
                );
              })}
            </dl>

            {/* Log */}
            <div
              className={cn('mt-2 rounded-lg border bg-slate-950 px-3 py-2', 'border-slate-800')}
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                {content.logTitle}
              </span>
              <ul className="mt-1 flex flex-col gap-0.5">
                {log.map((entry, i) => (
                  <li
                    key={`${i}-${entry}`}
                    className={cn(
                      'font-mono text-[11px] break-all',
                      entry.startsWith('[action]')
                        ? 'text-rose-300'
                        : entry.startsWith('[reset]')
                          ? 'text-amber-200'
                          : 'text-slate-300',
                    )}
                  >
                    {entry}
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

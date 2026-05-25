'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { ErrorBoundaryRecoverContent, SimulatorScenario } from '../content';
import {
  AtomIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  ServerCrashIcon,
  ShieldAlertIcon,
  TriangleAlertIcon,
} from '../icons';
import { phaseAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: ErrorBoundaryRecoverContent['simulator'] };

const optionIcon: Record<SimulatorScenario, React.ComponentType<{ className?: string }>> = {
  normal: CheckCircleIcon,
  error: TriangleAlertIcon,
};

const scenarioColor: Record<SimulatorScenario, { selected: string; text: string }> = {
  normal: {
    selected: 'border-emerald-400 bg-emerald-50 dark:border-emerald-500 dark:bg-emerald-950/30',
    text: 'text-emerald-700 dark:text-emerald-200',
  },
  error: {
    selected: 'border-rose-400 bg-rose-50 dark:border-rose-500 dark:bg-rose-950/30',
    text: 'text-rose-700 dark:text-rose-200',
  },
};

export const RecoverySimulator = ({ content }: Props) => {
  const [selected, setSelected] = useState<SimulatorScenario>('error');
  const result = content.results[selected];
  const sc = scenarioColor[selected];

  return (
    <section aria-labelledby="simulator-heading" className="flex flex-col gap-md">
      <SectionHeader id="simulator-heading" number={content.number} title={content.title} />

      <div
        className={cn(
          'grid grid-cols-1 gap-md rounded-3xl border-2 p-md sm:p-lg',
          'lg:grid-cols-[minmax(0,3fr)_minmax(0,7fr)]',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* LEFT: scenario selector */}
        <div className="flex flex-col gap-md">
          <h3 className="text-sm font-bold text-[var(--term-fg)]">{content.selectorTitle}</h3>
          <ul aria-label={content.selectorTitle} className="flex flex-col gap-2">
            {content.options.map((opt) => {
              const isActive = selected === opt.scenario;
              const Icon = optionIcon[opt.scenario];
              const optColor = scenarioColor[opt.scenario];
              return (
                <li key={opt.scenario}>
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setSelected(opt.scenario)}
                    className={cn(
                      'w-full text-left rounded-xl border-2 p-md transition-all',
                      'flex items-start gap-2.5',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                      isActive
                        ? optColor.selected
                        : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-[var(--term-bg)] dark:hover:border-slate-600',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
                        opt.scenario === 'normal'
                          ? 'border-emerald-200 bg-emerald-100 text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/60 dark:text-emerald-200'
                          : 'border-rose-200 bg-rose-100 text-rose-700 dark:border-rose-800/60 dark:bg-rose-950/60 dark:text-rose-200',
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="flex flex-col gap-0 min-w-0">
                      <span
                        className={cn(
                          'text-sm font-bold break-keep',
                          isActive ? optColor.text : 'text-[var(--term-fg)]',
                        )}
                      >
                        {opt.label}
                      </span>
                      <span className="text-[11px] text-[var(--term-muted)] break-keep">
                        {opt.sublabel}
                      </span>
                    </div>
                    {isActive && (
                      <CheckCircleIcon
                        aria-hidden="true"
                        className={cn('h-4 w-4 shrink-0 ml-auto', optColor.text)}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* RIGHT: timeline + result */}
        <article aria-live="polite" className="flex flex-col gap-md">
          <header className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-bold text-[var(--term-fg)]">{content.timelineTitle}</h3>
            <span
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider',
                selected === 'error'
                  ? 'border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-800/60 dark:bg-rose-950/40 dark:text-rose-200'
                  : 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-200',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'block h-1.5 w-1.5 rounded-full',
                  selected === 'error' ? 'bg-rose-500' : 'bg-emerald-500',
                )}
              />
              {selected === 'error' ? 'error' : 'normal'}
            </span>
          </header>

          {/* timeline */}
          <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {result.steps.map((step) => {
              const accent = phaseAccent[step.phase];
              return (
                <li
                  key={step.number}
                  className={cn(
                    'flex items-center gap-2 rounded-xl border-2 p-2.5',
                    accent.border,
                    accent.bg,
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-6 w-6 items-center justify-center rounded-full font-mono text-[10px] font-bold tabular-nums text-white',
                      accent.solidBg,
                    )}
                  >
                    {step.number}
                  </span>
                  <span className={cn('text-xsm font-bold break-keep', accent.text)}>
                    {step.title}
                  </span>
                  <ChevronRightIcon
                    aria-hidden="true"
                    className={cn('ml-auto h-3.5 w-3.5 shrink-0 opacity-60', accent.text)}
                  />
                </li>
              );
            })}
          </ol>

          {/* result banner */}
          <div
            className={cn(
              'rounded-2xl border-2 p-md',
              selected === 'error'
                ? 'border-rose-200 bg-rose-50/60 dark:border-rose-800/60 dark:bg-rose-950/30'
                : 'border-emerald-200 bg-emerald-50/60 dark:border-emerald-800/60 dark:bg-emerald-950/30',
            )}
          >
            <div className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2',
                  selected === 'error'
                    ? 'border-rose-300 bg-white text-rose-600 dark:border-rose-700 dark:bg-slate-900 dark:text-rose-300'
                    : 'border-emerald-300 bg-white text-emerald-600 dark:border-emerald-700 dark:bg-slate-900 dark:text-emerald-300',
                )}
              >
                {selected === 'error' ? (
                  result.previewKind === 'fallback' ? (
                    <ShieldAlertIcon className="h-6 w-6" />
                  ) : (
                    <ServerCrashIcon className="h-6 w-6" />
                  )
                ) : (
                  <AtomIcon className="h-6 w-6" />
                )}
              </span>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span
                  className={cn(
                    'text-[10px] font-mono font-bold uppercase tracking-wider',
                    sc.text,
                  )}
                >
                  {result.resultLabel}
                </span>
                <p className={cn('text-sm sm:text-md font-bold break-keep', sc.text)}>
                  {result.result}
                </p>
              </div>
            </div>
          </div>
          <p className="sr-only">
            현재 시나리오: {selected === 'error' ? '자식 Error throw' : '정상 렌더'}
          </p>
        </article>
      </div>
    </section>
  );
};

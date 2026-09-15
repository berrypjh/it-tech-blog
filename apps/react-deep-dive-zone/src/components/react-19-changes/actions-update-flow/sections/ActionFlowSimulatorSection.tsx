'use client';

import { useState } from 'react';

import { cx } from '@berrypjh/react-ui';

import type { ActionsUpdateFlowContent, SimulatorScenario } from '../content';
import {
  CheckCircleIcon,
  ChevronRightIcon,
  CircleIcon,
  PlayCircleIcon,
  RotateCcwIcon,
  TriangleAlertIcon,
  XCircleIcon,
} from '../icons';
import { danger, type StateKey, stateTone } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: ActionsUpdateFlowContent['simulator'] };

const neutralTone = {
  text: 'text-slate-500 dark:text-slate-400',
  border: 'border-slate-200/80 dark:border-slate-700/70',
  chip: 'bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-900/40 dark:text-slate-300 dark:border-slate-700',
  dot: 'bg-slate-400 dark:bg-slate-500',
  iconChip:
    'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
};

const getTone = (s: StateKey | 'neutral') => (s === 'neutral' ? neutralTone : stateTone[s]);

export const ActionFlowSimulatorSection = ({ content }: Props) => {
  const [scenario, setScenario] = useState<SimulatorScenario>(content.defaultScenario);

  const currentNote = scenario === 'success' ? content.successNote : content.failureNote;

  return (
    <section aria-labelledby="simulator-heading" className="flex flex-col">
      <SectionHeader
        id="simulator-heading"
        number={content.number}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <div
        className={cx(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_4fr)_minmax(0,_8fr)] lg:gap-lg items-stretch">
          {/* LEFT: scenario buttons */}
          <div className="flex flex-col gap-sm">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
              >
                <PlayCircleIcon className="h-3.5 w-3.5" />
              </span>
              <h3 className="text-sm font-bold text-[var(--term-fg)]">{content.scenarioLabel}</h3>
            </div>

            <div role="tablist" aria-label={content.scenarioLabel} className="flex flex-col gap-2">
              {content.scenarios.map((sc) => {
                const isActive = sc.key === scenario;
                const isFailure = sc.key === 'failure';
                return (
                  <button
                    key={sc.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setScenario(sc.key)}
                    className={cx(
                      'group flex flex-col items-start gap-1 rounded-xl border-2 p-3 text-left',
                      'transition-all motion-safe:hover:-translate-y-0.5',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                      isActive
                        ? isFailure
                          ? 'border-rose-500 bg-rose-600 text-white dark:bg-rose-500 dark:border-rose-400'
                          : 'border-emerald-500 bg-emerald-600 text-white dark:bg-emerald-500 dark:border-emerald-400'
                        : cx(
                            'bg-white text-[var(--term-fg)] dark:bg-[var(--term-bg)]',
                            'border-slate-200 dark:border-slate-700',
                            'hover:border-blue-300 dark:hover:border-blue-700/70',
                          ),
                    )}
                  >
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        {sc.key === 'success' ? (
                          <CheckCircleIcon aria-hidden="true" className="h-4 w-4" />
                        ) : (
                          <XCircleIcon aria-hidden="true" className="h-4 w-4" />
                        )}
                        <span className="font-mono text-xsm font-bold break-keep">{sc.label}</span>
                      </div>
                      <ChevronRightIcon
                        aria-hidden="true"
                        className={cx(
                          'h-3.5 w-3.5 shrink-0 transition-transform',
                          isActive
                            ? 'translate-x-0.5'
                            : 'group-hover:translate-x-0.5 motion-reduce:transform-none',
                        )}
                      />
                    </div>
                    <p
                      className={cx(
                        'text-xxsm leading-relaxed break-keep',
                        isActive ? 'text-white/85' : 'text-[var(--term-muted)]',
                      )}
                    >
                      {sc.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: flow */}
          <div className="flex flex-col gap-md">
            <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
              {content.flowLabel}
            </p>

            <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {content.steps.map((step, idx) => {
                const stateForScenario =
                  scenario === 'success'
                    ? step.successState
                    : (step.failureState ?? step.successState);
                const tone = getTone(stateForScenario);
                const isRollback = scenario === 'failure' && idx >= 4;
                return (
                  <li key={step.title}>
                    <article
                      className={cx(
                        'h-full flex flex-col gap-1.5 rounded-xl border-2 p-3',
                        'transition-colors duration-300',
                        isRollback
                          ? cx(danger.border, danger.bg)
                          : cx(tone.border, 'bg-white dark:bg-[var(--term-bg)]'),
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          aria-hidden="true"
                          className={cx(
                            'inline-flex h-6 w-6 items-center justify-center rounded-md border font-mono text-[10px] font-bold tabular-nums',
                            isRollback ? danger.iconChip : tone.iconChip,
                          )}
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span
                          aria-hidden="true"
                          className={cx(
                            'inline-flex h-5 w-5 items-center justify-center rounded-full',
                            isRollback ? danger.iconChip : tone.iconChip,
                            'border',
                          )}
                        >
                          {isRollback ? (
                            <TriangleAlertIcon className="h-3 w-3" />
                          ) : stateForScenario === 'neutral' ? (
                            <CircleIcon className="h-2 w-2" />
                          ) : (
                            <CheckCircleIcon className="h-3 w-3" />
                          )}
                        </span>
                      </div>
                      <h4
                        className={cx(
                          'text-xsm font-bold break-keep',
                          isRollback ? danger.text : tone.text,
                        )}
                      >
                        {step.title}
                      </h4>
                      <p className="text-xxsm leading-relaxed text-[var(--term-muted)] break-keep">
                        {step.caption}
                      </p>
                    </article>
                  </li>
                );
              })}
            </ol>

            {/* note bar */}
            <div
              className={cx(
                'flex items-start gap-2 rounded-xl border-2 px-3 py-2.5',
                scenario === 'failure'
                  ? cx(danger.border, danger.bg)
                  : 'border-blue-200/80 bg-blue-50/40 dark:border-blue-800/60 dark:bg-blue-950/20',
              )}
            >
              <span
                aria-hidden="true"
                className={cx(
                  'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border',
                  scenario === 'failure'
                    ? danger.iconChip
                    : 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
                )}
              >
                {scenario === 'failure' ? (
                  <RotateCcwIcon className="h-3 w-3" />
                ) : (
                  <CheckCircleIcon className="h-3 w-3" />
                )}
              </span>
              <p
                className={cx(
                  'text-xsm leading-relaxed break-keep',
                  scenario === 'failure' ? danger.text : 'text-blue-700 dark:text-blue-200',
                )}
              >
                {currentNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

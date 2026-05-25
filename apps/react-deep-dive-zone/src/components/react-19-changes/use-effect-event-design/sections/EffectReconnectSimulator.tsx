'use client';

import { Fragment, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { SimulatorStep, UseEffectEventContent } from '../content';
import {
  ArrowDownIcon,
  BellRingIcon,
  ChevronRightIcon,
  PlugIcon,
  PlugZapIcon,
  RefreshCcwIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UnplugIcon,
} from '../icons';
import { effectTone, type ToneKey } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: UseEffectEventContent['simulator'] };

const legendIcon: Record<
  SimulatorStep['legend'],
  { Icon: React.ComponentType<{ className?: string }>; tone: ToneKey }
> = {
  detect: { Icon: SparklesIcon, tone: 'concept' },
  rerun: { Icon: RefreshCcwIcon, tone: 'problem' },
  disconnect: { Icon: UnplugIcon, tone: 'problem' },
  connect: { Icon: PlugIcon, tone: 'concept' },
  connected: { Icon: PlugZapIcon, tone: 'improvement' },
  notify: { Icon: BellRingIcon, tone: 'advanced' },
  keep: { Icon: ShieldCheckIcon, tone: 'improvement' },
};

export const EffectReconnectSimulator = ({ content }: Props) => {
  const [activeKey, setActiveKey] = useState<typeof content.defaultScenario>(
    content.defaultScenario,
  );
  const current = content.scenarios.find((s) => s.key === activeKey) ?? content.scenarios[0];
  if (!current) return null;

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
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* Tabs */}
        <div className="flex flex-col gap-sm mb-md">
          <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
            {content.tabsLabel}
          </p>
          <div role="tablist" aria-label={content.tabsLabel} className="flex flex-wrap gap-2">
            {content.scenarios.map((s) => {
              const isActive = s.key === activeKey;
              return (
                <button
                  key={s.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveKey(s.key)}
                  className={cn(
                    'group inline-flex items-center gap-2 rounded-xl border-2 px-3 py-2',
                    'transition-all motion-safe:hover:-translate-y-0.5',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                    isActive
                      ? 'border-blue-500 bg-blue-600 text-white dark:bg-blue-500 dark:border-blue-400 shadow-[0_3px_0_var(--term-border)]'
                      : cn(
                          'bg-white text-[var(--term-fg)] dark:bg-[var(--term-bg)]',
                          'border-slate-200 dark:border-slate-700',
                          'hover:border-blue-300 dark:hover:border-blue-700/70',
                        ),
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'block h-2 w-2 rounded-full',
                      isActive ? 'bg-white/90' : 'bg-blue-500 dark:bg-blue-400',
                    )}
                  />
                  <span className="font-mono text-xsm font-bold break-keep">{s.tabLabel}</span>
                  <ChevronRightIcon
                    aria-hidden="true"
                    className={cn(
                      'h-3.5 w-3.5 shrink-0 transition-transform',
                      isActive
                        ? 'translate-x-0.5'
                        : 'group-hover:translate-x-0.5 motion-reduce:transform-none',
                    )}
                  />
                </button>
              );
            })}
          </div>
          <p className="font-mono text-[11px] font-bold text-blue-700 dark:text-blue-200">
            {current.scenarioLabel}
          </p>
        </div>

        {/* Main: Before / After + Legend */}
        <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_5fr)_minmax(0,_4fr)_minmax(0,_3fr)] lg:gap-md items-stretch">
          {/* Before flow */}
          <FlowColumn
            title={content.beforeTitle}
            steps={current.beforeFlow}
            result={current.beforeResult}
            resultTone={current.beforeResultTone}
            accent="problem"
          />

          {/* After flow */}
          <FlowColumn
            title={content.afterTitle}
            steps={current.afterFlow}
            result={current.afterResult}
            resultTone={current.afterResultTone}
            accent="improvement"
          />

          {/* Legend */}
          <article
            className={cn(
              'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
              'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <header>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.legendTitle}
              </span>
            </header>
            <ul className="flex flex-col gap-1.5">
              {content.legendItems.map((item) => {
                const { Icon, tone: legendTone } = legendIcon[item.legend];
                const t = effectTone[legendTone];
                return (
                  <li
                    key={item.label}
                    className={cn(
                      'flex items-center gap-2 rounded-lg border px-2.5 py-1.5',
                      t.chip,
                    )}
                  >
                    <Icon aria-hidden="true" className={cn('h-3.5 w-3.5', t.text)} />
                    <span className={cn('text-xsm font-bold break-keep', t.text)}>
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

const FlowColumn = ({
  title,
  steps,
  result,
  resultTone,
  accent,
}: {
  title: string;
  steps: SimulatorStep[];
  result: string;
  resultTone: ToneKey;
  accent: 'problem' | 'improvement';
}) => {
  const accentTone = effectTone[accent];
  const resultToneTokens = effectTone[resultTone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
        accentTone.border,
        'bg-white dark:bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header>
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
            accentTone.chip,
            'font-mono text-[10px] font-bold uppercase tracking-wider',
          )}
        >
          <span
            aria-hidden="true"
            className={cn('block h-1.5 w-1.5 rounded-full', accentTone.dot)}
          />
          {title}
        </span>
      </header>

      <ol className="flex flex-col gap-2">
        {steps.map((step, idx) => {
          const { Icon, tone: legendTone } = legendIcon[step.legend];
          const t = effectTone[legendTone];
          const isLast = idx === steps.length - 1;
          return (
            <Fragment key={`${step.title}-${idx}`}>
              <li>
                <article
                  className={cn(
                    'grid grid-cols-[auto_minmax(0,_1fr)_auto] items-center gap-2 rounded-xl border-2 px-3 py-2',
                    t.border,
                    'bg-white dark:bg-[var(--term-bg)]',
                    'shadow-[0_1px_0_var(--term-border)]',
                    'transition-all motion-safe:hover:-translate-y-0.5',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                      t.iconChip,
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className={cn('text-xsm font-bold break-keep', t.text)}>
                      {step.title}
                    </span>
                    {step.caption && (
                      <span className="text-[10px] text-[var(--term-muted)] break-keep">
                        {step.caption}
                      </span>
                    )}
                  </div>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-6 items-center px-1 rounded-md border font-mono text-[10px] font-bold tabular-nums',
                      t.chip,
                    )}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </article>
              </li>
              {!isLast && (
                <li aria-hidden="true" className="flex justify-center">
                  <span className="inline-flex h-5 w-5 items-center justify-center text-slate-400 dark:text-slate-500">
                    <ArrowDownIcon className="h-3.5 w-3.5" />
                  </span>
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>

      <div
        className={cn(
          'mt-auto flex items-start gap-2 rounded-xl border-2 px-3 py-2.5',
          resultToneTokens.borderStrong,
          resultToneTokens.bg,
        )}
      >
        <span
          aria-hidden="true"
          className={cn('mt-1 block h-2 w-2 rounded-full', resultToneTokens.dot)}
        />
        <p className={cn('text-xsm font-bold leading-relaxed break-keep', resultToneTokens.text)}>
          {result}
        </p>
      </div>
    </article>
  );
};

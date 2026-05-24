'use client';

import { useCallback, useRef, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { axisCardBorder, axisIconBox, axisPill, axisTextStrong } from '../../_shared/axisAccent';
import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { ContextAccent, RequestUpdateLaneContent, SimulatorScenario } from '../content';
import {
  ArrowRightIcon,
  ClockIcon,
  CompassIcon,
  MousePointerClickIcon,
  RefreshIcon,
  ZapIcon,
} from '../icons';

type Props = { content: RequestUpdateLaneContent['simulator'] };

const tabIcon: Record<SimulatorScenario['key'], typeof ZapIcon> = {
  click: MousePointerClickIcon,
  transition: ClockIcon,
  render: RefreshIcon,
};

const summaryDot: Record<'blue' | 'cyan' | 'teal' | 'violet' | 'amber', string> = {
  blue: 'bg-blue-500 dark:bg-blue-400',
  cyan: 'bg-cyan-500 dark:bg-cyan-400',
  teal: 'bg-teal-500 dark:bg-teal-400',
  violet: 'bg-violet-500 dark:bg-violet-400',
  amber: 'bg-amber-500 dark:bg-amber-400',
};

const StageIcon: Record<ContextAccent, typeof ZapIcon> = {
  blue: MousePointerClickIcon,
  teal: ClockIcon,
  violet: RefreshIcon,
};

const BitCells = ({
  bits,
  highlight,
  accent,
}: {
  bits: string;
  highlight: number[];
  accent: ContextAccent;
}) => {
  const set = new Set(highlight);
  return (
    <ul aria-hidden="true" className="inline-flex flex-wrap items-center gap-1">
      {bits.split('').map((b, i) => {
        const isOn = set.has(i) || b === '1';
        return (
          <li
            key={i}
            className={cn(
              'inline-flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded border font-mono text-[10px] sm:text-[11px] font-bold',
              isOn
                ? accent === 'blue'
                  ? 'bg-blue-500 border-blue-500 text-white dark:bg-blue-400 dark:border-blue-400 dark:text-slate-900'
                  : accent === 'teal'
                    ? 'bg-teal-500 border-teal-500 text-white dark:bg-teal-400 dark:border-teal-400 dark:text-slate-900'
                    : 'bg-violet-500 border-violet-500 text-white dark:bg-violet-400 dark:border-violet-400 dark:text-slate-900'
                : 'bg-white text-[var(--term-dim)] border-[var(--term-border)] dark:bg-slate-950/40',
            )}
          >
            {isOn ? '1' : '0'}
          </li>
        );
      })}
    </ul>
  );
};

export const ContextLaneSimulator = ({ content }: Props) => {
  const [active, setActive] = useState<SimulatorScenario['key']>('transition');
  const tabRefs = useRef<Partial<Record<SimulatorScenario['key'], HTMLButtonElement | null>>>({});

  const ids = content.scenarios.map((s) => s.key);
  const scenario = content.scenarios.find((s) => s.key === active) ?? content.scenarios[0];

  const focusTab = (key: SimulatorScenario['key']) => {
    const el = tabRefs.current[key];
    if (el) el.focus();
  };

  const handleKey = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, current: SimulatorScenario['key']) => {
      const idx = ids.indexOf(current);
      const total = ids.length;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const next = ids[(idx + 1) % total];
        setActive(next);
        focusTab(next);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const next = ids[(idx - 1 + total) % total];
        setActive(next);
        focusTab(next);
      } else if (e.key === 'Home') {
        e.preventDefault();
        setActive(ids[0]);
        focusTab(ids[0]);
      } else if (e.key === 'End') {
        e.preventDefault();
        const last = ids[total - 1];
        setActive(last);
        focusTab(last);
      }
    },
    [ids],
  );

  const Icon = StageIcon[scenario.accent];

  return (
    <section aria-labelledby="heading-simulator">
      <NumberedSectionHeader
        id="simulator"
        number={content.number}
        eyebrow={content.title}
        title={content.title}
        icon={<CompassIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] gap-md items-stretch">
        {/* MAIN simulator card */}
        <div
          className={cn(
            'rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          {/* tabs */}
          <div
            role="tablist"
            aria-label={content.tabsLabel}
            className="flex flex-wrap gap-1.5 -mx-1 px-1 pb-md sm:pb-lg overflow-x-auto"
          >
            {content.scenarios.map((s) => {
              const selected = s.key === active;
              const TabIcon = tabIcon[s.key];
              return (
                <button
                  key={s.key}
                  ref={(el) => {
                    tabRefs.current[s.key] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${s.key}`}
                  aria-selected={selected}
                  aria-controls={`panel-${s.key}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(s.key)}
                  onKeyDown={(e) => handleKey(e, s.key)}
                  className={cn(
                    'group inline-flex items-center gap-2 rounded-xl px-3 py-2 whitespace-nowrap',
                    'text-xsm sm:text-sm font-mono font-bold transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                    selected
                      ? cn(
                          'border-2 shadow-[0_2px_0_var(--term-border)]',
                          s.accent === 'blue' &&
                            'border-blue-500 bg-blue-50 text-blue-800 focus-visible:ring-blue-400 dark:border-blue-400 dark:bg-blue-950/40 dark:text-blue-100',
                          s.accent === 'teal' &&
                            'border-teal-500 bg-teal-50 text-teal-800 focus-visible:ring-teal-400 dark:border-teal-400 dark:bg-teal-950/40 dark:text-teal-100',
                          s.accent === 'violet' &&
                            'border-violet-500 bg-violet-50 text-violet-800 focus-visible:ring-violet-400 dark:border-violet-400 dark:bg-violet-950/40 dark:text-violet-100',
                        )
                      : 'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] hover:text-[var(--term-fg)] hover:border-blue-200 dark:hover:border-blue-700/60 focus-visible:ring-blue-400',
                  )}
                >
                  <TabIcon aria-hidden="true" className="h-3.5 w-3.5" />
                  {s.tabLabel}
                </button>
              );
            })}
          </div>

          {/* panel */}
          <div
            role="tabpanel"
            id={`panel-${scenario.key}`}
            aria-labelledby={`tab-${scenario.key}`}
            aria-live="polite"
            className="grid grid-cols-1 md:grid-cols-2 gap-md"
          >
            {/* context + lane */}
            <article
              className={cn(
                'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
                'shadow-[0_2px_0_var(--term-border)]',
                axisCardBorder[scenario.accent],
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                    axisIconBox[scenario.accent],
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  className={cn(
                    'font-mono text-[10px] uppercase tracking-wider',
                    axisTextStrong[scenario.accent],
                  )}
                >
                  {content.stageLabels.context}
                </span>
              </header>
              <h3
                className={cn(
                  'text-md sm:text-lg font-bold leading-tight break-keep',
                  axisTextStrong[scenario.accent],
                )}
              >
                {scenario.selectedContext}
              </h3>
              <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
                {scenario.contextDescription}
              </p>

              <div className="mt-2 flex flex-col gap-1.5">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
                  {content.stageLabels.lane}
                </span>
                <span
                  className={cn(
                    'inline-flex items-center self-start gap-2 rounded-xl border-2 px-3 py-1.5',
                    'font-mono text-xsm sm:text-sm font-bold',
                    axisPill[scenario.accent],
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="inline-block h-2 w-2 rounded-full bg-current"
                  />
                  {scenario.assignedLane}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
                  {content.stageLabels.bitmask}
                </span>
                <div className="overflow-x-auto">
                  <BitCells
                    bits={scenario.bitmaskExample}
                    highlight={scenario.bitmaskHighlight}
                    accent={scenario.accent}
                  />
                </div>
              </div>
            </article>

            {/* code flow */}
            <article
              className={cn(
                'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
                'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
                  {content.stageLabels.flow}
                </span>
                <span className="font-mono text-[10px] text-[var(--term-dim)]">
                  scenario: {scenario.tabLabel}
                </span>
              </header>
              <ol className="flex flex-col gap-1.5">
                {scenario.codeFlow.map((step, i) => {
                  const isLast = i === scenario.codeFlow.length - 1;
                  return (
                    <li key={step} className="flex flex-col">
                      <div
                        className={cn(
                          'flex items-center gap-2 rounded-lg border px-3 py-1.5',
                          'border-[var(--term-border)] bg-[var(--term-bg)]',
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-mono font-bold tabular-nums text-white',
                            scenario.accent === 'blue' && 'bg-blue-600 dark:bg-blue-500',
                            scenario.accent === 'teal' && 'bg-teal-600 dark:bg-teal-500',
                            scenario.accent === 'violet' && 'bg-violet-600 dark:bg-violet-500',
                          )}
                        >
                          {i + 1}
                        </span>
                        <code
                          className={cn(
                            'font-mono text-[11px] sm:text-xsm break-all',
                            isLast
                              ? axisTextStrong[scenario.accent] + ' font-bold'
                              : 'text-[var(--term-fg)]',
                          )}
                        >
                          {step}
                        </code>
                      </div>
                      {!isLast && (
                        <span
                          aria-hidden="true"
                          className="ml-3 inline-block w-px h-2 border-l border-dashed border-[var(--term-border)]"
                        />
                      )}
                    </li>
                  );
                })}
              </ol>
            </article>
          </div>
        </div>

        {/* Lane group summary */}
        <aside
          aria-label={content.laneSummaryTitle}
          className={cn(
            'flex flex-col gap-3 rounded-3xl border-2 p-md sm:p-lg',
            'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
              {content.laneSummaryTitle}
            </h3>
            <ArrowRightIcon aria-hidden="true" className="h-3.5 w-3.5 text-[var(--term-muted)]" />
          </header>
          <ul className="flex flex-col gap-1.5">
            {content.laneSummary.map((item) => (
              <li
                key={item.name}
                className={cn(
                  'flex items-start gap-3 rounded-xl border p-3',
                  'border-[var(--term-border)] bg-[var(--term-bg)] transition-colors',
                  'hover:border-blue-200 dark:hover:border-blue-700/60',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'mt-0.5 inline-block h-3 w-3 shrink-0 rounded-sm border border-[var(--term-border)]',
                    summaryDot[item.accent],
                  )}
                />
                <div className="flex flex-col min-w-0 flex-1">
                  <code className="font-mono text-xsm font-bold text-[var(--term-fg)] break-keep">
                    {item.name}
                  </code>
                  <p className="text-[11px] leading-snug text-[var(--term-muted)] break-keep">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

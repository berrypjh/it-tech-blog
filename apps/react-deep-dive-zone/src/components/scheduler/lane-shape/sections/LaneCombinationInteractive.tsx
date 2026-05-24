'use client';

import { useMemo, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { BitCellRow } from '../../_shared/BitCellRow';
import {
  laneCardBorder,
  laneDot,
  laneIconBox,
  lanePill,
  laneTextStrong,
} from '../../_shared/laneAccent';
import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { InteractiveLane, LaneBitmaskContent } from '../content';
import {
  CheckCircleIcon,
  LayersIcon,
  RefreshIcon,
  RepeatIcon,
  TimerResetIcon,
  WorkflowIcon,
  ZapIcon,
} from '../icons';

type Props = { content: LaneBitmaskContent['interactive'] };

const buttonIcon: Record<InteractiveLane['key'], typeof ZapIcon> = {
  sync: ZapIcon,
  inputContinuous: TimerResetIcon,
  default: LayersIcon,
  transition: RepeatIcon,
  retry: RefreshIcon,
};

const DEFAULT_SELECTED: InteractiveLane['key'][] = ['sync', 'default'];

export const LaneCombinationInteractive = ({ content }: Props) => {
  const [selected, setSelected] = useState<Set<InteractiveLane['key']>>(
    () => new Set(DEFAULT_SELECTED),
  );

  const toggle = (key: InteractiveLane['key']) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const { bits, activeIndexes, ranges, selectedLanes } = useMemo(() => {
    const len = content.bitLength;
    const arr = new Array<string>(len).fill('0');
    const idx: number[] = [];
    const rgs: { start: number; length: number; accent: InteractiveLane['accent'] }[] = [];
    const chosen: InteractiveLane[] = [];

    for (const lane of content.lanes) {
      if (!selected.has(lane.key)) continue;
      const visualIndex = len - 1 - lane.bitIndex;
      if (visualIndex < 0 || visualIndex >= len) continue;
      arr[visualIndex] = '1';
      idx.push(visualIndex);
      rgs.push({ start: visualIndex, length: 1, accent: lane.accent });
      chosen.push(lane);
    }

    return {
      bits: arr.join(''),
      activeIndexes: idx,
      ranges: rgs,
      selectedLanes: chosen,
    };
  }, [selected, content.bitLength, content.lanes]);

  const summary = selectedLanes.length ? selectedLanes.map((l) => l.label).join(' | ') : 'NoLanes';

  return (
    <section aria-labelledby="heading-interactive">
      <NumberedSectionHeader
        id="interactive"
        number={content.number}
        eyebrow={content.title}
        title={content.title}
        description={content.helper}
        icon={<WorkflowIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-md items-stretch">
          {/* LEFT: lane toggle buttons */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] sm:text-xsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
              {content.tip}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {content.lanes.map((lane) => {
                const isOn = selected.has(lane.key);
                const Icon = buttonIcon[lane.key];
                return (
                  <li key={lane.key} className="h-full">
                    <button
                      type="button"
                      onClick={() => toggle(lane.key)}
                      aria-pressed={isOn}
                      className={cn(
                        'w-full text-left rounded-2xl border-2 p-3 sm:p-md transition-all',
                        'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                        isOn
                          ? cn(laneCardBorder[lane.accent], 'shadow-[0_3px_0_var(--term-border)]')
                          : 'border-[var(--term-border)] bg-[var(--term-bg)] hover:border-blue-200 dark:hover:border-blue-700/60',
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          aria-hidden="true"
                          className={cn(
                            'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
                            isOn
                              ? laneIconBox[lane.accent]
                              : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
                          )}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <span
                          className={cn(
                            'font-mono text-xsm sm:text-sm font-bold leading-tight break-keep',
                            isOn ? laneTextStrong[lane.accent] : 'text-[var(--term-fg)]',
                          )}
                        >
                          {lane.label}
                        </span>
                        <span
                          aria-hidden="true"
                          className="ml-auto inline-flex h-5 w-5 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)]"
                        >
                          {isOn && (
                            <CheckCircleIcon
                              className={cn('h-4 w-4', laneTextStrong[lane.accent])}
                              strokeWidth={2.4}
                            />
                          )}
                        </span>
                      </div>
                      <p
                        className={cn(
                          'mt-1 font-mono text-[10px]',
                          isOn ? laneTextStrong[lane.accent] : 'text-[var(--term-dim)]',
                        )}
                      >
                        bit {lane.bitIndex} {isOn ? '· ON' : '· off'}
                      </p>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* RIGHT: result */}
          <aside
            aria-live="polite"
            className={cn(
              'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
              'border-blue-300/90 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/40',
              'dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/20',
              'shadow-[0_3px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center justify-between gap-2">
              <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep font-mono">
                {content.resultTitle}
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
                {selectedLanes.length} bit{selectedLanes.length === 1 ? '' : 's'} on
              </span>
            </header>

            <div className="overflow-x-auto">
              <BitCellRow
                bits={bits}
                activeIndexes={activeIndexes}
                ranges={ranges}
                accent="sync"
                size="md"
                srLabel={`pendingLanes ${summary}`}
              />
            </div>

            <p className="font-mono text-xsm sm:text-sm text-[var(--term-fg)] break-all">
              <span className="text-[var(--term-muted)]">{'// '}</span>
              {summary}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.legendLabel}:
              </span>
              {content.lanes.map((lane) => (
                <span
                  key={lane.key}
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5',
                    'text-[10px] sm:text-xsm font-mono',
                    lanePill[lane.accent],
                    !selected.has(lane.key) && 'opacity-50',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn('block h-2 w-2 rounded-full', laneDot[lane.accent])}
                  />
                  {lane.label}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

'use client';

import { useMemo, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { axisCardBorder, axisIconBox, axisPill, axisTextStrong } from '../../_shared/axisAccent';
import { BitCellRow } from '../../_shared/BitCellRow';
import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { LaneAccent } from '../../lane-shape/content';
import type { RootPendingWorkContent, SimulatorLane } from '../content';
import {
  CogIcon,
  DatabaseIcon,
  PlayCircleIcon,
  PlusIcon,
  RefreshIcon,
  RotateCcwIcon,
  ZapIcon,
} from '../icons';

type Props = { content: RootPendingWorkContent['simulator'] };

const BIT_LEN = 16;

const ACCENT_TO_LANE: Record<SimulatorLane['accent'], LaneAccent> = {
  blue: 'sync',
  teal: 'default',
  violet: 'transition',
};

const buttonIcon: Record<SimulatorLane['key'], typeof ZapIcon> = {
  sync: ZapIcon,
  transition: RefreshIcon,
  retry: PlayCircleIcon,
};

export const PendingLanesSimulator = ({ content }: Props) => {
  const [value, setValue] = useState(0);

  const handleAdd = (lane: SimulatorLane) => {
    setValue((prev) => prev | (1 << lane.bitIndex));
  };

  const handleReset = () => setValue(0);

  const { bits, decimal, hasWork, activeLanes, ranges } = useMemo(() => {
    let bin = value.toString(2).padStart(BIT_LEN, '0');
    if (bin.length > BIT_LEN) bin = bin.slice(-BIT_LEN);

    const active: SimulatorLane[] = [];
    const rgs: { start: number; length: number; accent: LaneAccent }[] = [];
    for (const lane of content.lanes) {
      const isOn = (value & (1 << lane.bitIndex)) !== 0;
      if (isOn) {
        active.push(lane);
        const visualIndex = BIT_LEN - 1 - lane.bitIndex;
        if (visualIndex >= 0 && visualIndex < BIT_LEN) {
          rgs.push({ start: visualIndex, length: 1, accent: ACCENT_TO_LANE[lane.accent] });
        }
      }
    }
    return {
      bits: bin,
      decimal: value,
      hasWork: value !== 0,
      activeLanes: active,
      ranges: rgs,
    };
  }, [value, content.lanes]);

  return (
    <section aria-labelledby="heading-simulator">
      <NumberedSectionHeader
        id="simulator"
        number={content.number}
        eyebrow={content.title}
        title={content.title}
        icon={<CogIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,5fr)_minmax(0,3fr)] gap-md items-stretch">
        {/* Action panel */}
        <article
          className={cn(
            'flex h-full flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
            'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60"
            >
              <CogIcon className="h-4 w-4" />
            </span>
            <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
              {content.actionTitle}
            </h3>
          </header>

          <ul className="flex flex-col gap-2">
            {content.lanes.map((lane) => {
              const Icon = buttonIcon[lane.key];
              const isOn = (value & (1 << lane.bitIndex)) !== 0;
              return (
                <li key={lane.key}>
                  <button
                    type="button"
                    onClick={() => handleAdd(lane)}
                    className={cn(
                      'w-full inline-flex items-center gap-3 rounded-xl border-2 p-3 transition-all text-left',
                      'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                      isOn
                        ? cn(
                            axisCardBorder[lane.accent],
                            'shadow-[0_2px_0_var(--term-border)]',
                            lane.accent === 'blue' && 'focus-visible:ring-blue-400',
                            lane.accent === 'teal' && 'focus-visible:ring-teal-400',
                            lane.accent === 'violet' && 'focus-visible:ring-violet-400',
                          )
                        : 'border-[var(--term-border)] bg-[var(--term-bg)] hover:border-blue-200 dark:hover:border-blue-700/60 focus-visible:ring-blue-400',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
                        isOn
                          ? axisIconBox[lane.accent]
                          : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                      <span
                        className={cn(
                          'text-xsm sm:text-sm font-bold leading-tight break-keep',
                          isOn ? axisTextStrong[lane.accent] : 'text-[var(--term-fg)]',
                        )}
                      >
                        {lane.buttonLabel}
                      </span>
                      <span
                        className={cn(
                          'font-mono text-[10px] uppercase tracking-wider',
                          isOn ? axisTextStrong[lane.accent] : 'text-[var(--term-dim)]',
                        )}
                      >
                        {lane.label} · bit {lane.bitIndex}
                      </span>
                    </div>
                    <PlusIcon
                      aria-hidden="true"
                      className={cn(
                        'h-4 w-4 shrink-0',
                        isOn ? axisTextStrong[lane.accent] : 'text-[var(--term-muted)]',
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={handleReset}
            disabled={!hasWork}
            className={cn(
              'mt-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-2.5',
              'font-bold text-xsm sm:text-sm transition-all',
              'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
              'shadow-[0_2px_0_var(--term-border)]',
              'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
              'hover:border-rose-300 dark:hover:border-rose-700/60',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0',
            )}
          >
            <RotateCcwIcon aria-hidden="true" className="h-4 w-4" />
            <span>{content.resetLabel}</span>
          </button>
        </article>

        {/* Bitmask panel */}
        <article
          aria-live="polite"
          className={cn(
            'flex h-full flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
            'border-teal-300/80 bg-gradient-to-br from-teal-50/80 via-white to-blue-50/40',
            'dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/20',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60"
              >
                <DatabaseIcon className="h-4 w-4" />
              </span>
              <h3 className="text-sm sm:text-md font-bold text-teal-700 dark:text-teal-300 break-keep">
                {content.bitmaskTitle}
              </h3>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
              {content.bitmaskSubtitle}
            </span>
          </header>

          {/* bit index labels (high → low) */}
          <ul
            aria-hidden="true"
            className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto pr-1 text-[9px] font-mono text-[var(--term-dim)] tabular-nums"
          >
            {Array.from({ length: BIT_LEN }, (_, i) => BIT_LEN - 1 - i).map((idx) => (
              <li key={idx} className="inline-flex h-4 w-6 sm:w-7 items-center justify-center">
                {idx}
              </li>
            ))}
          </ul>

          <div className="overflow-x-auto">
            <BitCellRow
              bits={bits}
              accent="default"
              ranges={ranges}
              size="lg"
              srLabel={`pendingLanes ${bits} (${decimal})`}
            />
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            <div className="flex flex-col gap-0.5">
              <dt className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.binaryLabel}
              </dt>
              <dd className="font-mono text-xsm sm:text-sm text-[var(--term-fg)] break-all">
                0b{bits}
              </dd>
            </div>
            <div className="flex flex-col gap-0.5">
              <dt className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.decimalLabel}
              </dt>
              <dd className="font-mono text-xsm sm:text-sm text-[var(--term-fg)] tabular-nums">
                {decimal}
              </dd>
            </div>
          </dl>
        </article>

        {/* Status panel */}
        <article
          className={cn(
            'flex h-full flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
            'shadow-[0_2px_0_var(--term-border)]',
            hasWork
              ? 'border-blue-300/80 bg-gradient-to-br from-blue-50/70 via-white to-violet-50/40 dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/20'
              : 'border-[var(--term-border)] bg-[var(--term-bg)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                hasWork
                  ? 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60'
                  : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
              )}
            >
              <CogIcon className="h-4 w-4" />
            </span>
            <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
              {content.statusTitle}
            </h3>
          </header>

          <p
            className={cn(
              'inline-flex items-center self-start gap-2 rounded-full border-2 px-3 py-1.5',
              'font-mono text-xsm sm:text-sm font-bold',
              hasWork
                ? 'border-blue-300/80 bg-blue-50 text-blue-800 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200'
                : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-block h-2 w-2 rounded-full',
                hasWork ? 'bg-blue-500 dark:bg-blue-400' : 'bg-[var(--term-dim)]',
              )}
            />
            {hasWork ? content.activeStatus : content.emptyStatus}
          </p>

          {activeLanes.length > 0 && (
            <ul className="flex flex-wrap gap-1.5">
              {activeLanes.map((lane) => (
                <li key={lane.key}>
                  <code
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-[10px] sm:text-[11px] font-semibold',
                      axisPill[lane.accent],
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-block h-1.5 w-1.5 rounded-full',
                        lane.accent === 'blue' && 'bg-blue-500',
                        lane.accent === 'teal' && 'bg-teal-500',
                        lane.accent === 'violet' && 'bg-violet-500',
                      )}
                    />
                    {lane.label}
                  </code>
                </li>
              ))}
            </ul>
          )}

          <p className="mt-auto text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.description}
          </p>
        </article>
      </div>
    </section>
  );
};

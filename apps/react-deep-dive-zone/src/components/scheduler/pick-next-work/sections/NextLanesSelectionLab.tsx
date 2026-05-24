'use client';

import { useMemo, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { BitCellRow } from '../../_shared/BitCellRow';
import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { LaneAccent } from '../../lane-shape/content';
import type { LabLane, RootSchedulerContent } from '../content';
import {
  CheckCircleIcon,
  CompassIcon,
  EyeIcon,
  LayersIcon,
  RotateCcwIcon,
  TargetIcon,
  ZapIcon,
} from '../icons';
import { schedCardBorder, schedIconBox, schedPill, schedTextStrong } from '../schedulerAccent';

type Props = { content: RootSchedulerContent['lab'] };

const BIT_LEN = 31;

const ACCENT_TO_LANE: Record<LabLane['accent'], LaneAccent> = {
  blue: 'sync',
  teal: 'default',
  violet: 'transition',
  slate: 'offscreen',
};

const laneIcon: Record<LabLane['key'], typeof ZapIcon> = {
  sync: ZapIcon,
  transition: LayersIcon,
  retry: TargetIcon,
  idle: EyeIcon,
};

export const NextLanesSelectionLab = ({ content }: Props) => {
  // selected lanes initially all on (as in design — pendingLanes are all four)
  const [selected, setSelected] = useState<Set<LabLane['key']>>(
    () => new Set<LabLane['key']>(content.lanes.map((l) => l.key)),
  );
  const [excludeSync, setExcludeSync] = useState(false);

  const toggleLane = (key: LabLane['key']) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const handleReset = () => {
    setSelected(new Set<LabLane['key']>(content.lanes.map((l) => l.key)));
    setExcludeSync(false);
  };

  const { pendingValue, pendingBits, pendingDecimal, selectedLane, candidates, ranges } =
    useMemo(() => {
      let value = 0;
      const cands: LabLane[] = [];
      const rgs: { start: number; length: number; accent: LaneAccent }[] = [];
      for (const lane of content.lanes) {
        if (!selected.has(lane.key)) continue;
        value |= 1 << lane.bitIndex;
        cands.push(lane);
        const visualIndex = BIT_LEN - 1 - lane.bitIndex;
        if (visualIndex >= 0 && visualIndex < BIT_LEN) {
          rgs.push({ start: visualIndex, length: 1, accent: ACCENT_TO_LANE[lane.accent] });
        }
      }

      let bin = value.toString(2).padStart(BIT_LEN, '0');
      if (bin.length > BIT_LEN) bin = bin.slice(-BIT_LEN);

      // Select next lane: smallest priority number among candidates,
      // skipping sync if excludeSync is on
      const eligible = cands.filter((l) => !(excludeSync && l.key === 'sync'));
      const sortedEligible = [...eligible].sort((a, b) => a.priority - b.priority);
      const sel = sortedEligible[0] ?? null;

      return {
        pendingValue: value,
        pendingBits: bin,
        pendingDecimal: value,
        selectedLane: sel,
        candidates: cands,
        ranges: rgs,
      };
    }, [selected, excludeSync, content.lanes]);

  const hasPending = pendingValue !== 0;

  return (
    <section aria-labelledby="heading-lab">
      <NumberedSectionHeader
        id="lab"
        number={content.number}
        eyebrow={content.title}
        title={content.title}
        icon={<CompassIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,5fr)_minmax(0,4fr)] gap-md items-stretch">
        {/* LEFT: lane checkboxes */}
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
              <CompassIcon className="h-4 w-4" />
            </span>
            <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep font-mono">
              {content.leftTitle}
            </h3>
          </header>

          <ul className="flex flex-col gap-2">
            {content.lanes.map((lane) => {
              const isOn = selected.has(lane.key);
              const Icon = laneIcon[lane.key];
              return (
                <li key={lane.key}>
                  <label
                    className={cn(
                      'flex items-center gap-3 rounded-xl border-2 p-3 transition-all cursor-pointer',
                      'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                      isOn
                        ? cn(schedCardBorder[lane.accent], 'shadow-[0_2px_0_var(--term-border)]')
                        : 'border-[var(--term-border)] bg-[var(--term-bg)] hover:border-blue-200 dark:hover:border-blue-700/60',
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={isOn}
                      onChange={() => toggleLane(lane.key)}
                      className={cn(
                        'h-4 w-4 shrink-0 rounded border-[var(--term-border)] accent-blue-600',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                      )}
                    />
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
                        isOn
                          ? schedIconBox[lane.accent]
                          : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                      <span
                        className={cn(
                          'font-mono text-xsm sm:text-sm font-bold leading-tight break-keep',
                          isOn ? schedTextStrong[lane.accent] : 'text-[var(--term-fg)]',
                        )}
                      >
                        {lane.label}
                      </span>
                      <span
                        className={cn(
                          'font-mono text-[10px] uppercase tracking-wider',
                          isOn ? schedTextStrong[lane.accent] : 'text-[var(--term-dim)]',
                        )}
                      >
                        bit {lane.bitIndex} · priority {lane.priority}
                      </span>
                    </div>
                  </label>
                </li>
              );
            })}
          </ul>

          {/* Sync remove toggle */}
          <label
            className={cn(
              'flex items-center gap-3 rounded-xl border-2 p-3 cursor-pointer',
              excludeSync
                ? 'border-rose-300/80 bg-rose-50/60 dark:border-rose-700/70 dark:bg-rose-950/30'
                : 'border-[var(--term-border)] bg-[var(--term-bg)]',
            )}
          >
            <input
              type="checkbox"
              checked={excludeSync}
              onChange={(e) => setExcludeSync(e.target.checked)}
              className={cn(
                'h-4 w-4 shrink-0 rounded border-[var(--term-border)] accent-rose-600',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              )}
            />
            <span
              className={cn(
                'text-xsm sm:text-sm font-bold leading-tight break-keep',
                excludeSync ? 'text-rose-700 dark:text-rose-300' : 'text-[var(--term-fg)]',
              )}
            >
              {content.syncRemoveLabel}
            </span>
          </label>

          {/* reset */}
          <button
            type="button"
            onClick={handleReset}
            className={cn(
              'mt-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-2.5',
              'font-bold text-xsm sm:text-sm transition-all',
              'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
              'shadow-[0_2px_0_var(--term-border)]',
              'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
              'hover:border-rose-300 dark:hover:border-rose-700/60',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
            )}
          >
            <RotateCcwIcon aria-hidden="true" className="h-4 w-4" />
            <span>{content.resetLabel}</span>
          </button>
        </article>

        {/* CENTER: bitmask */}
        <article
          aria-live="polite"
          className={cn(
            'flex h-full flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
            'border-teal-300/80 bg-gradient-to-br from-teal-50/80 via-white to-blue-50/40',
            'dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/20',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60"
            >
              <LayersIcon className="h-4 w-4" />
            </span>
            <h3 className="text-sm sm:text-md font-bold text-teal-700 dark:text-teal-300 break-keep font-mono">
              {content.centerTitle}
            </h3>
          </header>

          <div className="overflow-x-auto">
            <BitCellRow
              bits={pendingBits}
              accent="default"
              ranges={ranges}
              size="md"
              srLabel={`pendingLanes ${pendingBits} (${pendingDecimal})`}
            />
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
            <div className="flex flex-col gap-0.5">
              <dt className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.binaryLabel}
              </dt>
              <dd className="font-mono text-[11px] sm:text-xsm text-[var(--term-fg)] break-all">
                0b{pendingBits}
              </dd>
            </div>
            <div className="flex flex-col gap-0.5">
              <dt className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.decimalLabel}
              </dt>
              <dd className="font-mono text-xsm sm:text-sm text-[var(--term-fg)] tabular-nums">
                {pendingDecimal}
              </dd>
            </div>
          </dl>

          {candidates.length > 0 && (
            <ul className="mt-auto flex flex-wrap gap-1.5">
              {candidates.map((lane) => (
                <li key={lane.key}>
                  <code
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-[10px] sm:text-[11px] font-semibold',
                      schedPill[lane.accent],
                    )}
                  >
                    {lane.label}
                  </code>
                </li>
              ))}
            </ul>
          )}
        </article>

        {/* RIGHT: selected nextLanes */}
        <article
          className={cn(
            'flex h-full flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
            'shadow-[0_2px_0_var(--term-border)]',
            selectedLane
              ? cn(schedCardBorder[selectedLane.accent], 'shadow-[0_3px_0_var(--term-border)]')
              : 'border-[var(--term-border)] bg-[var(--term-bg)]',
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                selectedLane
                  ? schedIconBox[selectedLane.accent]
                  : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
              )}
            >
              <TargetIcon className="h-4 w-4" />
            </span>
            <span
              className={cn(
                'font-mono text-[10px] uppercase tracking-wider font-bold',
                selectedLane ? schedTextStrong[selectedLane.accent] : 'text-[var(--term-muted)]',
              )}
            >
              nextLanes
            </span>
          </header>
          <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
            {content.rightTitle}
          </h3>

          {selectedLane ? (
            <span
              className={cn(
                'inline-flex items-center self-start gap-2 rounded-xl border-2 px-3 py-1.5',
                'font-mono text-xsm sm:text-sm font-bold',
                schedPill[selectedLane.accent],
              )}
            >
              <CheckCircleIcon aria-hidden="true" className="h-4 w-4" />
              {selectedLane.label}
            </span>
          ) : (
            <span className="inline-flex items-center self-start gap-2 rounded-xl border-2 border-[var(--term-border)] bg-[var(--term-surface)] px-3 py-1.5 font-mono text-xsm font-bold text-[var(--term-muted)]">
              {hasPending ? content.emptySelectedLabel : 'NoLanes'}
            </span>
          )}

          {excludeSync && (
            <p className="text-[11px] sm:text-xsm leading-snug text-rose-700 dark:text-rose-300 break-keep">
              {content.syncRemovedHint}
            </p>
          )}

          <div className="mt-auto flex flex-col gap-2">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.ruleTitle}
              </p>
              <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-fg)] break-keep">
                {content.rule}
              </p>
            </div>
            <code className="inline-flex flex-wrap items-center rounded-md border border-blue-200/80 bg-blue-50 px-2 py-1 font-mono text-[10px] sm:text-[11px] font-semibold text-blue-800 break-all dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200">
              {content.priorityOrder}
            </code>
          </div>
        </article>
      </div>
    </section>
  );
};

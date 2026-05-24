import { cn } from '@it-tech-blog/utils';

import type { LaneAccent, LaneBitRange } from '../lane-shape/content';

import { laneBitOn } from './laneAccent';

type Size = 'sm' | 'md' | 'lg';

type Props = {
  /** Bit string. Left-most character is index 0 in the rendered cells. */
  bits: string;
  /** Visual cell indexes (0-based from the left) that should appear "on". */
  activeIndexes?: number[];
  /** Solid color group regions; first match wins. Used for multi-color rows like root.pendingLanes. */
  ranges?: LaneBitRange[];
  /** Fallback accent for active bits that are not in `ranges`. */
  accent?: LaneAccent;
  size?: Size;
  /** Plain-text alternative (a11y) for the bitmask meaning. */
  srLabel?: string;
  className?: string;
};

const sizeMap: Record<Size, string> = {
  sm: 'h-4 w-4 text-[8px]',
  md: 'h-5 w-5 text-[9px]',
  lg: 'h-6 w-6 sm:h-7 sm:w-7 text-[10px] sm:text-[11px]',
};

const gapMap: Record<Size, string> = {
  sm: 'gap-0.5',
  md: 'gap-1',
  lg: 'gap-1 sm:gap-1.5',
};

const findRangeAccent = (
  index: number,
  ranges: LaneBitRange[] | undefined,
): LaneAccent | undefined => {
  if (!ranges) return undefined;
  for (const r of ranges) {
    if (index >= r.start && index < r.start + r.length) return r.accent;
  }
  return undefined;
};

export const BitCellRow = ({
  bits,
  activeIndexes,
  ranges,
  accent = 'sync',
  size = 'lg',
  srLabel,
  className,
}: Props) => {
  const cells = bits.split('');
  const activeSet = new Set(activeIndexes ?? cells.flatMap((b, i) => (b === '1' ? [i] : [])));

  return (
    <div
      role="img"
      aria-label={srLabel ?? `bitmask ${bits}`}
      className={cn(
        'inline-flex flex-wrap items-center font-mono tabular-nums',
        gapMap[size],
        className,
      )}
    >
      {cells.map((bit, i) => {
        const isOn = activeSet.has(i) || bit === '1';
        const cellAccent = isOn ? (findRangeAccent(i, ranges) ?? accent) : accent;
        return (
          <span
            key={i}
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center rounded border font-bold',
              sizeMap[size],
              isOn
                ? laneBitOn[cellAccent]
                : 'bg-white text-[var(--term-dim)] border-[var(--term-border)] dark:bg-slate-950/40',
            )}
          >
            {isOn ? '1' : '0'}
          </span>
        );
      })}
    </div>
  );
};

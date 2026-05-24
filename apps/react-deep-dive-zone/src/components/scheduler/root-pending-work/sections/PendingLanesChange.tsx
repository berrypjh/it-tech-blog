import { cn } from '@it-tech-blog/utils';

import { axisCardBorder, axisIconBox, axisTextStrong } from '../../_shared/axisAccent';
import { BitCellRow } from '../../_shared/BitCellRow';
import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { LaneAccent } from '../../lane-shape/content';
import type { PendingLanesChangeCard, RootPendingWorkContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  DatabaseIcon,
  LightbulbIcon,
  PlusIcon,
  ZapIcon,
} from '../icons';

type Props = { content: RootPendingWorkContent['pendingLanesChange'] };

// Map card state to a uniform color rule:
// before: no active bits; transition: single teal-leaning bit; sync+transition: blue+teal.
const ACCENT_BY_STATE: Record<PendingLanesChangeCard['state'], 'blue' | 'teal' | 'violet'> = {
  before: 'blue',
  transition: 'teal',
  'sync-transition': 'violet',
};

const SECTION_ICON: Record<PendingLanesChangeCard['state'], typeof DatabaseIcon> = {
  before: DatabaseIcon,
  transition: PlusIcon,
  'sync-transition': ZapIcon,
};

// For multi-lane card, map active bit indexes to teal vs blue.
const buildRanges = (
  card: PendingLanesChangeCard,
): { start: number; length: number; accent: LaneAccent }[] | undefined => {
  if (card.state !== 'sync-transition') return undefined;
  const len = card.bits.length;
  const ranges: { start: number; length: number; accent: LaneAccent }[] = [];
  for (let i = 0; i < len; i++) {
    if (card.bits[i] !== '1') continue;
    // From the right: bit 1 (SyncLane area) = blue, others (Transition area) = teal
    const fromRight = len - 1 - i;
    ranges.push({
      start: i,
      length: 1,
      accent: fromRight <= 4 ? 'sync' : 'default',
    });
  }
  return ranges;
};

const cardAccentForBits = (card: PendingLanesChangeCard): LaneAccent => {
  if (card.state === 'transition') return 'default'; // teal
  if (card.state === 'sync-transition') return 'sync'; // fallback blue
  return 'sync';
};

export const PendingLanesChange = ({ content }: Props) => (
  <section aria-labelledby="heading-pending-change">
    <NumberedSectionHeader
      id="pending-change"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<DatabaseIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-3 sm:gap-4 relative">
      {content.cards.map((card, i) => {
        const isLast = i === content.cards.length - 1;
        const accent = ACCENT_BY_STATE[card.state];
        const Icon = SECTION_ICON[card.state];
        const ranges = buildRanges(card);
        const isEmpty = card.state === 'before';
        const decimal = parseInt(card.bits, 2);
        return (
          <li
            key={card.title}
            className={cn(
              'relative flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg transition-colors',
              'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
              axisCardBorder[accent],
            )}
          >
            <header className="flex items-center justify-between gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                  axisIconBox[accent],
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <span
                className={cn(
                  'font-mono text-[10px] uppercase tracking-wider',
                  axisTextStrong[accent],
                )}
              >
                {card.state}
              </span>
            </header>
            <h3
              className={cn(
                'text-xsm sm:text-sm font-bold leading-tight break-keep',
                axisTextStrong[accent],
              )}
            >
              {card.title}
            </h3>

            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
                pendingLanes
              </span>
              <div className="overflow-x-auto">
                <BitCellRow
                  bits={card.bits}
                  accent={cardAccentForBits(card)}
                  ranges={ranges}
                  size="md"
                  srLabel={`pendingLanes ${card.bits}`}
                />
              </div>
              <code
                className={cn(
                  'font-mono text-[10px] sm:text-[11px]',
                  isEmpty ? 'text-[var(--term-dim)]' : 'text-[var(--term-fg)]',
                )}
              >
                0b{card.bits} · {decimal}
              </code>
            </div>

            <p className="mt-auto text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
              {card.description}
            </p>

            {!isLast && (
              <>
                <span
                  aria-hidden="true"
                  className="hidden md:inline-flex absolute -right-3 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-blue-200/80 bg-[var(--term-bg)] text-blue-600 shadow-[0_1px_0_var(--term-border)] dark:border-blue-800/60 dark:text-blue-300"
                >
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </span>
                <span
                  aria-hidden="true"
                  className="md:hidden flex justify-center text-blue-500 dark:text-blue-300 mt-1"
                >
                  <ArrowDownIcon className="h-4 w-4" />
                </span>
              </>
            )}
          </li>
        );
      })}
    </ol>

    {/* note */}
    <aside
      className={cn(
        'mt-md flex items-start gap-2 rounded-2xl border-2 border-dashed px-md py-3',
        'border-amber-300/80 bg-amber-50/60 text-amber-800',
        'dark:border-amber-700/60 dark:bg-amber-950/30 dark:text-amber-100',
      )}
    >
      <LightbulbIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
      <p className="text-[11px] sm:text-xsm leading-relaxed break-keep">{content.note}</p>
    </aside>
  </section>
);

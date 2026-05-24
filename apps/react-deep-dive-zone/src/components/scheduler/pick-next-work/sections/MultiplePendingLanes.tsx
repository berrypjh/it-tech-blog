import { cn } from '@it-tech-blog/utils';

import { BitCellRow } from '../../_shared/BitCellRow';
import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { LaneAccent } from '../../lane-shape/content';
import type { RootSchedulerContent, SchedulerAccent } from '../content';
import { DatabaseIcon, LayersIcon, RepeatIcon, ZapIcon } from '../icons';
import { schedIconBox, schedPill, schedTextStrong } from '../schedulerAccent';

type Props = { content: RootSchedulerContent['multiple'] };

const rowIcon: Record<SchedulerAccent, typeof ZapIcon> = {
  blue: ZapIcon,
  teal: LayersIcon,
  violet: RepeatIcon,
  slate: LayersIcon,
};

const URGENCY_STYLE: Record<SchedulerAccent, string> = {
  blue: 'border-rose-300/80 bg-rose-100 text-rose-800 dark:border-rose-700/70 dark:bg-rose-950/40 dark:text-rose-200',
  teal: 'border-amber-300/80 bg-amber-100 text-amber-900 dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-200',
  violet:
    'border-violet-300/80 bg-violet-100 text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
  slate:
    'border-slate-300/80 bg-slate-100 text-slate-800 dark:border-slate-700/70 dark:bg-slate-900/40 dark:text-slate-200',
};

const accentToLane: Record<SchedulerAccent, LaneAccent> = {
  blue: 'sync',
  teal: 'default',
  violet: 'transition',
  slate: 'offscreen',
};

export const MultiplePendingLanes = ({ content }: Props) => {
  const len = content.bitmask.length;

  // Build ranges from row bitIndex positions
  const ranges = content.rows.map((row) => ({
    start: len - 1 - row.bitIndex,
    length: 1,
    accent: accentToLane[row.accent],
  }));

  return (
    <section aria-labelledby="heading-multiple">
      <NumberedSectionHeader
        id="multiple"
        number={content.number}
        eyebrow={content.title}
        title={content.title}
        icon={<DatabaseIcon className="h-5 w-5" />}
      />

      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
          'border-blue-300/80 bg-gradient-to-br from-blue-50/70 via-white to-teal-50/30',
          'dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/10',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
              schedIconBox.blue,
            )}
          >
            <DatabaseIcon className="h-5 w-5" />
          </span>
          <h3 className="text-md sm:text-lg font-bold text-[var(--term-fg)] break-keep font-mono">
            {content.cardTitle}
          </h3>
        </header>

        {/* bitmask */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
            {content.bitmaskLabel}
          </span>
          <div className="overflow-x-auto">
            <BitCellRow
              bits={content.bitmask}
              accent="sync"
              ranges={ranges}
              size="lg"
              srLabel={`root.pendingLanes ${content.bitmask}`}
            />
          </div>
          <code className="font-mono text-[11px] text-[var(--term-fg)] break-all">
            0b{content.bitmask}
          </code>
        </div>

        {/* lane rows */}
        <ul className="flex flex-col gap-2">
          {content.rows.map((row) => {
            const Icon = rowIcon[row.accent];
            return (
              <li
                key={row.name}
                className={cn(
                  'flex items-center gap-3 rounded-xl border-2 p-3',
                  'border-[var(--term-border)] bg-[var(--term-bg)] transition-colors',
                  'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
                    schedIconBox[row.accent],
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                  <code
                    className={cn(
                      'font-mono text-xsm sm:text-sm font-bold break-keep',
                      schedTextStrong[row.accent],
                    )}
                  >
                    {row.name}
                  </code>
                  <p className="text-[11px] leading-snug text-[var(--term-muted)] break-keep">
                    {row.description}
                  </p>
                </div>
                <span
                  className={cn(
                    'inline-flex items-center rounded-full border px-2 py-0.5',
                    'text-[10px] font-mono font-bold uppercase tracking-wider',
                    URGENCY_STYLE[row.accent],
                  )}
                >
                  {row.urgency}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'hidden sm:inline-flex h-7 px-2 items-center justify-center rounded-md font-mono text-[10px] uppercase tracking-wider',
                    schedPill[row.accent],
                  )}
                >
                  bit {row.bitIndex}
                </span>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};

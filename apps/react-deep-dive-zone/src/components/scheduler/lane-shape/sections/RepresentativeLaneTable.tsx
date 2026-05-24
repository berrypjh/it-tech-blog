import { cn } from '@it-tech-blog/utils';

import { BitCellRow } from '../../_shared/BitCellRow';
import { laneIconBox, laneTextStrong } from '../../_shared/laneAccent';
import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { LaneAccent, LaneBitmaskContent, RepresentativeLaneRow } from '../content';
import { ArrowRightIcon, LayersIcon, RepeatIcon, TimerResetIcon, ZapIcon } from '../icons';

type Props = { content: LaneBitmaskContent['representative'] };

const laneIcon: Record<LaneAccent, typeof ZapIcon> = {
  sync: ZapIcon,
  inputContinuous: TimerResetIcon,
  default: LayersIcon,
  transition: RepeatIcon,
  retry: RepeatIcon,
  offscreen: LayersIcon,
};

const NameCell = ({ row }: { row: RepresentativeLaneRow }) => {
  const Icon = laneIcon[row.accent];
  return (
    <div className="flex items-center gap-2 min-w-0">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border',
          laneIconBox[row.accent],
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <code
        className={cn(
          'font-mono text-xsm sm:text-sm font-bold break-keep',
          laneTextStrong[row.accent],
        )}
      >
        {row.name}
      </code>
    </div>
  );
};

const MeaningCell = ({ meaning }: { meaning: string[] }) => (
  <ul className="flex flex-col gap-0.5">
    {meaning.map((m) => (
      <li key={m} className="text-[11px] sm:text-xsm leading-snug text-[var(--term-fg)] break-keep">
        {m}
      </li>
    ))}
  </ul>
);

export const RepresentativeLaneTable = ({ content }: Props) => (
  <section aria-labelledby="heading-representative">
    <NumberedSectionHeader
      id="representative"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    {/* DESKTOP table */}
    <div
      className={cn(
        'hidden md:block overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-blue-50/70 dark:bg-blue-950/30">
            <th className="px-md py-3 text-[11px] font-mono font-bold uppercase tracking-wider text-blue-800 dark:text-blue-200 w-[24%]">
              {content.headers.name}
            </th>
            <th className="px-md py-3 text-[11px] font-mono font-bold uppercase tracking-wider text-blue-800 dark:text-blue-200">
              {content.headers.bitmask}
            </th>
            <th className="px-md py-3 text-[11px] font-mono font-bold uppercase tracking-wider text-blue-800 dark:text-blue-200 w-[7%] text-right">
              {content.headers.bitZero}
            </th>
            <th className="px-md py-3 text-[11px] font-mono font-bold uppercase tracking-wider text-blue-800 dark:text-blue-200 w-[20%]">
              {content.headers.meaning}
            </th>
          </tr>
        </thead>
        <tbody>
          {content.rows.map((row) => (
            <tr key={row.name} className="align-middle">
              <td className="border-t border-[var(--term-border)] px-md py-3 align-middle">
                <NameCell row={row} />
              </td>
              <td className="border-t border-[var(--term-border)] px-md py-3 align-middle">
                <div className="overflow-x-auto">
                  <BitCellRow
                    bits={row.bits}
                    activeIndexes={row.activeIndexes}
                    accent={row.accent}
                    size="md"
                    srLabel={`${row.name} bits ${row.bits}`}
                  />
                </div>
              </td>
              <td className="border-t border-[var(--term-border)] px-md py-3 align-middle text-right font-mono text-[11px] text-[var(--term-muted)] tabular-nums">
                bit 0 →
              </td>
              <td className="border-t border-[var(--term-border)] px-md py-3 align-middle">
                <MeaningCell meaning={row.meaning} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* direction */}
      <div className="flex items-center justify-between border-t border-[var(--term-border)] px-md py-2 bg-[var(--term-surface)]">
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
          <ArrowRightIcon aria-hidden="true" className="h-3.5 w-3.5 rotate-180" />
          {content.directionLeft}
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
          {content.directionRight}
          <ArrowRightIcon aria-hidden="true" className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>

    {/* MOBILE cards */}
    <ul className="md:hidden flex flex-col gap-3">
      {content.rows.map((row) => (
        <li key={row.name}>
          <article
            className={cn(
              'flex flex-col gap-3 rounded-2xl border-2 p-md',
              'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center justify-between gap-2">
              <NameCell row={row} />
              <span className="font-mono text-[10px] text-[var(--term-muted)]">bit 0 →</span>
            </header>
            <div className="overflow-x-auto">
              <BitCellRow
                bits={row.bits}
                activeIndexes={row.activeIndexes}
                accent={row.accent}
                size="md"
                srLabel={`${row.name} bits ${row.bits}`}
              />
            </div>
            <MeaningCell meaning={row.meaning} />
          </article>
        </li>
      ))}
      <li className="flex items-center justify-between rounded-xl border border-[var(--term-border)] bg-[var(--term-surface)] px-3 py-2">
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
          <ArrowRightIcon aria-hidden="true" className="h-3 w-3 rotate-180" />
          {content.directionLeft}
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
          {content.directionRight}
          <ArrowRightIcon aria-hidden="true" className="h-3 w-3" />
        </span>
      </li>
    </ul>
  </section>
);

import { cn } from '@it-tech-blog/utils';

import {
  axisIconBox,
  axisNumberBadge,
  axisRowTint,
  axisTextStrong,
} from '../../_shared/axisAccent';
import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { AxisAccent, ComparisonRow, ThreePriorityAxesContent } from '../content';
import { ClockIcon, LayersIcon, ScanSearchIcon, ZapIcon } from '../icons';

type Props = { content: ThreePriorityAxesContent['comparison'] };

const accentIcon: Record<AxisAccent, typeof ZapIcon> = {
  blue: ZapIcon,
  teal: LayersIcon,
  violet: ClockIcon,
};

const CellList = ({ items, mono = false }: { items: string[]; mono?: boolean }) => (
  <ul className="flex flex-col gap-0.5">
    {items.map((it) => (
      <li
        key={it}
        className={cn(
          'text-[11px] sm:text-xsm leading-snug text-[var(--term-fg)] break-keep',
          mono && 'font-mono text-[11px]',
        )}
      >
        {it}
      </li>
    ))}
  </ul>
);

const AxisCell = ({ row }: { row: ComparisonRow }) => {
  const Icon = accentIcon[row.accent];
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border',
            axisIconBox[row.accent],
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <span
          className={cn(
            'inline-flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-mono font-bold tabular-nums',
            axisNumberBadge[row.accent],
          )}
          aria-hidden="true"
        >
          {row.key === 'event' ? 1 : row.key === 'lane' ? 2 : 3}
        </span>
      </div>
      <p className={cn('font-bold text-xsm sm:text-sm break-keep', axisTextStrong[row.accent])}>
        {row.name}
      </p>
    </div>
  );
};

export const PriorityComparisonTable = ({ content }: Props) => (
  <section aria-labelledby="heading-comparison">
    <NumberedSectionHeader
      id="comparison"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<ScanSearchIcon className="h-5 w-5" />}
    />

    {/* Desktop table */}
    <div
      className={cn(
        'hidden md:block overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-blue-50/70 dark:bg-blue-950/30">
            <th className="px-md py-3 text-[11px] font-mono font-bold uppercase tracking-wider text-blue-800 dark:text-blue-200 w-[18%]">
              {content.headers.axis}
            </th>
            <th className="px-md py-3 text-[11px] font-mono font-bold uppercase tracking-wider text-blue-800 dark:text-blue-200 w-[24%]">
              {content.headers.coreQuestion}
            </th>
            <th className="px-md py-3 text-[11px] font-mono font-bold uppercase tracking-wider text-blue-800 dark:text-blue-200 w-[22%]">
              {content.headers.role}
            </th>
            <th className="px-md py-3 text-[11px] font-mono font-bold uppercase tracking-wider text-blue-800 dark:text-blue-200 w-[16%]">
              {content.headers.when}
            </th>
            <th className="px-md py-3 text-[11px] font-mono font-bold uppercase tracking-wider text-blue-800 dark:text-blue-200 w-[20%]">
              {content.headers.code}
            </th>
          </tr>
        </thead>
        <tbody>
          {content.rows.map((row) => (
            <tr
              key={row.key}
              className={cn('align-top transition-colors', axisRowTint[row.accent])}
            >
              <td className="border-t border-[var(--term-border)] px-md py-3 align-top">
                <AxisCell row={row} />
              </td>
              <td className="border-t border-[var(--term-border)] px-md py-3 align-top text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
                {row.coreQuestion}
              </td>
              <td className="border-t border-[var(--term-border)] px-md py-3 align-top">
                <CellList items={row.role} />
              </td>
              <td className="border-t border-[var(--term-border)] px-md py-3 align-top">
                <CellList items={row.when} />
              </td>
              <td className="border-t border-[var(--term-border)] px-md py-3 align-top">
                <CellList items={row.code} mono />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile cards */}
    <ul className="md:hidden flex flex-col gap-3">
      {content.rows.map((row) => (
        <li key={row.key}>
          <article
            className={cn(
              'flex flex-col gap-3 rounded-2xl border-2 p-md',
              'shadow-[0_2px_0_var(--term-border)]',
              axisRowTint[row.accent],
              'border-[var(--term-border)]',
            )}
          >
            <header className="flex items-center justify-between gap-2">
              <AxisCell row={row} />
            </header>
            <dl className="grid grid-cols-1 gap-2">
              <div>
                <dt className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                  {content.headers.coreQuestion}
                </dt>
                <dd className="mt-1 text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                  {row.coreQuestion}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                  {content.headers.role}
                </dt>
                <dd className="mt-1">
                  <CellList items={row.role} />
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                  {content.headers.when}
                </dt>
                <dd className="mt-1">
                  <CellList items={row.when} />
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                  {content.headers.code}
                </dt>
                <dd className="mt-1">
                  <CellList items={row.code} mono />
                </dd>
              </div>
            </dl>
          </article>
        </li>
      ))}
    </ul>
  </section>
);

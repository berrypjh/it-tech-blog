import { cn } from '@it-tech-blog/utils';

import type { ComparisonRow, Tone, WhyNotImmediateContent } from '../content';
import { LayersIcon } from '../icons';

import { NumberedSectionHeader } from './_NumberedSectionHeader';
import { ScenarioMockup } from './_ScenarioMockups';

type Props = { content: WhyNotImmediateContent['comparison'] };

const toneRow: Record<Tone, string> = {
  sky: 'bg-sky-50/50 dark:bg-sky-950/20',
  cyan: 'bg-cyan-50/50 dark:bg-cyan-950/20',
  teal: 'bg-teal-50/50 dark:bg-teal-950/20',
  emerald: 'bg-emerald-50/50 dark:bg-emerald-950/20',
  violet: 'bg-violet-50/50 dark:bg-violet-950/20',
  blue: 'bg-blue-50/50 dark:bg-blue-950/20',
  amber: 'bg-amber-50/50 dark:bg-amber-950/20',
  rose: 'bg-rose-50/50 dark:bg-rose-950/20',
};

const toneBadge: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-100 text-sky-800 dark:border-sky-700/70 dark:bg-sky-950/40 dark:text-sky-200',
  cyan: 'border-cyan-300/80 bg-cyan-100 text-cyan-800 dark:border-cyan-700/70 dark:bg-cyan-950/40 dark:text-cyan-200',
  teal: 'border-teal-300/80 bg-teal-100 text-teal-800 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-200',
  emerald:
    'border-emerald-300/80 bg-emerald-100 text-emerald-800 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200',
  violet:
    'border-violet-300/80 bg-violet-100 text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
  blue: 'border-blue-300/80 bg-blue-100 text-blue-800 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
  amber:
    'border-amber-300/80 bg-amber-100 text-amber-900 dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-200',
  rose: 'border-rose-300/80 bg-rose-100 text-rose-800 dark:border-rose-700/70 dark:bg-rose-950/40 dark:text-rose-200',
};

const toneText: Record<Tone, string> = {
  sky: 'text-sky-700 dark:text-sky-300',
  cyan: 'text-cyan-700 dark:text-cyan-300',
  teal: 'text-teal-700 dark:text-teal-300',
  emerald: 'text-emerald-700 dark:text-emerald-300',
  violet: 'text-violet-700 dark:text-violet-300',
  blue: 'text-blue-700 dark:text-blue-300',
  amber: 'text-amber-700 dark:text-amber-300',
  rose: 'text-rose-700 dark:text-rose-300',
};

const CellList = ({ items }: { items: string[] }) => (
  <ul className="flex flex-col gap-0.5">
    {items.map((it) => (
      <li
        key={it}
        className="text-[11px] sm:text-xsm leading-snug text-[var(--term-fg)] break-keep"
      >
        {it}
      </li>
    ))}
  </ul>
);

const Row = ({ row }: { row: ComparisonRow }) => (
  <>
    {/* DESKTOP: table-row inline */}
    <tr className={cn('hidden md:table-row align-top transition-colors', toneRow[row.tone])}>
      <td className="border-t border-[var(--term-border)] px-md py-3 align-top">
        <div className="flex flex-col gap-2">
          <p className={cn('font-bold text-xsm sm:text-sm break-keep', toneText[row.tone])}>
            {row.situation}
          </p>
          <span
            className={cn(
              'inline-flex items-center self-start rounded-full border px-2 py-0.5',
              'text-[10px] font-mono font-bold uppercase tracking-wider',
              toneBadge[row.tone],
            )}
          >
            {row.urgency}
          </span>
          <div className="max-w-[180px]">
            <ScenarioMockup kind={row.mockup} />
          </div>
        </div>
      </td>
      <td className="border-t border-[var(--term-border)] px-md py-3 align-top">
        <CellList items={row.example} />
      </td>
      <td className="border-t border-[var(--term-border)] px-md py-3 align-top">
        <CellList items={row.processing} />
      </td>
      <td className="border-t border-[var(--term-border)] px-md py-3 align-top">
        <CellList items={row.goal} />
      </td>
    </tr>
  </>
);

const MobileRow = ({
  row,
  headers,
}: {
  row: ComparisonRow;
  headers: Props['content']['headers'];
}) => (
  <article
    className={cn(
      'flex flex-col gap-3 rounded-2xl border-2 p-md',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      toneRow[row.tone],
    )}
  >
    <header className="flex items-center justify-between gap-2">
      <p className={cn('font-bold text-sm break-keep', toneText[row.tone])}>{row.situation}</p>
      <span
        className={cn(
          'inline-flex items-center rounded-full border px-2 py-0.5',
          'text-[10px] font-mono font-bold uppercase tracking-wider',
          toneBadge[row.tone],
        )}
      >
        {row.urgency}
      </span>
    </header>
    <div className="max-w-[260px]">
      <ScenarioMockup kind={row.mockup} />
    </div>
    <dl className="grid grid-cols-1 gap-2">
      <div>
        <dt className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
          {headers.example}
        </dt>
        <dd className="mt-1">
          <CellList items={row.example} />
        </dd>
      </div>
      <div>
        <dt className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
          {headers.processing}
        </dt>
        <dd className="mt-1">
          <CellList items={row.processing} />
        </dd>
      </div>
      <div>
        <dt className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
          {headers.goal}
        </dt>
        <dd className="mt-1">
          <CellList items={row.goal} />
        </dd>
      </div>
    </dl>
  </article>
);

export const SchedulerComparisonTable = ({ content }: Props) => (
  <section aria-labelledby="heading-comparison">
    <NumberedSectionHeader
      id="comparison"
      number={5}
      eyebrow={content.eyebrow}
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
            <th className="px-md py-3 text-[11px] font-mono font-bold uppercase tracking-wider text-blue-800 dark:text-blue-200 w-[28%]">
              {content.headers.situation}
            </th>
            <th className="px-md py-3 text-[11px] font-mono font-bold uppercase tracking-wider text-blue-800 dark:text-blue-200 w-[24%]">
              {content.headers.example}
            </th>
            <th className="px-md py-3 text-[11px] font-mono font-bold uppercase tracking-wider text-blue-800 dark:text-blue-200 w-[24%]">
              {content.headers.processing}
            </th>
            <th className="px-md py-3 text-[11px] font-mono font-bold uppercase tracking-wider text-blue-800 dark:text-blue-200 w-[24%]">
              {content.headers.goal}
            </th>
          </tr>
        </thead>
        <tbody>
          {content.rows.map((row) => (
            <Row key={row.situation} row={row} />
          ))}
        </tbody>
      </table>
    </div>

    {/* MOBILE cards */}
    <ul className="md:hidden flex flex-col gap-3">
      {content.rows.map((row) => (
        <li key={row.situation}>
          <MobileRow row={row} headers={content.headers} />
        </li>
      ))}
    </ul>
  </section>
);

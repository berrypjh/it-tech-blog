import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
import type { ComparisonRow, SummaryItem, UpdatePhaseContent } from '../content';
import { CheckCircleIcon, CompareIcon } from '../icons';

type Props = { content: UpdatePhaseContent['compare'] };

export const PlacementUpdateCompareSection = ({ content }: Props) => (
  <section id="compare" aria-labelledby="heading-compare" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="compare"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<CompareIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.3fr)_minmax(0,_0.7fr)] gap-3">
      <ComparisonTable columns={content.columns} rows={content.rows} />
      <QuickSummary title={content.quickSummaryTitle} items={content.quickSummary} />
    </div>
  </section>
);

const ComparisonTable = ({
  columns,
  rows,
}: {
  columns: UpdatePhaseContent['compare']['columns'];
  rows: ComparisonRow[];
}) => (
  <article
    className={cn(
      'overflow-hidden rounded-3xl border bg-[var(--term-bg)]',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    {/* Desktop table */}
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full border-collapse text-left text-xsm sm:text-sm">
        <thead>
          <tr className="border-b border-[var(--term-border)]">
            <th
              scope="col"
              className="px-md py-3 font-bold text-[var(--term-fg)] w-[22%] bg-slate-50/80 dark:bg-slate-900/40"
            >
              {columns.label}
            </th>
            <th
              scope="col"
              className={cn(
                'px-md py-3 font-bold text-left border-l border-[var(--term-border)]',
                'bg-violet-50/70 text-violet-800 dark:bg-violet-950/30 dark:text-violet-100',
              )}
            >
              {columns.placement}
            </th>
            <th
              scope="col"
              className={cn(
                'px-md py-3 font-bold text-left border-l border-[var(--term-border)]',
                'bg-sky-50/80 text-sky-800 dark:bg-sky-950/40 dark:text-sky-100',
              )}
            >
              {columns.update}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <Row key={row.label} row={row} isLast={idx === rows.length - 1} />
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile cards */}
    <ul className="md:hidden divide-y divide-[var(--term-border)]">
      {rows.map((row) => (
        <MobileRow key={row.label} row={row} columns={columns} />
      ))}
    </ul>
  </article>
);

const Row = ({ row, isLast }: { row: ComparisonRow; isLast: boolean }) => (
  <tr
    className={cn(
      !isLast && 'border-b border-dashed border-[var(--term-border)]',
      row.emphasis && 'bg-sky-50/30 dark:bg-sky-950/15',
      'transition-colors hover:bg-[var(--term-surface)]',
    )}
  >
    <th
      scope="row"
      className={cn(
        'px-md py-3 align-top font-bold text-[var(--term-fg)] bg-slate-50/40 dark:bg-slate-900/20',
        row.emphasis && 'text-sky-700 dark:text-sky-200',
      )}
    >
      {row.label}
    </th>
    <td className="px-md py-3 align-top border-l border-[var(--term-border)] text-violet-900 dark:text-violet-100 break-keep">
      <CellValue value={row.placement} variant="placement" />
    </td>
    <td className="px-md py-3 align-top border-l border-[var(--term-border)] text-sky-900 dark:text-sky-100 break-keep">
      <CellValue value={row.update} variant="update" />
    </td>
  </tr>
);

const MobileRow = ({
  row,
  columns,
}: {
  row: ComparisonRow;
  columns: UpdatePhaseContent['compare']['columns'];
}) => (
  <li className="flex flex-col gap-2 p-md">
    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
      {row.label}
    </span>
    <div className="rounded-xl border border-violet-200/70 bg-violet-50/40 p-sm dark:border-violet-800/60 dark:bg-violet-950/25">
      <p className="text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300 mb-1">
        {columns.placement}
      </p>
      <CellValue value={row.placement} variant="placement" />
    </div>
    <div className="rounded-xl border border-sky-200/70 bg-sky-50/40 p-sm dark:border-sky-800/60 dark:bg-sky-950/25">
      <p className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300 mb-1">
        {columns.update}
      </p>
      <CellValue value={row.update} variant="update" />
    </div>
  </li>
);

const CellValue = ({
  value,
  variant,
}: {
  value: string | string[];
  variant: 'placement' | 'update';
}) => {
  const items = Array.isArray(value) ? value : [value];
  return (
    <ul className="flex flex-col gap-0.5">
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            'flex items-start gap-1.5 text-xsm sm:text-sm leading-snug break-keep',
            variant === 'placement'
              ? 'text-violet-900 dark:text-violet-100'
              : 'text-sky-900 dark:text-sky-100',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'mt-1 inline-block h-1.5 w-1.5 rounded-full shrink-0',
              variant === 'placement'
                ? 'bg-violet-500 dark:bg-violet-400'
                : 'bg-sky-500 dark:bg-sky-400',
            )}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

const QuickSummary = ({ title, items }: { title: string; items: SummaryItem[] }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
      'border-sky-200/80 bg-sky-50/60',
      'dark:border-sky-800/70 dark:bg-sky-950/30',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
          'bg-sky-100 text-sky-700 border-sky-200/80',
          'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
        )}
      >
        <CheckCircleIcon className="h-4 w-4" />
      </span>
      <h3 className="text-sm sm:text-md font-bold text-sky-900 dark:text-sky-100">{title}</h3>
    </header>

    <ol className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item.text}>
          <SummaryRow item={item} />
        </li>
      ))}
    </ol>
  </article>
);

const SummaryRow = ({ item }: { item: SummaryItem }) => {
  const t = commitToneTokens[item.tone];
  return (
    <div className="flex items-start gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border',
          t.chipSolid,
        )}
      >
        <CheckCircleIcon className="h-3.5 w-3.5" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep">
          {item.text}
        </span>
        <span className={cn('text-[10px] font-mono lowercase tracking-wider', t.text)}>
          {item.emphasis}
        </span>
      </div>
    </div>
  );
};

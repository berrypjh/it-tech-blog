import { cn } from '@it-tech-blog/utils';

import type { ComparisonRow } from '../content';

type Props = {
  columnLabel: string;
  currentLabel: string;
  wipLabel: string;
  rows: ComparisonRow[];
};

export const ComparisonTable = ({ columnLabel, currentLabel, wipLabel, rows }: Props) => (
  <>
    {/* Desktop table */}
    <div
      className={cn(
        'hidden lg:block rounded-3xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'overflow-x-auto',
      )}
    >
      <table className="w-full table-fixed text-left">
        <colgroup>
          <col style={{ width: '15%' }} />
          <col style={{ width: '42.5%' }} />
          <col style={{ width: '42.5%' }} />
        </colgroup>
        <thead>
          <tr className="border-b-2 border-[var(--term-border)]">
            <Th>{columnLabel}</Th>
            <Th className="bg-sky-50/60 dark:bg-sky-950/30 text-sky-800 dark:text-sky-200">
              {currentLabel}
            </Th>
            <Th className="bg-emerald-50/60 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200">
              {wipLabel}
            </Th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-dashed border-[var(--term-border)] transition-colors motion-safe:hover:bg-slate-50/60 dark:motion-safe:hover:bg-slate-900/40"
            >
              <td className="px-3 py-3 align-top">
                <span className="text-xsm font-bold text-[var(--term-fg)] break-keep">
                  {row.label}
                </span>
              </td>
              <td className="px-3 py-3 align-top">
                <span className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                  {row.current}
                </span>
              </td>
              <td className="px-3 py-3 align-top">
                <span className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                  {row.workInProgress}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile / tablet cards */}
    <ul className="lg:hidden flex flex-col gap-md">
      {rows.map((row) => (
        <li key={row.id}>
          <MobileRow
            row={row}
            currentLabel={currentLabel}
            wipLabel={wipLabel}
            columnLabel={columnLabel}
          />
        </li>
      ))}
    </ul>
  </>
);

const Th = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <th
    className={cn(
      'px-3 py-2 text-[11px] font-mono uppercase tracking-wider font-bold align-bottom border border-[var(--term-border)]',
      className,
    )}
  >
    {children}
  </th>
);

const MobileRow = ({
  row,
  columnLabel,
  currentLabel,
  wipLabel,
}: {
  row: ComparisonRow;
  columnLabel: string;
  currentLabel: string;
  wipLabel: string;
}) => (
  <article
    className={cn(
      'flex flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <div className="flex items-center gap-2">
      <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
        {columnLabel}
      </span>
      <span className="text-xsm font-bold text-[var(--term-fg)] break-keep">{row.label}</span>
    </div>
    <Field label={currentLabel} tone="sky" body={row.current} />
    <Field label={wipLabel} tone="emerald" body={row.workInProgress} />
  </article>
);

const Field = ({ label, tone, body }: { label: string; tone: 'sky' | 'emerald'; body: string }) => {
  const cls = {
    sky: {
      label:
        'bg-sky-50 text-sky-800 border-sky-200/80 dark:bg-sky-950/40 dark:text-sky-200 dark:border-sky-800/60',
      box: 'border-sky-200/80 dark:border-sky-800/60',
    },
    emerald: {
      label:
        'bg-emerald-50 text-emerald-800 border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-800/60',
      box: 'border-emerald-200/80 dark:border-emerald-800/60',
    },
  }[tone];
  return (
    <div className={cn('rounded-xl border p-sm', cls.box)}>
      <span
        className={cn(
          'inline-flex w-fit items-center rounded-full border px-2 py-0.5 mb-1 font-mono text-[10px] font-bold',
          cls.label,
        )}
      >
        {label}
      </span>
      <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">{body}</p>
    </div>
  );
};

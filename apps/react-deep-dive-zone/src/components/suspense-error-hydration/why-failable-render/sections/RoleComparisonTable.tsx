import { cn } from '@it-tech-blog/utils';

import type { BranchKind, WhyFailableRenderContent } from '../content';
import { HourglassIcon, PlugZapIcon, TriangleAlertIcon } from '../icons';
import { branchAccent } from '../tone';

type Props = { content: WhyFailableRenderContent['comparison'] };

const branchIcon: Record<BranchKind, React.ComponentType<{ className?: string }>> = {
  suspense: HourglassIcon,
  error: TriangleAlertIcon,
  hydration: PlugZapIcon,
};

export const RoleComparisonTable = ({ content }: Props) => (
  <section aria-labelledby="comparison-heading" className="flex flex-col gap-md">
    <header className="flex flex-col gap-1">
      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
        {content.eyebrow}
      </span>
      <h2
        id="comparison-heading"
        className="text-xl sm:text-xxl font-bold text-[var(--term-fg)] break-keep"
      >
        {content.title}
      </h2>
    </header>

    {/* Desktop: table */}
    <div
      className={cn(
        'hidden md:block overflow-hidden rounded-3xl border-2',
        'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <table className="w-full border-collapse">
        <caption className="sr-only">{content.title}</caption>
        <thead>
          <tr>
            <th
              scope="col"
              className={cn(
                'w-[160px] border-b-2 border-slate-200 px-md py-3 text-left',
                'text-xsm font-bold text-slate-600 dark:text-slate-300 dark:border-slate-700',
                'bg-slate-50/70 dark:bg-slate-900/40',
              )}
            >
              {content.rowsHeader}
            </th>
            {content.columns.map((col) => {
              const accent = branchAccent[col.kind];
              const Icon = branchIcon[col.kind];
              return (
                <th
                  key={col.kind}
                  scope="col"
                  className={cn(
                    'border-b-2 border-slate-200 px-md py-3 text-left dark:border-slate-700',
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-8 w-8 items-center justify-center rounded-xl border',
                        accent.chip,
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="flex flex-col">
                      <span className={cn('text-sm font-bold', accent.text)}>{col.label}</span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                        {col.sub}
                      </span>
                    </div>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {content.rows.map((row, i) => (
            <tr
              key={row.label}
              className={cn(
                i % 2 === 0
                  ? 'bg-white dark:bg-[var(--term-bg)]'
                  : 'bg-slate-50/50 dark:bg-slate-900/30',
              )}
            >
              <th
                scope="row"
                className="border-t border-slate-200 px-md py-3 text-left text-xsm font-bold text-slate-700 dark:text-slate-200 dark:border-slate-700 align-top"
              >
                {row.label}
              </th>
              <td className="border-t border-slate-200 px-md py-3 text-xsm text-[var(--term-fg)] dark:border-slate-700 align-top break-keep">
                {row.suspense}
              </td>
              <td className="border-t border-slate-200 px-md py-3 text-xsm text-[var(--term-fg)] dark:border-slate-700 align-top break-keep">
                {row.error}
              </td>
              <td className="border-t border-slate-200 px-md py-3 text-xsm text-[var(--term-fg)] dark:border-slate-700 align-top break-keep">
                {row.hydration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile: card per column */}
    <div className="md:hidden grid grid-cols-1 gap-md">
      {content.columns.map((col) => {
        const accent = branchAccent[col.kind];
        const Icon = branchIcon[col.kind];
        return (
          <article
            key={col.kind}
            className={cn(
              'rounded-2xl border-2 p-md',
              accent.border,
              'bg-white dark:bg-[var(--term-bg)]',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                  accent.chip,
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <div className="flex flex-col">
                <span className={cn('text-sm font-bold', accent.text)}>{col.label}</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                  {col.sub}
                </span>
              </div>
            </header>
            <dl className="mt-3 flex flex-col gap-2">
              {content.rows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[100px_1fr] gap-2 border-t border-slate-200 pt-2 dark:border-slate-700"
                >
                  <dt className="text-[11px] font-bold text-slate-600 dark:text-slate-300">
                    {row.label}
                  </dt>
                  <dd className="text-xsm text-[var(--term-fg)] break-keep">
                    {col.kind === 'suspense' && row.suspense}
                    {col.kind === 'error' && row.error}
                    {col.kind === 'hydration' && row.hydration}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        );
      })}
    </div>
  </section>
);

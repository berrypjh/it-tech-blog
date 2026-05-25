import { cn } from '@it-tech-blog/utils';

import type { React19ErrorReportingContent, RoutingRow } from '../content';
import { RefreshCcwIcon, ShieldCheckIcon, TriangleAlertIcon } from '../icons';
import { callbackAccent, logLevelBadge } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: React19ErrorReportingContent['routing'] };

const rowIcon: Record<RoutingRow['icon'], React.ComponentType<{ className?: string }>> = {
  shield: ShieldCheckIcon,
  alert: TriangleAlertIcon,
  refresh: RefreshCcwIcon,
};

export const RoutingTableSection = ({ content }: Props) => (
  <section aria-labelledby="routing-heading" className="flex flex-col gap-md">
    <SectionHeader id="routing-heading" number={content.number} title={content.title} />

    {/* Desktop table */}
    <div
      className={cn(
        'hidden md:block overflow-hidden rounded-2xl border-2',
        'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <table className="w-full border-collapse">
        <caption className="sr-only">{content.title}</caption>
        <thead>
          <tr>
            {Object.values(content.headers).map((h) => (
              <th
                key={h}
                scope="col"
                className={cn(
                  'border-b-2 border-slate-200 dark:border-slate-700',
                  'bg-blue-50/60 dark:bg-blue-950/30',
                  'px-3 py-3 text-left text-[11.5px] font-bold text-blue-700 dark:text-blue-200',
                )}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.rows.map((row, i) => {
            const accent = callbackAccent[row.callback.kind];
            const RowIcon = rowIcon[row.icon];
            return (
              <tr
                key={row.scenario}
                className={cn(
                  i % 2 === 0
                    ? 'bg-white dark:bg-[var(--term-bg)]'
                    : 'bg-slate-50/40 dark:bg-slate-900/30',
                  'transition-colors motion-safe:hover:bg-blue-50/30 dark:motion-safe:hover:bg-blue-950/15',
                )}
              >
                <td className="border-t border-slate-200 dark:border-slate-700 px-3 py-3 align-top">
                  <div className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border',
                        accent.iconChip,
                      )}
                    >
                      <RowIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-xsm font-bold text-[var(--term-fg)] break-keep">
                      {row.scenario}
                    </span>
                  </div>
                </td>
                <td className="border-t border-slate-200 dark:border-slate-700 px-3 py-3 text-xsm text-[var(--term-fg)] break-keep align-top">
                  {row.description}
                </td>
                <td className="border-t border-slate-200 dark:border-slate-700 px-3 py-3 align-top">
                  <code
                    className={cn(
                      'inline-block rounded border px-1.5 py-0.5 text-[11px] font-mono font-bold break-all',
                      accent.chip,
                    )}
                  >
                    {row.callback.name}
                  </code>
                </td>
                <td className="border-t border-slate-200 dark:border-slate-700 px-3 py-3 text-xsm text-[var(--term-fg)] break-keep align-top">
                  {row.uiResult}
                </td>
                <td className="border-t border-slate-200 dark:border-slate-700 px-3 py-3 align-top">
                  <span
                    className={cn(
                      'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider',
                      logLevelBadge[row.logLevel],
                    )}
                  >
                    {row.logLevel}
                  </span>
                </td>
                <td className="border-t border-slate-200 dark:border-slate-700 px-3 py-3 text-xsm text-[var(--term-fg)] break-keep align-top">
                  {row.example}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>

    {/* Mobile card list */}
    <ul className="md:hidden flex flex-col gap-md">
      {content.rows.map((row) => {
        const accent = callbackAccent[row.callback.kind];
        const RowIcon = rowIcon[row.icon];
        return (
          <li key={row.scenario}>
            <article className={cn('rounded-2xl border-2 p-md', accent.border, accent.bg)}>
              <header className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-7 w-7 items-center justify-center rounded-lg border',
                      accent.iconChip,
                    )}
                  >
                    <RowIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-xsm font-bold text-[var(--term-fg)] break-keep">
                    {row.scenario}
                  </span>
                </div>
                <span
                  className={cn(
                    'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider',
                    logLevelBadge[row.logLevel],
                  )}
                >
                  {row.logLevel}
                </span>
              </header>
              <p className="mb-2 text-xsm text-[var(--term-fg)] break-keep">{row.description}</p>
              <div className="flex flex-wrap items-center gap-2">
                <code
                  className={cn(
                    'inline-block rounded border px-1.5 py-0.5 text-[11px] font-mono font-bold break-all',
                    accent.chip,
                  )}
                >
                  {row.callback.name}
                </code>
                <span className="text-[11px] text-[var(--term-muted)] break-keep">
                  → {row.uiResult}
                </span>
              </div>
              <p className="mt-2 text-[11px] text-[var(--term-muted)] break-keep">{row.example}</p>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);

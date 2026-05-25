import { cn } from '@it-tech-blog/utils';

import type { React19ErrorReportingContent } from '../content';
import { CheckCircleIcon, XCircleIcon } from '../icons';
import { callbackAccent, severityBadge } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: React19ErrorReportingContent['callbackTable'] };

export const CallbackTableSection = ({ content }: Props) => (
  <section aria-labelledby="callback-table-heading" className="flex flex-col gap-md">
    <SectionHeader id="callback-table-heading" number={content.number} title={content.title} />

    {/* Desktop: table */}
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
            const accent = callbackAccent[row.kind];
            const sev = severityBadge[row.severity];
            const UICheck = row.uiRecover.kind === 'check' ? CheckCircleIcon : XCircleIcon;
            return (
              <tr
                key={row.callback}
                className={cn(
                  i % 2 === 0
                    ? 'bg-white dark:bg-[var(--term-bg)]'
                    : 'bg-slate-50/40 dark:bg-slate-900/30',
                  'transition-colors motion-safe:hover:bg-blue-50/30 dark:motion-safe:hover:bg-blue-950/15',
                )}
              >
                <td className="border-t border-slate-200 dark:border-slate-700 px-3 py-3 align-top">
                  <code
                    className={cn(
                      'inline-block rounded border px-1.5 py-0.5 text-[11px] font-mono font-bold break-all',
                      accent.chip,
                    )}
                  >
                    {row.callback}
                  </code>
                </td>
                <td className="border-t border-slate-200 dark:border-slate-700 px-3 py-3 text-xsm text-[var(--term-fg)] break-keep align-top">
                  {row.caller}
                </td>
                <td className="border-t border-slate-200 dark:border-slate-700 px-3 py-3 text-xsm text-[var(--term-fg)] break-keep align-top">
                  {row.errorType}
                </td>
                <td className="border-t border-slate-200 dark:border-slate-700 px-3 py-3 align-top">
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 text-xsm font-bold break-keep',
                      row.uiRecover.kind === 'check'
                        ? 'text-emerald-700 dark:text-emerald-300'
                        : 'text-rose-700 dark:text-rose-300',
                    )}
                  >
                    <UICheck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {row.uiRecover.label}
                  </span>
                </td>
                <td className="border-t border-slate-200 dark:border-slate-700 px-3 py-3 text-xsm text-[var(--term-fg)] break-keep align-top">
                  {row.useCase}
                </td>
                <td className="border-t border-slate-200 dark:border-slate-700 px-3 py-3 align-top">
                  <span
                    className={cn(
                      'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider',
                      sev.className,
                    )}
                  >
                    {sev.label}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>

    {/* Mobile: card list */}
    <ul className="md:hidden flex flex-col gap-md">
      {content.rows.map((row) => {
        const accent = callbackAccent[row.kind];
        const sev = severityBadge[row.severity];
        const UICheck = row.uiRecover.kind === 'check' ? CheckCircleIcon : XCircleIcon;
        return (
          <li key={row.callback}>
            <article className={cn('rounded-2xl border-2 p-md', accent.border, accent.bg)}>
              <header className="flex items-center justify-between gap-2 mb-3">
                <code className={cn('text-[11px] font-mono font-bold break-all', accent.text)}>
                  {row.callback}
                </code>
                <span
                  className={cn(
                    'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider',
                    sev.className,
                  )}
                >
                  {sev.label}
                </span>
              </header>
              <dl className="flex flex-col gap-1.5 text-xsm">
                <div className="grid grid-cols-[90px_1fr] gap-2">
                  <dt className="text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
                    {content.headers.caller}
                  </dt>
                  <dd className="text-[var(--term-fg)] break-keep">{row.caller}</dd>
                </div>
                <div className="grid grid-cols-[90px_1fr] gap-2">
                  <dt className="text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
                    {content.headers.errorType}
                  </dt>
                  <dd className="text-[var(--term-fg)] break-keep">{row.errorType}</dd>
                </div>
                <div className="grid grid-cols-[90px_1fr] gap-2">
                  <dt className="text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
                    {content.headers.uiRecover}
                  </dt>
                  <dd
                    className={cn(
                      'inline-flex items-center gap-1.5 font-bold break-keep',
                      row.uiRecover.kind === 'check'
                        ? 'text-emerald-700 dark:text-emerald-300'
                        : 'text-rose-700 dark:text-rose-300',
                    )}
                  >
                    <UICheck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {row.uiRecover.label}
                  </dd>
                </div>
                <div className="grid grid-cols-[90px_1fr] gap-2">
                  <dt className="text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
                    {content.headers.useCase}
                  </dt>
                  <dd className="text-[var(--term-fg)] break-keep">{row.useCase}</dd>
                </div>
              </dl>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);

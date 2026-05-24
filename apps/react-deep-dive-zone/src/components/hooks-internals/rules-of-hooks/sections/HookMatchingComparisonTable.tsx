import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import type { MatchingRow, RulesOfHooksContent } from '../content';
import { AlertTriangleIcon, Link2OffIcon, NetworkIcon, UnlinkIcon } from '../icons';

type Props = { content: RulesOfHooksContent['matchingTable'] };

const resultKindStyles = {
  broken: {
    chip: 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900',
    text: 'text-rose-800 dark:text-rose-200',
  },
  missing: {
    chip: 'bg-orange-500 text-white dark:bg-orange-400 dark:text-slate-900',
    text: 'text-orange-800 dark:text-orange-200',
  },
} as const;

const ResultBadge = ({ kind, label }: { kind: MatchingRow['resultKind']; label: string }) => {
  const s = resultKindStyles[kind];
  const Icon = kind === 'broken' ? UnlinkIcon : Link2OffIcon;
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider',
        s.chip,
      )}
    >
      <Icon aria-hidden="true" className="h-3 w-3" />
      {label}
    </span>
  );
};

export const HookMatchingComparisonTable = ({ content }: Props) => (
  <section
    aria-labelledby="heading-matching-table"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="matching-table"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<NetworkIcon className="h-5 w-5" />}
    />

    {/* Desktop table */}
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th
              scope="col"
              className="text-left p-md text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)] border-b-2 border-[var(--term-border)] bg-[var(--term-border)]/15"
            >
              {content.headers.position}
            </th>
            <th
              scope="col"
              className="text-left p-md text-xsm font-bold border-b-2 border-l border-[var(--term-border)] bg-emerald-100/40 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-100 break-keep"
            >
              {content.headers.previous}
            </th>
            <th
              scope="col"
              className="text-left p-md text-xsm font-bold border-b-2 border-l border-[var(--term-border)] bg-rose-100/40 text-rose-800 dark:bg-rose-950/40 dark:text-rose-100 break-keep"
            >
              {content.headers.next}
            </th>
            <th
              scope="col"
              className="text-left p-md text-xsm font-bold border-b-2 border-l border-[var(--term-border)] bg-[var(--term-border)]/15 text-[var(--term-fg)] break-keep"
            >
              {content.headers.result}
            </th>
          </tr>
        </thead>
        <tbody>
          {content.rows.map((row) => {
            const s = resultKindStyles[row.resultKind];
            return (
              <tr key={row.position}>
                <th
                  scope="row"
                  className="text-left align-top p-md text-xsm font-bold text-[var(--term-fg)] border-b border-[var(--term-border)] bg-[var(--term-border)]/15 break-keep"
                >
                  {row.position}
                </th>
                <td className="p-md border-b border-l border-[var(--term-border)] align-top">
                  <code className="font-mono text-[11px] sm:text-xsm font-bold text-emerald-700 dark:text-emerald-300 break-all">
                    {row.previous}
                  </code>
                </td>
                <td className="p-md border-b border-l border-[var(--term-border)] align-top">
                  <code className="font-mono text-[11px] sm:text-xsm font-bold text-rose-700 dark:text-rose-300 break-all">
                    {row.next}
                  </code>
                </td>
                <td className="p-md border-b border-l border-[var(--term-border)] align-top">
                  <div className="flex flex-col gap-1">
                    <ResultBadge kind={row.resultKind} label={row.resultLabel} />
                    <p className={cn('text-[11px] break-keep', s.text)}>{row.resultDetail}</p>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>

    {/* Mobile cards */}
    <ul className="md:hidden flex flex-col gap-md">
      {content.rows.map((row) => {
        const s = resultKindStyles[row.resultKind];
        return (
          <li key={row.position}>
            <article
              className={cn(
                'flex flex-col gap-2 rounded-2xl border-2 bg-[var(--term-bg)] p-md',
                'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <h3 className="text-xsm font-bold text-[var(--term-fg)]">{row.position}</h3>
                <ResultBadge kind={row.resultKind} label={row.resultLabel} />
              </header>
              <dl className="grid grid-cols-1 gap-1.5">
                <div className="rounded-lg border border-emerald-200/70 bg-emerald-50/40 dark:border-emerald-800/60 dark:bg-emerald-950/20 p-2.5">
                  <dt className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                    {content.headers.previous}
                  </dt>
                  <dd className="mt-0.5">
                    <code className="font-mono text-xsm font-bold text-emerald-800 dark:text-emerald-100 break-all">
                      {row.previous}
                    </code>
                  </dd>
                </div>
                <div className="rounded-lg border border-rose-200/70 bg-rose-50/40 dark:border-rose-800/60 dark:bg-rose-950/20 p-2.5">
                  <dt className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">
                    {content.headers.next}
                  </dt>
                  <dd className="mt-0.5">
                    <code className="font-mono text-xsm font-bold text-rose-800 dark:text-rose-100 break-all">
                      {row.next}
                    </code>
                  </dd>
                </div>
              </dl>
              <p className={cn('text-[11px] break-keep', s.text)}>{row.resultDetail}</p>
            </article>
          </li>
        );
      })}
    </ul>

    {/* Warning banner */}
    <aside
      className={cn(
        'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
        'border-rose-400/80 bg-rose-50/70 dark:border-rose-600/60 dark:bg-rose-950/40',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900"
      >
        <AlertTriangleIcon className="h-4 w-4" />
      </span>
      <p className="text-xsm sm:text-sm leading-relaxed text-rose-900 dark:text-rose-100 break-keep">
        {content.bannerWarning}
      </p>
    </aside>
  </section>
);

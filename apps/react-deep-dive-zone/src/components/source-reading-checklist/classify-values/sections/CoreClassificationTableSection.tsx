import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { ValueClassificationContent } from '../content';
import { FileCodeIcon, HelpCircleIcon, ListTreeIcon } from '../icons';
import { getValueClasses, ValueBadge } from '../ValueBadge';

type Props = { content: ValueClassificationContent['coreTable'] };

export const CoreClassificationTableSection = ({ content }: Props) => {
  return (
    <section
      id="section-core-table"
      aria-labelledby="heading-core-table"
      className="space-y-lg scroll-mt-24"
    >
      <SectionHeader
        id="core-table"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<ListTreeIcon className="h-5 w-5" />}
      />

      {/* Desktop table */}
      <div
        className={cn(
          'hidden lg:block rounded-2xl border-2 overflow-hidden',
          'border-slate-200 dark:border-slate-700',
          'bg-white dark:bg-[var(--term-bg)]',
          'shadow-[0_3px_0_var(--term-border)]',
        )}
      >
        <table className="w-full text-sm">
          <thead
            className={cn(
              'border-b-2 border-slate-200 dark:border-slate-700',
              'bg-slate-50/80 dark:bg-slate-900/40',
            )}
          >
            <tr>
              <th
                scope="col"
                className="text-left px-md py-3 text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]"
              >
                {content.valueLabel}
              </th>
              <th
                scope="col"
                className="text-left px-md py-3 text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]"
              >
                {content.meaningLabel}
              </th>
              <th
                scope="col"
                className="text-left px-md py-3 text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]"
              >
                {content.questionLabel}
              </th>
              <th
                scope="col"
                className="text-left px-md py-3 text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]"
              >
                {content.locationLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, i) => {
              const t = getValueClasses(row.valueKey);
              return (
                <tr
                  key={row.valueKey}
                  className={cn(
                    i !== 0 && 'border-t border-slate-200 dark:border-slate-800',
                    'transition-colors motion-safe:hover:bg-blue-50/40 dark:motion-safe:hover:bg-blue-950/20',
                  )}
                >
                  <td className="px-md py-3 align-top">
                    <ValueBadge valueKey={row.valueKey} size="md" strong />
                  </td>
                  <td className="px-md py-3 align-top">
                    <p className="text-xsm text-[var(--term-fg)] break-keep max-w-[30ch]">
                      {row.meaning}
                    </p>
                  </td>
                  <td className="px-md py-3 align-top">
                    <p
                      className={cn(
                        'inline-flex items-start gap-1.5 text-xsm font-bold break-keep max-w-[34ch]',
                        t.text,
                      )}
                    >
                      <HelpCircleIcon className="h-3.5 w-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                      {row.question}
                    </p>
                  </td>
                  <td className="px-md py-3 align-top">
                    <code
                      className={cn(
                        'inline-flex items-center gap-1.5 overflow-x-auto rounded-md border px-2 py-1',
                        'border-[var(--term-border)] bg-[var(--term-surface)]',
                        'font-mono text-[11px] text-[var(--term-fg)]',
                      )}
                    >
                      <FileCodeIcon className="h-3 w-3" aria-hidden="true" />
                      <span className="whitespace-nowrap">{row.location}</span>
                    </code>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile/tablet card list */}
      <ul className="lg:hidden flex flex-col gap-md">
        {content.rows.map((row) => {
          const t = getValueClasses(row.valueKey);
          return (
            <li key={row.valueKey}>
              <article
                className={cn(
                  'rounded-xl border-2 p-md',
                  'bg-white dark:bg-[var(--term-bg)]',
                  t.border,
                  'shadow-[0_2px_0_var(--term-border)]',
                )}
              >
                <header className="flex items-center justify-between mb-sm">
                  <ValueBadge valueKey={row.valueKey} size="md" strong />
                </header>

                <dl className="grid grid-cols-[auto_minmax(0,_1fr)] gap-x-3 gap-y-2 text-xsm">
                  <dt className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] mt-1">
                    {content.meaningLabel}
                  </dt>
                  <dd className="text-xsm text-[var(--term-fg)] break-keep">{row.meaning}</dd>

                  <dt className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] mt-1">
                    {content.questionLabel}
                  </dt>
                  <dd
                    className={cn(
                      'inline-flex items-start gap-1.5 text-xsm font-bold break-keep',
                      t.text,
                    )}
                  >
                    <HelpCircleIcon className="h-3.5 w-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                    {row.question}
                  </dd>

                  <dt className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] mt-1">
                    {content.locationLabel}
                  </dt>
                  <dd>
                    <code
                      className={cn(
                        'inline-flex items-center gap-1.5 overflow-x-auto rounded-md border px-2 py-1',
                        'border-[var(--term-border)] bg-[var(--term-surface)]',
                        'font-mono text-[11px] text-[var(--term-fg)]',
                      )}
                    >
                      <FileCodeIcon className="h-3 w-3" aria-hidden="true" />
                      <span className="whitespace-nowrap">{row.location}</span>
                    </code>
                  </dd>
                </dl>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

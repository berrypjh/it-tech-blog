import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { RvrContent } from '../content';
import { rvrIcon } from '../icons';

type Props = { content: RvrContent['comparison'] };

export const ComparisonSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-comparison" className="space-y-md">
      <SectionHeader
        id="comparison"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<rvrIcon.table className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-2xl border bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
          'border-[var(--term-border)] overflow-hidden',
        )}
      >
        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr
                className={cn('border-b border-[var(--term-border)]', 'bg-[var(--term-surface)]')}
              >
                <th
                  scope="col"
                  className="text-left text-[10px] uppercase tracking-wider font-bold font-mono px-md py-3 text-[var(--term-muted)] w-[20%]"
                >
                  항목
                </th>
                <th
                  scope="col"
                  className={cn(
                    'text-left text-xsm font-bold font-mono px-md py-3 w-[40%]',
                    'text-[var(--term-accent)]',
                  )}
                >
                  {content.columns.reconciler}
                </th>
                <th
                  scope="col"
                  className={cn(
                    'text-left text-xsm font-bold font-mono px-md py-3 w-[40%]',
                    'text-sky-600 dark:text-sky-300',
                  )}
                >
                  {content.columns.renderer}
                </th>
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row, i) => (
                <tr
                  key={row.id}
                  className={cn(
                    'border-b last:border-b-0 border-[var(--term-border)]',
                    i % 2 === 1 && 'bg-[var(--term-surface)]/60',
                  )}
                >
                  <th
                    scope="row"
                    className="text-left text-xsm font-bold text-[var(--term-fg)] px-md py-3 align-top"
                  >
                    {row.label}
                  </th>
                  <td
                    className={cn(
                      'text-xsm leading-relaxed px-md py-3 align-top break-keep',
                      'text-[var(--term-fg)]',
                    )}
                  >
                    {row.reconciler}
                  </td>
                  <td
                    className={cn(
                      'text-xsm leading-relaxed px-md py-3 align-top break-keep',
                      'text-[var(--term-fg)]',
                    )}
                  >
                    {row.renderer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile card variant */}
        <ul className="md:hidden flex flex-col divide-y divide-[var(--term-border)]">
          {content.rows.map((row) => (
            <li key={row.id} className="p-md flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-[var(--term-muted)]">
                {row.label}
              </span>
              <div className="grid grid-cols-1 gap-2">
                <div
                  className={cn(
                    'rounded-lg border px-3 py-2',
                    'border-[var(--term-border)] bg-[var(--term-surface)]',
                  )}
                >
                  <span className="block text-[10px] uppercase tracking-wider font-mono font-bold text-[var(--term-accent)] mb-1">
                    {content.columns.reconciler}
                  </span>
                  <span className="text-xsm leading-snug text-[var(--term-fg)] break-keep">
                    {row.reconciler}
                  </span>
                </div>
                <div
                  className={cn(
                    'rounded-lg border px-3 py-2',
                    'border-[var(--term-border)] bg-[var(--term-surface)]',
                  )}
                >
                  <span className="block text-[10px] uppercase tracking-wider font-mono font-bold text-sky-600 dark:text-sky-300 mb-1">
                    {content.columns.renderer}
                  </span>
                  <span className="text-xsm leading-snug text-[var(--term-fg)] break-keep">
                    {row.renderer}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

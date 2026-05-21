import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import type { DvcContent } from '../content';
import { ScaleIcon } from '../icons';

type Props = { content: DvcContent['table']; sectionId: string };

export const ComparisonTableSection = ({ content, sectionId }: Props) => {
  return (
    <section id={sectionId} aria-labelledby="heading-table" className="space-y-md scroll-mt-2xl">
      <SectionHeader
        id="table"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<ScaleIcon className="h-5 w-5" />}
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
                className={cn(
                  'border-b border-[var(--term-border)]',
                  'bg-sky-50/70 dark:bg-sky-950/30',
                )}
              >
                <th
                  scope="col"
                  className="text-left text-[10px] uppercase tracking-wider font-bold font-mono px-md py-3 text-[var(--term-muted)] w-[20%]"
                >
                  {content.headers.item}
                </th>
                <th
                  scope="col"
                  className={cn(
                    'text-left text-xsm font-bold font-mono px-md py-3 w-[40%]',
                    'text-teal-700 dark:text-teal-300',
                  )}
                >
                  {content.headers.common}
                </th>
                <th
                  scope="col"
                  className={cn(
                    'text-left text-xsm font-bold font-mono px-md py-3 w-[40%]',
                    'text-violet-700 dark:text-violet-300',
                  )}
                >
                  {content.headers.domSpecific}
                </th>
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row, i) => (
                <tr
                  key={row.id}
                  className={cn(
                    'border-b last:border-b-0 border-[var(--term-border)]',
                    'transition-colors hover:bg-[var(--term-surface)]/80',
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
                      'text-teal-800 dark:text-teal-200',
                    )}
                  >
                    {row.common}
                  </td>
                  <td
                    className={cn(
                      'text-xsm leading-relaxed px-md py-3 align-top break-keep',
                      'text-violet-800 dark:text-violet-200',
                    )}
                  >
                    {row.domSpecific}
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
                    'border-teal-300/80 bg-teal-50 dark:border-teal-800/70 dark:bg-teal-950/30',
                  )}
                >
                  <span className="block text-[10px] uppercase tracking-wider font-mono font-bold text-teal-700 dark:text-teal-300 mb-1">
                    {content.headers.common}
                  </span>
                  <span className="text-xsm leading-snug text-teal-900 dark:text-teal-100 break-keep">
                    {row.common}
                  </span>
                </div>
                <div
                  className={cn(
                    'rounded-lg border px-3 py-2',
                    'border-violet-300/80 bg-violet-50 dark:border-violet-800/70 dark:bg-violet-950/30',
                  )}
                >
                  <span className="block text-[10px] uppercase tracking-wider font-mono font-bold text-violet-700 dark:text-violet-300 mb-1">
                    {content.headers.domSpecific}
                  </span>
                  <span className="text-xsm leading-snug text-violet-900 dark:text-violet-100 break-keep">
                    {row.domSpecific}
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

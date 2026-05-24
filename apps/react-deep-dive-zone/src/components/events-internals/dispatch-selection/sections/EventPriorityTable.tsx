import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { DispatchSelectionContent } from '../content';
import { GlobeIcon, TableIcon } from '../icons';
import { priorityBadge, priorityText } from '../priorityStyle';

type Props = { content: DispatchSelectionContent['table'] };

export const EventPriorityTable = ({ content }: Props) => (
  <section aria-labelledby="heading-table">
    <NumberedSectionHeader
      id="table"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<TableIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'overflow-hidden rounded-2xl border bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
      )}
    >
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xsm sm:text-sm" aria-label={content.title}>
          <thead>
            <tr className="bg-blue-50/70 dark:bg-blue-950/30">
              <th
                scope="col"
                className="px-md py-3 text-left font-mono font-bold uppercase tracking-wider text-[10px] sm:text-xsm text-blue-800 dark:text-blue-200 border-b border-blue-200/80 dark:border-blue-800/50"
              >
                <span className="inline-flex items-center gap-2">
                  <GlobeIcon aria-hidden="true" className="h-3.5 w-3.5" />
                  {content.columns.native}
                </span>
              </th>
              <th
                scope="col"
                className="px-md py-3 text-left font-mono font-bold uppercase tracking-wider text-[10px] sm:text-xsm text-blue-800 dark:text-blue-200 border-b border-blue-200/80 dark:border-blue-800/50"
              >
                {content.columns.priority}
              </th>
              <th
                scope="col"
                className="px-md py-3 text-left font-mono font-bold uppercase tracking-wider text-[10px] sm:text-xsm text-blue-800 dark:text-blue-200 border-b border-blue-200/80 dark:border-blue-800/50"
              >
                {content.columns.description}
              </th>
              <th
                scope="col"
                className="px-md py-3 text-left font-mono font-bold uppercase tracking-wider text-[10px] sm:text-xsm text-blue-800 dark:text-blue-200 border-b border-blue-200/80 dark:border-blue-800/50"
              >
                {content.columns.wrapper}
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, i) => (
              <tr
                key={`${row.native}-${i}`}
                className={cn(
                  'transition-colors hover:bg-blue-50/30 dark:hover:bg-blue-950/10',
                  i % 2 === 1 && 'bg-[var(--term-surface)]/40',
                )}
              >
                <td className="px-md py-2.5 border-t border-[var(--term-border)] whitespace-nowrap">
                  <code className="font-mono font-bold text-sky-700 dark:text-sky-300 break-all">
                    {row.native}
                  </code>
                </td>
                <td className="px-md py-2.5 border-t border-[var(--term-border)] whitespace-nowrap">
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-bold',
                      priorityBadge[row.tone],
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className="block h-1.5 w-1.5 rounded-full bg-current opacity-70"
                    />
                    {row.priority}
                  </span>
                </td>
                <td className="px-md py-2.5 border-t border-[var(--term-border)] text-[var(--term-fg)] break-keep">
                  {row.description}
                </td>
                <td className="px-md py-2.5 border-t border-[var(--term-border)] whitespace-nowrap">
                  <code
                    className={cn(
                      'inline-block rounded-md border border-[var(--term-border)] bg-[var(--term-surface)]/60 px-2 py-0.5 font-mono text-[11px] sm:text-xsm font-bold break-all',
                      priorityText[row.tone],
                    )}
                  >
                    {row.wrapper}
                  </code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

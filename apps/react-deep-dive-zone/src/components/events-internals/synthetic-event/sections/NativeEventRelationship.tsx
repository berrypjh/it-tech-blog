import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { SyntheticEventContent } from '../content';
import { LinkIcon } from '../icons';

type Props = { content: SyntheticEventContent['relationship'] };

export const NativeEventRelationship = ({ content }: Props) => (
  <section aria-labelledby="heading-relationship">
    <NumberedSectionHeader
      id="relationship"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<LinkIcon className="h-5 w-5" />}
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
                {content.columns.name}
              </th>
              <th
                scope="col"
                className="px-md py-3 text-left font-mono font-bold uppercase tracking-wider text-[10px] sm:text-xsm text-blue-800 dark:text-blue-200 border-b border-blue-200/80 dark:border-blue-800/50"
              >
                {content.columns.meaning}
              </th>
              <th
                scope="col"
                className="px-md py-3 text-left font-mono font-bold uppercase tracking-wider text-[10px] sm:text-xsm text-blue-800 dark:text-blue-200 border-b border-blue-200/80 dark:border-blue-800/50"
              >
                {content.columns.note}
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, i) => (
              <tr
                key={row.name}
                className={cn(
                  'transition-colors hover:bg-blue-50/30 dark:hover:bg-blue-950/10',
                  i % 2 === 1 && 'bg-[var(--term-surface)]/40',
                )}
              >
                <td className="px-md py-2.5 border-t border-[var(--term-border)] whitespace-nowrap">
                  <code className="font-mono font-bold text-violet-700 dark:text-violet-300 break-all">
                    {row.name}
                  </code>
                </td>
                <td className="px-md py-2.5 border-t border-[var(--term-border)] text-[var(--term-fg)] break-keep">
                  {row.meaning}
                </td>
                <td className="px-md py-2.5 border-t border-[var(--term-border)] text-[var(--term-muted)] break-keep">
                  {row.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

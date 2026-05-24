import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { OnClickClickContent } from '../content';
import { ArrowRightIcon, GlobeIcon, TableIcon } from '../icons';

type Props = { content: OnClickClickContent['compare'] };

export const PropNativeEventCompare = ({ content }: Props) => (
  <section aria-labelledby="heading-compare">
    <NumberedSectionHeader
      id="compare"
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
                  {content.columnLabels.native}
                </span>
              </th>
              <th
                scope="col"
                aria-hidden="true"
                className="w-10 border-b border-blue-200/80 dark:border-blue-800/50"
              />
              <th
                scope="col"
                className="px-md py-3 text-left font-mono font-bold uppercase tracking-wider text-[10px] sm:text-xsm text-teal-800 dark:text-teal-200 border-b border-blue-200/80 dark:border-blue-800/50"
              >
                {content.columnLabels.prop}
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, i) => (
              <tr
                key={`${row.native}-${row.prop}`}
                className={cn(
                  'transition-colors hover:bg-blue-50/40 dark:hover:bg-blue-950/10',
                  i % 2 === 1 && 'bg-[var(--term-surface)]/50',
                )}
              >
                <td className="px-md py-2.5 border-t border-[var(--term-border)]">
                  <code className="font-mono font-bold text-sky-700 dark:text-sky-300 break-all">
                    {row.native}
                  </code>
                </td>
                <td
                  aria-hidden="true"
                  className="text-center text-blue-500 dark:text-blue-300 border-t border-[var(--term-border)]"
                >
                  <ArrowRightIcon className="inline-block h-3.5 w-3.5" />
                </td>
                <td className="px-md py-2.5 border-t border-[var(--term-border)]">
                  <code className="font-mono font-bold text-teal-700 dark:text-teal-300 break-all">
                    {row.prop}
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

import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../getting-started/_shared/tones';
import { SectionBadgeHeader } from '../../_shared/SectionBadgeHeader';
import type { ReactElementSummaryBeforeFiberContent } from '../content';
import { StarIcon, TableIcon } from '../icons';

type Props = { content: ReactElementSummaryBeforeFiberContent['compare'] };

const tintByCol = {
  jsx: 'bg-sky-50/40 dark:bg-sky-950/20',
  element: 'bg-blue-50/40 dark:bg-blue-950/20',
  fiber: 'bg-violet-50/40 dark:bg-violet-950/20',
  dom: 'bg-teal-50/40 dark:bg-teal-950/20',
} as const;

export const JsxElementFiberDomComparison = ({ content }: Props) => (
  <section aria-labelledby="heading-compare" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="compare"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<TableIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'rounded-2xl border bg-[var(--term-bg)] overflow-hidden',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px] border-collapse text-left">
          <thead>
            <tr className="bg-sky-50/70 dark:bg-sky-950/30">
              <th className="px-md py-3 text-xsm font-bold uppercase tracking-wider text-[var(--term-muted)] w-[14%]">
                {content.aspectLabel}
              </th>
              {content.columns.map((col) => {
                const t = toneTokens[col.tone];
                return (
                  <th key={col.id} className="px-md py-3 text-xsm font-bold tracking-tight">
                    <span className={cn('inline-flex items-center gap-1.5 font-mono', t.text)}>
                      <span
                        aria-hidden="true"
                        className={cn('inline-block w-1.5 h-1.5 rounded-full', t.dot)}
                      />
                      {col.label}
                    </span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, idx) => (
              <tr
                key={row.id}
                className={cn(
                  idx > 0 && 'border-t border-dashed border-[var(--term-border)]',
                  'align-top',
                )}
              >
                <th
                  scope="row"
                  className="px-md py-3 text-xsm font-bold text-[var(--term-fg)] whitespace-nowrap"
                >
                  {row.label}
                </th>
                {content.columns.map((col) => (
                  <td
                    key={col.id}
                    className={cn(
                      'px-md py-3 text-xsm leading-relaxed text-[var(--term-fg)] break-keep',
                      tintByCol[col.id],
                    )}
                  >
                    {row.values[col.id]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div
      className={cn(
        'flex items-center gap-sm rounded-2xl px-md py-md',
        'border-2 border-sky-300/70 bg-sky-50/60',
        'dark:border-sky-700/70 dark:bg-sky-950/30',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-500/15 text-sky-700 dark:text-sky-300 shrink-0"
      >
        <StarIcon className="h-5 w-5" />
      </span>
      <p className="text-sm font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
        {content.emphasis}
      </p>
    </div>
  </section>
);

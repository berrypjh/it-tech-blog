import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { JsxIsNotHtmlContent } from '../content';
import { TableIcon } from '../icons';

type Props = { content: JsxIsNotHtmlContent['comparison'] };

export const JsxHtmlComparisonTable = ({ content }: Props) => (
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
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="bg-[var(--term-surface)]">
              <th className="px-md py-3 text-xsm font-bold uppercase tracking-wider text-[var(--term-muted)] w-[20%]">
                {content.columns.label}
              </th>
              <th className="px-md py-3 text-xsm font-bold tracking-tight">
                <span className="inline-flex items-center gap-1.5 text-[var(--term-accent)]">
                  <span
                    aria-hidden="true"
                    className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--term-accent)]"
                  />
                  {content.columns.jsx}
                </span>
              </th>
              <th className="px-md py-3 text-xsm font-bold tracking-tight">
                <span className="inline-flex items-center gap-1.5 text-sky-600 dark:text-sky-300">
                  <span
                    aria-hidden="true"
                    className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400 dark:bg-sky-500"
                  />
                  {content.columns.html}
                </span>
              </th>
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
                <td className="px-md py-3 text-xsm leading-relaxed text-[var(--term-fg)] bg-[var(--term-surface)] break-keep">
                  {row.jsx}
                </td>
                <td className="px-md py-3 text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                  {row.html}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

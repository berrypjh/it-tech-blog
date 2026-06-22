import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { ElementVsFiberContent } from '../content';
import { LayersIcon } from '../icons';

type Props = { content: ElementVsFiberContent['comparison'] };

export const ElementFiberComparisonTable = ({ content }: Props) => (
  <section id="comparison" aria-labelledby="heading-comparison" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="comparison"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'rounded-2xl border bg-[var(--term-bg)] overflow-hidden',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse text-left">
          <caption className="sr-only">{content.title} — Element와 Fiber 항목별 비교</caption>
          <thead>
            <tr>
              <th
                scope="col"
                className={cn(
                  'px-md py-3 text-xsm font-bold uppercase tracking-wider',
                  'text-[var(--term-muted)] bg-[var(--term-surface)] w-[20%]',
                )}
              >
                {content.aspectLabel}
              </th>
              <th
                scope="col"
                className={cn(
                  'px-md py-3 text-xsm font-bold tracking-tight',
                  'bg-sky-50 text-sky-800',
                  'dark:bg-sky-950/40 dark:text-sky-100',
                )}
              >
                <span className="inline-flex items-center gap-1.5 font-mono">
                  <span
                    aria-hidden="true"
                    className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400"
                  />
                  {content.columns[0].label}
                </span>
              </th>
              <th
                scope="col"
                className={cn(
                  'px-md py-3 text-xsm font-bold tracking-tight',
                  'bg-teal-50 text-teal-800',
                  'dark:bg-teal-950/40 dark:text-teal-100',
                )}
              >
                <span className="inline-flex items-center gap-1.5 font-mono">
                  <span
                    aria-hidden="true"
                    className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400"
                  />
                  {content.columns[1].label}
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
                  className={cn(
                    'px-md py-3 text-xsm font-bold text-[var(--term-fg)] whitespace-nowrap',
                    'bg-[var(--term-surface)]',
                  )}
                >
                  {row.label}
                </th>
                <td
                  className={cn(
                    'px-md py-3 text-xsm leading-relaxed text-[var(--term-fg)] break-keep',
                    'bg-sky-50/30 dark:bg-sky-950/15',
                  )}
                >
                  {row.element}
                </td>
                <td
                  className={cn(
                    'px-md py-3 text-xsm leading-relaxed text-[var(--term-fg)] break-keep',
                    'bg-teal-50/30 dark:bg-teal-950/15',
                  )}
                >
                  {row.fiber}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

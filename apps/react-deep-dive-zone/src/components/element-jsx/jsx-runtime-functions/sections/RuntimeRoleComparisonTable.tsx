import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { JsxRuntimeFunctionsContent } from '../content';
import { TableIcon } from '../icons';
import { toneDot, toneText } from '../localTone';

type Props = { content: JsxRuntimeFunctionsContent['comparison'] };

export const RuntimeRoleComparisonTable = ({ content }: Props) => (
  <section aria-labelledby="heading-roles" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="roles"
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
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="bg-[var(--term-surface)]">
              <th className="px-md py-3 text-xsm font-bold uppercase tracking-wider text-[var(--term-muted)] w-[18%]">
                {content.aspectLabel}
              </th>
              {content.columns.map((col) => (
                <th key={col.id} className="px-md py-3 text-xsm font-bold tracking-tight">
                  <span
                    className={cn('inline-flex items-center gap-1.5 font-mono', toneText(col.tone))}
                  >
                    <span
                      aria-hidden="true"
                      className={cn('inline-block w-1.5 h-1.5 rounded-full', toneDot(col.tone))}
                    />
                    {col.label}
                  </span>
                </th>
              ))}
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
                    className="px-md py-3 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
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
  </section>
);

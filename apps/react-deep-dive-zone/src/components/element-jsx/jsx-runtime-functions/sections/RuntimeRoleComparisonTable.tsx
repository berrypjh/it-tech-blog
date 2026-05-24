import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../getting-started/_shared/tones';
import { SectionBadgeHeader } from '../../_shared/SectionBadgeHeader';
import type { JsxRuntimeFunctionsContent } from '../content';
import { TableIcon } from '../icons';

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
            <tr className="bg-sky-50/70 dark:bg-sky-950/30">
              <th className="px-md py-3 text-xsm font-bold uppercase tracking-wider text-[var(--term-muted)] w-[18%]">
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
                {content.columns.map((col) => {
                  const tint = tintForTone(col.id);
                  return (
                    <td
                      key={col.id}
                      className={cn(
                        'px-md py-3 text-xsm leading-relaxed text-[var(--term-fg)] break-keep',
                        tint,
                      )}
                    >
                      {row.values[col.id]}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const tintForTone = (id: 'jsx' | 'jsxs' | 'jsxDEV') => {
  switch (id) {
    case 'jsx':
      return 'bg-sky-50/40 dark:bg-sky-950/20';
    case 'jsxs':
      return 'bg-teal-50/40 dark:bg-teal-950/20';
    case 'jsxDEV':
      return 'bg-violet-50/40 dark:bg-violet-950/20';
  }
};

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { ReactElementTypeMeaningContent } from '../content';
import { SparklesIcon, TableIcon } from '../icons';
import { toneChip, toneDot, toneText } from '../localTone';

type Props = { content: ReactElementTypeMeaningContent['compare'] };

export const TypeComparisonTable = ({ content }: Props) => (
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
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr className="bg-[var(--term-surface)]">
              <th className="px-md py-3 text-xsm font-bold uppercase tracking-wider text-[var(--term-muted)] w-[20%]">
                {content.headers.category}
              </th>
              <th className="px-md py-3 text-xsm font-bold uppercase tracking-wider text-[var(--term-muted)] w-[18%]">
                {content.headers.jsx}
              </th>
              <th className="px-md py-3 text-xsm font-bold uppercase tracking-wider text-[var(--term-muted)] w-[22%]">
                {content.headers.type}
              </th>
              <th className="px-md py-3 text-xsm font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.headers.next}
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, idx) => {
              return (
                <tr
                  key={row.id}
                  className={cn(
                    idx > 0 && 'border-t border-dashed border-[var(--term-border)]',
                    'align-top',
                  )}
                >
                  <th scope="row" className="px-md py-3 text-xsm font-bold whitespace-nowrap">
                    <span
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
                        toneChip(row.tone),
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn('inline-block w-1.5 h-1.5 rounded-full', toneDot(row.tone))}
                      />
                      {row.category}
                    </span>
                  </th>
                  <td className="px-md py-3 text-xsm">
                    <code className="font-mono text-xsm font-bold text-[var(--term-fg)] break-all">
                      {row.jsx}
                    </code>
                  </td>
                  <td className="px-md py-3">
                    <code
                      className={cn('font-mono text-xsm font-bold break-all', toneText(row.tone))}
                    >
                      {row.typeValue}
                    </code>
                  </td>
                  <td className="px-md py-3 text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                    {row.next}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>

    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl px-md py-md',
        'bg-[var(--term-surface)] border border-[var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)] shrink-0"
      >
        <SparklesIcon className="h-5 w-5" />
      </span>
      <p className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
        {content.emphasis}
      </p>
    </div>
  </section>
);

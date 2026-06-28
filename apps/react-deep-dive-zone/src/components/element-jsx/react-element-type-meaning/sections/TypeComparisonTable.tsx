import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ReactElementTypeMeaningContent } from '../content';
import { SparklesIcon, TableIcon } from '../icons';

type Props = { content: ReactElementTypeMeaningContent['compare'] };

export const TypeComparisonTable = ({ content }: Props) => (
  <section aria-labelledby="heading-compare" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
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
                        'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
                        toneTokens[row.tone].chip,
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          'inline-block w-1.5 h-1.5 rounded-full',
                          toneTokens[row.tone].dot,
                        )}
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
                      className={cn(
                        'font-mono text-xsm font-bold break-all',
                        toneTokens[row.tone].text,
                      )}
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

    <SectionNote icon={<SparklesIcon className="h-4 w-4" />}>{content.emphasis}</SectionNote>
  </section>
);

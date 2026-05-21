import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../start/_shared/tones';
import { SectionBadgeHeader } from '../../_shared/SectionBadgeHeader';
import type { ReactElementTypeMeaningContent } from '../content';
import { SparklesIcon, TableIcon } from '../icons';

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
            <tr className="bg-sky-50/70 dark:bg-sky-950/30">
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
              const t = toneTokens[row.tone];
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
                        t.chip,
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn('inline-block w-1.5 h-1.5 rounded-full', t.dot)}
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
                    <code className={cn('font-mono text-xsm font-bold break-all', t.text)}>
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
        'bg-gradient-to-r from-sky-50 via-cyan-50 to-violet-50',
        'dark:from-sky-950/40 dark:via-cyan-950/40 dark:to-violet-950/40',
        'border border-sky-200/70 dark:border-sky-800/60',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-500/15 text-sky-700 dark:text-sky-300 shrink-0"
      >
        <SparklesIcon className="h-5 w-5" />
      </span>
      <p className="text-sm font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
        {content.emphasis}
      </p>
    </div>
  </section>
);

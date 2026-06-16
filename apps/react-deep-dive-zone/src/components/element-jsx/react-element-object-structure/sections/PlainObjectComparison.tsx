import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { ReactElementObjectStructureContent } from '../content';
import { SparklesIcon, TableIcon } from '../icons';

type Props = { content: ReactElementObjectStructureContent['compare'] };

export const PlainObjectComparison = ({ content }: Props) => (
  <section aria-labelledby="heading-compare-plain" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="compare-plain"
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
              <th className="px-md py-3 text-xsm font-bold uppercase tracking-wider text-[var(--term-muted)] w-[22%]">
                {content.headers.aspect}
              </th>
              <th className="px-md py-3 text-xsm font-bold tracking-tight">
                <span className="inline-flex items-center gap-1.5 text-[var(--term-muted)] font-mono">
                  <span
                    aria-hidden="true"
                    className="inline-block w-1.5 h-1.5 rounded-full bg-slate-400"
                  />
                  {content.headers.plain}
                </span>
              </th>
              <th className="px-md py-3 text-xsm font-bold tracking-tight">
                <span className="inline-flex items-center gap-1.5 text-[var(--term-accent)] font-mono">
                  <span
                    aria-hidden="true"
                    className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--term-accent)]"
                  />
                  {content.headers.element}
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
                <td className="px-md py-3 text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {row.plain}
                </td>
                <td className="px-md py-3 text-xsm leading-relaxed text-[var(--term-fg)] break-keep bg-[var(--term-surface)]">
                  {row.element}
                </td>
              </tr>
            ))}
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
        className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-accent)] shrink-0"
      >
        <SparklesIcon className="h-5 w-5" />
      </span>
      <p className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
        {content.emphasis}
      </p>
    </div>
  </section>
);

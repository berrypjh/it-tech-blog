import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { IsValidRow, ReactElementObjectStructureContent } from '../content';
import { CheckCircleIcon, ListChecksIcon, XCircleIcon } from '../icons';

type Props = { content: ReactElementObjectStructureContent['isValid'] };

export const IsValidElementTable = ({ content }: Props) => (
  <section id="is-valid" aria-labelledby="heading-is-valid" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="is-valid"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecksIcon className="h-5 w-5" />}
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
              <th className="px-md py-3 text-xsm font-bold uppercase tracking-wider text-[var(--term-muted)] w-[18%]">
                {content.headers.input}
              </th>
              <th className="px-md py-3 text-xsm font-bold uppercase tracking-wider text-[var(--term-muted)] w-[34%]">
                {content.headers.code}
              </th>
              <th className="px-md py-3 text-xsm font-bold uppercase tracking-wider text-[var(--term-muted)] w-[14%]">
                {content.headers.result}
              </th>
              <th className="px-md py-3 text-xsm font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.headers.description}
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, idx) => (
              <Row
                key={row.id}
                row={row}
                trueLabel={content.trueLabel}
                falseLabel={content.falseLabel}
                first={idx === 0}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const Row = ({
  row,
  trueLabel,
  falseLabel,
  first,
}: {
  row: IsValidRow;
  trueLabel: string;
  falseLabel: string;
  first: boolean;
}) => (
  <tr
    className={cn(!first && 'border-t border-dashed border-[var(--term-border)]', 'align-middle')}
  >
    <td className="px-md py-3">
      <code className="font-mono text-xsm sm:text-sm font-bold text-[var(--term-fg)]">
        {row.input}
      </code>
    </td>
    <td className="px-md py-3">
      <code className="font-mono text-xsm tracking-tight text-[var(--term-muted)] break-all">
        {row.code}
      </code>
    </td>
    <td className="px-md py-3">
      {row.result ? (
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider',
            'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]',
          )}
        >
          <CheckCircleIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {trueLabel}
        </span>
      ) : (
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider',
            'border-[var(--term-border)] bg-[var(--term-surface)] text-rose-600 dark:text-rose-300',
          )}
        >
          <XCircleIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {falseLabel}
        </span>
      )}
    </td>
    <td className="px-md py-3 text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
      {row.description}
    </td>
  </tr>
);

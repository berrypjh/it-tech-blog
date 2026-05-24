import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { toneTokens } from '../../../start/_shared/tones';
import type { RoleTableRow, UpdateToRenderSummaryContent } from '../content';
import { ListChecksIcon } from '../icons';

type Props = { content: UpdateToRenderSummaryContent['roleTable'] };

export const StepRoleTableSection = ({ content }: Props) => (
  <section id="role-table" aria-labelledby="heading-role-table" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="role-table"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'overflow-hidden rounded-3xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse text-left text-xsm sm:text-sm">
          <thead>
            <tr
              className={cn(
                'bg-slate-50/80 dark:bg-slate-900/40',
                'border-b border-[var(--term-border)]',
              )}
            >
              <th
                scope="col"
                className="px-md py-3 font-bold text-[var(--term-fg)] w-16 tabular-nums"
              >
                {content.columns.order}
              </th>
              <th
                scope="col"
                className="px-md py-3 font-bold text-[var(--term-fg)] border-l border-[var(--term-border)]"
              >
                {content.columns.fn}
              </th>
              <th
                scope="col"
                className="px-md py-3 font-bold text-[var(--term-fg)] border-l border-[var(--term-border)]"
              >
                {content.columns.role}
              </th>
              <th
                scope="col"
                className="px-md py-3 font-bold text-[var(--term-fg)] border-l border-[var(--term-border)]"
              >
                {content.columns.point}
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, idx) => (
              <Row key={row.order} row={row} isLast={idx === content.rows.length - 1} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <ul className="md:hidden divide-y divide-[var(--term-border)]">
        {content.rows.map((row) => {
          const t = toneTokens[row.tone];
          return (
            <li
              key={row.order}
              className={cn(
                'flex flex-col gap-2 p-md',
                row.final && 'bg-violet-50/40 dark:bg-violet-950/20',
              )}
            >
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] tabular-nums">
                  #{row.order}
                </span>
                <code
                  className={cn(
                    'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xsm font-bold',
                    'border-slate-800 bg-slate-950',
                    row.final ? 'text-violet-200' : 'text-amber-300',
                  )}
                >
                  {row.fn}
                </code>
              </div>
              <p
                className={cn(
                  'text-xsm font-bold break-keep',
                  row.final ? 'text-violet-800 dark:text-violet-100' : t.text,
                )}
              >
                {row.role}
              </p>
              <p className="text-xxsm text-[var(--term-muted)] leading-snug break-keep">
                {row.point}
              </p>
            </li>
          );
        })}
      </ul>
    </article>
  </section>
);

const Row = ({ row, isLast }: { row: RoleTableRow; isLast: boolean }) => {
  const t = toneTokens[row.tone];
  return (
    <tr
      className={cn(
        !isLast && 'border-b border-dashed border-[var(--term-border)]',
        row.final && 'bg-violet-50/30 dark:bg-violet-950/20',
      )}
    >
      <th
        scope="row"
        className={cn(
          'px-md py-3 align-top text-[var(--term-muted)] font-mono tabular-nums',
          row.final && 'text-violet-700 dark:text-violet-200 font-bold',
        )}
      >
        {row.order}
      </th>
      <td className="px-md py-3 align-top border-l border-[var(--term-border)]">
        <code
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xsm font-bold',
            'border-slate-800 bg-slate-950',
            row.final ? 'text-violet-200' : 'text-amber-300',
          )}
        >
          {row.fn}
        </code>
      </td>
      <td
        className={cn(
          'px-md py-3 align-top border-l border-[var(--term-border)] break-keep',
          row.final ? 'text-violet-800 dark:text-violet-100 font-bold' : t.text,
        )}
      >
        {row.role}
      </td>
      <td className="px-md py-3 align-top border-l border-[var(--term-border)] text-[var(--term-fg)] break-keep">
        {row.point}
      </td>
    </tr>
  );
};

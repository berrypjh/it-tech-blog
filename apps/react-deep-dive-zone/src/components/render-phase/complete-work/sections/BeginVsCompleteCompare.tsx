import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { CompareRow, CompleteWorkContent } from '../content';
import { ArrowDownIcon, ArrowUpIcon, GitBranchIcon } from '../icons';

type Props = { content: CompleteWorkContent['compare'] };

export const BeginVsCompleteCompare = ({ content }: Props) => (
  <section id="compare" aria-labelledby="heading-compare" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="compare"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<GitBranchIcon className="h-5 w-5" />}
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
            <tr className="bg-slate-50/80 dark:bg-slate-900/40 border-b border-[var(--term-border)]">
              <th scope="col" className="px-md py-3 font-bold text-[var(--term-fg)] w-[16%]">
                {content.columns.direction}
              </th>
              <th
                scope="col"
                className="px-md py-3 font-bold text-[var(--term-fg)] w-[22%] border-l border-[var(--term-border)]"
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
                className="px-md py-3 font-bold text-[var(--term-fg)] w-[20%] border-l border-[var(--term-border)]"
              >
                {content.columns.target}
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, idx) => (
              <Row key={idx} row={row} isLast={idx === content.rows.length - 1} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <ul className="md:hidden divide-y divide-[var(--term-border)]">
        {content.rows.map((row, idx) => (
          <MobileRow key={idx} row={row} columns={content.columns} />
        ))}
      </ul>
    </article>
  </section>
);

const Row = ({ row, isLast }: { row: CompareRow; isLast: boolean }) => {
  const isTeal = row.tone === 'teal';
  const Arrow = row.direction.iconName === 'arrowDown' ? ArrowDownIcon : ArrowUpIcon;
  return (
    <tr
      className={cn(
        !isLast && 'border-b border-[var(--term-border)]',
        isTeal ? 'bg-teal-50/30 dark:bg-teal-950/15' : 'bg-violet-50/30 dark:bg-violet-950/15',
      )}
    >
      <th
        scope="row"
        className={cn(
          'px-md py-4 align-top',
          isTeal ? 'text-teal-800 dark:text-teal-100' : 'text-violet-800 dark:text-violet-100',
        )}
      >
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
              isTeal
                ? 'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60'
                : 'bg-violet-100 text-violet-700 border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
            )}
          >
            <Arrow className="h-5 w-5" />
          </span>
          <div className="flex flex-col gap-0">
            <span className="text-sm font-bold leading-tight">{row.direction.label}</span>
            <span className="text-[10px] font-mono uppercase tracking-wider">
              {row.direction.detail}
            </span>
          </div>
        </div>
      </th>
      <td className="px-md py-4 align-top border-l border-[var(--term-border)]">
        <ul className="flex flex-col gap-1">
          {row.fn.map((fn) => (
            <li key={fn}>
              <code
                className={cn(
                  'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xsm font-bold',
                  'border-slate-800 bg-slate-950',
                  isTeal ? 'text-teal-300' : 'text-violet-300',
                )}
              >
                {fn}
              </code>
            </li>
          ))}
        </ul>
      </td>
      <td className="px-md py-4 align-top border-l border-[var(--term-border)] text-[var(--term-fg)] break-keep">
        <ul className="flex flex-col gap-1">
          {row.role.map((r, idx) => (
            <li
              key={r}
              className={cn('text-xsm sm:text-sm leading-snug', idx === 0 && 'font-bold')}
            >
              {r}
            </li>
          ))}
        </ul>
      </td>
      <td
        className={cn(
          'px-md py-4 align-top border-l border-[var(--term-border)] font-bold break-keep',
          isTeal ? 'text-teal-800 dark:text-teal-100' : 'text-violet-800 dark:text-violet-100',
        )}
      >
        {row.target}
      </td>
    </tr>
  );
};

const MobileRow = ({
  row,
  columns,
}: {
  row: CompareRow;
  columns: CompleteWorkContent['compare']['columns'];
}) => {
  const isTeal = row.tone === 'teal';
  const Arrow = row.direction.iconName === 'arrowDown' ? ArrowDownIcon : ArrowUpIcon;
  return (
    <li
      className={cn(
        'flex flex-col gap-2 p-md',
        isTeal ? 'bg-teal-50/30 dark:bg-teal-950/15' : 'bg-violet-50/30 dark:bg-violet-950/15',
      )}
    >
      <div className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
            isTeal
              ? 'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60'
              : 'bg-violet-100 text-violet-700 border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
          )}
        >
          <Arrow className="h-5 w-5" />
        </span>
        <div className="flex flex-col">
          <span className="text-sm font-bold leading-tight">{row.direction.label}</span>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {row.direction.detail}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-[100px_minmax(0,_1fr)] gap-x-2 gap-y-1.5 text-xsm">
        <span className="font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {columns.fn}
        </span>
        <div className="flex flex-wrap gap-1">
          {row.fn.map((fn) => (
            <code
              key={fn}
              className={cn(
                'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xsm font-bold',
                'border-slate-800 bg-slate-950',
                isTeal ? 'text-teal-300' : 'text-violet-300',
              )}
            >
              {fn}
            </code>
          ))}
        </div>
        <span className="font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {columns.role}
        </span>
        <ul className="flex flex-col gap-0.5">
          {row.role.map((r) => (
            <li key={r} className="text-xsm text-[var(--term-fg)] break-keep">
              {r}
            </li>
          ))}
        </ul>
        <span className="font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {columns.target}
        </span>
        <span
          className={cn(
            'font-bold break-keep',
            isTeal ? 'text-teal-800 dark:text-teal-100' : 'text-violet-800 dark:text-violet-100',
          )}
        >
          {row.target}
        </span>
      </div>
    </li>
  );
};

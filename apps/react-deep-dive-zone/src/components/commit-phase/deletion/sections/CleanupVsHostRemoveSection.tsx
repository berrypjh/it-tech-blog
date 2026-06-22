import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { commitToneTokens } from '../../_shared/tones';
import type { CleanupVsRemoveRow, DeletionContent } from '../content';
import { LightbulbIcon, ListChecksIcon, SprayCanIcon, TrashIcon } from '../icons';

type Props = { content: DeletionContent['cleanupVsRemove'] };

const iconMap: Record<CleanupVsRemoveRow['iconName'], typeof SprayCanIcon> = {
  broom: SprayCanIcon,
  trash: TrashIcon,
};

export const CleanupVsHostRemoveSection = ({ content }: Props) => (
  <section
    id="cleanup-vs-remove"
    aria-labelledby="heading-cleanup-vs-remove"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="cleanup-vs-remove"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.3fr)_minmax(0,_0.7fr)] gap-3">
      <CompareTable columns={content.columns} rows={content.rows} />
      <PointCard title={content.pointTitle} text={content.pointText} />
    </div>
  </section>
);

const CompareTable = ({
  columns,
  rows,
}: {
  columns: DeletionContent['cleanupVsRemove']['columns'];
  rows: CleanupVsRemoveRow[];
}) => (
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
          <tr className="border-b border-[var(--term-border)]">
            <th
              scope="col"
              className="px-md py-3 font-bold text-[var(--term-fg)] w-[22%] bg-slate-50/80 dark:bg-slate-900/40"
            >
              {columns.task}
            </th>
            <th
              scope="col"
              className="px-md py-3 font-bold text-left border-l border-[var(--term-border)] bg-slate-50/80 text-[var(--term-fg)] dark:bg-slate-900/40"
            >
              {columns.meaning}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <Row key={row.task} row={row} isLast={idx === rows.length - 1} />
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile cards */}
    <ul className="md:hidden divide-y divide-[var(--term-border)]">
      {rows.map((row) => (
        <MobileRow key={row.task} row={row} />
      ))}
    </ul>
  </article>
);

const Row = ({ row, isLast }: { row: CleanupVsRemoveRow; isLast: boolean }) => {
  const Icon = iconMap[row.iconName];
  const t = commitToneTokens[row.tone];
  return (
    <tr
      className={cn(
        !isLast && 'border-b border-dashed border-[var(--term-border)]',
        'transition-colors hover:bg-[var(--term-surface)]',
      )}
    >
      <th scope="row" className={cn('px-md py-3 align-top bg-slate-50/40 dark:bg-slate-900/20')}>
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-8 w-8 items-center justify-center rounded-md border',
              t.chipSolid,
            )}
          >
            <Icon className="h-4 w-4" />
          </span>
          <code className={cn('text-xsm font-bold font-mono', t.text)}>{row.task}</code>
        </div>
      </th>
      <td className="px-md py-3 align-top border-l border-[var(--term-border)]">
        <ul className="flex flex-col gap-1">
          {row.meaning.map((line) => (
            <li
              key={line}
              className="flex items-start gap-1.5 text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep"
            >
              <span
                aria-hidden="true"
                className={cn('mt-1.5 inline-block h-1.5 w-1.5 rounded-full shrink-0', t.dot)}
              />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

const MobileRow = ({ row }: { row: CleanupVsRemoveRow }) => {
  const Icon = iconMap[row.iconName];
  const t = commitToneTokens[row.tone];
  return (
    <li className="flex flex-col gap-2 p-md">
      <div className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-8 w-8 items-center justify-center rounded-md border',
            t.chipSolid,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <code className={cn('text-xsm font-bold font-mono', t.text)}>{row.task}</code>
      </div>
      <ul className="flex flex-col gap-1">
        {row.meaning.map((line) => (
          <li
            key={line}
            className="flex items-start gap-1.5 text-xsm leading-snug text-[var(--term-fg)] break-keep"
          >
            <span
              aria-hidden="true"
              className={cn('mt-1.5 inline-block h-1.5 w-1.5 rounded-full shrink-0', t.dot)}
            />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </li>
  );
};

const PointCard = ({ title, text }: { title: string; text: string }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
      'border-teal-200/80 bg-teal-50/60',
      'dark:border-teal-800/70 dark:bg-teal-950/30',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
          'bg-teal-100 text-teal-700 border-teal-200/80',
          'dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
        )}
      >
        <LightbulbIcon className="h-5 w-5" />
      </span>
      <h3 className="text-xsm sm:text-sm font-bold uppercase tracking-wider text-teal-800 dark:text-teal-200">
        {title}
      </h3>
    </header>
    <p className="text-sm sm:text-md leading-relaxed text-teal-900 dark:text-teal-100 font-bold break-keep">
      {text}
    </p>
  </article>
);

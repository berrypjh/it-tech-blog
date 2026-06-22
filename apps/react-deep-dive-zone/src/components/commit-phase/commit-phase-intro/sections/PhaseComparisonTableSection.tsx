import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { CommitPhaseIntroContent, ComparisonRow } from '../content';
import { CheckCircleIcon, ListChecksIcon, XIcon } from '../icons';

type Props = { content: CommitPhaseIntroContent['comparison'] };

export const PhaseComparisonTableSection = ({ content }: Props) => (
  <section
    id="phase-comparison"
    aria-labelledby="heading-phase-comparison"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="phase-comparison"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
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
            <tr className="border-b border-[var(--term-border)]">
              <th
                scope="col"
                className="px-md py-3 font-bold text-[var(--term-fg)] w-[18%] bg-slate-50/80 dark:bg-slate-900/40"
              >
                {content.columns.label}
              </th>
              <th
                scope="col"
                className={cn(
                  'px-md py-3 font-bold text-left border-l border-[var(--term-border)]',
                  'bg-sky-50/80 text-sky-800 dark:bg-sky-950/40 dark:text-sky-100',
                )}
              >
                {content.columns.render}
              </th>
              <th
                scope="col"
                className={cn(
                  'px-md py-3 font-bold text-left border-l border-[var(--term-border)]',
                  'bg-teal-50/80 text-teal-800 dark:bg-teal-950/40 dark:text-teal-100',
                )}
              >
                {content.columns.commit}
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, idx) => (
              <Row key={row.label} row={row} isLast={idx === content.rows.length - 1} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <ul className="md:hidden divide-y divide-[var(--term-border)]">
        {content.rows.map((row) => (
          <MobileRow key={row.label} row={row} />
        ))}
      </ul>
    </article>
  </section>
);

const Row = ({ row, isLast }: { row: ComparisonRow; isLast: boolean }) => (
  <tr
    className={cn(
      !isLast && 'border-b border-dashed border-[var(--term-border)]',
      row.emphasis && 'bg-amber-50/40 dark:bg-amber-950/15',
    )}
  >
    <th
      scope="row"
      className={cn(
        'px-md py-3 align-top font-bold text-[var(--term-fg)] bg-slate-50/40 dark:bg-slate-900/20',
        row.emphasis && 'text-amber-700 dark:text-amber-200',
      )}
    >
      {row.label}
    </th>
    <td
      className={cn(
        'px-md py-3 align-top border-l border-[var(--term-border)]',
        'text-sky-800 dark:text-sky-100 break-keep',
      )}
    >
      <CellValue value={row.render} kind="render" emphasis={row.emphasis} />
    </td>
    <td
      className={cn(
        'px-md py-3 align-top border-l border-[var(--term-border)]',
        'text-teal-800 dark:text-teal-100 break-keep',
      )}
    >
      <CellValue value={row.commit} kind="commit" emphasis={row.emphasis} />
    </td>
  </tr>
);

const MobileRow = ({ row }: { row: ComparisonRow }) => (
  <li
    className={cn(
      'flex flex-col gap-2 p-md',
      row.emphasis && 'bg-amber-50/40 dark:bg-amber-950/15',
    )}
  >
    <span
      className={cn(
        'text-[10px] font-mono uppercase tracking-wider',
        row.emphasis ? 'text-amber-700 dark:text-amber-200 font-bold' : 'text-[var(--term-muted)]',
      )}
    >
      {row.label}
    </span>
    <div
      className={cn(
        'rounded-xl border p-sm',
        'border-sky-200/70 bg-sky-50/40 dark:border-sky-800/60 dark:bg-sky-950/25',
      )}
    >
      <p className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300 mb-1">
        Render
      </p>
      <CellValue value={row.render} kind="render" emphasis={row.emphasis} />
    </div>
    <div
      className={cn(
        'rounded-xl border p-sm',
        'border-teal-200/70 bg-teal-50/40 dark:border-teal-800/60 dark:bg-teal-950/25',
      )}
    >
      <p className="text-[10px] font-mono uppercase tracking-wider text-teal-700 dark:text-teal-300 mb-1">
        Commit
      </p>
      <CellValue value={row.commit} kind="commit" emphasis={row.emphasis} />
    </div>
  </li>
);

type CellValueProps = {
  value: string | string[];
  kind: 'render' | 'commit';
  emphasis?: boolean;
};

const CellValue = ({ value, kind, emphasis }: CellValueProps) => {
  const isRender = kind === 'render';

  if (emphasis) {
    const items = Array.isArray(value) ? value : [value];
    return (
      <div className="flex items-start gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border',
            isRender
              ? 'border-rose-300/80 bg-rose-50 text-rose-700 dark:border-rose-700/70 dark:bg-rose-950/40 dark:text-rose-200'
              : 'border-teal-300/80 bg-teal-50 text-teal-700 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-200',
          )}
        >
          {isRender ? (
            <XIcon className="h-3.5 w-3.5" />
          ) : (
            <CheckCircleIcon className="h-3.5 w-3.5" />
          )}
        </span>
        <span
          className={cn(
            'flex flex-col gap-0.5 font-bold text-xsm sm:text-sm leading-snug break-keep',
            isRender ? 'text-rose-800 dark:text-rose-100' : 'text-teal-800 dark:text-teal-100',
          )}
        >
          {items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </span>
      </div>
    );
  }

  if (Array.isArray(value)) {
    return (
      <ul className="flex flex-col gap-1">
        {value.map((item) => (
          <li
            key={item}
            className={cn(
              'flex items-start gap-1.5 text-xsm sm:text-sm leading-snug break-keep',
              isRender ? 'text-sky-900 dark:text-sky-100' : 'text-teal-900 dark:text-teal-100',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-1 inline-block h-1.5 w-1.5 rounded-full shrink-0',
                isRender ? 'bg-sky-500 dark:bg-sky-400' : 'bg-teal-500 dark:bg-teal-400',
              )}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <span
      className={cn(
        'block text-xsm sm:text-sm leading-snug break-keep',
        isRender ? 'text-sky-900 dark:text-sky-100' : 'text-teal-900 dark:text-teal-100',
      )}
    >
      {value}
    </span>
  );
};

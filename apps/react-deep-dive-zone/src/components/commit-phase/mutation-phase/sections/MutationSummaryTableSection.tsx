import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { commitToneTokens } from '../../_shared/tones';
import type { HeroFlagIcon, MutationPhaseContent, SummaryRow } from '../content';
import { ListChecksIcon, PencilIcon, PlusIcon, TrashIcon } from '../icons';

type Props = { content: MutationPhaseContent['summary'] };

const iconMap: Record<HeroFlagIcon, typeof PencilIcon> = {
  plus: PlusIcon,
  pencil: PencilIcon,
  trash: TrashIcon,
};

export const MutationSummaryTableSection = ({ content }: Props) => (
  <section
    id="summary-table"
    aria-labelledby="heading-summary-table"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="summary-table"
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
            <tr
              className={cn(
                'border-b border-[var(--term-border)]',
                'bg-sky-50/80 dark:bg-sky-950/30',
              )}
            >
              <th
                scope="col"
                className="px-md py-3 font-bold text-sky-800 dark:text-sky-100 w-[24%]"
              >
                {content.columns.flag}
              </th>
              <th
                scope="col"
                className="px-md py-3 font-bold text-sky-800 dark:text-sky-100 border-l border-[var(--term-border)] w-[26%]"
              >
                {content.columns.meaning}
              </th>
              <th
                scope="col"
                className="px-md py-3 font-bold text-sky-800 dark:text-sky-100 border-l border-[var(--term-border)]"
              >
                {content.columns.description}
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, idx) => (
              <Row key={row.flag} row={row} isLast={idx === content.rows.length - 1} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <ul className="md:hidden divide-y divide-[var(--term-border)]">
        {content.rows.map((row) => (
          <MobileRow key={row.flag} row={row} />
        ))}
      </ul>
    </article>
  </section>
);

const Row = ({ row, isLast }: { row: SummaryRow; isLast: boolean }) => {
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
          <code className={cn('text-xsm font-bold font-mono', t.text)}>{row.flag}</code>
        </div>
      </th>
      <td className="px-md py-3 align-top border-l border-[var(--term-border)]">
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-xsm font-bold',
            t.chip,
          )}
        >
          {row.meaning}
        </span>
      </td>
      <td className="px-md py-3 align-top border-l border-[var(--term-border)] text-[var(--term-fg)] break-keep">
        {row.description}
      </td>
    </tr>
  );
};

const MobileRow = ({ row }: { row: SummaryRow }) => {
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
        <code className={cn('text-xsm font-bold font-mono', t.text)}>{row.flag}</code>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-bold ml-auto',
            t.chip,
          )}
        >
          {row.meaning}
        </span>
      </div>
      <p className="text-xsm leading-snug text-[var(--term-fg)] break-keep">{row.description}</p>
    </li>
  );
};

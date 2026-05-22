import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { ComparisonRow, CreateFiberFromTypeAndPropsContent } from '../content';
import { LayersIcon } from '../icons';

type Props = { content: CreateFiberFromTypeAndPropsContent['comparison'] };

const accentTokens = {
  green: {
    text: 'text-emerald-700 dark:text-emerald-300',
    dot: 'bg-emerald-500 dark:bg-emerald-400',
    chip: 'bg-emerald-100 text-emerald-800 border-emerald-300/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-700/70',
  },
  blue: {
    text: 'text-sky-700 dark:text-sky-300',
    dot: 'bg-sky-500 dark:bg-sky-400',
    chip: 'bg-sky-100 text-sky-800 border-sky-300/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-700/70',
  },
  purple: {
    text: 'text-violet-700 dark:text-violet-300',
    dot: 'bg-violet-500 dark:bg-violet-400',
    chip: 'bg-violet-100 text-violet-800 border-violet-300/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-700/70',
  },
} as const;

export const TypeShapeComparisonTable = ({ content }: Props) => (
  <section id="comparison" aria-labelledby="heading-comparison" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="comparison"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'rounded-2xl border bg-[var(--term-bg)] overflow-hidden',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[920px] border-collapse text-left">
          <caption className="sr-only">{content.title} — type 형태별 분기 비교</caption>
          <thead>
            <tr className="bg-[var(--term-surface)]">
              <th scope="col" className={th('w-[16%]')}>
                {content.headers.shape}
              </th>
              <th scope="col" className={th()}>
                {content.headers.jsx}
              </th>
              <th scope="col" className={th()}>
                {content.headers.typeValue}
              </th>
              <th scope="col" className={th()}>
                {content.headers.condition}
              </th>
              <th scope="col" className={th()}>
                {content.headers.fiber}
              </th>
              <th scope="col" className={th()}>
                {content.headers.note}
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, idx) => (
              <Row key={row.id} row={row} divider={idx > 0} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const th = (extra?: string) =>
  cn(
    'px-md py-3 text-[10px] font-bold uppercase tracking-wider',
    'text-[var(--term-muted)]',
    extra,
  );

const Row = ({ row, divider }: { row: ComparisonRow; divider: boolean }) => {
  const a = accentTokens[row.accent];
  return (
    <tr
      className={cn('align-top', divider && 'border-t border-dashed border-[var(--term-border)]')}
    >
      <th scope="row" className="px-md py-3 whitespace-nowrap">
        <span
          className={cn('inline-flex items-center gap-1.5 font-mono text-xsm font-bold', a.text)}
        >
          <span aria-hidden="true" className={cn('inline-block w-1.5 h-1.5 rounded-full', a.dot)} />
          {row.shape}
        </span>
      </th>
      <td className="px-md py-3">
        <code className="font-mono text-xsm font-bold text-[var(--term-fg)] break-all">
          {row.exampleJsx}
        </code>
      </td>
      <td className="px-md py-3">
        <code className="font-mono text-xsm text-[var(--term-fg)] break-all">{row.typeValue}</code>
      </td>
      <td className="px-md py-3">
        <code className="font-mono text-xsm text-[var(--term-fg)] break-all">{row.condition}</code>
      </td>
      <td className="px-md py-3">
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xsm font-bold',
            a.chip,
          )}
        >
          {row.fiber}
        </span>
      </td>
      <td className="px-md py-3 text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {row.note}
      </td>
    </tr>
  );
};

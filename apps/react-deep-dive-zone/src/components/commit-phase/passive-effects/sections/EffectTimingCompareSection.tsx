import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { commitToneTokens } from '../../_shared/tones';
import type { CompareRow, PassiveEffectsContent } from '../content';
import { CompareIcon, LightbulbIcon } from '../icons';

type Props = { content: PassiveEffectsContent['compare'] };

export const EffectTimingCompareSection = ({ content }: Props) => (
  <section
    id="effect-compare"
    aria-labelledby="heading-effect-compare"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="effect-compare"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<CompareIcon className="h-5 w-5" />}
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
                className="px-md py-3 font-bold text-[var(--term-fg)] w-[26%] bg-sky-50/80 dark:bg-sky-950/30"
              >
                {content.headers.hook}
              </th>
              <th
                scope="col"
                className="px-md py-3 font-bold text-[var(--term-fg)] border-l border-[var(--term-border)] bg-slate-50/80 dark:bg-slate-900/40"
              >
                {content.headers.feel}
              </th>
              <th
                scope="col"
                className="px-md py-3 font-bold text-[var(--term-fg)] border-l border-[var(--term-border)] w-[28%] bg-slate-50/80 dark:bg-slate-900/40"
              >
                {content.headers.timing}
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, idx) => (
              <Row key={row.hook} row={row} isLast={idx === content.rows.length - 1} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <ul className="md:hidden divide-y divide-[var(--term-border)]">
        {content.rows.map((row) => (
          <MobileRow key={row.hook} row={row} headers={content.headers} />
        ))}
      </ul>
    </article>

    <aside
      className={cn(
        'flex items-start gap-sm rounded-2xl border p-md',
        'border-sky-200/80 bg-sky-50/60',
        'dark:border-sky-800/70 dark:bg-sky-950/30',
      )}
    >
      <LightbulbIcon
        aria-hidden="true"
        className="mt-0.5 h-5 w-5 shrink-0 text-sky-700 dark:text-sky-300"
      />
      <p className="text-xsm sm:text-sm leading-relaxed text-sky-900 dark:text-sky-100 break-keep">
        {content.note}
      </p>
    </aside>
  </section>
);

const Row = ({ row, isLast }: { row: CompareRow; isLast: boolean }) => {
  const t = commitToneTokens[row.timing.tone];
  return (
    <tr
      className={cn(
        !isLast && 'border-b border-dashed border-[var(--term-border)]',
        'transition-colors hover:bg-[var(--term-surface)]',
      )}
    >
      <th scope="row" className="px-md py-3 align-top">
        <code className={cn('text-xsm sm:text-sm font-bold font-mono break-all', t.text)}>
          {row.hook}
        </code>
      </th>
      <td className="px-md py-3 align-top border-l border-[var(--term-border)] text-[var(--term-fg)] break-keep">
        <ul className="flex flex-col gap-0.5">
          {row.feel.map((line) => (
            <li key={line} className="text-xsm sm:text-sm leading-snug">
              {line}
            </li>
          ))}
        </ul>
      </td>
      <td className="px-md py-3 align-top border-l border-[var(--term-border)]">
        <div className="flex flex-col gap-1">
          <code className={cn('text-xsm font-bold font-mono break-all', t.textStrong)}>
            {row.timing.phase}
          </code>
          <span
            className={cn(
              'inline-flex items-center self-start rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
              t.chip,
            )}
          >
            {row.timing.sync}
          </span>
        </div>
      </td>
    </tr>
  );
};

const MobileRow = ({
  row,
  headers,
}: {
  row: CompareRow;
  headers: PassiveEffectsContent['compare']['headers'];
}) => {
  const t = commitToneTokens[row.timing.tone];
  return (
    <li className="flex flex-col gap-2 p-md">
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {headers.hook}
        </span>
        <code className={cn('text-xsm font-bold font-mono break-all ml-auto', t.text)}>
          {row.hook}
        </code>
      </div>
      <div className="rounded-xl border border-[var(--term-border)] bg-slate-50/40 p-sm dark:bg-slate-900/30">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] mb-1 block">
          {headers.feel}
        </span>
        <ul className="flex flex-col gap-0.5">
          {row.feel.map((line) => (
            <li key={line} className="text-xsm leading-snug text-[var(--term-fg)]">
              {line}
            </li>
          ))}
        </ul>
      </div>
      <div className={cn('rounded-xl border p-sm', t.border, t.bgSoft)}>
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] mb-1 block">
          {headers.timing}
        </span>
        <div className="flex items-center gap-2 flex-wrap">
          <code className={cn('text-xsm font-bold font-mono break-all', t.textStrong)}>
            {row.timing.phase}
          </code>
          <span
            className={cn(
              'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
              t.chip,
            )}
          >
            {row.timing.sync}
          </span>
        </div>
      </div>
    </li>
  );
};

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { React19HooksContent, Tone } from '../content';
import { NetworkIcon } from '../icons';

type Props = { content: React19HooksContent['compareTable'] };

const toneText: Record<Tone, string> = {
  sky: 'text-sky-700 dark:text-sky-200',
  cyan: 'text-cyan-700 dark:text-cyan-200',
  teal: 'text-teal-700 dark:text-teal-200',
  emerald: 'text-emerald-700 dark:text-emerald-200',
  violet: 'text-violet-700 dark:text-violet-200',
  amber: 'text-amber-800 dark:text-amber-200',
  orange: 'text-orange-700 dark:text-orange-200',
  rose: 'text-rose-700 dark:text-rose-200',
  indigo: 'text-indigo-700 dark:text-indigo-200',
};

const toneDot: Record<Tone, string> = {
  sky: 'bg-sky-500 dark:bg-sky-400',
  cyan: 'bg-cyan-500 dark:bg-cyan-400',
  teal: 'bg-teal-500 dark:bg-teal-400',
  emerald: 'bg-emerald-500 dark:bg-emerald-400',
  violet: 'bg-violet-500 dark:bg-violet-400',
  amber: 'bg-amber-500 dark:bg-amber-400',
  orange: 'bg-orange-500 dark:bg-orange-400',
  rose: 'bg-rose-500 dark:bg-rose-400',
  indigo: 'bg-indigo-500 dark:bg-indigo-400',
};

const toneRowBg: Record<Tone, string> = {
  sky: 'bg-sky-50/40 dark:bg-sky-950/15',
  cyan: 'bg-cyan-50/40 dark:bg-cyan-950/15',
  teal: 'bg-teal-50/40 dark:bg-teal-950/15',
  emerald: 'bg-emerald-50/40 dark:bg-emerald-950/15',
  violet: 'bg-violet-50/40 dark:bg-violet-950/15',
  amber: 'bg-amber-50/40 dark:bg-amber-950/15',
  orange: 'bg-orange-50/40 dark:bg-orange-950/15',
  rose: 'bg-rose-50/40 dark:bg-rose-950/15',
  indigo: 'bg-indigo-50/40 dark:bg-indigo-950/15',
};

export const ExtensionComparisonTable = ({ content }: Props) => (
  <section
    aria-labelledby="heading-compare"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="compare"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<NetworkIcon className="h-5 w-5" />}
    />

    {/* Desktop table */}
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th
              scope="col"
              className="text-left p-md text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)] border-b-2 border-[var(--term-border)] bg-[var(--term-border)]/15"
            >
              {content.headers.api}
            </th>
            <th
              scope="col"
              className="text-left p-md text-xsm font-bold border-b-2 border-l border-[var(--term-border)] bg-blue-100/40 text-blue-800 dark:bg-blue-950/40 dark:text-blue-100 break-keep"
            >
              {content.headers.role}
            </th>
            <th
              scope="col"
              className="text-left p-md text-xsm font-bold border-b-2 border-l border-[var(--term-border)] bg-violet-100/40 text-violet-800 dark:bg-violet-950/40 dark:text-violet-100 break-keep"
            >
              {content.headers.concept}
            </th>
            <th
              scope="col"
              className="text-left p-md text-xsm font-bold border-b-2 border-l border-[var(--term-border)] bg-teal-100/40 text-teal-800 dark:bg-teal-950/40 dark:text-teal-100 break-keep"
            >
              {content.headers.flow}
            </th>
            <th
              scope="col"
              className="text-left p-md text-xsm font-bold border-b-2 border-l border-[var(--term-border)] bg-orange-100/40 text-orange-800 dark:bg-orange-950/40 dark:text-orange-100 break-keep"
            >
              {content.headers.storage}
            </th>
          </tr>
        </thead>
        <tbody>
          {content.rows.map((row) => (
            <tr key={row.api} className={toneRowBg[row.tone]}>
              <th
                scope="row"
                className="text-left align-top p-md border-b border-[var(--term-border)] break-keep"
              >
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cn('inline-block h-2 w-2 rounded-full', toneDot[row.tone])}
                  />
                  <code
                    className={cn('font-mono text-xsm font-bold break-all', toneText[row.tone])}
                  >
                    {row.api}
                  </code>
                </div>
              </th>
              <td className="p-md border-b border-l border-[var(--term-border)] text-[11px] sm:text-xsm text-[var(--term-fg)] break-keep align-top">
                {row.role}
              </td>
              <td className="p-md border-b border-l border-[var(--term-border)] text-[11px] sm:text-xsm text-[var(--term-fg)] break-keep align-top">
                <code className="font-mono break-all">{row.concept}</code>
              </td>
              <td className="p-md border-b border-l border-[var(--term-border)] text-[11px] sm:text-xsm text-[var(--term-fg)] break-keep align-top">
                {row.flow}
              </td>
              <td className="p-md border-b border-l border-[var(--term-border)] text-[11px] sm:text-xsm text-[var(--term-fg)] break-keep align-top">
                {row.storage}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile cards */}
    <ul className="md:hidden flex flex-col gap-md">
      {content.rows.map((row) => (
        <li key={row.api}>
          <article
            className={cn(
              'flex flex-col gap-2 rounded-2xl border-2 bg-[var(--term-bg)] p-md',
              'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={cn('inline-block h-2 w-2 rounded-full', toneDot[row.tone])}
              />
              <code className={cn('font-mono text-sm font-bold break-all', toneText[row.tone])}>
                {row.api}
              </code>
            </header>
            <dl className="grid grid-cols-1 gap-1.5">
              <RowField label={content.headers.role} value={row.role} />
              <RowField
                label={content.headers.concept}
                value={<code className="font-mono break-all">{row.concept}</code>}
              />
              <RowField label={content.headers.flow} value={row.flow} />
              <RowField label={content.headers.storage} value={row.storage} />
            </dl>
          </article>
        </li>
      ))}
    </ul>
  </section>
);

const RowField = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="rounded-lg border border-[var(--term-border)] bg-[var(--term-border)]/15 p-2">
    <dt className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
      {label}
    </dt>
    <dd className="mt-0.5 text-[11px] text-[var(--term-fg)] break-keep">{value}</dd>
  </div>
);

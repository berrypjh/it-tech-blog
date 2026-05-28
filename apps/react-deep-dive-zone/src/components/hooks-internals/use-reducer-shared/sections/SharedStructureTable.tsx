import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { Tone, UseReducerSharedContent } from '../content';
import { LightbulbIcon, NetworkIcon } from '../icons';

type Props = { content: UseReducerSharedContent['sharedTable'] };

const dotTone: Record<Tone, string> = {
  sky: 'bg-sky-500 dark:bg-sky-400',
  cyan: 'bg-cyan-500 dark:bg-cyan-400',
  teal: 'bg-teal-500 dark:bg-teal-400',
  emerald: 'bg-emerald-500 dark:bg-emerald-400',
  violet: 'bg-violet-500 dark:bg-violet-400',
  amber: 'bg-amber-500 dark:bg-amber-400',
  indigo: 'bg-indigo-500 dark:bg-indigo-400',
};

const cellAccent: Record<Tone, string> = {
  sky: 'text-sky-700 dark:text-sky-200',
  cyan: 'text-cyan-700 dark:text-cyan-200',
  teal: 'text-teal-700 dark:text-teal-200',
  emerald: 'text-emerald-700 dark:text-emerald-200',
  violet: 'text-violet-700 dark:text-violet-200',
  amber: 'text-amber-700 dark:text-amber-200',
  indigo: 'text-indigo-700 dark:text-indigo-200',
};

export const SharedStructureTable = ({ content }: Props) => (
  <section
    aria-labelledby="heading-shared-table"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="shared-table"
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
              {content.headers.category}
            </th>
            <th
              scope="col"
              className="text-left p-md text-xsm font-bold border-b-2 border-l border-[var(--term-border)] bg-sky-100/50 text-sky-800 dark:bg-sky-950/40 dark:text-sky-100"
            >
              <code className="font-mono">{content.headers.useState}</code>
            </th>
            <th
              scope="col"
              className="text-left p-md text-xsm font-bold border-b-2 border-l border-[var(--term-border)] bg-teal-100/50 text-teal-800 dark:bg-teal-950/40 dark:text-teal-100"
            >
              <code className="font-mono">{content.headers.useReducer}</code>
            </th>
          </tr>
        </thead>
        <tbody>
          {content.rows.map((row, i) => (
            <tr key={row.category} className={i % 2 === 1 ? 'bg-[var(--term-border)]/5' : ''}>
              <th
                scope="row"
                className="text-left align-top p-md border-b border-[var(--term-border)] break-keep"
              >
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cn('inline-block h-2 w-2 rounded-full', dotTone[row.tone])}
                  />
                  <span className={cn('text-xsm font-bold break-keep', cellAccent[row.tone])}>
                    {row.category}
                  </span>
                </div>
              </th>
              <td className="p-md border-b border-l border-[var(--term-border)] text-[11px] sm:text-xsm text-[var(--term-fg)] break-keep align-top">
                {row.useStateValue}
              </td>
              <td className="p-md border-b border-l border-[var(--term-border)] text-[11px] sm:text-xsm text-[var(--term-fg)] break-keep align-top">
                {row.useReducerValue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile cards */}
    <ul className="md:hidden flex flex-col gap-md">
      {content.rows.map((row) => (
        <li key={row.category}>
          <article
            className={cn(
              'flex flex-col gap-2 rounded-2xl border-2 bg-[var(--term-bg)] p-md',
              'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={cn('inline-block h-2 w-2 rounded-full', dotTone[row.tone])}
              />
              <h3 className={cn('text-xsm font-bold break-keep', cellAccent[row.tone])}>
                {row.category}
              </h3>
            </header>
            <dl className="grid grid-cols-1 gap-2">
              <div className="rounded-lg border border-sky-200/70 bg-sky-50/40 dark:border-sky-800/60 dark:bg-sky-950/20 p-2.5">
                <dt className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300">
                  useState
                </dt>
                <dd className="mt-0.5 text-[11px] text-[var(--term-fg)] break-keep">
                  {row.useStateValue}
                </dd>
              </div>
              <div className="rounded-lg border border-teal-200/70 bg-teal-50/40 dark:border-teal-800/60 dark:bg-teal-950/20 p-2.5">
                <dt className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
                  useReducer
                </dt>
                <dd className="mt-0.5 text-[11px] text-[var(--term-fg)] break-keep">
                  {row.useReducerValue}
                </dd>
              </div>
            </dl>
          </article>
        </li>
      ))}
    </ul>

    {/* Highlight box */}
    <aside
      className={cn(
        'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
        'border-violet-300/70 bg-violet-50/60 dark:border-violet-800/60 dark:bg-violet-950/30',
      )}
    >
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet-200/80 bg-violet-100 text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/60 dark:text-violet-200"
      >
        <LightbulbIcon className="h-4 w-4" />
      </span>
      <p className="text-xsm sm:text-sm leading-relaxed text-violet-900 dark:text-violet-100 break-keep">
        {content.highlight}
      </p>
    </aside>
  </section>
);

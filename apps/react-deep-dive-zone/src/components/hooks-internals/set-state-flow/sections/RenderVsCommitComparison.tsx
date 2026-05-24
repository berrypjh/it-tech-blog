import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { SetStateFlowContent, Tone } from '../content';
import { LayersIcon, SaveIcon, TimerIcon, ZapIcon } from '../icons';

type Props = { content: SetStateFlowContent['renderVsCommit'] };

const headerTone: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-100/70 text-sky-800 dark:border-sky-700/70 dark:bg-sky-950/60 dark:text-sky-100',
  cyan: 'border-cyan-300/80 bg-cyan-100/70 text-cyan-800 dark:border-cyan-700/70 dark:bg-cyan-950/60 dark:text-cyan-100',
  teal: 'border-teal-300/80 bg-teal-100/70 text-teal-800 dark:border-teal-700/70 dark:bg-teal-950/60 dark:text-teal-100',
  emerald:
    'border-emerald-300/80 bg-emerald-100/70 text-emerald-800 dark:border-emerald-700/70 dark:bg-emerald-950/60 dark:text-emerald-100',
  violet:
    'border-violet-300/80 bg-violet-100/70 text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/60 dark:text-violet-100',
  amber:
    'border-amber-300/80 bg-amber-100/70 text-amber-800 dark:border-amber-700/70 dark:bg-amber-950/60 dark:text-amber-100',
  rose: 'border-rose-300/80 bg-rose-100/70 text-rose-800 dark:border-rose-700/70 dark:bg-rose-950/60 dark:text-rose-100',
  indigo:
    'border-indigo-300/80 bg-indigo-100/70 text-indigo-800 dark:border-indigo-700/70 dark:bg-indigo-950/60 dark:text-indigo-100',
};

const keywordChip: Record<Tone, string> = {
  sky: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
  cyan: 'bg-cyan-500 text-white dark:bg-cyan-400 dark:text-slate-900',
  teal: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
  emerald: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900',
  violet: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
  amber: 'bg-amber-500 text-white dark:bg-amber-400 dark:text-slate-900',
  rose: 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900',
  indigo: 'bg-indigo-500 text-white dark:bg-indigo-400 dark:text-slate-900',
};

const columnIcons = [TimerIcon, LayersIcon, SaveIcon];

export const RenderVsCommitComparison = ({ content }: Props) => (
  <section
    aria-labelledby="heading-render-vs-commit"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="render-vs-commit"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ZapIcon className="h-5 w-5" />}
    />

    {/* Desktop table */}
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th
              scope="col"
              className="text-left p-md text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)] border-b-2 border-[var(--term-border)]"
            >
              구분
            </th>
            {content.columns.map((col, i) => {
              const Icon = columnIcons[i] ?? TimerIcon;
              return (
                <th
                  key={col.index}
                  scope="col"
                  className={cn(
                    'text-left p-md border-b-2 border-l border-[var(--term-border)]',
                    headerTone[col.tone],
                  )}
                >
                  <div className="flex items-center gap-2">
                    <Icon aria-hidden="true" className="h-4 w-4 shrink-0" />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-mono opacity-80">Step {col.index}</span>
                      <span className="text-xsm sm:text-sm font-bold break-keep">{col.title}</span>
                    </div>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {/* What happens */}
          <tr>
            <th
              scope="row"
              className="text-left align-top p-md text-xsm font-bold text-[var(--term-fg)] border-b border-[var(--term-border)] bg-[var(--term-border)]/15 break-keep"
            >
              {content.rowLabels.what}
            </th>
            {content.columns.map((col) => (
              <td
                key={col.index}
                className="p-md border-b border-l border-[var(--term-border)] align-top"
              >
                <ul className="flex flex-col gap-1.5">
                  {col.rows.what.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-2 text-[11px] sm:text-xsm text-[var(--term-fg)]"
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          'mt-1.5 inline-block h-1.5 w-1.5 rounded-full',
                          keywordChip[col.tone],
                        )}
                      />
                      <span className="break-keep">{line}</span>
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
          {/* DOM */}
          <tr>
            <th
              scope="row"
              className="text-left align-top p-md text-xsm font-bold text-[var(--term-fg)] border-b border-[var(--term-border)] bg-[var(--term-border)]/15 break-keep"
            >
              {content.rowLabels.dom}
            </th>
            {content.columns.map((col) => {
              const isCommit = col.index === 3;
              return (
                <td
                  key={col.index}
                  className={cn(
                    'p-md border-b border-l border-[var(--term-border)] align-top text-xsm break-keep',
                    isCommit
                      ? 'font-bold text-emerald-700 dark:text-emerald-300'
                      : 'text-[var(--term-muted)]',
                  )}
                >
                  {col.rows.dom}
                </td>
              );
            })}
          </tr>
          {/* User screen */}
          <tr>
            <th
              scope="row"
              className="text-left align-top p-md text-xsm font-bold text-[var(--term-fg)] border-b border-[var(--term-border)] bg-[var(--term-border)]/15 break-keep"
            >
              {content.rowLabels.user}
            </th>
            {content.columns.map((col) => {
              const isCommit = col.index === 3;
              return (
                <td
                  key={col.index}
                  className={cn(
                    'p-md border-b border-l border-[var(--term-border)] align-top text-xsm break-keep',
                    isCommit
                      ? 'font-bold text-emerald-700 dark:text-emerald-300'
                      : 'text-[var(--term-muted)]',
                  )}
                >
                  {col.rows.user}
                </td>
              );
            })}
          </tr>
          {/* Keyword */}
          <tr>
            <th
              scope="row"
              className="text-left align-top p-md text-xsm font-bold text-[var(--term-fg)] bg-[var(--term-border)]/15 break-keep"
            >
              {content.rowLabels.keyword}
            </th>
            {content.columns.map((col) => (
              <td key={col.index} className="p-md border-l border-[var(--term-border)] align-top">
                <span
                  className={cn(
                    'inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider',
                    keywordChip[col.tone],
                  )}
                >
                  {col.keyword}
                </span>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>

    {/* Mobile card layout */}
    <ol className="md:hidden flex flex-col gap-md">
      {content.columns.map((col, i) => {
        const Icon = columnIcons[i] ?? TimerIcon;
        return (
          <li key={col.index}>
            <article
              className={cn(
                'flex flex-col gap-sm rounded-2xl border-2 p-md',
                'shadow-[0_2px_0_var(--term-border)]',
                headerTone[col.tone],
              )}
            >
              <header className="flex items-center gap-2">
                <Icon aria-hidden="true" className="h-5 w-5 shrink-0" />
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <span className="text-[10px] font-mono opacity-80">Step {col.index}</span>
                  <h3 className="text-xsm font-bold break-keep">{col.title}</h3>
                </div>
                <span
                  className={cn(
                    'inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider',
                    keywordChip[col.tone],
                  )}
                >
                  {col.keyword}
                </span>
              </header>

              <dl className="flex flex-col gap-1.5 rounded-lg border border-[var(--term-border)] bg-white/60 dark:bg-slate-950/30 p-2.5">
                <div>
                  <dt className="text-[10px] font-mono font-bold text-[var(--term-muted)] uppercase tracking-wider">
                    {content.rowLabels.what}
                  </dt>
                  <dd className="mt-0.5 text-[11px] text-[var(--term-fg)] break-keep">
                    {col.rows.what.join(' · ')}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-mono font-bold text-[var(--term-muted)] uppercase tracking-wider">
                    {content.rowLabels.dom}
                  </dt>
                  <dd
                    className={cn(
                      'mt-0.5 text-[11px] break-keep',
                      col.index === 3
                        ? 'font-bold text-emerald-700 dark:text-emerald-300'
                        : 'text-[var(--term-fg)]',
                    )}
                  >
                    {col.rows.dom}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-mono font-bold text-[var(--term-muted)] uppercase tracking-wider">
                    {content.rowLabels.user}
                  </dt>
                  <dd
                    className={cn(
                      'mt-0.5 text-[11px] break-keep',
                      col.index === 3
                        ? 'font-bold text-emerald-700 dark:text-emerald-300'
                        : 'text-[var(--term-fg)]',
                    )}
                  >
                    {col.rows.user}
                  </dd>
                </div>
              </dl>
            </article>
          </li>
        );
      })}
    </ol>
  </section>
);

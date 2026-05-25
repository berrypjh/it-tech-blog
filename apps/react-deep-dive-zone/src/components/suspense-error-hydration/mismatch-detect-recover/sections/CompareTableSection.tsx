import { cn } from '@it-tech-blog/utils';

import type { MismatchDetectRecoverContent } from '../content';

import { SectionHeader } from './_SectionHeader';

type Props = { content: MismatchDetectRecoverContent['compare'] };

export const CompareTableSection = ({ content }: Props) => (
  <section aria-labelledby="compare-heading" className="flex flex-col gap-md">
    <SectionHeader id="compare-heading" number={content.number} title={content.title} />

    {/* Desktop: table */}
    <div
      className={cn(
        'hidden md:block overflow-hidden rounded-2xl border-2',
        'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <table className="w-full border-collapse">
        <caption className="sr-only">{content.title}</caption>
        <thead>
          <tr>
            {Object.values(content.headers).map((h) => (
              <th
                key={h}
                scope="col"
                className={cn(
                  'border-b-2 border-slate-200 dark:border-slate-700',
                  'bg-blue-50/60 dark:bg-blue-950/30',
                  'px-3 py-3 text-left text-[11.5px] font-bold text-blue-700 dark:text-blue-200',
                )}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.rows.map((row, i) => (
            <tr
              key={row.name}
              className={cn(
                i % 2 === 0
                  ? 'bg-white dark:bg-[var(--term-bg)]'
                  : 'bg-slate-50/40 dark:bg-slate-900/30',
                'transition-colors motion-safe:hover:bg-blue-50/30 dark:motion-safe:hover:bg-blue-950/15',
              )}
            >
              <td className="border-t border-slate-200 dark:border-slate-700 px-3 py-3 align-top">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-violet-700 dark:text-violet-200 font-mono">
                    {row.name}
                  </span>
                  <span className="text-[11px] text-[var(--term-muted)] break-keep">{row.sub}</span>
                </div>
              </td>
              <td className="border-t border-slate-200 dark:border-slate-700 px-3 py-3 text-xsm text-[var(--term-fg)] break-keep align-top">
                {row.description}
              </td>
              <td className="border-t border-slate-200 dark:border-slate-700 px-3 py-3 align-top">
                <pre className="overflow-x-auto rounded-lg border border-blue-200 bg-blue-50/40 px-2 py-1.5 text-[11px] font-mono text-blue-900 dark:border-blue-800/60 dark:bg-blue-950/30 dark:text-blue-100">
                  <code>{row.server}</code>
                </pre>
              </td>
              <td className="border-t border-slate-200 dark:border-slate-700 px-3 py-3 align-top">
                <pre className="overflow-x-auto rounded-lg border border-violet-200 bg-violet-50/40 px-2 py-1.5 text-[11px] font-mono text-violet-900 dark:border-violet-800/60 dark:bg-violet-950/30 dark:text-violet-100">
                  <code>{row.client}</code>
                </pre>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile: card */}
    <ul className="md:hidden flex flex-col gap-md">
      {content.rows.map((row) => (
        <li key={row.name}>
          <article
            className={cn(
              'rounded-2xl border-2 border-slate-200 bg-white p-md',
              'dark:border-slate-700 dark:bg-[var(--term-bg)]',
            )}
          >
            <header className="mb-2">
              <span className="text-md font-bold text-violet-700 dark:text-violet-200 font-mono">
                {row.name}
              </span>
              <span className="block text-[11px] text-[var(--term-muted)] break-keep">
                {row.sub}
              </span>
            </header>
            <p className="text-xsm text-[var(--term-fg)] break-keep mb-2">{row.description}</p>
            <div className="grid grid-cols-1 gap-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  {content.headers.server}
                </span>
                <pre className="mt-1 overflow-x-auto rounded-lg border border-blue-200 bg-blue-50/40 px-2 py-1.5 text-[11px] font-mono text-blue-900 dark:border-blue-800/60 dark:bg-blue-950/30 dark:text-blue-100">
                  <code>{row.server}</code>
                </pre>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
                  {content.headers.client}
                </span>
                <pre className="mt-1 overflow-x-auto rounded-lg border border-violet-200 bg-violet-50/40 px-2 py-1.5 text-[11px] font-mono text-violet-900 dark:border-violet-800/60 dark:bg-violet-950/30 dark:text-violet-100">
                  <code>{row.client}</code>
                </pre>
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  </section>
);

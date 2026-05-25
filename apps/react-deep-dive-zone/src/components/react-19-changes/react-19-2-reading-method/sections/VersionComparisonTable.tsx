import { cn } from '@it-tech-blog/utils';

import type { After192Content } from '../content';
import { tone } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: After192Content['versionTable'] };

export const VersionComparisonTable = ({ content }: Props) => (
  <section aria-labelledby="version-table-heading" className="flex flex-col">
    <SectionHeader
      id="version-table-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <div
      className={cn(
        'overflow-hidden rounded-2xl border-2',
        'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {/* Desktop / tablet table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full min-w-[820px] border-collapse text-left">
          <thead>
            <tr className="bg-blue-50/70 dark:bg-blue-950/40 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-200">
              <th scope="col" className="px-md py-3 break-keep">
                {content.columns.version}
              </th>
              <th scope="col" className="px-md py-3 break-keep">
                {content.columns.releasedAt}
              </th>
              <th scope="col" className="px-md py-3 break-keep">
                {content.columns.keyword}
              </th>
              <th scope="col" className="px-md py-3 break-keep">
                {content.columns.body}
              </th>
              <th scope="col" className="px-md py-3 break-keep">
                {content.columns.watch}
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, i) => {
              const t = tone[row.versionTone];
              return (
                <tr
                  key={row.version}
                  className={cn(
                    'border-t border-slate-200 dark:border-slate-700',
                    i % 2 === 1 && 'bg-slate-50/40 dark:bg-slate-900/30',
                  )}
                >
                  <th scope="row" className="px-md py-3 align-top">
                    <span
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
                        t.solidBg,
                        'text-white font-mono text-xsm font-bold',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className="block h-1.5 w-1.5 rounded-full bg-white/90"
                      />
                      {row.version}
                    </span>
                  </th>
                  <td className="px-md py-3 align-top">
                    <span className="font-mono text-xsm text-[var(--term-fg)]">
                      {row.releasedAt}
                    </span>
                  </td>
                  <td className="px-md py-3 align-top">
                    <span className={cn('text-xsm font-bold break-keep', t.text)}>
                      {row.keyword}
                    </span>
                  </td>
                  <td className="px-md py-3 align-top text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                    {row.body}
                  </td>
                  <td className="px-md py-3 align-top text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                    {row.watch}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile card rows */}
      <ul className="md:hidden flex flex-col">
        {content.rows.map((row, i) => {
          const t = tone[row.versionTone];
          return (
            <li
              key={row.version}
              className={cn(
                'flex flex-col gap-sm p-md',
                i > 0 && 'border-t border-slate-200 dark:border-slate-700',
              )}
            >
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
                    t.solidBg,
                    'text-white font-mono text-xsm font-bold',
                  )}
                >
                  {row.version}
                </span>
                <span className="font-mono text-xsm text-[var(--term-muted)]">
                  {row.releasedAt}
                </span>
              </div>
              <h3 className={cn('text-sm font-bold break-keep', t.text)}>{row.keyword}</h3>
              <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                {row.body}
              </p>
              <p className="text-xxsm leading-relaxed text-[var(--term-muted)] break-keep">
                <span className="font-mono uppercase tracking-wider">{content.columns.watch}:</span>{' '}
                {row.watch}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

import { cn } from '@it-tech-blog/utils';

import type { ActionsUpdateFlowContent } from '../content';
import { stateTone } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: ActionsUpdateFlowContent['comparison'] };

export const ActionsApiComparisonSection = ({ content }: Props) => (
  <section aria-labelledby="api-comparison-heading" className="flex flex-col">
    <SectionHeader
      id="api-comparison-heading"
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
      {/* Desktop / tablet: real table with horizontal scroll fallback */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full min-w-[860px] border-collapse text-left">
          <thead>
            <tr className="bg-blue-50/70 dark:bg-blue-950/40 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-200">
              <th scope="col" className="px-md py-3 break-keep">
                {content.columns.api}
              </th>
              <th scope="col" className="px-md py-3 break-keep">
                {content.columns.role}
              </th>
              <th scope="col" className="px-md py-3 break-keep">
                {content.columns.problem}
              </th>
              <th scope="col" className="px-md py-3 break-keep">
                {content.columns.where}
              </th>
              <th scope="col" className="px-md py-3 break-keep">
                {content.columns.returnValue}
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, i) => {
              const tone = stateTone[row.state];
              return (
                <tr
                  key={row.hookName}
                  className={cn(
                    'border-t border-slate-200 dark:border-slate-700',
                    'transition-colors hover:bg-blue-50/40 dark:hover:bg-blue-950/20',
                    i % 2 === 1 && 'bg-slate-50/40 dark:bg-slate-900/30',
                  )}
                >
                  <th scope="row" className="px-md py-4 align-top">
                    <div className="flex flex-col items-start gap-1">
                      <span
                        className={cn(
                          'inline-flex items-center gap-1 rounded-full border px-2 py-0.5',
                          'font-mono text-[10px] font-bold',
                          tone.chip,
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={cn('block h-1 w-1 rounded-full', tone.dot)}
                        />
                        Hook
                      </span>
                      <span className={cn('font-mono text-sm font-bold break-all', tone.text)}>
                        {row.hookName}()
                      </span>
                    </div>
                  </th>
                  <td className="px-md py-4 align-top text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                    {row.role}
                  </td>
                  <td className="px-md py-4 align-top text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                    {row.problem}
                  </td>
                  <td className="px-md py-4 align-top text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                    {row.where}
                  </td>
                  <td className="px-md py-4 align-top">
                    <code className="rounded-md bg-slate-900 px-2 py-1 font-mono text-[11px] text-emerald-300 break-all">
                      {row.returnValue}
                    </code>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile: card-style rows */}
      <ul className="md:hidden flex flex-col">
        {content.rows.map((row, i) => {
          const tone = stateTone[row.state];
          return (
            <li
              key={row.hookName}
              className={cn(
                'flex flex-col gap-sm p-md',
                i > 0 && 'border-t border-slate-200 dark:border-slate-700',
              )}
            >
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] font-bold',
                    tone.chip,
                  )}
                >
                  <span className={cn('block h-1 w-1 rounded-full', tone.dot)} />
                  Hook
                </span>
                <span className={cn('font-mono text-sm font-bold break-all', tone.text)}>
                  {row.hookName}()
                </span>
              </div>

              <Cell label={content.columns.role} value={row.role} />
              <Cell label={content.columns.problem} value={row.problem} muted />
              <Cell label={content.columns.where} value={row.where} muted />
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)] mb-1">
                  {content.columns.returnValue}
                </p>
                <code className="inline-block rounded-md bg-slate-900 px-2 py-1 font-mono text-[11px] text-emerald-300 break-all">
                  {row.returnValue}
                </code>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

const Cell = ({ label, value, muted }: { label: string; value: string; muted?: boolean }) => (
  <div>
    <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)] mb-1">
      {label}
    </p>
    <p
      className={cn(
        'text-xsm leading-relaxed break-keep',
        muted ? 'text-[var(--term-muted)]' : 'text-[var(--term-fg)]',
      )}
    >
      {value}
    </p>
  </div>
);

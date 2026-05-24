import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { AdvancedWrapupContent } from '../content';
import { ArrowDownIcon, FilterIcon, ZapIcon } from '../icons';
import { toneAccent } from '../styles';

type Props = { content: AdvancedWrapupContent['priority'] };

export const EventPriorityReconnect = ({ content }: Props) => (
  <section aria-labelledby="heading-priority">
    <NumberedSectionHeader
      id="priority"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FilterIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-md lg:gap-lg items-stretch">
      {/* Table */}
      <div
        className={cn(
          'overflow-hidden rounded-2xl border bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
          'border-[var(--term-border)]',
        )}
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xsm" aria-label={content.title}>
            <thead>
              <tr className="bg-blue-50/70 dark:bg-blue-950/30">
                {content.tableColumns.map((col) => (
                  <th
                    key={col}
                    scope="col"
                    className="px-md py-2.5 text-left font-mono font-bold uppercase tracking-wider text-[10px] text-blue-800 dark:text-blue-200 border-b border-blue-200/80 dark:border-blue-800/50"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.tableRows.map((row, i) => (
                <tr
                  key={i}
                  className={cn(
                    'transition-colors hover:bg-blue-50/30 dark:hover:bg-blue-950/10',
                    i % 2 === 1 && 'bg-[var(--term-surface)]/40',
                  )}
                >
                  {row.cells.map((cell, j) => {
                    const isFirst = j === 0;
                    const isSecond = j === 1;
                    return (
                      <td
                        key={`${i}-${j}`}
                        className={cn(
                          'px-md py-2.5 border-t border-[var(--term-border)] break-keep',
                          isFirst && 'font-mono font-bold text-sky-700 dark:text-sky-300',
                          isSecond &&
                            cn(
                              'font-mono font-bold whitespace-nowrap',
                              toneAccent[row.tone ?? 'teal'],
                            ),
                          !isFirst && !isSecond && 'text-[var(--term-fg)]',
                        )}
                      >
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Priority flow */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
          'border-violet-300/80 bg-gradient-to-br from-violet-50/70 via-white to-blue-50/30',
          'dark:border-violet-700/70 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900"
          >
            <ZapIcon className="h-4 w-4" />
          </span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
            priority flow
          </span>
        </header>

        <ol className="flex flex-col gap-1">
          {content.flowSteps.map((step, i) => {
            const isLast = i === content.flowSteps.length - 1;
            return (
              <li key={step} className="flex flex-col">
                <div
                  className={cn(
                    'flex items-center gap-2 rounded-xl border-2 px-md py-2.5',
                    'border-violet-200/70 bg-white dark:border-violet-700/60 dark:bg-slate-950/40',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500 text-white text-[10px] font-mono font-bold dark:bg-violet-400 dark:text-slate-900"
                  >
                    {i + 1}
                  </span>
                  <code className="font-mono text-[11px] sm:text-xsm font-bold text-violet-700 dark:text-violet-200 break-keep">
                    {step}
                  </code>
                </div>
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="self-center my-0.5 text-violet-400 dark:text-violet-300"
                  >
                    <ArrowDownIcon className="h-3.5 w-3.5" />
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        <p className="mt-auto text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.description}
        </p>
      </article>
    </div>
  </section>
);

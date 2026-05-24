import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { AdvancedWrapupContent, Tone } from '../content';
import { LayersIcon } from '../icons';
import { toneAccent } from '../styles';

type Props = { content: AdvancedWrapupContent['comparison'] };

const pillTone: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-100 text-sky-700 dark:border-sky-700/70 dark:bg-sky-950/60 dark:text-sky-200',
  cyan: 'border-cyan-300/80 bg-cyan-100 text-cyan-700 dark:border-cyan-700/70 dark:bg-cyan-950/60 dark:text-cyan-200',
  teal: 'border-teal-300/80 bg-teal-100 text-teal-700 dark:border-teal-700/70 dark:bg-teal-950/60 dark:text-teal-200',
  emerald:
    'border-emerald-300/80 bg-emerald-100 text-emerald-700 dark:border-emerald-700/70 dark:bg-emerald-950/60 dark:text-emerald-200',
  violet:
    'border-violet-300/80 bg-violet-100 text-violet-700 dark:border-violet-700/70 dark:bg-violet-950/60 dark:text-violet-200',
  blue: 'border-blue-300/80 bg-blue-100 text-blue-700 dark:border-blue-700/70 dark:bg-blue-950/60 dark:text-blue-200',
  amber:
    'border-amber-300/80 bg-amber-100 text-amber-800 dark:border-amber-700/70 dark:bg-amber-950/60 dark:text-amber-200',
  rose: 'border-rose-300/80 bg-rose-100 text-rose-700 dark:border-rose-700/70 dark:bg-rose-950/60 dark:text-rose-200',
  mint: 'border-emerald-300/80 bg-emerald-100 text-emerald-700 dark:border-emerald-700/70 dark:bg-emerald-950/60 dark:text-emerald-200',
};

export const ComprehensiveComparisonTable = ({ content }: Props) => (
  <section aria-labelledby="heading-comparison">
    <NumberedSectionHeader
      id="comparison"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'overflow-hidden rounded-2xl border bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
      )}
    >
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xsm sm:text-sm" aria-label={content.title}>
          <thead>
            <tr className="bg-blue-50/70 dark:bg-blue-950/30">
              {content.columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="px-md py-3 text-left font-mono font-bold uppercase tracking-wider text-[10px] sm:text-xsm text-blue-800 dark:text-blue-200 border-b border-blue-200/80 dark:border-blue-800/50"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, i) => (
              <tr
                key={i}
                className={cn(
                  'transition-colors hover:bg-blue-50/30 dark:hover:bg-blue-950/10',
                  i % 2 === 1 && 'bg-[var(--term-surface)]/40',
                )}
              >
                {row.cells.map((cell, j) => {
                  const isFirst = j === 0;
                  return (
                    <td
                      key={`${i}-${j}`}
                      className={cn(
                        'px-md py-3 border-t border-[var(--term-border)] break-keep align-top',
                      )}
                    >
                      {isFirst && row.tone ? (
                        <span
                          className={cn(
                            'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-bold',
                            pillTone[row.tone],
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className="block h-1.5 w-1.5 rounded-full bg-current opacity-70"
                          />
                          {cell}
                        </span>
                      ) : (
                        <span
                          className={cn(
                            'text-[var(--term-fg)]',
                            j > 0 && row.tone && j === row.cells.length - 1 && toneAccent[row.tone],
                          )}
                        >
                          {cell}
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

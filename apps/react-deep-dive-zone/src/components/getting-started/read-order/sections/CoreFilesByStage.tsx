import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../_shared/SectionHeader';
import type { CoreFileRow, ReadOrderContent } from '../content';
import { EyeIcon, FileIcon, TargetGoalIcon } from '../icons';

type Props = { content: ReadOrderContent['coreFiles'] };

type RowTone = CoreFileRow['tone'];

const toneClasses: Record<
  RowTone,
  { num: string; border: string; titleText: string; rowAccent: string }
> = {
  blue: {
    num: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
    border: 'border-sky-200/80 dark:border-sky-800/60',
    titleText: 'text-sky-800 dark:text-sky-100',
    rowAccent: 'hover:bg-sky-50/60 dark:hover:bg-sky-950/30',
  },
  teal: {
    num: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
    border: 'border-teal-200/80 dark:border-teal-800/60',
    titleText: 'text-teal-800 dark:text-teal-100',
    rowAccent: 'hover:bg-teal-50/60 dark:hover:bg-teal-950/30',
  },
  mint: {
    num: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900',
    border: 'border-emerald-200/80 dark:border-emerald-800/60',
    titleText: 'text-emerald-800 dark:text-emerald-100',
    rowAccent: 'hover:bg-emerald-50/60 dark:hover:bg-emerald-950/30',
  },
  violet: {
    num: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
    border: 'border-violet-200/80 dark:border-violet-800/60',
    titleText: 'text-violet-800 dark:text-violet-100',
    rowAccent: 'hover:bg-violet-50/60 dark:hover:bg-violet-950/30',
  },
  indigo: {
    num: 'bg-indigo-500 text-white dark:bg-indigo-400 dark:text-slate-900',
    border: 'border-indigo-200/80 dark:border-indigo-800/60',
    titleText: 'text-indigo-800 dark:text-indigo-100',
    rowAccent: 'hover:bg-indigo-50/60 dark:hover:bg-indigo-950/30',
  },
};

export const CoreFilesByStage = ({ content }: Props) => {
  return (
    <section id="section-core-files" aria-labelledby="heading-core-files" className="space-y-lg">
      <SectionHeader
        id="core-files"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FileIcon className="h-5 w-5" />}
      />

      {/* column header (data-board 인상) */}
      <div className="hidden md:grid grid-cols-[auto_minmax(0,_0.95fr)_minmax(0,_1.2fr)_minmax(0,_1.5fr)] gap-md px-md py-2 rounded-md bg-[var(--term-surface)] border border-dashed border-[var(--term-border)]">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] w-9">#</span>
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] inline-flex items-center gap-1">
          <FileIcon className="h-3 w-3" />
          {content.columnLabels.file}
        </span>
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] inline-flex items-center gap-1">
          <EyeIcon className="h-3 w-3" />
          {content.columnLabels.read}
        </span>
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] inline-flex items-center gap-1">
          <TargetGoalIcon className="h-3 w-3" />
          {content.columnLabels.goal}
        </span>
      </div>

      <ol className="flex flex-col gap-sm">
        {content.rows.map((row) => {
          const t = toneClasses[row.tone];
          return (
            <li key={row.num}>
              <article
                className={cn(
                  'group rounded-md border bg-[var(--term-bg)] p-md sm:p-lg transition-all',
                  'hover:-translate-y-px hover:shadow-[0_2px_0_var(--term-border)]',
                  t.border,
                  t.rowAccent,
                )}
              >
                <div className="grid grid-cols-1 md:grid-cols-[auto_minmax(0,_0.95fr)_minmax(0,_1.2fr)_minmax(0,_1.5fr)] gap-sm md:gap-md items-start">
                  {/* col 1: number + title (모바일에서는 horizontal, 데스크톱은 number+title in one col) */}
                  <div className="flex items-center gap-2 md:flex-col md:items-start md:gap-1.5 md:w-fit">
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex items-center justify-center w-8 h-8 rounded-md text-xsm font-bold tabular-nums shadow-[0_1px_0_var(--term-border)]',
                        t.num,
                      )}
                    >
                      {row.num}
                    </span>
                    <h3
                      className={cn(
                        'text-xsm sm:text-sm font-bold tracking-tight break-keep leading-tight',
                        t.titleText,
                      )}
                    >
                      {row.title}
                    </h3>
                  </div>

                  {/* col 2: file(s) */}
                  <div className="flex flex-col gap-1.5 min-w-0">
                    <span className="md:hidden text-[10px] uppercase tracking-wider text-[var(--term-dim)] inline-flex items-center gap-1">
                      <FileIcon className="h-3 w-3" />
                      {content.columnLabels.file}
                    </span>
                    <ul className="flex flex-col gap-1">
                      {row.files.map((f) => (
                        <li key={f}>
                          <code className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-[var(--term-border)] bg-[var(--term-surface)] text-[10px] sm:text-[11px] font-mono font-bold text-[var(--term-fg)] break-all">
                            <FileIcon className="h-2.5 w-2.5 text-[var(--term-muted)] shrink-0" />
                            {f}
                          </code>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* col 3: reads (functions) */}
                  <div className="flex flex-col gap-1.5 min-w-0">
                    <span className="md:hidden text-[10px] uppercase tracking-wider text-[var(--term-dim)] inline-flex items-center gap-1">
                      <EyeIcon className="h-3 w-3" />
                      {content.columnLabels.read}
                    </span>
                    <ul className="flex flex-wrap gap-1">
                      {row.reads.map((r) => (
                        <li key={r}>
                          <code className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[10px] font-mono text-[var(--term-accent)]">
                            <span aria-hidden="true" className="text-[8px] opacity-50">
                              fn
                            </span>
                            {r}
                          </code>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* col 4: goal */}
                  <div className="flex flex-col gap-1.5 min-w-0">
                    <span className="md:hidden text-[10px] uppercase tracking-wider text-[var(--term-dim)] inline-flex items-center gap-1">
                      <TargetGoalIcon className="h-3 w-3" />
                      {content.columnLabels.goal}
                    </span>
                    <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
                      {row.goal}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { MappingRow, NotAllFilesContent } from '../content';
import { ArrowRightIcon, ChevronRightIcon, FileIcon, RouteIcon } from '../icons';

type Props = { content: NotAllFilesContent['mapping'] };

type RowTone = MappingRow['tone'];

const toneClasses: Record<
  RowTone,
  {
    rowBg: string;
    rowBorder: string;
    questionPill: string;
    filePill: string;
    fnPill: string;
    arrow: string;
  }
> = {
  blue: {
    rowBg: 'bg-sky-50/50 dark:bg-sky-950/30 hover:bg-sky-50 dark:hover:bg-sky-950/50',
    rowBorder: 'border-sky-200/70 dark:border-sky-800/60',
    questionPill:
      'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900 border-sky-500 dark:border-sky-400',
    filePill:
      'bg-white dark:bg-slate-900 border-sky-300 dark:border-sky-700 text-sky-800 dark:text-sky-100',
    fnPill:
      'bg-sky-100/80 dark:bg-sky-950/60 border-sky-200 dark:border-sky-800/70 text-sky-800 dark:text-sky-200',
    arrow: 'text-sky-500 dark:text-sky-400',
  },
  lavender: {
    rowBg: 'bg-violet-50/50 dark:bg-violet-950/30 hover:bg-violet-50 dark:hover:bg-violet-950/50',
    rowBorder: 'border-violet-200/70 dark:border-violet-800/60',
    questionPill:
      'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900 border-violet-500 dark:border-violet-400',
    filePill:
      'bg-white dark:bg-slate-900 border-violet-300 dark:border-violet-700 text-violet-800 dark:text-violet-100',
    fnPill:
      'bg-violet-100/80 dark:bg-violet-950/60 border-violet-200 dark:border-violet-800/70 text-violet-800 dark:text-violet-200',
    arrow: 'text-violet-500 dark:text-violet-400',
  },
  mint: {
    rowBg: 'bg-teal-50/50 dark:bg-teal-950/30 hover:bg-teal-50 dark:hover:bg-teal-950/50',
    rowBorder: 'border-teal-200/70 dark:border-teal-800/60',
    questionPill:
      'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900 border-teal-500 dark:border-teal-400',
    filePill:
      'bg-white dark:bg-slate-900 border-teal-300 dark:border-teal-700 text-teal-800 dark:text-teal-100',
    fnPill:
      'bg-teal-100/80 dark:bg-teal-950/60 border-teal-200 dark:border-teal-800/70 text-teal-800 dark:text-teal-200',
    arrow: 'text-teal-500 dark:text-teal-400',
  },
  coral: {
    rowBg: 'bg-rose-50/50 dark:bg-rose-950/30 hover:bg-rose-50 dark:hover:bg-rose-950/50',
    rowBorder: 'border-rose-200/70 dark:border-rose-800/60',
    questionPill:
      'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900 border-rose-500 dark:border-rose-400',
    filePill:
      'bg-white dark:bg-slate-900 border-rose-300 dark:border-rose-700 text-rose-800 dark:text-rose-100',
    fnPill:
      'bg-rose-100/80 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800/70 text-rose-800 dark:text-rose-200',
    arrow: 'text-rose-500 dark:text-rose-400',
  },
};

const FilePill = ({ name, cls }: { name: string; cls: string }) => (
  <span
    className={cn(
      'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-[10px] sm:text-[11px] font-mono font-bold shrink-0',
      cls,
    )}
  >
    <FileIcon className="h-3 w-3" />
    <span className="truncate">{name}</span>
  </span>
);

const FnPill = ({ name, cls }: { name: string; cls: string }) => (
  <span
    className={cn(
      'inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border text-[10px] sm:text-[11px] font-mono shrink-0',
      cls,
    )}
  >
    <span aria-hidden="true" className="text-[8px] opacity-60">
      fn
    </span>
    <span className="truncate">{name}</span>
  </span>
);

const Arrow = ({ cls }: { cls: string }) => (
  <span aria-hidden="true" className={cn('shrink-0 inline-flex items-center justify-center', cls)}>
    <ChevronRightIcon className="h-3.5 w-3.5" />
  </span>
);

export const QuestionToSourceMap = ({ content }: Props) => {
  return (
    <section id="section-mapping" aria-labelledby="heading-mapping" className="space-y-lg">
      <SectionHeader
        id="mapping"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<RouteIcon className="h-5 w-5" />}
      />

      {/* legend */}
      <div className="flex flex-wrap items-center gap-2 text-[10px] text-[var(--term-muted)]">
        <span className="inline-flex items-center gap-1">
          <span className="inline-block w-2 h-2 rounded-full bg-sky-500" aria-hidden="true" />
          {content.labels.question}
        </span>
        <ArrowRightIcon className="h-3 w-3" />
        <span className="inline-flex items-center gap-1">
          <FileIcon className="h-3 w-3" />
          {content.labels.file}
        </span>
        <ArrowRightIcon className="h-3 w-3" />
        <span className="inline-flex items-center gap-1">
          <span aria-hidden="true" className="text-[8px] opacity-60">
            fn
          </span>
          {content.labels.fn}
        </span>
      </div>

      <div className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] overflow-hidden shadow-[0_2px_0_var(--term-border)]">
        <ol className="divide-y divide-[var(--term-border)]">
          {content.rows.map((row) => {
            const t = toneClasses[row.tone];
            return (
              <li key={row.id} className={cn('transition-colors', t.rowBg)}>
                <div className="px-md py-md sm:px-lg sm:py-lg">
                  {/* desktop / tablet: 가로 flow */}
                  <div className="hidden md:flex items-center gap-2 flex-nowrap overflow-x-auto">
                    {/* question pill */}
                    <span
                      className={cn(
                        'inline-flex items-center gap-1.5 px-3 py-2 rounded-full border text-[11px] sm:text-xsm font-bold tracking-tight max-w-[36ch] truncate shrink-0',
                        t.questionPill,
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className="inline-block w-1.5 h-1.5 rounded-full bg-white/80"
                      />
                      {row.question}
                    </span>
                    <Arrow cls={t.arrow} />
                    <FilePill name={row.file1} cls={t.filePill} />
                    <Arrow cls={t.arrow} />
                    <FnPill name={row.fn1} cls={t.fnPill} />
                    <Arrow cls={t.arrow} />
                    <FilePill name={row.file2} cls={t.filePill} />
                    <Arrow cls={t.arrow} />
                    <FnPill name={row.fn2} cls={t.fnPill} />
                  </div>

                  {/* mobile: 세로 카드 — 질문 → 단계 list */}
                  <div className="md:hidden flex flex-col gap-sm">
                    <span
                      className={cn(
                        'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xsm font-bold tracking-tight w-fit',
                        t.questionPill,
                      )}
                    >
                      {row.question}
                    </span>
                    <ol className={cn('flex flex-col gap-1.5 pl-3 border-l-2', t.rowBorder)}>
                      <li className="flex items-center gap-1.5">
                        <FilePill name={row.file1} cls={t.filePill} />
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="text-[10px] text-[var(--term-dim)] pl-0.5">↳</span>
                        <FnPill name={row.fn1} cls={t.fnPill} />
                      </li>
                      <li className="flex items-center gap-1.5">
                        <FilePill name={row.file2} cls={t.filePill} />
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="text-[10px] text-[var(--term-dim)] pl-0.5">↳</span>
                        <FnPill name={row.fn2} cls={t.fnPill} />
                      </li>
                    </ol>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

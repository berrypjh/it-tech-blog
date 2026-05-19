import { cn } from '@it-tech-blog/utils';

import { StepSectionHeader } from '../../usage-vs-internals/components/StepSectionHeader';
import type { ReadingPriorityRow, WhyOpenSourceContent } from '../content';
import { ChevronRightIcon, priorityIconByName } from '../icons';

type Props = { content: WhyOpenSourceContent['readingPriorities'] };

type RowTone = ReadingPriorityRow['tone'];

const toneClasses: Record<
  RowTone,
  { number: string; iconBg: string; iconText: string; title: string; hoverBg: string }
> = {
  blue: {
    number: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
    iconBg: 'bg-sky-50 dark:bg-sky-950/50',
    iconText: 'text-sky-600 dark:text-sky-300',
    title: 'text-sky-700 dark:text-sky-200',
    hoverBg: 'group-hover:bg-sky-50/60 dark:group-hover:bg-sky-950/30',
  },
  teal: {
    number: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
    iconBg: 'bg-teal-50 dark:bg-teal-950/50',
    iconText: 'text-teal-600 dark:text-teal-300',
    title: 'text-teal-700 dark:text-teal-200',
    hoverBg: 'group-hover:bg-teal-50/60 dark:group-hover:bg-teal-950/30',
  },
  lavender: {
    number: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
    iconBg: 'bg-violet-50 dark:bg-violet-950/50',
    iconText: 'text-violet-600 dark:text-violet-300',
    title: 'text-violet-700 dark:text-violet-200',
    hoverBg: 'group-hover:bg-violet-50/60 dark:group-hover:bg-violet-950/30',
  },
  coral: {
    number: 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900',
    iconBg: 'bg-rose-50 dark:bg-rose-950/50',
    iconText: 'text-rose-600 dark:text-rose-300',
    title: 'text-rose-700 dark:text-rose-200',
    hoverBg: 'group-hover:bg-rose-50/60 dark:group-hover:bg-rose-950/30',
  },
};

export const ReactGitHubReadingList = ({ content }: Props) => {
  return (
    <section id="section-priorities" aria-labelledby="heading-priorities" className="space-y-lg">
      <StepSectionHeader id="priorities" num={content.sectionNum} title={content.title} />

      <ol className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] divide-y divide-[var(--term-border)] overflow-hidden shadow-[0_2px_0_var(--term-border)]">
        {content.rows.map((row) => {
          const t = toneClasses[row.tone];
          const Icon = priorityIconByName[row.icon];
          return (
            <li key={row.id} className="group transition-colors">
              <div
                className={cn(
                  'grid grid-cols-[auto_auto_1fr_auto] sm:grid-cols-[auto_auto_minmax(120px,_180px)_1fr_auto] items-center gap-sm sm:gap-md',
                  'px-md sm:px-lg py-md sm:py-lg',
                  t.hoverBg,
                )}
              >
                {/* 번호 원형 */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full',
                    'text-xsm font-bold tabular-nums shadow-[0_1px_0_var(--term-border)]',
                    t.number,
                  )}
                >
                  {row.index}
                </span>

                {/* 아이콘 */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-9 h-9 rounded-md',
                    t.iconBg,
                    t.iconText,
                  )}
                >
                  <Icon className="h-[1.125rem] w-[1.125rem]" />
                </span>

                {/* 항목명 */}
                <h3
                  className={cn('text-md sm:text-lg font-bold font-mono tracking-tight', t.title)}
                >
                  {row.title}
                </h3>

                {/* 설명 — sm+에서만 같은 row, 모바일에서는 col-span 처리 */}
                <p className="hidden sm:block text-xsm sm:text-sm text-[var(--term-muted)] leading-relaxed break-keep">
                  {row.description}
                </p>

                {/* chevron */}
                <span
                  aria-hidden="true"
                  className="text-[var(--term-dim)] group-hover:text-[var(--term-fg)] group-hover:translate-x-0.5 transition-all"
                >
                  <ChevronRightIcon className="h-4 w-4" />
                </span>

                {/* 모바일 전용 설명 (밑줄) */}
                <p className="sm:hidden col-span-full -mt-1 text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
                  {row.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

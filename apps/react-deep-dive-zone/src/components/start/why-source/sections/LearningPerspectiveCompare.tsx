import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../components/SectionHeader';
import type { CompareItem, WhySourceContent } from '../content';
import { iconByName, SparkIcon } from '../icons';

type Props = { content: WhySourceContent['compare'] };

type ColumnTone = 'sky' | 'cyan';

const columnTones: Record<ColumnTone, { title: string; chip: string; itemHover: string }> = {
  sky: {
    title: 'text-sky-600 dark:text-sky-300',
    chip: 'border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-200',
    itemHover: 'hover:border-sky-300/80 dark:hover:border-sky-700',
  },
  cyan: {
    title: 'text-cyan-600 dark:text-cyan-300',
    chip: 'border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-800/60 dark:bg-cyan-950/40 dark:text-cyan-200',
    itemHover: 'hover:border-cyan-300/80 dark:hover:border-cyan-700',
  },
};

const CompareList = ({ items, tone }: { items: CompareItem[]; tone: ColumnTone }) => {
  const t = columnTones[tone];
  return (
    <ul className="flex flex-col gap-sm">
      {items.map((item) => {
        const Icon = iconByName[item.icon];
        return (
          <li key={item.title}>
            <article
              className={cn(
                'group flex items-start gap-sm rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] p-md transition-colors',
                t.itemHover,
              )}
            >
              <span
                className={cn(
                  'flex shrink-0 items-center justify-center w-9 h-9 rounded border',
                  t.chip,
                )}
                aria-hidden="true"
              >
                <Icon className="h-[1.125rem] w-[1.125rem]" />
              </span>
              <div className="min-w-0 flex flex-col gap-0.5">
                <h4 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)]">
                  {item.title}
                </h4>
                <p className="text-xxsm sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {item.body}
                </p>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
};

const CompareColumn = ({
  side,
  tone,
  data,
}: {
  side: 'left' | 'right';
  tone: ColumnTone;
  data: WhySourceContent['compare']['left'];
}) => {
  const t = columnTones[tone];
  return (
    <div className="flex flex-col gap-md min-w-0">
      <header className="flex flex-col gap-1">
        <p className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] tabular-nums">
          {side === 'left' ? 'side.A' : 'side.B'}
        </p>
        <h3 className={cn('text-lg sm:text-xl font-bold tracking-tight', t.title)}>{data.title}</h3>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)]">{data.description}</p>
      </header>
      <CompareList items={data.items} tone={tone} />
    </div>
  );
};

export const LearningPerspectiveCompare = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-compare" className="space-y-lg">
      <SectionHeader
        id="compare"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <div
        className={cn(
          'relative rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)]',
          'p-md sm:p-lg lg:p-xl overflow-hidden',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-lg lg:gap-xl items-start">
          <CompareColumn side="left" tone="sky" data={content.left} />

          {/* 중앙 VS 배지 + 세로 구분선 */}
          <div className="relative flex lg:flex-col items-center justify-center lg:py-md">
            <span
              aria-hidden="true"
              className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-[var(--term-border)]"
            />
            <span
              aria-hidden="true"
              className="lg:hidden absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px border-t border-dashed border-[var(--term-border)]"
            />
            <span className="relative inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-[var(--term-border)] bg-[var(--term-bg)] text-xxsm font-bold tracking-wider text-[var(--term-muted)] shadow-[0_2px_0_var(--term-border)]">
              VS
            </span>
          </div>

          <CompareColumn side="right" tone="cyan" data={content.right} />
        </div>

        {/* 하단 강조 배너 */}
        <div className="mt-lg rounded-md border border-slate-800 bg-slate-900 text-slate-100 dark:border-slate-700 dark:bg-slate-950 p-md flex items-center gap-sm">
          <span
            className="inline-flex items-center justify-center w-8 h-8 rounded border border-amber-400/40 bg-amber-400/15 text-amber-300 shrink-0"
            aria-hidden="true"
          >
            <SparkIcon className="h-4 w-4" />
          </span>
          <p className="text-xsm sm:text-sm font-medium leading-snug break-keep">
            {content.banner}
          </p>
        </div>
      </div>
    </section>
  );
};

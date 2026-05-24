import { cn } from '@it-tech-blog/utils';

import type { CompareItem, WhySourceContent } from '../content';
import { iconByName } from '../icons';

export type CompareColumnTone = 'sky' | 'cyan';

const columnTones: Record<CompareColumnTone, { title: string; chip: string; itemHover: string }> = {
  sky: {
    title: 'text-sky-600 dark:text-sky-300',
    chip: 'border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-700 dark:bg-sky-950/40 dark:text-sky-200',
    itemHover: 'hover:border-sky-300/80 dark:hover:border-sky-500',
  },
  cyan: {
    title: 'text-cyan-600 dark:text-cyan-300',
    chip: 'border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-200',
    itemHover: 'hover:border-cyan-300/80 dark:hover:border-cyan-500',
  },
};

const CompareList = ({ items, tone }: { items: CompareItem[]; tone: CompareColumnTone }) => {
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

type Props = {
  side: 'left' | 'right';
  tone: CompareColumnTone;
  data: WhySourceContent['compare']['left'];
};

/**
 * LearningPerspectiveCompare의 한 컬럼(좌/우). 헤더(side.A/B + 제목 + 설명) + 아이템 리스트.
 */
export const CompareColumn = ({ side, tone, data }: Props) => {
  const t = columnTones[tone];
  return (
    <div className="flex flex-col gap-md min-w-0">
      <header className="flex flex-col gap-1">
        <p className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] tabular-nums">
          {side === 'left' ? 'side.A' : 'side.B'}
        </p>
        <h3 className={cn('text-lg sm:text-xl font-bold tracking-tight', t.title)}>{data.title}</h3>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)]">{data.description}</p>
      </header>
      <CompareList items={data.items} tone={tone} />
    </div>
  );
};

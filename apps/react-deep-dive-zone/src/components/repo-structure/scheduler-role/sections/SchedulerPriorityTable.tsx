import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { tintByPriority } from '../components/HeroPriorityCards';
import type { PriorityRow, SchedulerContent } from '../content';
import { iconByName, ListOrderedIcon } from '../icons';

type Props = { content: SchedulerContent['priority'] };

export const SchedulerPriorityTable = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-priority" className="space-y-md">
      <SectionHeader
        id="priority"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<ListOrderedIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'flex flex-col sm:flex-row gap-md rounded-2xl border bg-[var(--term-bg)]',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          'p-md sm:p-lg',
        )}
      >
        {/* 좌측 긴급도 축 */}
        <UrgencyScale highLabel={content.scaleHigh} lowLabel={content.scaleLow} />

        {/* 우측 row 3개 */}
        <ol className="flex-1 flex flex-col gap-2 min-w-0">
          {content.rows.map((row) => (
            <li key={row.id}>
              <PriorityRowItem row={row} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

type ScaleProps = { highLabel: string; lowLabel: string };

const UrgencyScale = ({ highLabel, lowLabel }: ScaleProps) => (
  <div
    className={cn(
      'shrink-0 flex flex-row sm:flex-col items-center justify-between',
      'rounded-xl border border-[var(--term-border)] bg-[var(--term-surface)]',
      'p-3 sm:py-md sm:w-32',
    )}
  >
    <div className="flex sm:flex-col items-center gap-2 text-center">
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)] text-sm font-bold"
      >
        ↑
      </span>
      <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-accent)] break-keep">
        {highLabel}
      </span>
    </div>

    <span
      aria-hidden="true"
      className={cn(
        'hidden sm:block w-1 flex-1 my-2 rounded-full',
        'bg-[var(--term-surface)] border border-[var(--term-border)]',
      )}
    />
    <span
      aria-hidden="true"
      className={cn(
        'sm:hidden flex-1 h-1 mx-2 rounded-full',
        'bg-[var(--term-surface)] border border-[var(--term-border)]',
      )}
    />

    <div className="flex sm:flex-col items-center gap-2 text-center">
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-violet-600 dark:text-violet-300 text-sm font-bold"
      >
        ↓
      </span>
      <span className="text-[10px] uppercase tracking-wider font-bold text-violet-600 dark:text-violet-300 break-keep">
        {lowLabel}
      </span>
    </div>
  </div>
);

type RowProps = { row: PriorityRow };

const PriorityRowItem = ({ row }: RowProps) => {
  const tint = tintByPriority[row.id];
  const Icon = iconByName[row.icon];

  return (
    <article
      className={cn(
        'grid grid-cols-1 md:grid-cols-[minmax(0,_0.32fr)_minmax(0,_0.4fr)_minmax(0,_0.28fr)] gap-sm items-start',
        'rounded-xl border p-md',
        'transition-colors',
        tint.card,
      )}
    >
      {/* 제목 + 우선순위 pill */}
      <div className="flex items-center gap-sm min-w-0">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-md border shrink-0',
            tint.chip,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <div className="flex flex-col gap-1 min-w-0">
          <h3 className={cn('text-sm font-bold tracking-tight', tint.text)}>{row.title}</h3>
          <span
            className={cn(
              'inline-flex items-center gap-1 self-start rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
              tint.chip,
            )}
          >
            <span
              aria-hidden="true"
              className={cn('inline-block w-1 h-1 rounded-full', tint.dot)}
            />
            {row.priorityLabel}
          </span>
        </div>
      </div>

      {/* 설명 */}
      <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">{row.description}</p>

      {/* 예시 */}
      <p className={cn('text-xsm leading-snug break-keep font-mono', 'text-[var(--term-muted)]')}>
        {row.example}
      </p>
    </article>
  );
};

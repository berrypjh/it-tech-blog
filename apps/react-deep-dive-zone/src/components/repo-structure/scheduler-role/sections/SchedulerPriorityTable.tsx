import { cx } from '@berrypjh/react-ui';
import {
  ArrowDown,
  ArrowUp,
  ListOrdered,
  type LucideIcon,
  MonitorSmartphone,
  Sparkles,
  Zap,
} from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import { priorityTone } from '../components/HeroPriorityCards';
import type { PriorityKey, PriorityRow, SchedulerContent } from '../content';

const rowIcon: Record<PriorityKey, LucideIcon> = {
  immediate: Zap,
  normal: MonitorSmartphone,
  low: Sparkles,
};

type Props = { content: SchedulerContent['priority'] };

export const SchedulerPriorityTable = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-priority" className="space-y-md">
      <SectionHeader
        id="priority"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<ListOrdered className="h-5 w-5" aria-hidden="true" />}
      />

      <div
        className={cx(
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
    className={cx(
      'shrink-0 flex flex-row sm:flex-col items-center justify-between',
      'rounded-xl border border-[var(--term-border)] bg-[var(--term-surface)]',
      'p-3 sm:py-md sm:w-32',
    )}
  >
    <div className="flex sm:flex-col items-center gap-2 text-center">
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]"
      >
        <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
      <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-accent)] break-keep">
        {highLabel}
      </span>
    </div>

    <span
      aria-hidden="true"
      className={cx(
        'hidden sm:block w-1 flex-1 my-2 rounded-full',
        'bg-[var(--term-surface)] border border-[var(--term-border)]',
      )}
    />
    <span
      aria-hidden="true"
      className={cx(
        'sm:hidden flex-1 h-1 mx-2 rounded-full',
        'bg-[var(--term-surface)] border border-[var(--term-border)]',
      )}
    />

    <div className="flex sm:flex-col items-center gap-2 text-center">
      <span
        aria-hidden="true"
        className={cx(
          'inline-flex items-center justify-center w-6 h-6 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)]',
          toneTokens.violet.text,
        )}
      >
        <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
      <span
        className={cx(
          'text-[10px] uppercase tracking-wider font-bold break-keep',
          toneTokens.violet.text,
        )}
      >
        {lowLabel}
      </span>
    </div>
  </div>
);

type RowProps = { row: PriorityRow };

const PriorityRowItem = ({ row }: RowProps) => {
  const t = toneTokens[priorityTone[row.id]];
  const chip = cx('bg-[var(--term-surface)] border-[var(--term-border)]', t.text);
  const Icon = rowIcon[row.id];

  return (
    <article
      className={cx(
        'grid grid-cols-1 md:grid-cols-[minmax(0,_0.32fr)_minmax(0,_0.4fr)_minmax(0,_0.28fr)] gap-sm items-start',
        'rounded-xl border p-md',
        'border-[var(--term-border)] bg-[var(--term-surface)]',
      )}
    >
      {/* 제목 + 우선순위 pill */}
      <div className="flex items-center gap-sm min-w-0">
        <span
          aria-hidden="true"
          className={cx(
            'inline-flex items-center justify-center w-9 h-9 rounded-md border shrink-0',
            chip,
          )}
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        <div className="flex flex-col gap-1 min-w-0">
          <h3 className={cx('text-sm font-bold tracking-tight', t.text)}>{row.title}</h3>
          <span
            className={cx(
              'inline-flex items-center gap-1 self-start rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
              chip,
            )}
          >
            <span aria-hidden="true" className={cx('inline-block w-1 h-1 rounded-full', t.dot)} />
            {row.priorityLabel}
          </span>
        </div>
      </div>

      {/* 설명 */}
      <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">{row.description}</p>

      {/* 예시 */}
      <p className="text-xsm leading-snug break-keep font-mono text-[var(--term-muted)]">
        {row.example}
      </p>
    </article>
  );
};

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { tintByPriority } from '../components/HeroPriorityCards';
import type { ExecutionRow, QueueTask, SchedulerContent } from '../content';
import { ArrowRightIcon, CheckCircleIcon, ListOrderedIcon, RefreshIcon } from '../icons';

type Props = { content: SchedulerContent['simulation'] };

export const SchedulerQueueSimulation = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-simulation" className="space-y-md">
      <SectionHeader
        id="simulation"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<ListOrderedIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        {/* 좌측 incoming */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-xl border bg-[var(--term-bg)]',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
            'p-md sm:p-lg',
          )}
        >
          <header className="flex items-center justify-between gap-sm">
            <h3 className="text-sm font-bold tracking-tight text-[var(--term-fg)]">
              {content.incomingTitle}
            </h3>
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
              incoming
            </span>
          </header>
          <ul className="flex flex-col gap-2">
            {content.tasks.map((task) => (
              <li key={task.id}>
                <IncomingTaskCard task={task} />
              </li>
            ))}
          </ul>
        </article>

        {/* 중앙 설명 */}
        <CenterMessage message={content.centerMessage} />

        {/* 우측 execution */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-xl border bg-[var(--term-bg)]',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
            'p-md sm:p-lg',
          )}
        >
          <header className="flex items-center justify-between gap-sm">
            <h3 className="text-sm font-bold tracking-tight text-[var(--term-fg)]">
              {content.executionTitle}
            </h3>
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
              order
            </span>
          </header>
          <ol className="flex flex-col gap-2">
            {content.rows.map((row) => (
              <li key={row.id}>
                <ExecutionRowItem
                  row={row}
                  doneLabel={content.doneLabel}
                  waitingLabel={content.waitingLabel}
                />
              </li>
            ))}
          </ol>
        </article>
      </div>
    </section>
  );
};

type TaskProps = { task: QueueTask };

const IncomingTaskCard = ({ task }: TaskProps) => {
  const tint = tintByPriority[task.priority];

  return (
    <div
      className={cn('flex items-center justify-between gap-sm rounded-lg border p-3', tint.card)}
    >
      <span className="text-xsm font-medium text-[var(--term-fg)] break-keep">{task.title}</span>
      <span
        className={cn(
          'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider shrink-0',
          tint.chip,
        )}
      >
        <span aria-hidden="true" className={cn('inline-block w-1 h-1 rounded-full', tint.dot)} />
        {task.badge}
      </span>
    </div>
  );
};

type RowItemProps = {
  row: ExecutionRow;
  doneLabel: string;
  waitingLabel: string;
};

const ExecutionRowItem = ({ row, doneLabel, waitingLabel }: RowItemProps) => {
  const tint = tintByPriority[row.priority];
  const isDone = row.status === 'done';
  const statusLabel = isDone ? doneLabel : waitingLabel;
  const statusClass = isDone
    ? 'bg-[var(--term-surface)] text-[var(--term-accent)] border-[var(--term-border)]'
    : 'bg-[var(--term-surface)] text-[var(--term-muted)] border-[var(--term-border)]';

  return (
    <div
      className={cn('flex items-center justify-between gap-sm rounded-lg border p-3', tint.card)}
    >
      <div className="flex items-center gap-sm min-w-0">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-7 h-7 rounded-full border shrink-0',
            'font-bold text-sm tabular-nums',
            tint.chip,
          )}
        >
          {row.rank}
        </span>
        <div className="flex flex-col gap-0.5 min-w-0">
          <span className="text-xsm font-bold text-[var(--term-fg)] break-keep">{row.title}</span>
          <span className="text-[11px] text-[var(--term-muted)] break-keep">{row.action}</span>
        </div>
      </div>
      <span
        className={cn(
          'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider shrink-0',
          statusClass,
        )}
      >
        {isDone && <CheckCircleIcon className="h-3 w-3" aria-hidden="true" />}
        {statusLabel}
      </span>
    </div>
  );
};

type CenterProps = { message: string };

const CenterMessage = ({ message }: CenterProps) => (
  <div className="flex flex-col items-center justify-center gap-sm text-center lg:max-w-[200px]">
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-12 h-12 rounded-full border-2',
        'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_3px_0_var(--term-border)]',
        'text-[var(--term-accent)]',
      )}
    >
      <RefreshIcon className="h-5 w-5" />
    </span>
    <p className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep whitespace-pre-line">
      {message}
    </p>
    <ArrowRightIcon
      className="hidden lg:block h-6 w-6 text-[var(--term-accent)]"
      aria-hidden="true"
    />
    <ArrowRightIcon
      className="lg:hidden h-6 w-6 text-[var(--term-accent)] rotate-90"
      aria-hidden="true"
    />
  </div>
);

'use client';

import { useMemo, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { LabAction, LabPriority, SchedulerPackageContent } from '../content';
import {
  ClockIcon,
  CogIcon,
  CompassIcon,
  PlayCircleIcon,
  PlusIcon,
  RotateCcwIcon,
  XCircleIcon,
  ZapIcon,
} from '../icons';
import { pkgCardBorder, pkgIconBox, pkgPill, pkgTextStrong } from '../packageAccent';

type Props = { content: SchedulerPackageContent['lab'] };

type Task = {
  id: number;
  action: LabAction;
};

const buttonIcon: Record<LabPriority, typeof ZapIcon> = {
  immediate: ZapIcon,
  normal: CompassIcon,
  low: ClockIcon,
};

export const TaskQueueLab = ({ content }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [counter, setCounter] = useState(0);

  const addTask = (action: LabAction) => {
    setTasks((prev) => [...prev, { id: counter, action }]);
    setCounter((n) => n + 1);
  };

  const handleReset = () => {
    setTasks([]);
    setCounter(0);
  };

  // Sort by sortKey (lower = higher priority); stable, preserves insertion order
  const sortedTasks = useMemo(() => {
    return [...tasks]
      .map((t, originalIndex) => ({ t, originalIndex }))
      .sort((a, b) => {
        if (a.t.action.sortKey !== b.t.action.sortKey) {
          return a.t.action.sortKey - b.t.action.sortKey;
        }
        return a.originalIndex - b.originalIndex;
      })
      .map(({ t }) => t);
  }, [tasks]);

  const hasWork = sortedTasks.length > 0;
  const nextTask = sortedTasks[0];

  return (
    <section aria-labelledby="heading-lab">
      <NumberedSectionHeader
        id="lab"
        number={content.number}
        eyebrow={content.title}
        title={content.title}
        description={content.helper}
        icon={<CogIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,5fr)_minmax(0,4fr)] gap-md items-stretch">
        {/* LEFT: action panel */}
        <article
          className={cn(
            'flex h-full flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
            'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60"
            >
              <CogIcon className="h-4 w-4" />
            </span>
            <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
              {content.actionTitle}
            </h3>
          </header>

          <ul className="flex flex-col gap-2">
            {content.actions.map((action) => {
              const Icon = buttonIcon[action.key];
              return (
                <li key={action.key}>
                  <button
                    type="button"
                    onClick={() => addTask(action)}
                    className={cn(
                      'w-full inline-flex items-center gap-3 rounded-xl border-2 p-3 transition-all text-left',
                      'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                      pkgCardBorder[action.accent],
                      action.accent === 'blue' && 'focus-visible:ring-blue-400',
                      action.accent === 'teal' && 'focus-visible:ring-teal-400',
                      action.accent === 'violet' && 'focus-visible:ring-violet-400',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
                        pkgIconBox[action.accent],
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                      <span
                        className={cn(
                          'font-mono text-xsm sm:text-sm font-bold leading-tight break-keep',
                          pkgTextStrong[action.accent],
                        )}
                      >
                        {action.label}
                      </span>
                      <span
                        className={cn(
                          'font-mono text-[10px] uppercase tracking-wider',
                          pkgTextStrong[action.accent],
                        )}
                      >
                        sortKey {action.sortKey}
                      </span>
                    </div>
                    <PlusIcon
                      aria-hidden="true"
                      className={cn('h-4 w-4 shrink-0', pkgTextStrong[action.accent])}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={handleReset}
            disabled={!hasWork}
            className={cn(
              'mt-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-2.5',
              'font-bold text-xsm sm:text-sm transition-all',
              'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
              'shadow-[0_2px_0_var(--term-border)]',
              'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
              'hover:border-rose-300 dark:hover:border-rose-700/60',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0',
            )}
          >
            <RotateCcwIcon aria-hidden="true" className="h-4 w-4" />
            <span>{content.resetLabel}</span>
          </button>
        </article>

        {/* CENTER: current task queue */}
        <article
          aria-live="polite"
          className={cn(
            'flex h-full flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
            'border-teal-300/80 bg-gradient-to-br from-teal-50/70 via-white to-blue-50/30',
            'dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/10',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60"
              >
                <CogIcon className="h-4 w-4" />
              </span>
              <h3 className="text-sm sm:text-md font-bold text-teal-700 dark:text-teal-300 break-keep font-mono">
                {content.queueTitle}
              </h3>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
              {content.queueSubtitle}
            </span>
          </header>

          {sortedTasks.length === 0 ? (
            <div
              className={cn(
                'flex items-center justify-center gap-2 rounded-xl border-2 border-dashed py-md',
                'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
              )}
            >
              <XCircleIcon aria-hidden="true" className="h-4 w-4" />
              <span className="font-mono text-xsm">{content.emptyQueueLabel}</span>
            </div>
          ) : (
            <ol className="flex flex-col gap-1.5">
              {sortedTasks.map((task, i) => (
                <li
                  key={task.id}
                  className={cn(
                    'flex items-center gap-3 rounded-xl border-2 p-3',
                    pkgPill[task.action.accent],
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-6 w-8 shrink-0 items-center justify-center rounded font-mono text-[10px] font-bold tabular-nums bg-white text-[var(--term-muted)] border border-current/30 shadow-sm"
                  >
                    #{String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={cn(
                      'font-mono text-xsm sm:text-sm font-bold break-keep',
                      pkgTextStrong[task.action.accent],
                    )}
                  >
                    {task.action.badge} task
                  </span>
                  <span className="ml-auto font-mono text-[10px] text-[var(--term-muted)]">
                    task #{task.id + 1}
                  </span>
                </li>
              ))}
            </ol>
          )}

          <p className="mt-auto font-mono text-[10px] text-[var(--term-muted)] break-all">
            sort rule: {content.sortRule}
          </p>
        </article>

        {/* RIGHT: status */}
        <article
          className={cn(
            'flex h-full flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
            'shadow-[0_2px_0_var(--term-border)]',
            hasWork
              ? 'border-blue-300/80 bg-gradient-to-br from-blue-50/70 via-white to-violet-50/40 dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/20'
              : 'border-[var(--term-border)] bg-[var(--term-bg)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                hasWork
                  ? 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60'
                  : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
              )}
            >
              <PlayCircleIcon className="h-4 w-4" />
            </span>
            <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
              {content.statusTitle}
            </h3>
          </header>

          <dl className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-2 rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] px-3 py-2">
              <dt className="font-mono text-[10px] sm:text-xsm font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.lengthLabel}
              </dt>
              <dd className="font-mono text-md sm:text-lg font-bold tabular-nums text-[var(--term-fg)]">
                {sortedTasks.length}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-2 rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] px-3 py-2">
              <dt className="font-mono text-[10px] sm:text-xsm font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.nextLabel}
              </dt>
              <dd
                className={cn(
                  'font-mono text-xsm sm:text-sm font-bold',
                  nextTask ? pkgTextStrong[nextTask.action.accent] : 'text-[var(--term-muted)]',
                )}
              >
                {nextTask ? `${nextTask.action.badge} task` : '—'}
              </dd>
            </div>
          </dl>

          <p
            className={cn(
              'inline-flex items-center self-start gap-2 rounded-full border-2 px-3 py-1.5',
              'font-mono text-xsm sm:text-sm font-bold',
              hasWork
                ? 'border-blue-300/80 bg-blue-50 text-blue-800 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200'
                : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-block h-2 w-2 rounded-full',
                hasWork ? 'bg-blue-500 dark:bg-blue-400' : 'bg-[var(--term-dim)]',
              )}
            />
            {hasWork ? content.pendingActive : content.pendingEmpty}
          </p>
        </article>
      </div>
    </section>
  );
};

'use client';

import { useEffect, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { SchedulerContent } from '../content';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ListOrderedIcon,
  PlayCircleIcon,
  RotateIcon,
  SparklesIcon,
} from '../icons';

type Props = { content: SchedulerContent['queue'] };

/** 한 유닛(작업 1개 또는 결과 1개)을 처리하는 간격 */
const STEP_MS = 850;

export const QueueSection = ({ content }: Props) => {
  const arrival = content.tasks; // 도착 순서 그대로
  const processOrder = [...content.tasks].sort((a, b) => a.priority - b.priority);
  const taskCount = arrival.length;
  const results = content.result.items;

  // -1: 실행 전, 0..taskCount-1: 처리 중인 작업, taskCount: 완료(결과 표시)
  const [cursor, setCursor] = useState(-1);
  const running = cursor >= 0 && cursor < taskCount;
  const completed = cursor >= taskCount;

  useEffect(() => {
    if (!running) return;
    const id = setTimeout(() => setCursor((c) => c + 1), STEP_MS);
    return () => clearTimeout(id);
  }, [cursor, running]);

  // 작업은 우선순위 순서(priority-1 step)로 처리된다
  const taskState = (priority: number): 'idle' | 'active' | 'done' => {
    const step = priority - 1;
    return cursor === step ? 'active' : cursor > step ? 'done' : 'idle';
  };
  const status = completed
    ? '모든 작업 처리 완료'
    : running
      ? `우선순위로 디스패치 중 ${cursor + 1}/${taskCount}`
      : '실행 대기 중';

  return (
    <section aria-labelledby="heading-queue" className="space-y-md">
      <SectionHeader
        id="queue"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<ListOrderedIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-2xl border p-md sm:p-lg space-y-md',
          'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* 컨트롤 바 */}
        <div className="flex flex-wrap items-center justify-between gap-sm">
          <button
            type="button"
            onClick={() => setCursor(0)}
            disabled={running}
            className={cn(
              'inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xsm font-bold transition-all',
              'border border-transparent bg-slate-900 text-slate-50',
              'dark:border-slate-600 dark:bg-slate-800',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)]',
              running
                ? 'opacity-60 cursor-not-allowed'
                : 'hover:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            {completed ? (
              <RotateIcon className="h-4 w-4" aria-hidden="true" />
            ) : (
              <PlayCircleIcon className="h-4 w-4" aria-hidden="true" />
            )}
            {completed ? '다시 실행' : running ? '처리 중…' : '스케줄러 실행'}
          </button>
          <span
            aria-live="polite"
            className="text-xsm font-medium text-[var(--term-dim)] break-keep"
          >
            {status}
          </span>
        </div>

        {/* 대기열 → scheduler → 처리 순서 */}
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center">
          {/* 대기열 (도착 순서) */}
          <div className="space-y-2">
            <p className="px-1 text-xsm font-bold tracking-tight text-sky-700 dark:text-sky-300 break-keep">
              {content.waitingTitle}
            </p>
            <ol className="flex flex-col gap-2">
              {arrival.map((task) => {
                const st = taskState(task.priority);
                return (
                  <li
                    key={task.label}
                    className={cn(
                      'flex items-center gap-2 rounded-lg border px-3 py-2.5 transition-all duration-300',
                      st === 'active' &&
                        'border-[var(--term-accent)] bg-[var(--term-surface)] shadow-[inset_3px_0_0_0_var(--term-accent)]',
                      st === 'done' && 'border-[var(--term-border)] opacity-50',
                      st === 'idle' && 'border-[var(--term-border)] bg-[var(--term-surface)]',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'shrink-0 transition-colors duration-300',
                        st === 'done'
                          ? 'text-[var(--term-accent)]'
                          : 'text-sky-600 dark:text-sky-300',
                      )}
                    >
                      {st === 'done' ? (
                        <CheckCircleIcon className="h-4 w-4" />
                      ) : (
                        <ArrowRightIcon
                          className={cn(
                            'h-4 w-4 transition-transform duration-300',
                            st === 'active' && 'translate-x-0.5',
                          )}
                        />
                      )}
                    </span>
                    <span
                      className={cn(
                        'min-w-0 text-xsm leading-snug break-keep transition-colors duration-300',
                        st === 'done' ? 'text-[var(--term-dim)]' : 'text-[var(--term-fg)]',
                      )}
                    >
                      {task.label}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* scheduler 커넥터 */}
          <div
            aria-hidden="true"
            className="flex items-center justify-center gap-1.5 py-1 text-violet-600 dark:text-violet-300 lg:flex-col"
          >
            <SparklesIcon className="h-5 w-5" />
            <ArrowRightIcon className="h-5 w-5 rotate-90 lg:rotate-0" />
          </div>

          {/* 처리 순서 (scheduler 판단) */}
          <div className="space-y-2">
            <p className="px-1 text-xsm font-bold tracking-tight text-violet-700 dark:text-violet-300 break-keep">
              {content.orderTitle}
            </p>
            <ol className="flex flex-col gap-2">
              {processOrder.map((task, r) => {
                const revealed = cursor >= r;
                const active = cursor === r;
                return (
                  <li
                    key={task.label}
                    className={cn(
                      'flex items-start gap-2.5 rounded-lg border px-3 py-2.5 transition-all duration-300',
                      !revealed && 'border-dashed border-[var(--term-border)]',
                      revealed && !active && 'border-[var(--term-border)] bg-[var(--term-surface)]',
                      active &&
                        'border-[var(--term-accent)] bg-[var(--term-surface)] shadow-[inset_3px_0_0_0_var(--term-accent)]',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      style={
                        active ? { animation: 'qd-pulse 1.2s ease-in-out infinite' } : undefined
                      }
                      className={cn(
                        'inline-flex items-center justify-center w-7 h-7 rounded-full shrink-0 font-mono text-xsm font-bold border-2 transition-all duration-300',
                        revealed
                          ? cn(
                              'border-[var(--term-border)] bg-[var(--term-bg)] text-violet-600 dark:text-violet-300',
                              active &&
                                'scale-110 border-[var(--term-accent)] text-[var(--term-accent)]',
                            )
                          : 'border-[var(--term-border)] text-[var(--term-dim)]',
                      )}
                    >
                      {revealed ? task.priority : '·'}
                    </span>
                    {revealed ? (
                      <span className="min-w-0">
                        <span className="block text-xsm font-medium leading-snug text-[var(--term-fg)] break-keep">
                          {task.label}
                        </span>
                        <span className="block text-[11px] leading-snug text-[var(--term-dim)] break-keep">
                          {task.reason}
                        </span>
                      </span>
                    ) : (
                      <span className="self-center text-xsm text-[var(--term-dim)] break-keep">
                        처리 대기
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* 결과 */}
        <div className="border-t border-[var(--term-border)] pt-md space-y-2">
          <header className="flex items-center gap-2">
            <CheckCircleIcon className="h-4 w-4 text-[var(--term-accent)]" aria-hidden="true" />
            <h3 className="text-xsm font-bold tracking-tight text-[var(--term-accent)] break-keep">
              {content.result.title}
            </h3>
          </header>
          <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {results.map((r) => (
              <li
                key={r}
                className={cn(
                  'flex items-center gap-2 rounded-lg border px-3 py-2 text-xsm leading-snug break-keep transition-all duration-300 sm:flex-1',
                  completed
                    ? 'border-[var(--term-accent)] bg-[var(--term-surface)] text-[var(--term-fg)]'
                    : 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-dim)]',
                )}
              >
                <CheckCircleIcon
                  aria-hidden="true"
                  className={cn(
                    'h-4 w-4 shrink-0 transition-all duration-300',
                    completed
                      ? 'text-[var(--term-accent)] scale-110'
                      : 'text-[var(--term-dim)] opacity-40',
                  )}
                />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

'use client';

import { useMemo, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { RenderYieldingContent, SimulatorStatus } from '../content';
import {
  CheckCircleIcon,
  CogIcon,
  KeyboardIcon,
  PauseCircleIcon,
  PlayCircleIcon,
  Repeat2Icon,
  RotateCcwIcon,
  ZapIcon,
} from '../icons';

type Props = { content: RenderYieldingContent['simulator'] };

const STATUS_TONE: Record<
  SimulatorStatus,
  {
    border: string;
    icon: string;
    text: string;
    dot: string;
  }
> = {
  idle: {
    border: 'border-[var(--term-border)] bg-[var(--term-bg)]',
    icon: 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
    text: 'text-[var(--term-muted)]',
    dot: 'bg-[var(--term-dim)]',
  },
  running: {
    border:
      'border-blue-300/80 bg-gradient-to-br from-blue-50/70 via-white to-blue-50/30 dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/10',
    icon: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
    text: 'text-blue-700 dark:text-blue-300',
    dot: 'bg-blue-500 dark:bg-blue-400',
  },
  yielded: {
    border:
      'border-violet-300/80 bg-gradient-to-br from-violet-50/70 via-white to-blue-50/30 dark:border-violet-700/70 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/10',
    icon: 'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
    text: 'text-violet-700 dark:text-violet-300',
    dot: 'bg-violet-500 dark:bg-violet-400',
  },
  'input-handled': {
    border:
      'border-rose-300/80 bg-gradient-to-br from-rose-50/70 via-white to-rose-50/30 dark:border-rose-700/70 dark:from-rose-950/30 dark:via-[var(--term-bg)] dark:to-rose-950/10',
    icon: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
    text: 'text-rose-700 dark:text-rose-300',
    dot: 'bg-rose-500 dark:bg-rose-400',
  },
  continued: {
    border:
      'border-teal-300/80 bg-gradient-to-br from-teal-50/70 via-white to-teal-50/30 dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/10',
    icon: 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
    text: 'text-teal-700 dark:text-teal-300',
    dot: 'bg-teal-500 dark:bg-teal-400',
  },
  completed: {
    border:
      'border-emerald-300/80 bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/30 dark:border-emerald-700/70 dark:from-emerald-950/30 dark:via-[var(--term-bg)] dark:to-emerald-950/10',
    icon: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
    text: 'text-emerald-700 dark:text-emerald-300',
    dot: 'bg-emerald-500 dark:bg-emerald-400',
  },
};

const STATUS_ICON: Record<SimulatorStatus, typeof ZapIcon> = {
  idle: CogIcon,
  running: PlayCircleIcon,
  yielded: PauseCircleIcon,
  'input-handled': KeyboardIcon,
  continued: Repeat2Icon,
  completed: CheckCircleIcon,
};

export const YieldContinuationSimulator = ({ content }: Props) => {
  const [status, setStatus] = useState<SimulatorStatus>('idle');
  const [processedCount, setProcessedCount] = useState(0); // 0/2/4
  const [inputHandled, setInputHandled] = useState(false);

  const handleStart = () => {
    setStatus('yielded');
    setProcessedCount(2);
  };

  const handleInput = () => {
    if (status === 'idle') return;
    setInputHandled(true);
    setStatus('input-handled');
  };

  const handleResume = () => {
    if (processedCount === 0) return;
    setProcessedCount(4);
    setStatus('completed');
  };

  const handleReset = () => {
    setStatus('idle');
    setProcessedCount(0);
    setInputHandled(false);
  };

  const processedLabels = useMemo(
    () => content.fiberItems.slice(0, processedCount).map((f) => f.label),
    [processedCount, content.fiberItems],
  );

  const frame1Items = content.fiberItems.filter((f) => f.frame === 1);
  const frame2Items = content.fiberItems.filter((f) => f.frame === 2);

  const tone = STATUS_TONE[status];
  const StatusIcon = STATUS_ICON[status];

  return (
    <section aria-labelledby="heading-simulator">
      <NumberedSectionHeader
        id="simulator"
        number={content.number}
        eyebrow={content.title}
        title={content.title}
        description={content.helper}
        icon={<CogIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,5fr)_minmax(0,4fr)] gap-md items-stretch">
        {/* LEFT: controls */}
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
              Controls
            </h3>
          </header>

          <ul className="flex flex-col gap-2">
            <li>
              <button
                type="button"
                onClick={handleStart}
                disabled={status !== 'idle'}
                className={cn(
                  'w-full inline-flex items-center gap-3 rounded-xl border-2 p-3 transition-all text-left',
                  'border-blue-300/80 bg-gradient-to-br from-blue-50/70 via-white to-blue-50/30',
                  'dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/10',
                  'shadow-[0_2px_0_var(--term-border)]',
                  'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                  'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0',
                )}
              >
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60"
                >
                  <PlayCircleIcon className="h-4 w-4" />
                </span>
                <span className="font-mono text-xsm sm:text-sm font-bold text-blue-700 dark:text-blue-300 break-keep">
                  {content.buttons.start}
                </span>
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={handleInput}
                disabled={status === 'idle' || status === 'completed'}
                className={cn(
                  'w-full inline-flex items-center gap-3 rounded-xl border-2 p-3 transition-all text-left',
                  'border-rose-300/80 bg-gradient-to-br from-rose-50/70 via-white to-rose-50/30',
                  'dark:border-rose-700/70 dark:from-rose-950/30 dark:via-[var(--term-bg)] dark:to-rose-950/10',
                  'shadow-[0_2px_0_var(--term-border)]',
                  'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                  'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0',
                )}
              >
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60"
                >
                  <KeyboardIcon className="h-4 w-4" />
                </span>
                <span className="font-mono text-xsm sm:text-sm font-bold text-rose-700 dark:text-rose-300 break-keep">
                  {content.buttons.input}
                </span>
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={handleResume}
                disabled={processedCount === 0 || status === 'completed'}
                className={cn(
                  'w-full inline-flex items-center gap-3 rounded-xl border-2 p-3 transition-all text-left',
                  'border-emerald-300/80 bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/30',
                  'dark:border-emerald-700/70 dark:from-emerald-950/30 dark:via-[var(--term-bg)] dark:to-emerald-950/10',
                  'shadow-[0_2px_0_var(--term-border)]',
                  'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                  'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0',
                )}
              >
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60"
                >
                  <Repeat2Icon className="h-4 w-4" />
                </span>
                <span className="font-mono text-xsm sm:text-sm font-bold text-emerald-700 dark:text-emerald-300 break-keep">
                  {content.buttons.resume}
                </span>
              </button>
            </li>
          </ul>

          <button
            type="button"
            onClick={handleReset}
            disabled={status === 'idle' && processedCount === 0 && !inputHandled}
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
            <span>{content.buttons.reset}</span>
          </button>
        </article>

        {/* CENTER: frame timeline */}
        <article
          aria-live="polite"
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
              {content.timelineTitle}
            </h3>
          </header>

          {/* Frame 1 */}
          <FrameCard
            title={content.frame1Title}
            items={frame1Items.map((f) => f.label)}
            processed={processedLabels}
            tone="frame1"
            yieldMarker={processedCount >= 2 ? content.yieldMarker : undefined}
          />

          {/* input task between frames */}
          {inputHandled && (
            <div
              className={cn(
                'flex items-center gap-2 rounded-xl border-2 px-3 py-2',
                'border-rose-300/80 bg-rose-50/60 text-rose-800 dark:border-rose-700/60 dark:bg-rose-950/30 dark:text-rose-100',
              )}
            >
              <KeyboardIcon aria-hidden="true" className="h-4 w-4 shrink-0" />
              <span className="font-mono text-xsm font-bold break-keep">
                {content.inputTaskLabel} · {content.statusLabels['input-handled']}
              </span>
            </div>
          )}

          {/* Frame 2 */}
          <FrameCard
            title={content.frame2Title}
            items={frame2Items.map((f) => f.label)}
            processed={processedLabels}
            tone="frame2"
            completeMarker={processedCount >= 4 ? content.completeMarker : undefined}
          />
        </article>

        {/* RIGHT: status */}
        <article
          aria-live="polite"
          className={cn(
            'flex h-full flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
            'shadow-[0_2px_0_var(--term-border)]',
            tone.border,
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                tone.icon,
              )}
            >
              <StatusIcon className="h-4 w-4" />
            </span>
            <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
              {content.statusTitle}
            </h3>
          </header>

          <p
            className={cn(
              'inline-flex items-center self-start gap-2 rounded-xl border-2 px-3 py-2',
              'font-mono text-md font-bold',
              tone.icon.replace('text-', 'border-current/40 ').split(' ').slice(0, 2).join(' '),
              tone.text,
            )}
          >
            <span
              aria-hidden="true"
              className={cn('inline-block h-2.5 w-2.5 rounded-full', tone.dot)}
            />
            {content.statusLabels[status]}
          </p>

          <dl className="flex flex-col gap-2 mt-2">
            <div className="flex items-center justify-between gap-2 rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] px-3 py-2">
              <dt className="font-mono text-[10px] sm:text-xsm font-bold uppercase tracking-wider text-[var(--term-muted)]">
                status (raw)
              </dt>
              <dd className={cn('font-mono text-xsm sm:text-sm font-bold', tone.text)}>{status}</dd>
            </div>
            <div className="flex items-center justify-between gap-2 rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] px-3 py-2">
              <dt className="font-mono text-[10px] sm:text-xsm font-bold uppercase tracking-wider text-[var(--term-muted)]">
                processed
              </dt>
              <dd className="font-mono text-xsm sm:text-sm font-bold text-[var(--term-fg)] tabular-nums">
                {processedCount} / {content.fiberItems.length}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-2 rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] px-3 py-2">
              <dt className="font-mono text-[10px] sm:text-xsm font-bold uppercase tracking-wider text-[var(--term-muted)]">
                input handled
              </dt>
              <dd
                className={cn(
                  'font-mono text-xsm sm:text-sm font-bold',
                  inputHandled ? 'text-rose-700 dark:text-rose-300' : 'text-[var(--term-muted)]',
                )}
              >
                {inputHandled ? 'true' : 'false'}
              </dd>
            </div>
          </dl>
        </article>
      </div>
    </section>
  );
};

const FrameCard = ({
  title,
  items,
  processed,
  tone,
  yieldMarker,
  completeMarker,
}: {
  title: string;
  items: string[];
  processed: string[];
  tone: 'frame1' | 'frame2';
  yieldMarker?: string;
  completeMarker?: string;
}) => (
  <div
    className={cn(
      'flex flex-col gap-2 rounded-2xl border-2 p-md',
      tone === 'frame1'
        ? 'border-violet-300/80 bg-gradient-to-br from-violet-50/70 via-white to-blue-50/30 dark:border-violet-700/70 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/10'
        : 'border-emerald-300/80 bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/30 dark:border-emerald-700/70 dark:from-emerald-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/10',
    )}
  >
    <header className="flex items-center justify-between gap-2">
      <span
        className={cn(
          'font-mono text-xsm font-bold',
          tone === 'frame1'
            ? 'text-violet-700 dark:text-violet-300'
            : 'text-emerald-700 dark:text-emerald-300',
        )}
      >
        {title}
      </span>
    </header>
    <ul className="flex flex-col gap-1">
      {items.map((item) => {
        const isDone = processed.includes(item);
        return (
          <li key={item} className="flex items-center gap-2 text-[11px] sm:text-xsm leading-snug">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border',
                isDone
                  ? tone === 'frame1'
                    ? 'border-violet-500 bg-violet-500 text-white'
                    : 'border-emerald-500 bg-emerald-500 text-white'
                  : 'border-[var(--term-border)] bg-white dark:bg-slate-950/40',
              )}
            >
              {isDone && <CheckCircleIcon className="h-3 w-3" />}
            </span>
            <code
              className={cn(
                'font-mono',
                isDone
                  ? tone === 'frame1'
                    ? 'text-violet-700 dark:text-violet-300 font-bold'
                    : 'text-emerald-700 dark:text-emerald-300 font-bold'
                  : 'text-[var(--term-muted)]',
              )}
            >
              {item}
            </code>
            <span className="font-mono text-[10px] text-[var(--term-dim)] ml-auto">
              {isDone ? 'processed' : 'pending'}
            </span>
          </li>
        );
      })}
      {yieldMarker && (
        <li className="flex items-center gap-2 text-[11px] sm:text-xsm leading-snug">
          <span
            aria-hidden="true"
            className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-violet-500 bg-violet-500 text-white"
          >
            <PauseCircleIcon className="h-3 w-3" />
          </span>
          <span className="font-mono font-bold text-violet-700 dark:text-violet-300">
            {yieldMarker}
          </span>
        </li>
      )}
      {completeMarker && (
        <li className="flex items-center gap-2 text-[11px] sm:text-xsm leading-snug">
          <span
            aria-hidden="true"
            className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-emerald-500 bg-emerald-500 text-white"
          >
            <CheckCircleIcon className="h-3 w-3" />
          </span>
          <span className="font-mono font-bold text-emerald-700 dark:text-emerald-300">
            {completeMarker}
          </span>
        </li>
      )}
    </ul>
  </div>
);

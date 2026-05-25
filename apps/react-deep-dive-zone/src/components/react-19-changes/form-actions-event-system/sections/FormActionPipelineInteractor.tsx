'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { FormActionsEventSystemContent } from '../content';
import { CheckCircleIcon, CircleIcon, PlayCircleIcon, SendIcon, SparklesIcon } from '../icons';
import { pipelineTone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: FormActionsEventSystemContent['interactor'] };

type StepStatus = 'idle' | 'current' | 'done';

const idleAccent = {
  text: 'text-slate-500 dark:text-slate-400',
  border: 'border-slate-200/80 dark:border-slate-700/70',
  iconChip:
    'bg-slate-100 text-slate-500 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700',
};

export const FormActionPipelineInteractor = ({ content }: Props) => {
  // -1 = idle, 0~steps.length-1 = current step, steps.length = all done
  const [progress, setProgress] = useState<number>(-1);

  const advance = () => {
    setProgress((prev) => {
      if (prev >= content.steps.length) return 0;
      return prev + 1;
    });
  };

  const reset = () => setProgress(-1);

  const stepStatus = (idx: number): StepStatus => {
    if (progress === -1) return 'idle';
    if (idx < progress) return 'done';
    if (idx === progress) return 'current';
    return 'idle';
  };

  return (
    <section aria-labelledby="interactor-heading" className="flex flex-col">
      <SectionHeader
        id="interactor-heading"
        number={content.number}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <div
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_5fr)_minmax(0,_7fr)] lg:gap-lg items-stretch">
          {/* LEFT: form mock */}
          <article
            className={cn(
              'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
              'border-blue-200/80 bg-blue-50/30 dark:border-blue-800/60 dark:bg-blue-950/20',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
              >
                <PlayCircleIcon className="h-3.5 w-3.5" />
              </span>
              <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">
                {content.leftTitle}
              </h3>
            </header>

            <div
              className={cn(
                'flex flex-col gap-2 rounded-xl border-2 p-md',
                'border-slate-200 bg-white',
                'dark:border-slate-700 dark:bg-[var(--term-bg)]',
              )}
              role="group"
              aria-label={content.leftTitle}
            >
              <label
                htmlFor="interactor-form-title"
                className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]"
              >
                {content.leftLabel}
              </label>
              <input
                id="interactor-form-title"
                type="text"
                placeholder={content.leftPlaceholder}
                readOnly
                className={cn(
                  'w-full rounded-lg border-2 px-3 py-2 font-mono text-xsm',
                  'border-slate-200 bg-slate-50 text-[var(--term-fg)] placeholder:text-[var(--term-dim)]',
                  'dark:border-slate-700 dark:bg-slate-900/40',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60',
                )}
              />
              <div className="flex items-center gap-2 mt-1">
                <button
                  type="button"
                  onClick={advance}
                  className={cn(
                    'group inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2',
                    'bg-blue-600 text-white font-bold text-xsm dark:bg-blue-500',
                    'shadow-[0_2px_0_rgba(15,23,42,0.25)]',
                    'transition-all motion-safe:hover:-translate-y-0.5',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                  )}
                >
                  <SendIcon aria-hidden="true" className="h-3.5 w-3.5" />
                  {content.leftButton}
                </button>
                <button
                  type="button"
                  onClick={reset}
                  className={cn(
                    'inline-flex items-center justify-center gap-1 rounded-lg border-2 px-3 py-2',
                    'border-slate-200 bg-white text-[var(--term-fg)] dark:border-slate-700 dark:bg-[var(--term-bg)]',
                    'font-mono text-[10px] font-bold uppercase tracking-wider',
                    'transition-all motion-safe:hover:-translate-y-0.5',
                    'hover:border-blue-300 dark:hover:border-blue-700/70',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                  )}
                >
                  Reset
                </button>
              </div>
            </div>

            <p className="text-xxsm leading-relaxed text-[var(--term-muted)] break-keep">
              {content.leftDescription}
            </p>

            {/* legend */}
            <ul className="mt-1 flex flex-wrap items-center gap-2">
              <LegendItem dot="bg-slate-300 dark:bg-slate-600" label={content.statusLabels.idle} />
              <LegendItem dot="bg-blue-500 dark:bg-blue-400" label={content.statusLabels.current} />
              <LegendItem
                dot="bg-emerald-500 dark:bg-emerald-400"
                label={content.statusLabels.done}
              />
            </ul>
          </article>

          {/* RIGHT: stepper */}
          <ol className="flex flex-col gap-2">
            {content.steps.map((step, idx) => {
              const status = stepStatus(idx);
              const tone = pipelineTone[step.pipeline];
              const Icon = iconRegistry[step.iconKey];
              return (
                <StepRow
                  key={step.title}
                  index={idx + 1}
                  Icon={Icon}
                  title={step.title}
                  caption={step.caption}
                  status={status}
                  tone={tone}
                />
              );
            })}
          </ol>
        </div>

        {/* Completion message */}
        {progress >= content.steps.length && (
          <div
            className={cn(
              'mt-md flex items-start gap-2 rounded-xl border-2 px-3 py-3',
              'border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/30',
            )}
          >
            <span
              aria-hidden="true"
              className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-emerald-200 bg-emerald-100 text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/60 dark:text-emerald-200"
            >
              <SparklesIcon className="h-3.5 w-3.5" />
            </span>
            <p className="text-xsm font-bold leading-relaxed text-emerald-700 dark:text-emerald-200 break-keep">
              모든 단계가 완료되었습니다. Action 함수가 transition 위에서 실행되고 UI가
              업데이트됩니다.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

const LegendItem = ({ dot, label }: { dot: string; label: string }) => (
  <li className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2 py-0.5 dark:border-slate-700 dark:bg-[var(--term-bg)]">
    <span aria-hidden="true" className={cn('block h-1.5 w-1.5 rounded-full', dot)} />
    <span className="font-mono text-[10px] font-bold text-[var(--term-muted)] break-keep">
      {label}
    </span>
  </li>
);

const StepRow = ({
  index,
  Icon,
  title,
  caption,
  status,
  tone,
}: {
  index: number;
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  caption: string;
  status: StepStatus;
  tone: (typeof pipelineTone)[keyof typeof pipelineTone];
}) => {
  const isIdle = status === 'idle';
  const isCurrent = status === 'current';
  const isDone = status === 'done';

  return (
    <li>
      <article
        aria-current={isCurrent ? 'step' : undefined}
        className={cn(
          'flex items-start gap-3 rounded-xl border-2 p-3',
          'transition-all duration-200',
          isIdle && cn(idleAccent.border, 'bg-white dark:bg-[var(--term-bg)]'),
          isCurrent &&
            cn(
              tone.borderStrong,
              tone.bg,
              'shadow-[0_3px_0_var(--term-border)] motion-safe:-translate-y-0.5',
            ),
          isDone &&
            'border-emerald-300/80 bg-emerald-50/40 dark:border-emerald-700/70 dark:bg-emerald-950/20',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border-2',
            isIdle && cn(idleAccent.iconChip, 'border-slate-200 dark:border-slate-700'),
            isCurrent && cn(tone.solidBg, 'text-white border-transparent'),
            isDone && 'border-emerald-500 bg-emerald-500 text-white dark:bg-emerald-500',
          )}
        >
          {isDone ? (
            <CheckCircleIcon className="h-4 w-4" />
          ) : isCurrent ? (
            <Icon className="h-4 w-4" />
          ) : (
            <CircleIcon className="h-3 w-3" />
          )}
        </span>

        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                'inline-flex items-center rounded-md px-1.5 py-0.5 font-mono text-[10px] font-bold tabular-nums',
                isIdle && idleAccent.iconChip + ' border',
                isCurrent && tone.chip + ' border',
                isDone &&
                  'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70 border',
              )}
            >
              {String(index).padStart(2, '0')}
            </span>
            <h3
              className={cn(
                'text-xsm sm:text-sm font-bold break-keep',
                isIdle && idleAccent.text,
                isCurrent && tone.text,
                isDone && 'text-emerald-700 dark:text-emerald-200',
              )}
            >
              {title}
            </h3>
          </div>
          <p
            className={cn(
              'mt-0.5 text-xxsm leading-relaxed break-keep',
              isIdle ? idleAccent.text : 'text-[var(--term-muted)]',
            )}
          >
            {caption}
          </p>
        </div>
      </article>
    </li>
  );
};

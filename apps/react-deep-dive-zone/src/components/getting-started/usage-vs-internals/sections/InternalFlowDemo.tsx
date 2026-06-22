'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { UsageVsInternalsContent } from '../content';
import { AtomIcon, LightbulbIcon } from '../icons';
import { formatInline } from '../utils/inlineCode';

type Props = { content: UsageVsInternalsContent['demo'] };

const STEP_INTERVAL_MS = 480;

const prefersReducedMotion = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    document.documentElement.dataset.motion === 'reduce'
  );
};

export const InternalFlowDemo = ({ content }: Props) => {
  const totalSteps = content.progress.steps.length;
  const [count, setCount] = useState(0);
  const [activeStep, setActiveStep] = useState<number>(-1);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((id) => clearTimeout(id));
    timersRef.current = [];
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  const startFlow = useCallback(() => {
    clearTimers();
    setCount((c) => c + 1);

    if (prefersReducedMotion()) {
      setActiveStep(totalSteps - 1);
      return;
    }

    setActiveStep(0);
    for (let i = 1; i < totalSteps; i += 1) {
      const id = setTimeout(() => setActiveStep(i), STEP_INTERVAL_MS * i);
      timersRef.current.push(id);
    }
  }, [clearTimers, totalSteps]);

  return (
    <section id="section-demo" aria-labelledby="heading-demo" className="space-y-lg">
      <SectionHeader
        id="demo"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<AtomIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg items-stretch">
        {/* 좌: Counter 데모 */}
        <CounterDemoCard
          title={content.counter.title}
          count={count}
          buttonLabel={content.counter.button}
          hint={content.counter.hint}
          onClick={startFlow}
        />

        {/* 우: 단계 진행 패널 */}
        <ProgressCard
          title={content.progress.title}
          autoPill={content.progress.autoPill}
          steps={content.progress.steps}
          activeStep={activeStep}
        />
      </div>
    </section>
  );
};

type CounterDemoProps = {
  title: string;
  count: number;
  buttonLabel: string;
  hint: string;
  onClick: () => void;
};

const CounterDemoCard = ({ title, count, buttonLabel, hint, onClick }: CounterDemoProps) => (
  <article className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-lg shadow-[0_2px_0_var(--term-border)]">
    <header className="flex items-center justify-between">
      <h3 className="text-md sm:text-lg font-bold text-[var(--term-fg)]">{title}</h3>
      <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-mono">
        useState(0)
      </span>
    </header>

    {/* 큰 카운트 표시 */}
    <div className="flex items-center justify-center py-md">
      <output
        aria-live="polite"
        aria-atomic="true"
        className="text-[5rem] sm:text-[6rem] font-bold leading-none tabular-nums text-[var(--term-fg)] tracking-tight"
      >
        {count}
      </output>
    </div>

    <button
      type="button"
      onClick={onClick}
      className={cn(
        'w-full inline-flex items-center justify-center gap-2 px-md py-3 rounded-md',
        'bg-slate-900 text-slate-50 border border-transparent dark:border-slate-600 dark:bg-slate-800',
        'text-sm font-bold transition-colors hover:bg-slate-800 dark:hover:bg-slate-700',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {buttonLabel}
    </button>

    <div className="flex items-start gap-sm pt-sm border-t border-dashed border-[var(--term-border)]">
      <span className="text-amber-500 dark:text-amber-300 shrink-0 mt-0.5" aria-hidden="true">
        <LightbulbIcon className="h-4 w-4" />
      </span>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{hint}</p>
    </div>
  </article>
);

type ProgressProps = {
  title: string;
  autoPill: string;
  steps: { num: string; title: string; body: string }[];
  activeStep: number;
};

const ProgressCard = ({ title, autoPill, steps, activeStep }: ProgressProps) => {
  return (
    <article className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-lg shadow-[0_2px_0_var(--term-border)]">
      <header className="flex items-center justify-between gap-sm">
        <h3 className="text-md sm:text-lg font-bold text-[var(--term-fg)]">{title}</h3>
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)] text-[10px] font-bold">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--term-accent)] animate-pulse"
            aria-hidden="true"
          />
          {autoPill}
        </span>
      </header>

      <ol className="flex flex-col gap-1.5">
        {steps.map((step, idx) => {
          const status: 'active' | 'done' | 'idle' =
            activeStep === idx ? 'active' : activeStep > idx ? 'done' : 'idle';
          return (
            <li key={step.num}>
              <div
                aria-current={status === 'active' ? 'step' : undefined}
                className={cn(
                  'flex items-start gap-sm p-sm rounded-md border transition-colors',
                  status === 'active' && 'border-[var(--term-accent)] bg-[var(--term-surface)]',
                  status === 'done' && 'border-[var(--term-border)] bg-[var(--term-surface)]',
                  status === 'idle' && 'border-[var(--term-border)] bg-[var(--term-bg)]',
                )}
              >
                <span
                  className={cn(
                    'inline-flex shrink-0 items-center justify-center w-7 h-7 rounded-full text-xxsm font-bold tabular-nums',
                    status === 'active' &&
                      'bg-[var(--term-surface)] border border-[var(--term-accent)] text-[var(--term-accent)]',
                    status === 'done' && 'bg-emerald-500/90 text-white dark:bg-emerald-500/80',
                    status === 'idle' &&
                      'bg-[var(--term-surface)] text-[var(--term-muted)] border border-[var(--term-border)]',
                  )}
                  aria-hidden="true"
                >
                  {status === 'done' ? '✓' : step.num}
                </span>
                <div className="min-w-0 flex flex-col gap-0.5 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h4
                      className={cn(
                        'text-xsm sm:text-sm font-bold leading-tight',
                        status === 'active'
                          ? 'text-[var(--term-accent)]'
                          : status === 'done'
                            ? 'text-[var(--term-fg)]'
                            : 'text-[var(--term-muted)]',
                      )}
                    >
                      {step.title}
                    </h4>
                    {status === 'active' && (
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full border border-[var(--term-border)] text-[var(--term-accent)] text-[9px] font-bold uppercase tracking-wider">
                        active
                      </span>
                    )}
                    {status === 'done' && (
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-[9px] font-bold uppercase tracking-wider">
                        done
                      </span>
                    )}
                  </div>
                  <p
                    className={cn(
                      'text-[11px] sm:text-xsm leading-relaxed break-keep',
                      status === 'idle' ? 'text-[var(--term-dim)]' : 'text-[var(--term-muted)]',
                    )}
                  >
                    {formatInline(step.body)}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </article>
  );
};

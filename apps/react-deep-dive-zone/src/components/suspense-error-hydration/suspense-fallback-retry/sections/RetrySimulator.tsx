'use client';

import { useState } from 'react';

import { cx } from '@berrypjh/react-ui';
import {
  Atom,
  CheckCircle2,
  Eye,
  Loader,
  PauseCircle,
  RefreshCcw,
  ShieldCheck,
} from 'lucide-react';

import type { SimulatorStep, SuspenseFallbackRetryContent } from '../content';

import { SectionHeader } from './_SectionHeader';

type Props = { content: SuspenseFallbackRetryContent['simulator'] };

const previewByKind = (kind: SimulatorStep['uiPreview']) => {
  switch (kind) {
    case 'spinner':
      return {
        className:
          'border-violet-200 bg-violet-50/70 dark:border-violet-800/60 dark:bg-violet-950/30',
        labelClass: 'text-violet-700 dark:text-violet-200',
        icon: <Loader className="h-6 w-6 motion-safe:animate-spin" aria-hidden="true" />,
        title: '<Spinner />',
        body: 'Fallback tree 표시 중',
      };
    case 'profile':
      return {
        className:
          'border-emerald-200 bg-emerald-50/70 dark:border-emerald-800/60 dark:bg-emerald-950/30',
        labelClass: 'text-emerald-700 dark:text-emerald-200',
        icon: <Atom className="h-6 w-6" aria-hidden="true" />,
        title: '<Profile />',
        body: 'Primary tree 정상 렌더',
      };
    case 'loading':
      return {
        className:
          'border-violet-200 bg-violet-50/70 dark:border-violet-800/60 dark:bg-violet-950/30',
        labelClass: 'text-violet-700 dark:text-violet-200',
        icon: <Loader className="h-6 w-6 motion-safe:animate-spin" aria-hidden="true" />,
        title: 'fallback 유지',
        body: 'retry 큐 동작 중',
      };
    case 'capture':
      return {
        className: 'border-teal-200 bg-teal-50/70 dark:border-teal-800/60 dark:bg-teal-950/30',
        labelClass: 'text-teal-700 dark:text-teal-200',
        icon: <ShieldCheck className="h-6 w-6" aria-hidden="true" />,
        title: 'capture 표시됨',
        body: 'ShouldCapture: true',
      };
    case 'pending':
      return {
        className: 'border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/40',
        labelClass: 'text-slate-700 dark:text-slate-200',
        icon: <PauseCircle className="h-6 w-6" aria-hidden="true" />,
        title: 'mid-render',
        body: 'use(Promise) throw',
      };
    case 'ready':
      return {
        className:
          'border-emerald-200 bg-emerald-50/70 dark:border-emerald-800/60 dark:bg-emerald-950/30',
        labelClass: 'text-emerald-700 dark:text-emerald-200',
        icon: <RefreshCcw className="h-6 w-6" aria-hidden="true" />,
        title: 'retry 실행',
        body: 'render scheduled',
      };
  }
};

export const RetrySimulator = ({ content }: Props) => {
  const [activeIndex, setActiveIndex] = useState(2); // start with spinner showing
  const active = content.steps[activeIndex];
  const preview = previewByKind(active.uiPreview);
  const isResolved = active.promiseStatus !== 'pending';

  return (
    <section aria-labelledby="simulator-heading" className="flex flex-col gap-md">
      <SectionHeader id="simulator-heading" number={content.number} title={content.title} />

      <div
        className={cx(
          'grid grid-cols-1 gap-md rounded-3xl border-2 p-md sm:p-lg',
          'lg:grid-cols-[minmax(0,3fr)_minmax(0,7fr)]',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* LEFT: Profile status */}
        <article
          aria-live="polite"
          className={cx(
            'flex flex-col gap-3 rounded-2xl border-2 p-md',
            'border-slate-200 bg-slate-50/50 dark:border-slate-700 dark:bg-slate-900/30',
          )}
        >
          <header className="flex items-center gap-2">
            <Atom aria-hidden="true" className="h-4 w-4 text-blue-600 dark:text-blue-300" />
            <h3 className="text-sm font-bold text-[var(--term-fg)]">{content.leftTitle}</h3>
          </header>

          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
              promise
            </span>
            <code className="rounded bg-slate-950 px-2 py-1 text-[11px] font-mono font-bold text-sky-300 inline-block w-fit">
              {content.promiseLabel}
            </code>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
              {content.statusLabel}
            </span>
            <span
              className={cx(
                'inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-mono font-bold',
                isResolved
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-200'
                  : 'border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/40 dark:text-violet-200',
              )}
            >
              <span
                aria-hidden="true"
                className={cx(
                  'block h-1.5 w-1.5 rounded-full',
                  isResolved ? 'bg-emerald-500' : 'bg-violet-500',
                )}
              />
              {active.promiseStatus}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
              {content.uiLabel}
            </span>
            <p className="text-xsm text-[var(--term-fg)] break-keep">{active.uiStatus}</p>
          </div>

          <div
            className={cx(
              'mt-2 flex flex-col items-center gap-2 rounded-xl border-2 p-3',
              preview.className,
            )}
          >
            <span aria-hidden="true" className={preview.labelClass}>
              {preview.icon}
            </span>
            <span className={cx('font-mono text-[11px] font-bold', preview.labelClass)}>
              {preview.title}
            </span>
            <span className="text-[10px] text-[var(--term-muted)] break-keep text-center">
              {preview.body}
            </span>
          </div>
        </article>

        {/* RIGHT: Timeline */}
        <article className="flex flex-col gap-md">
          <header className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Eye aria-hidden="true" className="h-4 w-4 text-blue-600 dark:text-blue-300" />
              <h3 className="text-sm font-bold text-[var(--term-fg)]">{content.timelineTitle}</h3>
            </div>
            <span className="text-[11px] text-[var(--term-muted)] break-keep">
              {content.timelineSubtitle}
            </span>
          </header>

          {/* 6 step buttons */}
          <ol className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {content.steps.map((step, i) => {
              const isActive = i === activeIndex;
              return (
                <li key={step.number}>
                  <button
                    type="button"
                    aria-pressed={isActive}
                    aria-current={isActive ? 'step' : undefined}
                    onClick={() => setActiveIndex(i)}
                    className={cx(
                      'w-full text-left rounded-xl border-2 p-2.5 h-full transition-all',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                      isActive
                        ? 'border-blue-400 bg-blue-50 shadow-[0_2px_0_rgba(59,130,246,0.2)] dark:border-blue-500 dark:bg-blue-950/40'
                        : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-[var(--term-bg)] dark:hover:border-slate-600',
                    )}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span
                        aria-hidden="true"
                        className={cx(
                          'inline-flex h-5 w-5 items-center justify-center rounded-full font-mono text-[10px] font-bold tabular-nums text-white',
                          isActive
                            ? 'bg-blue-600 dark:bg-blue-500'
                            : 'bg-slate-400 dark:bg-slate-600',
                        )}
                      >
                        {step.number}
                      </span>
                      {isActive && (
                        <CheckCircle2
                          aria-hidden="true"
                          className="h-3.5 w-3.5 text-blue-600 dark:text-blue-300"
                        />
                      )}
                    </div>
                    <span
                      className={cx(
                        'block text-xsm font-bold break-keep',
                        isActive ? 'text-blue-700 dark:text-blue-200' : 'text-[var(--term-fg)]',
                      )}
                    >
                      {step.title}
                    </span>
                    <span className="block mt-1 text-[10.5px] text-[var(--term-muted)] break-keep">
                      {step.description}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* progress rail */}
          <div className="flex flex-col gap-1.5">
            <div className="relative h-2 w-full rounded-full bg-slate-200/70 dark:bg-slate-700/40 overflow-hidden">
              <span
                aria-hidden="true"
                className={cx(
                  'absolute left-0 top-0 h-full rounded-full transition-all',
                  'bg-gradient-to-r from-violet-500 via-teal-500 to-emerald-500',
                )}
                style={{ width: `${((activeIndex + 1) / content.steps.length) * 100}%` }}
              />
            </div>
            <ol className="grid grid-cols-3 gap-1 sm:grid-cols-6 text-center">
              {content.railLabels.map((label, i) => (
                <li
                  key={label}
                  className={cx(
                    'text-[10px] font-mono font-bold uppercase tracking-wider break-keep',
                    i === activeIndex
                      ? 'text-blue-600 dark:text-blue-300'
                      : 'text-[var(--term-muted)]',
                  )}
                >
                  <span aria-hidden="true">·</span> {label}
                </li>
              ))}
            </ol>
          </div>
          <p className="sr-only">
            현재 단계: {activeIndex + 1} / {content.steps.length} — {active.title}
          </p>
        </article>
      </div>
    </section>
  );
};

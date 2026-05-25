'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { BranchKind, RecoveryOptionKey, WhyFailableRenderContent } from '../content';
import {
  CheckCircleIcon,
  FileCodeIcon,
  HourglassIcon,
  PlugZapIcon,
  TriangleAlertIcon,
} from '../icons';
import { branchAccent } from '../tone';

type Props = { content: WhyFailableRenderContent['selector'] };

const optionIcon: Record<RecoveryOptionKey, React.ComponentType<{ className?: string }>> = {
  promise: HourglassIcon,
  error: TriangleAlertIcon,
  mismatch: PlugZapIcon,
};

const optionToBranch: Record<RecoveryOptionKey, BranchKind> = {
  promise: 'suspense',
  error: 'error',
  mismatch: 'hydration',
};

export const RecoveryPathSelector = ({ content }: Props) => {
  const [selected, setSelected] = useState<RecoveryOptionKey>('promise');
  const result = content.results[selected];
  const accent = branchAccent[result.kind];

  return (
    <section aria-labelledby="selector-heading" className="flex flex-col gap-md">
      <header className="flex flex-col gap-1">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
          {content.eyebrow}
        </span>
        <h2
          id="selector-heading"
          className="text-xl sm:text-xxl font-bold text-[var(--term-fg)] break-keep"
        >
          {content.title}
        </h2>
        <p className="text-xsm sm:text-sm text-[var(--term-muted)] break-keep">
          {content.description}
        </p>
      </header>

      <div
        className={cn(
          'grid grid-cols-1 gap-md rounded-3xl border-2 p-md sm:p-lg',
          'lg:grid-cols-[minmax(0,3fr)_minmax(0,7fr)]',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* Left: option list */}
        <ul role="radiogroup" aria-label={content.title} className="flex flex-col gap-2">
          {content.options.map((opt) => {
            const Icon = optionIcon[opt.key];
            const optAccent = branchAccent[optionToBranch[opt.key]];
            const isActive = selected === opt.key;
            return (
              <li key={opt.key}>
                <button
                  type="button"
                  role="radio"
                  aria-checked={isActive}
                  onClick={() => setSelected(opt.key)}
                  className={cn(
                    'w-full text-left rounded-2xl border-2 p-md transition-all',
                    'flex items-start gap-3',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                    isActive
                      ? cn(optAccent.border, optAccent.bg, 'shadow-[0_2px_0_var(--term-border)]')
                      : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-[var(--term-bg)] dark:hover:border-slate-600',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border',
                      optAccent.chip,
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col gap-0.5 min-w-0">
                    <span
                      className={cn(
                        'text-sm font-bold break-keep',
                        isActive ? optAccent.text : 'text-[var(--term-fg)]',
                      )}
                    >
                      {opt.label}
                    </span>
                    <span className="text-xsm text-[var(--term-muted)] break-keep">
                      {opt.description}
                    </span>
                  </span>
                  {isActive && (
                    <CheckCircleIcon
                      aria-hidden="true"
                      className={cn('h-5 w-5 shrink-0 ml-auto', optAccent.text)}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right: result card */}
        <article
          aria-live="polite"
          className={cn(
            'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
            accent.border,
            accent.bg,
            'transition-colors',
          )}
        >
          <header className="flex flex-wrap items-center gap-2">
            <span
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
                'text-[10px] font-mono font-bold uppercase tracking-wider',
                accent.chip,
              )}
            >
              {content.selectedBadge}: {result.selectedLabel}
            </span>
            <span
              className={cn(
                'inline-flex items-center rounded-full border px-3 py-1',
                'text-[10px] font-mono font-bold uppercase tracking-wider',
                'border-slate-200 bg-white text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300',
              )}
            >
              {content.resultBadge}
            </span>
          </header>

          <h3 className={cn('text-lg sm:text-xl font-bold break-keep', accent.text)}>
            {result.resultTitle}
          </h3>
          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
            {result.description}
          </p>

          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
              {content.timelineLabel}
            </span>
            <ol className="flex flex-col gap-1.5">
              {result.timeline.map((step, i) => (
                <li
                  key={step}
                  className={cn(
                    'flex items-start gap-2 rounded-lg border bg-white px-3 py-2',
                    'dark:bg-[var(--term-bg)]',
                    accent.border,
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                      'text-[10px] font-mono font-bold tabular-nums text-white',
                      result.kind === 'suspense' && 'bg-blue-500',
                      result.kind === 'error' && 'bg-rose-500',
                      result.kind === 'hydration' && 'bg-emerald-500',
                    )}
                  >
                    {i + 1}
                  </span>
                  <span className="text-xsm font-mono text-[var(--term-fg)] break-keep">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.relatedFilesLabel}
              </span>
              <ul className="flex flex-wrap gap-1.5">
                {result.relatedFiles.map((file) => (
                  <li
                    key={file}
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1',
                      'text-[11px] font-mono font-bold bg-white dark:bg-[var(--term-bg)]',
                      accent.border,
                      accent.text,
                    )}
                  >
                    <FileCodeIcon className="h-3 w-3" aria-hidden="true" />
                    {file}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.experienceLabel}
              </span>
              <span
                className={cn(
                  'inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1',
                  'text-[11px] font-bold bg-white dark:bg-[var(--term-bg)]',
                  accent.border,
                  accent.text,
                )}
              >
                {result.experience}
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { React19ErrorReportingContent, RouterOption } from '../content';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  LineChartIcon,
  RefreshCcwIcon,
  ShieldAlertIcon,
  ShieldCheckIcon,
  ZapIcon,
} from '../icons';
import type { CallbackKind, LogLevel } from '../tone';
import { callbackAccent, logLevelBadge } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: React19ErrorReportingContent['router'] };

const optionIcon: Record<RouterOption['key'], React.ComponentType<{ className?: string }>> = {
  boundary: ShieldCheckIcon,
  fatal: ShieldAlertIcon,
  hydration: RefreshCcwIcon,
  monitoring: LineChartIcon,
};

const optionTone: Record<RouterOption['key'], { selected: string; text: string; icon: string }> = {
  boundary: {
    selected: 'border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-blue-950/30',
    text: 'text-blue-700 dark:text-blue-200',
    icon: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
  },
  fatal: {
    selected: 'border-rose-400 bg-rose-50 dark:border-rose-500 dark:bg-rose-950/30',
    text: 'text-rose-700 dark:text-rose-200',
    icon: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
  },
  hydration: {
    selected: 'border-teal-400 bg-teal-50 dark:border-teal-500 dark:bg-teal-950/30',
    text: 'text-teal-700 dark:text-teal-200',
    icon: 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
  },
  monitoring: {
    selected: 'border-violet-400 bg-violet-50 dark:border-violet-500 dark:bg-violet-950/30',
    text: 'text-violet-700 dark:text-violet-200',
    icon: 'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
  },
};

const resultAccentFor = (kind: CallbackKind | 'mixed') => {
  if (kind === 'mixed') {
    return {
      border:
        'border-violet-300/80 bg-violet-50/70 dark:border-violet-700/70 dark:bg-violet-950/30',
      text: 'text-violet-700 dark:text-violet-300',
      chip: 'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
      solidBg: 'bg-violet-600 dark:bg-violet-500',
    };
  }
  const a = callbackAccent[kind];
  return {
    border: cn(a.border, a.bg),
    text: a.text,
    chip: a.chip,
    solidBg: a.solidBg,
  };
};

const renderLogPill = (level: LogLevel | 'mixed', logging: string) => {
  if (level === 'mixed') {
    return (
      <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/40 dark:text-violet-200">
        {logging}
      </span>
    );
  }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider',
        logLevelBadge[level],
      )}
    >
      {logging}
    </span>
  );
};

export const ErrorRouterSection = ({ content }: Props) => {
  const [selected, setSelected] = useState<RouterOption['key']>('boundary');
  const result = content.results[selected];
  const accent = resultAccentFor(result.callbackKind);

  return (
    <section aria-labelledby="router-heading" className="flex flex-col gap-md">
      <SectionHeader id="router-heading" number={content.number} title={content.title} />

      <div
        className={cn(
          'grid grid-cols-1 gap-md rounded-3xl border-2 p-md sm:p-lg',
          'lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* options */}
        <ul aria-label={content.title} className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {content.options.map((opt) => {
            const tone = optionTone[opt.key];
            const Icon = optionIcon[opt.key];
            const isActive = selected === opt.key;
            return (
              <li key={opt.key}>
                <button
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSelected(opt.key)}
                  className={cn(
                    'w-full text-left rounded-2xl border-2 p-md h-full transition-all',
                    'flex items-start gap-2.5',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                    isActive
                      ? tone.selected
                      : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-[var(--term-bg)] dark:hover:border-slate-600',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
                      tone.icon,
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                    <span
                      className={cn(
                        'text-sm font-bold break-keep',
                        isActive ? tone.text : 'text-[var(--term-fg)]',
                      )}
                    >
                      {opt.title}
                    </span>
                    <span className="text-[11px] text-[var(--term-muted)] break-keep">
                      {opt.description}
                    </span>
                  </div>
                  {isActive && (
                    <CheckCircleIcon
                      aria-hidden="true"
                      className={cn('h-4 w-4 shrink-0', tone.text)}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* result */}
        <article
          aria-live="polite"
          className={cn(
            'flex flex-col gap-3 rounded-2xl border-2 p-md transition-colors',
            accent.border,
          )}
        >
          <header className="flex items-center gap-2">
            <ZapIcon aria-hidden="true" className={cn('h-4 w-4', accent.text)} />
            <span
              className={cn(
                'text-[10px] font-mono font-bold uppercase tracking-wider',
                accent.text,
              )}
            >
              {content.labels.callback}
            </span>
          </header>
          <code
            className={cn(
              'inline-flex w-fit items-center rounded-lg border px-2 py-1 text-xsm font-mono font-bold break-all',
              accent.chip,
            )}
          >
            {result.callback}
          </code>

          <dl className="grid grid-cols-1 gap-2.5">
            <div>
              <dt className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.uiResult}
              </dt>
              <dd className="mt-0.5 inline-flex items-center gap-1.5 text-xsm font-bold text-[var(--term-fg)] break-keep">
                <ArrowRightIcon className={cn('h-3.5 w-3.5', accent.text)} aria-hidden="true" />
                {result.uiResult}
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.logging}
              </dt>
              <dd className="mt-0.5">{renderLogPill(result.logLevel, result.logging)}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.explain}
              </dt>
              <dd className="mt-0.5 text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                {result.body}
              </dd>
            </div>
          </dl>
        </article>
      </div>
    </section>
  );
};

'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { PromiseVsErrorSplitContent } from '../content';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  HourglassIcon,
  SparklesIcon,
  TriangleAlertIcon,
} from '../icons';
import type { Path } from '../tone';
import { pathAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: PromiseVsErrorSplitContent['classifier'] };

const pathIcon: Record<Path, React.ComponentType<{ className?: string }>> = {
  thenable: HourglassIcon,
  error: TriangleAlertIcon,
};

export const ClassifierSection = ({ content }: Props) => {
  const [selected, setSelected] = useState<Path>('thenable');
  const result = content.results[selected];
  const accent = pathAccent[selected];

  return (
    <section aria-labelledby="classifier-heading" className="flex flex-col gap-md">
      <SectionHeader
        id="classifier-heading"
        number={content.number}
        title={content.title}
        subtitle={content.subtitle}
      />

      <div
        className={cn(
          'grid grid-cols-1 gap-md rounded-3xl border-2 p-md sm:p-lg',
          'lg:grid-cols-[minmax(0,4fr)_auto_minmax(0,5fr)_minmax(0,3fr)] items-stretch',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* LEFT: selector */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
            {content.selectorLabel}
          </span>
          <ul aria-label={content.selectorLabel} className="flex flex-col gap-2">
            {content.options.map((opt) => {
              const optAccent = pathAccent[opt.path];
              const Icon = pathIcon[opt.path];
              const isActive = selected === opt.path;
              return (
                <li key={opt.path}>
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setSelected(opt.path)}
                    className={cn(
                      'w-full text-left rounded-xl border-2 p-3 transition-all',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                      isActive
                        ? cn(optAccent.border, optAccent.bg)
                        : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-[var(--term-bg)] dark:hover:border-slate-600',
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className={cn(
                          'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border',
                          optAccent.iconChip,
                        )}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <code
                        className={cn(
                          'flex-1 rounded bg-slate-950 px-2 py-1 text-[11px] font-mono font-bold text-slate-100 break-all',
                        )}
                      >
                        {opt.code}
                      </code>
                      {isActive && (
                        <CheckCircleIcon
                          aria-hidden="true"
                          className={cn('h-4 w-4 shrink-0', optAccent.text)}
                        />
                      )}
                    </div>
                    <p className="mt-1.5 ml-9 text-[11px] text-[var(--term-muted)] break-keep">
                      {opt.comment}
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* arrow */}
        <div className="flex items-center justify-center">
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-200 bg-white text-blue-600 dark:border-blue-700 dark:bg-slate-900 dark:text-blue-300"
          >
            <ArrowRightIcon className="h-4 w-4 lg:rotate-0 rotate-90" />
          </span>
        </div>

        {/* CENTER: result */}
        <article
          aria-live="polite"
          className={cn(
            'flex flex-col gap-3 rounded-2xl border-2 p-md transition-colors',
            accent.border,
            accent.bg,
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <span
              className={cn(
                'inline-flex items-center rounded-full border px-3 py-1',
                'text-[10px] font-mono font-bold uppercase tracking-wider',
                accent.chip,
              )}
            >
              {content.resultLabel}
            </span>
          </header>

          <dl className="grid grid-cols-1 gap-2.5">
            <div>
              <dt className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.classificationLabel}
              </dt>
              <dd className={cn('text-lg font-bold font-mono break-keep', accent.text)}>
                {result.classification}
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.nextRouteLabel}
              </dt>
              <dd
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-lg border bg-white px-2 py-1 mt-0.5',
                  'dark:bg-[var(--term-bg)]',
                  accent.border,
                )}
              >
                <ArrowRightIcon className={cn('h-3.5 w-3.5', accent.text)} aria-hidden="true" />
                <span className={cn('text-xsm font-bold', accent.text)}>{result.nextRoute}</span>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.descriptionLabel}
              </dt>
              <dd className="mt-1 text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                {result.description}
              </dd>
            </div>
          </dl>
        </article>

        {/* RIGHT: help */}
        <aside
          className={cn(
            'flex flex-col gap-2 rounded-2xl border-2 border-dashed p-md',
            'border-blue-300 bg-blue-50/50 dark:border-blue-700 dark:bg-blue-950/20',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
            >
              <SparklesIcon className="h-3.5 w-3.5" />
            </span>
            <h3 className="text-sm font-bold text-blue-700 dark:text-blue-200">
              {content.help.title}
            </h3>
          </header>
          <ol className="flex flex-col gap-1.5">
            {content.help.items.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xsm text-[var(--term-fg)] break-keep"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-[10px] font-mono font-bold tabular-nums dark:bg-blue-500"
                >
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
};

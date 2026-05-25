'use client';

import { Fragment, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { RefAsPropElementShapeContent } from '../content';
import {
  ArrowDownIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  FilterIcon,
  SparklesIcon,
} from '../icons';
import { pathTone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: RefAsPropElementShapeContent['pathInteractor'] };

export const RefPathComparisonInteractor = ({ content }: Props) => {
  const [active, setActive] = useState<'react18' | 'react19'>(content.defaultPath);
  const current = content.paths.find((p) => p.path === active) ?? content.paths[0];
  if (!current) return null;
  const tone = pathTone[current.path];

  return (
    <section aria-labelledby="path-interactor-heading" className="flex flex-col">
      <SectionHeader
        id="path-interactor-heading"
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
        <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_3fr)_minmax(0,_6fr)_minmax(0,_3fr)] lg:gap-lg items-stretch">
          {/* LEFT: version tabs */}
          <div className="flex flex-col gap-sm">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
              >
                <FilterIcon className="h-3.5 w-3.5" />
              </span>
              <h3 className="text-sm font-bold text-[var(--term-fg)]">{content.buttonsLabel}</h3>
            </div>

            <div role="tablist" aria-label={content.buttonsLabel} className="flex flex-col gap-2">
              {content.paths.map((p) => {
                const isActive = p.path === active;
                const t = pathTone[p.path];
                return (
                  <button
                    key={p.path}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(p.path as 'react18' | 'react19')}
                    className={cn(
                      'group inline-flex items-center justify-between gap-2 rounded-xl border-2 px-3 py-2.5 text-left',
                      'transition-all motion-safe:hover:-translate-y-0.5',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                      isActive
                        ? cn(
                            'text-white shadow-[0_3px_0_var(--term-border)]',
                            t.solidBg,
                            'border-transparent',
                          )
                        : cn(
                            'bg-white text-[var(--term-fg)] dark:bg-[var(--term-bg)]',
                            'border-slate-200 dark:border-slate-700',
                            'hover:border-blue-300 dark:hover:border-blue-700/70',
                          ),
                    )}
                  >
                    <span className="flex items-center gap-2 min-w-0">
                      <span
                        aria-hidden="true"
                        className={cn(
                          'block h-2 w-2 rounded-full',
                          isActive ? 'bg-white/90' : t.dot,
                        )}
                      />
                      <span className="font-mono text-xsm font-bold break-keep">
                        {p.buttonLabel}
                      </span>
                    </span>
                    <ChevronRightIcon
                      aria-hidden="true"
                      className={cn(
                        'h-3.5 w-3.5 shrink-0 transition-transform',
                        isActive
                          ? 'translate-x-0.5'
                          : 'group-hover:translate-x-0.5 motion-reduce:transform-none',
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* CENTER: path flow diagram (vertical steps) */}
          <div className="flex flex-col gap-2">
            <p
              className={cn('text-[10px] font-mono font-bold uppercase tracking-wider', tone.text)}
            >
              {current.label}
            </p>
            <ol className="flex flex-col gap-2">
              {current.steps.map((step, idx) => {
                const Icon = iconRegistry[step.iconKey];
                const isLast = idx === current.steps.length - 1;
                return (
                  <Fragment key={step.title}>
                    <li>
                      <article
                        className={cn(
                          'grid grid-cols-[auto_minmax(0,_1fr)_auto] items-center gap-2 rounded-xl border-2 px-3 py-2',
                          'bg-white dark:bg-[var(--term-bg)]',
                          tone.border,
                          'shadow-[0_1px_0_var(--term-border)]',
                          'transition-all motion-safe:hover:-translate-y-0.5',
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            'inline-flex h-9 w-9 items-center justify-center rounded-lg border',
                            tone.iconChip,
                          )}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <div className="flex flex-col min-w-0">
                          <span className={cn('text-xsm font-bold break-keep', tone.text)}>
                            {step.title}
                          </span>
                          <span className="text-[10px] text-[var(--term-muted)] break-keep">
                            {step.caption}
                          </span>
                        </div>
                        <span
                          aria-hidden="true"
                          className={cn(
                            'inline-flex h-7 items-center px-1.5 rounded-md border font-mono text-[10px] font-bold tabular-nums',
                            tone.chip,
                          )}
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </article>
                    </li>
                    {!isLast && (
                      <li aria-hidden="true" className="flex justify-center">
                        <span
                          className={cn(
                            'inline-flex h-6 w-6 items-center justify-center rounded-full border',
                            tone.iconChip,
                          )}
                        >
                          <ArrowDownIcon className="h-3 w-3" />
                        </span>
                      </li>
                    )}
                  </Fragment>
                );
              })}
            </ol>
          </div>

          {/* RIGHT: React 19 benefits */}
          <article
            className={cn(
              'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
              'border-emerald-300/80 bg-emerald-50/30 dark:border-emerald-700/70 dark:bg-emerald-950/20',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-100 text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/60 dark:text-emerald-200"
              >
                <SparklesIcon className="h-4 w-4" />
              </span>
              <h3 className="text-sm font-bold text-emerald-700 dark:text-emerald-200 break-keep">
                {content.benefitsTitle}
              </h3>
            </header>

            <ul className="flex flex-col gap-1.5">
              {content.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
                >
                  <CheckCircleIcon
                    aria-hidden="true"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-300"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

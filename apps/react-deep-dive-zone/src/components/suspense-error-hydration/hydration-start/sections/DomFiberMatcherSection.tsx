'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { HydrationStartContent, MatchOption } from '../content';
import { ArrowLeftRightIcon, AtomIcon, CheckCircleIcon, GlobeIcon, PlayIcon } from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: HydrationStartContent['matcher'] };

const treeRowHighlightClass = (
  line: string,
  highlight: 'root' | 'button' | 'next',
  scope: 'dom' | 'fiber',
) => {
  const isRoot = line.toLowerCase().includes('root') || line.includes('HostRoot');
  const isButton = line.toLowerCase().includes('button') || line.includes('HostComponent');
  if (highlight === 'root' && isRoot) {
    return scope === 'dom'
      ? 'border-blue-400 bg-blue-50 text-blue-700 ring-2 ring-blue-300/50 dark:border-blue-500 dark:bg-blue-950/40 dark:text-blue-200'
      : 'border-teal-400 bg-teal-50 text-teal-700 ring-2 ring-teal-300/50 dark:border-teal-500 dark:bg-teal-950/40 dark:text-teal-200';
  }
  if (highlight === 'button' && isButton) {
    return scope === 'dom'
      ? 'border-blue-400 bg-blue-50 text-blue-700 ring-2 ring-blue-300/50 dark:border-blue-500 dark:bg-blue-950/40 dark:text-blue-200'
      : 'border-teal-400 bg-teal-50 text-teal-700 ring-2 ring-teal-300/50 dark:border-teal-500 dark:bg-teal-950/40 dark:text-teal-200';
  }
  if (highlight === 'next' && line.includes('...')) {
    return scope === 'dom'
      ? 'border-violet-400 bg-violet-50 text-violet-700 ring-2 ring-violet-300/50 dark:border-violet-500 dark:bg-violet-950/40 dark:text-violet-200'
      : 'border-violet-400 bg-violet-50 text-violet-700 ring-2 ring-violet-300/50 dark:border-violet-500 dark:bg-violet-950/40 dark:text-violet-200';
  }
  return scope === 'dom'
    ? 'border-blue-200 bg-white text-blue-700 dark:border-blue-800/60 dark:bg-[var(--term-bg)] dark:text-blue-200'
    : 'border-teal-200 bg-white text-teal-700 dark:border-teal-800/60 dark:bg-[var(--term-bg)] dark:text-teal-200';
};

export const DomFiberMatcherSection = ({ content }: Props) => {
  const [selected, setSelected] = useState<MatchOption['key']>('root');
  const result = content.results[selected];

  return (
    <section aria-labelledby="matcher-heading" className="flex flex-col gap-md">
      <SectionHeader id="matcher-heading" number={content.number} title={content.title} />

      <div
        className={cn(
          'rounded-3xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* DOM ↔ Fiber */}
        <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch">
          {/* DOM */}
          <article
            className={cn(
              'flex flex-col gap-2 rounded-2xl border-2 p-md',
              'border-blue-200/80 bg-blue-50/40 dark:border-blue-800/60 dark:bg-blue-950/20',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
              >
                <GlobeIcon className="h-3.5 w-3.5" />
              </span>
              <h3 className="text-xsm font-bold text-blue-700 dark:text-blue-200 break-keep">
                {content.domTitle}
              </h3>
            </header>
            <ol className="flex flex-col gap-1.5">
              {content.domTree.map((line) => (
                <li
                  key={line}
                  className={cn(
                    'inline-flex items-center rounded-lg border-2 px-2.5 py-1.5',
                    'font-mono text-[11px] font-bold break-keep transition-all',
                    treeRowHighlightClass(line, result.highlight, 'dom'),
                  )}
                >
                  {line}
                </li>
              ))}
            </ol>
          </article>

          {/* match center */}
          <div className="flex flex-col items-center justify-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-10 w-10 items-center justify-center rounded-full',
                'border-2 border-blue-300 bg-white text-blue-600',
                'dark:border-blue-700 dark:bg-slate-900 dark:text-blue-300',
                'shadow-[0_2px_0_rgba(59,130,246,0.2)]',
              )}
            >
              <ArrowLeftRightIcon className="h-4 w-4" />
            </span>
            <span className="text-[11px] font-mono font-bold text-blue-700 dark:text-blue-300 text-center">
              {content.matchLabel}
            </span>
          </div>

          {/* Fiber */}
          <article
            className={cn(
              'flex flex-col gap-2 rounded-2xl border-2 p-md',
              'border-teal-200/80 bg-teal-50/40 dark:border-teal-800/60 dark:bg-teal-950/20',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-teal-200 bg-teal-100 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/60 dark:text-teal-200"
              >
                <AtomIcon className="h-3.5 w-3.5" />
              </span>
              <h3 className="text-xsm font-bold text-teal-700 dark:text-teal-200 break-keep">
                {content.fiberTitle}
              </h3>
            </header>
            <ol className="flex flex-col gap-1.5">
              {content.fiberTree.map((line) => (
                <li
                  key={line}
                  className={cn(
                    'inline-flex items-center rounded-lg border-2 px-2.5 py-1.5',
                    'font-mono text-[11px] font-bold break-keep transition-all',
                    treeRowHighlightClass(line, result.highlight, 'fiber'),
                  )}
                >
                  {line}
                </li>
              ))}
            </ol>
          </article>
        </div>

        {/* checklist */}
        <ul className="mt-md flex flex-wrap items-center justify-center gap-2">
          {content.checklist.map((c) => (
            <li
              key={c}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
                'text-[11px] font-bold',
                'border-blue-200 bg-blue-50 text-blue-700',
                'dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-200',
              )}
            >
              <CheckCircleIcon className="h-3 w-3" aria-hidden="true" />
              {c}
            </li>
          ))}
        </ul>

        {/* options + result */}
        <div className="mt-md grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)]">
          {/* options */}
          <ul aria-label={content.title} className="flex flex-col gap-2">
            {content.options.map((opt) => {
              const isActive = selected === opt.key;
              return (
                <li key={opt.key}>
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setSelected(opt.key)}
                    className={cn(
                      'w-full text-left rounded-xl border-2 p-3 transition-all',
                      'flex items-center gap-2',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                      isActive
                        ? 'border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-blue-950/30'
                        : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-[var(--term-bg)] dark:hover:border-slate-600',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border',
                        isActive
                          ? 'border-blue-300 bg-blue-100 text-blue-700 dark:border-blue-700 dark:bg-blue-950/60 dark:text-blue-200'
                          : 'border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300',
                      )}
                    >
                      <PlayIcon className="h-3.5 w-3.5" />
                    </span>
                    <span
                      className={cn(
                        'text-xsm font-mono font-bold break-keep',
                        isActive ? 'text-blue-700 dark:text-blue-200' : 'text-[var(--term-fg)]',
                      )}
                    >
                      {opt.label}
                    </span>
                    {isActive && (
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="h-4 w-4 ml-auto text-blue-600 dark:text-blue-300"
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
              'flex flex-col gap-2 rounded-2xl border-2 p-md',
              'border-blue-200/80 bg-blue-50/40 dark:border-blue-800/60 dark:bg-blue-950/20',
            )}
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              {content.stepLabel}
            </span>
            <h3 className="text-md font-bold text-[var(--term-fg)] break-keep">{result.step}</h3>
            <div className="border-t border-blue-200/60 dark:border-blue-800/40 pt-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.descriptionLabel}
              </span>
              <p className="mt-1 text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                {result.description}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

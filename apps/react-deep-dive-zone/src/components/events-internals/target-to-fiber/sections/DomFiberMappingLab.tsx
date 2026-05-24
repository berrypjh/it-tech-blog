'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { LabTarget, TargetFiberContent } from '../content';
import { ArrowRightIcon, BoxesIcon, GlobeIcon, MousePointerClickIcon, TargetIcon } from '../icons';

type Props = { content: TargetFiberContent['lab'] };

const fiberNodeTone = (tone: 'root' | LabTarget, selected: LabTarget) => {
  if (tone === selected)
    return 'border-teal-400/90 bg-teal-100 text-teal-800 dark:border-teal-500/80 dark:bg-teal-950/60 dark:text-teal-100 shadow-[0_2px_0_var(--term-border)]';
  return 'border-[var(--term-border)] bg-white text-[var(--term-muted)] dark:bg-slate-950/40';
};

export const DomFiberMappingLab = ({ content }: Props) => {
  const [selected, setSelected] = useState<LabTarget>(content.defaultTarget);
  const result = content.results[selected];

  return (
    <section aria-labelledby="heading-lab">
      <NumberedSectionHeader
        id="lab"
        step={content.step}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<MousePointerClickIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
          'border-blue-200/70 bg-gradient-to-br from-blue-50/60 via-white to-teal-50/30',
          'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-md items-stretch">
          {/* DOM Tree (blue) */}
          <article
            className={cn(
              'flex flex-col gap-2 rounded-2xl border-2 p-md',
              'border-blue-300/80 bg-white dark:border-blue-700/70 dark:bg-slate-950/40',
              'shadow-[0_1px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white dark:bg-blue-500"
              >
                <GlobeIcon className="h-4 w-4" />
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                DOM Tree
              </span>
            </header>
            <pre className="overflow-x-auto rounded-lg border border-blue-200/70 bg-blue-50/40 px-3 py-2 font-mono text-[11px] sm:text-xsm leading-[1.7] text-blue-900 dark:border-blue-800/60 dark:bg-blue-950/30 dark:text-blue-100">
              <code className="whitespace-pre">{content.domTree}</code>
            </pre>
          </article>

          {/* Fiber Tree (teal) */}
          <article
            className={cn(
              'flex flex-col gap-2 rounded-2xl border-2 p-md',
              'border-teal-300/80 bg-white dark:border-teal-700/70 dark:bg-slate-950/40',
              'shadow-[0_1px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900"
              >
                <BoxesIcon className="h-4 w-4" />
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
                Fiber Tree
              </span>
            </header>
            <ul className="flex flex-col gap-1">
              {content.fiberTree.map((node) => (
                <li
                  key={node.label}
                  style={{ marginLeft: `${node.depth * 12}px` }}
                  className={cn(
                    'flex items-center gap-2 rounded-lg border-2 px-2.5 py-1.5 transition-colors',
                    'font-mono text-[11px] sm:text-xsm',
                    fiberNodeTone(node.tone, selected),
                  )}
                >
                  <span aria-hidden="true" className="opacity-60">
                    {node.depth === 0 ? '•' : '└─'}
                  </span>
                  <span className="break-all">{node.label}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Target selector */}
          <article
            className={cn(
              'flex flex-col gap-2 rounded-2xl border-2 p-md',
              'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_1px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900"
              >
                <TargetIcon className="h-4 w-4" />
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
                {content.selector.label}
              </span>
            </header>
            <div
              role="radiogroup"
              aria-label={content.selector.label}
              className="flex flex-col gap-2"
            >
              {content.selector.targets.map((target) => {
                const isSelected = target.value === selected;
                return (
                  <button
                    key={target.value}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => setSelected(target.value)}
                    className={cn(
                      'group inline-flex items-center justify-between gap-2 rounded-xl border-2 px-md py-2.5',
                      'font-mono text-xsm sm:text-sm font-bold transition-all',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                      'motion-safe:hover:-translate-y-0.5',
                      isSelected
                        ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-[0_3px_0_rgba(29,78,216,0.25)] dark:border-blue-500 dark:bg-blue-950/40 dark:text-blue-200'
                        : 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] hover:border-blue-300 hover:bg-blue-50/30 dark:hover:border-blue-700/70 dark:hover:bg-blue-950/20',
                    )}
                  >
                    <span className="flex items-center gap-1.5">
                      <span
                        aria-hidden="true"
                        className={cn(
                          'block h-1.5 w-1.5 rounded-full',
                          isSelected ? 'bg-blue-500 dark:bg-blue-300' : 'bg-[var(--term-dim)]',
                        )}
                      />
                      <span>{target.label}</span>
                    </span>
                    {isSelected && (
                      <span aria-hidden="true" className="text-blue-500 dark:text-blue-300">
                        <MousePointerClickIcon className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </article>
        </div>

        {/* Result row */}
        <article
          aria-live="polite"
          className={cn(
            'mt-md grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3',
            'rounded-2xl border-2 p-md',
            'border-blue-200/80 bg-white dark:border-blue-700/70 dark:bg-slate-950/40',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <div className="flex flex-col gap-1 rounded-xl border border-blue-200/70 bg-blue-50/60 px-md py-2 dark:border-blue-800/60 dark:bg-blue-950/30">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              {content.resultLabels.domTarget}
            </span>
            <code className="font-mono text-sm sm:text-md font-bold text-blue-700 dark:text-blue-200 break-all">
              {result.domLabel}
            </code>
          </div>
          <span
            aria-hidden="true"
            className="self-center inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-teal-500 text-white shadow-[0_2px_0_rgba(13,148,136,0.35)] sm:rotate-0 rotate-90"
          >
            <ArrowRightIcon className="h-4 w-4" strokeWidth={2.4} />
          </span>
          <div className="flex flex-col gap-1 rounded-xl border border-teal-200/70 bg-teal-50/60 px-md py-2 dark:border-teal-800/60 dark:bg-teal-950/30">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
              {content.resultLabels.matched}
            </span>
            <code className="font-mono text-sm sm:text-md font-bold text-teal-700 dark:text-teal-200 break-all">
              {result.fiberLabel}
            </code>
          </div>
        </article>
      </div>
    </section>
  );
};

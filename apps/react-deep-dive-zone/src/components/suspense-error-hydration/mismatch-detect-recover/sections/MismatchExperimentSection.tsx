'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { ExperimentKey, MismatchDetectRecoverContent } from '../content';
import { ArrowRightIcon, BracketsIcon, CheckCircleIcon, ClockIcon, TerminalIcon } from '../icons';
import { roleAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: MismatchDetectRecoverContent['experiment'] };

const optionIcon: Record<ExperimentKey, React.ComponentType<{ className?: string }>> = {
  text: ClockIcon,
  element: BracketsIcon,
};

const optionTone: Record<ExperimentKey, { selected: string; text: string; iconChip: string }> = {
  text: {
    selected: 'border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-blue-950/30',
    text: 'text-blue-700 dark:text-blue-200',
    iconChip:
      'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
  },
  element: {
    selected: 'border-violet-400 bg-violet-50 dark:border-violet-500 dark:bg-violet-950/30',
    text: 'text-violet-700 dark:text-violet-200',
    iconChip:
      'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
  },
};

export const MismatchExperimentSection = ({ content }: Props) => {
  const [selected, setSelected] = useState<ExperimentKey>('text');
  const result = content.results[selected];

  return (
    <section aria-labelledby="experiment-heading" className="flex flex-col gap-md">
      <SectionHeader id="experiment-heading" number={content.number} title={content.title} />

      <div
        className={cn(
          'grid grid-cols-1 gap-md rounded-3xl border-2 p-md sm:p-lg',
          'lg:grid-cols-[minmax(0,3fr)_minmax(0,5fr)_minmax(0,4fr)]',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* options */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold text-[var(--term-fg)]">{content.selectorTitle}</h3>
          <ul aria-label={content.selectorTitle} className="flex flex-col gap-2">
            {content.options.map((opt) => {
              const isActive = selected === opt.key;
              const tone = optionTone[opt.key];
              const Icon = optionIcon[opt.key];
              return (
                <li key={opt.key}>
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setSelected(opt.key)}
                    className={cn(
                      'w-full text-left rounded-2xl border-2 p-md transition-all',
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
                        tone.iconChip,
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="flex flex-col gap-0 min-w-0 flex-1">
                      <span
                        className={cn(
                          'text-xsm font-bold break-keep',
                          isActive ? tone.text : 'text-[var(--term-fg)]',
                        )}
                      >
                        {opt.title}
                      </span>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                        {opt.subtitle}
                      </span>
                    </span>
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
        </div>

        {/* result flow */}
        <article aria-live="polite" className="flex flex-col gap-3">
          <h3 className="text-sm font-bold text-[var(--term-fg)]">{content.resultTitle}</h3>
          <ol className="flex flex-col gap-1.5">
            {result.steps.map((step, i) => {
              const accent = roleAccent[step.role];
              const isLast = i === result.steps.length - 1;
              return (
                <li key={step.title} className="flex flex-col gap-1">
                  <div
                    className={cn(
                      'flex items-center gap-2.5 rounded-xl border-2 p-2.5',
                      accent.border,
                      accent.bg,
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-7 w-7 items-center justify-center rounded-full font-mono text-[11px] font-bold tabular-nums text-white',
                        accent.solidBg,
                      )}
                    >
                      {i + 1}
                    </span>
                    <span className="flex flex-col gap-0 min-w-0">
                      <span className={cn('text-xsm font-bold break-keep', accent.text)}>
                        {step.title}
                      </span>
                      <span className="text-[11px] text-[var(--term-muted)] break-keep">
                        {step.caption}
                      </span>
                    </span>
                  </div>
                  {!isLast && (
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="h-3.5 w-3.5 ml-3.5 rotate-90 text-blue-400 dark:text-blue-500"
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </article>

        {/* execution log */}
        <article aria-live="polite" className="flex flex-col gap-3">
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-teal-200 bg-teal-100 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/60 dark:text-teal-200"
            >
              <TerminalIcon className="h-3.5 w-3.5" />
            </span>
            <h3 className="text-sm font-bold text-[var(--term-fg)]">{content.logTitle}</h3>
          </header>
          <pre
            className={cn(
              'overflow-x-auto rounded-2xl border-2 p-3 text-[11px] leading-[1.7] font-mono',
              'border-teal-200/80 bg-slate-950 text-teal-100',
              'dark:border-teal-800/60',
            )}
          >
            <code>
              {result.log.map((line, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span aria-hidden="true" className="select-none text-teal-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={cn(
                      line.startsWith('[Hydration]')
                        ? 'text-rose-300 font-bold'
                        : line.includes('onRecoverableError')
                          ? 'text-emerald-300 font-bold'
                          : 'text-slate-200',
                    )}
                  >
                    {line}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </article>
      </div>
    </section>
  );
};

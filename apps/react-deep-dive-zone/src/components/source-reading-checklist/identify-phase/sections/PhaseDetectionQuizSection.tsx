'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { PhaseDetectionContent } from '../content';
import { CheckCircleIcon, HelpCircleIcon, MousePointerClickIcon, SparkIcon } from '../icons';
import { getPhaseClasses, PhaseBadge } from '../PhaseBadge';
import type { PhaseKey } from '../phaseTone';
import { phaseLabel } from '../phaseTone';

type Props = { content: PhaseDetectionContent['quiz'] };

const allPhases: PhaseKey[] = ['scheduling', 'render', 'commit'];

export const PhaseDetectionQuizSection = ({ content }: Props) => {
  const [activeId, setActiveId] = useState(content.items[0].id);
  const active = content.items.find((q) => q.id === activeId) ?? content.items[0];
  const t = getPhaseClasses(active.answer);

  return (
    <section id="section-quiz" aria-labelledby="heading-quiz" className="space-y-lg scroll-mt-24">
      <SectionHeader
        id="quiz"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<HelpCircleIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
          'dark:border-slate-700 dark:bg-[var(--term-bg)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_9fr)_minmax(0,_11fr)] gap-md lg:gap-lg">
          {/* LEFT — Quiz item list */}
          <div className="flex flex-col gap-sm">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
              {content.listLabel}
            </span>
            <div className="flex flex-col gap-2">
              {content.items.map((item) => {
                const isActive = item.id === activeId;
                const ot = getPhaseClasses(item.answer);
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={isActive}
                    aria-controls="quiz-result"
                    onClick={() => setActiveId(item.id)}
                    className={cn(
                      'group flex items-start gap-3 rounded-xl border-2 p-3 text-left',
                      'transition-all',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                      isActive
                        ? cn(ot.chip, ot.border, 'shadow-[0_2px_0_var(--term-border)]')
                        : cn(
                            'border-[var(--term-border)] bg-white dark:bg-[var(--term-bg)]',
                            'hover:border-blue-300 dark:hover:border-blue-700/70',
                            'motion-safe:hover:-translate-y-0.5',
                          ),
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2',
                        isActive
                          ? cn(ot.border, 'bg-white dark:bg-[var(--term-bg)]')
                          : 'border-[var(--term-border)] bg-white dark:bg-[var(--term-bg)]',
                      )}
                    >
                      {isActive && <span className={cn('block h-2 w-2 rounded-full', ot.dot)} />}
                    </span>

                    <code
                      className={cn(
                        'font-mono text-[11px] sm:text-xsm font-bold break-all',
                        isActive ? ot.text : 'text-[var(--term-fg)]',
                      )}
                    >
                      {item.code}
                    </code>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Result panel */}
          <article
            id="quiz-result"
            aria-live="polite"
            className={cn(
              'flex flex-col gap-md rounded-xl border-2 p-md sm:p-lg',
              t.border,
              t.chip,
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            {/* Selected code */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.selectedCode}
              </span>
              <pre
                className={cn(
                  'overflow-x-auto rounded-md border-2 p-2.5',
                  'bg-white dark:bg-[var(--term-bg)]',
                  t.border,
                  'shadow-[0_2px_0_var(--term-border)]',
                  'font-mono text-xsm font-bold',
                  t.text,
                )}
              >
                <code>
                  <MousePointerClickIcon
                    className="inline h-3.5 w-3.5 mr-1 align-text-bottom"
                    aria-hidden="true"
                  />
                  {active.code}
                </code>
              </pre>
            </div>

            {/* Answer */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.answer}
              </span>
              <div
                className={cn(
                  'inline-flex items-center gap-2 rounded-md border-2 p-3 self-start',
                  'bg-white dark:bg-[var(--term-bg)]',
                  t.border,
                )}
              >
                <CheckCircleIcon className={cn('h-5 w-5 shrink-0', t.text)} aria-hidden="true" />
                <PhaseBadge phase={active.answer} size="lg" strong />
              </div>
            </div>

            {/* Explanation */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.explanation}
              </span>
              <div
                className={cn(
                  'flex items-start gap-2 rounded-md border-2 p-3',
                  'bg-white dark:bg-[var(--term-bg)]',
                  t.border,
                )}
              >
                <SparkIcon className={cn('mt-0.5 h-4 w-4 shrink-0', t.text)} aria-hidden="true" />
                <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                  {active.explanation}
                </p>
              </div>
            </div>

            {/* All phases */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.categories}
              </span>
              <ul className="flex flex-wrap gap-1.5">
                {allPhases.map((p) => {
                  const isAnswer = p === active.answer;
                  return (
                    <li key={p}>
                      <PhaseBadge phase={p} size="md" strong={isAnswer}>
                        <span className="flex items-center gap-1">
                          {phaseLabel[p]}
                          {isAnswer && <CheckCircleIcon className="h-3 w-3" aria-hidden="true" />}
                        </span>
                      </PhaseBadge>
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { StartWithQuestionContent } from '../content';
import { ArrowRightIcon, FileCodeIcon, SparkIcon, WandIcon } from '../icons';

type Props = { content: StartWithQuestionContent['converter'] };

export const QuestionConverterSection = ({ content }: Props) => {
  const [activeId, setActiveId] = useState(content.options[0].id);
  const active = content.options.find((o) => o.id === activeId) ?? content.options[0];
  const t = toneTokens[active.tone];

  return (
    <section id="section-converter" aria-labelledby="heading-converter" className="space-y-lg">
      <SectionHeader
        id="converter"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<WandIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
          'dark:border-slate-700 dark:bg-[var(--term-bg)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_9fr)_minmax(0,_11fr)] gap-md lg:gap-lg">
          {/* LEFT — Question list */}
          <div className="flex flex-col gap-sm">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
              {content.listLabel}
            </span>
            <div className="flex flex-col gap-2">
              {content.options.map((opt) => {
                const isActive = opt.id === activeId;
                const ot = toneTokens[opt.tone];
                return (
                  <button
                    key={opt.id}
                    type="button"
                    aria-pressed={isActive}
                    aria-controls="converter-result"
                    onClick={() => setActiveId(opt.id)}
                    className={cn(
                      'group flex items-start gap-3 rounded-xl border-2 p-3 text-left',
                      'transition-all',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
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

                    <span
                      className={cn(
                        'text-xsm sm:text-sm font-bold leading-snug break-keep',
                        isActive ? ot.text : 'text-[var(--term-fg)]',
                      )}
                    >
                      {opt.question}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Result card */}
          <article
            id="converter-result"
            aria-live="polite"
            className={cn(
              'flex flex-col gap-md rounded-xl border-2 p-md sm:p-lg',
              t.border,
              t.chip,
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            {/* Selected question */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.resultLabels.selectedQuestion}
              </span>
              <p className={cn('text-md sm:text-lg font-bold leading-snug break-keep', t.text)}>
                {active.question}
              </p>
            </div>

            {/* Entry */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.resultLabels.entry}
              </span>
              <code
                className={cn(
                  'inline-flex items-center gap-2 self-start rounded-md border-2 px-2.5 py-1.5',
                  'bg-white dark:bg-[var(--term-bg)]',
                  t.border,
                  t.text,
                  'font-mono text-xsm font-bold',
                  'shadow-[0_2px_0_var(--term-border)]',
                )}
              >
                <SparkIcon className="h-3.5 w-3.5" aria-hidden="true" />
                {active.entry}
              </code>
            </div>

            {/* Path */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.resultLabels.path}
              </span>
              <ol className="flex flex-wrap items-center gap-1.5">
                {active.path.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-center gap-1.5"
                    aria-label={`${i + 1}. ${step}`}
                  >
                    <code
                      className={cn(
                        'inline-flex items-center gap-1 rounded-md border px-2 py-0.5',
                        'bg-white dark:bg-[var(--term-bg)]',
                        t.border,
                        'font-mono text-[11px] text-[var(--term-fg)]',
                      )}
                    >
                      <FileCodeIcon className={cn('h-3 w-3', t.text)} aria-hidden="true" />
                      {step}
                    </code>
                    {i < active.path.length - 1 && (
                      <ArrowRightIcon className={cn('h-3 w-3', t.text)} aria-hidden="true" />
                    )}
                  </li>
                ))}
              </ol>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.resultLabels.description}
              </span>
              <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                {active.description}
              </p>
            </div>

            {/* Keywords */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.resultLabels.keywords}
              </span>
              <ul className="flex flex-wrap gap-1.5">
                {active.keywords.map((kw) => (
                  <li key={kw}>
                    <span
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5',
                        'bg-white dark:bg-[var(--term-bg)]',
                        t.border,
                        t.text,
                        'font-mono text-[10px] font-bold',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn('block h-1 w-1 rounded-full', t.dot)}
                      />
                      {kw}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

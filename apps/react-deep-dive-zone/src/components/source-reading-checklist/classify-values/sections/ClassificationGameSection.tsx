'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { ValueClassificationContent } from '../content';
import { CheckCircleIcon, GaugeIcon, SparkIcon, TagsIcon } from '../icons';
import { flagsSlate } from '../valueTone';

type Props = { content: ValueClassificationContent['game'] };

export const ClassificationGameSection = ({ content }: Props) => {
  const [activeId, setActiveId] = useState(content.options[0].id);
  const active = content.options.find((o) => o.id === activeId) ?? content.options[0];
  const activeCategory =
    content.categories.find((c) => c.key === active.correctCategory) ?? content.categories[0];
  const activeT = activeCategory.tone === 'slate' ? flagsSlate : toneTokens[activeCategory.tone];

  return (
    <section id="section-game" aria-labelledby="heading-game" className="space-y-lg scroll-mt-24">
      <SectionHeader
        id="game"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<TagsIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
          'dark:border-slate-700 dark:bg-[var(--term-bg)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_9fr)_minmax(0,_11fr)] gap-md lg:gap-lg">
          {/* LEFT — Value list */}
          <div className="flex flex-col gap-sm">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
              {content.listLabel}
            </span>
            <div className="flex flex-col gap-2">
              {content.options.map((opt) => {
                const isActive = opt.id === activeId;
                const optCategory = content.categories.find((c) => c.key === opt.correctCategory);
                const ot =
                  optCategory && optCategory.tone !== 'slate'
                    ? toneTokens[optCategory.tone]
                    : flagsSlate;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    aria-pressed={isActive}
                    aria-controls="game-result"
                    onClick={() => setActiveId(opt.id)}
                    className={cn(
                      'group flex items-center justify-between gap-3 rounded-xl border-2 p-3 text-left',
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
                    <span className="flex items-center gap-2 min-w-0">
                      <span
                        aria-hidden="true"
                        className={cn(
                          'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2',
                          isActive
                            ? cn(ot.border, 'bg-white dark:bg-[var(--term-bg)]')
                            : 'border-[var(--term-border)] bg-white dark:bg-[var(--term-bg)]',
                        )}
                      >
                        {isActive && <span className={cn('block h-2 w-2 rounded-full', ot.dot)} />}
                      </span>
                      <code
                        className={cn(
                          'font-mono text-xsm sm:text-sm font-bold truncate',
                          isActive ? ot.text : 'text-[var(--term-fg)]',
                        )}
                      >
                        {opt.field}
                      </code>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Result panel */}
          <article
            id="game-result"
            aria-live="polite"
            className={cn(
              'flex flex-col gap-md rounded-xl border-2 p-md sm:p-lg',
              activeT.border,
              activeT.chip,
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            {/* Selected value */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.selected}
              </span>
              <code
                className={cn(
                  'inline-flex w-fit items-center gap-1.5 rounded-md border-2 px-2.5 py-1.5',
                  'bg-white dark:bg-[var(--term-bg)]',
                  activeT.border,
                  activeT.text,
                  'font-mono text-md font-bold',
                  'shadow-[0_2px_0_var(--term-border)]',
                )}
              >
                <GaugeIcon className="h-4 w-4" aria-hidden="true" />
                {active.field}
              </code>
            </div>

            {/* Correct category */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.answer}
              </span>
              <div
                className={cn(
                  'flex items-center gap-2 rounded-md border-2 p-3',
                  'bg-white dark:bg-[var(--term-bg)]',
                  activeT.border,
                )}
              >
                <CheckCircleIcon
                  className={cn('h-5 w-5 shrink-0', activeT.text)}
                  aria-hidden="true"
                />
                <span className={cn('text-md font-bold', activeT.text)}>
                  {activeCategory.label}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.description}
              </span>
              <div
                className={cn(
                  'flex items-start gap-2 rounded-md border-2 p-3',
                  'bg-white dark:bg-[var(--term-bg)]',
                  activeT.border,
                )}
              >
                <SparkIcon
                  className={cn('mt-0.5 h-4 w-4 shrink-0', activeT.text)}
                  aria-hidden="true"
                />
                <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                  {active.description}
                </p>
              </div>
            </div>

            {/* All categories pills */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.categories}
              </span>
              <ul className="flex flex-wrap gap-1.5">
                {content.categories.map((cat) => {
                  const t = cat.tone === 'slate' ? flagsSlate : toneTokens[cat.tone];
                  const isAnswer = cat.key === active.correctCategory;
                  return (
                    <li key={cat.key}>
                      <span
                        className={cn(
                          'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1',
                          'bg-white dark:bg-[var(--term-bg)]',
                          t.border,
                          t.text,
                          'font-mono text-[10.5px] font-bold',
                          isAnswer && 'border-2 shadow-[0_2px_0_var(--term-border)]',
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={cn('block h-1 w-1 rounded-full', t.dot)}
                        />
                        {cat.label}
                        {isAnswer && (
                          <CheckCircleIcon className={cn('h-3 w-3', t.text)} aria-hidden="true" />
                        )}
                      </span>
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

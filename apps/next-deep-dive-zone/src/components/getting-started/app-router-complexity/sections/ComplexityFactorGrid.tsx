'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { AppRouterComplexityContent, ComplexityFactor } from '../content';
import { FactorIcon, factorIconByName } from '../icons';

type Props = { content: AppRouterComplexityContent['factors'] };

export const ComplexityFactorGrid = ({ content }: Props) => {
  const [selectedId, setSelectedId] = useState<ComplexityFactor['id']>(content.cards[0].id);
  const selected = content.cards.find((c) => c.id === selectedId) ?? content.cards[0];
  const st = toneTokens[selected.tone];

  return (
    <section id="section-factors" aria-labelledby="heading-factors" className="space-y-lg">
      <SectionHeader
        id="factors"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<FactorIcon className="h-5 w-5" />}
      />

      {/* 9개 카드 3x3 */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => {
          const t = toneTokens[card.tone];
          const Icon = factorIconByName[card.id];
          const isSelected = card.id === selected.id;
          return (
            <li key={card.id} className="flex">
              <button
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedId(card.id)}
                className={cn(
                  'group flex w-full min-w-0 flex-col gap-sm rounded-lg border bg-[var(--term-bg)] p-md text-left transition-all',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                  'motion-safe:hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
                  isSelected
                    ? 'border-[var(--term-accent)] bg-[var(--term-accent-soft)] ring-1 ring-[var(--term-accent)]'
                    : cn('border-[var(--term-border)]', t.borderHover),
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      'inline-flex h-9 w-9 items-center justify-center rounded-md border',
                      t.chip,
                    )}
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xxsm font-bold tabular-nums text-[var(--term-muted)]">
                    {card.number}
                  </span>
                </div>

                <h3 className="text-md font-bold tracking-tight text-[var(--term-fg)] break-keep">
                  {card.title}
                </h3>

                <code
                  className={cn(
                    'inline-block w-fit max-w-full rounded border px-1.5 py-0.5 font-mono text-[10.5px] [overflow-wrap:anywhere]',
                    t.chip,
                  )}
                >
                  {card.surfaceApi}
                </code>
              </button>
            </li>
          );
        })}
      </ul>

      {/* detail panel */}
      <div
        aria-live="polite"
        className="rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-md sm:p-lg space-y-md"
      >
        <div className="flex items-center gap-sm pb-md border-b border-dashed border-[var(--term-border)]">
          <span
            className={cn(
              'inline-flex h-7 w-7 items-center justify-center rounded-md border text-[10px] font-bold tabular-nums',
              st.chip,
            )}
            aria-hidden="true"
          >
            {selected.number}
          </span>
          <h3 className={cn('text-md sm:text-lg font-bold tracking-tight', st.text)}>
            {selected.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
              {content.panel.surface}
            </span>
            <code
              className={cn(
                'inline-block w-fit max-w-full rounded border px-1.5 py-0.5 font-mono text-[11px] [overflow-wrap:anywhere]',
                st.chip,
              )}
            >
              {selected.surfaceApi}
            </code>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
              {content.panel.internal}
            </span>
            <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
              {selected.internalConcept}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
            {content.panel.files}
          </span>
          <ul className="flex flex-col gap-1.5">
            {selected.files.map((file) => (
              <li key={file}>
                <code className="block rounded border border-[var(--term-border)] bg-[var(--term-bg)] px-2 py-1 font-mono text-[10.5px] leading-snug text-[var(--term-fg)] [overflow-wrap:anywhere]">
                  {file}
                </code>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-start gap-sm rounded-md border border-amber-200 bg-amber-50 p-sm dark:border-amber-800/60 dark:bg-amber-950/30">
          <span
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-300 text-xsm font-bold"
          >
            !
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider font-bold text-amber-700 dark:text-amber-300">
              {content.panel.misconception}
            </span>
            <p className="text-xsm leading-relaxed text-amber-900 dark:text-amber-100 break-keep">
              {selected.misconception}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

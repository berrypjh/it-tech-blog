'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { QuestionCard, WhyReadNextSourceContent } from '../content';
import { iconByName, QuestionIcon } from '../icons';

type Props = { content: WhyReadNextSourceContent['questions'] };

const PanelStep = ({
  index,
  label,
  tone,
  children,
}: {
  index: string;
  label: string;
  tone: QuestionCard['tone'];
  children: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <div className="flex flex-col gap-sm rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] p-md min-w-0">
      <div className="flex items-center gap-sm">
        <span
          className={cn(
            'inline-flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-bold tabular-nums',
            t.chip,
          )}
          aria-hidden="true"
        >
          {index}
        </span>
        <h3 className="text-xsm font-bold text-[var(--term-fg)]">{label}</h3>
      </div>
      {children}
    </div>
  );
};

export const NextQuestionCards = ({ content }: Props) => {
  const [selectedId, setSelectedId] = useState<QuestionCard['id']>(content.cards[0].id);
  const selected = content.cards.find((c) => c.id === selectedId) ?? content.cards[0];
  const st = toneTokens[selected.tone];

  return (
    <section id="section-questions" aria-labelledby="heading-questions" className="space-y-lg">
      <SectionHeader
        id="questions"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<QuestionIcon className="h-5 w-5" />}
      />

      {/* 질문 카드 — mobile 1열, sm 2열, lg 3열, xl 5열 */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-md">
        {content.cards.map((card) => {
          const t = toneTokens[card.tone];
          const Icon = iconByName[card.icon];
          const isSelected = card.id === selected.id;

          return (
            <li key={card.id} className="flex">
              <button
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedId(card.id)}
                className={cn(
                  'group flex w-full min-w-0 flex-col gap-md rounded-lg border bg-[var(--term-bg)] p-md text-left transition-all',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                  'motion-safe:hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
                  isSelected
                    ? 'border-[var(--term-accent)] bg-[var(--term-accent-soft)] ring-1 ring-[var(--term-accent)]'
                    : cn('border-[var(--term-border)]', t.borderHover),
                )}
              >
                <div className="flex items-start justify-between">
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

                <p className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
                  {card.question.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>

                <div className="mt-auto flex items-center justify-between gap-1 pt-sm border-t border-dashed border-[var(--term-border)]">
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-medium',
                      t.chip,
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn('inline-block h-1 w-1 rounded-full', t.dot)}
                    />
                    {card.concept}
                  </span>
                  <span
                    className={cn(
                      'text-[10px] font-bold transition-opacity',
                      isSelected ? cn('opacity-100', t.text) : 'opacity-0',
                    )}
                  >
                    ●
                  </span>
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      {/* 선택 detail panel */}
      <div
        aria-live="polite"
        className="rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-md sm:p-lg"
      >
        <div className="flex items-center gap-sm flex-wrap pb-md mb-md border-b border-dashed border-[var(--term-border)]">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-[10px] font-bold',
              st.chip,
            )}
          >
            <span
              aria-hidden="true"
              className={cn('inline-block h-1.5 w-1.5 rounded-full', st.dot)}
            />
            {selected.concept}
          </span>
          <p className="text-sm font-bold text-[var(--term-fg)] break-keep">
            {selected.question.join(' ')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          <PanelStep index="01" label={content.panel.surface} tone={selected.tone}>
            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {selected.surface}
            </p>
          </PanelStep>

          <PanelStep index="02" label={content.panel.internal} tone={selected.tone}>
            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {selected.internal}
            </p>
          </PanelStep>

          <PanelStep index="03" label={content.panel.entries} tone={selected.tone}>
            <ul className="flex flex-col gap-1.5">
              {selected.entries.map((entry) => (
                <li key={entry}>
                  <code className="block rounded border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-1 font-mono text-[10.5px] leading-snug text-[var(--term-fg)] [overflow-wrap:anywhere]">
                    {entry}
                  </code>
                </li>
              ))}
            </ul>
          </PanelStep>
        </div>
      </div>
    </section>
  );
};

'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { RoadmapContent, RoadmapStep } from '../content';
import { RoadmapIcon } from '../icons';

type Props = { content: RoadmapContent['roadmap'] };

export const FullLearningRoadmap = ({ content }: Props) => {
  const [selectedNo, setSelectedNo] = useState<RoadmapStep['number']>(content.steps[0].number);
  const selected = content.steps.find((s) => s.number === selectedNo) ?? content.steps[0];
  const st = toneTokens[selected.tone];

  return (
    <section
      id="section-roadmap"
      aria-labelledby="heading-roadmap"
      className="space-y-lg rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-md sm:p-lg lg:p-xl"
    >
      <div className="flex flex-col gap-md sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          id="roadmap"
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          icon={<RoadmapIcon className="h-5 w-5" />}
        />
        <div className="shrink-0 inline-flex items-center gap-sm rounded-full border border-[var(--term-accent)] bg-[var(--term-accent-soft)] px-3 py-1.5">
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-bold">
            {content.currentLabel}
          </span>
          <span className="text-xsm font-bold text-[var(--term-accent)] tabular-nums">
            {content.currentPosition}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.42fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-start">
        {/* 18단계 리스트 */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
            {content.labels.stepLabel}
          </span>
          <ol className="flex flex-col gap-1.5 lg:max-h-[36rem] lg:overflow-y-auto lg:pr-1">
            {content.steps.map((step, idx) => {
              const t = toneTokens[step.tone];
              const isSelected = step.number === selected.number;
              const isCurrent = idx === 0;
              return (
                <li key={step.number}>
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedNo(step.number)}
                    className={cn(
                      'group flex w-full items-center gap-sm rounded-md border bg-[var(--term-bg)] p-sm text-left transition-all',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-surface)]',
                      'motion-safe:hover:-translate-y-0.5',
                      isSelected
                        ? 'border-[var(--term-accent)] bg-[var(--term-accent-soft)] ring-1 ring-[var(--term-accent)]'
                        : cn('border-[var(--term-border)]', t.borderHover),
                    )}
                  >
                    <span
                      className={cn(
                        'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border text-[10px] font-bold tabular-nums',
                        t.chip,
                      )}
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                    <span className="min-w-0 flex-1 text-xsm font-bold text-[var(--term-fg)] break-keep leading-snug">
                      {step.title}
                    </span>
                    {isCurrent && (
                      <span className="shrink-0 rounded-full border border-[var(--term-accent)] px-1.5 py-0.5 text-[9px] font-bold text-[var(--term-accent)]">
                        {content.currentLabel}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* 선택 detail */}
        <div
          aria-live="polite"
          className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg h-fit"
        >
          <div className="flex items-center justify-between gap-sm pb-sm border-b border-dashed border-[var(--term-border)]">
            <div className="flex items-center gap-sm min-w-0">
              <span
                className={cn(
                  'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border text-xsm font-bold tabular-nums',
                  st.chip,
                )}
                aria-hidden="true"
              >
                {selected.number}
              </span>
              <h3 className={cn('text-md sm:text-lg font-bold tracking-tight break-keep', st.text)}>
                {selected.title}
              </h3>
            </div>
            <span
              className={cn(
                'shrink-0 inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold',
                st.chip,
              )}
            >
              {content.labels.difficulty}: {selected.difficulty}
            </span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
              {content.labels.question}
            </span>
            <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
              {selected.question}
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
              {content.labels.dirs}
            </span>
            <ul className="flex flex-wrap gap-1.5">
              {selected.dirs.map((d) => (
                <li key={d}>
                  <code
                    className={cn(
                      'inline-block rounded border px-1.5 py-0.5 font-mono text-[10.5px] [overflow-wrap:anywhere]',
                      st.chip,
                    )}
                  >
                    {d}
                  </code>
                </li>
              ))}
            </ul>
          </div>

          <div className={cn('flex flex-col gap-0.5 rounded-md border p-sm', st.border)}>
            <span className={cn('text-[10px] uppercase tracking-wider font-bold', st.text)}>
              {content.labels.mission}
            </span>
            <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
              {selected.mission}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

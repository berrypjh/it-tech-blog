'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { GithubReadingContent, TraceStep } from '../content';
import { RoutineIcon, routineIconByName } from '../icons';

type Props = { content: GithubReadingContent['routine'] };

export const FeatureTraceRoutine = ({ content }: Props) => {
  const [selectedId, setSelectedId] = useState<TraceStep['id']>(content.steps[0].id);
  const selected = content.steps.find((s) => s.id === selectedId) ?? content.steps[0];
  const st = toneTokens[selected.tone];
  const SelectedIcon = routineIconByName[selected.id];

  return (
    <section
      id="section-routine"
      aria-labelledby="heading-routine"
      className="space-y-lg rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-md sm:p-lg lg:p-xl"
    >
      <SectionHeader
        id="routine"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<RoutineIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.32fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-start">
        {/* 추적 주제 카드 */}
        <div className="flex flex-col gap-sm rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md">
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
            {content.topic.label}
          </span>
          <h3 className="text-lg font-bold tracking-tight text-[var(--term-accent)]">
            {content.topic.topic}
          </h3>
          <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.topic.coreQuestion}
          </p>
          <ul className="flex flex-wrap gap-1.5 pt-sm border-t border-dashed border-[var(--term-border)]">
            {content.topic.keywords.map((kw) => (
              <li key={kw}>
                <code className="inline-block rounded border border-[var(--term-border)] bg-[var(--term-surface)] px-1.5 py-0.5 font-mono text-[10.5px] text-[var(--term-muted)] [overflow-wrap:anywhere]">
                  {kw}
                </code>
              </li>
            ))}
          </ul>
        </div>

        {/* 타임라인 + 상세 */}
        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_0.95fr)_minmax(0,_1fr)] gap-md">
          {/* 7단계 타임라인 */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
              {content.labels.stepLabel}
            </span>
            <ol className="flex flex-col gap-1.5">
              {content.steps.map((step) => {
                const t = toneTokens[step.tone];
                const Icon = routineIconByName[step.id];
                const isSelected = step.id === selected.id;
                return (
                  <li key={step.id}>
                    <button
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setSelectedId(step.id)}
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
                          'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border',
                          t.chip,
                        )}
                        aria-hidden="true"
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span
                        className={cn('text-[10px] font-bold tabular-nums shrink-0', t.text)}
                        aria-hidden="true"
                      >
                        {step.number}
                      </span>
                      <span className="min-w-0 text-xsm font-bold text-[var(--term-fg)] break-keep leading-snug">
                        {step.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* 선택 상세 */}
          <div
            aria-live="polite"
            className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg h-fit"
          >
            <div className="flex items-center gap-sm pb-sm border-b border-dashed border-[var(--term-border)]">
              <span
                className={cn(
                  'inline-flex h-8 w-8 items-center justify-center rounded-md border',
                  st.chip,
                )}
                aria-hidden="true"
              >
                <SelectedIcon className="h-4 w-4" />
              </span>
              <h3 className={cn('text-md font-bold tracking-tight break-keep', st.text)}>
                <span className="tabular-nums">{selected.number}</span> {selected.title}
              </h3>
            </div>

            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
                {content.labels.what}
              </span>
              <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                {selected.what}
              </p>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
                {content.labels.why}
              </span>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {selected.why}
              </p>
            </div>
            <div className={cn('flex flex-col gap-0.5 rounded-md border p-sm', st.border)}>
              <span className={cn('text-[10px] uppercase tracking-wider font-bold', st.text)}>
                {content.labels.question}
              </span>
              <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                {selected.question}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

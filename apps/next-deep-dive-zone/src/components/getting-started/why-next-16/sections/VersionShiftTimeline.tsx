'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { Next16Content, TimelineStep } from '../content';
import { TimelineIcon, timelineIconByName, WarnIcon } from '../icons';

type Props = { content: Next16Content['timeline'] };

const ChipList = ({ items, tone }: { items: string[]; tone: TimelineStep['tone'] }) => {
  const t = toneTokens[tone];
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item}>
          <code
            className={cn(
              'inline-block rounded border px-1.5 py-0.5 font-mono text-[10.5px] [overflow-wrap:anywhere]',
              t.chip,
            )}
          >
            {item}
          </code>
        </li>
      ))}
    </ul>
  );
};

export const VersionShiftTimeline = ({ content }: Props) => {
  const [selectedId, setSelectedId] = useState<TimelineStep['id']>(content.steps[0].id);
  const selectedIndex = content.steps.findIndex((s) => s.id === selectedId);
  const selected = content.steps[selectedIndex] ?? content.steps[0];
  const st = toneTokens[selected.tone];

  return (
    <section
      id="section-timeline"
      aria-labelledby="heading-timeline"
      className="space-y-lg rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-md sm:p-lg lg:p-xl"
    >
      <SectionHeader
        id="timeline"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<TimelineIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.46fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-start">
        {/* 타임라인 리스트 */}
        <div className="flex flex-col gap-sm">
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
            {content.listLabel}
          </span>
          <ol className="flex flex-col gap-2">
            {content.steps.map((step, idx) => {
              const t = toneTokens[step.tone];
              const Icon = timelineIconByName[step.id];
              const isSelected = step.id === selected.id;
              return (
                <li key={step.id}>
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedId(step.id)}
                    className={cn(
                      'group flex w-full items-start gap-sm rounded-md border bg-[var(--term-bg)] p-sm text-left transition-all',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-surface)]',
                      'motion-safe:hover:-translate-y-0.5',
                      isSelected
                        ? 'border-[var(--term-accent)] bg-[var(--term-accent-soft)] ring-1 ring-[var(--term-accent)]'
                        : cn('border-[var(--term-border)]', t.borderHover),
                    )}
                  >
                    <span
                      className={cn(
                        'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border',
                        t.chip,
                      )}
                      aria-hidden="true"
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex flex-col">
                      <span className="flex items-center gap-1.5">
                        <span
                          className={cn('text-[10px] font-bold tabular-nums', t.text)}
                          aria-hidden="true"
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xsm font-bold text-[var(--term-fg)] break-keep">
                          {step.title}
                        </span>
                      </span>
                      <span className="text-[10px] text-[var(--term-muted)] break-keep line-clamp-2">
                        {step.era}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* 선택 detail panel */}
        <div
          aria-live="polite"
          className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg"
        >
          <div className="flex items-center gap-sm pb-sm border-b border-dashed border-[var(--term-border)]">
            <span
              className={cn(
                'inline-flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-bold tabular-nums',
                st.chip,
              )}
              aria-hidden="true"
            >
              {String(selectedIndex + 1).padStart(2, '0')}
            </span>
            <h3 className={cn('text-md sm:text-lg font-bold tracking-tight', st.text)}>
              {selected.title}
            </h3>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
              {content.panel.era}
            </span>
            <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
              {selected.era}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
                {content.panel.doc}
              </span>
              <span
                className={cn(
                  'inline-block w-fit rounded border px-2 py-0.5 text-[11px] font-medium',
                  st.chip,
                )}
              >
                {selected.doc}
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
                {content.panel.codeAxis}
              </span>
              <ChipList items={selected.codeAxis} tone={selected.tone} />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
              {content.panel.concepts}
            </span>
            <ChipList items={selected.concepts} tone={selected.tone} />
          </div>

          <div className="flex items-start gap-sm rounded-md border border-amber-200 bg-amber-50 p-sm dark:border-amber-800/60 dark:bg-amber-950/30">
            <span
              aria-hidden="true"
              className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded bg-amber-500 text-white dark:bg-amber-400 dark:text-slate-900"
            >
              <WarnIcon className="h-3.5 w-3.5" />
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider font-bold text-amber-700 dark:text-amber-300">
                {content.panel.caution}
              </span>
              <p className="text-xsm leading-relaxed text-amber-900 dark:text-amber-100 break-keep">
                {selected.caution}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

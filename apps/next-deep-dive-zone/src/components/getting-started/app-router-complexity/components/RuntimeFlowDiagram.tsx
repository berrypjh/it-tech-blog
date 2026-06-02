'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../shared/tones';
import type { AppRouterComplexityContent, FlowStep } from '../content';
import { flowIconByName } from '../icons';

type Diagram = AppRouterComplexityContent['hero']['diagram'];

type Props = { content: Diagram };

export const RuntimeFlowDiagram = ({ content }: Props) => {
  const [selectedId, setSelectedId] = useState<FlowStep['id']>(content.initialStepId);
  const selected = content.steps.find((s) => s.id === selectedId) ?? content.steps[0];
  const st = toneTokens[selected.tone];

  return (
    <div
      className={cn(
        'relative w-full min-w-0 rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <div className="mb-md flex flex-col gap-0.5">
        <p className="text-xsm font-bold text-[var(--term-fg)] break-keep">{content.title}</p>
        <p className="text-[11px] leading-snug text-[var(--term-muted)] break-keep">
          {content.subtitle}
        </p>
      </div>

      {/* 6단계: mobile 2열, sm 3열, xl 6열 */}
      <ol className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-2">
        {content.steps.map((step, idx) => {
          const t = toneTokens[step.tone];
          const Icon = flowIconByName[step.id];
          const isSelected = step.id === selected.id;
          const isLast = idx === content.steps.length - 1;
          return (
            <li key={step.id} className="relative flex min-w-0">
              <button
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedId(step.id)}
                className={cn(
                  'group flex w-full min-w-0 flex-col items-center gap-1 text-center rounded-md border bg-[var(--term-surface)] px-1.5 py-2.5 transition-all',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--term-bg)]',
                  'motion-safe:hover:-translate-y-0.5',
                  isSelected
                    ? 'border-[var(--term-accent)] bg-[var(--term-accent-soft)] ring-1 ring-[var(--term-accent)]'
                    : cn('border-[var(--term-border)]', t.borderHover),
                )}
              >
                <span
                  className={cn(
                    'inline-flex h-8 w-8 items-center justify-center rounded border',
                    t.chip,
                  )}
                  aria-hidden="true"
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span
                  className={cn(
                    'text-[11px] font-bold leading-tight break-keep',
                    isSelected ? t.text : 'text-[var(--term-fg)]',
                  )}
                >
                  {step.label}
                </span>
              </button>
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="hidden xl:flex absolute top-1/2 -right-1.5 -translate-y-1/2 text-[var(--term-accent)] text-[11px] z-10"
                >
                  →
                </span>
              )}
            </li>
          );
        })}
      </ol>

      {/* 선택 설명 */}
      <div
        aria-live="polite"
        className="mt-md rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] p-md"
      >
        <div className="flex items-center gap-sm flex-wrap">
          <span className={cn('text-sm font-bold tracking-tight', st.text)}>{selected.label}</span>
          <span
            className={cn(
              'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium',
              st.chip,
            )}
          >
            <span aria-hidden="true" className={cn('inline-block h-1 w-1 rounded-full', st.dot)} />
            {content.categoryLabel}: {selected.category}
          </span>
        </div>
        <p className="mt-1.5 text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
          {selected.description}
        </p>
        <p className="mt-1 text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
          <span className="font-bold uppercase tracking-wider text-[var(--term-dim)] mr-1.5">
            {content.hintLabel}
          </span>
          {selected.hint}
        </p>
      </div>
    </div>
  );
};

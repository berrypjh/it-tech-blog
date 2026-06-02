'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { DocsLimitsContent, TransformerExample } from '../content';
import { TransformIcon } from '../icons';

type Props = { content: DocsLimitsContent['transformer'] };

export const DocsSentenceTransformer = ({ content }: Props) => {
  const [selectedId, setSelectedId] = useState<TransformerExample['id']>(content.examples[0].id);
  const ex = content.examples.find((e) => e.id === selectedId) ?? content.examples[0];
  const t = toneTokens[ex.tone];

  return (
    <section
      id="section-transformer"
      aria-labelledby="heading-transformer"
      className="space-y-lg rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-md sm:p-lg lg:p-xl"
    >
      <SectionHeader
        id="transformer"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<TransformIcon className="h-5 w-5" />}
      />

      <div className="flex flex-col gap-sm">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
          {content.inputLabel}
        </span>
        <div className="flex items-center gap-sm rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] px-md py-3">
          <TransformIcon
            className="h-4 w-4 shrink-0 text-[var(--term-accent)]"
            aria-hidden="true"
          />
          <p className="text-xsm sm:text-sm font-medium text-[var(--term-fg)] break-keep">
            {ex.sentence}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2" aria-label="example sentences">
          {content.examples.map((e) => {
            const et = toneTokens[e.tone];
            const isSelected = e.id === ex.id;
            return (
              <li key={e.id}>
                <button
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedId(e.id)}
                  className={cn(
                    'inline-flex items-center rounded-full border px-3 py-1.5 text-xsm font-medium transition-colors break-keep',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-surface)]',
                    isSelected
                      ? cn(et.chip, 'ring-1 ring-inset font-bold')
                      : 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] hover:border-[var(--term-accent)] hover:text-[var(--term-fg)]',
                  )}
                >
                  {e.button}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 결과 패널 4영역 */}
      <div aria-live="polite" className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        <div className="flex flex-col gap-1.5 rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md">
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
            {content.labels.sentence}
          </span>
          <p className="font-mono text-xsm leading-relaxed text-[var(--term-muted)] break-keep [overflow-wrap:anywhere]">
            {ex.sentence}
          </p>
        </div>

        <div
          className={cn(
            'flex flex-col gap-1.5 rounded-lg border bg-[var(--term-bg)] p-md',
            t.border,
          )}
        >
          <span className={cn('text-[10px] uppercase tracking-wider font-bold', t.text)}>
            {content.labels.question}
          </span>
          <p className="text-xsm leading-relaxed text-[var(--term-fg)] font-medium break-keep">
            {ex.question}
          </p>
        </div>

        <div className="flex flex-col gap-1.5 rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md">
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
            {content.labels.read}
          </span>
          <ul className="flex flex-wrap gap-1.5">
            {ex.readCode.map((c) => (
              <li key={c}>
                <code
                  className={cn(
                    'inline-block rounded border px-1.5 py-0.5 font-mono text-[10.5px] [overflow-wrap:anywhere]',
                    t.chip,
                  )}
                >
                  {c}
                </code>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-1.5 rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md">
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
            {content.labels.verify}
          </span>
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {ex.verify}
          </p>
        </div>
      </div>
    </section>
  );
};

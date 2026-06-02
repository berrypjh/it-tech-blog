'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { TransformerExample, UsageVsInternalsContent } from '../content';
import { ArrowRightIcon, transformerIconByName, TransformIcon } from '../icons';

type Props = { content: UsageVsInternalsContent['transformer'] };

export const QuestionTransformer = ({ content }: Props) => {
  const [selectedId, setSelectedId] = useState<TransformerExample['id']>(content.examples[0].id);
  const selected = content.examples.find((e) => e.id === selectedId) ?? content.examples[0];
  const st = toneTokens[selected.tone];

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

      {/* 입력창처럼 보이는 UI */}
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
            {selected.usageQuestion}
          </p>
        </div>

        {/* 예시 질문 버튼 */}
        <ul className="flex flex-wrap gap-2" aria-label="example questions">
          {content.examples.map((ex) => {
            const t = toneTokens[ex.tone];
            const Icon = transformerIconByName[ex.icon];
            const isSelected = ex.id === selected.id;
            return (
              <li key={ex.id}>
                <button
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedId(ex.id)}
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xsm font-medium transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-surface)]',
                    isSelected
                      ? cn(t.chip, 'ring-1 ring-inset font-bold')
                      : 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] hover:border-[var(--term-accent)] hover:text-[var(--term-fg)]',
                  )}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span className="break-keep">{ex.button}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 결과 패널 3열 */}
      <div aria-live="polite" className="grid grid-cols-1 lg:grid-cols-3 gap-md items-stretch">
        {/* 사용법 질문 */}
        <div className="flex flex-col gap-sm rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md">
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
            {content.panel.usage}
          </span>
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {selected.usageQuestion}
          </p>
        </div>

        {/* 화살표 + 내부 구조 질문 */}
        <div
          className={cn(
            'relative flex flex-col gap-sm rounded-lg border bg-[var(--term-bg)] p-md',
            st.border,
          )}
        >
          <span
            aria-hidden="true"
            className="hidden lg:flex absolute -left-3 top-1/2 -translate-y-1/2 h-6 w-6 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-accent)]"
          >
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </span>
          <span
            className={cn(
              'inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold',
              st.text,
            )}
          >
            {content.panel.internal}
          </span>
          <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep font-medium">
            {selected.internalQuestion}
          </p>
        </div>

        {/* 읽을 코드 입구 */}
        <div className="flex flex-col gap-sm rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md">
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
            {content.panel.entries}
          </span>
          <ul className="flex flex-col gap-1.5">
            {selected.entries.map((entry) => (
              <li key={entry}>
                <code className="block rounded border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-1 font-mono text-[10.5px] leading-snug text-[var(--term-fg)] [overflow-wrap:anywhere]">
                  {entry}
                </code>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

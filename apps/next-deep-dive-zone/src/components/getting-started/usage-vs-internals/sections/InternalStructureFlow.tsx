'use client';

import { Fragment, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { FileConventionCard, UsageVsInternalsContent } from '../content';
import { fileIconByName, flowIconByName, InternalsIcon } from '../icons';

type Props = { content: UsageVsInternalsContent['internalFlow'] };

export const InternalStructureFlow = ({ content }: Props) => {
  const [selectedId, setSelectedId] = useState<FileConventionCard['id']>(content.files[0].id);
  const selected = content.files.find((f) => f.id === selectedId) ?? content.files[0];
  const highlightSet = new Set(selected.highlight);
  const st = toneTokens[selected.tone];

  return (
    <section
      id="section-internal-flow"
      aria-labelledby="heading-internal-flow"
      className="space-y-lg"
    >
      <SectionHeader
        id="internal-flow"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<InternalsIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.36fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-start">
        {/* 좌측: 파일 카드 리스트 */}
        <div className="flex flex-col gap-sm">
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
            {content.fileLabel}
          </span>
          <ul className="grid grid-cols-2 lg:grid-cols-1 gap-sm">
            {content.files.map((file) => {
              const t = toneTokens[file.tone];
              const Icon = fileIconByName[file.icon];
              const isSelected = file.id === selected.id;
              return (
                <li key={file.id} className="flex">
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedId(file.id)}
                    className={cn(
                      'group flex w-full min-w-0 items-center gap-sm rounded-md border bg-[var(--term-bg)] p-sm text-left transition-all',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                      'motion-safe:hover:-translate-y-0.5',
                      isSelected
                        ? 'border-[var(--term-accent)] bg-[var(--term-accent-soft)] ring-1 ring-[var(--term-accent)]'
                        : cn('border-[var(--term-border)]', t.borderHover),
                    )}
                  >
                    <span
                      className={cn(
                        'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded border',
                        t.chip,
                      )}
                      aria-hidden="true"
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex flex-col">
                      <code className="font-mono text-xsm font-bold text-[var(--term-fg)] [overflow-wrap:anywhere]">
                        {file.name}
                      </code>
                      <span className="text-[10px] text-[var(--term-muted)] break-keep line-clamp-1">
                        {file.role}
                      </span>
                    </span>
                    {isSelected && (
                      <span
                        className={cn('ml-auto shrink-0 text-[10px] font-bold', st.text)}
                        aria-hidden="true"
                      >
                        ●
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 우측: 흐름도 + 선택 패널 */}
        <div className="flex flex-col gap-md min-w-0">
          {/* 흐름도 */}
          <div className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md">
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
              {content.flowLabel}
            </span>
            <ol className="mt-sm flex flex-col sm:flex-row sm:flex-wrap sm:items-stretch gap-1.5">
              {content.flow.map((step, idx) => {
                const t = toneTokens[step.tone];
                const Icon = flowIconByName[step.id];
                const on = highlightSet.has(step.id);
                const isLast = idx === content.flow.length - 1;
                return (
                  <Fragment key={step.id}>
                    <li
                      aria-current={on ? 'step' : undefined}
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-md border px-2 py-1.5 transition-all',
                        on
                          ? cn(t.chip, 'ring-1 ring-inset font-bold')
                          : 'border-dashed border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-dim)] opacity-60',
                      )}
                    >
                      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span className="text-[11px] leading-none break-keep">{step.label}</span>
                      {on && <span className="sr-only">(관련 단계)</span>}
                    </li>
                    {!isLast && (
                      <span
                        aria-hidden="true"
                        className="hidden sm:flex items-center text-[var(--term-dim)] text-[10px] self-center"
                      >
                        →
                      </span>
                    )}
                  </Fragment>
                );
              })}
            </ol>
          </div>

          {/* 선택 패널 */}
          <div
            aria-live="polite"
            className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-md sm:p-lg"
          >
            <div className="flex items-center gap-sm pb-sm border-b border-dashed border-[var(--term-border)]">
              <code
                className={cn(
                  'rounded border bg-[var(--term-bg)] px-2 py-1 font-mono text-sm font-bold [overflow-wrap:anywhere]',
                  st.chip,
                )}
              >
                {selected.name}
              </code>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
                  {content.panel.role}
                </span>
                <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                  {selected.role}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
                  {content.panel.internal}
                </span>
                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {selected.internal}
                </p>
              </div>
            </div>

            {/* 내부 흐름 체인 */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
                {content.panel.chain}
              </span>
              <ol className="flex flex-wrap items-center gap-1.5">
                {selected.chain.map((node, i) => (
                  <Fragment key={node}>
                    <li>
                      <code
                        className={cn(
                          'inline-block rounded border px-1.5 py-0.5 font-mono text-[10.5px] [overflow-wrap:anywhere]',
                          st.chip,
                        )}
                      >
                        {node}
                      </code>
                    </li>
                    {i < selected.chain.length - 1 && (
                      <span aria-hidden="true" className="text-[var(--term-dim)] text-[10px]">
                        →
                      </span>
                    )}
                  </Fragment>
                ))}
              </ol>
            </div>

            {/* 읽을 코드 입구 */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
                {content.panel.entries}
              </span>
              <ul className="flex flex-col gap-1.5">
                {selected.entries.map((entry) => (
                  <li key={entry}>
                    <code className="block rounded border border-[var(--term-border)] bg-[var(--term-bg)] px-2 py-1 font-mono text-[10.5px] leading-snug text-[var(--term-fg)] [overflow-wrap:anywhere]">
                      {entry}
                    </code>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { AppRouterComplexityContent, RouteOption, SegmentNode } from '../content';
import { LayoutIcon, PageIcon, TreeIcon } from '../icons';

type Props = { content: AppRouterComplexityContent['segmentTree'] };

const TreeNodeRow = ({
  node,
  depth,
  isLeaf,
  statusKept,
  statusReplaced,
}: {
  node: SegmentNode;
  depth: number;
  isLeaf: boolean;
  statusKept: string;
  statusReplaced: string;
}) => {
  const isLayout = node.kind === 'layout';
  const tone = isLayout ? toneTokens.blue : toneTokens.teal;
  const status = isLayout ? statusKept : statusReplaced;

  return (
    <div className="flex items-center" style={{ paddingLeft: `${depth * 1.25}rem` }}>
      {depth > 0 && (
        <span
          aria-hidden="true"
          className="mr-1 font-mono text-[var(--term-dim)] text-xsm select-none"
        >
          └─
        </span>
      )}
      <div
        className={cn(
          'flex min-w-0 flex-1 items-center gap-sm rounded-md border px-sm py-2',
          tone.chip,
          isLeaf && 'ring-1 ring-inset',
        )}
      >
        <span aria-hidden="true" className="shrink-0">
          {isLayout ? <LayoutIcon className="h-4 w-4" /> : <PageIcon className="h-4 w-4" />}
        </span>
        <code className="min-w-0 flex-1 font-mono text-xsm font-bold [overflow-wrap:anywhere]">
          {node.label}
        </code>
        <span
          className={cn(
            'shrink-0 rounded-full border px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider',
            isLayout
              ? 'border-blue-300 text-blue-700 dark:border-blue-700 dark:text-blue-200'
              : 'border-teal-300 text-teal-700 dark:border-teal-700 dark:text-teal-200',
          )}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

const ListBlock = ({
  label,
  items,
  variant,
}: {
  label: string;
  items: string[];
  variant: 'kept' | 'replaced';
}) => (
  <div className="flex flex-col gap-1.5">
    <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
      {label}
    </span>
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item}>
          <code
            className={cn(
              'inline-block rounded border px-1.5 py-0.5 font-mono text-[10.5px] [overflow-wrap:anywhere]',
              variant === 'kept'
                ? 'border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800/60 dark:bg-blue-950/30 dark:text-blue-200'
                : 'border-teal-200 bg-teal-50 text-teal-800 dark:border-teal-800/60 dark:bg-teal-950/30 dark:text-teal-200',
            )}
          >
            {item}
          </code>
        </li>
      ))}
    </ul>
  </div>
);

export const SegmentTreeExplorer = ({ content }: Props) => {
  const [selectedId, setSelectedId] = useState<RouteOption['id']>(content.options[0].id);
  const selected = content.options.find((o) => o.id === selectedId) ?? content.options[0];

  return (
    <section
      id="section-segment-tree"
      aria-labelledby="heading-segment-tree"
      className="space-y-lg rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-md sm:p-lg lg:p-xl"
    >
      <SectionHeader
        id="segment-tree"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<TreeIcon className="h-5 w-5" />}
      />

      {/* 경로 선택 */}
      <div className="flex flex-col gap-sm">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
          {content.optionLabel}
        </span>
        <ul className="flex flex-wrap gap-2" role="group" aria-label="route options">
          {content.options.map((opt) => {
            const isSelected = opt.id === selected.id;
            return (
              <li key={opt.id}>
                <button
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedId(opt.id)}
                  className={cn(
                    'inline-flex items-center rounded-full border px-3 py-1.5 font-mono text-xsm font-bold transition-colors [overflow-wrap:anywhere]',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-surface)]',
                    isSelected
                      ? 'border-[var(--term-accent)] bg-[var(--term-accent-soft)] text-[var(--term-accent)] ring-1 ring-[var(--term-accent)]'
                      : 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] hover:border-[var(--term-accent)] hover:text-[var(--term-fg)]',
                  )}
                >
                  {opt.path}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_0.9fr)] gap-md lg:gap-lg items-start">
        {/* 트리 시각화 */}
        <div className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md">
          <ul className="flex flex-col gap-1.5" aria-label={`segment tree for ${selected.path}`}>
            {selected.nodes.map((node, idx) => (
              <li key={node.label}>
                <TreeNodeRow
                  node={node}
                  depth={idx}
                  isLeaf={idx === selected.nodes.length - 1}
                  statusKept={content.statusKept}
                  statusReplaced={content.statusReplaced}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* 설명 패널 */}
        <div
          aria-live="polite"
          className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg"
        >
          <code className="w-fit max-w-full rounded border border-[var(--term-accent)] bg-[var(--term-accent-soft)] px-2 py-1 font-mono text-xsm font-bold text-[var(--term-accent)] [overflow-wrap:anywhere]">
            {selected.path}
          </code>

          <ListBlock label={content.panel.kept} items={selected.kept} variant="kept" />
          <ListBlock label={content.panel.replaced} items={selected.replaced} variant="replaced" />

          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
              {content.panel.desc}
            </span>
            <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
              {selected.description}
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
              {content.panel.concepts}
            </span>
            <ul className="flex flex-wrap gap-1.5">
              {selected.concepts.map((c) => (
                <li key={c}>
                  <code className="inline-block rounded border border-[var(--term-border)] bg-[var(--term-surface)] px-1.5 py-0.5 font-mono text-[10.5px] text-[var(--term-muted)] [overflow-wrap:anywhere]">
                    {c}
                  </code>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 핵심 메시지 배너 */}
      <div className="flex items-start gap-sm rounded-md border border-cyan-200 bg-cyan-50 p-md dark:border-cyan-800/60 dark:bg-cyan-950/30">
        <span
          aria-hidden="true"
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded bg-cyan-500 text-white dark:bg-cyan-400 dark:text-slate-900"
        >
          <TreeIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm font-medium leading-snug text-cyan-900 dark:text-cyan-100 break-keep">
          {content.banner}
        </p>
      </div>
    </section>
  );
};

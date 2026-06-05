import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { FlowNode, WorkLoopContent } from '../content';
import { ArrowRightIcon, LightbulbIcon } from '../icons';

type Props = { content: WorkLoopContent['hero'] };

export const WorkLoopHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/work-loop.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// sync vs concurrent'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.82fr)_minmax(0,_1.18fr)]"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
        <span className="block">{content.title.line3}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[58ch]">{content.description}</HeroDescription>

      <aside
        className={cn(
          'mt-sm flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
            'bg-amber-100 text-amber-700 border border-amber-200/80',
            'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
          )}
        >
          <LightbulbIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.callout}
        </p>
      </aside>
    </HeroTextColumn>

    <HeroVisualColumn className="min-w-0">
      <HeroDiagram diagram={content.diagram} />
    </HeroVisualColumn>
  </HeroSection>
);

const HeroDiagram = ({ diagram }: { diagram: WorkLoopContent['hero']['diagram'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-sky-50/40 via-white to-teal-50/40',
      'dark:from-sky-950/20 dark:via-[var(--term-bg)] dark:to-teal-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="mb-md flex items-center justify-between gap-2">
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {'// fiber loop preview'}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
        loop preview
      </span>
    </header>

    <h2 className="mb-md text-sm sm:text-md font-bold text-[var(--term-fg)] text-center break-keep">
      {diagram.title}
    </h2>

    <FlowRow
      kind="sync"
      label={diagram.sync.label}
      sideText={diagram.sync.sideText}
      nodes={diagram.sync.nodes}
    />

    <div className="my-md h-px w-full bg-[var(--term-border)]" aria-hidden="true" />

    <FlowRow
      kind="concurrent"
      label={diagram.concurrent.label}
      sideText={diagram.concurrent.sideText}
      nodes={diagram.concurrent.nodes}
      yieldSubNote={diagram.concurrent.yieldSubNote}
      resumeNote={diagram.concurrent.resumeNote}
    />
  </div>
);

type FlowRowProps = {
  kind: 'sync' | 'concurrent';
  label: string;
  sideText: string;
  nodes: FlowNode[];
  yieldSubNote?: string;
  resumeNote?: string;
};

const FlowRow = ({ kind, label, sideText, nodes, yieldSubNote, resumeNote }: FlowRowProps) => {
  const palette = kindPalette[kind];
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
            'text-[10px] font-mono font-bold uppercase tracking-wider',
            palette.pill,
          )}
        >
          {label}
        </span>
        <span className={cn('text-xxsm sm:text-xsm font-bold break-keep', palette.text)}>
          {sideText}
        </span>
      </div>

      {/* Flow row: wrap on small screens */}
      <ol className="flex flex-wrap items-start gap-1.5 sm:gap-2">
        {nodes.map((node, idx) => {
          const isYield = !!node.yield;
          const isLastReal = !isYield && idx === nodes.length - 1;
          return (
            <Fragment key={`${node.label}-${idx}`}>
              <li className="flex flex-col items-center min-w-0 max-w-[88px]">
                <FlowNodeBox node={node} kind={kind} />
                <span
                  className={cn(
                    'mt-1 text-[10px] sm:text-xsm leading-snug text-center break-keep',
                    isYield ? palette.text + ' font-bold' : 'text-[var(--term-muted)]',
                  )}
                >
                  {node.caption}
                </span>
                {isYield && yieldSubNote && (
                  <span
                    className={cn(
                      'mt-0.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-center break-keep',
                      palette.text,
                    )}
                  >
                    {yieldSubNote}
                  </span>
                )}
                {isLastReal && resumeNote && (
                  <span
                    className={cn(
                      'mt-0.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-center break-keep',
                      palette.text,
                    )}
                  >
                    {resumeNote}
                  </span>
                )}
              </li>
              {idx < nodes.length - 1 && (
                <span
                  aria-hidden="true"
                  className={cn(
                    'flex shrink-0 items-center justify-center pt-4 sm:pt-5',
                    palette.arrow,
                  )}
                >
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              )}
            </Fragment>
          );
        })}
      </ol>
    </div>
  );
};

const FlowNodeBox = ({ node, kind }: { node: FlowNode; kind: 'sync' | 'concurrent' }) => {
  const palette = kindPalette[kind];
  const isYield = !!node.yield;
  return (
    <article
      className={cn(
        'flex flex-col items-center justify-center gap-0.5',
        'h-12 w-12 sm:h-14 sm:w-14 rounded-xl border',
        isYield
          ? cn('border-dashed', palette.yieldBg, palette.yieldText, palette.yieldBorder)
          : cn(palette.nodeBg, palette.nodeText, palette.nodeBorder),
        'shadow-[0_1px_0_var(--term-border)]',
      )}
      aria-label={node.caption}
    >
      <span className="text-md sm:text-lg font-bold leading-none">{node.label}</span>
    </article>
  );
};

const kindPalette = {
  sync: {
    pill: 'border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200',
    text: 'text-sky-700 dark:text-sky-200',
    arrow: 'text-sky-500/80 dark:text-sky-300/80',
    nodeBg: 'bg-sky-50 dark:bg-sky-950/40',
    nodeText: 'text-sky-800 dark:text-sky-100',
    nodeBorder: 'border-sky-300/80 dark:border-sky-700/70',
    yieldBg: 'bg-sky-50/60 dark:bg-sky-950/30',
    yieldText: 'text-sky-700 dark:text-sky-200',
    yieldBorder: 'border-sky-300/80 dark:border-sky-700/70',
  },
  concurrent: {
    pill: 'border-teal-300/80 bg-teal-50 text-teal-700 dark:border-teal-800/70 dark:bg-teal-950/60 dark:text-teal-200',
    text: 'text-teal-700 dark:text-teal-200',
    arrow: 'text-teal-500/80 dark:text-teal-300/80',
    nodeBg: 'bg-teal-50 dark:bg-teal-950/40',
    nodeText: 'text-teal-800 dark:text-teal-100',
    nodeBorder: 'border-teal-300/80 dark:border-teal-700/70',
    yieldBg: 'bg-amber-50/70 dark:bg-amber-950/30',
    yieldText: 'text-amber-700 dark:text-amber-200',
    yieldBorder: 'border-amber-300/80 dark:border-amber-700/70',
  },
} as const;

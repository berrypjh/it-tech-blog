import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FlowNode, WorkLoopContent } from '../content';
import { ArrowRightIcon, PauseCircleIcon, RotateCwIcon } from '../icons';

type Props = { content: WorkLoopContent['hero'] };

/**
 * Hero 핵심 비주얼.
 * while(workInProgress) 루프가 performUnitOfWork로 Fiber를 하나씩 처리하는 흐름을,
 * 동기(sync) / 동시성(concurrent) 두 가지 work loop로 나란히 보여주는 컴팩트 stepper.
 */
export const WorkLoopHeroDiagram = ({ content }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}. ${diagram.sync.label}: ${diagram.sync.nodes
    .map((n) => n.caption)
    .join(' → ')}. ${diagram.concurrent.label}: ${diagram.concurrent.nodes
    .map((n) => n.caption)
    .join(' → ')}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <div className="flex items-center gap-sm">
          <ToneIconBox tone="teal" size="sm">
            <RotateCwIcon className="h-[18px] w-[18px] animate-[spin_8s_linear_infinite] motion-reduce:animate-none" />
          </ToneIconBox>
          <h2 className="min-w-0 text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {diagram.title}
          </h2>
        </div>

        <CodePreviewPanel
          code={'while (workInProgress !== null) {\n  performUnitOfWork(workInProgress);\n}'}
          showWindowDots
          language="JS"
          size="md"
        />

        <DownArrow />

        <LoopTrack
          tone="sky"
          label={diagram.sync.label}
          sideText={diagram.sync.sideText}
          nodes={diagram.sync.nodes}
        />

        <DownArrow />

        <LoopTrack
          tone="teal"
          label={diagram.concurrent.label}
          sideText={diagram.concurrent.sideText}
          nodes={diagram.concurrent.nodes}
          yieldSubNote={diagram.concurrent.yieldSubNote}
          resumeNote={diagram.concurrent.resumeNote}
        />
      </div>
    </HeroDiagramShell>
  );
};

type LoopTrackProps = {
  tone: ToneKey;
  label: string;
  sideText: string;
  nodes: FlowNode[];
  yieldSubNote?: string;
  resumeNote?: string;
};

const LoopTrack = ({ tone, label, sideText, nodes, yieldSubNote, resumeNote }: LoopTrackProps) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-lg border bg-[var(--term-bg)] px-md py-2.5',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        t.border,
      )}
    >
      <div className="flex flex-wrap items-center gap-x-sm gap-y-1">
        <span className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>{label}</span>
        <span className="text-xxsm uppercase tracking-wider text-[var(--term-muted)] break-keep">
          {sideText}
        </span>
      </div>

      <ol className="flex flex-wrap items-start gap-1.5">
        {nodes.map((node, idx) => {
          const isYield = !!node.yield;
          const isLastReal = !isYield && idx === nodes.length - 1;
          const subNote = isYield ? yieldSubNote : isLastReal ? resumeNote : undefined;
          return (
            <Fragment key={`${node.label}-${idx}`}>
              <li className="flex min-w-0 max-w-[84px] flex-col items-center gap-1">
                <LoopNode node={node} tone={tone} />
                <span
                  className={cn(
                    'text-center text-xxsm leading-snug break-keep',
                    isYield ? cn(toneTokens.amber.text, 'font-bold') : 'text-[var(--term-muted)]',
                  )}
                >
                  {node.caption}
                </span>
                {subNote && (
                  <span
                    className={cn(
                      'text-center text-[9px] font-mono uppercase tracking-wider break-keep',
                      t.text,
                    )}
                  >
                    {subNote}
                  </span>
                )}
              </li>
              {idx < nodes.length - 1 && (
                <span
                  aria-hidden="true"
                  className="flex shrink-0 items-center pt-2.5 text-[var(--term-accent)]"
                >
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              )}
            </Fragment>
          );
        })}
      </ol>
    </article>
  );
};

const LoopNode = ({ node, tone }: { node: FlowNode; tone: ToneKey }) => {
  const isYield = !!node.yield;
  return (
    <ToneIconBox
      tone={isYield ? 'amber' : tone}
      size="sm"
      className={isYield ? 'border-dashed' : undefined}
    >
      {isYield ? (
        <PauseCircleIcon className="h-[18px] w-[18px]" />
      ) : (
        <span className="text-sm font-bold leading-none">{node.label}</span>
      )}
    </ToneIconBox>
  );
};

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);

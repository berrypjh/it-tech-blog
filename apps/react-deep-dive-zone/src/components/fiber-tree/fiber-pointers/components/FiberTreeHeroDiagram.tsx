import { cn } from '@it-tech-blog/utils';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { toneTokens } from '../../../shared/tones';
import type { FiberTreePointersContent, PointerKind, TreeNode } from '../content';
import { MoveDownIcon, MoveRightIcon, MoveUpIcon } from '../icons';

import { pointerTone } from './pointerStyles';

type Props = { content: FiberTreePointersContent['hero']; className?: string };

const pointerIcon = {
  child: MoveDownIcon,
  sibling: MoveRightIcon,
  return: MoveUpIcon,
} as const;

/**
 * Hero 핵심 비주얼.
 * App→Page→Header→Main→Button→List를 DFS 순서로 따라가며,
 * 각 노드에 도달한 포인터(child/sibling/return)를 연결 칩으로 잇는 traversal 경로.
 */
export const FiberTreeHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.description} ${content.legendItems
    .map((item) => `${item.label}: ${item.meaning}`)
    .join(', ')}`;

  return (
    <HeroDiagramShell a11yLabel={a11y} className={className}>
      <div className="relative flex flex-col gap-md" aria-hidden="true">
        <div className="flex items-center justify-between">
          <TerminalBadge dotClassName="bg-[var(--term-accent)]">fiber pointers</TerminalBadge>
          <span className="font-mono text-[10px] text-[var(--term-muted)]">
            {'//'} child · sibling · return
          </span>
        </div>

        <ol className="flex flex-col">
          {content.nodes.map((node, index) => (
            <li key={node.id} className="flex flex-col">
              {node.enter && <PointerEdge kind={node.enter} />}
              <NodeRow node={node} index={index} />
            </li>
          ))}
        </ol>

        <Legend title={content.legendTitle} items={content.legendItems} />
      </div>
    </HeroDiagramShell>
  );
};

const NodeRow = ({ node, index }: { node: TreeNode; index: number }) => (
  <div
    className={cn(
      'flex items-center gap-2.5 rounded-xl border px-3 py-2',
      'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] font-mono text-[10px] font-bold text-[var(--term-muted)]">
      {index + 1}
    </span>
    <span className="font-mono text-sm font-bold tracking-tight text-[var(--term-fg)]">
      {node.label}
    </span>
    <span className="ml-auto truncate font-mono text-[10px] text-[var(--term-muted)]">
      {node.tag}
    </span>
  </div>
);

const PointerEdge = ({ kind }: { kind: PointerKind }) => {
  const t = toneTokens[pointerTone[kind]];
  const Icon = pointerIcon[kind];
  return (
    <div className="flex items-center gap-2 py-1 pl-3">
      <DownArrow />
      <span
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5',
          'font-mono text-[10px] font-bold uppercase tracking-wider',
          t.chip,
        )}
      >
        <Icon className="h-3 w-3" aria-hidden="true" />
        {kind}
      </span>
    </div>
  );
};

const Legend = ({
  title,
  items,
}: {
  title: string;
  items: FiberTreePointersContent['hero']['legendItems'];
}) => (
  <div className="flex flex-col gap-2 border-t border-dashed border-[var(--term-border)] pt-sm">
    <h3 className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
      {'//'} {title}
    </h3>
    <ul className="flex flex-col gap-1.5">
      {items.map((item) => {
        const t = toneTokens[pointerTone[item.kind]];
        const Icon = pointerIcon[item.kind];
        return (
          <li key={item.kind} className="flex items-center gap-2">
            <span
              className={cn(
                'inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-[11px] font-bold',
                t.chip,
              )}
            >
              <Icon className="h-3 w-3" aria-hidden="true" />
              {item.label}
            </span>
            <span className="text-xxsm text-[var(--term-muted)] break-keep">{item.meaning}</span>
          </li>
        );
      })}
    </ul>
  </div>
);

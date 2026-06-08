import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FiberTreePointersContent, PointerKind } from '../content';
import { MoveDownIcon, MoveRightIcon, MoveUpIcon, NetworkIcon } from '../icons';

type Props = { content: FiberTreePointersContent['hero']; className?: string };

const pointerTone: Record<PointerKind, ToneKey> = {
  child: 'emerald',
  sibling: 'violet',
  return: 'sky',
};

/**
 * Hero 핵심 비주얼.
 * App → Page → Header/Main → Button/List 트리를 ToneIconBox 노드로 그리고,
 * child(아래)·sibling(옆)·return(위) 세 포인터를 accent 화살표/라벨로 잇는다.
 */
export const FiberTreeHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.description} ${content.legendItems
    .map((item) => `${item.label}: ${item.meaning}`)
    .join(', ')}`;

  const nodeMap = Object.fromEntries(content.nodes.map((n) => [n.id, n]));

  return (
    <div
      className={cn(
        '@container relative w-full overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <div className="relative flex flex-col items-center gap-1" aria-hidden="true">
        <NodeChip node={nodeMap.App} tone="cyan" />
        <ArrowDown kind="child" />
        <NodeChip node={nodeMap.Page} tone="cyan" />
        <ArrowDown kind="child" />

        <div className="flex items-center justify-center gap-sm">
          <NodeChip node={nodeMap.Header} tone="emerald" />
          <ArrowRight kind="sibling" />
          <NodeChip node={nodeMap.Main} tone="emerald" />
        </div>

        <ArrowDown kind="child" />

        <div className="flex items-center justify-center gap-sm">
          <NodeChip node={nodeMap.Button} tone="violet" />
          <ArrowRight kind="sibling" />
          <NodeChip node={nodeMap.List} tone="violet" />
        </div>
      </div>

      <Legend title={content.legendTitle} items={content.legendItems} />
    </div>
  );
};

const NodeChip = ({
  node,
  tone,
}: {
  node: FiberTreePointersContent['hero']['nodes'][number];
  tone: ToneKey;
}) => {
  const t = toneTokens[tone];
  return (
    <span
      className={cn(
        'flex min-w-0 items-center gap-2 rounded-xl border px-3 py-1.5',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <NetworkIcon className="h-4 w-4" aria-hidden="true" />
      </ToneIconBox>
      <span className="flex min-w-0 flex-col leading-tight">
        <span className={cn('truncate font-mono text-sm font-bold tracking-tight', t.text)}>
          {node.label}
        </span>
        <span className="truncate text-[10px] font-mono text-[var(--term-muted)]">{node.tag}</span>
      </span>
    </span>
  );
};

const PointerLabel = ({ kind }: { kind: PointerKind }) => {
  const t = toneTokens[pointerTone[kind]];
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2 py-0.5',
        'font-mono text-[10px] font-bold uppercase tracking-wider',
        t.chip,
      )}
    >
      {kind}
    </span>
  );
};

const ArrowDown = ({ kind }: { kind: PointerKind }) => (
  <span className="inline-flex items-center gap-1.5">
    <span className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none">
      ↓
    </span>
    <PointerLabel kind={kind} />
  </span>
);

const ArrowRight = ({ kind }: { kind: PointerKind }) => (
  <span className="inline-flex flex-col items-center gap-0.5">
    <PointerLabel kind={kind} />
    <span className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none">
      →
    </span>
  </span>
);

const Legend = ({
  title,
  items,
}: {
  title: string;
  items: FiberTreePointersContent['hero']['legendItems'];
}) => (
  <div className="relative mt-md border-t border-dashed border-[var(--term-border)] pt-sm">
    <h3 className="mb-2 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
      {title}
    </h3>
    <ul className="flex flex-col gap-1.5">
      {items.map((item) => {
        const Icon =
          item.kind === 'child'
            ? MoveDownIcon
            : item.kind === 'sibling'
              ? MoveRightIcon
              : MoveUpIcon;
        const t = toneTokens[pointerTone[item.kind]];
        return (
          <li key={item.kind} className="flex items-center gap-2">
            <ToneIconBox tone={pointerTone[item.kind]} size="sm">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </ToneIconBox>
            <span
              className={cn(
                'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[11px] font-bold',
                t.chip,
              )}
            >
              {item.label}
            </span>
            <span className="text-xxsm text-[var(--term-muted)] break-keep">{item.meaning}</span>
          </li>
        );
      })}
    </ul>
  </div>
);

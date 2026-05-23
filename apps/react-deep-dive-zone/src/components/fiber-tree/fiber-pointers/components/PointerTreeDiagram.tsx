import { cn } from '@it-tech-blog/utils';

import type { FiberTreePointersContent } from '../content';

import { pointerChip } from './pointerStyles';

type Props = {
  nodes: FiberTreePointersContent['hero']['nodes'];
  legendTitle: string;
  legendItems: FiberTreePointersContent['hero']['legendItems'];
};

/**
 * Visualises the App → Page → Header/Main → Button/List tree with the
 * three pointer kinds drawn as labelled connectors between rounded
 * node cards.  Layout is grid-based so it works in both column counts
 * (4-col on desktop, narrower on smaller viewports via horizontal scroll).
 */
export const PointerTreeDiagram = ({ nodes, legendTitle, legendItems }: Props) => {
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));
  return (
    <div
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="overflow-x-auto -mx-md sm:-mx-lg px-md sm:px-lg">
        <div className="min-w-[460px]">
          {/* Row 1: App */}
          <div className="flex justify-center">
            <NodeCard node={nodeMap.App} />
          </div>
          {/* connector App -> Page */}
          <Connector label="child" kind="child" orientation="vertical" />

          {/* Row 2: Page */}
          <div className="flex justify-center">
            <NodeCard node={nodeMap.Page} />
          </div>
          {/* Page → Header / Main with sibling */}
          <div className="grid grid-cols-2 mt-3 gap-x-4 sm:gap-x-8">
            <div className="flex flex-col items-center gap-1">
              <Connector label="child" kind="child" orientation="vertical" compact />
              <NodeCard node={nodeMap.Header} />
            </div>
            <div className="flex flex-col items-center gap-1">
              {/* Combined sibling+child marker - sibling label drawn between Header and Main visually */}
              <div className="w-full flex items-start gap-1">
                <span aria-hidden="true" className="flex-1 self-center">
                  <SiblingArrow />
                </span>
              </div>
              <NodeCard node={nodeMap.Main} />
            </div>
          </div>

          {/* Main has child Button */}
          <div className="mt-3 grid grid-cols-2 gap-x-4 sm:gap-x-8">
            <div />
            <div className="flex flex-col items-center gap-1">
              <Connector label="child" kind="child" orientation="vertical" compact />
              <div className="flex items-center gap-2 sm:gap-3">
                <NodeCard node={nodeMap.Button} />
                <span aria-hidden="true" className="self-center">
                  <SiblingArrowHorizontal />
                </span>
                <NodeCard node={nodeMap.List} />
              </div>
            </div>
          </div>

          {/* Return summary row */}
          <div className="mt-md grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10.5px] font-mono text-sky-700 dark:text-sky-300 px-2">
            <ReturnRow from="Header" to="Page" />
            <ReturnRow from="Main" to="Page" />
            <ReturnRow from="Button" to="Main" />
            <ReturnRow from="List" to="Main" />
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-md border-t border-dashed border-[var(--term-border)] pt-sm">
        <h3 className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] mb-2">
          {legendTitle}
        </h3>
        <ul className="flex flex-wrap gap-md">
          {legendItems.map((item) => (
            <li key={item.kind} className="flex items-center gap-2">
              <LegendLine kind={item.kind} />
              <span
                className={cn(
                  'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[11px] font-bold',
                  pointerChip[item.kind],
                )}
              >
                {item.label}
              </span>
              <span className="text-xxsm text-[var(--term-muted)] break-keep">{item.meaning}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const NodeCard = ({ node }: { node: FiberTreePointersContent['hero']['nodes'][number] }) => (
  <article
    className={cn(
      'rounded-xl border bg-white dark:bg-slate-900/60 px-3 py-1.5 min-w-[110px]',
      'border-slate-200/80 dark:border-slate-700/70 shadow-[0_2px_0_var(--term-border)]',
      'text-center',
    )}
  >
    <h4 className="text-xsm font-bold text-[var(--term-fg)] leading-tight">{node.label}</h4>
    <span className="text-[10px] font-mono text-[var(--term-muted)] block">{node.tag}</span>
  </article>
);

const Connector = ({
  label,
  kind,
  orientation,
  compact,
}: {
  label: string;
  kind: 'child' | 'sibling' | 'return';
  orientation: 'vertical' | 'horizontal';
  compact?: boolean;
}) => {
  const color =
    kind === 'child'
      ? 'border-emerald-500/80 dark:border-emerald-400/70'
      : kind === 'sibling'
        ? 'border-violet-500/80 dark:border-violet-400/70'
        : 'border-sky-500/80 dark:border-sky-400/70';
  const style = kind === 'return' ? 'border-dashed' : 'border-solid';
  if (orientation === 'vertical') {
    return (
      <div className={cn('flex flex-col items-center', compact ? 'my-1' : 'my-2')}>
        <span
          aria-hidden="true"
          className={cn('block w-px border-l-2', color, style, compact ? 'h-3' : 'h-5')}
        />
        <span className={cn('text-[10px] font-mono font-bold', pointerTextColor(kind))}>
          {label}
        </span>
        <span
          aria-hidden="true"
          className={cn('block w-px border-l-2', color, style, compact ? 'h-3' : 'h-5')}
        />
      </div>
    );
  }
  return (
    <span className="flex items-center gap-1">
      <span aria-hidden="true" className={cn('block h-px w-4 border-t-2', color, style)} />
      <span className={cn('text-[10px] font-mono font-bold', pointerTextColor(kind))}>{label}</span>
      <span aria-hidden="true" className={cn('block h-px w-4 border-t-2', color, style)} />
    </span>
  );
};

const pointerTextColor = (kind: 'child' | 'sibling' | 'return') =>
  kind === 'child'
    ? 'text-emerald-700 dark:text-emerald-300'
    : kind === 'sibling'
      ? 'text-violet-700 dark:text-violet-300'
      : 'text-sky-700 dark:text-sky-300';

const SiblingArrow = () => (
  // Horizontal sibling arrow between Header and Main (top of row 3 layout)
  <span className="flex items-center justify-start gap-1 -mt-2 -ml-3">
    <span
      aria-hidden="true"
      className="block h-px w-4 sm:w-6 border-t-2 border-violet-500/80 dark:border-violet-400/70"
    />
    <span className="text-[10px] font-mono font-bold text-violet-700 dark:text-violet-300">
      sibling
    </span>
    <span
      aria-hidden="true"
      className="block h-0 w-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-violet-500/80 dark:border-l-violet-400/70"
    />
  </span>
);

const SiblingArrowHorizontal = () => (
  <span className="flex items-center gap-1">
    <span
      aria-hidden="true"
      className="block h-px w-3 sm:w-5 border-t-2 border-violet-500/80 dark:border-violet-400/70"
    />
    <span className="text-[10px] font-mono font-bold text-violet-700 dark:text-violet-300">
      sibling
    </span>
    <span
      aria-hidden="true"
      className="block h-0 w-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-violet-500/80 dark:border-l-violet-400/70"
    />
  </span>
);

const LegendLine = ({ kind }: { kind: 'child' | 'sibling' | 'return' }) => {
  const color =
    kind === 'child'
      ? 'border-emerald-500/80 dark:border-emerald-400/70'
      : kind === 'sibling'
        ? 'border-violet-500/80 dark:border-violet-400/70'
        : 'border-sky-500/80 dark:border-sky-400/70';
  const style = kind === 'return' ? 'border-dashed' : 'border-solid';
  return <span aria-hidden="true" className={cn('block h-px w-8 border-t-2', color, style)} />;
};

const ReturnRow = ({ from, to }: { from: string; to: string }) => (
  <div className="flex items-center gap-1">
    <span
      aria-hidden="true"
      className="block h-px w-4 border-t-2 border-dashed border-sky-500/80 dark:border-sky-400/70"
    />
    <code className="font-mono">
      {from}.<span className="font-bold">return</span> → {to}
    </code>
  </div>
);

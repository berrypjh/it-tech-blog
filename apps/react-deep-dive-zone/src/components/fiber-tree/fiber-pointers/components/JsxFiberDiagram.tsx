import { cn } from '@it-tech-blog/utils';

import type { FiberTreePointersContent } from '../content';

type Props = {
  nodes: FiberTreePointersContent['conversion']['diagramNodes'];
};

/**
 * Diagram for Card → Header/Main → Button/List with child / sibling / return arrows.
 * Reads the diagramNodes prop but the layout is hard-coded to match the JSX example.
 */
export const JsxFiberDiagram = ({ nodes }: Props) => {
  const map = Object.fromEntries(nodes.map((n) => [n.id, n]));
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[360px]">
        {/* Row 1: Card */}
        <div className="flex justify-center">
          <NodeCard node={map.Card} />
        </div>
        <VerticalConnector kind="child" />

        {/* Row 2: Header [sibling] Main */}
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <NodeCard node={map.Header} />
          <HorizontalArrow kind="sibling" />
          <NodeCard node={map.Main} />
        </div>

        {/* Main has child Button [sibling] List */}
        <div className="grid grid-cols-2 mt-1">
          <div />
          <div className="flex flex-col items-center">
            <VerticalConnector kind="child" />
            <div className="flex items-center gap-2 sm:gap-3">
              <NodeCard node={map.Button} />
              <HorizontalArrow kind="sibling" />
              <NodeCard node={map.List} />
            </div>
          </div>
        </div>

        {/* return summary */}
        <div className="mt-md grid grid-cols-1 sm:grid-cols-2 gap-1 px-2 text-[10.5px] font-mono text-sky-700 dark:text-sky-300">
          <ReturnRow from="Header" to="Card" />
          <ReturnRow from="Main" to="Card" />
          <ReturnRow from="Button" to="Main" />
          <ReturnRow from="List" to="Main" />
        </div>
      </div>
    </div>
  );
};

const NodeCard = ({
  node,
}: {
  node: FiberTreePointersContent['conversion']['diagramNodes'][number];
}) => (
  <article
    className={cn(
      'rounded-xl border bg-white dark:bg-slate-900/60 px-3 py-1.5 min-w-[90px]',
      'border-slate-200/80 dark:border-slate-700/70 shadow-[0_2px_0_var(--term-border)]',
      'text-center',
    )}
  >
    <h4 className="text-xsm font-bold text-[var(--term-fg)] leading-tight">{node.label}</h4>
    <span className="text-[10px] font-mono text-[var(--term-muted)] block">{node.tag}</span>
  </article>
);

const VerticalConnector = ({ kind }: { kind: 'child' }) => (
  <div className="flex flex-col items-center my-1">
    <span
      aria-hidden="true"
      className="block w-px h-3 border-l-2 border-emerald-500/80 dark:border-emerald-400/70"
    />
    <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-300">
      {kind}
    </span>
    <span
      aria-hidden="true"
      className="block w-px h-3 border-l-2 border-emerald-500/80 dark:border-emerald-400/70"
    />
  </div>
);

const HorizontalArrow = ({ kind }: { kind: 'sibling' }) => (
  <span className="flex items-center gap-1">
    <span
      aria-hidden="true"
      className="block h-px w-3 sm:w-5 border-t-2 border-violet-500/80 dark:border-violet-400/70"
    />
    <span className="text-[10px] font-mono font-bold text-violet-700 dark:text-violet-300">
      {kind}
    </span>
    <span
      aria-hidden="true"
      className="block h-0 w-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-violet-500/80 dark:border-l-violet-400/70"
    />
  </span>
);

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

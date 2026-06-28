import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../shared/tones';
import type { FiberTreePointersContent } from '../content';

import { pointerTone } from './pointerStyles';

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
        <VerticalConnector />

        {/* Row 2: Header [sibling] Main */}
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <NodeCard node={map.Header} />
          <HorizontalArrow />
          <NodeCard node={map.Main} />
        </div>

        {/* Main has child Button [sibling] List */}
        <div className="grid grid-cols-2 mt-1">
          <div />
          <div className="flex flex-col items-center">
            <VerticalConnector />
            <div className="flex items-center gap-2 sm:gap-3">
              <NodeCard node={map.Button} />
              <HorizontalArrow />
              <NodeCard node={map.List} />
            </div>
          </div>
        </div>

        {/* return summary */}
        <div
          className={cn(
            'mt-md grid grid-cols-1 sm:grid-cols-2 gap-1 px-2 text-[10.5px] font-mono',
            toneTokens[pointerTone.return].text,
          )}
        >
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
      'rounded-xl border bg-[var(--term-surface)] px-3 py-1.5 min-w-[90px] text-center',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <h4 className="text-xsm font-bold text-[var(--term-fg)] leading-tight">{node.label}</h4>
    <span className="text-[10px] font-mono text-[var(--term-muted)] block">{node.tag}</span>
  </article>
);

const VerticalConnector = () => (
  <div className="flex flex-col items-center my-1">
    <span
      aria-hidden="true"
      className={cn('block w-px h-3 border-l-2', toneTokens.emerald.border)}
    />
    <span className={cn('text-[10px] font-mono font-bold', toneTokens.emerald.text)}>child</span>
    <span
      aria-hidden="true"
      className={cn('block w-px h-3 border-l-2', toneTokens.emerald.border)}
    />
  </div>
);

const HorizontalArrow = () => (
  <span className="flex items-center gap-1">
    <span
      aria-hidden="true"
      className={cn('block h-px w-3 sm:w-5 border-t-2', toneTokens.violet.border)}
    />
    <span className={cn('text-[10px] font-mono font-bold', toneTokens.violet.text)}>sibling</span>
    <span aria-hidden="true" className={cn('text-xsm leading-none', toneTokens.violet.text)}>
      →
    </span>
  </span>
);

const ReturnRow = ({ from, to }: { from: string; to: string }) => (
  <div className="flex items-center gap-1">
    <span
      aria-hidden="true"
      className={cn('block h-px w-4 border-t-2 border-dashed', toneTokens.sky.border)}
    />
    <code className="font-mono">
      {from}.<span className="font-bold">return</span> → {to}
    </code>
  </div>
);

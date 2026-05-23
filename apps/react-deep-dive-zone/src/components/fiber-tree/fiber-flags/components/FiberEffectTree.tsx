import { cn } from '@it-tech-blog/utils';

import type { EffectKind, FiberFlagsContent, TreeNode } from '../content';

import { effectBadge, effectNodeBorder } from './effectStyles';

type Props = {
  tree: TreeNode[];
  legend: FiberFlagsContent['hero']['legend'];
};

export const FiberEffectTree = ({ tree, legend }: Props) => {
  const map = Object.fromEntries(tree.map((n) => [n.id, n]));
  return (
    <div
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="overflow-x-auto -mx-md sm:-mx-lg px-md sm:px-lg">
        <div className="min-w-[460px]">
          {/* App */}
          <div className="flex justify-center">
            <NodeCard node={map.App} />
          </div>
          <VerticalLine />

          {/* Page (Update) */}
          <div className="flex justify-center">
            <NodeCard node={map.Page} />
          </div>

          {/* Page → Header / Main */}
          <div className="grid grid-cols-2 mt-2 gap-x-3 sm:gap-x-6">
            <div className="flex flex-col items-center gap-1">
              <VerticalLine compact />
              <NodeCard node={map.Header} />
            </div>
            <div className="flex flex-col items-center gap-1">
              <VerticalLine compact />
              <NodeCard node={map.Main} />
            </div>
          </div>

          {/* Main has children: Button (Update), List (Placement), OldItem (ChildDeletion) */}
          <div className="grid grid-cols-2 mt-2 gap-x-3 sm:gap-x-6">
            <div />
            <div className="flex flex-col items-center gap-1">
              <VerticalLine compact />
              <ul className="grid grid-cols-3 gap-2">
                <li className="flex justify-center">
                  <NodeCard node={map.Button} />
                </li>
                <li className="flex justify-center">
                  <NodeCard node={map.List} />
                </li>
                <li className="flex justify-center">
                  <NodeCard node={map.OldItem} dashedConnection />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-md border-t border-dashed border-[var(--term-border)] pt-sm">
        <h3 className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] mb-2">
          {`// effect badge`}
        </h3>
        <ul className="flex flex-wrap gap-md">
          {legend.map((item) => (
            <li key={item.kind} className="flex items-center gap-2">
              <span
                className={cn(
                  'inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[11px] font-bold',
                  effectBadge[item.kind],
                )}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const VerticalLine = ({ compact }: { compact?: boolean }) => (
  <span
    aria-hidden="true"
    className={cn(
      'block w-px border-l-2 border-slate-300/80 dark:border-slate-700/70 my-1',
      compact ? 'h-3' : 'h-5',
    )}
  />
);

const NodeCard = ({ node, dashedConnection }: { node: TreeNode; dashedConnection?: boolean }) => {
  if (!node) return null;
  const effect = node.effect && node.effect !== 'normal' ? (node.effect as EffectKind) : undefined;
  return (
    <article
      className={cn(
        'relative rounded-xl border-2 bg-white dark:bg-slate-900/60 px-2.5 py-1.5 min-w-[100px]',
        'shadow-[0_2px_0_var(--term-border)]',
        effect ? effectNodeBorder[effect] : 'border-slate-200/80 dark:border-slate-700/70',
        dashedConnection && 'opacity-90',
      )}
    >
      <h4 className="text-xsm font-bold text-[var(--term-fg)] leading-tight text-center">
        {node.label}
      </h4>
      <span className="text-[9.5px] font-mono text-[var(--term-muted)] block text-center">
        {node.tag}
      </span>
      {effect && (
        <span
          className={cn(
            'absolute -top-2.5 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full border px-1.5 py-0 font-mono text-[9.5px] font-bold whitespace-nowrap',
            effectBadge[effect],
          )}
        >
          {effect === 'placement' ? 'Placement' : effect === 'update' ? 'Update' : 'ChildDeletion'}
        </span>
      )}
    </article>
  );
};

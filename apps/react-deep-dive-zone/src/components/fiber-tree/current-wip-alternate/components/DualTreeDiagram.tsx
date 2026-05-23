import { cn } from '@it-tech-blog/utils';

import type { CurrentWipAlternateContent } from '../content';

type Props = {
  currentTitle: string;
  currentSubtitle: string;
  wipTitle: string;
  wipSubtitle: string;
  centerLabel: string;
  centerSubLabel: string;
  nodes: CurrentWipAlternateContent['hero']['nodes'];
};

export const DualTreeDiagram = ({
  currentTitle,
  currentSubtitle,
  wipTitle,
  wipSubtitle,
  centerLabel,
  centerSubLabel,
  nodes,
}: Props) => (
  <div
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    {/* Titles */}
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-sm mb-md">
      <div className="flex flex-col items-center">
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-3 py-1 font-mono text-xsm font-bold',
            'bg-sky-100 text-sky-800 border-sky-300/80',
            'dark:bg-sky-950/60 dark:text-sky-100 dark:border-sky-700/70',
          )}
        >
          {currentTitle}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 mt-1">
          {currentSubtitle}
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-full',
            'bg-violet-100 text-violet-700 border-2 border-violet-300/80',
            'dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-700/70',
          )}
        >
          ⇄
        </span>
        <span className="mt-1 text-[10px] font-mono uppercase tracking-wider font-bold text-violet-700 dark:text-violet-300">
          {centerLabel}
        </span>
        <span className="text-[9.5px] text-violet-700/70 dark:text-violet-300/70 break-keep text-center max-w-[120px]">
          {centerSubLabel}
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-3 py-1 font-mono text-xsm font-bold',
            'bg-emerald-100 text-emerald-800 border-emerald-300/80',
            'dark:bg-emerald-950/60 dark:text-emerald-100 dark:border-emerald-700/70',
          )}
        >
          {wipTitle}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700/80 dark:text-emerald-300/80 mt-1">
          {wipSubtitle}
        </span>
      </div>
    </div>

    {/* Tree pairs with alternate connectors */}
    <ul className="flex flex-col gap-2">
      {nodes.map((node, i) => (
        <li key={node.id} className="grid grid-cols-[1fr_auto_1fr] items-center gap-sm">
          <TreeCard side="current" label={node.label} depth={i} />
          <Connector />
          <TreeCard side="wip" label={node.label} depth={i} />
        </li>
      ))}
    </ul>
  </div>
);

const TreeCard = ({
  side,
  label,
  depth,
}: {
  side: 'current' | 'wip';
  label: string;
  depth: number;
}) => (
  <article
    className={cn(
      'rounded-xl border-2 px-3 py-1.5 text-center min-w-0',
      side === 'current'
        ? 'border-sky-200/80 bg-sky-50/60 dark:border-sky-800/60 dark:bg-sky-950/30'
        : 'border-emerald-200/80 bg-emerald-50/60 dark:border-emerald-800/60 dark:bg-emerald-950/30',
    )}
    style={{ marginLeft: depth >= 2 ? depth * 4 : 0, marginRight: depth >= 2 ? depth * 4 : 0 }}
  >
    <code
      className={cn(
        'font-mono text-xsm font-bold',
        side === 'current'
          ? 'text-sky-800 dark:text-sky-100'
          : 'text-emerald-800 dark:text-emerald-100',
      )}
    >
      {label}
    </code>
  </article>
);

const Connector = () => (
  <span aria-hidden="true" className="flex items-center justify-center w-12">
    <span className="block h-px w-full border-t-2 border-dashed border-violet-400/70 dark:border-violet-500/70" />
  </span>
);

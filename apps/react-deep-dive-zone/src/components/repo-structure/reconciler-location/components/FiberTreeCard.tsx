import { cn } from '@it-tech-blog/utils';

import type { FiberTreeNode, ReconcilerEntryContent } from '../content';

type Props = { content: ReconcilerEntryContent['process'] };

const stateClass: Record<FiberTreeNode['state'], string> = {
  none: 'border-emerald-300 bg-emerald-50/80 text-emerald-800 dark:border-emerald-700/60 dark:bg-emerald-950/30 dark:text-emerald-200',
  update:
    'border-violet-300 bg-violet-50/80 text-violet-800 dark:border-violet-700/60 dark:bg-violet-950/30 dark:text-violet-200',
  placement:
    'border-orange-300 bg-orange-50/80 text-orange-800 dark:border-orange-700/60 dark:bg-orange-950/30 dark:text-orange-200',
  deletion:
    'border-rose-300 bg-rose-50/80 text-rose-800 dark:border-rose-700/60 dark:bg-rose-950/30 dark:text-rose-200',
};

const stateDotClass: Record<FiberTreeNode['state'], string> = {
  none: 'bg-emerald-500 dark:bg-emerald-400',
  update: 'bg-violet-500 dark:bg-violet-400',
  placement: 'bg-orange-500 dark:bg-orange-400',
  deletion: 'bg-rose-500 dark:bg-rose-400',
};

export const FiberTreeCard = ({ content }: Props) => {
  return (
    <article
      className={cn(
        'flex flex-col gap-md rounded-xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <h3 className="text-sm font-bold tracking-tight text-[var(--term-fg)]">
          {content.treeTitle}
        </h3>
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">fiber</span>
      </header>

      {/* 트리 노드 */}
      <ul className="flex flex-col gap-1.5">
        {content.treeNodes.map((node) => {
          const stateLabel = content.legendItems.find((l) => l.state === node.state)?.label;
          return (
            <li
              key={node.id}
              className="flex items-center gap-2"
              style={{ paddingLeft: `${node.depth * 16}px` }}
            >
              {node.prefix && (
                <span
                  aria-hidden="true"
                  className="shrink-0 text-[10px] font-mono text-[var(--term-dim)] tabular-nums w-5"
                >
                  {node.prefix}
                </span>
              )}
              <span
                className={cn(
                  'inline-flex items-center gap-2 rounded-md border px-2 py-1 text-xsm font-mono',
                  stateClass[node.state],
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn('inline-block w-1.5 h-1.5 rounded-full', stateDotClass[node.state])}
                />
                <span className="font-bold">{node.label}</span>
                {stateLabel && node.state !== 'none' && (
                  <span className="text-[10px] uppercase tracking-wider opacity-80">
                    {stateLabel}
                  </span>
                )}
              </span>
            </li>
          );
        })}
      </ul>

      {/* Legend */}
      <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
        <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)]">
          {content.legendTitle}
        </span>
        <ul className="mt-2 flex flex-wrap gap-2">
          {content.legendItems.map((item) => (
            <li key={item.state}>
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-medium',
                  stateClass[item.state],
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn('inline-block w-1 h-1 rounded-full', stateDotClass[item.state])}
                />
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

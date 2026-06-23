import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../shared/tones';
import type { FiberTreeNode, ReconcilerEntryContent } from '../content';

type Props = { content: ReconcilerEntryContent['process'] };

const NEUTRAL = 'border-[var(--term-border)] bg-[var(--term-surface)]';

const stateClass: Record<FiberTreeNode['state'], string> = {
  none: cn(NEUTRAL, 'text-[var(--term-muted)]'),
  update: cn(NEUTRAL, 'text-[var(--term-accent)]'),
  placement: cn(NEUTRAL, toneTokens.sky.text),
  deletion: cn(NEUTRAL, 'text-rose-600 dark:text-rose-300'),
};

const stateDotClass: Record<FiberTreeNode['state'], string> = {
  none: 'bg-[var(--term-dim)]',
  update: 'bg-[var(--term-accent)]',
  placement: toneTokens.sky.dot,
  deletion: 'bg-rose-400 dark:bg-rose-500',
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

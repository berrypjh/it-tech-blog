import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../shared/tones';
import type { FiberLanesContent } from '../content';

type Props = {
  parentTitle: string;
  parentLanes: string;
  parentChildLanes: string;
  children: FiberLanesContent['comparison']['children'];
  legend: FiberLanesContent['comparison']['legend'];
};

export const ParentChildFiberTree = ({
  parentTitle,
  parentLanes,
  parentChildLanes,
  children,
  legend,
}: Props) => (
  <div
    className={cn(
      'rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <div className="flex flex-col items-center gap-md">
      {/* Parent Fiber */}
      <article
        className={cn(
          'w-full max-w-[480px] rounded-2xl border-2 bg-[var(--term-bg)] p-md',
          toneTokens.emerald.border,
        )}
      >
        <h3 className={cn('mb-sm text-xsm font-bold break-keep', toneTokens.emerald.text)}>
          {parentTitle}
        </h3>
        <dl className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 font-mono text-[11.5px]">
          <dt className={cn('font-bold', toneTokens.emerald.text)}>lanes:</dt>
          <dd className="text-[var(--term-fg)] break-all">{parentLanes}</dd>
          <dt className={cn('font-bold', toneTokens.violet.text)}>childLanes:</dt>
          <dd className="text-[var(--term-fg)] break-all">{parentChildLanes}</dd>
        </dl>
      </article>

      {/* Connector */}
      <div aria-hidden="true" className="flex flex-col items-center gap-0.5">
        <span className="block h-3 w-px border-l-2 border-[var(--term-border)]" />
        <code className={cn('text-[10px] font-mono font-bold', toneTokens.violet.text)}>
          childLanes
        </code>
        <span className={cn('block h-3 w-px border-l-2 border-dashed', toneTokens.violet.border)} />
      </div>

      {/* Children */}
      <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2 w-full">
        {children.map((child) => (
          <li key={child.id}>
            <ChildCard child={child} />
          </li>
        ))}
      </ul>
    </div>

    {/* Legend */}
    <div className="mt-md border-t border-dashed border-[var(--term-border)] pt-sm">
      <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
        <li className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="block h-px w-6 border-t-2 border-[var(--term-border)]"
          />
          <span className="text-[11px] font-mono text-[var(--term-muted)] break-keep">
            {legend.solid}
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn('block h-px w-6 border-t-2 border-dashed', toneTokens.violet.border)}
          />
          <span className="text-[11px] font-mono text-[var(--term-muted)] break-keep">
            {legend.dashed}
          </span>
        </li>
      </ul>
    </div>
  </div>
);

const ChildCard = ({ child }: { child: FiberLanesContent['comparison']['children'][number] }) => (
  <article
    className={cn(
      'rounded-xl border bg-[var(--term-bg)] p-sm shadow-[0_2px_0_var(--term-border)]',
      child.hasWork
        ? toneTokens.emerald.border
        : child.hasChildWork
          ? cn(toneTokens.violet.border, 'border-dashed')
          : 'border-[var(--term-border)]',
    )}
  >
    <h4 className="text-[11.5px] font-bold text-[var(--term-fg)] mb-1">{child.label}</h4>
    <dl className="grid grid-cols-[auto_1fr] gap-x-1 gap-y-0.5 font-mono text-[10.5px]">
      <dt
        className={cn(
          'font-bold',
          child.hasWork ? toneTokens.emerald.text : 'text-[var(--term-dim)]',
        )}
      >
        lanes:
      </dt>
      <dd className="text-[var(--term-fg)] break-all">{child.lanes}</dd>
      <dt
        className={cn(
          'font-bold',
          child.hasChildWork ? toneTokens.violet.text : 'text-[var(--term-dim)]',
        )}
      >
        childLanes:
      </dt>
      <dd className="text-[var(--term-fg)] break-all">{child.childLanes}</dd>
    </dl>
  </article>
);

import { cn } from '@it-tech-blog/utils';

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
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <div className="flex flex-col items-center gap-md">
      {/* Parent Fiber */}
      <article
        className={cn(
          'w-full max-w-[480px] rounded-2xl border-2 p-md',
          'border-emerald-200/80 bg-emerald-50/40',
          'dark:border-emerald-800/60 dark:bg-emerald-950/20',
        )}
      >
        <h3 className="text-xsm font-bold text-emerald-900 dark:text-emerald-100 mb-sm break-keep">
          {parentTitle}
        </h3>
        <dl className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 font-mono text-[11.5px]">
          <dt className="font-bold text-emerald-700 dark:text-emerald-300">lanes:</dt>
          <dd className="text-[var(--term-fg)] break-all">{parentLanes}</dd>
          <dt className="font-bold text-violet-700 dark:text-violet-300">childLanes:</dt>
          <dd className="text-[var(--term-fg)] break-all">{parentChildLanes}</dd>
        </dl>
      </article>

      {/* Connector */}
      <div aria-hidden="true" className="flex flex-col items-center gap-0.5">
        <span className="block w-px h-3 border-l-2 border-slate-300/80 dark:border-slate-700/70" />
        <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300 font-bold">
          childLanes 전파
        </span>
        <span className="block w-px h-3 border-l-2 border-dashed border-violet-400/70 dark:border-violet-500/70" />
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
            className="block h-px w-6 border-t-2 border-slate-400/80 dark:border-slate-500/70"
          />
          <span className="text-[11px] font-mono text-[var(--term-muted)] break-keep">
            {legend.solid}
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="block h-px w-6 border-t-2 border-dashed border-violet-400/80 dark:border-violet-500/70"
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
        ? 'border-emerald-300/80 dark:border-emerald-700/70'
        : child.hasChildWork
          ? 'border-violet-300/80 dark:border-violet-700/70 border-dashed'
          : 'border-[var(--term-border)]',
    )}
  >
    <h4 className="text-[11.5px] font-bold text-[var(--term-fg)] mb-1">{child.label}</h4>
    <dl className="grid grid-cols-[auto_1fr] gap-x-1 gap-y-0.5 font-mono text-[10.5px]">
      <dt
        className={cn(
          'font-bold',
          child.hasWork
            ? 'text-emerald-700 dark:text-emerald-300'
            : 'text-slate-500 dark:text-slate-400',
        )}
      >
        lanes:
      </dt>
      <dd className="text-[var(--term-fg)] break-all">{child.lanes}</dd>
      <dt
        className={cn(
          'font-bold',
          child.hasChildWork
            ? 'text-violet-700 dark:text-violet-300'
            : 'text-slate-500 dark:text-slate-400',
        )}
      >
        childLanes:
      </dt>
      <dd className="text-[var(--term-fg)] break-all">{child.childLanes}</dd>
    </dl>
  </article>
);

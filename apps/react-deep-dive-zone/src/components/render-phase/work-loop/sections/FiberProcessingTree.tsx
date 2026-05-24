import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { FiberTreeNode, FiberTreeNodeStatus, LegendItem, WorkLoopContent } from '../content';
import { CheckCircleIcon, ClockIcon, LayersIcon, LightbulbIcon, Loader2Icon } from '../icons';

type Props = { content: WorkLoopContent['fiberTree'] };

export const FiberProcessingTree = ({ content }: Props) => {
  const labelMap = Object.fromEntries(content.legend.map((l) => [l.status, l.label])) as Record<
    FiberTreeNodeStatus,
    string
  >;

  return (
    <section
      id="fiber-tree"
      aria-labelledby="heading-fiber-tree"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        id="fiber-tree"
        number={content.number}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<LayersIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_1fr)] gap-md lg:gap-lg">
        {/* Left: tree */}
        <article
          className={cn(
            'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="mb-md flex flex-wrap items-center justify-between gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
              {'// example fiber tree'}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
              workInProgress
            </span>
          </header>
          <ul className="flex flex-col gap-2">
            {content.nodes.map((node) => (
              <li
                key={node.name}
                style={{ paddingLeft: `${node.depth * 18}px` }}
                className="relative"
              >
                <TreeNode node={node} statusLabel={labelMap[node.status]} />
              </li>
            ))}
          </ul>
        </article>

        {/* Right: legend + info */}
        <div className="flex flex-col gap-md">
          <article
            className={cn(
              'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
              'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
            )}
            aria-labelledby="legend-title"
          >
            <h3
              id="legend-title"
              className="mb-md text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep"
            >
              {content.legendTitle}
            </h3>
            <ul className="flex flex-col gap-2">
              {content.legend.map((item) => (
                <LegendRow key={item.status} item={item} />
              ))}
            </ul>
          </article>

          <aside
            className={cn(
              'flex items-start gap-sm rounded-2xl border-2 p-md',
              'border-sky-200/80 bg-sky-50/70',
              'dark:border-sky-800/70 dark:bg-sky-950/40',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
                'bg-sky-100 text-sky-700 border border-sky-200/80',
                'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
              )}
            >
              <LightbulbIcon className="h-4 w-4" />
            </span>
            <p className="text-xsm sm:text-sm leading-relaxed text-sky-900 dark:text-sky-100 font-bold break-keep">
              {content.infoBox}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

const TreeNode = ({ node, statusLabel }: { node: FiberTreeNode; statusLabel: string }) => {
  const palette = statusPalette[node.status];
  const Icon = palette.Icon;
  const isCurrent = node.status === 'current';
  return (
    <article
      className={cn(
        'grid grid-cols-[auto_minmax(0,_1fr)_auto] items-center gap-2 rounded-2xl border p-sm sm:p-md',
        palette.border,
        palette.bg,
        isCurrent && 'border-2',
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
          palette.chip,
        )}
      >
        <Icon className={cn('h-4 w-4', isCurrent && 'animate-spin motion-reduce:animate-none')} />
      </span>
      <h4 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', palette.text)}>
        {node.name}
      </h4>
      <span
        className={cn(
          'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
          palette.badge,
        )}
      >
        {statusLabel}
      </span>
    </article>
  );
};

const LegendRow = ({ item }: { item: LegendItem }) => {
  const palette = statusPalette[item.status];
  const Icon = palette.Icon;
  return (
    <li className="flex items-start gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border',
          palette.chip,
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span
          className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', palette.text)}
        >
          {item.label}
        </span>
        <span className="text-[10px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
          {item.description}
        </span>
      </div>
    </li>
  );
};

type StatusPalette = {
  Icon: typeof CheckCircleIcon;
  text: string;
  chip: string;
  bg: string;
  border: string;
  badge: string;
};

const statusPalette: Record<FiberTreeNodeStatus, StatusPalette> = {
  done: {
    Icon: CheckCircleIcon,
    text: 'text-teal-800 dark:text-teal-100',
    chip: 'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
    bg: 'bg-teal-50/30 dark:bg-teal-950/15',
    border: 'border-teal-200/70 dark:border-teal-800/60',
    badge:
      'border-teal-300/70 bg-white/70 text-teal-700 dark:bg-slate-950/60 dark:text-teal-200 dark:border-teal-700/60',
  },
  current: {
    Icon: Loader2Icon,
    text: 'text-sky-800 dark:text-sky-100',
    chip: 'bg-sky-100 text-sky-700 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
    bg: 'bg-sky-50/50 dark:bg-sky-950/25',
    border: 'border-sky-300/80 dark:border-sky-700/70',
    badge:
      'border-sky-300/70 bg-sky-100/70 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-700/60 font-bold',
  },
  pending: {
    Icon: ClockIcon,
    text: 'text-slate-700 dark:text-slate-200',
    chip: 'bg-slate-100 text-slate-600 border-slate-200/80 dark:bg-slate-900/60 dark:text-slate-300 dark:border-slate-700/60',
    bg: 'bg-white/40 dark:bg-slate-950/20',
    border: 'border-slate-200/70 dark:border-slate-800/60',
    badge:
      'border-slate-300/70 bg-white/70 text-slate-600 dark:bg-slate-950/60 dark:text-slate-300 dark:border-slate-700/60',
  },
};

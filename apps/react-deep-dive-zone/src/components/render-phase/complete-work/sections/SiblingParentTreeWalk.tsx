import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CompleteWorkContent, TreePanel, TreePanelState } from '../content';
import {
  ArrowRightIcon,
  BoxIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  RefreshCwIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: CompleteWorkContent['treeWalk'] };

export const SiblingParentTreeWalk = ({ content }: Props) => (
  <section id="tree-walk" aria-labelledby="heading-tree-walk" className="space-y-md">
    <SectionHeader
      id="tree-walk"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.subtitle}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    {/* Desktop: 5-panel horizontal */}
    <div className="hidden xl:flex items-stretch gap-2">
      {content.panels.map((panel, idx) => (
        <Fragment key={idx}>
          <div className="flex-1 min-w-0">
            <Panel panel={panel} index={idx} />
          </div>
          {idx < content.panels.length - 1 && (
            <span
              aria-hidden="true"
              className="flex shrink-0 items-center justify-center text-[var(--term-accent)] px-0.5"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </span>
          )}
        </Fragment>
      ))}
    </div>

    {/* Tablet: 2-3 column wrap */}
    <ol className="hidden md:grid xl:hidden grid-cols-2 lg:grid-cols-3 gap-md">
      {content.panels.map((panel, idx) => (
        <li key={idx} className="flex h-full">
          <Panel panel={panel} index={idx} />
        </li>
      ))}
    </ol>

    {/* Mobile: vertical stack with arrow */}
    <ol className="md:hidden flex flex-col">
      {content.panels.map((panel, idx) => (
        <li key={idx} className="flex flex-col">
          <Panel panel={panel} index={idx} />
          {idx < content.panels.length - 1 && (
            <span
              aria-hidden="true"
              className="my-1.5 flex justify-center text-[var(--term-accent)]"
            >
              <ChevronDownIcon className="h-5 w-5" />
            </span>
          )}
        </li>
      ))}
    </ol>
  </section>
);

const Panel = ({ panel, index }: { panel: TreePanel; index: number }) => (
  <article
    className={cn(
      'flex h-full w-full flex-col gap-2 rounded-lg border bg-[var(--term-bg)] p-md',
      'border-[var(--term-border)] shadow-[0_1px_0_var(--term-border)]',
      'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
    )}
  >
    <header className="flex items-center justify-between gap-2">
      <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] leading-tight break-keep">
        {panel.title}
      </h3>
      {index > 0 && (
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-6 w-6 items-center justify-center rounded-md border font-mono font-bold text-xxsm tabular-nums',
            toneTokens.sky.chip,
          )}
        >
          {index}
        </span>
      )}
    </header>

    <MiniTree nodes={panel.nodes} />

    {panel.description && (
      <p className="mt-auto text-xxsm sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
        {panel.description}
      </p>
    )}
  </article>
);

const MiniTree = ({ nodes }: { nodes: TreePanel['nodes'] }) => {
  const root = nodes.find((n) => n.depth === 0);
  const children = nodes.filter((n) => n.depth > 0);
  if (!root) return null;
  return (
    <div className="flex flex-col items-center gap-1.5">
      <TreeNode name={root.name} state={root.state} />
      <span aria-hidden="true" className="text-[var(--term-dim)]">
        <ChevronDownIcon className="h-3 w-3" />
      </span>
      <div className="flex items-center gap-1.5">
        {children.map((c) => (
          <TreeNode key={c.name} name={c.name} state={c.state} />
        ))}
      </div>
    </div>
  );
};

const TreeNode = ({ name, state }: { name: string; state: TreePanelState }) => {
  const cls =
    state === 'current'
      ? cn(toneTokens.violet.fill.bg, toneTokens.violet.fill.border, toneTokens.violet.fill.text)
      : state === 'done'
        ? cn(toneTokens.teal.fill.bg, toneTokens.teal.fill.border, toneTokens.teal.fill.text)
        : 'bg-[var(--term-surface)] border-[var(--term-border)] text-[var(--term-muted)]';
  const Icon = state === 'current' ? RefreshCwIcon : state === 'done' ? CheckCircleIcon : BoxIcon;
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-md border px-2 py-1 font-mono text-xsm font-bold',
        cls,
      )}
    >
      <Icon
        aria-hidden="true"
        className={cn('h-3 w-3', state === 'current' && 'animate-spin motion-reduce:animate-none')}
      />
      {name}
    </span>
  );
};

import { cx } from '@berrypjh/react-ui';
import { CheckCircle2, Clock, Layers, Lightbulb, Loader2 } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FiberTreeNode, FiberTreeNodeStatus, LegendItem, WorkLoopContent } from '../content';

type Props = { content: WorkLoopContent['fiberTree'] };

type StatusStyle = { Icon: typeof CheckCircle2; text: string; chip: string; border: string };

const statusStyle = (status: FiberTreeNodeStatus): StatusStyle => {
  if (status === 'done') {
    return {
      Icon: CheckCircle2,
      text: toneTokens.teal.text,
      chip: toneTokens.teal.chip,
      border: toneTokens.teal.border,
    };
  }
  if (status === 'current') {
    return {
      Icon: Loader2,
      text: toneTokens.sky.text,
      chip: toneTokens.sky.chip,
      border: toneTokens.sky.border,
    };
  }
  return {
    Icon: Clock,
    text: 'text-[var(--term-muted)]',
    chip: 'bg-[var(--term-surface)] border-[var(--term-border)] text-[var(--term-muted)]',
    border: 'border-[var(--term-border)]',
  };
};

export const FiberProcessingTree = ({ content }: Props) => {
  const labelMap = Object.fromEntries(content.legend.map((l) => [l.status, l.label])) as Record<
    FiberTreeNodeStatus,
    string
  >;

  return (
    <section id="fiber-tree" aria-labelledby="heading-fiber-tree" className="space-y-md">
      <SectionHeader
        id="fiber-tree"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Layers className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_1fr)] gap-md lg:gap-lg">
        <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
          <header className="mb-md flex flex-wrap items-center justify-between gap-2">
            <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
              {'// example fiber tree'}
            </span>
            <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)] rounded-md border border-[var(--term-border)] px-2 py-0.5">
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

        <div className="flex flex-col gap-md">
          <article
            aria-labelledby="legend-title"
            className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]"
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

          <SectionNote icon={<Lightbulb className="h-4 w-4" aria-hidden="true" />}>
            {content.infoBox}
          </SectionNote>
        </div>
      </div>
    </section>
  );
};

const TreeNode = ({ node, statusLabel }: { node: FiberTreeNode; statusLabel: string }) => {
  const s = statusStyle(node.status);
  const isCurrent = node.status === 'current';
  return (
    <article
      className={cx(
        'grid grid-cols-[auto_minmax(0,_1fr)_auto] items-center gap-2 rounded-lg border p-sm sm:p-md',
        isCurrent ? cx('border-2', s.border) : s.border,
        'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <span
        aria-hidden="true"
        className={cx('inline-flex h-9 w-9 items-center justify-center rounded-md border', s.chip)}
      >
        <s.Icon className={cx('h-4 w-4', isCurrent && 'animate-spin motion-reduce:animate-none')} />
      </span>
      <h4 className={cx('text-xsm sm:text-sm font-bold leading-tight break-keep', s.text)}>
        {node.name}
      </h4>
      <span
        className={cx(
          'inline-flex items-center rounded-full border px-2 py-0.5 text-xxsm font-mono uppercase tracking-wider',
          s.chip,
        )}
      >
        {statusLabel}
      </span>
    </article>
  );
};

const LegendRow = ({ item }: { item: LegendItem }) => {
  const s = statusStyle(item.status);
  return (
    <li className="flex items-start gap-2">
      <span
        aria-hidden="true"
        className={cx(
          'mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border',
          s.chip,
        )}
      >
        <s.Icon className="h-4 w-4" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className={cx('text-xsm sm:text-sm font-bold leading-tight break-keep', s.text)}>
          {item.label}
        </span>
        <span className="text-xxsm sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
          {item.description}
        </span>
      </div>
    </li>
  );
};

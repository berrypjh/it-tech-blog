import { cx } from '@berrypjh/react-ui';
import { Link2 } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { toneTokens } from '../../../shared/tones';
import type { HookLinkedListContent, HookNode } from '../content';

type Props = { content: HookLinkedListContent['hero'] };

/**
 * Hero 핵심 비주얼.
 * Fiber 카드의 memoizedState 한 칸에서 출발해 Hook 노드가 next로 이어지는 체인.
 */
export const HookLinkedListHeroDiagram = ({ content }: Props) => {
  const a11y = `${content.title.line1} ${content.title.line2} ${content.description}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <div className="flex items-center justify-between">
          <TerminalBadge dotClassName="bg-[var(--term-accent)]">
            {content.diagramBadge}
          </TerminalBadge>
          <span className="font-mono text-[10px] text-[var(--term-muted)]">
            {'//'} {content.diagramCaption}
          </span>
        </div>

        <article className="rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
          <header className="mb-2 flex items-center gap-1.5 border-b border-dashed border-[var(--term-border)] pb-2">
            <Link2 className="h-3.5 w-3.5 shrink-0 text-[var(--term-accent)]" aria-hidden="true" />
            <span className="font-mono text-[11px] font-bold text-[var(--term-fg)]">
              {content.fiberLabel}
            </span>
          </header>
          <div className="flex items-center justify-between gap-sm rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-sm py-2">
            <code className="font-mono text-[11px] font-bold text-[var(--term-fg)]">
              {content.fiberField}
            </code>
            <code className="font-mono text-[10px] text-[var(--term-accent)]">Hook #1</code>
          </div>
        </article>

        <DownArrow />

        {content.nodes.map((node, i) => (
          <div key={node.id} className="flex flex-col gap-sm">
            <HookCard node={node} />
            {i < content.nodes.length - 1 && <DownArrow />}
          </div>
        ))}

        <p className="text-center font-mono text-[10px] text-[var(--term-dim)]">
          {content.tailLabel}
        </p>
      </div>
    </HeroDiagramShell>
  );
};

const HookCard = ({ node }: { node: HookNode }) => {
  const t = toneTokens[node.tone];
  return (
    <article className="flex items-center gap-sm rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
      <span
        className={cx(
          'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border text-xsm font-bold tabular-nums',
          t.chip,
        )}
      >
        {node.order}
      </span>
      <div className="flex min-w-0 flex-col gap-0.5">
        <code className={cx('font-mono text-xsm font-bold tracking-tight', t.text)}>
          {node.hookName}
        </code>
        <span className="font-mono text-[10px] text-[var(--term-muted)] break-all">
          memoizedState: {node.memoized}
        </span>
      </div>
    </article>
  );
};

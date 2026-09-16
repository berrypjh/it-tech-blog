import { cx } from '@berrypjh/react-ui';
import { ArrowUp, Network } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { toneTokens } from '../../../shared/tones';
import type { AccumulateListenersContent, FiberNode } from '../content';

type Props = { content: AccumulateListenersContent['hero'] };

/** depth별 들여쓰기. 정적 클래스로 두어 purge되지 않게 한다. */
const indentByDepth = ['pl-0', 'pl-4', 'pl-8'] as const;

/** Hero 핵심 비주얼: Fiber 트리를 들여쓰기로 펼치고 각 노드가 가진 이벤트 prop을 표시한다. */
export const AccumulateListenersHeroDiagram = ({ content }: Props) => {
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
            <Network
              className="h-3.5 w-3.5 shrink-0 text-[var(--term-accent)]"
              aria-hidden="true"
            />
            <span className="font-mono text-[11px] font-bold text-[var(--term-fg)]">
              {content.treeLabel}
            </span>
          </header>

          <ul className="flex flex-col gap-1.5">
            {content.nodes.map((node) => (
              <li key={node.id} className={indentByDepth[node.depth]}>
                <NodeRow node={node} />
              </li>
            ))}
          </ul>

          <p className="mt-2 flex items-center gap-1.5 border-t border-dashed border-[var(--term-border)] pt-2 font-mono text-[10px] text-[var(--term-dim)]">
            <ArrowUp className="h-3 w-3 text-[var(--term-accent)]" />
            {content.tailLabel}
          </p>
        </article>
      </div>
    </HeroDiagramShell>
  );
};

const NodeRow = ({ node }: { node: FiberNode }) => {
  const tone = node.propKind === 'capture' ? toneTokens.violet : toneTokens.teal;
  return (
    <div className="flex items-center gap-2 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-sm py-1.5">
      {node.depth > 0 && <span className="font-mono text-[11px] text-[var(--term-dim)]">└─</span>}
      <span className="font-mono text-[11px] font-bold text-[var(--term-fg)]">{node.name}</span>
      <code
        className={cx(
          'ml-auto shrink-0 rounded border px-1.5 py-0.5 font-mono text-[10px] font-bold',
          tone.chip,
        )}
      >
        {node.prop}
      </code>
    </div>
  );
};

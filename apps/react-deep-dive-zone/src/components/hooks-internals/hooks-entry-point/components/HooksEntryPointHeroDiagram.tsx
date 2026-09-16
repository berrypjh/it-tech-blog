import { cx } from '@berrypjh/react-ui';
import { Code2, FileCode, type LucideIcon, Route, Settings2 } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ChainNode, ChainNodeId, HooksEntryPointContent } from '../content';

type Props = { content: HooksEntryPointContent['hero'] };

const nodeIcon: Record<ChainNodeId, LucideIcon> = {
  user: Code2,
  public: FileCode,
  dispatcher: Route,
  impl: Settings2,
};

/** Hero 핵심 비주얼: 사용자 코드에서 실제 구현까지 내려가는 Hook 진입 체인. */
export const HooksEntryPointHeroDiagram = ({ content }: Props) => {
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

        {content.chain.map((node, i) => (
          <div key={node.id} className="flex flex-col gap-sm">
            <ChainCard node={node} />
            {i < content.chain.length - 1 && <DownArrow />}
          </div>
        ))}
      </div>
    </HeroDiagramShell>
  );
};

const ChainCard = ({ node }: { node: ChainNode }) => {
  const Icon = nodeIcon[node.id];
  return (
    <article className="flex items-center gap-sm rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
      <ToneIconBox tone={node.tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <code
          className={cx(
            'font-mono text-xsm font-bold tracking-tight break-all',
            toneTokens[node.tone].text,
          )}
        >
          {node.label}
        </code>
        <span className="text-[11px] text-[var(--term-muted)] break-keep">{node.caption}</span>
      </div>
    </article>
  );
};

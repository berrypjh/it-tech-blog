import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../shared/tones';
import type { FlowNode, ReactVsReactDomContent } from '../content';
import { iconByName } from '../icons';

type Props = { content: ReactVsReactDomContent['usage'] };

export const RoleFlowDiagram = ({ content }: Props) => {
  return (
    <article
      className={cn(
        'flex flex-col gap-md rounded-xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'p-md sm:p-lg',
      )}
    >
      <h3 className="text-xsm uppercase tracking-wider font-bold text-[var(--term-muted)]">
        {content.flowHeading}
      </h3>

      <FlowRow nodes={content.topFlow} />

      {/* 두 흐름을 잇는 dashed 가이드 */}
      <div className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className="flex-1 border-t border-dashed border-[var(--term-border)]"
        />
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
          react ↔ react-dom
        </span>
        <span
          aria-hidden="true"
          className="flex-1 border-t border-dashed border-[var(--term-border)]"
        />
      </div>

      <FlowRow nodes={content.bottomFlow} />
    </article>
  );
};

type FlowRowProps = { nodes: FlowNode[] };

const FlowRow = ({ nodes }: FlowRowProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.1fr_auto_1fr] gap-2 items-stretch">
    {nodes.map((node, idx) => (
      <FlowNodeWithArrow key={node.id} node={node} isLast={idx === nodes.length - 1} />
    ))}
  </div>
);

type FlowNodeWithArrowProps = { node: FlowNode; isLast: boolean };

const FlowNodeWithArrow = ({ node, isLast }: FlowNodeWithArrowProps) => (
  <>
    <FlowNodeCard node={node} />
    {!isLast && <Arrow />}
  </>
);

const Arrow = () => (
  <div className="flex items-center justify-center" aria-hidden="true">
    <span className="hidden lg:inline-flex text-[var(--term-accent)] text-lg">→</span>
    <span className="inline-flex lg:hidden text-[var(--term-accent)] text-lg">↓</span>
  </div>
);

type FlowNodeCardProps = { node: FlowNode };

const FlowNodeCard = ({ node }: FlowNodeCardProps) => {
  const tone = toneTokens[node.tone];
  const Icon = iconByName[node.icon];
  const isPackage = node.kind === 'package';

  return (
    <article
      className={cn(
        'flex flex-col items-start gap-1.5 rounded-lg border p-3 transition-all',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        isPackage ? tone.border : 'border-[var(--term-border)]',
        tone.borderHover,
        isPackage && 'lg:shadow-[0_3px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-6 h-6 rounded-md border',
            tone.chip,
          )}
        >
          <Icon className="h-3.5 w-3.5" />
        </span>
        <span
          className={cn(
            'text-xsm font-bold tracking-tight',
            isPackage ? cn(tone.text, 'font-mono') : 'text-[var(--term-fg)]',
          )}
        >
          {node.title}
        </span>
      </header>
      <p className="text-[10px] leading-snug text-[var(--term-muted)] break-keep">
        {node.subtitle}
      </p>
    </article>
  );
};

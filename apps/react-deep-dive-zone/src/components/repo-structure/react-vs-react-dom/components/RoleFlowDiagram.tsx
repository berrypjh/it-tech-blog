import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../shared/tones';
import type { FlowNode, ReactVsReactDomContent } from '../content';
import { iconByName } from '../icons';

/** package 노드만 색 강조: react=A(accent), react-dom=B(sky). 나머지는 중립. */
const packageAccent = (id: FlowNode['id']) =>
  id === 'react-dom' ? toneTokens.sky.text : 'text-[var(--term-accent)]';

type Props = { content: ReactVsReactDomContent['usage'] };

export const RoleFlowDiagram = ({ content }: Props) => {
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'p-md sm:p-lg',
      )}
    >
      <h3 className="text-xsm uppercase tracking-wider font-bold text-[var(--term-muted)]">
        {content.flowHeading}
      </h3>

      <FlowTimeline nodes={content.topFlow} />

      {/* 두 흐름을 잇는 dashed 가이드 */}
      <div className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className="flex-1 border-t border-dashed border-[var(--term-border)]"
        />
        <span className="text-[10px] uppercase tracking-wider">
          <span className="font-bold text-[var(--term-accent)]">react</span>
          <span className="text-[var(--term-muted)]"> ↔ </span>
          <span className={cn('font-bold', toneTokens.sky.text)}>react-dom</span>
        </span>
        <span
          aria-hidden="true"
          className="flex-1 border-t border-dashed border-[var(--term-border)]"
        />
      </div>

      <FlowTimeline nodes={content.bottomFlow} />
    </article>
  );
};

type FlowTimelineProps = { nodes: FlowNode[] };

const FlowTimeline = ({ nodes }: FlowTimelineProps) => (
  <ol className="flex flex-col">
    {nodes.map((node, idx) => (
      <FlowStep key={node.id} node={node} isLast={idx === nodes.length - 1} />
    ))}
  </ol>
);

type FlowStepProps = { node: FlowNode; isLast: boolean };

const FlowStep = ({ node, isLast }: FlowStepProps) => {
  const Icon = iconByName[node.icon];
  const isPackage = node.kind === 'package';
  const accent = packageAccent(node.id);

  return (
    <li className="flex gap-3">
      {/* 좌측: 아이콘 칩 + 세로 커넥터 */}
      <div className="flex flex-col items-center">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-7 h-7 rounded-md border shrink-0 bg-[var(--term-surface)]',
            isPackage
              ? cn(accent, 'border-current')
              : 'border-[var(--term-border)] text-[var(--term-muted)]',
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        {!isLast && (
          <span
            aria-hidden="true"
            className="w-0 flex-1 my-1 border-l border-dashed border-[var(--term-border)]"
          />
        )}
      </div>

      {/* 우측: 제목 + 설명 */}
      <div className={cn('min-w-0 flex-1', isLast ? 'pb-0' : 'pb-3')}>
        <div className="flex items-center gap-2">
          <span
            className={cn(
              'text-xsm font-bold tracking-tight',
              isPackage ? cn(accent, 'font-mono') : 'text-[var(--term-fg)]',
            )}
          >
            {node.title}
          </span>
          {isPackage && (
            <span
              className={cn(
                'rounded border px-1.5 py-px text-[9px] font-bold uppercase tracking-wider',
                'border-current/40',
                accent,
              )}
            >
              package
            </span>
          )}
        </div>
        <p className="text-[10px] leading-snug text-[var(--term-muted)] break-keep">
          {node.subtitle}
        </p>
      </div>
    </li>
  );
};

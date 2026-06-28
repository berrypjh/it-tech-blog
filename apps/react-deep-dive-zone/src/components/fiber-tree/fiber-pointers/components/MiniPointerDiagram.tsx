import { cn } from '@it-tech-blog/utils';

import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { PointerKind } from '../content';

type Props = { kind: PointerKind };

/**
 * Tiny visual aid used inside each of the 3 pointer cards.
 * child: Parent ↓ Child
 * sibling: A → B → C
 * return: Child ↑ Parent
 */
export const MiniPointerDiagram = ({ kind }: Props) => {
  if (kind === 'child') return <ChildDiagram />;
  if (kind === 'sibling') return <SiblingDiagram />;
  return <ReturnDiagram />;
};

/** 중립(slate) 노드 + 톤 노드 공용 칩. */
const NodePill = ({ children, tone }: { children: React.ReactNode; tone?: ToneKey }) => (
  <span
    className={cn(
      'inline-flex items-center rounded-lg border px-2 py-1 font-mono text-xxsm font-bold',
      tone
        ? toneTokens[tone].chip
        : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
    )}
  >
    {children}
  </span>
);

const ChildDiagram = () => (
  <div className="flex flex-col items-center gap-1">
    <NodePill>Parent</NodePill>
    <div className="flex flex-col items-center">
      <span
        aria-hidden="true"
        className={cn('block w-px h-2 border-l-2', toneTokens.emerald.border)}
      />
      <span className={cn('text-[10px] font-mono font-bold', toneTokens.emerald.text)}>child</span>
      <span
        aria-hidden="true"
        className={cn('block w-px h-2 border-l-2', toneTokens.emerald.border)}
      />
    </div>
    <NodePill tone="emerald">Child</NodePill>
  </div>
);

const SiblingDiagram = () => (
  <div className="flex items-center justify-center gap-1.5 flex-wrap">
    <NodePill tone="violet">A</NodePill>
    <SiblingArrow />
    <NodePill tone="violet">B</NodePill>
    <SiblingArrow />
    <NodePill tone="violet">C</NodePill>
  </div>
);

const SiblingArrow = () => (
  <span className="flex items-center gap-0.5">
    <span
      aria-hidden="true"
      className={cn('block h-px w-3 border-t-2', toneTokens.violet.border)}
    />
    <span aria-hidden="true" className={cn('text-xsm leading-none', toneTokens.violet.text)}>
      →
    </span>
  </span>
);

const ReturnDiagram = () => (
  <div className="flex flex-col items-center gap-1">
    <NodePill>Child</NodePill>
    <div className="flex flex-col items-center">
      <span
        aria-hidden="true"
        className={cn('block w-px h-2 border-l-2 border-dashed', toneTokens.sky.border)}
      />
      <span className={cn('text-[10px] font-mono font-bold', toneTokens.sky.text)}>return</span>
      <span
        aria-hidden="true"
        className={cn('block w-px h-2 border-l-2 border-dashed', toneTokens.sky.border)}
      />
    </div>
    <NodePill tone="sky">Parent</NodePill>
  </div>
);

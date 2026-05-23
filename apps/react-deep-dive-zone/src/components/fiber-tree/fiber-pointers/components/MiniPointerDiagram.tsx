import { cn } from '@it-tech-blog/utils';

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

const NodePill = ({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: 'sky' | 'violet' | 'emerald' | 'slate';
}) => {
  const toneCls = {
    sky: 'border-sky-200/80 bg-sky-50 text-sky-800 dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-100',
    violet:
      'border-violet-200/80 bg-violet-50 text-violet-800 dark:border-violet-800/60 dark:bg-violet-950/40 dark:text-violet-100',
    emerald:
      'border-emerald-200/80 bg-emerald-50 text-emerald-800 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-100',
    slate:
      'border-slate-200/80 bg-slate-50 text-slate-800 dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-100',
  }[tone];
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-lg border px-2 py-1 font-mono text-xxsm font-bold',
        toneCls,
      )}
    >
      {children}
    </span>
  );
};

const ChildDiagram = () => (
  <div className="flex flex-col items-center gap-1">
    <NodePill tone="slate">Parent</NodePill>
    <div className="flex flex-col items-center">
      <span
        aria-hidden="true"
        className="block w-px h-2 border-l-2 border-emerald-500/80 dark:border-emerald-400/70"
      />
      <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-300">
        child
      </span>
      <span
        aria-hidden="true"
        className="block w-px h-2 border-l-2 border-emerald-500/80 dark:border-emerald-400/70"
      />
    </div>
    <NodePill tone="emerald">첫 번째 자식</NodePill>
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
  <span className="flex items-center">
    <span
      aria-hidden="true"
      className="block h-px w-3 border-t-2 border-violet-500/80 dark:border-violet-400/70"
    />
    <span
      aria-hidden="true"
      className="block h-0 w-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-violet-500/80 dark:border-l-violet-400/70"
    />
  </span>
);

const ReturnDiagram = () => (
  <div className="flex flex-col items-center gap-1">
    <NodePill tone="slate">Child</NodePill>
    <div className="flex flex-col items-center">
      <span
        aria-hidden="true"
        className="block w-px h-2 border-l-2 border-dashed border-sky-500/80 dark:border-sky-400/70"
      />
      <span className="text-[10px] font-mono font-bold text-sky-700 dark:text-sky-300">return</span>
      <span
        aria-hidden="true"
        className="block w-px h-2 border-l-2 border-dashed border-sky-500/80 dark:border-sky-400/70"
      />
    </div>
    <NodePill tone="sky">Parent</NodePill>
  </div>
);

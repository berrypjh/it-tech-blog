import { cn } from '@it-tech-blog/utils';

import { HeroDiagramShell } from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import type { EffectKind, FiberFlagsContent, TreeNode } from '../content';
import { FlagIcon } from '../icons';

import { EffectBadge } from './EffectBadge';

type Props = { content: FiberFlagsContent['hero']; className?: string };

const effectLabel: Record<EffectKind, string> = {
  placement: 'Placement',
  update: 'Update',
  childDeletion: 'ChildDeletion',
};

/** depth(0~3)별 들여쓰기. 정적 클래스로 두어 purge되지 않게 한다. */
const indentByDepth = ['pl-0', 'pl-4', 'pl-8', 'pl-12'] as const;

/**
 * Hero 핵심 비주얼.
 * workInProgress 트리를 위→아래 파일 트리처럼 펼치고, 각 Fiber 행에
 * 기록된 effect flag(또는 NoFlags)를 우측에 표시하는 effect 워크리스트.
 */
export const FlagsEffectsHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.title.line1} ${content.title.line2} ${content.title.line3} ${content.description}`;
  const markedCount = content.tree.filter((node) => node.effect && node.effect !== 'normal').length;

  return (
    <HeroDiagramShell a11yLabel={a11y} className={className}>
      <div className="relative flex flex-col gap-md" aria-hidden="true">
        <div className="flex items-center justify-between">
          <TerminalBadge dotClassName="bg-[var(--term-accent)]">fiber effects</TerminalBadge>
          <span className="font-mono text-[10px] text-[var(--term-muted)]">
            {'//'} flags & deletions
          </span>
        </div>

        <article className="rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
          <header className="mb-2 flex items-center gap-1.5 border-b border-dashed border-[var(--term-border)] pb-2">
            <FlagIcon className="h-3.5 w-3.5 shrink-0 text-[var(--term-accent)]" />
            <span className="font-mono text-[11px] font-bold text-[var(--term-fg)]">
              workInProgress tree
            </span>
            <span className="ml-auto font-mono text-[10px] text-[var(--term-muted)]">
              {markedCount} marked
            </span>
          </header>
          <ul className="flex flex-col gap-1">
            {content.tree.map((node) => (
              <FiberRow key={node.id} node={node} />
            ))}
          </ul>
        </article>

        <div className="flex flex-col gap-2 border-t border-dashed border-[var(--term-border)] pt-sm">
          <h3 className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {'//'} effect badge
          </h3>
          <ul className="flex flex-wrap gap-2">
            {content.legend.map((item) => (
              <li key={item.kind}>
                <EffectBadge effect={item.kind}>{item.label}</EffectBadge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HeroDiagramShell>
  );
};

const FiberRow = ({ node }: { node: TreeNode }) => {
  const effect = node.effect && node.effect !== 'normal' ? (node.effect as EffectKind) : undefined;
  return (
    <li
      className={cn(
        'flex items-center gap-2 rounded-md py-1 pr-1.5',
        indentByDepth[node.depth] ?? 'pl-12',
        effect && 'bg-[var(--term-surface)]',
      )}
    >
      {node.depth > 0 && (
        <span aria-hidden="true" className="font-mono text-[11px] text-[var(--term-dim)]">
          └─
        </span>
      )}
      <span className="font-mono text-xsm font-bold text-[var(--term-fg)]">{node.label}</span>
      <span className="truncate font-mono text-[10px] text-[var(--term-muted)]">{node.tag}</span>
      {effect ? (
        <span className="ml-auto shrink-0">
          <EffectBadge effect={effect} className="px-1.5 text-[10px]">
            {effectLabel[effect]}
          </EffectBadge>
        </span>
      ) : (
        <span className="ml-auto shrink-0 font-mono text-[10px] text-[var(--term-dim)]">
          NoFlags
        </span>
      )}
    </li>
  );
};

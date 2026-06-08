import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { EffectKind, FiberFlagsContent, TreeNode } from '../content';
import { FlagIcon } from '../icons';

import { effectBadge, effectNodeBorder } from './effectStyles';

type Props = { content: FiberFlagsContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * Fiber 트리의 각 노드에 effect flag(Placement / Update / ChildDeletion)가
 * 표시되는 모습을 위에서 아래로 잇는 컴팩트 다이어그램.
 */
export const FlagsEffectsHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.title.line1} ${content.title.line2} ${content.title.line3} ${content.description}`;
  const map = Object.fromEntries(content.tree.map((node) => [node.id, node]));

  return (
    <div
      className={cn(
        '@container relative w-full overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <div className="flex items-center gap-sm">
          <ToneIconBox tone="teal" size="sm">
            <FlagIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <span className={cn('font-mono text-sm font-bold tracking-tight', toneTokens.teal.text)}>
            fiber.flags
          </span>
          <span
            aria-hidden="true"
            className="flex-1 border-t border-dashed border-[var(--term-border)]"
          />
        </div>

        <div className="overflow-x-auto -mx-md sm:-mx-lg px-md sm:px-lg">
          <div className="min-w-[420px] flex flex-col items-stretch">
            <div className="flex justify-center">
              <NodeCard node={map.App} />
            </div>
            <DownArrow />

            <div className="flex justify-center">
              <NodeCard node={map.Page} />
            </div>

            <div className="mt-2 grid grid-cols-2 gap-x-3 sm:gap-x-6">
              <div className="flex flex-col items-center gap-1">
                <DownArrow compact />
                <NodeCard node={map.Header} />
              </div>
              <div className="flex flex-col items-center gap-1">
                <DownArrow compact />
                <NodeCard node={map.Main} />
              </div>
            </div>

            <div className="mt-2 grid grid-cols-2 gap-x-3 sm:gap-x-6">
              <div />
              <div className="flex flex-col items-center gap-1">
                <DownArrow compact />
                <ul className="grid grid-cols-3 gap-2">
                  <li className="flex justify-center">
                    <NodeCard node={map.Button} />
                  </li>
                  <li className="flex justify-center">
                    <NodeCard node={map.List} />
                  </li>
                  <li className="flex justify-center">
                    <NodeCard node={map.OldItem} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-sm border-t border-dashed border-[var(--term-border)] pt-sm">
          <h3 className="mb-2 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {`// effect badge`}
          </h3>
          <ul className="flex flex-wrap gap-md">
            {content.legend.map((item) => (
              <li key={item.kind} className="flex items-center gap-2">
                <span
                  className={cn(
                    'inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[11px] font-bold',
                    effectBadge[item.kind],
                  )}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const effectLabel: Record<EffectKind, string> = {
  placement: 'Placement',
  update: 'Update',
  childDeletion: 'ChildDeletion',
};

const NodeCard = ({ node }: { node: TreeNode }) => {
  if (!node) return null;
  const effect = node.effect && node.effect !== 'normal' ? (node.effect as EffectKind) : undefined;
  return (
    <article
      className={cn(
        'relative rounded-xl border-2 bg-white dark:bg-slate-900/60 px-2.5 py-1.5 min-w-[100px]',
        'shadow-[0_2px_0_var(--term-border)]',
        effect ? effectNodeBorder[effect] : 'border-slate-200/80 dark:border-slate-700/70',
      )}
    >
      <h4 className="text-xsm font-bold text-[var(--term-fg)] leading-tight text-center">
        {node.label}
      </h4>
      <span className="block text-center text-[9.5px] font-mono text-[var(--term-muted)]">
        {node.tag}
      </span>
      {effect && (
        <span
          className={cn(
            'absolute -top-2.5 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full border px-1.5 py-0 font-mono text-[9.5px] font-bold whitespace-nowrap',
            effectBadge[effect],
          )}
        >
          {effectLabel[effect]}
        </span>
      )}
    </article>
  );
};

const DownArrow = ({ compact }: { compact?: boolean }) => (
  <span
    aria-hidden="true"
    className={cn(
      'inline-flex items-center justify-center text-[var(--term-accent)] leading-none',
      compact ? 'text-sm' : 'text-lg',
    )}
  >
    ↓
  </span>
);

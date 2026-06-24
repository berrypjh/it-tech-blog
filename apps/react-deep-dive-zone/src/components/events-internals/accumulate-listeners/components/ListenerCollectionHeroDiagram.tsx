import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FiberNode, ListenerCollectionContent } from '../content';
import { BoxIcon, GitBranchIcon } from '../icons';

type Props = { content: ListenerCollectionContent['hero']; className?: string };

/** propKind → 가장 가까운 공유 ToneKey 매핑. */
const propToneMap: Record<FiberNode['propKind'], ToneKey> = {
  capture: 'violet',
  bubble: 'teal',
  none: 'sky',
};

/**
 * Hero 핵심 비주얼.
 * targetFiber(button)에서 시작해 instance.return 체인을 따라 부모 방향으로
 * 올라가며 listener를 수집하는 흐름을, 아래에서 위로 잇는 컴팩트 stepper.
 */
export const ListenerCollectionHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.diagram.title}: ${content.diagram.nodes
    .map((n) => `${n.name}(${n.prop})`)
    .join(' → ')}`;

  // 수집은 target(마지막 노드)에서 부모(첫 노드) 방향으로 올라간다.
  const walk = [...content.diagram.nodes].reverse();

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
        <header className="flex items-center gap-sm">
          <ToneIconBox tone="teal" size="sm">
            <GitBranchIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <span className="font-mono text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.diagram.title}
          </span>
        </header>

        <ol className="flex flex-col gap-sm">
          {walk.map((node, i) => (
            <li key={node.name} className="flex flex-col gap-sm">
              <FiberRow node={node} isTarget={i === 0} />
              {i < walk.length - 1 && <UpArrow />}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const FiberRow = ({ node, isTarget }: { node: FiberNode; isTarget: boolean }) => {
  const tone = propToneMap[node.propKind];
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'group flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <BoxIcon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span className={cn('font-mono text-sm font-bold tracking-tight break-all', t.text)}>
          {node.name}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {node.type}
        </span>
      </div>
      <span
        className={cn(
          'ml-auto shrink-0 inline-flex items-center gap-1 rounded-md border px-2 py-0.5',
          'font-mono text-[10px] font-bold whitespace-nowrap',
          t.chip,
        )}
      >
        {isTarget && <span className="opacity-70">target ·</span>}
        {node.prop}
      </span>
    </article>
  );
};

const UpArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↑
  </span>
);

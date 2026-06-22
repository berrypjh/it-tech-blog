import { cn } from '@it-tech-blog/utils';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import type { FlowNode } from '../content';
import { pdIcon } from '../icons';
import { localTone, LocalToneIconBox } from '../tone';

type Props = { main: FlowNode[]; a11y: string; className?: string };

/**
 * Hero 핵심 비주얼.
 * 사용자 코드 → react → react-reconciler → renderer → DOM/Native 파이프라인을
 * 위에서 아래로 잇는 컴팩트 stepper. (보조 축은 본문 다이어그램에서 다룬다)
 */
export const PdHeroDiagram = ({ main, a11y, className }: Props) => (
  <HeroDiagramShell
    a11yLabel={a11y}
    className={className}
    gradient="radial-gradient(circle at 50% 0%, rgba(56,189,248,0.12), transparent 55%)"
  >
    <ol className="relative flex flex-col items-center gap-sm" aria-hidden="true">
      {main.map((node, i) => (
        <li key={node.id} className="flex w-full flex-col items-center gap-sm">
          <FlowBox node={node} emphasized={i === 2} />
          {i < main.length - 1 && <DownArrow />}
        </li>
      ))}
    </ol>
  </HeroDiagramShell>
);

const FlowBox = ({ node, emphasized }: { node: FlowNode; emphasized?: boolean }) => {
  const tone = localTone(node.tone);
  const Icon = pdIcon[node.iconName];

  return (
    <article
      className={cn(
        'flex w-full min-w-0 flex-col items-center gap-1 rounded-xl border px-md py-2.5',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        emphasized
          ? 'border-[var(--term-accent)] @sm:shadow-[0_3px_0_var(--term-border)]'
          : cn('border-[var(--term-border)]', tone.borderHover),
      )}
    >
      <span className="flex min-w-0 items-center gap-2">
        <LocalToneIconBox tone={node.tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </LocalToneIconBox>
        <span
          className={cn('min-w-0 truncate text-sm font-bold font-mono tracking-tight', tone.text)}
        >
          {node.label}
        </span>
      </span>
      {node.subtitle && (
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] text-center break-keep">
          {node.subtitle}
        </span>
      )}
    </article>
  );
};

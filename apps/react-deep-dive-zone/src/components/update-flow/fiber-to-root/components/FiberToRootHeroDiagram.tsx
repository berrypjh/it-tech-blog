import { cn } from '@it-tech-blog/utils';

import { HeroDiagramShell } from '../../../shared/hero';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberStackNode, FiberToRootContent } from '../content';
import { fiberStackIconByName } from '../icons';

type Props = { content: FiberToRootContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * sourceFiber(Button)에서 return 포인터를 따라 위로 올라가며 lane 흔적을
 * Root까지 전파하는 흐름을 컴팩트 stepper로 보여준다. (stack 배열은 Root→Button 순)
 */
export const FiberToRootHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.sideLabel}: ${content.stack
    .map((n) => `${n.title} (${n.state})`)
    .join(' → ')}. ${content.sideBody}`;

  return (
    <HeroDiagramShell a11yLabel={a11y} className={className}>
      <ol className="relative flex flex-col gap-sm" aria-hidden="true">
        {content.stack.map((node, i) => (
          <li key={node.id} className="flex flex-col gap-sm">
            <StackBox node={node} />
            {i < content.stack.length - 1 && <UpArrow />}
          </li>
        ))}
      </ol>

      <div className="mt-md flex flex-col gap-1 rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] px-md py-2.5 text-center">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--term-accent)]">
          {content.sideLabel}
        </span>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.sideBody}
        </p>
      </div>
    </HeroDiagramShell>
  );
};

const StackBox = ({ node }: { node: FiberStackNode }) => {
  const t = toneTokens[node.tone];
  const Icon = fiberStackIconByName[node.icon];
  return (
    <article
      className={cn(
        'flex min-w-0 items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        'border-[var(--term-border)]',
      )}
    >
      <ToneIconBox tone={node.tone} size="sm">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className={cn('min-w-0 truncate font-mono text-sm font-bold tracking-tight', t.text)}>
          {node.title}
        </span>
        <code className="min-w-0 truncate font-mono text-[11px] text-[var(--term-muted)]">
          {node.state}
        </code>
      </div>
      <span
        className={cn(
          'ml-auto shrink-0 inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider font-mono',
          t.chip,
        )}
      >
        {node.badge}
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

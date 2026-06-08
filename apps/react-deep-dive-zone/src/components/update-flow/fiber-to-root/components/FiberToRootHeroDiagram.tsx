import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { FiberStackIconName, FiberStackNode, FiberToRootContent } from '../content';
import { FlagIcon, PanelsTopLeftIcon, PinIcon, WorkflowIcon } from '../icons';

type Props = { content: FiberToRootContent['hero']; className?: string };

const iconMap: Record<FiberStackIconName, typeof FlagIcon> = {
  flag: FlagIcon,
  panels: PanelsTopLeftIcon,
  workflow: WorkflowIcon,
  pin: PinIcon,
};

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

      <ol className="relative flex flex-col gap-sm" aria-hidden="true">
        {content.stack.map((node, i) => (
          <li key={node.id} className="flex flex-col gap-sm">
            <StackBox node={node} />
            {i < content.stack.length - 1 && <UpArrow />}
          </li>
        ))}
      </ol>

      <div
        className={cn(
          'mt-md flex flex-col gap-1 rounded-xl border px-md py-2.5 text-center',
          'border-[var(--term-border)] bg-[var(--term-bg)]',
        )}
      >
        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--term-accent)]">
          {content.sideLabel}
        </span>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.sideBody}
        </p>
      </div>
    </div>
  );
};

const StackBox = ({ node }: { node: FiberStackNode }) => {
  const t = toneTokens[node.tone];
  const Icon = iconMap[node.iconName];
  return (
    <article
      className={cn(
        'flex min-w-0 items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        'border-[var(--term-border)]',
        t.borderHover,
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

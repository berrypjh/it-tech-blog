import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { FlowNode } from '../content';
import { pdIcon } from '../icons';

type Props = { main: FlowNode[]; a11y: string; className?: string };

/**
 * Hero 핵심 비주얼.
 * 사용자 코드 → react → react-reconciler → renderer → DOM/Native 파이프라인을
 * 위에서 아래로 잇는 컴팩트 stepper. (보조 축은 본문 다이어그램에서 다룬다)
 */
export const PdHeroDiagram = ({ main, a11y, className }: Props) => (
  <div
    className={cn(
      '@container relative w-full overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
      className,
    )}
  >
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.12),transparent_55%)]"
    />
    <p className="sr-only">{a11y}</p>

    <ol className="relative flex flex-col items-center gap-sm" aria-hidden="true">
      {main.map((node, i) => (
        <li key={node.id} className="flex w-full flex-col items-center gap-sm">
          <FlowBox node={node} emphasized={i === 2} />
          {i < main.length - 1 && <DownArrow />}
        </li>
      ))}
    </ol>
  </div>
);

const FlowBox = ({ node, emphasized }: { node: FlowNode; emphasized?: boolean }) => {
  const tone = toneTokens[node.tone];
  const Icon = pdIcon[node.iconName];

  return (
    <article
      className={cn(
        'flex w-full min-w-0 flex-col items-center gap-1 rounded-xl border px-md py-2.5',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        emphasized
          ? cn(tone.chip, tone.border, '@sm:shadow-[0_3px_0_var(--term-border)]')
          : cn('border-[var(--term-border)]', tone.borderHover),
      )}
    >
      <span className="flex min-w-0 items-center gap-2">
        <ToneIconBox tone={node.tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
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

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);

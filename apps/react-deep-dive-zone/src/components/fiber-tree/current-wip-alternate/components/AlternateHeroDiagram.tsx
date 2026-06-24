import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CurrentWipAlternateContent } from '../content';
import { LayersIcon, NetworkIcon } from '../icons';

type Props = { content: CurrentWipAlternateContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 현재 화면을 대표하는 current 트리와 다음 화면을 계산하는 workInProgress 트리가
 * alternate 포인터로 연결되는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const AlternateHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.currentTitle}(${content.currentSubtitle})와 ${content.wipTitle}(${content.wipSubtitle})는 ${content.centerLabel}로 연결되어 같은 논리 노드의 두 버전을 가리킵니다: ${content.nodes
    .map((n) => n.label)
    .join(', ')}.`;

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
        <li className="flex flex-col gap-sm">
          <TreeHeader
            tone="sky"
            label={content.currentTitle}
            caption={content.currentSubtitle}
            icon={<LayersIcon className="h-[18px] w-[18px]" />}
          />
          <NodeList tone="sky" nodes={content.nodes} />
        </li>

        <AlternateArrow label={content.centerLabel} subLabel={content.centerSubLabel} />

        <li className="flex flex-col gap-sm">
          <TreeHeader
            tone="emerald"
            label={content.wipTitle}
            caption={content.wipSubtitle}
            icon={<NetworkIcon className="h-[18px] w-[18px]" />}
          />
          <NodeList tone="emerald" nodes={content.nodes} />
        </li>
      </ol>
    </div>
  );
};

const TreeHeader = ({
  tone,
  label,
  caption,
  icon,
}: {
  tone: ToneKey;
  label: string;
  caption: string;
  icon: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <div className="flex items-center gap-sm">
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <span className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>{label}</span>
      <span className="ml-auto shrink-0 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {caption}
      </span>
    </div>
  );
};

const NodeList = ({
  tone,
  nodes,
}: {
  tone: ToneKey;
  nodes: CurrentWipAlternateContent['hero']['nodes'];
}) => {
  const t = toneTokens[tone];
  return (
    <div
      className={cn(
        'flex flex-wrap gap-1.5 rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {nodes.map((node) => (
        <span
          key={node.id}
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xsm font-bold',
            t.chip,
          )}
        >
          {node.label}
        </span>
      ))}
    </div>
  );
};

const AlternateArrow = ({ label, subLabel }: { label: string; subLabel: string }) => (
  <div className="flex flex-col items-center gap-1" aria-hidden="true">
    <span className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none">
      ↓
    </span>
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2 py-0.5',
        'text-[10px] font-bold uppercase tracking-wider font-mono',
        toneTokens.violet.chip,
      )}
    >
      {label}
    </span>
    <span className="text-[10px] text-[var(--term-muted)] break-keep text-center">{subLabel}</span>
  </div>
);

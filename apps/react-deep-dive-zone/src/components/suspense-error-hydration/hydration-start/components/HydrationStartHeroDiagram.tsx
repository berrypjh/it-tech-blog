import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { HydrationStartContent } from '../content';
import { AtomIcon, GlobeIcon, LinkIcon } from '../icons';

type Props = { content: HydrationStartContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 서버가 이미 만든 HTML → React가 match/hydrate로 연결 → 같은 DOM을 재사용하는
 * Fiber 트리로 이어지는 hydration 시작 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const HydrationStartHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.serverHtml.title} → ${content.matchLabel} → ${content.fiberTree.title}: ${content.fiberTree.lines.map((l) => l.label).join(', ')}`;

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
        <StepHeader
          tone="blue"
          label={content.serverHtml.title}
          icon={<GlobeIcon className="h-[18px] w-[18px]" />}
        />
        <CodePreviewPanel
          code={content.serverHtml.content}
          header={content.serverHtml.fileLabel}
          language="html"
          size="md"
        />

        <DownArrow />

        <StepHeader
          tone="sky"
          label={content.matchLabel}
          icon={<LinkIcon className="h-[18px] w-[18px]" />}
        />

        <DownArrow />

        <StepHeader
          tone="teal"
          label={content.fiberTree.title}
          icon={<AtomIcon className="h-[18px] w-[18px]" />}
        />
        <ol className="flex flex-col gap-1.5">
          {content.fiberTree.lines.map((line, i) => (
            <li key={line.label} className="flex items-center gap-1.5">
              {i > 0 && <span className="font-mono text-[10px] text-[var(--term-muted)]">└─</span>}
              <FiberChip tone={line.kind === 'root' ? 'teal' : 'blue'} label={line.label} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const StepHeader = ({
  tone,
  label,
  icon,
}: {
  tone: ToneKey;
  label: string;
  icon: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <div className="flex items-center gap-sm">
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <span className={cn('font-mono text-sm font-bold tracking-tight break-keep', t.text)}>
        {label}
      </span>
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-[var(--term-border)]"
      />
    </div>
  );
};

const FiberChip = ({ tone, label }: { tone: ToneKey; label: string }) => {
  const t = toneTokens[tone];
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2 py-1 font-mono text-[11px] font-bold break-keep',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        t.border,
        t.text,
      )}
    >
      {label}
    </span>
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

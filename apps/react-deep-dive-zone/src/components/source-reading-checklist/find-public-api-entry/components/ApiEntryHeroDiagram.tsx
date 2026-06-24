import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FindPublicApiEntryContent, HeroLayer } from '../content';
import { CableIcon, CpuIcon, DoorOpenIcon, FileCodeIcon, PlugIcon, SplitIcon } from '../icons';

type Props = { content: FindPublicApiEntryContent['hero']; className?: string };

const layerIcon = {
  user: DoorOpenIcon,
  public: PlugIcon,
  dispatcher: SplitIcon,
  internal: CpuIcon,
} as const;

/**
 * Hero 핵심 비주얼.
 * 사용자 코드 → public API → dispatcher bridge → 내부 구현으로 이어지는
 * "입구에서 구현까지" 호출 레이어를 위에서 아래로 잇는 컴팩트 stepper.
 */
export const ApiEntryHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.visualTitle} ${content.layers
    .map((l) => `${l.label} ${l.layerTitle}: ${l.caption}`)
    .join('; ')}. ${content.flowSummary}`;

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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <header className="flex items-center gap-sm">
          <ToneIconBox tone="blue" size="sm">
            <CableIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <h2 className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.visualTitle}
          </h2>
        </header>

        <DownArrow />

        <ol className="flex flex-col gap-sm">
          {content.layers.map((layer, i) => (
            <li key={layer.key} className="flex flex-col gap-sm">
              <LayerCard layer={layer} />
              {i < content.layers.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>

        <FlowFooter text={content.flowSummary} />
      </div>
    </div>
  );
};

const LayerCard = ({ layer }: { layer: HeroLayer }) => {
  const t = toneTokens[layer.tone];
  const Icon = layerIcon[layer.key];
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={layer.tone} size="sm">
          <Icon className="h-4 w-4" />
        </ToneIconBox>
        <span className={cn('text-xsm font-bold tracking-tight break-keep', t.text)}>
          {layer.layerTitle}
        </span>
        <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {layer.label}
        </span>
      </header>

      {layer.func && (
        <code
          className={cn(
            'inline-flex w-fit items-center rounded-md border px-2 py-1 font-mono text-[11px] font-bold',
            t.chip,
          )}
        >
          {layer.func}
        </code>
      )}

      {layer.code && (
        <CodePreviewPanel code={layer.code} header={layer.file} language="JS" showWindowDots />
      )}

      {layer.file && !layer.code && (
        <code className="flex items-center gap-1.5 overflow-x-auto rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-1 font-mono text-[10.5px] text-[var(--term-fg)]">
          <FileCodeIcon className={cn('h-3 w-3 shrink-0', t.text)} aria-hidden="true" />
          <span className="whitespace-nowrap">{layer.file}</span>
        </code>
      )}

      <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
        {layer.caption}
      </p>
    </article>
  );
};

const FlowFooter = ({ text }: { text: string }) => (
  <p
    className={cn(
      'mt-1 flex flex-wrap items-center gap-1.5 rounded-lg border px-3 py-2',
      'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
      'text-[10px] @sm:text-[11px] font-mono',
    )}
  >
    <span className="font-bold text-[var(--term-accent)]">flow</span>
    <span>·</span>
    <span>{text}</span>
  </p>
);

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);

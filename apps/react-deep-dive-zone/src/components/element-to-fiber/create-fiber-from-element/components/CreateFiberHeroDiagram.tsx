import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CreateFiberFromElementContent, ExtractionChip } from '../content';
import { BoxIcon, LayersIcon, WandIcon } from '../icons';

type Props = { content: CreateFiberFromElementContent['hero']; className?: string };

export const CreateFiberHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.elementLabel} 객체에서 createFiberFromElement 함수가 ${content.extractionChips
    .map((c) => c.label)
    .join(', ')}하여 ${content.fiberLabel} 객체로 확장합니다.`;

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
          <StepHeader
            tone="sky"
            label={content.elementLabel}
            icon={<BoxIcon className="h-[18px] w-[18px]" />}
            badge="input"
          />
          <CodePreviewPanel code={content.elementCode} showWindowDots size="md" />
        </li>

        <DownArrow />

        <li className="flex flex-col gap-sm">
          <StepHeader
            tone="sky"
            label={content.functionLabel}
            icon={<WandIcon className="h-[18px] w-[18px]" />}
          />
          <StepNote text={content.functionSubtitle} />
          <ul className="flex flex-col gap-1.5">
            {content.extractionChips.map((chip) => (
              <li key={chip.badge}>
                <ExtractionRow chip={chip} />
              </li>
            ))}
          </ul>
        </li>

        <DownArrow />

        <li className="flex flex-col gap-sm">
          <StepHeader
            tone="teal"
            label={content.fiberLabel}
            icon={<LayersIcon className="h-[18px] w-[18px]" />}
            badge="output"
          />
          <CodePreviewPanel
            code={content.fiberCode}
            showWindowDots={false}
            language="JS"
            size="md"
          />
        </li>
      </ol>
    </div>
  );
};

const StepHeader = ({
  tone,
  label,
  icon,
  badge,
}: {
  tone: ToneKey;
  label: string;
  icon: React.ReactNode;
  badge?: string;
}) => {
  const t = toneTokens[tone];
  return (
    <div className="flex items-center gap-sm">
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <span className={cn('min-w-0 truncate font-mono text-sm font-bold tracking-tight', t.text)}>
        {label}
      </span>
      {badge ? (
        <span
          className={cn(
            'ml-auto shrink-0 inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider font-mono',
            t.chip,
          )}
        >
          {badge}
        </span>
      ) : (
        <span
          aria-hidden="true"
          className="ml-auto flex-1 border-t border-dashed border-[var(--term-border)]"
        />
      )}
    </div>
  );
};

const ExtractionRow = ({ chip }: { chip: ExtractionChip }) => (
  <span
    className={cn(
      'flex items-center gap-2 rounded-lg border px-sm py-2',
      'border-[var(--term-border)] bg-[var(--term-bg)]',
    )}
  >
    <span
      className={cn(
        'inline-flex h-6 w-6 items-center justify-center rounded-md font-mono text-[11px] font-bold tabular-nums',
        'bg-[var(--term-accent)] text-[var(--term-bg)]',
      )}
    >
      {chip.badge}
    </span>
    <code className="font-mono text-xsm font-bold text-[var(--term-fg)]">{chip.label}</code>
  </span>
);

const StepNote = ({ text }: { text: string }) => (
  <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{text}</p>
);

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);

import { cx } from '@berrypjh/react-ui';
import { Box, Layers, Wand2 } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CreateFiberFromElementContent, ExtractionChip } from '../content';

type Props = { content: CreateFiberFromElementContent['hero'] };

export const CreateFiberHeroDiagram = ({ content }: Props) => {
  const a11y = `${content.elementLabel} → ${content.functionLabel}: ${content.extractionChips.map((c) => c.label).join(', ')} → ${content.fiberLabel}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <ol className="relative flex flex-col gap-sm" aria-hidden="true">
        <li className="flex flex-col gap-sm">
          <StepHeader
            tone="sky"
            label={content.elementLabel}
            icon={<Box className="h-[18px] w-[18px]" aria-hidden="true" />}
            badge="input"
          />
          <CodePreviewPanel code={content.elementCode} showWindowDots size="md" />
        </li>

        <DownArrow />

        <li className="flex flex-col gap-sm">
          <StepHeader
            tone="sky"
            label={content.functionLabel}
            icon={<Wand2 className="h-[18px] w-[18px]" aria-hidden="true" />}
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
            icon={<Layers className="h-[18px] w-[18px]" aria-hidden="true" />}
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
    </HeroDiagramShell>
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
      <span className={cx('min-w-0 truncate font-mono text-sm font-bold tracking-tight', t.text)}>
        {label}
      </span>
      {badge ? (
        <span
          className={cx(
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
    className={cx(
      'flex items-center gap-2 rounded-lg border px-sm py-2',
      'border-[var(--term-border)] bg-[var(--term-bg)]',
    )}
  >
    <span
      className={cx(
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

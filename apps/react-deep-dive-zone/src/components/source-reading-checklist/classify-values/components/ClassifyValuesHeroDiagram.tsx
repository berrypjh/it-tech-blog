import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { ValueClassificationContent } from '../content';
import { BoxesIcon, ListTreeIcon } from '../icons';
import { ValueBadge } from '../ValueBadge';

type Props = { content: ValueClassificationContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 필드 이름만 나열한 목록 → 역할로 분류한 맵으로 이어지는 흐름을
 * 위에서 아래로 잇는 컴팩트 stepper.
 */
export const ClassifyValuesHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.leftPanelTitle} → ${content.connectorLabel} → ${content.rightPanelTitle}`;

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
            tone="amber"
            label={content.leftPanelTitle}
            icon={<ListTreeIcon className="h-[18px] w-[18px]" />}
          />
          <ul className="flex flex-col gap-1.5">
            {content.leftFields.map((field, i) => (
              <li
                key={field}
                className={cn(
                  'flex items-center gap-2 rounded-md border px-2 py-1.5',
                  'border-[var(--term-border)] bg-[var(--term-bg)]',
                  i >= 5 && 'opacity-60',
                )}
              >
                <span
                  aria-hidden="true"
                  className="block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500/70"
                />
                <code className="truncate font-mono text-[11px] text-[var(--term-fg)]">
                  {field}
                </code>
              </li>
            ))}
          </ul>
          <StepNote text={content.leftCaption} />
        </li>

        <DownArrow />

        <li className="flex flex-col gap-sm">
          <StepHeader
            tone="blue"
            label={content.rightPanelTitle}
            icon={<BoxesIcon className="h-[18px] w-[18px]" />}
          />
          <ul className="flex flex-col gap-1.5">
            {content.rightMap.map((row) => (
              <li
                key={row.valueKey}
                className={cn(
                  'flex items-center gap-2 rounded-md border px-2 py-1.5',
                  'border-[var(--term-border)] bg-[var(--term-bg)]',
                )}
              >
                <ValueBadge valueKey={row.valueKey} size="sm" />
                <span aria-hidden="true" className="shrink-0 text-[10px] text-[var(--term-dim)]">
                  →
                </span>
                <span className="truncate break-keep text-[11px] text-[var(--term-muted)]">
                  {row.role}
                </span>
              </li>
            ))}
          </ul>
          <StepNote text={content.rightCaption} />
        </li>
      </ol>
    </div>
  );
};

const StepHeader = ({
  tone,
  label,
  icon,
}: {
  tone: 'amber' | 'blue';
  label: string;
  icon: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <div className="flex items-center gap-sm">
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <span className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>{label}</span>
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-[var(--term-border)]"
      />
    </div>
  );
};

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

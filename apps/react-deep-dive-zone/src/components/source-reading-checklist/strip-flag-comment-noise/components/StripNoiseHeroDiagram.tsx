import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { StripFlagCommentNoiseContent } from '../content';
import { FileCodeIcon, ScanLineIcon } from '../icons';
import { getLabelClasses, LabelChip } from '../LabelChip';

type Props = { content: StripFlagCommentNoiseContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 처음 열었을 때의 노이즈 많은 소스 → 라벨링 → 먼저 읽을 핵심 경로로
 * 줄어드는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const StripNoiseHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.visualTitle}: ${content.leftPanelTitle} → ${content.connectorLabel} → ${content.rightPanelTitle}`;

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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <StepHeader
          tone="indigo"
          label={content.visualTitle}
          icon={<ScanLineIcon className="h-[18px] w-[18px]" />}
        />

        <CodePreviewPanel
          code={content.leftCode}
          showWindowDots
          header={content.leftPanelTitle}
          caption={content.leftCaption}
        />

        <DownArrow label={content.connectorLabel} sub={content.connectorSub} />

        <article
          className={cn(
            'flex flex-col gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-3',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <div className="flex items-center gap-sm">
            <ToneIconBox tone="indigo" size="sm">
              <FileCodeIcon className="h-[18px] w-[18px]" aria-hidden="true" />
            </ToneIconBox>
            <span className="font-mono text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
              {content.rightPanelTitle}
            </span>
          </div>

          <ul className="flex flex-col gap-1.5">
            {content.rightLabels.map((row) => {
              const t = getLabelClasses(row.label);
              return (
                <li
                  key={`${row.label}-${row.snippet}`}
                  className={cn(
                    'flex flex-wrap items-center gap-2 rounded-md border bg-[var(--term-bg)] px-2 py-1.5',
                    t.border,
                  )}
                >
                  <LabelChip label={row.label} size="sm" />
                  <code className={cn('font-mono text-[11px] break-all', t.text)}>
                    {row.snippet}
                  </code>
                </li>
              );
            })}
          </ul>

          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.rightCaption}
          </p>
        </article>
      </div>
    </div>
  );
};

const StepHeader = ({
  tone,
  label,
  icon,
}: {
  tone: 'indigo';
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

const DownArrow = ({ label, sub }: { label: string; sub: string }) => (
  <div className="flex flex-col items-center gap-0.5">
    <span className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none">
      ↓
    </span>
    <span className="inline-flex items-center gap-1 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
      {label}
    </span>
    <span className="text-[10px] font-mono text-[var(--term-muted)] break-keep">{sub}</span>
  </div>
);

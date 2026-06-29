import { cn } from '@it-tech-blog/utils';

import { HeroDiagramShell } from '../../../shared/hero';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FlowStep, UpdateToRenderSummaryContent } from '../content';
import { flowIconByName } from '../icons';

type Props = { content: UpdateToRenderSummaryContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * setState 한 줄 → lane 선택 → queue 등록 → Fiber/Root 표시 → Root 스케줄링 → Render Phase 대기로
 * 이어지는 업데이트 준비 파이프라인을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const SummaryHeroDiagram = ({ content, className }: Props) => {
  const { title, steps } = content.diagram;
  const a11y = `${title}: ${steps.map((s) => `${s.number}. ${s.title}`).join(' → ')}`;

  return (
    <HeroDiagramShell a11yLabel={a11y} className={className}>
      <header className="relative mb-md flex items-center justify-between gap-2" aria-hidden="true">
        <span className="text-sm font-bold leading-tight text-[var(--term-fg)]">{title}</span>
        <span className="shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
          {steps.length} steps
        </span>
      </header>

      <ol className="relative flex flex-col gap-sm" aria-hidden="true">
        {steps.map((step, i) => (
          <li key={step.number} className="flex flex-col gap-sm">
            <StepRow step={step} />
            {i < steps.length - 1 && <DownArrow />}
          </li>
        ))}
      </ol>
    </HeroDiagramShell>
  );
};

const StepRow = ({ step }: { step: FlowStep }) => {
  const tone = toneTokens[step.tone];
  const Icon = flowIconByName[step.icon];

  return (
    <article
      className={cn(
        'flex min-w-0 items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        step.final ? cn(tone.chip, tone.border) : 'border-[var(--term-border)]',
      )}
    >
      <ToneIconBox tone={step.tone} size="sm">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span className="flex items-center gap-1.5">
          <span className="font-mono text-[10px] tabular-nums text-[var(--term-muted)]">
            {step.number}.
          </span>
          <span className={cn('min-w-0 truncate text-sm font-bold tracking-tight', tone.text)}>
            {step.title}
          </span>
        </span>
        <span className="text-[10px] leading-snug text-[var(--term-muted)] break-keep">
          {step.description}
        </span>
      </div>
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

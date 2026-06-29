import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HeroFlowStep, LaneUpdateObjectContent } from '../content';
import { heroFlowIconByName, heroSummaryIconByName } from '../icons';

type Props = { content: LaneUpdateObjectContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * setCount 호출 → lane 선택 → dispatchSetStateInternal → update 객체로 이어지는
 * 흐름을 위에서 아래로 잇는 컴팩트 stepper. 마지막 단계는 update 객체 카드로,
 * 필드 골격을 CodePreviewPanel로 보여준다.
 */
export const LaneUpdateHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.flow.heading}: ${content.flow.steps.map((s) => s.label).join(' → ')}`;

  return (
    <HeroDiagramShell a11yLabel={a11y} className={className}>
      <ol className="relative flex flex-col gap-sm" aria-hidden="true">
        {content.flow.steps.map((step, idx) => (
          <li key={step.id} className="flex flex-col gap-sm">
            {step.kind === 'object' ? <UpdateObjectCard step={step} /> : <FlowStep step={step} />}
            {idx < content.flow.steps.length - 1 && (
              <DownArrow label={content.flow.steps[idx].connectorLabel} />
            )}
          </li>
        ))}
      </ol>

      <ul className="relative mt-md grid grid-cols-1 gap-2 @sm:grid-cols-3" aria-hidden="true">
        {content.summary.map((pill) => {
          const Icon = heroSummaryIconByName[pill.icon];
          return (
            <li
              key={pill.label}
              className="flex items-center gap-2 rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] px-sm py-2 min-w-0"
            >
              <ToneIconBox tone="teal" size="sm" className="h-7 w-7">
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              </ToneIconBox>
              <span className="min-w-0 truncate font-mono text-[11px] text-[var(--term-fg)]">
                {pill.label}
              </span>
            </li>
          );
        })}
      </ul>
    </HeroDiagramShell>
  );
};

const FlowStep = ({ step }: { step: HeroFlowStep }) => {
  const t = toneTokens[step.tone];
  const Icon = heroFlowIconByName[step.icon];
  return (
    <article
      className={cn(
        'flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <ToneIconBox tone={step.tone} size="md">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-1">
        <h3 className={cn('font-mono text-sm font-bold tracking-tight break-keep', t.text)}>
          {step.label}
        </h3>
        {step.code && (
          <code className="inline-flex w-fit items-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 font-mono text-[11px] text-[var(--term-fg)]">
            {step.code}
          </code>
        )}
        {step.description && (
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {step.description}
          </p>
        )}
      </div>
    </article>
  );
};

const UpdateObjectCard = ({ step }: { step: HeroFlowStep }) => {
  const t = toneTokens[step.tone];
  const Icon = heroFlowIconByName[step.icon];
  const code = `const ${step.label} = {\n${(step.fields ?? [])
    .map((field) => `  ${field},`)
    .join('\n')}\n};`;
  return (
    <article className="flex flex-col gap-sm">
      <div className="flex items-center gap-sm">
        <ToneIconBox tone={step.tone} size="sm">
          <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
        </ToneIconBox>
        <span className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>
          {step.label}
        </span>
        <span
          className={cn(
            'ml-auto shrink-0 inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider',
            t.chip,
          )}
        >
          object
        </span>
      </div>
      <CodePreviewPanel code={code} language="JS" showWindowDots={false} size="md" />
    </article>
  );
};

const DownArrow = ({ label }: { label?: string }) => (
  <div className="flex flex-col items-center gap-0.5">
    <span
      aria-hidden="true"
      className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
    >
      ↓
    </span>
    {label && (
      <span className="font-mono text-[10px] tracking-tight text-[var(--term-muted)] break-keep text-center">
        {label}
      </span>
    )}
  </div>
);

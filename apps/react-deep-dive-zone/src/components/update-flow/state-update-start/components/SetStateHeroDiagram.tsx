import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HeroFlowStep, StateUpdateStartContent } from '../content';
import { heroStepIconByName, HourglassIcon } from '../icons';

type Props = { content: StateUpdateStartContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * setState 한 줄 호출 → 업데이트 요청 기록 → 스케줄링 → Render → Commit으로
 * 이어지는 업데이트 시작 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const SetStateHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.flow.heading}: ${content.flow.steps
    .map((s) => s.title)
    .join(' → ')}. ${content.reason.title} — ${content.reason.body}`;

  return (
    <HeroDiagramShell a11yLabel={a11y} className={className}>
      <div className="relative flex flex-col gap-sm">
        <header className="flex items-center gap-sm" aria-hidden="true">
          <div className="flex min-w-0 flex-col">
            <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
              {content.flow.caption}
            </span>
            <span className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
              {content.flow.heading}
            </span>
          </div>
          <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            setState ▸ commit
          </span>
        </header>

        <CodePreviewPanel code="setCount(count + 1);" showWindowDots language="JS" size="md" />

        <DownArrow />

        <ol className="flex flex-col gap-sm" aria-hidden="true">
          {content.flow.steps.map((step, i) => (
            <li key={step.id} className="flex flex-col gap-sm">
              <FlowStepRow step={step} />
              {i < content.flow.steps.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>

        <ReasonNote title={content.reason.title} body={content.reason.body} />
      </div>
    </HeroDiagramShell>
  );
};

const FlowStepRow = ({ step }: { step: HeroFlowStep }) => {
  const t = toneTokens[step.tone];
  const Icon = heroStepIconByName[step.icon];
  return (
    <article
      className={cn(
        'group flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <ToneIconBox tone={step.tone} size="sm">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>
          {step.title}
        </span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {step.description}
        </span>
      </div>
    </article>
  );
};

const ReasonNote = ({ title, body }: { title: string; body: string }) => (
  <div
    className={cn(
      'flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
    aria-hidden="true"
  >
    <ToneIconBox tone="amber" size="sm">
      <HourglassIcon className="h-[18px] w-[18px]" aria-hidden="true" />
    </ToneIconBox>
    <div className="flex min-w-0 flex-col gap-1">
      <h3 className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">{title}</h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{body}</p>
    </div>
  </div>
);

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);

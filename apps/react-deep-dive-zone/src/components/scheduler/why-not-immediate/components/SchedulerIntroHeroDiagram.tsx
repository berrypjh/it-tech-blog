import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FlowStep, WhyNotImmediateContent } from '../content';
import { GaugeIcon, PencilIcon, TimerResetIcon } from '../icons';

type Props = { content: WhyNotImmediateContent['hero']; className?: string };

const stepIcons = [PencilIcon, GaugeIcon, TimerResetIcon];

/**
 * Hero 핵심 비주얼.
 * 상태 변경이 즉시 렌더되지 않고 update 생성 → 우선순위 결정 → 렌더링 시점 조율로
 * 이어지는 스케줄링 파이프라인을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const SchedulerIntroHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}: ${diagram.steps.map((s) => s.title).join(' → ')}`;

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
        <h2 className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
          {diagram.title}
        </h2>

        <ol className="flex flex-col gap-sm">
          {diagram.steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-sm">
              <StepCard step={step} icon={stepIcons[i] ?? PencilIcon} index={i + 1} />
              {i < diagram.steps.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const StepCard = ({
  step,
  icon: Icon,
  index,
}: {
  step: FlowStep;
  icon: typeof PencilIcon;
  index: number;
}) => {
  const t = toneTokens[step.tone as ToneKey];
  return (
    <article
      className={cn(
        'group flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={step.tone as ToneKey} size="sm">
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
      <span className="ml-auto shrink-0 font-mono text-[11px] tabular-nums text-[var(--term-muted)]">
        {index}
      </span>
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

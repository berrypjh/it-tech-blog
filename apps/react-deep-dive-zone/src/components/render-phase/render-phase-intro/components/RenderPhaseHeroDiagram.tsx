import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { RenderPhaseIntroContent } from '../content';
import { CheckCircleIcon, CpuIcon } from '../icons';

type Props = { content: RenderPhaseIntroContent['hero']; className?: string };

type PhaseStep = {
  tone: ToneKey;
  icon: React.ReactNode;
  title: string;
  description: string;
  subDescription: string;
};

/**
 * Hero 핵심 비주얼.
 * Render Phase(다음 화면 계산) → Commit Phase(실제 DOM 반영)로 이어지는
 * 렌더 단계 전체 파이프라인을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const RenderPhaseHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const steps: PhaseStep[] = [
    {
      tone: 'sky',
      icon: <CpuIcon className="h-[18px] w-[18px]" aria-hidden="true" />,
      title: diagram.renderCard.title,
      description: diagram.renderCard.description,
      subDescription: diagram.renderCard.subDescription,
    },
    {
      tone: 'teal',
      icon: <CheckCircleIcon className="h-[18px] w-[18px]" aria-hidden="true" />,
      title: diagram.commitCard.title,
      description: diagram.commitCard.description,
      subDescription: diagram.commitCard.subDescription,
    },
  ];

  const a11y = `${diagram.eyebrow}: ${steps
    .map((s) => `${s.title} — ${s.description}`)
    .join(' → ')}`;

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

      <div className="relative flex flex-col gap-sm">
        <header className="flex items-center gap-sm" aria-hidden="true">
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            {'// render → commit'}
          </span>
          <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {diagram.eyebrow}
          </span>
        </header>

        <ol className="flex flex-col gap-sm" aria-hidden="true">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-sm">
              <PhaseStepRow step={step} />
              {i < steps.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const PhaseStepRow = ({ step }: { step: PhaseStep }) => {
  const t = toneTokens[step.tone];
  return (
    <article
      className={cn(
        'group flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={step.tone} size="sm">
        {step.icon}
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>
          {step.title}
        </span>
        <span className="text-xsm font-bold leading-snug text-[var(--term-fg)] break-keep">
          {step.description}
        </span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {step.subDescription}
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

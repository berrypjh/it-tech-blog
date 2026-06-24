import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CommitPhaseIntroContent } from '../content';
import { CheckCircleIcon, CpuIcon, LayersIcon } from '../icons';

type Props = { content: CommitPhaseIntroContent['hero']; className?: string };

type PhaseStep = {
  tone: ToneKey;
  icon: React.ReactNode;
  title: string;
  items: string[];
};

/**
 * Hero 핵심 비주얼.
 * Render Phase(다음 화면 계산) → Commit Phase(실제 DOM 반영)로 이어지는
 * 커밋 단계 진입 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const CommitPhaseHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const steps: PhaseStep[] = [
    {
      tone: 'sky',
      icon: <CpuIcon className="h-[18px] w-[18px]" aria-hidden="true" />,
      title: diagram.renderCard.title,
      items: diagram.renderCard.items,
    },
    {
      tone: 'teal',
      icon: <LayersIcon className="h-[18px] w-[18px]" aria-hidden="true" />,
      title: diagram.commitCard.title,
      items: diagram.commitCard.items,
    },
  ];

  const a11y = `${diagram.eyebrow}: ${steps
    .map((s) => `${s.title} — ${s.items.join(', ')}`)
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
      <div className="flex min-w-0 flex-col gap-1">
        <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>
          {step.title}
        </span>
        <ul className="flex flex-col gap-0.5">
          {step.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-1.5 text-xsm leading-snug text-[var(--term-muted)] break-keep"
            >
              <CheckCircleIcon aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
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

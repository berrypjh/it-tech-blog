import { cx } from '@berrypjh/react-ui';
import { CheckCircle2, Cpu, Layers } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CommitPhaseIntroContent } from '../content';

type Props = { content: CommitPhaseIntroContent['hero'] };

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
export const CommitPhaseHeroDiagram = ({ content }: Props) => {
  const { diagram } = content;
  const steps: PhaseStep[] = [
    {
      tone: 'sky',
      icon: <Cpu className="h-4 w-4" />,
      title: diagram.renderCard.title,
      items: diagram.renderCard.items,
    },
    {
      tone: 'teal',
      icon: <Layers className="h-4 w-4" />,
      title: diagram.commitCard.title,
      items: diagram.commitCard.items,
    },
  ];

  const a11y = `${diagram.eyebrow}: ${steps
    .map((s) => `${s.title} — ${s.items.join(', ')}`)
    .join(' → ')}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
          {'//'} {diagram.eyebrow}
        </span>

        <ol className="flex flex-col gap-sm">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-sm">
              <PhaseStepRow step={step} />
              {i < steps.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>
      </div>
    </HeroDiagramShell>
  );
};

const PhaseStepRow = ({ step }: { step: PhaseStep }) => {
  const t = toneTokens[step.tone];
  return (
    <div
      className={cx(
        'flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ToneIconBox tone={step.tone} size="sm">
        {step.icon}
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-1">
        <span className={cx('text-sm font-bold tracking-tight break-keep', t.text)}>
          {step.title}
        </span>
        <ul className="flex flex-col gap-0.5">
          {step.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-1.5 text-xsm leading-snug text-[var(--term-muted)] break-keep"
            >
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

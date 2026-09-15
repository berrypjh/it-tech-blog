import { cx } from '@berrypjh/react-ui';
import { Box, Braces, Hexagon, type LucideIcon, PlayCircle } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberWhyNeededContent, HeroFlowStep } from '../content';

const stepIcon: Record<HeroFlowStep['id'], LucideIcon> = {
  jsx: Braces,
  element: Box,
  fiber: Hexagon,
  render: PlayCircle,
};

type Props = { content: FiberWhyNeededContent['hero'] };

/**
 * Hero 핵심 비주얼.
 * JSX → Element → Fiber → Render Phase로 이어지는 챕터 마무리 흐름을
 * 위에서 아래로 잇는 컴팩트 stepper.
 */
export const FiberWhyNeededHeroDiagram = ({ content }: Props) => {
  const a11y = content.flowSteps.map((s) => `${s.title}: ${s.description}`).join(' → ');

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <ol className="relative flex flex-col gap-sm" aria-hidden="true">
        {content.flowSteps.map((step, i) => (
          <li key={step.id} className="flex flex-col gap-sm">
            <FlowCard step={step} />
            {i < content.flowSteps.length - 1 && <DownArrow />}
          </li>
        ))}
      </ol>
    </HeroDiagramShell>
  );
};

const FlowCard = ({ step }: { step: HeroFlowStep }) => {
  const tone = toneTokens[step.accent];
  const Icon = stepIcon[step.id];

  return (
    <article
      className={cx(
        'group flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <ToneIconBox tone={step.accent} size="md">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-1">
        <span className={cx('font-mono text-sm font-bold tracking-tight', tone.text)}>
          {step.title}
        </span>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {step.description}
        </p>
      </div>
    </article>
  );
};

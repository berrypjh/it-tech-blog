import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { FiberWhyNeededContent, HeroFlowStep } from '../content';
import { BoxIcon, BracesIcon, HexagonIcon, PlayCircleIcon } from '../icons';

const iconMap = {
  braces: BracesIcon,
  box: BoxIcon,
  hexagon: HexagonIcon,
  play: PlayCircleIcon,
} as const;

type Props = { content: FiberWhyNeededContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * JSX → Element → Fiber → Render Phase로 이어지는 챕터 마무리 흐름을
 * 위에서 아래로 잇는 컴팩트 stepper.
 */
export const FiberWhyNeededHeroDiagram = ({ content, className }: Props) => {
  const a11y = content.flowSteps.map((s) => `${s.title}: ${s.description}`).join(' → ');

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
        {content.flowSteps.map((step, i) => (
          <li key={step.id} className="flex flex-col gap-sm">
            <FlowCard step={step} />
            {i < content.flowSteps.length - 1 && <DownArrow />}
          </li>
        ))}
      </ol>
    </div>
  );
};

const FlowCard = ({ step }: { step: HeroFlowStep }) => {
  const tone = toneTokens[step.accent];
  const Icon = iconMap[step.iconName];

  return (
    <article
      className={cn(
        'group flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      <ToneIconBox tone={step.accent} size="md">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-1">
        <span className={cn('font-mono text-sm font-bold tracking-tight', tone.text)}>
          {step.title}
        </span>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {step.description}
        </p>
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

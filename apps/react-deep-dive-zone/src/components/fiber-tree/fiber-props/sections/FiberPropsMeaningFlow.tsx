import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FiberPropsContent, MeaningStep } from '../content';
import { ClockIcon, GitCompareIcon, ZapIcon } from '../icons';

type Props = { content: FiberPropsContent['meaning'] };

const iconMap = {
  clock: ClockIcon,
  zap: ZapIcon,
  gitCompare: GitCompareIcon,
} as const;

const toFlowStep = (step: MeaningStep): FlowStepItem => {
  const Icon = iconMap[step.iconName];
  return {
    id: step.id,
    badge: step.title,
    title: step.main,
    body: step.subtitle,
    tone: step.tone,
    icon: <Icon className={cn('h-5 w-5', toneTokens[step.tone].text)} />,
  };
};

export const FiberPropsMeaningFlow = ({ content }: Props) => (
  <section id="meaning" aria-labelledby="heading-meaning" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="meaning"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<GitCompareIcon className="h-5 w-5" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={3} />

    <p className="text-sm sm:text-md text-center leading-relaxed text-[var(--term-fg)] max-w-[68ch] mx-auto break-keep">
      {content.description.split(content.descriptionEmphasis).map((part, i, arr) => (
        <span key={i}>
          {part}
          {i < arr.length - 1 && (
            <span className={cn('font-bold', toneTokens.sky.text)}>
              {content.descriptionEmphasis}
            </span>
          )}
        </span>
      ))}
    </p>
  </section>
);

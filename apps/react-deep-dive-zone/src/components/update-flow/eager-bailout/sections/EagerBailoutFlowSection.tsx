import { cx } from '@berrypjh/react-ui';
import {
  Ban,
  CheckCircle2,
  CircleDotDashed,
  type LucideIcon,
  Scale,
  Settings,
  Zap,
} from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { BailoutStep, BailoutStepIcon, EagerBailoutContent } from '../content';

const bailoutStepIconByName: Record<BailoutStepIcon, LucideIcon> = {
  circleDotDashed: CircleDotDashed,
  settings: Settings,
  scale: Scale,
  checkCircle: CheckCircle2,
  ban: Ban,
};

type Props = { content: EagerBailoutContent['flow'] };

const toFlowStep = (step: BailoutStep): FlowStepItem => {
  const Icon = bailoutStepIconByName[step.icon];
  return {
    id: step.number,
    number: step.number,
    title: step.title,
    body: step.detail,
    tone: step.tone,
    icon: <Icon className={cx('h-5 w-5', toneTokens[step.tone].text)} aria-hidden="true" />,
  };
};

export const EagerBailoutFlowSection = ({ content }: Props) => (
  <section id="flow" aria-labelledby="heading-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Zap className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={3} />
  </section>
);

import { cx } from '@berrypjh/react-ui';
import { Boxes, Hexagon, Lightbulb, RefreshCw, Wand2 } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import { toneTokens } from '../../../shared/tones';
import type { FiberNodeOverviewContent, ReviewStep } from '../content';

type Props = { content: FiberNodeOverviewContent['review'] };

const iconMap = {
  cube: Boxes,
  wand: Wand2,
  hex: Hexagon,
} as const;

const toFlowStep = (step: ReviewStep, idx: number): FlowStepItem => {
  const Icon = iconMap[step.iconName];
  return {
    id: step.id,
    number: String(idx + 1),
    title: step.title,
    body: formatInline(step.body),
    tone: step.tone,
    icon: <Icon className={cx('h-5 w-5', toneTokens[step.tone].text)} />,
  };
};

export const ElementToFiberReview = ({ content }: Props) => (
  <section id="review" aria-labelledby="heading-review" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="review"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<RefreshCw className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={3} />

    <SectionNote icon={<Lightbulb className="h-4 w-4" aria-hidden="true" />}>
      {content.note}
    </SectionNote>
  </section>
);

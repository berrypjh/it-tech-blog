import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import { toneTokens } from '../../../shared/tones';
import type { FiberNodeOverviewContent, ReviewStep } from '../content';
import { BoxesIcon, HexagonIcon, LightbulbIcon, RefreshIcon, WandIcon } from '../icons';

type Props = { content: FiberNodeOverviewContent['review'] };

const iconMap = {
  cube: BoxesIcon,
  wand: WandIcon,
  hex: HexagonIcon,
} as const;

const toFlowStep = (step: ReviewStep, idx: number): FlowStepItem => {
  const Icon = iconMap[step.iconName];
  return {
    id: step.id,
    number: String(idx + 1),
    title: step.title,
    body: formatInline(step.body),
    tone: step.tone,
    icon: <Icon className={cn('h-5 w-5', toneTokens[step.tone].text)} />,
  };
};

export const ElementToFiberReview = ({ content }: Props) => (
  <section id="review" aria-labelledby="heading-review" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="review"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<RefreshIcon className="h-5 w-5" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={3} />

    <SectionNote icon={<LightbulbIcon className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);

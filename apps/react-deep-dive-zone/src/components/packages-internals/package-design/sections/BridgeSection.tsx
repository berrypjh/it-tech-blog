import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { BridgeCard, PackageDesignContent } from '../content';
import { pdIcon } from '../icons';

type Props = { content: PackageDesignContent['bridge'] };

const toFlowStep = (card: BridgeCard, index: number): FlowStepItem => {
  const Icon = pdIcon[card.iconName];
  return {
    id: card.id,
    number: String(index + 1),
    title: card.title,
    body: card.description,
    tone: card.tone,
    icon: <Icon className={cn('h-5 w-5', toneTokens[card.tone].text)} />,
  };
};

export const BridgeSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-bridge" className="space-y-md">
      <SectionHeader
        id="bridge"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<pdIcon.share className="h-5 w-5" />}
      />

      <FlowStepsGrid steps={content.cards.map(toFlowStep)} columns={3} />
    </section>
  );
};

import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import { toneTokens } from '../../../shared/tones';
import type { PositionCard, ReconcilerEntryContent } from '../content';
import { iconByName, MapIcon } from '../icons';

type Props = { content: ReconcilerEntryContent['position'] };

const toFlowStep = (card: PositionCard, idx: number): FlowStepItem => {
  const Icon = iconByName[card.icon];
  return {
    id: card.id,
    number: String(idx + 1),
    title: card.title,
    body: formatInline(card.description),
    tone: card.tone,
    icon: <Icon className={cn('h-5 w-5', toneTokens[card.tone].text)} />,
  };
};

export const ReconcilerPositionFlow = ({ content }: Props) => (
  <section aria-labelledby="heading-position" className="space-y-lg">
    <SectionHeader
      id="position"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<MapIcon className="h-5 w-5" />}
    />

    <FlowStepsGrid steps={content.cards.map(toFlowStep)} columns={4} />
  </section>
);

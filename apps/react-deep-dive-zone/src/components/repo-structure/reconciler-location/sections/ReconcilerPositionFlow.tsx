import { cn } from '@it-tech-blog/utils';

import { Atom, CircleCheck, Cuboid, type LucideIcon, Map, MonitorSmartphone } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import { toneTokens } from '../../../shared/tones';
import type { PositionCard, ReconcilerEntryContent } from '../content';

const cardIcon: Record<PositionCard['id'], LucideIcon> = {
  element: Atom,
  reconciler: Cuboid,
  renderer: MonitorSmartphone,
  host: CircleCheck,
};

type Props = { content: ReconcilerEntryContent['position'] };

const toFlowStep = (card: PositionCard, idx: number): FlowStepItem => {
  const Icon = cardIcon[card.id];
  return {
    id: card.id,
    number: String(idx + 1),
    title: card.title,
    body: formatInline(card.description),
    tone: card.tone,
    icon: <Icon className={cn('h-5 w-5', toneTokens[card.tone].text)} aria-hidden="true" />,
  };
};

export const ReconcilerPositionFlow = ({ content }: Props) => (
  <section aria-labelledby="heading-position" className="space-y-lg">
    <SectionHeader
      id="position"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Map className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid steps={content.cards.map(toFlowStep)} columns={4} />
  </section>
);

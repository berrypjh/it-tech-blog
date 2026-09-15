import { cx } from '@berrypjh/react-ui';
import {
  Boxes,
  GitCommit,
  type LucideIcon,
  Network,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ReconcilerContent, ResponsibilityCard } from '../content';

type Props = { content: ReconcilerContent['responsibilities'] };

const responsibilityIcon: Record<ResponsibilityCard['id'], LucideIcon> = {
  convert: Boxes,
  traverse: Network,
  compute: SlidersHorizontal,
  commit: GitCommit,
};

const toFlowStep = (card: ResponsibilityCard): FlowStepItem => {
  const Icon = responsibilityIcon[card.id];
  return {
    id: card.id,
    number: card.number,
    title: card.title,
    body: card.description,
    tone: card.tone,
    icon: <Icon className={cx('h-5 w-5', toneTokens[card.tone].text)} aria-hidden="true" />,
  };
};

export const ResponsibilitiesSection = ({ content }: Props) => (
  <section aria-labelledby="heading-responsibilities" className="space-y-md">
    <SectionHeader
      id="responsibilities"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid steps={content.cards.map(toFlowStep)} columns={4} />
  </section>
);

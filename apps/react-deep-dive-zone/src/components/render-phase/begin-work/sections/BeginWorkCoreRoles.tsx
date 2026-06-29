import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { BeginWorkContent, RoleCard } from '../content';
import { roleIconByName, SparklesIcon } from '../icons';

type Props = { content: BeginWorkContent['roles'] };

const toFlowStep = (card: RoleCard): FlowStepItem => {
  const Icon = roleIconByName[card.icon];
  return {
    id: String(card.number),
    badge: <span className="font-mono tabular-nums">{String(card.number).padStart(2, '0')}</span>,
    title: card.title,
    body: card.description,
    tone: card.tone,
    icon: <Icon className={cn('h-5 w-5', toneTokens[card.tone].text)} />,
  };
};

export const BeginWorkCoreRoles = ({ content }: Props) => (
  <section id="core-roles" aria-labelledby="heading-core-roles" className="space-y-md">
    <SectionHeader
      id="core-roles"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <FlowStepsGrid steps={content.cards.map(toFlowStep)} columns={3} />
  </section>
);

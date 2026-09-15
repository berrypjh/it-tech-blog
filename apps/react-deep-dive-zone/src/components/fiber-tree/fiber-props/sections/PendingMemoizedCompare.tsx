import { Clock, GitCompare, type LucideIcon, Zap } from 'lucide-react';

import { ToneDetailCard } from '../../../shared/detail';
import { SectionBadgeHeader } from '../../../shared/section';
import { propsTone } from '../components/propsTone';
import type { FiberPropsContent, PropsKind } from '../content';

type Props = { content: FiberPropsContent['comparison'] };

const propsIcon: Record<PropsKind, LucideIcon> = {
  pendingProps: Zap,
  memoizedProps: Clock,
};

export const PendingMemoizedCompare = ({ content }: Props) => (
  <section id="comparison" aria-labelledby="heading-comparison" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="comparison"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<GitCompare className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg items-stretch">
      {content.cards.map((card) => (
        <li key={card.kind} className="flex">
          <ToneDetailCard
            className="flex-1"
            tone={propsTone[card.kind]}
            icon={propsIcon[card.kind]}
            title={card.title}
            description={card.subtitle}
            bullets={card.items}
          />
        </li>
      ))}
    </ul>
  </section>
);

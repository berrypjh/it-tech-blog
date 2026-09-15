import { cx } from '@berrypjh/react-ui';
import { Clock, Flag, GitCompare, HelpCircle, type LucideIcon, Network } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberStoredInformationContent, ReasonCard } from '../content';

type Props = { content: FiberStoredInformationContent['reasons'] };

const cardIcon: Record<ReasonCard['id'], LucideIcon> = {
  traverse: Network,
  compare: GitCompare,
  mark: Flag,
  priority: Clock,
};

export const WhyFieldsNeeded = ({ content }: Props) => (
  <section id="why" aria-labelledby="heading-why" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="why"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<HelpCircle className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
      {content.cards.map((card) => {
        const Icon = cardIcon[card.id];
        return (
          <ToneCardItem key={card.id} tone={card.accent} icon={<Icon className="h-5 w-5" />}>
            <h3
              className={cx(
                'text-sm sm:text-md font-bold tracking-tight break-keep',
                toneTokens[card.accent].text,
              )}
            >
              {card.title}
            </h3>
            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.description}
            </p>
          </ToneCardItem>
        );
      })}
    </ul>
  </section>
);

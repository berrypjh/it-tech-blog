import { Lightbulb, type LucideIcon, RefreshCw, Repeat, Rocket, Route } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import type { DispatcherCardId, HooksEntryPointContent } from '../content';

type Props = { content: HooksEntryPointContent['dispatcher'] };

const cardIcon: Record<DispatcherCardId, LucideIcon> = {
  mount: Rocket,
  update: RefreshCw,
  rerender: Repeat,
};

export const WhyDispatcherExists = ({ content }: Props) => (
  <section id="dispatcher" aria-labelledby="heading-dispatcher" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="dispatcher"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Route className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.cards.map((card) => {
        const Icon = cardIcon[card.id];
        return (
          <ToneCardItem
            key={card.id}
            tone={card.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={card.family}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <h3 className="text-sm sm:text-md font-bold tracking-tight text-[var(--term-fg)] break-keep">
                {card.title}
              </h3>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.description}
              </p>
            </div>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);

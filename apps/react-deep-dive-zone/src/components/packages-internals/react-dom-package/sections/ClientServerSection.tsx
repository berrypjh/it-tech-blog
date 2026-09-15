import { Lightbulb, type LucideIcon, Monitor, Network, Server } from 'lucide-react';

import { CompareVs } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ClientServerCard, ReactDomContent } from '../content';

type Props = { content: ReactDomContent['clientServer'] };

const cardIcon: Record<ClientServerCard['id'], LucideIcon> = {
  client: Monitor,
  server: Server,
};

export const ClientServerSection = ({ content }: Props) => {
  return (
    <section
      id="client-server"
      aria-labelledby="heading-client-server"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        descriptionFullWidth
        id="client-server"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Network className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <ClientServerCardItem card={content.cards[0]} />
        <CompareVs />
        <ClientServerCardItem card={content.cards[1]} />
      </div>

      <SectionNote icon={<Lightbulb className="h-4 w-4" aria-hidden="true" />}>
        {content.banner}
      </SectionNote>
    </section>
  );
};

const ClientServerCardItem = ({ card }: { card: ClientServerCard }) => (
  <ToneDetailCard
    tone={card.tone}
    icon={cardIcon[card.id]}
    title={card.name}
    description={card.description}
    bullets={card.items}
    note={card.info}
  />
);

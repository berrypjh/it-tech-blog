import { CompareVs } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import type { ClientServerCard, ReactDomContent } from '../content';
import { LightbulbIcon, reactDomIcon } from '../icons';

type Props = { content: ReactDomContent['clientServer'] };

export const ClientServerSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-client-server" className="space-y-md">
      <SectionHeader
        id="client-server"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<reactDomIcon.network className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <ClientServerCardItem card={content.cards[0]} />
        <CompareVs />
        <ClientServerCardItem card={content.cards[1]} />
      </div>

      <SectionNote icon={<LightbulbIcon className="h-4 w-4" />}>{content.banner}</SectionNote>
    </section>
  );
};

const ClientServerCardItem = ({ card }: { card: ClientServerCard }) => (
  <ToneDetailCard
    tone={card.tone}
    icon={reactDomIcon[card.iconName]}
    title={card.name}
    description={card.description}
    bullets={card.items}
    note={card.info}
  />
);

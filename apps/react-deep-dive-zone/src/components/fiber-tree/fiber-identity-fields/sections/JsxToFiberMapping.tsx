import { SectionBadgeHeader } from '../../../shared/section';
import { MappingCardItem } from '../components/MappingCard';
import type { FiberIdentityFieldsContent } from '../content';
import { BoxesIcon } from '../icons';

type Props = { content: FiberIdentityFieldsContent['mapping'] };

export const JsxToFiberMapping = ({ content }: Props) => (
  <section id="mapping" aria-labelledby="heading-mapping" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="mapping"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<BoxesIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.cards.map((card) => (
        <li key={card.id}>
          <MappingCardItem card={card} />
        </li>
      ))}
    </ul>
  </section>
);

import { Boxes } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { MappingCardItem } from '../components/MappingCard';
import type { FiberIdentityFieldsContent } from '../content';

type Props = { content: FiberIdentityFieldsContent['mapping'] };

export const JsxToFiberMapping = ({ content }: Props) => (
  <section id="mapping" aria-labelledby="heading-mapping" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="mapping"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Boxes className="h-5 w-5" aria-hidden="true" />}
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

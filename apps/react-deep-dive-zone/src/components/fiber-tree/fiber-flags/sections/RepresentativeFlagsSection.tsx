import { Flag } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { BeforeAfterCard } from '../components/BeforeAfterCard';
import type { FiberFlagsContent } from '../content';

type Props = { content: FiberFlagsContent['repFlags'] };

export const RepresentativeFlagsSection = ({ content }: Props) => (
  <section id="rep-flags" aria-labelledby="heading-rep-flags" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="rep-flags"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Flag className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.cards.map((card) => (
        <li key={card.id}>
          <BeforeAfterCard
            card={card}
            situationLabel={content.situationLabel}
            beforeLabel={content.beforeLabel}
            afterLabel={content.afterLabel}
            resultLabel={content.resultLabel}
          />
        </li>
      ))}
    </ul>
  </section>
);

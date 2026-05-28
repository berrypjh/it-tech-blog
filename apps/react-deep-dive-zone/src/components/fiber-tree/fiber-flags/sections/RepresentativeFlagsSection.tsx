import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { BeforeAfterCard } from '../components/BeforeAfterCard';
import type { FiberFlagsContent } from '../content';
import { FlagIcon } from '../icons';

type Props = { content: FiberFlagsContent['repFlags'] };

export const RepresentativeFlagsSection = ({ content }: Props) => (
  <section id="rep-flags" aria-labelledby="heading-rep-flags" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="rep-flags"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FlagIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.cards.map((card) => (
        <li key={card.id}>
          <BeforeAfterCard
            card={card}
            beforeLabel={content.beforeLabel}
            afterLabel={content.afterLabel}
          />
        </li>
      ))}
    </ul>
  </section>
);

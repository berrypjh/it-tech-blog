import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { WorkTagCardItem } from '../components/WorkTagCard';
import type { FiberIdentityFieldsContent } from '../content';
import { LightbulbIcon, TagIcon } from '../icons';

type Props = { content: FiberIdentityFieldsContent['workTags'] };

export const WorkTagSection = ({ content }: Props) => (
  <section id="work-tags" aria-labelledby="heading-work-tags" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="work-tags"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<TagIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-sm">
      {content.cards.map((card) => (
        <li key={card.name}>
          <WorkTagCardItem card={card} />
        </li>
      ))}
    </ul>

    <SectionNote icon={<LightbulbIcon className="h-4 w-4" />}>{content.banner}</SectionNote>
  </section>
);

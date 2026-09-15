import { Map, Star } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { FinalArchitectureDiagram } from '../components/FinalArchitectureDiagram';
import type { PackageDesignContent } from '../content';

type Props = { content: PackageDesignContent['recap'] };

export const RecapSection = ({ content }: Props) => {
  return (
    <section id="recap" aria-labelledby="heading-recap" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="recap"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Map className="h-5 w-5" aria-hidden="true" />}
      />

      <FinalArchitectureDiagram
        main={content.main}
        scheduler={content.scheduler}
        shared={content.shared}
        a11y={content.a11y}
      />

      <SectionNote icon={<Star className="h-4 w-4" aria-hidden="true" />}>
        {content.banner}
      </SectionNote>
    </section>
  );
};

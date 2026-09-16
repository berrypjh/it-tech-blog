import {
  CheckCircle2,
  Lightbulb,
  type LucideIcon,
  ShieldAlert,
  SplitSquareHorizontal,
} from 'lucide-react';

import { CompareVs } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { PathSideId, WhyFailableRenderContent } from '../content';

type Props = { content: WhyFailableRenderContent['paths'] };

const sideIcon: Record<PathSideId, LucideIcon> = {
  normal: CheckCircle2,
  extended: ShieldAlert,
};

export const NormalVsExtendedPath = ({ content }: Props) => {
  const [normal, extended] = content.sides;

  return (
    <section id="paths" aria-labelledby="heading-paths" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="paths"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SplitSquareHorizontal className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <ToneDetailCard
          tone={normal.tone}
          icon={sideIcon[normal.id]}
          title={normal.title}
          badge={normal.badge}
          description={normal.description}
          bullets={normal.bullets}
        />
        <CompareVs />
        <ToneDetailCard
          tone={extended.tone}
          icon={sideIcon[extended.id]}
          title={extended.title}
          badge={extended.badge}
          description={extended.description}
          bullets={extended.bullets}
        />
      </div>

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};

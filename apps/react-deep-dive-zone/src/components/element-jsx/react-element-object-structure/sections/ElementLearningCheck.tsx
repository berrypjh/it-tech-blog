import { Lightbulb } from 'lucide-react';

import { TakeawayBanner } from '../../../shared/banner';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ReactElementObjectStructureContent } from '../content';

type Props = { content: ReactElementObjectStructureContent['learningCheck'] };

export const ElementLearningCheck = ({ content }: Props) => (
  <section aria-labelledby="heading-check" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="check"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Lightbulb className="h-5 w-5" aria-hidden="true" />}
    />

    <TakeawayBanner lines={content.lines} />
  </section>
);

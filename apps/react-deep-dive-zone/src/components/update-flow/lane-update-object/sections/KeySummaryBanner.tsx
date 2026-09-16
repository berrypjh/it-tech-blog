import { Target } from 'lucide-react';

import { TakeawayBanner } from '../../../shared/banner';
import { SectionBadgeHeader } from '../../../shared/section';
import type { LaneUpdateObjectContent } from '../content';

type Props = { content: LaneUpdateObjectContent['summary'] };

export const KeySummaryBanner = ({ content }: Props) => (
  <section id="summary" aria-labelledby="heading-summary" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="summary"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Target className="h-5 w-5" aria-hidden="true" />}
    />

    <TakeawayBanner lines={content.lines} />
  </section>
);

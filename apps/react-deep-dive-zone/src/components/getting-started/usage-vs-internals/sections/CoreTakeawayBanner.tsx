import { Lightbulb } from 'lucide-react';

import { TakeawayBanner } from '../../../shared/banner';
import { SectionBadgeHeader } from '../../../shared/section';
import type { UsageVsInternalsContent } from '../content';

type Props = { content: UsageVsInternalsContent['takeaway'] };

export const CoreTakeawayBanner = ({ content }: Props) => {
  return (
    <section id="takeaway" aria-labelledby="heading-takeaway" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        id="takeaway"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<Lightbulb className="h-5 w-5" aria-hidden="true" />}
      />

      <TakeawayBanner lines={content.lines} />
    </section>
  );
};

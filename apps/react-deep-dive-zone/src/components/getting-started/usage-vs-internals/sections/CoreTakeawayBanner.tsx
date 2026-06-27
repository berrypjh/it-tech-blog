import { TakeawayBanner } from '../../../shared/banner';
import { SectionHeader } from '../../../shared/section';
import type { UsageVsInternalsContent } from '../content';
import { LightbulbIcon } from '../icons';

type Props = { content: UsageVsInternalsContent['takeaway'] };

export const CoreTakeawayBanner = ({ content }: Props) => {
  return (
    <section id="section-takeaway" aria-labelledby="heading-takeaway" className="space-y-md">
      <SectionHeader
        id="takeaway"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<LightbulbIcon className="h-5 w-5" />}
      />

      <TakeawayBanner lines={content.lines} />
    </section>
  );
};

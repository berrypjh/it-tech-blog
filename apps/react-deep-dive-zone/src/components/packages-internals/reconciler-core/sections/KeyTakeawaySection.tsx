import { TakeawayBanner } from '../../../shared/banner';
import { SectionHeader } from '../../../shared/section';
import type { ReconcilerContent } from '../content';
import { LightbulbIcon } from '../icons';

type Props = { content: ReconcilerContent['concept'] };

export const KeyTakeawaySection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-takeaway" className="space-y-md">
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

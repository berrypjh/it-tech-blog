import { TakeawayBanner } from '../../../shared/banner';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ReactElementObjectStructureContent } from '../content';
import { LightbulbIcon } from '../icons';

type Props = { content: ReactElementObjectStructureContent['learningCheck'] };

export const ElementLearningCheck = ({ content }: Props) => (
  <section aria-labelledby="heading-check" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="check"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<LightbulbIcon className="h-5 w-5" />}
    />

    <TakeawayBanner lines={content.lines} />
  </section>
);

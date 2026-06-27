import { TakeawayBanner } from '../../../shared/banner';
import { SectionBadgeHeader } from '../../../shared/section';
import type { JsxRuntimeFunctionsContent } from '../content';
import { LightbulbIcon } from '../icons';

type Props = { content: JsxRuntimeFunctionsContent['question'] };

export const RuntimeLearningQuestion = ({ content }: Props) => (
  <section aria-labelledby="heading-question" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="question"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<LightbulbIcon className="h-5 w-5" />}
    />

    <TakeawayBanner lines={content.lines} />
  </section>
);

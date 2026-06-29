import { TakeawayBanner } from '../../../shared/banner';
import { SectionHeader } from '../../../shared/section';
import type { DispatchSetStateContent } from '../content';
import { TargetIcon } from '../icons';

type Props = { content: DispatchSetStateContent['summary'] };

export const KeySummaryBanner = ({ content }: Props) => (
  <section id="section-summary" aria-labelledby="heading-summary" className="space-y-md">
    <SectionHeader
      id="summary"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<TargetIcon className="h-5 w-5" />}
    />

    <TakeawayBanner lines={content.lines} />
  </section>
);

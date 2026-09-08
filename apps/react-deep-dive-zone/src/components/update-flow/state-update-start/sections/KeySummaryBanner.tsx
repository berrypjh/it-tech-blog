import { Target } from 'lucide-react';

import { TakeawayBanner } from '../../../shared/banner';
import { SectionHeader } from '../../../shared/section';
import type { StateUpdateStartContent } from '../content';

type Props = { content: StateUpdateStartContent['summary'] };

export const KeySummaryBanner = ({ content }: Props) => (
  <section id="section-summary" aria-labelledby="heading-summary" className="space-y-md">
    <SectionHeader
      id="summary"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Target className="h-5 w-5" aria-hidden="true" />}
    />

    <TakeawayBanner lines={content.lines} />
  </section>
);

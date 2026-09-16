import { cx } from '@berrypjh/react-ui';
import { Archive, Globe, Lightbulb, type LucideIcon, Package, Scissors } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ReasonId, SyntheticEventContent } from '../content';

type Props = { content: SyntheticEventContent['reasons'] };

const reasonIcon: Record<ReasonId, LucideIcon> = {
  consistency: Globe,
  scope: Scissors,
  pooling: Archive,
};

export const WhyWrapReasons = ({ content }: Props) => (
  <section id="reasons" aria-labelledby="heading-reasons" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="reasons"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Package className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.items.map((reason) => {
        const Icon = reasonIcon[reason.id];
        return (
          <ToneCardItem
            key={reason.id}
            tone={reason.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={reason.role}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <h3
                className={cx(
                  'text-sm sm:text-md font-bold tracking-tight break-keep',
                  toneTokens[reason.tone].text,
                )}
              >
                {reason.title}
              </h3>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {reason.description}
              </p>
            </div>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);

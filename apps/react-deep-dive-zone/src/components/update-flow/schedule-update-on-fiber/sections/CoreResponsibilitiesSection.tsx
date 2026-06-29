import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ScheduleUpdateOnFiberContent } from '../content';
import { LayersIcon, responsibilityIconByName } from '../icons';

type Props = { content: ScheduleUpdateOnFiberContent['responsibilities'] };

export const CoreResponsibilitiesSection = ({ content }: Props) => (
  <section
    id="section-responsibilities"
    aria-labelledby="heading-responsibilities"
    className="space-y-md"
  >
    <SectionHeader
      id="responsibilities"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {content.cards.map((card) => {
        const Icon = responsibilityIconByName[card.icon];

        return (
          <ToneCardItem
            key={card.number}
            tone={card.tone}
            icon={<Icon className="h-5 w-5" />}
            topRight={card.number}
          >
            <h3
              className={cn(
                'text-md sm:text-lg font-bold tracking-tight leading-tight break-keep',
                toneTokens[card.tone].text,
              )}
            >
              {card.title}
            </h3>

            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.body}
            </p>
          </ToneCardItem>
        );
      })}
    </ul>
  </section>
);

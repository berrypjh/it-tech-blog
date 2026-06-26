import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ResponsibilityIconName, ScheduleUpdateOnFiberContent } from '../content';
import { FlagIcon, LayersIcon, RepeatIcon, UserIcon } from '../icons';

type Props = { content: ScheduleUpdateOnFiberContent['responsibilities'] };

const iconMap: Record<ResponsibilityIconName, typeof FlagIcon> = {
  flag: FlagIcon,
  user: UserIcon,
  repeat: RepeatIcon,
};

export const CoreResponsibilitiesSection = ({ content }: Props) => (
  <section
    id="responsibilities"
    aria-labelledby="heading-responsibilities"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="responsibilities"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {content.cards.map((card) => {
        const Icon = iconMap[card.iconName];

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

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { EnsureRootScheduledContent, RoleIconName } from '../content';
import { CalendarCheckIcon, ClockIcon, LayersIcon } from '../icons';

type Props = { content: EnsureRootScheduledContent['roles'] };

const iconMap: Record<RoleIconName, typeof ClockIcon> = {
  calendarCheck: CalendarCheckIcon,
  clock: ClockIcon,
};

export const TwoRolesSection = ({ content }: Props) => (
  <section id="roles" aria-labelledby="heading-roles" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="roles"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 gap-md">
      {content.cards.map((card) => {
        const Icon = iconMap[card.iconName];

        return (
          <ToneCardItem
            key={card.number}
            tone={card.tone}
            icon={<Icon className="h-5 w-5" />}
            topRight={card.number}
            badge={card.badge}
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

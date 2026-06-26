import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { BindReasonIconName, DispatchSetStateContent } from '../content';
import { BoxIcon, Link2Icon, ShieldCheckIcon } from '../icons';

type Props = { content: DispatchSetStateContent['bindReasons'] };

const iconMap: Record<BindReasonIconName, typeof BoxIcon> = {
  box: BoxIcon,
  link: Link2Icon,
  shield: ShieldCheckIcon,
};

export const BindReasonCards = ({ content }: Props) => (
  <section
    id="bind-reasons"
    aria-labelledby="heading-bind-reasons"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="bind-reasons"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Link2Icon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {content.cards.map((card) => {
        const Icon = iconMap[card.iconName];

        return (
          <ToneCardItem
            key={card.marker}
            tone={card.tone}
            icon={<Icon className="h-5 w-5" />}
            topRight={card.marker}
            badge={card.sub}
          >
            <h3
              className={cn(
                'text-md sm:text-lg font-bold leading-snug break-keep',
                toneTokens[card.tone].text,
              )}
            >
              {card.title}
            </h3>

            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.body}
            </p>
          </ToneCardItem>
        );
      })}
    </ul>
  </section>
);

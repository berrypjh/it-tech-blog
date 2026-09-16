import { cx } from '@berrypjh/react-ui';
import { Box, Link2, type LucideIcon, ShieldCheck } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { BindReasonIcon, DispatchSetStateContent } from '../content';

const bindReasonIconByName: Record<BindReasonIcon, LucideIcon> = {
  box: Box,
  link: Link2,
  shield: ShieldCheck,
};

type Props = { content: DispatchSetStateContent['bindReasons'] };

export const BindReasonCards = ({ content }: Props) => (
  <section
    id="bind-reasons"
    aria-labelledby="heading-bind-reasons"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="bind-reasons"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Link2 className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {content.cards.map((card) => {
        const Icon = bindReasonIconByName[card.icon];

        return (
          <ToneCardItem
            key={card.marker}
            tone={card.tone}
            icon={<Icon className="h-5 w-5" />}
            topRight={card.marker}
            badge={card.sub}
          >
            <h3
              className={cx(
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

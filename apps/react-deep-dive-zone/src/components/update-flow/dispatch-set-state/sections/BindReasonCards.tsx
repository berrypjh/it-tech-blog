import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { DispatchSetStateContent } from '../content';
import { bindReasonIconByName, Link2Icon } from '../icons';

type Props = { content: DispatchSetStateContent['bindReasons'] };

export const BindReasonCards = ({ content }: Props) => (
  <section id="section-bind-reasons" aria-labelledby="heading-bind-reasons" className="space-y-md">
    <SectionHeader
      id="bind-reasons"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Link2Icon className="h-5 w-5" />}
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

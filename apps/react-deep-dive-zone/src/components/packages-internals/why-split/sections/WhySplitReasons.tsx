import { cx } from '@berrypjh/react-ui';
import { Book, Globe, type LucideIcon, Network, Shield, Sparkles } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ReasonCard, WhySplitContent } from '../content';

type Props = { content: WhySplitContent['reasons'] };

const reasonIcon: Record<ReasonCard['id'], LucideIcon> = {
  env: Globe,
  responsibility: Shield,
  extensibility: Network,
  learnability: Book,
};

export const WhySplitReasons = ({ content }: Props) => {
  return (
    <section id="reasons" aria-labelledby="heading-reasons" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        id="reasons"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
      />

      <ToneCardGrid>
        {content.cards.map((card) => {
          const Icon = reasonIcon[card.id];

          return (
            <ToneCardItem
              key={card.id}
              tone={card.tone}
              icon={<Icon className="h-5 w-5" aria-hidden="true" />}
            >
              <h3
                className={cx(
                  'text-md font-bold tracking-tight break-keep',
                  toneTokens[card.tone].text,
                )}
              >
                {card.title}
              </h3>

              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.description}
              </p>
            </ToneCardItem>
          );
        })}
      </ToneCardGrid>

      <SectionNote icon={<Sparkles className="h-4 w-4" aria-hidden="true" />}>
        {content.banner}
      </SectionNote>
    </section>
  );
};

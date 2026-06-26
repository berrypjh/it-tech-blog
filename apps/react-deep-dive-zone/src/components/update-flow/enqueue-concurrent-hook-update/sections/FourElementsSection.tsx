import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { EnqueueConcurrentHookUpdateContent, FourElementIconName } from '../content';
import {
  BoxIcon,
  DatabaseIcon,
  FileTextIcon,
  FlagIcon,
  LayersIcon,
  SquareDashedIcon,
} from '../icons';

type Props = { content: EnqueueConcurrentHookUpdateContent['elements'] };

const iconMap: Record<FourElementIconName, typeof BoxIcon> = {
  squareDashed: SquareDashedIcon,
  database: DatabaseIcon,
  fileText: FileTextIcon,
  flag: FlagIcon,
};

export const FourElementsSection = ({ content }: Props) => (
  <section id="elements" aria-labelledby="heading-elements" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="elements"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
      {content.cards.map((card) => {
        const Icon = iconMap[card.iconName];

        return (
          <ToneCardItem key={card.id} tone={card.tone} icon={<Icon className="h-5 w-5" />}>
            <h3
              className={cn(
                'text-md sm:text-lg font-bold font-mono tracking-tight break-keep',
                toneTokens[card.tone].text,
              )}
            >
              {card.title}
            </h3>

            <p
              className={cn(
                'text-xsm font-bold leading-snug break-keep',
                toneTokens[card.tone].text,
              )}
            >
              {card.question}
            </p>

            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.body}
            </p>
          </ToneCardItem>
        );
      })}
    </ul>
  </section>
);

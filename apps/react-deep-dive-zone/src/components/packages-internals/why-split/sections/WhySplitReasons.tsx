import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { WhySplitContent } from '../content';
import { architectureIcon, SparklesIcon } from '../icons';

type Props = { content: WhySplitContent['reasons']; sectionId: string };

export const WhySplitReasons = ({ content, sectionId }: Props) => {
  return (
    <section id={sectionId} aria-labelledby="heading-reasons" className="space-y-md scroll-mt-2xl">
      <SectionHeader
        id="reasons"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ToneCardGrid>
        {content.cards.map((card) => {
          const Icon = architectureIcon[card.iconName];

          return (
            <ToneCardItem key={card.id} tone={card.tone} icon={<Icon className="h-5 w-5" />}>
              <h3
                className={cn(
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

      <SectionNote icon={<SparklesIcon className="h-4 w-4" />}>{content.banner}</SectionNote>
    </section>
  );
};

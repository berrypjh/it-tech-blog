import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { SurroundingContent } from '../content';
import { FolderIcon, iconByName, LightbulbIcon } from '../icons';

type Props = { content: SurroundingContent['fixtures'] };

const tone: ToneKey = 'amber';

export const FixturesDeepDive = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-fixtures" className="space-y-lg">
      <SectionHeader
        id="fixtures"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FolderIcon className="h-5 w-5" />}
      />

      <ToneCardGrid>
        {content.cards.map((card) => {
          const Icon = iconByName[card.icon];

          return (
            <ToneCardItem
              key={card.id}
              tone={tone}
              icon={<Icon className="h-5 w-5" />}
              badge={card.badge}
            >
              <h3
                className={cn(
                  'text-md sm:text-lg font-bold font-mono tracking-tight break-keep',
                  toneTokens[tone].text,
                )}
              >
                {card.name}
              </h3>

              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.description}
              </p>
            </ToneCardItem>
          );
        })}
      </ToneCardGrid>

      <SectionNote icon={<LightbulbIcon className="h-4 w-4" />}>{content.banner}</SectionNote>
    </section>
  );
};

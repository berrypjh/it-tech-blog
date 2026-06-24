import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { PackagesDirectoryContent } from '../content';
import { InfoIcon, packageIconByName, SparklesIcon } from '../icons';

type Props = { content: PackagesDirectoryContent['later'] };

export const LaterPackagesGrid = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-later" className="space-y-lg">
      <SectionHeader
        id="later"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => {
          const Icon = packageIconByName[card.icon];

          return (
            <ToneCardItem key={card.id} tone={card.tone} icon={<Icon className="h-5 w-5" />}>
              <h3 className="text-md sm:text-lg font-bold font-mono tracking-tight text-[var(--term-fg)] break-keep leading-snug">
                {card.name}
              </h3>

              <p className={cn('text-xsm font-bold', toneTokens[card.tone].text)}>
                {card.description1}
              </p>

              <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep flex-1">
                {card.description2}
              </p>
            </ToneCardItem>
          );
        })}
      </ul>

      <SectionNote icon={<InfoIcon className="h-4 w-4" />}>{content.banner}</SectionNote>
    </section>
  );
};

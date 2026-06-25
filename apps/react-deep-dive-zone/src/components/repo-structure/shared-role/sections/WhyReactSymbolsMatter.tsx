import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { SharedContent } from '../content';
import { HashIcon, iconByName, InfoIcon } from '../icons';

type Props = { content: SharedContent['symbols'] };

export const WhyReactSymbolsMatter = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-symbols" className="space-y-lg">
      <SectionHeader
        id="symbols"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<HashIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {content.cards.map((card) => {
          const Icon = iconByName[card.icon];

          return (
            <ToneCardItem key={card.id} tone={card.tone} icon={<Icon className="h-5 w-5" />}>
              <header className="flex flex-col gap-0.5">
                <h3
                  className={cn(
                    'text-sm sm:text-md font-bold font-mono tracking-tight break-all',
                    toneTokens[card.tone].text,
                  )}
                >
                  {card.title}
                </h3>
                <p className="text-[11px] text-[var(--term-muted)] font-mono break-keep">
                  {card.subtitle}
                </p>
              </header>

              <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                {card.description}
              </p>
            </ToneCardItem>
          );
        })}
      </ul>

      <SectionNote icon={<InfoIcon className="h-4 w-4" />}>{content.banner}</SectionNote>
    </section>
  );
};

import { cx } from '@berrypjh/react-ui';
import { CircleDashed, CircleDot, Hash, Info, type LucideIcon, SquareStack } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { SharedContent, SymbolCard } from '../content';

const cardIcon: Record<SymbolCard['id'], LucideIcon> = {
  fragment: SquareStack,
  suspense: CircleDashed,
  activity: CircleDot,
};

type Props = { content: SharedContent['symbols'] };

export const WhyReactSymbolsMatter = ({ content }: Props) => {
  return (
    <section id="symbols" aria-labelledby="heading-symbols" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        id="symbols"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<Hash className="h-5 w-5" aria-hidden="true" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {content.cards.map((card) => {
          const Icon = cardIcon[card.id];

          return (
            <ToneCardItem
              key={card.id}
              tone={card.tone}
              icon={<Icon className="h-5 w-5" aria-hidden="true" />}
            >
              <header className="flex flex-col gap-0.5">
                <h3
                  className={cx(
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

      <SectionNote icon={<Info className="h-4 w-4" aria-hidden="true" />}>
        {content.banner}
      </SectionNote>
    </section>
  );
};

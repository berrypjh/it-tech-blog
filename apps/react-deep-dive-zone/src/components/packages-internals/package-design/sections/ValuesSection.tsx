import { cn } from '@it-tech-blog/utils';

import { Compass, type LucideIcon, Map, Network, Shield, Sparkles, Star } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { PackageDesignContent, ValueCard } from '../content';

type Props = { content: PackageDesignContent['values'] };

const valueIcon: Record<ValueCard['id'], LucideIcon> = {
  responsibility: Shield,
  env: Compass,
  extensibility: Network,
  learnability: Map,
};

export const ValuesSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-values" className="space-y-md">
      <SectionHeader
        id="values"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
        {content.cards.map((card) => {
          const Icon = valueIcon[card.id];

          return (
            <ToneCardItem
              key={card.id}
              tone={card.tone}
              icon={<Icon className="h-5 w-5" aria-hidden="true" />}
            >
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
      </ul>

      <SectionNote icon={<Star className="h-4 w-4" aria-hidden="true" />}>
        {content.banner}
      </SectionNote>
    </section>
  );
};

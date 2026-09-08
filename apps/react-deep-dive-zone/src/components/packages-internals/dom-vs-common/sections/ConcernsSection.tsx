import { cn } from '@it-tech-blog/utils';

import { Code, Droplet, type LucideIcon, Monitor, MousePointer, Sparkles } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ConcernCard, DvcContent } from '../content';

type Props = { content: DvcContent['concerns'] };

const concernIcon: Record<ConcernCard['id'], LucideIcon> = {
  node: Code,
  container: Monitor,
  hydration: Droplet,
  env: MousePointer,
};

export const ConcernsSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-concerns" className="space-y-md">
      <SectionHeader
        id="concerns"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
        {content.cards.map((card) => {
          const Icon = concernIcon[card.id];

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

              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep break-words">
                {card.description}
              </p>
            </ToneCardItem>
          );
        })}
      </ul>
    </section>
  );
};

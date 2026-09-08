import { cn } from '@it-tech-blog/utils';

import { Box, Code, FileText, Layers, ListChecks, Network } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ReactElementSummaryBeforeFiberContent } from '../content';

type Props = { content: ReactElementSummaryBeforeFiberContent['summary'] };

const iconMap = {
  code: Code,
  cube: Box,
  document: FileText,
  layers: Layers,
  tree: Network,
} as const;

export const FiveKeyTakeaways = ({ content }: Props) => (
  <section aria-labelledby="heading-summary" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="summary"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecks className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-md">
      {content.cards.map((card) => {
        const Icon = iconMap[card.iconName];

        return (
          <ToneCardItem
            key={card.id}
            tone={card.tone}
            icon={<Icon className="h-5 w-5" />}
            topRight={card.number}
          >
            <h3
              className={cn(
                'text-sm font-bold tracking-tight break-keep',
                toneTokens[card.tone].text,
              )}
            >
              {card.title}
            </h3>

            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.body}
            </p>
          </ToneCardItem>
        );
      })}
    </ul>
  </section>
);

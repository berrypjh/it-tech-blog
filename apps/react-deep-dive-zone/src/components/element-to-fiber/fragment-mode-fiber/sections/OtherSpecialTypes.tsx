import { cn } from '@it-tech-blog/utils';

import { Atom, CircleDashed, Eye, Info, List, ScanLine, Zap } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FragmentModeFiberContent } from '../content';

type Props = { content: FragmentModeFiberContent['others'] };

const iconMap = {
  loader: CircleDashed,
  list: List,
  eye: Eye,
  zap: Zap,
  scan: ScanLine,
} as const;

export const OtherSpecialTypes = ({ content }: Props) => (
  <section id="others" aria-labelledby="heading-others" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="others"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Atom className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-md">
      {content.cards.map((card) => {
        const Icon = iconMap[card.iconName];

        return (
          <ToneCardItem key={card.id} tone={card.accent} icon={<Icon className="h-5 w-5" />}>
            <h3
              className={cn(
                'text-xsm sm:text-sm font-bold tracking-tight break-keep',
                toneTokens[card.accent].text,
              )}
            >
              {card.title}
            </h3>
            <p className="text-[11px] leading-relaxed text-[var(--term-fg)] break-keep">
              {card.subtitle}
            </p>
            <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep font-bold">
              {card.description}
            </p>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Info className="h-4 w-4" aria-hidden="true" />}>
      {content.footnote}
    </SectionNote>
  </section>
);

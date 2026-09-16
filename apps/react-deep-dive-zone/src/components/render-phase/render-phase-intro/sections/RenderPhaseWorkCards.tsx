import { cx } from '@berrypjh/react-ui';
import { Flag, GitBranch, Layers, type LucideIcon, RefreshCcw, Sparkles } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { RenderPhaseIntroContent, WorkCardIcon } from '../content';

const workIconByName: Record<WorkCardIcon, LucideIcon> = {
  refresh: RefreshCcw,
  layers: Layers,
  gitBranch: GitBranch,
  flag: Flag,
} as const;

type Props = { content: RenderPhaseIntroContent['work'] };

export const RenderPhaseWorkCards = ({ content }: Props) => (
  <section id="work-cards" aria-labelledby="heading-work-cards" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="work-cards"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
    />

    <ToneCardGrid>
      {content.cards.map((card, idx) => {
        const Icon = workIconByName[card.icon];
        return (
          <ToneCardItem
            key={card.title}
            tone={card.tone}
            icon={<Icon className="h-5 w-5" />}
            topRight={idx + 1}
          >
            <h3
              className={cx(
                'text-sm sm:text-md font-bold leading-tight break-keep',
                toneTokens[card.tone].text,
              )}
            >
              {card.title}
            </h3>
            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.description}
            </p>
          </ToneCardItem>
        );
      })}
    </ToneCardGrid>
  </section>
);

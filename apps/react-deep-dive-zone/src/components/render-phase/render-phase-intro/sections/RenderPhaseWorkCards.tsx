import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { RenderPhaseIntroContent, WorkCardIcon } from '../content';
import { FlagIcon, GitBranchIcon, LayersIcon, RefreshCcwIcon, SparklesIcon } from '../icons';

type Props = { content: RenderPhaseIntroContent['work'] };

const workIconMap: Record<WorkCardIcon, typeof RefreshCcwIcon> = {
  refresh: RefreshCcwIcon,
  layers: LayersIcon,
  gitBranch: GitBranchIcon,
  flag: FlagIcon,
};

export const RenderPhaseWorkCards = ({ content }: Props) => (
  <section id="work-cards" aria-labelledby="heading-work-cards" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="work-cards"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {content.cards.map((card, idx) => {
        const Icon = workIconMap[card.iconName];
        return (
          <ToneCardItem
            key={card.title}
            tone={card.tone}
            icon={<Icon className="h-5 w-5" />}
            topRight={idx + 1}
          >
            <h3
              className={cn(
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
    </ol>
  </section>
);

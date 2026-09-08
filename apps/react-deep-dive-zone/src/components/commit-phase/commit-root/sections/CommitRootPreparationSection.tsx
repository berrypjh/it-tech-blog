import { cn } from '@it-tech-blog/utils';

import { Flag, Inbox, Settings2, Workflow, Zap } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { CommitRootContent, PreparationCardIcon } from '../content';

type Props = { content: CommitRootContent['preparation'] };

const iconMap: Record<PreparationCardIcon, typeof Inbox> = {
  inbox: Inbox,
  flag: Flag,
  workflow: Workflow,
  zap: Zap,
};

export const CommitRootPreparationSection = ({ content }: Props) => (
  <section
    id="commit-root-preparation"
    aria-labelledby="heading-commit-root-preparation"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="commit-root-preparation"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Settings2 className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-md">
      {content.cards.map((card, idx) => {
        const Icon = iconMap[card.iconName];
        return (
          <ToneCardItem
            key={card.title}
            tone={card.tone}
            icon={<Icon className="h-5 w-5" />}
            topRight={idx + 1}
            badge={card.keyword}
          >
            <h3
              className={cn(
                'text-md font-bold tracking-tight break-keep',
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
    </ul>
  </section>
);

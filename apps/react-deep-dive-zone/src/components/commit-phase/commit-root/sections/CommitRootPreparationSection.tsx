import { cx } from '@berrypjh/react-ui';
import { Flag, Inbox, type LucideIcon, Settings2, Workflow, Zap } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { CommitRootContent, PreparationCardId } from '../content';

type Props = { content: CommitRootContent['preparation'] };

const iconMap: Record<PreparationCardId, LucideIcon> = {
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
    <SectionBadgeHeader
      descriptionFullWidth
      id="commit-root-preparation"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Settings2 className="h-5 w-5" aria-hidden="true" />}
    />

    <ToneCardGrid>
      {content.cards.map((card, idx) => {
        const Icon = iconMap[card.id];
        return (
          <ToneCardItem
            key={card.title}
            tone={card.tone}
            icon={<Icon className="h-5 w-5" />}
            topRight={idx + 1}
            badge={card.keyword}
          >
            <h3
              className={cx(
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
    </ToneCardGrid>
  </section>
);

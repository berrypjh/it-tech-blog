import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { CleanupCardIcon, DeletionContent } from '../content';
import { ClockIcon, MonitorIcon, SparklesIcon, TrashIcon, UnlinkIcon } from '../icons';

type Props = { content: DeletionContent['cleanup'] };

const iconMap: Record<CleanupCardIcon, typeof UnlinkIcon> = {
  brokenLink: UnlinkIcon,
  monitor: MonitorIcon,
  clock: ClockIcon,
  trash: TrashIcon,
};

export const DeletionCleanupItemsSection = ({ content }: Props) => (
  <section
    id="cleanup-items"
    aria-labelledby="heading-cleanup-items"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="cleanup-items"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SparklesIcon className="h-5 w-5" />}
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
            badge={<code className="font-mono">{card.codePill}</code>}
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

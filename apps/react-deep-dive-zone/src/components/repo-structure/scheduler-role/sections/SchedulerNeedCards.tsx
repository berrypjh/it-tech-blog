import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { ToneBadge } from '../../../start/_shared/ToneBadge';
import { ToneCard } from '../../../start/_shared/ToneCard';
import { ToneIconBox } from '../../../start/_shared/ToneIconBox';
import { toneTokens } from '../../../start/_shared/tones';
import type { NeedCard, SchedulerContent } from '../content';
import { CircleHelpIcon, iconByName } from '../icons';

type Props = { content: SchedulerContent['need']; sectionId?: string };

export const SchedulerNeedCards = ({ content, sectionId }: Props) => {
  return (
    <section id={sectionId} aria-labelledby="heading-need" className="space-y-md scroll-mt-24">
      <SectionHeader
        id="need"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<CircleHelpIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <NeedCardItem card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};

type ItemProps = { card: NeedCard };

const NeedCardItem = ({ card }: ItemProps) => {
  const tone = toneTokens[card.tone];
  const Icon = iconByName[card.icon];

  return (
    <ToneCard tone={card.tone} className="w-full">
      <ToneIconBox tone={card.tone} size="md">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </ToneIconBox>

      <h3
        className={cn(
          'text-md sm:text-lg font-bold tracking-tight break-keep whitespace-pre-line',
          tone.text,
        )}
      >
        {card.title}
      </h3>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>

      <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
        <ToneBadge tone={card.tone}>{card.example}</ToneBadge>
      </div>
    </ToneCard>
  );
};

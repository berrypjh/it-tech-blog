import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { NeedCard, SchedulerContent } from '../content';
import { HouseIconBox } from '../HouseIconBox';
import { schedulerIcon, SparklesIcon } from '../icons';
import { toneText } from '../tone-house';

type Props = { content: SchedulerContent['needs'] };

export const NeedSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-needs" className="space-y-md">
      <SectionHeader
        id="needs"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <NeedCardView card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const NeedCardView = ({ card }: { card: NeedCard }) => {
  const Icon = schedulerIcon[card.iconName];

  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        'hover:border-[var(--term-accent)]',
      )}
    >
      <HouseIconBox tone={card.tone} size="md">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </HouseIconBox>

      <h3 className={cn('text-md font-bold tracking-tight break-keep', toneText(card.tone))}>
        {card.title}
      </h3>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { ToneIconBox } from '../../../start/_shared/ToneIconBox';
import { toneTokens } from '../../../start/_shared/tones';
import type { NeedCard, SchedulerContent } from '../content';
import { schedulerIcon, SparklesIcon } from '../icons';

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
  const tone = toneTokens[card.tone];
  const Icon = schedulerIcon[card.iconName];

  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      <ToneIconBox tone={card.tone} size="md">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </ToneIconBox>

      <h3 className={cn('text-md font-bold tracking-tight break-keep', tone.text)}>{card.title}</h3>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};

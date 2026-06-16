import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { ConcernCard, DvcContent } from '../content';
import { dvcIcon, SparklesIcon } from '../icons';
import { localTone, LocalToneIconBox } from '../tone-house';

type Props = { content: DvcContent['concerns'] };

export const ConcernsSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-concerns" className="space-y-md">
      <SectionHeader
        id="concerns"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex min-w-0">
            <ConcernCardView card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const ConcernCardView = ({ card }: { card: ConcernCard }) => {
  const tone = localTone(card.tone);
  const Icon = dvcIcon[card.iconName];

  return (
    <article
      className={cn(
        'group flex min-w-0 flex-1 flex-col gap-sm rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      <LocalToneIconBox tone={card.tone} size="md">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </LocalToneIconBox>

      <h3 className={cn('text-md font-bold tracking-tight break-keep', tone.text)}>{card.title}</h3>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep break-words">
        {card.description}
      </p>
    </article>
  );
};

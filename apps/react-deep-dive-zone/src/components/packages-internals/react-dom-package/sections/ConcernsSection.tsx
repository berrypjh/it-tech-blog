import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { ConcernCard, ReactDomContent } from '../content';
import { reactDomIcon, SparklesIcon } from '../icons';
import { localTone, LocalToneIconBox } from '../tone';

type Props = { content: ReactDomContent['concerns'] };

export const ConcernsSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-concerns" className="space-y-md">
      <SectionHeader
        id="concerns"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <ConcernCardView card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const ConcernCardView = ({ card }: { card: ConcernCard }) => {
  const tone = localTone(card.tone);
  const Icon = reactDomIcon[card.iconName];

  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      <LocalToneIconBox tone={card.tone} size="md">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </LocalToneIconBox>

      <h3 className={cn('text-md font-bold tracking-tight break-keep', tone.text)}>{card.title}</h3>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>

      <ul className="mt-auto flex flex-wrap gap-1.5">
        {card.tags.map((tag) => (
          <li key={tag}>
            <span
              className={cn(
                'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-mono font-bold tracking-tight',
                tone.chip,
              )}
            >
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
};

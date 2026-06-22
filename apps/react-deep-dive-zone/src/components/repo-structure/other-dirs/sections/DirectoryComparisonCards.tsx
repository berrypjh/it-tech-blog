import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { ComparisonCard, SurroundingContent } from '../content';
import { houseToneByIndex } from '../houseTones';
import { FolderIcon, iconByName, StarIcon } from '../icons';

type Props = { content: SurroundingContent['comparison']; sectionId?: string };

export const DirectoryComparisonCards = ({ content, sectionId }: Props) => {
  return (
    <section
      id={sectionId}
      aria-labelledby="heading-comparison"
      className="space-y-md scroll-mt-24"
    >
      <SectionHeader
        id="comparison"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<FolderIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card, idx) => (
          <li key={card.id} className="flex">
            <ComparisonCardItem card={card} index={idx} />
          </li>
        ))}
      </ul>
    </section>
  );
};

type ItemProps = { card: ComparisonCard; index: number };

const ComparisonCardItem = ({ card, index }: ItemProps) => {
  const tone = houseToneByIndex(index);
  const Icon = iconByName[card.icon];

  return (
    <article
      className={cn(
        'group flex w-full flex-col gap-md h-full rounded-lg border p-md',
        'bg-[var(--term-bg)] border-[var(--term-border)]',
        'transition-all hover:-translate-y-0.5 hover:border-[var(--term-accent)]',
        'hover:shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-11 h-11 rounded-md border',
            tone.chip,
          )}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="flex flex-col min-w-0">
          <h3 className={cn('text-md font-bold font-mono tracking-tight', tone.text)}>
            {card.name}
          </h3>
          <p className="text-[11px] uppercase tracking-wider text-[var(--term-muted)] break-keep">
            {card.subtitle}
          </p>
        </div>
      </header>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
        {card.description}
      </p>

      <footer
        className={cn(
          'mt-auto flex items-center justify-between gap-sm pt-sm',
          'border-t border-dashed border-[var(--term-border)]',
        )}
      >
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-bold">
          {card.importanceLabel}
        </span>
        <Rating value={card.rating} toneText={tone.text} />
      </footer>
    </article>
  );
};

type RatingProps = { value: 1 | 2 | 3; toneText: string };

const Rating = ({ value, toneText }: RatingProps) => {
  return (
    <span
      role="img"
      aria-label={`importance ${value} of 3`}
      className="inline-flex items-center gap-0.5"
    >
      {[0, 1, 2].map((i) => (
        <StarIcon
          key={i}
          aria-hidden="true"
          className={cn(
            'h-3.5 w-3.5',
            i < value ? cn(toneText, 'fill-current') : 'text-[var(--term-dim)]',
          )}
        />
      ))}
    </span>
  );
};

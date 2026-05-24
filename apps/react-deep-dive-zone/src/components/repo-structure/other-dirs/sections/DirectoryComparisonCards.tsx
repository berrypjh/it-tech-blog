import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { ToneCard } from '../../../getting-started/_shared/ToneCard';
import { ToneIconBox } from '../../../getting-started/_shared/ToneIconBox';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { ComparisonCard, SurroundingContent } from '../content';
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
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <ComparisonCardItem card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};

type ItemProps = { card: ComparisonCard };

const ComparisonCardItem = ({ card }: ItemProps) => {
  const tone = toneTokens[card.tone];
  const Icon = iconByName[card.icon];

  return (
    <ToneCard tone={card.tone} className="w-full">
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={card.tone} size="md">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
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
        <Rating value={card.rating} tone={card.tone} />
      </footer>
    </ToneCard>
  );
};

type RatingProps = { value: 1 | 2 | 3; tone: ComparisonCard['tone'] };

const Rating = ({ value, tone }: RatingProps) => {
  const t = toneTokens[tone];
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
            i < value ? cn(t.text, 'fill-current') : 'text-[var(--term-dim)]',
          )}
        />
      ))}
    </span>
  );
};

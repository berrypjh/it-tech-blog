import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { CompareCardEntry, ReactDomContent } from '../content';
import { reactDomIcon, StarIcon } from '../icons';
import { localTone, LocalToneIconBox } from '../tone';

type Props = { content: ReactDomContent['compare'] };

export const CompareSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-compare" className="space-y-md">
      <SectionHeader
        id="compare"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<StarIcon className="h-5 w-5" />}
      />

      <div className="relative grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-md">
        <CompareCardView card={content.cards[0]} />

        {/* VS 배지 */}
        <div className="flex md:flex-col items-center justify-center md:py-md" aria-hidden="true">
          <span
            className={cn(
              'inline-flex items-center justify-center w-12 h-12 rounded-full',
              'border-2 bg-[var(--term-bg)] text-[var(--term-accent)] font-bold font-mono tracking-tight',
              'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            {content.vsLabel}
          </span>
        </div>

        <CompareCardView card={content.cards[1]} />
      </div>

      {/* 강조 배너 */}
      <div
        className={cn(
          'flex items-center justify-center gap-sm rounded-xl border px-md py-md text-center',
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span aria-hidden="true" className="text-[var(--term-accent)]">
          <StarIcon className="h-4 w-4" />
        </span>
        <p className="text-sm sm:text-md font-bold tracking-tight break-keep">{content.banner}</p>
      </div>
    </section>
  );
};

const CompareCardView = ({ card }: { card: CompareCardEntry }) => {
  const tone = localTone(card.tone);
  const Icon = reactDomIcon[card.iconName];

  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-md rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
        tone.borderHover,
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center gap-sm">
        <LocalToneIconBox tone={card.tone} size="md">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </LocalToneIconBox>
        <h3 className={cn('text-lg font-bold font-mono tracking-tight', tone.text)}>{card.name}</h3>
      </header>

      <ul
        className={cn(
          'flex flex-col gap-1 rounded-lg border px-md py-2 font-mono',
          'border-dashed border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        {card.apis.map((api) => (
          <li key={api} className={cn('flex items-center gap-2 text-xsm leading-snug', tone.text)}>
            <span
              aria-hidden="true"
              className={cn('inline-block w-1 h-1 rounded-full', tone.dot)}
            />
            <span className="truncate">{api}</span>
          </li>
        ))}
      </ul>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};

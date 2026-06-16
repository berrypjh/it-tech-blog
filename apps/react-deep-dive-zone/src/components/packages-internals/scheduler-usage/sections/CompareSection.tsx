import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { CompareCard, SchedulerContent } from '../content';
import { HouseIconBox } from '../HouseIconBox';
import { schedulerIcon, StarIcon } from '../icons';
import { toneText } from '../tone-house';

type Props = { content: SchedulerContent['compare'] };

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

        {/* center badge */}
        <div className="flex md:flex-col items-center justify-center md:py-md" aria-hidden="true">
          <span
            className={cn(
              'inline-flex flex-col items-center justify-center gap-0.5 w-24 h-24 rounded-full',
              'border-2 bg-[var(--term-bg)] text-[var(--term-fg)] font-bold tracking-tight text-center',
              'border-[var(--term-border)]',
              'shadow-[0_2px_0_var(--term-border)] px-2',
            )}
          >
            <span className="text-[10px] leading-tight text-[var(--term-fg)] break-keep">
              {content.centerBadge.line1}
            </span>
            <span className="text-[10px] leading-tight text-[var(--term-fg)] break-keep">
              {content.centerBadge.line2}
            </span>
            <span className="text-base leading-none text-[var(--term-accent)]">↔</span>
          </span>
        </div>

        <CompareCardView card={content.cards[1]} />
      </div>
    </section>
  );
};

const CompareCardView = ({ card }: { card: CompareCard }) => {
  const Icon = schedulerIcon[card.iconName];
  const accent = toneText(card.tone);

  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-md rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-surface)] border-[var(--term-border)]',
        'hover:border-[var(--term-accent)]',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center gap-sm">
        <HouseIconBox tone={card.tone} size="md">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </HouseIconBox>
        <h3 className={cn('text-lg font-bold font-mono tracking-tight', accent)}>{card.name}</h3>
      </header>

      <p
        className={cn(
          'rounded-lg border px-3 py-2 text-md font-bold italic break-keep',
          'border-dashed border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
        )}
      >
        Q. {card.question}
      </p>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>

      <ul className="mt-auto flex flex-wrap gap-1.5">
        {card.tags.map((tag) => (
          <li key={tag}>
            <span
              className={cn(
                'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-mono font-bold tracking-tight',
                'bg-[var(--term-bg)] border-[var(--term-border)]',
                accent,
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

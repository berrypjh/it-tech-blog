import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { PositionCard, ReconcilerEntryContent } from '../content';
import { iconByName, MapIcon } from '../icons';

type Props = { content: ReconcilerEntryContent['position']; sectionId?: string };

export const ReconcilerPositionFlow = ({ content, sectionId }: Props) => {
  return (
    <section id={sectionId} aria-labelledby="heading-position" className="space-y-md scroll-mt-24">
      <SectionHeader
        id="position"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <ol className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-2 items-stretch">
        {content.cards.map((card, idx) => (
          <FlowCardWithArrow key={card.id} card={card} isLast={idx === content.cards.length - 1} />
        ))}
      </ol>
    </section>
  );
};

type FlowCardWithArrowProps = { card: PositionCard; isLast: boolean };

const FlowCardWithArrow = ({ card, isLast }: FlowCardWithArrowProps) => (
  <>
    <FlowCardItem card={card} />
    {!isLast && <FlowArrow />}
  </>
);

const FlowArrow = () => (
  <div aria-hidden="true" className="flex items-center justify-center">
    <span className="hidden lg:inline-flex text-[var(--term-accent)] text-xl">→</span>
    <span className="inline-flex lg:hidden text-[var(--term-accent)] text-xl">↓</span>
  </div>
);

type ItemProps = { card: PositionCard };

const FlowCardItem = ({ card }: ItemProps) => {
  const tone = toneTokens[card.tone];
  const Icon = iconByName[card.icon];

  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border p-md',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        'bg-[var(--term-bg)]',
        card.emphasized
          ? cn(
              'bg-violet-50/80 dark:bg-violet-950/40',
              tone.border,
              'ring-2 ring-violet-200/60 dark:ring-violet-800/50',
              'lg:shadow-[0_4px_0_var(--term-border)]',
            )
          : 'border-[var(--term-border)]',
        tone.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-md border',
            tone.chip,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <h3 className={cn('text-md font-bold font-mono tracking-tight break-keep', tone.text)}>
          {card.title}
        </h3>
      </header>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};

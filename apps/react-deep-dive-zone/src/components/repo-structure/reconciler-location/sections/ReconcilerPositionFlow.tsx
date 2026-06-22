import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { PositionCard, ReconcilerEntryContent } from '../content';
import { iconByName, MapIcon } from '../icons';

const cycleText = [
  'text-[var(--term-accent)]',
  'text-sky-600 dark:text-sky-300',
  'text-violet-600 dark:text-violet-300',
];

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
          <FlowCardWithArrow
            key={card.id}
            card={card}
            index={idx}
            isLast={idx === content.cards.length - 1}
          />
        ))}
      </ol>
    </section>
  );
};

type FlowCardWithArrowProps = { card: PositionCard; index: number; isLast: boolean };

const FlowCardWithArrow = ({ card, index, isLast }: FlowCardWithArrowProps) => (
  <>
    <FlowCardItem card={card} index={index} />
    {!isLast && <FlowArrow />}
  </>
);

const FlowArrow = () => (
  <div aria-hidden="true" className="flex items-center justify-center">
    <span className="hidden lg:inline-flex text-[var(--term-accent)] text-xl">→</span>
    <span className="inline-flex lg:hidden text-[var(--term-accent)] text-xl">↓</span>
  </div>
);

type ItemProps = { card: PositionCard; index: number };

const FlowCardItem = ({ card, index }: ItemProps) => {
  const Icon = iconByName[card.icon];
  const textColor = card.emphasized ? cycleText[0] : cycleText[index % cycleText.length];

  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border p-md',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        'bg-[var(--term-bg)] border-[var(--term-border)] hover:border-[var(--term-accent)]',
        card.emphasized &&
          cn(
            'bg-[var(--term-surface)]',
            'ring-2 ring-[var(--term-accent)]',
            'lg:shadow-[0_4px_0_var(--term-border)]',
          ),
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-md border bg-[var(--term-surface)] border-[var(--term-border)]',
            textColor,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <h3 className={cn('text-md font-bold font-mono tracking-tight break-keep', textColor)}>
          {card.title}
        </h3>
      </header>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};

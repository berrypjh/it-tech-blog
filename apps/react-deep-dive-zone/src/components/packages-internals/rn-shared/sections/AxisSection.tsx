import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { AxisCard, RnContent } from '../content';
import { ChevronRightIcon, rnIcon, SparklesIcon } from '../icons';
import { ToneIconBox, toneText } from '../localTone';

type Props = { content: RnContent['axis'] };

export const AxisSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-axis" className="space-y-md">
      <SectionHeader
        id="axis"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md items-stretch">
        {content.cards.map((card, index) => (
          <li key={card.id} className="relative flex">
            <AxisCardView card={card} />
            {index < content.cards.length - 1 && (
              <span
                aria-hidden="true"
                className={cn(
                  'hidden lg:flex absolute -right-3 top-1/2 z-10 -translate-y-1/2',
                  'h-6 w-6 items-center justify-center rounded-full',
                  'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-accent)]',
                  'shadow-[0_2px_0_var(--term-border)]',
                )}
              >
                <ChevronRightIcon className="h-3.5 w-3.5" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};

const AxisCardView = ({ card }: { card: AxisCard }) => {
  const Icon = rnIcon[card.iconName];

  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        'hover:border-[var(--term-accent)]',
      )}
    >
      <ToneIconBox tone={card.tone} size="md">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </ToneIconBox>

      <h3 className={cn('text-md font-bold tracking-tight break-keep', toneText(card.tone))}>
        {card.title}
      </h3>
      <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-bold font-mono break-keep">
        {card.subtitle}
      </span>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};

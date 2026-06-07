import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { ReconcilerContent, ResponsibilityCard } from '../content';
import { ChevronRightIcon, reconcilerIcon, SparklesIcon } from '../icons';

type Props = { content: ReconcilerContent['responsibilities'] };

export const ResponsibilitiesSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-responsibilities" className="space-y-md">
      <SectionHeader
        id="responsibilities"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md items-stretch">
        {content.cards.map((card, index) => (
          <li key={card.id} className="relative flex">
            <ResponsibilityCardView card={card} />
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

const ResponsibilityCardView = ({ card }: { card: ResponsibilityCard }) => {
  const tone = toneTokens[card.tone];
  const Icon = reconcilerIcon[card.iconName];

  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <ToneIconBox tone={card.tone} size="md">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-7 h-7 rounded-full text-[11px] font-bold font-mono tabular-nums',
            tone.chip,
          )}
        >
          {card.number}
        </span>
      </header>

      <h3 className={cn('text-md font-bold tracking-tight break-keep', tone.text)}>{card.title}</h3>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};

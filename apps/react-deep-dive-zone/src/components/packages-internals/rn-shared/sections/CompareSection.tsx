import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { CompareCard, RnContent } from '../content';
import { CheckCircleIcon, rnIcon, StarIcon } from '../icons';

type Props = { content: RnContent['compare'] };

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

        <div className="flex md:flex-col items-center justify-center md:py-md" aria-hidden="true">
          <span
            className={cn(
              'inline-flex items-center justify-center w-12 h-12 rounded-full font-bold font-mono',
              'border-2 border-sky-400 bg-[var(--term-bg)] text-[var(--term-fg)]',
              'shadow-[0_2px_0_var(--term-border)]',
              'dark:border-sky-500',
            )}
          >
            {content.vsLabel}
          </span>
        </div>

        <CompareCardView card={content.cards[1]} />
      </div>
    </section>
  );
};

const CompareCardView = ({ card }: { card: CompareCard }) => {
  const tone = toneTokens[card.tone];
  const Icon = rnIcon[card.iconName];

  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-md rounded-2xl border p-md sm:p-lg',
        tone.chip,
        tone.border,
        tone.borderHover,
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={card.tone} size="md">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
        <h3 className={cn('text-lg font-bold font-mono tracking-tight', tone.text)}>{card.name}</h3>
      </header>

      <ul className="flex flex-col gap-2">
        {card.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
          >
            <span aria-hidden="true" className={cn('shrink-0 mt-0.5', tone.text)}>
              <CheckCircleIcon className="h-3.5 w-3.5" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

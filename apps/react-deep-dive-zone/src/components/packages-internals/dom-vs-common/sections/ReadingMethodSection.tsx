import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { ToneIconBox } from '../../../getting-started/_shared/ToneIconBox';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { DvcContent, ReadingCard } from '../content';
import { CheckCircleIcon, ChevronRightIcon, dvcIcon, SparklesIcon } from '../icons';

type Props = { content: DvcContent['reading'] };

export const ReadingMethodSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-reading" className="space-y-md">
      <SectionHeader
        id="reading"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <ReadingCardView card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const ReadingCardView = ({ card }: { card: ReadingCard }) => {
  const tone = toneTokens[card.tone];
  const Icon = dvcIcon[card.iconName];

  return (
    <article
      className={cn(
        'group flex h-full flex-1 flex-col gap-md rounded-2xl border p-md sm:p-lg',
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
        <h3 className={cn('text-md sm:text-lg font-bold tracking-tight break-keep', tone.text)}>
          {card.title}
        </h3>
      </header>

      <span
        className={cn(
          'self-start inline-flex items-center rounded-full border px-3 py-1 text-xsm font-mono font-bold',
          'bg-[var(--term-bg)]',
          tone.border,
          tone.text,
        )}
      >
        {card.pill}
      </span>

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

      <ul className="mt-auto flex flex-wrap items-center gap-1.5">
        {card.flow.map((step, i) => (
          <li key={step} className="flex items-center gap-1.5">
            <span
              className={cn(
                'inline-flex items-center rounded-md border px-2 py-1 text-[11px] font-mono font-bold',
                'bg-[var(--term-bg)]',
                tone.border,
                tone.text,
              )}
            >
              {step}
            </span>
            {i < card.flow.length - 1 && (
              <ChevronRightIcon
                className="h-3.5 w-3.5 text-[var(--term-accent)]"
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ul>
    </article>
  );
};

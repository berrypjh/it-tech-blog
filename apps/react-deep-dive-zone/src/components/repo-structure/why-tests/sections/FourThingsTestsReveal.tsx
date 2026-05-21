import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { ToneCard } from '../../../start/_shared/ToneCard';
import { ToneIconBox } from '../../../start/_shared/ToneIconBox';
import { toneTokens } from '../../../start/_shared/tones';
import type { InsightCard, TestCodeContent } from '../content';
import { iconByName, SparklesIcon } from '../icons';

type Props = { content: TestCodeContent['insights'] };

export const FourThingsTestsReveal = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-insights" className="space-y-md">
      <SectionHeader
        id="insights"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <InsightCardItem card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};

type ItemProps = { card: InsightCard };

const InsightCardItem = ({ card }: ItemProps) => {
  const tone = toneTokens[card.tone];
  const Icon = iconByName[card.icon];

  return (
    <ToneCard tone={card.tone} className="w-full">
      <header className="flex items-center justify-between gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-full border-2 font-bold text-sm tabular-nums',
            tone.chip,
            tone.border,
          )}
        >
          {card.number}
        </span>
        <ToneIconBox tone={card.tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
      </header>

      <h3
        className={cn(
          'text-md sm:text-lg font-bold tracking-tight break-keep whitespace-pre-line',
          tone.text,
        )}
      >
        {card.title}
      </h3>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep mt-auto">
        {card.description}
      </p>
    </ToneCard>
  );
};

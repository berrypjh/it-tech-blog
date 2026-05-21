import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { ToneBadge } from '../../../start/_shared/ToneBadge';
import { ToneCard } from '../../../start/_shared/ToneCard';
import { toneTokens } from '../../../start/_shared/tones';
import type { PreviewCard, ReconcilerEntryContent } from '../content';
import { ArrowRightIcon, SparklesIcon } from '../icons';

type Props = { content: ReconcilerEntryContent['preview'] };

export const ReconcilerNextTopicsPreview = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-preview" className="space-y-md">
      <SectionHeader
        id="preview"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ol className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-2 items-stretch">
        {content.cards.map((card, idx) => (
          <PreviewCardWithArrow
            key={card.id}
            card={card}
            isLast={idx === content.cards.length - 1}
          />
        ))}
      </ol>
    </section>
  );
};

type WithArrowProps = { card: PreviewCard; isLast: boolean };

const PreviewCardWithArrow = ({ card, isLast }: WithArrowProps) => (
  <>
    <PreviewCardItem card={card} />
    {!isLast && <PreviewArrow />}
  </>
);

const PreviewArrow = () => (
  <div aria-hidden="true" className="flex items-center justify-center">
    <ArrowRightIcon className="hidden lg:inline-flex h-5 w-5 text-[var(--term-accent)]" />
    <ArrowRightIcon className="inline-flex lg:hidden h-5 w-5 rotate-90 text-[var(--term-accent)]" />
  </div>
);

type ItemProps = { card: PreviewCard };

const PreviewCardItem = ({ card }: ItemProps) => {
  const tone = toneTokens[card.tone];
  return (
    <ToneCard tone={card.tone} className="w-full">
      <header className="flex items-center justify-between gap-sm">
        <ToneBadge tone={card.tone}>{card.badge}</ToneBadge>
      </header>
      <h3
        className={cn(
          'text-sm sm:text-md font-bold tracking-tight text-[var(--term-fg)] break-keep whitespace-pre-line',
        )}
      >
        {card.title}
      </h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep mt-auto">
        {card.description}
      </p>
      <div className={cn('pt-xs text-xsm font-bold inline-flex items-center gap-1', tone.text)}>
        <span className="uppercase tracking-wider text-[10px]">explore</span>
        <ArrowRightIcon className="h-3 w-3" aria-hidden="true" />
      </div>
    </ToneCard>
  );
};

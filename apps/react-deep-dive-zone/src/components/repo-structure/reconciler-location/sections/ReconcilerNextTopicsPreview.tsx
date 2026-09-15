import Link from 'next/link';

import { cx } from '@berrypjh/react-ui';
import { ArrowRight, Sparkles } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneBadge, ToneCard } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { PreviewCard, ReconcilerEntryContent } from '../content';

type Props = { content: ReconcilerEntryContent['preview'] };

export const ReconcilerNextTopicsPreview = ({ content }: Props) => {
  return (
    <section id="preview" aria-labelledby="heading-preview" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="preview"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
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
    <ArrowRight
      className="hidden lg:inline-flex h-5 w-5 text-[var(--term-accent)]"
      aria-hidden="true"
    />
    <ArrowRight
      className="inline-flex lg:hidden h-5 w-5 rotate-90 text-[var(--term-accent)]"
      aria-hidden="true"
    />
  </div>
);

const PreviewCardItem = ({ card }: { card: PreviewCard }) => (
  <Link
    href={card.href}
    className="group/card h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]"
  >
    <ToneCard tone={card.tone} nav className="w-full">
      <header className="flex items-center justify-between gap-sm">
        <ToneBadge tone={card.tone}>{card.badge}</ToneBadge>
      </header>
      <h3 className="text-sm sm:text-md font-bold tracking-tight text-[var(--term-fg)] break-keep whitespace-pre-line">
        {card.title}
      </h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep mt-auto">
        {card.description}
      </p>
      <div
        className={cx(
          'pt-xs text-xsm font-bold inline-flex items-center gap-1',
          toneTokens[card.tone].text,
        )}
      >
        <span className="uppercase tracking-wider text-[10px]">explore</span>
        <ArrowRight
          className="h-3 w-3 transition-transform group-hover/card:translate-x-0.5"
          aria-hidden="true"
        />
      </div>
    </ToneCard>
  </Link>
);

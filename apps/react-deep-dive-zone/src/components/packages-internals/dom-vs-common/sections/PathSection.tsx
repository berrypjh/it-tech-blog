import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneBadge, ToneCard } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { DvcContent, PathCard } from '../content';
import { ArrowRightIcon, MapIcon } from '../icons';

type Props = { content: DvcContent['path'] };

export const PathSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-path" className="space-y-md">
      <SectionHeader
        id="path"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <ol className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-2 items-stretch">
        {content.cards.map((card, idx) => (
          <PathCardWithArrow
            key={card.id}
            card={card}
            moreLabel={content.moreLabel}
            isLast={idx === content.cards.length - 1}
          />
        ))}
      </ol>
    </section>
  );
};

type WithArrowProps = { card: PathCard; moreLabel: string; isLast: boolean };

const PathCardWithArrow = ({ card, moreLabel, isLast }: WithArrowProps) => (
  <>
    <PathCardItem card={card} moreLabel={moreLabel} />
    {!isLast && <PathArrow />}
  </>
);

const PathArrow = () => (
  <div aria-hidden="true" className="flex items-center justify-center">
    <ArrowRightIcon className="hidden lg:inline-flex h-5 w-5 text-[var(--term-accent)]" />
    <ArrowRightIcon className="inline-flex lg:hidden h-5 w-5 rotate-90 text-[var(--term-accent)]" />
  </div>
);

const PathCardItem = ({ card, moreLabel }: { card: PathCard; moreLabel: string }) => (
  <Link
    href={card.href}
    className="group/card h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]"
  >
    <ToneCard tone={card.tone} nav className="w-full">
      <header className="flex items-center justify-between gap-sm">
        <ToneBadge tone={card.tone}>{card.subtitle}</ToneBadge>
      </header>
      <h3 className="text-sm sm:text-md font-bold tracking-tight text-[var(--term-fg)] break-keep whitespace-pre-line">
        {card.title}
      </h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep mt-auto">
        {card.description}
      </p>
      <div
        className={cn(
          'pt-xs text-xsm font-bold inline-flex items-center gap-1',
          toneTokens[card.tone].text,
        )}
      >
        <span className="uppercase tracking-wider text-[10px]">{moreLabel}</span>
        <ArrowRightIcon
          className="h-3 w-3 transition-transform group-hover/card:translate-x-0.5"
          aria-hidden="true"
        />
      </div>
    </ToneCard>
  </Link>
);

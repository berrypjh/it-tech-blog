import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { DvcContent, PathCard } from '../content';
import { ArrowRightIcon, ChevronRightIcon, dvcIcon, MapIcon } from '../icons';

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

      <ol className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card, index) => (
          <li key={card.id} className="relative flex">
            <PathCardView card={card} moreLabel={content.moreLabel} />
            {index < content.cards.length - 1 && (
              <span
                aria-hidden="true"
                className={cn(
                  'hidden md:flex absolute -right-3 top-1/2 z-10 -translate-y-1/2',
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

const PathCardView = ({ card, moreLabel }: { card: PathCard; moreLabel: string }) => {
  const tone = toneTokens[card.tone];
  const Icon = dvcIcon[card.iconName];

  return (
    <Link
      href={card.href}
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        tone.borderHover,
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
      )}
    >
      <ToneIconBox tone={card.tone} size="md">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </ToneIconBox>

      <h3 className={cn('text-md font-bold tracking-tight break-keep', tone.text)}>{card.title}</h3>
      <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-bold font-mono">
        {card.subtitle}
      </span>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>

      <span
        className={cn(
          'mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold font-mono tracking-tight',
          tone.text,
        )}
      >
        {moreLabel}
        <ArrowRightIcon
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
};

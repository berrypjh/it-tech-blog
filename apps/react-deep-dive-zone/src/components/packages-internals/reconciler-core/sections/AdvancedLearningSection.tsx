import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import {
  ArrowRight,
  Atom,
  BookOpen,
  Clock,
  GitBranch,
  type LucideIcon,
  SlidersHorizontal,
} from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { ToneCard } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { AdvancedLink, ReconcilerContent } from '../content';

type Props = { content: ReconcilerContent['advanced'] };

const linkIcon: Record<AdvancedLink['id'], LucideIcon> = {
  'component-fiber': Atom,
  'fiber-tree': GitBranch,
  'render-phase': SlidersHorizontal,
  'commit-phase': Clock,
};

export const AdvancedLearningSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-advanced" className="space-y-md">
      <SectionHeader
        id="advanced"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<BookOpen className="h-5 w-5" aria-hidden="true" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <AdvancedCardView card={card} moreLabel={content.moreLabel} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const AdvancedCardView = ({ card, moreLabel }: { card: AdvancedLink; moreLabel: string }) => {
  const Icon = linkIcon[card.id];

  return (
    <Link
      href={card.href}
      className="group/card h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]"
    >
      <ToneCard tone={card.tone} nav className="w-full">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-md',
            toneTokens[card.tone].chip,
          )}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>

        <h3
          className={cn('text-md font-bold tracking-tight break-keep', toneTokens[card.tone].text)}
        >
          {card.title}
        </h3>

        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {card.description}
        </p>

        <span
          className={cn(
            'mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold font-mono tracking-tight',
            toneTokens[card.tone].text,
          )}
        >
          {moreLabel}
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform group-hover/card:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </ToneCard>
    </Link>
  );
};

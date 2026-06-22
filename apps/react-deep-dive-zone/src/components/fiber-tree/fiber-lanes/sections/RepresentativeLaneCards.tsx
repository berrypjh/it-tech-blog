import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { LaneIcon } from '../components/LaneIcon';
import { laneBgTint, laneBorder, laneIconBg, laneTitleText } from '../components/laneStyles';
import type { FiberLanesContent, LaneCard } from '../content';
import { LayersIcon } from '../icons';

type Props = { content: FiberLanesContent['laneCards'] };

export const RepresentativeLaneCards = ({ content }: Props) => (
  <section id="lane-cards" aria-labelledby="heading-lane-cards" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="lane-cards"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.cards.map((card) => (
        <li key={card.id}>
          <LaneCardItem card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const LaneCardItem = ({ card }: { card: LaneCard }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-sm rounded-3xl border-2 p-md sm:p-lg',
      'shadow-[0_2px_0_var(--term-border)]',
      'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
      laneBorder[card.tone],
      laneBgTint[card.tone],
    )}
  >
    <header className="flex items-center gap-sm">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-12 h-12 rounded-xl',
          laneIconBg[card.tone],
        )}
      >
        <LaneIcon iconName={card.iconName} className="h-6 w-6" />
      </span>
      <div className="flex flex-col min-w-0">
        <code
          className={cn(
            'font-mono text-md font-bold tracking-tight break-all',
            laneTitleText[card.tone],
          )}
        >
          {card.label}
        </code>
        <span className="text-xsm font-bold text-[var(--term-muted)] break-keep">
          {card.subtitle}
        </span>
      </div>
    </header>
    <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>
  </article>
);

import { cx } from '@berrypjh/react-ui';
import { Boxes, Home, type LucideIcon, Network, User } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ByTagCard, FiberKind, FiberStateNodeContent } from '../content';

type Props = { content: FiberStateNodeContent['byTag'] };

const cardIcon: Record<FiberKind, LucideIcon> = {
  hostRoot: Home,
  hostComponent: Boxes,
  classComponent: User,
};

export const StateNodeByTag = ({ content }: Props) => (
  <section id="by-tag" aria-labelledby="heading-by-tag" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="by-tag"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Network className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.cards.map((card) => (
        <li key={card.id}>
          <ByTagCardItem card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const ByTagCardItem = ({ card }: { card: ByTagCard }) => {
  const Icon = cardIcon[card.id];
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-sm rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        toneTokens[card.tone].border,
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <ToneIconBox tone={card.tone}>
          <Icon className="h-6 w-6" />
        </ToneIconBox>
        <span
          className={cx(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider font-mono whitespace-nowrap',
            toneTokens[card.tone].chip,
          )}
        >
          {card.badge}
        </span>
      </header>

      <h3 className={cx('text-md font-bold tracking-tight break-keep', toneTokens[card.tone].text)}>
        {card.title}
      </h3>
      <p
        className={cx(
          'font-mono text-xsm sm:text-sm font-bold break-keep',
          toneTokens[card.tone].text,
        )}
      >
        {card.mainArrow}
      </p>
      <p className="mt-auto text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.body}
      </p>
    </article>
  );
};

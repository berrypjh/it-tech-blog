import { cx } from '@berrypjh/react-ui';
import { Box, Lightbulb, Package, Target, Waypoints } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { HostComponentFiberContent, ModernHostCard } from '../content';

type Props = { content: HostComponentFiberContent['modern'] };

const iconMap = {
  box: Box,
  package: Package,
  target: Target,
} as const;

export const ModernHostFamily = ({ content }: Props) => (
  <section id="modern" aria-labelledby="heading-modern" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="modern"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Waypoints className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" aria-hidden="true" />}>
      {content.description}
    </SectionNote>

    <p className="text-[11px] text-[var(--term-muted)] italic break-keep text-right">
      {content.footnote}
    </p>
  </section>
);

const CardView = ({ card }: { card: ModernHostCard }) => {
  const t = toneTokens[card.tone];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cx(
        'group flex flex-1 flex-col gap-sm rounded-2xl border-2 p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.border,
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cx(
            'inline-flex items-center justify-center w-11 h-11 rounded-2xl border shrink-0',
            t.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-col">
          <h3 className={cx('font-mono text-sm font-bold tracking-tight', t.text)}>{card.title}</h3>
          <span className="text-[11px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            {card.subtitle}
          </span>
        </div>
      </header>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};

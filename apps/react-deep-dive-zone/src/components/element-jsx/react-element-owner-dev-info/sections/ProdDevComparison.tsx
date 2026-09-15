import { cx } from '@berrypjh/react-ui';
import { Bug, CheckCircle2, Gauge, GitCompare, type LucideIcon, Sparkles } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ProdDevCard, ReactElementOwnerDevInfoContent } from '../content';

type Props = { content: ReactElementOwnerDevInfoContent['prodDev'] };

const cardIcon: Record<ProdDevCard['id'], LucideIcon> = {
  production: Gauge,
  development: Bug,
};

export const ProdDevComparison = ({ content }: Props) => (
  <section id="prod-dev" aria-labelledby="heading-prod-dev" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="prod-dev"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitCompare className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>

    <SectionNote icon={<Sparkles className="h-4 w-4" aria-hidden="true" />}>
      {content.emphasis}
    </SectionNote>
  </section>
);

const CardView = ({ card }: { card: ProdDevCard }) => {
  const t = toneTokens[card.tone];
  const Icon = cardIcon[card.id];
  return (
    <article
      className={cx(
        'group flex flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cx(
            'inline-flex items-center justify-center w-14 h-14 rounded-full border',
            t.chip,
          )}
        >
          <Icon className="h-6 w-6" />
        </span>
        <div className="flex flex-col gap-0.5 min-w-0">
          <code className={cx('font-mono text-lg font-bold tracking-tight', t.text)}>
            {card.title}
          </code>
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
            mode
          </span>
        </div>
      </header>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
        {card.body}
      </p>

      <ul className="flex flex-col gap-1.5 mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
        {card.items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)] shrink-0 mt-0.5"
            >
              <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
            </span>
            <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">{item}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

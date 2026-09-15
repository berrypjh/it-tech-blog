import { cx } from '@berrypjh/react-ui';
import { CheckCircle2, ListChecks, type LucideIcon, Sparkles, Tag, User } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ReactElementTypeMeaningContent, TypeKindCard } from '../content';

type Props = { content: ReactElementTypeMeaningContent['kinds'] };

const cardIcon: Record<TypeKindCard['id'], LucideIcon> = {
  host: Tag,
  custom: User,
  special: Sparkles,
};

export const TypeKindCards = ({ content }: Props) => (
  <section id="kinds" aria-labelledby="heading-kinds" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="kinds"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecks className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <KindCardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const KindCardView = ({ card }: { card: TypeKindCard }) => {
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
            'inline-flex items-center justify-center w-12 h-12 rounded-2xl border',
            toneTokens[card.tone].chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={cx(
            'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            toneTokens[card.tone].chip,
          )}
        >
          {card.category}
        </span>
      </header>

      <code
        className={cx(
          'font-mono text-md font-bold tracking-tight break-all',
          toneTokens[card.tone].text,
        )}
      >
        {card.value}
      </code>

      <h3 className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
        {card.title}
      </h3>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>

      <ul className="flex flex-col gap-1.5 mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
        {card.checks.map((check) => (
          <li key={check} className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className={cx(
                'inline-flex items-center justify-center w-4 h-4 rounded-full border shrink-0 mt-0.5',
                toneTokens[card.tone].chip,
              )}
            >
              <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
            </span>
            <p className="text-[11px] sm:text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
              {check}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
};

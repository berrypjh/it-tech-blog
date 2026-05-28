import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type { ReactElementTypeMeaningContent, TypeKindCard } from '../content';
import { CheckCircleIcon, ListChecksIcon, SparklesIcon, TagIcon, UserIcon } from '../icons';

type Props = { content: ReactElementTypeMeaningContent['kinds'] };

const iconMap = {
  tag: TagIcon,
  user: UserIcon,
  sparkles: SparklesIcon,
} as const;

export const TypeKindCards = ({ content }: Props) => (
  <section id="kinds" aria-labelledby="heading-kinds" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="kinds"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecksIcon className="h-5 w-5" />}
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
  const t = toneTokens[card.tone];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-2xl border',
            t.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            t.chip,
          )}
        >
          {card.category}
        </span>
      </header>

      <code className={cn('font-mono text-md font-bold tracking-tight break-all', t.text)}>
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
              className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 shrink-0 mt-0.5"
            >
              <CheckCircleIcon className="h-3 w-3" />
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

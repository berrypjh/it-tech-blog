import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { InsightCard, TestCodeContent } from '../content';
import { iconByName, SparklesIcon } from '../icons';

const neutralChip =
  'bg-[var(--term-surface)] border-[var(--term-border)] text-[var(--term-accent)]';

type Props = { content: TestCodeContent['insights'] };

export const FourThingsTestsReveal = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-insights" className="space-y-md">
      <SectionHeader
        id="insights"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <InsightCardItem card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};

type ItemProps = { card: InsightCard };

const InsightCardItem = ({ card }: ItemProps) => {
  const Icon = iconByName[card.icon];

  return (
    <article
      className={cn(
        'group flex flex-col gap-md h-full w-full rounded-lg border p-md',
        'bg-[var(--term-bg)] border-[var(--term-border)]',
        'transition-all hover:-translate-y-0.5 hover:border-[var(--term-accent)] hover:shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-full border-2 font-bold text-sm tabular-nums',
            neutralChip,
          )}
        >
          {card.number}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-md border',
            neutralChip,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
      </header>

      <h3 className="text-md sm:text-lg font-bold tracking-tight break-keep whitespace-pre-line text-[var(--term-accent)]">
        {card.title}
      </h3>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep mt-auto">
        {card.description}
      </p>
    </article>
  );
};

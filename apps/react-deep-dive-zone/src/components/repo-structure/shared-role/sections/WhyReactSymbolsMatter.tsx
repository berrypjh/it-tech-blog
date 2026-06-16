import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { SharedContent, SymbolCard } from '../content';
import { HashIcon, iconByName, InfoIcon } from '../icons';

type Props = { content: SharedContent['symbols'] };

export const WhyReactSymbolsMatter = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-symbols" className="space-y-md">
      <SectionHeader
        id="symbols"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<HashIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <SymbolCardItem card={card} />
          </li>
        ))}
      </ul>

      <div
        className={cn(
          'flex items-start gap-sm rounded-2xl border px-md py-md',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-md shrink-0 border',
            'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]',
          )}
        >
          <InfoIcon className="h-4 w-4" />
        </span>
        <p className="text-sm sm:text-md leading-snug font-bold break-keep text-[var(--term-fg)]">
          {content.banner}
        </p>
      </div>
    </section>
  );
};

type ItemProps = { card: SymbolCard };

const SymbolCardItem = ({ card }: ItemProps) => {
  const Icon = iconByName[card.icon];

  return (
    <article
      className={cn(
        'flex w-full flex-col gap-sm rounded-xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-[var(--term-surface)]',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        'hover:border-[var(--term-accent)]',
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-10 h-10 rounded-md border',
            'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]',
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-col min-w-0">
          <h3 className="text-sm sm:text-md font-bold font-mono tracking-tight text-[var(--term-accent)] break-all">
            {card.title}
          </h3>
          <p className="text-[11px] text-[var(--term-muted)] font-mono break-keep">
            {card.subtitle}
          </p>
        </div>
      </header>

      <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep mt-auto">
        {card.description}
      </p>
    </article>
  );
};

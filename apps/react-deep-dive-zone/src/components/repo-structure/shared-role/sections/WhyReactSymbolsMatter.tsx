import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
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
          'border-sky-200/80 bg-sky-50/70 text-sky-900',
          'dark:border-sky-800/60 dark:bg-sky-950/30 dark:text-sky-100',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-md shrink-0',
            'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-950',
          )}
        >
          <InfoIcon className="h-4 w-4" />
        </span>
        <p className="text-sm sm:text-md leading-snug font-bold break-keep">{content.banner}</p>
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
        'border-blue-200/80 bg-blue-50/60',
        'dark:border-blue-800/60 dark:bg-blue-950/30',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        'hover:border-blue-400/70 dark:hover:border-blue-500/60',
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-10 h-10 rounded-md border',
            'border-blue-300 bg-blue-100/80 text-blue-700',
            'dark:border-blue-700/60 dark:bg-blue-950/40 dark:text-blue-200',
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-col min-w-0">
          <h3 className="text-sm sm:text-md font-bold font-mono tracking-tight text-blue-800 dark:text-blue-200 break-all">
            {card.title}
          </h3>
          <p className="text-[11px] text-blue-700/80 dark:text-blue-300/80 font-mono break-keep">
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

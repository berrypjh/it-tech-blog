import { cn } from '@it-tech-blog/utils';

import type { HydrationStartContent } from '../content';
import { AtomIcon, GlobeIcon, NetworkIcon } from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: HydrationStartContent['takeaways'] };

const toneClass = {
  blue: {
    card: 'border-blue-200/80 bg-blue-50/40 dark:border-blue-800/60 dark:bg-blue-950/20',
    number: 'bg-blue-600 dark:bg-blue-500',
    iconChip:
      'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
  },
  teal: {
    card: 'border-teal-200/80 bg-teal-50/40 dark:border-teal-800/60 dark:bg-teal-950/20',
    number: 'bg-teal-600 dark:bg-teal-500',
    iconChip:
      'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
  },
  violet: {
    card: 'border-violet-200/80 bg-violet-50/40 dark:border-violet-800/60 dark:bg-violet-950/20',
    number: 'bg-violet-600 dark:bg-violet-500',
    iconChip:
      'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
  },
} as const;

const cardIcons = [GlobeIcon, AtomIcon, NetworkIcon];

export const TakeawaysSection = ({ content }: Props) => (
  <section aria-labelledby="takeaways-heading" className="flex flex-col gap-md">
    <SectionHeader id="takeaways-heading" number={content.number} title={content.title} />

    <ul className="grid grid-cols-1 gap-md md:grid-cols-3">
      {content.cards.map((card, i) => {
        const t = toneClass[card.tone];
        const Icon = cardIcons[i] ?? GlobeIcon;
        return (
          <li key={card.number}>
            <article
              className={cn(
                'flex flex-col gap-3 h-full rounded-3xl border-2 p-md sm:p-lg',
                t.card,
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-transform motion-safe:hover:-translate-y-0.5',
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 items-center justify-center rounded-full',
                    'font-mono text-sm font-bold tabular-nums text-white',
                    t.number,
                  )}
                >
                  {card.number}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-8 w-8 items-center justify-center rounded-xl border',
                    t.iconChip,
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
              </div>
              <h3 className="text-md font-bold text-[var(--term-fg)] break-keep leading-snug">
                {card.title}
              </h3>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.body}
              </p>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);

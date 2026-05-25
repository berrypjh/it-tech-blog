import { cn } from '@it-tech-blog/utils';

import type { React19ChangeMapContent } from '../content';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: React19ChangeMapContent['keyTakeaways'] };

const accents = [
  {
    border: 'border-blue-300/80 dark:border-blue-700/70',
    text: 'text-blue-700 dark:text-blue-200',
    iconBg:
      'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
    numBg: 'bg-blue-600 dark:bg-blue-500',
  },
  {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    text: 'text-violet-700 dark:text-violet-200',
    iconBg:
      'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
    numBg: 'bg-violet-600 dark:bg-violet-500',
  },
  {
    border: 'border-emerald-300/80 dark:border-emerald-700/70',
    text: 'text-emerald-700 dark:text-emerald-200',
    iconBg:
      'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
    numBg: 'bg-emerald-600 dark:bg-emerald-500',
  },
];

export const KeyTakeawaysSection = ({ content }: Props) => (
  <section aria-labelledby="key-takeaways-heading" className="flex flex-col">
    <SectionHeader
      id="key-takeaways-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
    />

    <ul className="grid grid-cols-1 gap-md sm:grid-cols-3">
      {content.cards.map((card, i) => {
        const accent = accents[i] ?? accents[0];
        const Icon = iconRegistry[card.iconKey];
        return (
          <li key={card.number}>
            <article
              className={cn(
                'flex h-full flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
                accent.border,
                'bg-white dark:bg-[var(--term-bg)]',
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-all motion-safe:hover:-translate-y-0.5',
                'motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                    accent.iconBg,
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 w-7 items-center justify-center rounded-lg font-mono text-xxsm font-bold tabular-nums text-white',
                    accent.numBg,
                  )}
                >
                  {card.number}
                </span>
              </div>

              <h3
                className={cn('text-md sm:text-lg font-bold break-keep leading-snug', accent.text)}
              >
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

import { cn } from '@it-tech-blog/utils';

import type { MetadataResourceContent } from '../content';
import { TriangleAlertIcon } from '../icons';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: MetadataResourceContent['priorProblems'] };

export const PreviousHeadManagementProblems = ({ content }: Props) => (
  <section aria-labelledby="prior-problems-heading" className="flex flex-col">
    <SectionHeader
      id="prior-problems-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <ul className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-4 items-stretch">
      {content.cards.map((card) => {
        const Icon = iconRegistry[card.iconKey];
        return (
          <li key={card.title} className="h-full">
            <article
              className={cn(
                'group flex h-full flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
                'border-rose-200/80 bg-rose-50/40 dark:border-rose-800/70 dark:bg-rose-950/30',
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-all motion-safe:hover:-translate-y-0.5',
                'motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-rose-200 bg-rose-100 text-rose-700 dark:border-rose-800/60 dark:bg-rose-950/60 dark:text-rose-200"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-rose-200 bg-white text-rose-700 dark:border-rose-800/60 dark:bg-[var(--term-bg)] dark:text-rose-200"
                >
                  <TriangleAlertIcon className="h-3.5 w-3.5" />
                </span>
              </div>

              <h3 className="text-sm sm:text-md font-bold text-rose-700 dark:text-rose-200 break-keep leading-snug">
                {card.title}
              </h3>

              <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                {card.body}
              </p>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);

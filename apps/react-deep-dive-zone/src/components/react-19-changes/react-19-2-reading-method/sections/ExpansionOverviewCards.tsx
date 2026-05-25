import { cn } from '@it-tech-blog/utils';

import type { After192Content } from '../content';
import { tone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: After192Content['overview'] };

export const ExpansionOverviewCards = ({ content }: Props) => (
  <section aria-labelledby="overview-heading" className="flex flex-col">
    <SectionHeader
      id="overview-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <ul className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-4 items-stretch">
      {content.cards.map((card) => {
        const t = tone[card.tone];
        const Icon = iconRegistry[card.iconKey];
        return (
          <li key={card.title} className="h-full">
            <article
              className={cn(
                'group relative flex h-full flex-col gap-sm overflow-hidden rounded-2xl border-2 p-md sm:p-lg',
                'bg-white dark:bg-[var(--term-bg)]',
                t.border,
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-all motion-safe:hover:-translate-y-0.5',
                'motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
              )}
            >
              <span
                aria-hidden="true"
                className={cn('absolute inset-x-0 top-0 h-1', t.solidBg, 'opacity-80')}
              />

              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-12 w-12 items-center justify-center rounded-xl border',
                  t.iconChip,
                )}
              >
                <Icon className="h-6 w-6" />
              </span>

              <h3 className={cn('text-sm sm:text-md font-bold break-keep', t.text)}>
                {card.title}
              </h3>

              <div className="flex flex-col gap-0.5">
                {card.descriptionLines.map((line) => (
                  <span
                    key={line}
                    className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep"
                  >
                    {line}
                  </span>
                ))}
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);

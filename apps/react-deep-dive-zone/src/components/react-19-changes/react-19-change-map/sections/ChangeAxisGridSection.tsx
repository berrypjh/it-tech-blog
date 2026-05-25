import { cn } from '@it-tech-blog/utils';

import type { React19ChangeMapContent } from '../content';
import { layerTone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: React19ChangeMapContent['changeAxes'] };

export const ChangeAxisGridSection = ({ content }: Props) => (
  <section aria-labelledby="change-axes-heading" className="flex flex-col">
    <SectionHeader
      id="change-axes-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <ul className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3">
      {content.cards.map((card) => {
        const tone = layerTone[card.layer];
        const Icon = iconRegistry[card.iconKey];
        return (
          <li key={card.title}>
            <article
              className={cn(
                'group relative flex h-full flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg overflow-hidden',
                'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-all motion-safe:hover:-translate-y-0.5',
                'motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
                'hover:border-blue-300 dark:hover:border-blue-700/70',
              )}
            >
              {/* top accent line */}
              <span
                aria-hidden="true"
                className={cn(
                  'absolute inset-x-0 top-0 h-1',
                  tone.solidBg,
                  'opacity-80 group-hover:opacity-100 transition-opacity',
                )}
              />

              {/* head: icon + number */}
              <div className="flex items-start justify-between gap-2 pt-1">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                    tone.iconChip,
                    'shadow-[0_1px_0_var(--term-border)]',
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 min-w-7 px-1.5 items-center justify-center rounded-md',
                    'border font-mono text-xxsm font-bold tabular-nums',
                    tone.chip,
                  )}
                >
                  {card.number}
                </span>
              </div>

              {/* title */}
              <h3
                className={cn('text-md sm:text-lg font-bold break-keep tracking-tight', tone.text)}
              >
                {card.title}
              </h3>

              {/* features */}
              <p className="text-xxsm font-mono font-bold text-[var(--term-muted)] break-keep">
                {card.features}
              </p>

              {/* body */}
              <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                {card.body}
              </p>

              {/* tags */}
              <ul className="flex flex-wrap gap-1.5 mt-auto pt-sm">
                {card.tags.map((tag) => (
                  <li
                    key={tag}
                    className={cn(
                      'inline-flex items-center gap-1 rounded-full border px-2 py-0.5',
                      tone.chip,
                      'font-mono text-[10px] font-bold',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn('block h-1 w-1 rounded-full', tone.dot)}
                    />
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);

import { cn } from '@it-tech-blog/utils';

import type { MetadataResourceContent } from '../content';
import { SparklesIcon } from '../icons';
import { domainTone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: MetadataResourceContent['resources'] };

export const ResourceComponentsGrid = ({ content }: Props) => (
  <section aria-labelledby="resources-heading" className="flex flex-col">
    <SectionHeader
      id="resources-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <ul className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-5 items-stretch">
      {content.cards.map((card) => {
        const tone = domainTone[card.domain];
        const Icon = iconRegistry[card.iconKey];
        return (
          <li key={card.tagName} className="h-full">
            <article
              className={cn(
                'group relative flex h-full flex-col gap-sm overflow-hidden rounded-2xl border-2 p-md',
                'bg-white dark:bg-[var(--term-bg)]',
                tone.border,
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-all motion-safe:hover:-translate-y-0.5',
                'motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
              )}
            >
              {/* top accent line */}
              <span
                aria-hidden="true"
                className={cn('absolute inset-x-0 top-0 h-1', tone.solidBg, 'opacity-80')}
              />

              <div className="flex items-start justify-between gap-2 pt-1">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-11 w-11 items-center justify-center rounded-xl border',
                    tone.iconChip,
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
              </div>

              <h3 className={cn('text-sm sm:text-md font-mono font-bold break-all', tone.text)}>
                {card.tagName}
              </h3>

              <p
                className={cn(
                  'inline-flex w-fit items-center rounded-md border px-1.5 py-0.5',
                  tone.chip,
                  'font-mono text-[10px] font-bold uppercase tracking-wider',
                )}
              >
                {card.resourceType}
              </p>

              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.body}
              </p>
            </article>
          </li>
        );
      })}
    </ul>

    {/* Info bar */}
    <div
      className={cn(
        'mt-md flex items-start gap-2 rounded-xl border-2 px-3 py-3',
        'border-blue-300/80 bg-blue-50/40 dark:border-blue-700/70 dark:bg-blue-950/30',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
      >
        <SparklesIcon className="h-3.5 w-3.5" />
      </span>
      <p className="text-xsm leading-relaxed text-blue-700 dark:text-blue-200 break-keep">
        {content.info}
      </p>
    </div>
  </section>
);

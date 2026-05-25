import { cn } from '@it-tech-blog/utils';

import type { ServerComponentsContractContent } from '../content';
import { boundaryTone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: ServerComponentsContractContent['definition'] };

export const ServerComponentDefinitionCards = ({ content }: Props) => (
  <section aria-labelledby="definition-heading" className="flex flex-col">
    <SectionHeader
      id="definition-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <ul className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3 items-stretch">
      {content.cards.map((card, i) => {
        const tone = boundaryTone[card.boundary];
        const Icon = iconRegistry[card.iconKey];
        return (
          <li key={card.title} className="h-full">
            <article
              className={cn(
                'group relative flex h-full flex-col gap-sm overflow-hidden rounded-2xl border-2 p-md sm:p-lg',
                'bg-white dark:bg-[var(--term-bg)]',
                tone.border,
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-all motion-safe:hover:-translate-y-0.5',
                'motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
              )}
            >
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
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 items-center px-1.5 rounded-md border font-mono text-[10px] font-bold tabular-nums',
                    tone.chip,
                  )}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className={cn('text-sm sm:text-md font-bold break-keep leading-snug', tone.text)}>
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

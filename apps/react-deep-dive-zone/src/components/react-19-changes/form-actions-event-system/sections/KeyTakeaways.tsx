import { cn } from '@it-tech-blog/utils';

import type { FormActionsEventSystemContent } from '../content';
import { pipelineTone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: FormActionsEventSystemContent['takeaways'] };

export const KeyTakeaways = ({ content }: Props) => (
  <section aria-labelledby="takeaways-heading" className="flex flex-col">
    <SectionHeader
      id="takeaways-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
    />

    <ul className="grid grid-cols-1 gap-md sm:grid-cols-3">
      {content.cards.map((card) => {
        const tone = pipelineTone[card.pipeline];
        const Icon = iconRegistry[card.iconKey];
        return (
          <li key={card.number} className="h-full">
            <article
              className={cn(
                'flex h-full flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
                tone.border,
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
                    tone.iconChip,
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 items-center justify-center rounded-xl font-mono text-xsm font-bold tabular-nums text-white',
                    tone.solidBg,
                  )}
                >
                  {card.number}
                </span>
              </div>

              <h3 className={cn('text-md sm:text-lg font-bold break-keep leading-snug', tone.text)}>
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

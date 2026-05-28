import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { StartWithQuestionContent } from '../content';
import { ListChecksIcon, readingTypeIcon } from '../icons';

type Props = { content: StartWithQuestionContent['readingTypes'] };

export const FourQuestionTypesSection = ({ content }: Props) => {
  return (
    <section
      id="section-reading-types"
      aria-labelledby="heading-reading-types"
      className="space-y-lg scroll-mt-24"
    >
      <SectionHeader
        id="reading-types"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<ListChecksIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-md">
        {content.cards.map((card) => {
          const Icon = readingTypeIcon[card.iconKey];
          const t = toneTokens[card.tone];
          return (
            <li key={card.id}>
              <article
                className={cn(
                  'group flex h-full flex-col gap-sm rounded-2xl border-2 p-md',
                  'bg-white dark:bg-[var(--term-bg)]',
                  'shadow-[0_2px_0_var(--term-border)]',
                  t.border,
                  'transition-all motion-safe:hover:-translate-y-0.5',
                  t.borderHover,
                  'motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-9 w-9 items-center justify-center rounded-lg border',
                      t.chip,
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={cn(
                      'inline-flex h-7 min-w-7 px-1.5 items-center justify-center rounded-md border',
                      'bg-white dark:bg-[var(--term-bg)]',
                      t.border,
                      t.text,
                      'text-xsm font-bold tabular-nums',
                    )}
                  >
                    {card.numeral}
                  </span>
                </div>

                <h3
                  className={cn('text-md sm:text-lg font-bold tracking-tight break-keep', t.text)}
                >
                  {card.title}
                </h3>

                <p className="text-xsm font-bold leading-snug text-[var(--term-fg)] break-keep">
                  {card.question.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>

                <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
                  {card.description}
                </p>

                <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
                      {content.entryPrefix}
                    </span>
                    <code
                      className={cn(
                        'inline-flex items-center rounded-md border px-2 py-0.5',
                        'bg-white dark:bg-[var(--term-bg)]',
                        t.border,
                        t.text,
                        'font-mono text-[11px] font-bold',
                      )}
                    >
                      {card.entry}
                    </code>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { FindPublicApiEntryContent } from '../content';
import { CornerDownRightIcon, NetworkIcon, PlugIcon, SplitIcon } from '../icons';

type Props = { content: FindPublicApiEntryContent['apiPatterns'] };

export const SamePatternAcrossApisSection = ({ content }: Props) => {
  return (
    <section
      id="section-api-patterns"
      aria-labelledby="heading-api-patterns"
      className="space-y-lg"
    >
      <SectionHeader
        id="api-patterns"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<NetworkIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-md">
        {content.cards.map((card) => {
          const t = toneTokens[card.tone];
          return (
            <li key={card.id}>
              <article
                className={cn(
                  'group flex h-full flex-col gap-md rounded-2xl border-2 p-md',
                  'bg-white dark:bg-[var(--term-bg)]',
                  t.border,
                  'shadow-[0_2px_0_var(--term-border)]',
                  'transition-all motion-safe:hover:-translate-y-0.5',
                  t.borderHover,
                  'motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
                )}
              >
                {/* API header */}
                <header className="flex items-center justify-between gap-2">
                  <code
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-md border-2 px-2.5 py-1',
                      t.border,
                      t.chip,
                      'font-mono text-sm font-bold',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn('block h-1.5 w-1.5 rounded-full', t.dot)}
                    />
                    {card.api}
                  </code>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-7 w-7 items-center justify-center rounded-md border',
                      t.chip,
                    )}
                  >
                    <PlugIcon className="h-3.5 w-3.5" />
                  </span>
                </header>

                {/* public API row */}
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                    {content.publicApiLabel}
                  </span>
                  <code
                    className={cn(
                      'inline-flex items-center gap-1.5 self-start rounded-md border px-2 py-0.5',
                      'border-[var(--term-border)] bg-[var(--term-surface)]',
                      'font-mono text-[11px] text-[var(--term-fg)]',
                    )}
                  >
                    {card.publicApi}
                  </code>
                </div>

                {/* dispatcher method — emphasized */}
                <div className="flex flex-col gap-1">
                  <span className={cn('text-[10px] font-mono uppercase tracking-wider', t.text)}>
                    {content.dispatcherLabel}
                  </span>
                  <code
                    className={cn(
                      'inline-flex items-center gap-1.5 self-start rounded-md border-2 px-2.5 py-1',
                      t.border,
                      'bg-white dark:bg-[var(--term-bg)]',
                      t.text,
                      'font-mono text-xsm font-bold',
                      'shadow-[0_2px_0_var(--term-border)]',
                      'transition-all motion-safe:group-hover:-translate-y-0.5',
                    )}
                  >
                    <SplitIcon className="h-3 w-3" aria-hidden="true" />
                    {card.dispatcher}
                  </code>
                </div>

                {/* internal hint */}
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                    {content.hintLabel}
                  </span>
                  <code
                    className={cn(
                      'inline-flex items-center gap-1.5 self-start rounded-md border px-2 py-0.5',
                      'border-violet-200 bg-violet-50 text-violet-800',
                      'dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
                      'font-mono text-[11px]',
                    )}
                  >
                    <CornerDownRightIcon className="h-3 w-3" aria-hidden="true" />
                    {card.hint}
                  </code>
                </div>

                <p className="mt-auto pt-sm text-xsm leading-relaxed text-[var(--term-muted)] break-keep border-t border-dashed border-[var(--term-border)]">
                  {card.body}
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

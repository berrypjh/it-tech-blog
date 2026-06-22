import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { RepoOverviewContent } from '../content';
import { houseToneAt } from '../houseTone';
import { FileTextIcon, StarIcon } from '../icons';

type Props = { content: RepoOverviewContent['rootFiles'] };

export const RootFilesSummary = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-root-files" className="space-y-md">
      <SectionHeader
        id="root-files"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FileTextIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {content.cards.map((card, idx) => {
          const tone = houseToneAt(idx);

          return (
            <li key={card.id}>
              <article
                className={cn(
                  'group flex flex-col gap-md h-full rounded-lg border p-md',
                  'border-[var(--term-border)] bg-[var(--term-bg)]',
                  'transition-all hover:-translate-y-0.5 hover:border-[var(--term-accent)]',
                  'hover:shadow-[0_2px_0_var(--term-border)]',
                )}
              >
                <header className="flex items-center justify-between gap-sm">
                  <div className="flex items-center gap-sm min-w-0">
                    <span
                      aria-hidden="true"
                      className="inline-flex w-9 h-9 items-center justify-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)]"
                    >
                      <FileTextIcon className={cn('h-4 w-4', tone.text)} aria-hidden="true" />
                    </span>
                    <span className={cn('text-sm font-bold font-mono tracking-tight', tone.text)}>
                      {card.name}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[10px] font-medium text-[var(--term-muted)]">
                    <span
                      aria-hidden="true"
                      className={cn('inline-block w-1 h-1 rounded-full', tone.marker)}
                    />
                    {card.badge}
                  </span>
                </header>

                <p className="text-xsm sm:text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
                  {card.shortDescription}
                </p>

                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep mt-auto">
                  {card.longDescription}
                </p>
              </article>
            </li>
          );
        })}
      </ul>

      <div
        className={cn(
          'mt-md flex items-start gap-sm rounded-lg border px-md py-md',
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-8 h-8 rounded shrink-0',
            'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-accent)]',
          )}
        >
          <StarIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-snug font-medium break-keep">{content.banner}</p>
      </div>
    </section>
  );
};

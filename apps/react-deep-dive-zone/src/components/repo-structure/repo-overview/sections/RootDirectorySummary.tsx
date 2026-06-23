import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { RepoOverviewContent } from '../content';
import { directoryIconByName, FolderIcon } from '../icons';

type Props = { content: RepoOverviewContent['directory']; sectionId?: string };

export const RootDirectorySummary = ({ content, sectionId }: Props) => {
  return (
    <section id={sectionId} aria-labelledby="heading-directory" className="space-y-md scroll-mt-24">
      <SectionHeader
        id="directory"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FolderIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-md">
        {content.cards.map((card) => {
          const Icon = directoryIconByName[card.icon] ?? FolderIcon;
          const tone = toneTokens[card.tone];

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
                      <Icon className={cn('h-4 w-4', tone.text)} aria-hidden="true" />
                    </span>
                    <span className={cn('text-md font-bold tracking-tight font-mono', tone.text)}>
                      {card.name}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[10px] font-medium text-[var(--term-muted)]">
                    <span
                      aria-hidden="true"
                      className={cn('inline-block w-1 h-1 rounded-full', tone.dot)}
                    />
                    {card.priority}
                  </span>
                </header>

                <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
                  {card.title}
                </h3>

                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {card.description}
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

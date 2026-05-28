import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { CorrectVersionDiffContent } from '../content';
import { BookOpenIcon, ListTreeIcon, MegaphoneIcon, NewspaperIcon, TagIcon } from '../icons';

type Props = { content: CorrectVersionDiffContent['sources'] };

const sourceIcon = {
  megaphone: MegaphoneIcon,
  newspaper: NewspaperIcon,
  listTree: ListTreeIcon,
  tag: TagIcon,
} as const;

export const SourcesSection = ({ content }: Props) => {
  return (
    <section id="section-sources" aria-labelledby="heading-sources" className="space-y-lg">
      <SectionHeader
        id="sources"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<BookOpenIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-md">
        {content.cards.map((card) => {
          const Icon = sourceIcon[card.iconKey];
          return (
            <li key={card.id}>
              <article
                className={cn(
                  'group flex h-full flex-col gap-md rounded-2xl border-2 p-md',
                  'bg-white dark:bg-[var(--term-bg)]',
                  'border-violet-200 dark:border-violet-800/60',
                  'shadow-[0_2px_0_var(--term-border)]',
                  'transition-all motion-safe:hover:-translate-y-0.5',
                  'motion-safe:hover:border-violet-400 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
                  'dark:motion-safe:hover:border-violet-500/80',
                )}
              >
                <header className="flex items-center justify-between gap-2">
                  <h3 className="text-md font-bold leading-snug text-violet-900 dark:text-violet-100 break-keep">
                    {card.name}
                  </h3>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-8 w-8 items-center justify-center rounded-md',
                      'border border-violet-300 bg-violet-100 text-violet-700',
                      'dark:border-violet-700/70 dark:bg-violet-900/60 dark:text-violet-200',
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                </header>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700/70 dark:text-violet-300/70">
                    {content.roleLabel}
                  </span>
                  <p className="text-xsm font-bold text-violet-800 dark:text-violet-100 break-keep">
                    {card.role}
                  </p>
                </div>

                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {card.body}
                </p>

                <div className="mt-auto pt-sm border-t border-dashed border-violet-300/70 dark:border-violet-700/60">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] block mb-1">
                    {content.useWhenLabel}
                  </span>
                  <p className="text-[11px] font-bold leading-snug text-violet-900 dark:text-violet-100 break-keep">
                    {card.useWhen}
                  </p>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

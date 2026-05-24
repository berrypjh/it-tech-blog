import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import type { PackageDesignContent } from '../content';
import { CheckCircleIcon, ListChecksIcon, SquareIcon } from '../icons';

type Props = { content: PackageDesignContent['checklist']; sectionId: string };

export const ChecklistSection = ({ content, sectionId }: Props) => {
  return (
    <section
      id={sectionId}
      aria-labelledby="heading-checklist"
      className="space-y-md scroll-mt-2xl"
    >
      <SectionHeader
        id="checklist"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<ListChecksIcon className="h-5 w-5" />}
      />

      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border p-md sm:p-lg',
          'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
          'border-[var(--term-border)]',
        )}
      >
        <h3 className="text-lg font-bold tracking-tight text-[var(--term-fg)] break-keep">
          {content.intro}
        </h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-sm">
          {content.items.map((item, index) => (
            <li
              key={item.id}
              className={cn(
                'group flex items-start gap-sm rounded-lg border px-md py-3 transition-colors',
                'bg-[var(--term-bg)] border-[var(--term-border)]',
                'hover:bg-[var(--term-surface)]/80',
                item.done && 'bg-emerald-50/40 dark:bg-emerald-950/15',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex items-center justify-center w-6 h-6 rounded-md shrink-0 mt-0.5',
                  item.done
                    ? 'border border-emerald-300/80 bg-emerald-100 text-emerald-700 dark:border-emerald-800/70 dark:bg-emerald-950/60 dark:text-emerald-300'
                    : 'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)]',
                )}
              >
                {item.done ? (
                  <CheckCircleIcon className="h-4 w-4" />
                ) : (
                  <SquareIcon className="h-4 w-4" />
                )}
              </span>
              <span className="flex flex-col gap-0.5 flex-1 min-w-0">
                <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-mono tabular-nums">
                  Q{String(index + 1).padStart(2, '0')}
                </span>
                <span
                  className={cn(
                    'text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep',
                    item.done && 'line-through decoration-emerald-400/60 decoration-2',
                  )}
                >
                  {item.text}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { HookLinkedListContent } from '../content';
import { ListChecksIcon } from '../icons';

type Props = { content: HookLinkedListContent['mission'] };

export const FollowCodeMission = ({ content }: Props) => (
  <section
    aria-labelledby="heading-mission"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="mission"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
      {content.items.map((item) => (
        <li key={item.number}>
          <article
            className={cn(
              'group h-full flex flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md',
              'border-[var(--term-border)] shadow-[0_1px_0_var(--term-border)] transition-all',
              'hover:border-sky-300/70 hover:bg-sky-50/30 dark:hover:border-sky-700/70 dark:hover:bg-sky-950/20',
              'motion-safe:hover:-translate-y-0.5',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 border-[var(--term-border)] bg-white dark:bg-slate-950/40"
              />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 tabular-nums">
                {item.number}
              </span>
            </header>

            <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep leading-snug">
              {item.title}
            </h3>
            <p className="text-[11px] sm:text-xsm text-[var(--term-muted)] break-keep leading-relaxed">
              {item.description}
            </p>
          </article>
        </li>
      ))}
    </ul>
  </section>
);

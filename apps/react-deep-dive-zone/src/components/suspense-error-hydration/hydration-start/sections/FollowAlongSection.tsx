import { cn } from '@it-tech-blog/utils';

import type { HydrationStartContent } from '../content';

import { SectionHeader } from './_SectionHeader';

type Props = { content: HydrationStartContent['followAlong'] };

export const FollowAlongSection = ({ content }: Props) => (
  <section aria-labelledby="follow-heading" className="flex flex-col gap-md">
    <SectionHeader id="follow-heading" number={content.number} title={content.title} />

    <ul className="grid grid-cols-1 gap-md sm:grid-cols-2 xl:grid-cols-4">
      {content.items.map((item, i) => (
        <li key={item.title}>
          <article
            className={cn(
              'flex flex-col gap-2 h-full rounded-2xl border-2 p-md',
              'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
              'shadow-[0_2px_0_var(--term-border)]',
              'transition-all motion-safe:hover:-translate-y-0.5 hover:border-blue-300/70 dark:hover:border-blue-700/60',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-blue-400 bg-white text-blue-600 dark:border-blue-600 dark:bg-slate-900 dark:text-blue-300"
              >
                <span className="block h-2.5 w-2.5 rounded-sm" />
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                step {String(i + 1).padStart(2, '0')}
              </span>
            </header>
            <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">{item.title}</h3>
            <p className="mt-auto text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {item.description}
            </p>
          </article>
        </li>
      ))}
    </ul>
  </section>
);

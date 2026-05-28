import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { SharedContent } from '../content';
import { ArrowRightIcon, CheckCircleIcon, SparklesIcon, XCircleIcon } from '../icons';

type Props = { content: SharedContent['why'] };

export const WhyShared = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-why" className="space-y-md">
      <SectionHeader
        id="why"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_minmax(0,1.05fr)] items-stretch gap-md">
        {/* Problem */}
        <article
          className={cn(
            'flex h-full flex-col gap-sm rounded-2xl border p-md sm:p-lg',
            'border-red-300/80 bg-red-50/60 dark:border-red-800/70 dark:bg-red-950/30',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-sm">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-9 h-9 rounded-md border',
                'border-red-300/80 bg-red-100 text-red-700',
                'dark:border-red-700/70 dark:bg-red-900/60 dark:text-red-200',
              )}
            >
              <XCircleIcon className="h-5 w-5" />
            </span>
            <h3 className="text-md font-bold tracking-tight text-red-800 dark:text-red-200">
              {content.problem.title}
            </h3>
          </header>
          <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.problem.body}
          </p>
        </article>

        {/* Arrow */}
        <div
          aria-hidden="true"
          className="flex items-center justify-center text-[var(--term-accent)]"
        >
          <span className="hidden lg:inline-flex">
            <ArrowRightIcon className="h-8 w-8" />
          </span>
          <span className="inline-flex lg:hidden text-3xl leading-none">↓</span>
        </div>

        {/* Solution */}
        <article
          className={cn(
            'flex h-full flex-col gap-sm rounded-2xl border p-md sm:p-lg',
            'border-emerald-300/80 bg-emerald-50/60 dark:border-emerald-800/70 dark:bg-emerald-950/30',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-sm">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-9 h-9 rounded-md border',
                'border-emerald-300/80 bg-emerald-100 text-emerald-700',
                'dark:border-emerald-700/70 dark:bg-emerald-900/60 dark:text-emerald-200',
              )}
            >
              <CheckCircleIcon className="h-5 w-5" />
            </span>
            <h3 className="text-md font-bold tracking-tight text-emerald-800 dark:text-emerald-200">
              {content.solution.title}
            </h3>
          </header>
          <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.solution.body}
          </p>
        </article>

        {/* Example */}
        <article
          className={cn(
            'flex h-full flex-col gap-sm rounded-2xl border p-md sm:p-lg',
            'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
            'border-[var(--term-border)]',
          )}
        >
          <h3 className="text-md font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.example.title}
          </h3>
          <ul className="flex flex-wrap gap-1.5 mt-auto">
            {content.example.tags.map((tag) => {
              const tone = toneTokens[tag.tone];
              return (
                <li key={tag.id}>
                  <span
                    className={cn(
                      'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-mono font-bold tracking-tight',
                      tone.chip,
                    )}
                  >
                    {tag.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
};

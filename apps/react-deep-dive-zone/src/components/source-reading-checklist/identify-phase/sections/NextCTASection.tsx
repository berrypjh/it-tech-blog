import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import type { PhaseDetectionContent } from '../content';
import { ArrowRightIcon, RouteIcon } from '../icons';

type Props = { content: PhaseDetectionContent['nextCta'] };

export const NextCTASection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-next" className="space-y-md">
      <Link
        href={content.href}
        className={cn(
          'group block rounded-2xl border-2 p-md sm:p-lg',
          'border-blue-200 bg-gradient-to-br from-blue-50/80 via-white to-violet-50/40',
          'dark:border-blue-800/60 dark:from-blue-950/40 dark:via-[var(--term-bg)] dark:to-violet-950/30',
          'shadow-[0_3px_0_var(--term-border)]',
          'transition-all motion-safe:hover:-translate-y-0.5',
          'motion-safe:hover:border-blue-400 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[auto_minmax(0,_1fr)_auto] gap-md lg:gap-lg items-center">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-14 w-14 items-center justify-center rounded-2xl border-2',
              'border-blue-300 bg-blue-100 text-blue-700',
              'dark:border-blue-700/70 dark:bg-blue-900/60 dark:text-blue-200',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <RouteIcon className="h-7 w-7" />
          </span>

          <div className="flex flex-col gap-1 min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-blue-700 dark:text-blue-300 font-bold inline-flex items-center gap-1">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500"
              />
              {content.eyebrow}
            </p>
            <h2
              id="heading-next"
              className="text-md sm:text-lg lg:text-xl font-bold tracking-tight text-[var(--term-fg)] break-keep"
            >
              {content.title}
            </h2>
            <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
              {content.description}
            </p>
          </div>

          <span
            className={cn(
              'inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
              'bg-blue-600 text-white hover:bg-blue-700',
              'dark:bg-blue-500 dark:hover:bg-blue-400 dark:text-slate-950',
              'text-xsm font-bold transition-all motion-safe:group-hover:translate-x-0.5',
              'self-stretch lg:self-auto',
            )}
          >
            {content.cta}
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </section>
  );
};

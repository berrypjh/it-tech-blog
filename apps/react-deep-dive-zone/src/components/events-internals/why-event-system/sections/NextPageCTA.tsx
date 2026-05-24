import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import type { WhyEventSystemContent } from '../content';
import { ArrowRightIcon, RouteIcon } from '../icons';

type Props = { content: WhyEventSystemContent['cta'] };

export const NextPageCTA = ({ content }: Props) => (
  <section
    aria-label="next-page"
    className={cn(
      'relative overflow-hidden rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
      'border-blue-200/80 bg-gradient-to-br from-blue-50/80 via-white to-violet-50/40',
      'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-md lg:gap-lg items-center">
      {/* Left: route illustration */}
      <div className="flex items-center gap-3 lg:flex-col lg:items-start">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl',
            'bg-blue-600 text-white shadow-[0_4px_0_rgba(29,78,216,0.3)] dark:bg-blue-500',
          )}
        >
          <RouteIcon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.2} />
        </span>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
            {content.eyebrow}
          </span>
          <span className="text-[11px] font-mono text-[var(--term-muted)]">01 → 02</span>
        </div>
      </div>

      {/* Center: question + next title */}
      <div className="flex flex-col gap-2 min-w-0">
        <p className="text-xsm sm:text-sm text-[var(--term-muted)] break-keep">
          {content.question}
        </p>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
            {content.nextLabel}
          </span>
          <h2 className="text-md sm:text-lg font-bold leading-tight text-[var(--term-fg)] break-keep">
            {content.nextTitle}
          </h2>
        </div>
      </div>

      {/* Right: button */}
      <Link
        href={content.href}
        className={cn(
          'group inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5',
          'w-full lg:w-auto lg:min-w-[200px]',
          'bg-blue-600 text-white font-bold text-sm sm:text-md whitespace-nowrap',
          'shadow-[0_4px_0_rgba(29,78,216,0.35)] hover:shadow-[0_6px_0_rgba(29,78,216,0.35)]',
          'transition-all motion-safe:hover:-translate-y-0.5',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
          'dark:bg-blue-500 dark:shadow-[0_4px_0_rgba(37,99,235,0.35)] dark:hover:shadow-[0_6px_0_rgba(37,99,235,0.35)]',
        )}
      >
        <span className="break-keep">{content.button}</span>
        <ArrowRightIcon
          aria-hidden="true"
          className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
        />
      </Link>
    </div>
  </section>
);

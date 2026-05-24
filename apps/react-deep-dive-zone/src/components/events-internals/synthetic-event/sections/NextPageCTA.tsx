import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import type { SyntheticEventContent } from '../content';
import { ArrowRightIcon } from '../icons';

type Props = { content: SyntheticEventContent['cta'] };

export const NextPageCTA = ({ content }: Props) => (
  <Link
    href={content.href}
    aria-label={content.text}
    className={cn(
      'group relative block overflow-hidden rounded-3xl',
      'bg-blue-700 text-white',
      'shadow-[0_6px_0_rgba(29,78,216,0.45)] hover:shadow-[0_8px_0_rgba(29,78,216,0.45)]',
      'transition-all motion-safe:hover:-translate-y-0.5',
      'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
      'dark:bg-blue-600 dark:shadow-[0_6px_0_rgba(37,99,235,0.5)] dark:hover:shadow-[0_8px_0_rgba(37,99,235,0.5)]',
    )}
  >
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/15 to-transparent"
    />

    <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-md sm:px-lg py-md sm:py-lg text-center">
      <span className="text-md sm:text-lg lg:text-xl font-bold tracking-tight break-keep">
        {content.text}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full',
          'bg-white text-blue-700 shadow-[0_2px_0_rgba(255,255,255,0.4)]',
          'transition-transform group-hover:translate-x-1 motion-reduce:transform-none',
        )}
      >
        <ArrowRightIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} />
      </span>
    </div>
  </Link>
);

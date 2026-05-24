import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import type { ThreePriorityAxesContent } from '../content';
import { ArrowRightIcon, RouteIcon } from '../icons';

type Props = { content: ThreePriorityAxesContent['cta'] };

export const PriorityNextCTA = ({ content }: Props) => (
  <section aria-label="next-page">
    <Link
      href={content.href}
      className={cn(
        'group relative block w-full overflow-hidden rounded-2xl px-md sm:px-lg py-md sm:py-lg',
        'bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700',
        'text-white shadow-[0_4px_0_rgba(29,78,216,0.45)] transition-all',
        'motion-safe:hover:-translate-y-0.5 hover:shadow-[0_6px_0_rgba(29,78,216,0.45)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative grid grid-cols-[auto_1fr_auto] gap-3 sm:gap-md items-center">
        <span
          aria-hidden="true"
          className="inline-flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white"
        >
          <RouteIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
        </span>

        <div className="flex flex-col min-w-0">
          <span className="text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider text-blue-100/80">
            {content.eyebrow}
          </span>
          <span className="text-md sm:text-lg font-bold leading-tight break-keep">
            {content.label}
          </span>
          <span className="text-[11px] sm:text-xsm leading-snug text-blue-100/80 break-keep">
            {content.nextTitle}
          </span>
        </div>

        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full',
            'bg-white text-blue-700 shadow-[0_2px_0_rgba(0,0,0,0.18)]',
            'transition-transform group-hover:translate-x-1 motion-reduce:transform-none',
          )}
        >
          <ArrowRightIcon className="h-5 w-5" strokeWidth={2.4} />
        </span>
      </div>
    </Link>
  </section>
);

import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import type { LaneBitmaskContent } from '../content';
import { ArrowRightIcon, RouteIcon } from '../icons';

type Props = { content: LaneBitmaskContent['cta'] };

export const LaneNextCTA = ({ content }: Props) => (
  <section aria-label="next-page">
    <Link
      href={content.href}
      className={cn(
        'group relative block w-full overflow-hidden rounded-3xl px-md sm:px-lg lg:px-xl py-md sm:py-lg',
        'bg-gradient-to-br from-blue-700 via-blue-800 to-violet-900',
        'text-white shadow-[0_4px_0_rgba(29,78,216,0.45)] transition-all',
        'motion-safe:hover:-translate-y-0.5 hover:shadow-[0_6px_0_rgba(29,78,216,0.45)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="relative grid grid-cols-[auto_1fr_auto] gap-3 sm:gap-md lg:gap-lg items-center">
        {/* LEFT: circular arrow icon */}
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full',
            'bg-white/15 text-white border border-white/30',
          )}
        >
          <RouteIcon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.2} />
        </span>

        {/* CENTER */}
        <div className="flex flex-col gap-1 min-w-0">
          <p className="text-md sm:text-lg lg:text-xl font-bold leading-snug break-keep">
            {content.text}
          </p>
          <p className="font-mono text-[10px] sm:text-xsm uppercase tracking-wider text-blue-100/80">
            {content.hint}
          </p>
        </div>

        {/* RIGHT: button-styled element */}
        <span
          className={cn(
            'inline-flex items-center justify-center gap-2 rounded-2xl px-4 sm:px-6 py-3',
            'bg-white text-blue-900 font-bold text-xsm sm:text-sm shadow-[0_3px_0_rgba(0,0,0,0.18)]',
            'transition-transform motion-safe:group-hover:-translate-y-0.5 motion-reduce:transform-none',
            'whitespace-nowrap',
          )}
        >
          <span className="hidden sm:inline break-keep">{content.button}</span>
          <span className="sm:hidden">Next</span>
          <ArrowRightIcon
            aria-hidden="true"
            className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1 motion-reduce:transform-none"
          />
        </span>
      </div>
    </Link>
  </section>
);

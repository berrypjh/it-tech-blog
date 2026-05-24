import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import type { RootSchedulerContent } from '../content';
import { ArrowRightIcon, RouteIcon } from '../icons';

type Props = { content: RootSchedulerContent['cta'] };

export const RootSchedulerNextCTA = ({ content }: Props) => (
  <section aria-label="next-page">
    <Link
      href={content.href}
      className={cn(
        'group relative block w-full overflow-hidden rounded-3xl px-md sm:px-lg lg:px-xl py-md sm:py-lg',
        'bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900',
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
          backgroundSize: '22px 22px',
        }}
      />

      <div className="relative grid grid-cols-[auto_1fr_auto] gap-3 sm:gap-md lg:gap-lg items-center">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl',
            'bg-white/15 text-white border border-white/30',
          )}
        >
          <RouteIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
        </span>

        <div className="flex flex-col gap-1 min-w-0">
          <span className="font-mono text-[10px] sm:text-xsm uppercase tracking-wider text-blue-100/80">
            {content.eyebrow}
          </span>
          <p className="text-md sm:text-lg lg:text-xl font-bold leading-snug break-keep">
            {content.label}
          </p>
          <p className="text-[11px] sm:text-xsm leading-snug text-blue-100/80 break-keep">
            {content.nextTitle}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-wider text-blue-100/70">
            {content.hint}
          </p>
        </div>

        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full',
            'bg-white text-blue-800 shadow-[0_3px_0_rgba(0,0,0,0.18)]',
            'transition-transform motion-safe:group-hover:translate-x-1 motion-reduce:transform-none',
          )}
        >
          <ArrowRightIcon className="h-5 w-5" strokeWidth={2.4} />
        </span>
      </div>
    </Link>
  </section>
);

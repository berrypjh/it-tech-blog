import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import type { HydrationStartContent } from '../content';
import { ArrowRightIcon, RocketIcon } from '../icons';

type Props = { content: HydrationStartContent['cta'] };

export const NextCTA = ({ content }: Props) => (
  <section
    aria-labelledby="cta-heading"
    className={cn(
      'relative overflow-hidden rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
      'border-blue-700/60 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900',
      'shadow-[0_4px_0_rgba(0,0,0,0.2)]',
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

    <div className="relative grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[auto_minmax(0,1fr)_auto] items-center">
      {/* rocket */}
      <div className="flex justify-center lg:justify-start">
        <span
          aria-hidden="true"
          className={cn(
            'relative inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl',
            'border-2 border-blue-300/60 bg-white/10 backdrop-blur-sm shadow-[0_4px_12px_rgba(59,130,246,0.3)]',
          )}
        >
          <RocketIcon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-100" />
        </span>
      </div>

      {/* text */}
      <div className="flex flex-col gap-2 min-w-0">
        <h2
          id="cta-heading"
          className="text-lg sm:text-xl lg:text-xxl font-bold leading-snug text-white break-keep"
        >
          {content.title}
        </h2>
        <p className="text-xsm sm:text-sm leading-relaxed text-blue-100/80 break-keep">
          {content.description}
        </p>
      </div>

      {/* button */}
      <Link
        href={content.href}
        className={cn(
          'group inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3',
          'bg-white text-blue-900 font-bold text-sm whitespace-nowrap',
          'shadow-[0_4px_0_rgba(0,0,0,0.25)] hover:shadow-[0_6px_0_rgba(0,0,0,0.25)]',
          'transition-all motion-safe:hover:-translate-y-0.5',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950',
        )}
      >
        <span>{content.button}</span>
        <ArrowRightIcon
          aria-hidden="true"
          className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
        />
      </Link>
    </div>
  </section>
);

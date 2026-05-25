import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import type { ErrorBoundaryRecoverContent } from '../content';
import { ArrowRightIcon } from '../icons';

type Props = { content: ErrorBoundaryRecoverContent['cta'] };

export const NextCTA = ({ content }: Props) => (
  <Link
    href={content.href}
    className={cn(
      'group relative block overflow-hidden rounded-2xl border-2 p-md sm:p-lg',
      'border-blue-700/60 bg-gradient-to-r from-blue-800 via-blue-700 to-indigo-800',
      'text-white shadow-[0_4px_0_rgba(0,0,0,0.2)]',
      'transition-all motion-safe:hover:-translate-y-0.5 hover:shadow-[0_6px_0_rgba(0,0,0,0.2)]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950',
    )}
  >
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-20 pointer-events-none"
      style={{
        backgroundImage:
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)',
        backgroundSize: '20px 20px',
      }}
    />
    <div className="relative flex items-center justify-between gap-md">
      <span className="text-md sm:text-lg font-bold leading-snug break-keep">{content.text}</span>
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full',
          'bg-white text-blue-800 shadow-[0_2px_0_rgba(0,0,0,0.15)]',
          'transition-transform group-hover:translate-x-1 motion-reduce:transform-none',
        )}
      >
        <ArrowRightIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} />
      </span>
    </div>
  </Link>
);

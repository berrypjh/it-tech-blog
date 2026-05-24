import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import type { HooksRecapContent } from '../content';
import { ArrowRightIcon, PartyPopperIcon, TrophyIcon } from '../icons';

type Props = { content: HooksRecapContent['finalCta'] };

export const FinalCTA = ({ content }: Props) => (
  <section
    aria-labelledby="heading-final-cta"
    className={cn(
      'relative overflow-hidden rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
      'border-blue-700 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900',
      'shadow-[0_4px_0_rgba(15,23,42,0.4)]',
    )}
  >
    {/* Decorative glow */}
    <span
      aria-hidden="true"
      className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl"
    />
    <span
      aria-hidden="true"
      className="absolute -left-12 -bottom-12 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl"
    />

    <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-lg items-center">
      {/* Left: label + title + description */}
      <div className="flex flex-col gap-md text-white">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-100">
          <PartyPopperIcon aria-hidden="true" className="h-3 w-3" />
          {content.label}
        </span>
        <h2
          id="heading-final-cta"
          className={cn(
            'text-xl sm:text-2xl lg:text-3xl font-bold leading-tight break-keep',
            'flex items-center gap-2 flex-wrap',
          )}
        >
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-amber-400 text-amber-900 shadow-[0_2px_0_rgba(180,83,9,0.5)]"
          >
            <TrophyIcon className="h-5 w-5" />
          </span>
          {content.title}
        </h2>
        <p className="text-sm sm:text-md leading-relaxed text-blue-100 max-w-[55ch] break-keep">
          {content.description}
        </p>
      </div>

      {/* Right: buttons */}
      <ul className="flex flex-col gap-2">
        {content.buttons.map((btn) => (
          <li key={btn.label}>
            <Link
              href={btn.href}
              className={cn(
                'group inline-flex w-full items-center justify-between gap-2 rounded-xl px-4 py-3',
                'text-xsm sm:text-sm font-bold transition-all',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900',
                btn.variant === 'primary'
                  ? 'bg-white text-blue-900 shadow-[0_2px_0_rgba(15,23,42,0.6)] hover:bg-cyan-50 motion-safe:hover:-translate-y-0.5'
                  : 'border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50',
              )}
            >
              <span className="break-keep">{btn.label}</span>
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

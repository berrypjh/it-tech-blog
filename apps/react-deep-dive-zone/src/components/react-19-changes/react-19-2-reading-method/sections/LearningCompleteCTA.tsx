import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import type { After192Content } from '../content';
import {
  ArrowRightIcon,
  CheckIcon,
  ExternalLinkIcon,
  PartyPopperIcon,
  RotateCcwIcon,
} from '../icons';

type Props = { content: After192Content['completeCTA'] };

const isExternal = (href: string) => /^https?:\/\//.test(href);

export const LearningCompleteCTA = ({ content }: Props) => (
  <section
    aria-labelledby="complete-cta-heading"
    className={cn(
      'relative overflow-hidden rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
      'border-blue-700/60 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950',
      'shadow-[0_4px_0_rgba(0,0,0,0.25)]',
    )}
  >
    {/* dotted pattern */}
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-30 pointer-events-none"
      style={{
        backgroundImage:
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)',
        backgroundSize: '20px 20px',
      }}
    />
    {/* glow */}
    <div
      aria-hidden="true"
      className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none"
    />
    <div
      aria-hidden="true"
      className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none"
    />

    <div className="relative grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[auto_minmax(0,_1fr)_minmax(0,_340px)] items-center">
      {/* LEFT: big check with particles */}
      <div className="flex justify-center lg:justify-start">
        <div className="relative">
          {/* particles */}
          <span
            aria-hidden="true"
            className="absolute -top-2 -right-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-amber-300/80 shadow-[0_0_8px_rgba(252,211,77,0.6)]"
          />
          <span
            aria-hidden="true"
            className="absolute top-3 -left-4 inline-flex h-2 w-2 items-center justify-center rounded-full bg-emerald-300/80 shadow-[0_0_8px_rgba(110,231,183,0.6)]"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-2 -right-2 inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-cyan-300/80 shadow-[0_0_8px_rgba(103,232,249,0.6)]"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-3 left-4 inline-flex h-1.5 w-1.5 items-center justify-center rounded-full bg-pink-300/80 shadow-[0_0_8px_rgba(249,168,212,0.6)]"
          />
          <span
            aria-hidden="true"
            className={cn(
              'relative inline-flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full',
              'border-2 border-emerald-300/70 bg-emerald-400/15 backdrop-blur-sm',
              'shadow-[0_4px_24px_rgba(16,185,129,0.4)]',
            )}
          >
            <CheckIcon className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-200" strokeWidth={3} />
          </span>
        </div>
      </div>

      {/* CENTER: heading + description */}
      <div className="flex flex-col gap-2 min-w-0">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-200">
          <PartyPopperIcon aria-hidden="true" className="h-3 w-3" />
          {content.badge}
        </span>
        <h2
          id="complete-cta-heading"
          className="text-lg sm:text-xl lg:text-xxl font-bold leading-snug text-white break-keep"
        >
          {content.heading}
        </h2>
        <p className="text-xsm sm:text-sm leading-relaxed text-blue-100/85 break-keep">
          {content.description}
        </p>
      </div>

      {/* RIGHT: 3 buttons */}
      <div className="flex flex-col gap-2 min-w-0">
        <Link
          href={content.primary.href}
          className={cn(
            'group inline-flex items-center justify-center gap-2 rounded-2xl px-4 sm:px-6 py-3 w-full',
            'bg-white text-blue-900 font-bold text-xsm sm:text-sm text-center',
            'shadow-[0_4px_0_rgba(0,0,0,0.25)] hover:shadow-[0_6px_0_rgba(0,0,0,0.25)]',
            'transition-all motion-safe:hover:-translate-y-0.5',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950',
          )}
        >
          <span className="break-keep">{content.primary.label}</span>
          <ArrowRightIcon
            aria-hidden="true"
            className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
          />
        </Link>

        <Link
          href={content.secondary.href}
          className={cn(
            'group inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 w-full',
            'bg-teal-500/20 border-2 border-teal-300/40 text-teal-100 font-bold text-xsm',
            'hover:bg-teal-500/30 hover:border-teal-300/60',
            'transition-all motion-safe:hover:-translate-y-0.5',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950',
          )}
        >
          <RotateCcwIcon aria-hidden="true" className="h-3.5 w-3.5 opacity-90" />
          <span className="break-keep">{content.secondary.label}</span>
        </Link>

        {isExternal(content.tertiary.href) ? (
          <a
            href={content.tertiary.href}
            target="_blank"
            rel="noreferrer"
            className={cn(
              'group inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 w-full',
              'border-2 border-white/25 bg-white/5 text-white/90 font-bold text-xsm',
              'hover:border-white/50 hover:bg-white/10',
              'transition-all motion-safe:hover:-translate-y-0.5',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950',
            )}
          >
            <span className="break-keep">{content.tertiary.label}</span>
            <ExternalLinkIcon
              aria-hidden="true"
              className="h-3 w-3 opacity-70 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
            />
          </a>
        ) : (
          <Link
            href={content.tertiary.href}
            className={cn(
              'group inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 w-full',
              'border-2 border-white/25 bg-white/5 text-white/90 font-bold text-xsm',
              'hover:border-white/50 hover:bg-white/10',
              'transition-all motion-safe:hover:-translate-y-0.5',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950',
            )}
          >
            <span className="break-keep">{content.tertiary.label}</span>
          </Link>
        )}
      </div>
    </div>
  </section>
);

import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import type { WhyFailableRenderContent } from '../content';
import { ArrowRightIcon, CheckCircleIcon, HourglassIcon, LoaderIcon, TargetIcon } from '../icons';

type Props = { content: WhyFailableRenderContent['cta'] };

export const NextCTA = ({ content }: Props) => (
  <section
    aria-labelledby="cta-heading"
    className={cn(
      'relative overflow-hidden rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
      'border-blue-700/60 bg-gradient-to-br from-blue-950 via-blue-900 to-violet-950',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    {/* dot decoration */}
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-25 pointer-events-none"
      style={{
        backgroundImage:
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
        backgroundSize: '20px 20px',
      }}
    />

    <div className="relative grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[auto_1fr_minmax(0,280px)] items-center">
      {/* LEFT: illustration */}
      <div className="flex items-center gap-3 lg:flex-col lg:items-center lg:gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'relative inline-flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl',
            'border-2 border-blue-300/60 bg-white/10 backdrop-blur-sm shadow-[0_4px_12px_rgba(59,130,246,0.3)]',
          )}
        >
          <HourglassIcon className="h-8 w-8 sm:h-9 sm:w-9 text-blue-100" />
          <span className="absolute -top-1.5 -right-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400 text-white shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            <LoaderIcon className="h-3 w-3 motion-safe:animate-spin" />
          </span>
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-blue-300 hidden lg:inline">
          next
        </span>
      </div>

      {/* CENTER */}
      <div className="flex flex-col gap-2 min-w-0">
        <p className="text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider text-blue-300">
          {content.eyebrow}
        </p>
        <h2
          id="cta-heading"
          className="text-lg sm:text-xl lg:text-xxl font-bold leading-snug text-white break-keep"
        >
          {content.title}
        </h2>
        <p className="text-xsm sm:text-sm leading-relaxed text-blue-100/80 break-keep">
          {content.description}
        </p>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <Link
            href={content.primary.href}
            className={cn(
              'group inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 w-full sm:w-fit',
              'bg-white text-blue-900 font-bold text-sm whitespace-nowrap',
              'shadow-[0_4px_0_rgba(0,0,0,0.25)] hover:shadow-[0_6px_0_rgba(0,0,0,0.25)]',
              'transition-all motion-safe:hover:-translate-y-0.5',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950',
            )}
          >
            <span>{content.primary.label}</span>
            <ArrowRightIcon
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
            />
          </Link>
          <Link
            href={content.secondary.href}
            className={cn(
              'group inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 w-full sm:w-fit',
              'border-2 border-white/30 bg-white/5 text-white font-bold text-xsm',
              'transition-all motion-safe:hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950',
            )}
          >
            <span>{content.secondary.label}</span>
          </Link>
        </div>
      </div>

      {/* RIGHT: learning goals */}
      <aside
        className={cn('rounded-2xl border p-md', 'border-white/20 bg-white/5 backdrop-blur-sm')}
      >
        <header className="flex items-center gap-2 mb-2">
          <TargetIcon className="h-4 w-4 text-cyan-300" aria-hidden="true" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">
            {content.goalsLabel}
          </span>
        </header>
        <ul className="flex flex-col gap-1.5">
          {content.goals.map((goal) => (
            <li key={goal} className="flex items-start gap-2 text-xsm text-blue-50 break-keep">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-300"
              />
              <span>{goal}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  </section>
);

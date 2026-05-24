import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import type { DispatchSetStateEntryContent } from '../content';
import { ArrowRightIcon, TargetIcon } from '../icons';

type Props = { content: DispatchSetStateEntryContent['cta'] };

export const NextStepDarkCTA = ({ content }: Props) => (
  <section id="next" aria-labelledby="heading-next" className="relative scroll-mt-xl">
    <h2 id="heading-next" className="sr-only">
      {content.buttonLabel}
    </h2>

    <div
      className={cn(
        'relative overflow-hidden rounded-3xl border-2 px-md py-lg sm:px-lg sm:py-xl',
        'border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950',
        'shadow-[0_24px_48px_-24px_rgba(2,6,23,0.8),0_2px_0_var(--term-border)]',
      )}
    >
      {/* Background dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,_rgba(148,163,184,0.35)_1px,_transparent_0)] [background-size:18px_18px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-16 h-64 w-64 rounded-full bg-teal-400/20 blur-3xl"
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.5fr)] gap-lg items-center">
        <div className="flex items-center justify-center">
          <TargetIllustration />
        </div>

        <div className="flex flex-col gap-md min-w-0">
          <span
            className={cn(
              'inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1',
              'text-[10px] font-bold uppercase tracking-wider',
              'border-sky-400/30 bg-sky-400/10 text-sky-200',
            )}
          >
            <TargetIcon className="h-3.5 w-3.5" aria-hidden="true" />
            up next
          </span>

          <p className="text-xl sm:text-2xl lg:text-[1.7rem] font-bold leading-[1.25] tracking-tight text-white break-keep">
            <span className="block text-white">{content.main.lead}</span>
            <span className="block">
              <span
                className={cn(
                  'bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent',
                )}
              >
                {content.main.emphasis}
              </span>
              <span className="text-white">{content.main.tail}</span>
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={content.buttonHref}
              className={cn(
                'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
                'bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 text-xsm sm:text-sm font-bold tracking-tight',
                'transition-transform hover:scale-[1.02]',
                'shadow-[0_12px_30px_-12px_rgba(56,189,248,0.5)]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
              )}
            >
              {content.buttonLabel}
              <ArrowRightIcon
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <span className="text-[10px] font-mono uppercase tracking-wider text-sky-200/70">
              chapter 28 ahead
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TargetIllustration = () => (
  <div className="relative aspect-square w-36 sm:w-44 lg:w-52" aria-hidden="true">
    {[1, 0.78, 0.58, 0.4, 0.24].map((scale, i) => (
      <span
        key={i}
        style={{ inset: `${(1 - scale) * 50}%` }}
        className={cn(
          'absolute rounded-full border-2',
          i === 0 && 'border-white/15 bg-slate-900/40',
          i === 1 && 'border-sky-400/40 bg-sky-900/30',
          i === 2 && 'border-cyan-300/50 bg-cyan-900/40',
          i === 3 && 'border-teal-300/60 bg-teal-900/40',
          i === 4 && 'border-amber-300/80 bg-amber-300/40',
        )}
      />
    ))}
    <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200 shadow-[0_0_18px_4px_rgba(252,211,77,0.5)]" />
    <span className="absolute left-[58%] top-[42%] -translate-x-1/2 -translate-y-1/2 rotate-45">
      <span className="block h-0.5 w-12 bg-gradient-to-r from-transparent via-sky-200 to-white shadow-[0_0_8px_rgba(125,211,252,0.6)]" />
      <span className="absolute right-0 top-1/2 -translate-y-1/2 block h-1.5 w-1.5 rounded-sm bg-rose-400" />
    </span>
  </div>
);

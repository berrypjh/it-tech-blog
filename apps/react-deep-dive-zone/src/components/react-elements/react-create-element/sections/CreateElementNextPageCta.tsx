import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import type { ReactCreateElementContent } from '../content';
import { ArrowRightIcon, RotateIcon, WandIcon } from '../icons';

type Props = { content: ReactCreateElementContent['next'] };

export const CreateElementNextPageCta = ({ content }: Props) => (
  <section aria-labelledby="heading-next" className="space-y-md">
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border',
        'border-sky-200/80 bg-gradient-to-br from-sky-50 via-white to-teal-50',
        'dark:border-sky-800/70 dark:from-sky-950/40 dark:via-slate-900 dark:to-teal-950/40',
        'shadow-[0_2px_0_var(--term-border)]',
        'p-md sm:p-lg lg:p-xl',
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_18%_28%,rgba(14,165,233,0.18),transparent_60%),radial-gradient(circle_at_82%_72%,rgba(20,184,166,0.18),transparent_55%)]"
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)_auto] gap-md sm:gap-lg items-center">
        {/* Left visual — circular wand badge */}
        <div className="flex justify-center lg:justify-start">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full',
              'bg-gradient-to-br from-sky-500 to-teal-500 text-white',
              'shadow-[0_12px_24px_-12px_rgba(14,165,233,0.55)]',
            )}
          >
            <WandIcon className="h-10 w-10" />
          </span>
        </div>

        {/* Center text */}
        <div className="flex flex-col gap-2 min-w-0 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 self-center lg:self-start text-[10px] uppercase tracking-wider font-bold font-mono">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center min-w-[2.25rem] px-2 py-0.5',
                'rounded-md text-[10px] font-bold tabular-nums tracking-wider',
                'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
              )}
            >
              {content.badge}
            </span>
            <span className="text-sky-700 dark:text-sky-300">{content.eyebrow}</span>
          </span>
          <h2
            id="heading-next"
            className="text-md sm:text-lg lg:text-xl font-bold tracking-tight break-keep text-[var(--term-fg)]"
          >
            {content.title}
          </h2>
          <p className="text-sm sm:text-md leading-relaxed break-keep text-[var(--term-muted)]">
            {content.line1}
            <br />
            <span>{content.line2Before}</span>
            <span className="font-bold font-mono text-violet-700 dark:text-violet-300">
              {content.line2Accent}
            </span>
            <span>{content.line2After}</span>
          </p>
        </div>

        {/* Right buttons */}
        <div className="flex flex-col gap-2 w-full lg:w-auto">
          <Link
            href={content.primaryHref}
            className={cn(
              'group inline-flex items-center justify-center gap-2 rounded-md px-lg py-3',
              'bg-sky-600 text-white text-xsm font-bold tracking-tight',
              'transition-colors hover:bg-sky-700',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              'dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950',
            )}
          >
            {content.primaryCta}
            <ArrowRightIcon
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
          <Link
            href={content.secondaryHref}
            className={cn(
              'group inline-flex items-center justify-center gap-2 rounded-md px-lg py-3',
              'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] text-xsm font-bold',
              'transition-colors hover:border-[var(--term-accent)] hover:text-[var(--term-accent)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)]',
            )}
          >
            <RotateIcon
              className="h-4 w-4 transition-transform group-hover:-rotate-90"
              aria-hidden="true"
            />
            {content.secondaryCta}
          </Link>
        </div>
      </div>
    </div>
  </section>
);

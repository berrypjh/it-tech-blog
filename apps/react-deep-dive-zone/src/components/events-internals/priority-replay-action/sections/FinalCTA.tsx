import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import type { AdvancedWrapupContent } from '../content';
import {
  ArrowRightIcon,
  AwardIcon,
  ExternalLinkIcon,
  PartyPopperIcon,
  RepeatIcon,
  RocketIcon,
  TrophyIcon,
} from '../icons';

type Props = { content: AdvancedWrapupContent['finalCta'] };

const buttonIcons = [RocketIcon, RepeatIcon, ExternalLinkIcon];

export const FinalCTA = ({ content }: Props) => (
  <section
    aria-labelledby="heading-final-cta"
    className={cn(
      'relative overflow-hidden rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
      'border-blue-300/80 bg-gradient-to-br from-blue-50/80 via-white to-violet-50/40',
      'dark:border-blue-700/70 dark:from-blue-950/40 dark:via-[var(--term-bg)] dark:to-violet-950/30',
      'shadow-[0_6px_0_var(--term-border)]',
    )}
  >
    {/* Decorative confetti */}
    <span
      aria-hidden="true"
      className="pointer-events-none absolute top-4 right-6 text-blue-300/40 dark:text-blue-700/40"
    >
      <PartyPopperIcon className="h-12 w-12" />
    </span>
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-6 left-4 text-violet-300/40 dark:text-violet-700/40"
    >
      <TrophyIcon className="h-14 w-14" />
    </span>

    <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)] gap-md lg:gap-lg items-center">
      {/* Left: completion message */}
      <div className="flex flex-col gap-md">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl',
              'bg-gradient-to-br from-blue-600 to-violet-600 text-white',
              'shadow-[0_4px_0_rgba(124,58,237,0.35)]',
            )}
          >
            <AwardIcon className="h-7 w-7 sm:h-8 sm:w-8" />
          </span>
          <span className="text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
            chapter complete
          </span>
        </div>
        <h2
          id="heading-final-cta"
          className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-[var(--term-fg)] break-keep"
        >
          {content.title}
        </h2>
        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] break-keep max-w-[55ch]">
          {content.description}
        </p>
      </div>

      {/* Right: CTA buttons */}
      <ul className="flex flex-col gap-2 lg:gap-3">
        {content.buttons.map((button, i) => {
          const Icon = buttonIcons[i] ?? RocketIcon;
          const isPrimary = button.variant === 'primary';
          const isExternal = button.href.startsWith('http');
          const className = cn(
            'group inline-flex items-center justify-between gap-3 rounded-2xl px-md py-3 sm:py-md w-full',
            'font-bold transition-all motion-safe:hover:-translate-y-0.5',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
            isPrimary
              ? cn(
                  'bg-blue-700 text-white border-2 border-blue-700',
                  'shadow-[0_4px_0_rgba(29,78,216,0.45)] hover:shadow-[0_6px_0_rgba(29,78,216,0.45)]',
                  'focus-visible:ring-blue-400',
                  'dark:bg-blue-600 dark:border-blue-600',
                )
              : cn(
                  'bg-[var(--term-bg)] text-blue-700 border-2 border-blue-300/80',
                  'shadow-[0_2px_0_var(--term-border)] hover:border-blue-500 hover:shadow-[0_3px_0_var(--term-border)]',
                  'focus-visible:ring-blue-400',
                  'dark:bg-slate-950/40 dark:text-blue-200 dark:border-blue-700/70',
                ),
          );
          const content_jsx = (
            <>
              <span className="flex items-center gap-3 min-w-0">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
                    isPrimary
                      ? 'bg-white/15 text-white'
                      : 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-200',
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-xsm sm:text-sm break-keep">{button.label}</span>
              </span>
              <ArrowRightIcon
                aria-hidden="true"
                className={cn(
                  'h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none',
                  isPrimary ? 'text-white' : 'text-blue-500 dark:text-blue-300',
                )}
              />
            </>
          );
          return (
            <li key={button.label}>
              {isExternal ? (
                <a
                  href={button.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={className}
                >
                  {content_jsx}
                </a>
              ) : (
                <Link href={button.href} className={className}>
                  {content_jsx}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

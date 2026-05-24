import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { ResponseAccent, TransitionDeferredContent } from '../content';
import { ArrowRightIcon, ClockIcon, FlagIcon, RouteIcon, TrophyIcon, ZapIcon } from '../icons';
import {
  responseCardBorder,
  responseIconBox,
  responseNumberBadge,
  responseTextStrong,
} from '../responseAccent';

type Props = { content: TransitionDeferredContent['takeaways'] };

const cardIcon: Record<ResponseAccent, typeof ZapIcon> = {
  emerald: ZapIcon,
  blue: ClockIcon,
  violet: FlagIcon,
  rose: ZapIcon,
  teal: FlagIcon,
};

const iconWash: Record<ResponseAccent, string> = {
  emerald: 'text-emerald-300/70 dark:text-emerald-700/60',
  blue: 'text-blue-300/70 dark:text-blue-700/60',
  violet: 'text-violet-300/70 dark:text-violet-700/60',
  rose: 'text-rose-300/70 dark:text-rose-700/60',
  teal: 'text-teal-300/70 dark:text-teal-700/60',
};

export const TransitionDeferredKeyTakeaways = ({ content }: Props) => (
  <section aria-labelledby="heading-takeaways">
    <NumberedSectionHeader
      id="takeaways"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<TrophyIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-md items-stretch">
      {content.cards.map((card) => {
        const Icon = cardIcon[card.accent];
        return (
          <li key={card.title} className="h-full">
            <article
              className={cn(
                'group relative flex h-full flex-col gap-md rounded-2xl border-2 p-md sm:p-lg overflow-hidden',
                'shadow-[0_2px_0_var(--term-border)] transition-all',
                'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                responseCardBorder[card.accent],
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border',
                    responseIconBox[card.accent],
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-8 px-2 items-center justify-center rounded-full',
                    'text-[11px] font-mono font-bold tabular-nums shadow-[0_2px_0_rgba(0,0,0,0.08)]',
                    responseNumberBadge[card.accent],
                  )}
                >
                  {card.number}
                </span>
              </header>

              <h3 className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
                {card.title}
              </h3>

              <p className="text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.description}
              </p>

              <Icon
                aria-hidden="true"
                className={cn(
                  'absolute -bottom-4 -right-4 h-20 w-20 pointer-events-none',
                  iconWash[card.accent],
                )}
                strokeWidth={1.4}
              />

              <span
                aria-hidden="true"
                className={cn(
                  'mt-auto inline-flex w-fit items-center gap-1.5 rounded-full border px-2 py-0.5',
                  'font-mono text-[10px] uppercase tracking-wider',
                  responseTextStrong[card.accent],
                  'border-[var(--term-border)] bg-[var(--term-bg)]',
                )}
              >
                takeaway · {card.number}
              </span>
            </article>
          </li>
        );
      })}

      {/* CTA card */}
      <li className="h-full md:col-span-2 xl:col-span-1">
        <Link
          href={content.cta.href}
          className={cn(
            'group relative flex h-full flex-col gap-3 rounded-2xl overflow-hidden p-md sm:p-lg',
            'bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white',
            'shadow-[0_4px_0_rgba(29,78,216,0.45)] transition-all',
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
              backgroundSize: '20px 20px',
            }}
          />
          <header className="relative flex items-center justify-between gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white border border-white/30"
            >
              <RouteIcon className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-blue-100/80">
              {content.cta.eyebrow}
            </span>
          </header>

          <h3 className="relative text-md sm:text-lg font-bold leading-snug break-keep">
            {content.cta.title}
          </h3>

          <p className="relative text-[11px] sm:text-xsm leading-relaxed text-blue-100/80 break-keep">
            {content.cta.description}
          </p>

          <span
            className={cn(
              'relative mt-auto inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5',
              'bg-white text-blue-900 font-bold text-xsm sm:text-sm shadow-[0_3px_0_rgba(0,0,0,0.18)]',
              'transition-transform motion-safe:group-hover:-translate-y-0.5 motion-reduce:transform-none',
            )}
          >
            <span className="break-keep">{content.cta.button}</span>
            <ArrowRightIcon
              aria-hidden="true"
              className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1 motion-reduce:transform-none"
            />
          </span>
        </Link>
      </li>
    </ul>
  </section>
);

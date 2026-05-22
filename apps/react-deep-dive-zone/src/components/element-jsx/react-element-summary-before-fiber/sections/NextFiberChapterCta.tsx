import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import { TrophyIllustration } from '../components/TrophyIllustration';
import type { ReactElementSummaryBeforeFiberContent } from '../content';
import { ArrowRightIcon, RotateIcon } from '../icons';

type Props = { content: ReactElementSummaryBeforeFiberContent['next'] };

export const NextFiberChapterCta = ({ content }: Props) => (
  <section id="next" aria-labelledby="heading-next" className="space-y-md scroll-mt-xl">
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl border-2',
        'border-sky-500/40 bg-gradient-to-br from-sky-600 via-teal-500 to-cyan-500 text-white',
        'dark:from-sky-700 dark:via-teal-600 dark:to-cyan-600',
        'shadow-[0_12px_30px_-12px_rgba(20,184,166,0.45)]',
        'p-md sm:p-lg lg:p-xl',
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_22%,rgba(255,255,255,0.9)_0_1px,transparent_1.5px),radial-gradient(circle_at_30%_75%,rgba(255,255,255,0.6)_0_1px,transparent_1.5px),radial-gradient(circle_at_88%_50%,rgba(255,255,255,0.7)_0_1px,transparent_1.5px)] bg-[length:200px_200px]"
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)_auto] gap-md sm:gap-lg items-center">
        <div className="flex justify-center lg:justify-start">
          <TrophyIllustration className="h-32 w-36 sm:h-36 sm:w-40" />
        </div>

        <div className="flex flex-col gap-2 min-w-0 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 self-center lg:self-start text-[10px] uppercase tracking-wider font-bold font-mono">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center min-w-[2.25rem] px-2 py-0.5',
                'rounded-md text-[10px] font-bold tabular-nums tracking-wider',
                'bg-white text-sky-700',
              )}
            >
              {content.badge}
            </span>
            <span className="text-white/90">{content.eyebrow}</span>
          </span>
          <h2
            id="heading-next"
            className="text-md sm:text-lg lg:text-xl font-bold tracking-tight break-keep"
          >
            {content.title}
          </h2>
          <p className="text-sm sm:text-md leading-relaxed break-keep text-white/95">
            {content.description}
          </p>
        </div>

        <div className="flex flex-col gap-2 w-full lg:w-auto">
          <Link
            href={content.primaryHref}
            className={cn(
              'group inline-flex items-center justify-center gap-2 rounded-md px-lg py-3',
              'bg-white text-sky-700 text-xsm font-bold',
              'transition-colors hover:bg-sky-50',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-sky-600',
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
              'border border-white/70 text-white text-xsm font-bold bg-transparent',
              'transition-colors hover:bg-white/10',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white',
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

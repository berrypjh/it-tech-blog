import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import { FoundationCubeIllustration } from '../components/FoundationCubeIllustration';
import type { SharedContent } from '../content';
import { ArrowRightIcon } from '../icons';

type Props = { content: SharedContent['nextStep'] };

export const SharedNextCTA = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-next" className="space-y-md">
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl border',
          'border-sky-300/80 bg-gradient-to-br from-sky-50 to-cyan-50 text-sky-900',
          'dark:border-sky-800/70 dark:from-sky-950/60 dark:to-cyan-950/60 dark:text-sky-100',
          'shadow-[0_4px_0_var(--term-border)]',
          'p-md sm:p-lg lg:p-xl',
        )}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(56,189,248,0.20),transparent_60%),radial-gradient(circle_at_82%_72%,rgba(125,211,252,0.20),transparent_55%)]"
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)_auto] gap-md sm:gap-lg items-center">
          <div className="flex justify-center lg:justify-start">
            <FoundationCubeIllustration className="h-28 w-32 sm:h-32 sm:w-36" />
          </div>

          <div className="flex flex-col gap-2 min-w-0 text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-wider text-sky-700 dark:text-sky-300 font-bold font-mono">
              {content.eyebrow}
            </span>
            <h2
              id="heading-next"
              className="text-md sm:text-lg lg:text-xl font-bold tracking-tight break-keep"
            >
              {content.title}
            </h2>
            <p className="text-sm sm:text-md leading-relaxed break-keep">{content.line1}</p>
            <p className="text-sm sm:text-md leading-relaxed break-keep">{content.line2}</p>
            <p className="text-sm sm:text-md leading-relaxed break-keep">
              <span>{content.line3Before}</span>
              <span className="font-bold font-mono text-cyan-700 dark:text-cyan-300">
                {content.line3Accent}
              </span>
              <span>{content.line3After}</span>
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full lg:w-auto">
            <Link
              href={content.primaryHref}
              className={cn(
                'group inline-flex items-center justify-center gap-2 rounded-md px-lg py-3',
                'bg-sky-600 text-white text-xsm font-bold',
                'transition-colors hover:bg-sky-700',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-50',
                'dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950',
              )}
            >
              {content.primaryCta}
              <ArrowRightIcon
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

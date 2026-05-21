import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import { MapIllustration } from '../../other-dirs/components/MapIllustration';
import type { ReactVsReactDomContent } from '../content';
import { ArrowRightIcon, RotateIcon } from '../icons';

type Props = { content: ReactVsReactDomContent['nextStep'] };

export const ReactDomNextCTA = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-next" className="space-y-md">
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl border',
          'border-slate-800 bg-slate-900 text-slate-100',
          'dark:border-slate-700 dark:bg-slate-900',
          'shadow-[0_4px_0_var(--term-border)]',
          'p-md sm:p-lg lg:p-xl',
        )}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(56,189,248,0.20),transparent_55%),radial-gradient(circle_at_85%_75%,rgba(16,185,129,0.20),transparent_55%)]"
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)_auto] gap-md sm:gap-lg items-center">
          <div className="flex justify-center lg:justify-start">
            <MapIllustration className="h-24 w-28 sm:h-28 sm:w-32" />
          </div>

          <div className="flex flex-col gap-2 min-w-0 text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-wider text-sky-300 font-bold">
              {content.eyebrow}
            </span>
            <h2
              id="heading-next"
              className="text-md sm:text-lg lg:text-xl font-bold tracking-tight break-keep"
            >
              {content.title}
            </h2>
            <p className="text-sm sm:text-md leading-relaxed break-keep text-slate-200">
              <span>{content.accentLine.before}</span>
              <span className="font-bold font-mono text-cyan-300">{content.accentLine.accent}</span>
              <span>{content.accentLine.after}</span>
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full lg:w-auto">
            <Link
              href={content.href}
              className={cn(
                'group inline-flex items-center justify-center gap-2 rounded-md px-lg py-3',
                'bg-sky-500 text-slate-950 text-xsm font-bold',
                'transition-colors hover:bg-sky-400',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900',
              )}
            >
              {content.primaryCta}
              <ArrowRightIcon
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link
              href={content.restartHref}
              className={cn(
                'group inline-flex items-center justify-center gap-2 rounded-md px-lg py-3',
                'border border-slate-600 text-slate-100 text-xsm font-bold bg-transparent',
                'transition-colors hover:border-slate-300 hover:text-white',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900',
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
};

import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import { FinaleMapIllustration } from '../components/FinaleMapIllustration';
import type { PackageDesignContent } from '../content';
import { ArrowRightIcon, RotateIcon } from '../icons';

type Props = { content: PackageDesignContent['finalCta'] };

export const PdFinalCTA = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-final" className="space-y-md">
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
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(56,189,248,0.24),transparent_60%),radial-gradient(circle_at_82%_72%,rgba(45,212,191,0.20),transparent_55%)]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_70%_22%,rgba(255,255,255,0.8)_0_1px,transparent_1.5px),radial-gradient(circle_at_30%_75%,rgba(255,255,255,0.6)_0_1px,transparent_1.5px),radial-gradient(circle_at_88%_50%,rgba(255,255,255,0.55)_0_1px,transparent_1.5px)] bg-[length:200px_200px]"
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)_auto] gap-md sm:gap-lg items-center">
          <div className="flex justify-center lg:justify-start">
            <FinaleMapIllustration className="h-28 w-32 sm:h-32 sm:w-36" />
          </div>

          <div className="flex flex-col gap-2 min-w-0 text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-wider text-cyan-300 font-bold font-mono">
              {content.eyebrow}
            </span>
            <h2
              id="heading-final"
              className="text-md sm:text-lg lg:text-xl font-bold tracking-tight break-keep"
            >
              {content.title}
            </h2>
            <p className="text-sm sm:text-md leading-relaxed break-keep text-slate-200">
              {content.line1}
            </p>
            <p className="text-sm sm:text-md leading-relaxed break-keep text-slate-200">
              <span>{content.line2Before}</span>
              <span className="font-bold font-mono text-cyan-300">{content.line2Accent}</span>
              <span>{content.line2After}</span>
              <span>{content.line3Before}</span>
              <span className="font-bold font-mono text-cyan-300">{content.line3Accent}</span>
              <span>{content.line3After}</span>
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full lg:w-auto">
            <Link
              href={content.primaryHref}
              className={cn(
                'group inline-flex items-center justify-center gap-2 rounded-md px-lg py-3',
                'bg-cyan-500 text-slate-950 text-xsm font-bold',
                'transition-colors hover:bg-cyan-400',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900',
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
                'border border-slate-600 text-slate-100 text-xsm font-bold bg-transparent',
                'transition-colors hover:border-slate-300 hover:text-white',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900',
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

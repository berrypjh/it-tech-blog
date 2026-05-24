import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { WorkLoopContent } from '../content';
import { ArrowRightIcon, RocketIcon, SparklesIcon } from '../icons';

type Props = { content: WorkLoopContent['cta'] };

export const NextPerformUnitCTA = ({ content }: Props) => (
  <section id="cta" aria-labelledby="heading-cta" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="cta"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'relative overflow-hidden rounded-3xl border-2 p-md sm:p-lg',
        'border-sky-300/70 dark:border-sky-700/70',
        'bg-gradient-to-br from-sky-50/80 via-white to-violet-50/40',
        'dark:from-sky-950/40 dark:via-[var(--term-bg)] dark:to-violet-950/30',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 left-1/4 h-32 w-32 rounded-full bg-white/40 blur-3xl dark:bg-sky-400/10"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 h-24 w-24 rounded-full bg-violet-200/40 blur-3xl dark:bg-violet-500/10"
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto] gap-md items-center">
        <div className="flex items-start gap-md min-w-0">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2',
              'bg-sky-100 text-sky-700 border-sky-200/80',
              'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
            )}
          >
            <RocketIcon className="h-6 w-6" />
          </span>
          <p className="text-xsm sm:text-sm md:text-md leading-relaxed text-[var(--term-fg)] break-keep">
            {content.description}
          </p>
        </div>

        <Link
          href={content.buttonHref}
          className={cn(
            'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md w-full lg:w-auto',
            'bg-sky-600 text-white text-xsm sm:text-sm font-bold tracking-tight whitespace-normal text-center',
            'transition-colors hover:bg-sky-700',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
            'dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950',
          )}
        >
          {content.buttonLabel}
          <ArrowRightIcon
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  </section>
);

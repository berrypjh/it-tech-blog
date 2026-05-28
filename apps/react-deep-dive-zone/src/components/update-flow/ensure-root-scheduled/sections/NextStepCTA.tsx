import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { EnsureRootScheduledContent } from '../content';
import { ArrowRightIcon, RocketIcon } from '../icons';

type Props = { content: EnsureRootScheduledContent['next'] };

export const NextStepCTA = ({ content }: Props) => (
  <section id="next" aria-labelledby="heading-next" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="next"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<RocketIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'relative overflow-hidden rounded-3xl border-2 p-md sm:p-lg',
        'border-sky-300/70 dark:border-sky-700/70',
        'bg-gradient-to-br from-sky-50/80 via-white to-cyan-50/60',
        'dark:from-sky-950/40 dark:via-[var(--term-bg)] dark:to-cyan-950/30',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 left-1/4 h-32 w-32 rounded-full bg-white/40 blur-3xl dark:bg-sky-400/10"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 h-24 w-24 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/10"
      />

      <div className="relative grid grid-cols-1 sm:grid-cols-[auto_minmax(0,_1fr)_auto] gap-md sm:gap-lg items-center">
        <RocketIllustration />

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep max-w-[60ch]">
          {content.description}
        </p>

        <Link
          href={content.buttonHref}
          className={cn(
            'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
            'bg-sky-600 text-white text-xsm font-bold tracking-tight whitespace-normal text-center',
            'transition-colors hover:bg-sky-700',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
            'dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950',
          )}
        >
          <span className="max-w-[18ch] sm:max-w-none">{content.buttonLabel}</span>
          <ArrowRightIcon
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  </section>
);

const RocketIllustration = () => (
  <div aria-hidden="true" className="relative flex items-center justify-center">
    <span
      className={cn(
        'relative inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-3xl',
        'bg-sky-100 text-sky-700 border border-sky-200/80',
        'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
        'shadow-[0_12px_32px_-12px_rgba(2,132,199,0.55)]',
      )}
    >
      <RocketIcon className="h-7 w-7 sm:h-9 sm:w-9" />
      <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 flex flex-col items-center gap-0.5">
        <span className="block h-1.5 w-1.5 rounded-full bg-amber-300" />
        <span className="block h-1 w-1 rounded-full bg-amber-200/80" />
      </span>
    </span>
    <span className="absolute -bottom-1 -left-3 h-3 w-6 rounded-full bg-white/80 dark:bg-slate-500/30" />
    <span className="absolute -bottom-1 -right-3 h-3 w-5 rounded-full bg-white/80 dark:bg-slate-500/30" />
  </div>
);

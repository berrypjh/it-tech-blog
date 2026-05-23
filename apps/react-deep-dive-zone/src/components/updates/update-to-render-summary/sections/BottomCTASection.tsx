import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { UpdateToRenderSummaryContent } from '../content';
import { ArrowRightIcon, RotateCcwIcon, SparklesIcon } from '../icons';

type Props = { content: UpdateToRenderSummaryContent['cta'] };

export const BottomCTASection = ({ content }: Props) => (
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

      <div className="relative flex flex-col sm:flex-row gap-md items-center justify-center">
        <Link
          href={content.primaryHref}
          className={cn(
            'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md w-full sm:w-auto',
            'bg-sky-600 text-white text-xsm sm:text-sm font-bold tracking-tight whitespace-normal text-center',
            'transition-colors hover:bg-sky-700',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
            'dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950',
          )}
        >
          {content.primaryButton}
          <ArrowRightIcon
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>

        <Link
          href={content.secondaryHref}
          className={cn(
            'inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md w-full sm:w-auto',
            'border-2 border-sky-300/80 bg-white text-sky-700 text-xsm sm:text-sm font-bold tracking-tight',
            'transition-colors hover:bg-sky-50',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
            'dark:border-sky-700/70 dark:bg-slate-950/50 dark:text-sky-200 dark:hover:bg-sky-950/40',
          )}
        >
          <RotateCcwIcon className="h-4 w-4" aria-hidden="true" />
          {content.secondaryButton}
        </Link>
      </div>
    </div>
  </section>
);

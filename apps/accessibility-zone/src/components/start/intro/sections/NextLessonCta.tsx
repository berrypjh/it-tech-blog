import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import type { IntroContent } from '../content';

export const NextLessonCta = ({ content }: { content: IntroContent['cta'] }) => {
  return (
    <Link
      href="/why"
      aria-label={content.aria}
      className="group flex w-full items-center justify-between gap-sm rounded-xl border border-stroke-primary/40 bg-primary-pr100/50 px-lg py-lg text-text-primary shadow-sm transition-all hover:border-stroke-primary/80 hover:bg-primary-pr100 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2 dark:bg-primary-pr900/30 dark:hover:bg-primary-pr900/50 sm:px-xl sm:py-xl"
    >
      <span className="flex flex-col gap-1">
        <span className="text-md font-bold sm:text-lg">{content.label}</span>
        <span className="text-xsm text-text-light sm:text-sm">{content.sub}</span>
      </span>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-rounded bg-background-primary text-text-contrastText shadow-sm transition-transform group-hover:translate-x-1">
        <ArrowRight className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
      </span>
    </Link>
  );
};

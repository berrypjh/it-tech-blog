import Link from 'next/link';

import type { ImportanceContent } from '../content';

const ArrowRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const NextLearningCta = ({ content }: { content: ImportanceContent['cta'] }) => {
  return (
    <Link
      href="/disabilities"
      aria-label={content.aria}
      className="group flex w-full items-center justify-between gap-sm rounded-xl border border-stroke-primary/40 bg-primary-pr100/50 px-lg py-lg text-text-primary shadow-sm transition-all hover:border-stroke-primary/80 hover:bg-primary-pr100 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2 dark:bg-primary-pr900/30 dark:hover:bg-primary-pr900/50 sm:px-xl sm:py-xl"
    >
      <span className="flex flex-col gap-1">
        <span className="text-md font-bold sm:text-lg">{content.main}</span>
        <span className="text-xsm text-text-light sm:text-sm">{content.sub}</span>
      </span>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-rounded bg-background-primary text-text-contrastText shadow-sm transition-transform group-hover:translate-x-1">
        <ArrowRightIcon />
      </span>
    </Link>
  );
};

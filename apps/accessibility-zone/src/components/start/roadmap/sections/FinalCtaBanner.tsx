import Link from 'next/link';

import type { RoadmapContent } from '../content';

const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path
      d="M12 3l1.5 5 5 1.5-5 1.5L12 16l-1.5-5L5.5 9.5 10.5 8z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const BookmarkIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path d="M6 4h12v17l-6-4-6 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const MonitorScene = () => (
  <svg viewBox="0 0 160 140" className="h-full w-full" aria-hidden="true">
    <rect
      x="20"
      y="20"
      width="120"
      height="80"
      rx="8"
      fill="rgb(var(--ds-background-surface-rgb))"
      opacity="0.95"
    />
    <rect x="28" y="28" width="104" height="64" rx="4" fill="rgb(var(--ds-primary-pr100-rgb))" />
    <circle cx="80" cy="60" r="22" fill="rgb(var(--ds-background-surface-rgb))" />
    <path
      d="M70 60l8 8 14-16"
      stroke="rgb(var(--ds-success-su500-rgb))"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect x="58" y="104" width="44" height="10" rx="3" fill="rgb(var(--ds-neutral-ne600-rgb))" />
    <g fill="rgb(var(--ds-warning-wa400-rgb))">
      <circle cx="148" cy="30" r="3" />
      <circle cx="14" cy="80" r="3" />
      <circle cx="146" cy="90" r="2" />
      <circle cx="20" cy="120" r="2.5" />
    </g>
    <g stroke="rgb(var(--ds-warning-wa400-rgb))" strokeWidth="2" strokeLinecap="round">
      <path d="M150 24l4 4M154 24l-4 4" />
      <path d="M12 76l3 3M15 76l-3 3" />
    </g>
  </svg>
);

export const FinalCtaBanner = ({ content }: { content: RoadmapContent['finalCta'] }) => {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="overflow-hidden rounded-xl bg-gradient-to-br from-primary-pr500 via-primary-pr600 to-secondary-se500 p-lg text-text-contrastText shadow-lg sm:p-xl"
    >
      <div className="grid grid-cols-1 items-center gap-lg lg:grid-cols-[1fr_auto] lg:gap-xl">
        <div className="flex items-center gap-md">
          <div className="hidden h-32 w-40 shrink-0 sm:block" aria-hidden="true">
            <MonitorScene />
          </div>
          <div className="min-w-0">
            <span className="inline-flex items-center gap-1 rounded-rounded bg-background-surface/15 px-2 py-0.5 text-xxsm font-semiBold backdrop-blur-sm">
              <SparkleIcon />
              {content.eyebrow}
            </span>
            <h2
              id="final-cta-heading"
              className="mt-sm text-xl font-extraBold leading-snug sm:text-xxl lg:text-3xl"
            >
              {content.title}
            </h2>
            <p className="mt-1 text-xsm leading-relaxed text-text-contrastText/85 sm:text-sm">
              {content.body}
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-sm sm:flex-row lg:w-auto lg:flex-col">
          <Link
            href="/intro"
            aria-label={content.ariaPrimary}
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-background-surface px-mdl py-sml text-xsm font-bold text-text-primary shadow-sm transition-all hover:scale-[1.02] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background-surface focus-visible:ring-offset-2 focus-visible:ring-offset-primary-pr500 sm:text-sm"
          >
            {content.primary}
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-background-surface/40 bg-background-surface/10 px-mdl py-sml text-xsm font-semiBold text-text-contrastText backdrop-blur-sm transition-colors hover:bg-background-surface/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background-surface focus-visible:ring-offset-2 focus-visible:ring-offset-primary-pr500 sm:text-sm"
          >
            <BookmarkIcon />
            {content.secondary}
          </button>
        </div>
      </div>
    </section>
  );
};

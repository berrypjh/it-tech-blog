import Link from 'next/link';

import type { WhySourceContent } from '../content';
import { ArrowRightIcon, MapPinIcon } from '../icons';

type Props = { content: WhySourceContent['nextStep'] };

const MapDecoration = () => (
  <div
    className="relative h-32 sm:h-36 lg:h-40 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] overflow-hidden"
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 200 140"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id="next-map-grid"
          x="0"
          y="0"
          width="16"
          height="16"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 16 0 L 0 0 0 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-[var(--term-border)]"
          />
        </pattern>
      </defs>
      <rect width="200" height="140" fill="url(#next-map-grid)" />
      <path
        d="M20 110 C 60 90, 80 60, 120 50 S 170 30, 180 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        className="text-[var(--term-accent)]"
      />
      <circle cx="20" cy="110" r="3" className="fill-[var(--term-accent)]" />
      <circle cx="120" cy="50" r="3" className="fill-[var(--term-muted)]" />
      <circle
        cx="180"
        cy="18"
        r="4"
        className="fill-[var(--term-accent)] stroke-[var(--term-bg)]"
        strokeWidth="2"
      />
    </svg>
    <span className="absolute left-2 bottom-1 text-[10px] text-[var(--term-muted)]">
      {'// you are here'}
    </span>
    <span className="absolute right-2 top-1 text-[10px] text-[var(--term-accent)] font-bold inline-flex items-center gap-1">
      <MapPinIcon className="h-3 w-3" />
      next
    </span>
  </div>
);

export const NextLearningStepBanner = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-next" className="space-y-md">
      <Link
        href={content.href}
        className="group block rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg transition-all hover:border-[var(--term-accent)] hover:shadow-[0_2px_0_var(--term-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.4fr)_minmax(0,_1fr)_auto] gap-md lg:gap-lg items-center">
          <MapDecoration />

          <div className="flex flex-col gap-1 min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-[var(--term-accent)] font-bold inline-flex items-center gap-1">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--term-accent)]"
                aria-hidden="true"
              />
              {content.eyebrow}
            </p>
            <h2
              id="heading-next"
              className="text-md sm:text-lg lg:text-xl font-bold tracking-tight text-[var(--term-fg)] break-keep"
            >
              {content.title}
            </h2>
            <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
              {content.description}
            </p>
          </div>

          <span className="inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md bg-[var(--term-accent)] text-[var(--term-bg)] text-xsm font-bold transition-transform group-hover:translate-x-0.5 self-stretch lg:self-auto">
            {content.cta}
            <ArrowRightIcon className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </section>
  );
};

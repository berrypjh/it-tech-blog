import Link from 'next/link';

import type { RoadmapContent } from '../content';
import { ArrowRightIcon, RefreshIcon, SparkIcon } from '../icons';

type Props = { content: RoadmapContent['finale'] };

/** Rocket launching illustration — accent-tinted, transparent background. */
const RocketDecoration = () => (
  <div className="relative h-44 sm:h-48 lg:h-56 overflow-hidden" aria-hidden="true">
    <svg
      viewBox="0 0 200 200"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* stars / sparks */}
      <g className="text-[var(--term-accent)]" fill="currentColor" opacity="0.5">
        <circle cx="30" cy="32" r="1.5" />
        <circle cx="44" cy="52" r="1" />
        <circle cx="168" cy="34" r="2" />
        <circle cx="182" cy="62" r="1.2" />
        <circle cx="24" cy="80" r="1.4" />
        <circle cx="176" cy="104" r="1.3" />
      </g>

      {/* flame */}
      <path
        d="M88 130 Q100 170 112 130 Q108 150 100 162 Q92 150 88 130 Z"
        className="text-[var(--term-accent)]"
        fill="currentColor"
        opacity="0.8"
      />

      <g transform="translate(0, -4)">
        {/* body fill (adapts to light/dark via term-bg) */}
        <path d="M100 30 L116 80 L84 80 Z" className="text-[var(--term-bg)]" fill="currentColor" />
        <rect
          x="84"
          y="80"
          width="32"
          height="55"
          rx="4"
          className="text-[var(--term-bg)]"
          fill="currentColor"
        />

        {/* body outline */}
        <path
          d="M100 30 L116 80 L84 80 Z"
          className="text-[var(--term-accent)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="84"
          y="80"
          width="32"
          height="55"
          rx="4"
          className="text-[var(--term-accent)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        {/* window */}
        <circle
          cx="100"
          cy="100"
          r="7"
          className="text-[var(--term-accent)]"
          fill="currentColor"
          opacity="0.25"
        />
        <circle
          cx="100"
          cy="100"
          r="7"
          className="text-[var(--term-accent)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        {/* fins */}
        <path
          d="M84 110 L70 135 L84 130 Z"
          className="text-[var(--term-accent)]"
          fill="currentColor"
        />
        <path
          d="M116 110 L130 135 L116 130 Z"
          className="text-[var(--term-accent)]"
          fill="currentColor"
        />

        {/* body line */}
        <line
          x1="92"
          y1="116"
          x2="108"
          y2="116"
          className="text-[var(--term-accent)]"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.5"
        />
      </g>

      {/* trail */}
      <path
        d="M100 172 Q100 186 95 194 M100 172 Q100 186 105 194"
        className="text-[var(--term-accent)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 3"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  </div>
);

export const FinalLaunchBanner = ({ content }: Props) => {
  return (
    <section id="section-finale" aria-labelledby="heading-finale-title" className="space-y-md">
      <div className="rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)] p-md sm:p-lg lg:p-xl shadow-[0_2px_0_var(--term-border)] overflow-hidden relative">
        {/* 배경 spark 장식 */}
        <span aria-hidden="true" className="absolute right-3 top-3 text-[var(--term-accent)]">
          <SparkIcon className="h-5 w-5" />
        </span>
        <span aria-hidden="true" className="absolute left-4 bottom-4 text-[var(--term-dim)]">
          <SparkIcon className="h-3 w-3" />
        </span>

        <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,_0.4fr)_minmax(0,_1fr)_auto] gap-md lg:gap-lg items-center">
          {/* 좌측: rocket */}
          <RocketDecoration />

          {/* 중앙: copy */}
          <div className="flex flex-col gap-1.5 min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-[var(--term-accent)] font-bold inline-flex items-center gap-1.5">
              <SparkIcon className="h-3 w-3" />
              ready to launch
            </p>
            <h3
              id="heading-finale-title"
              className="text-lg sm:text-xl lg:text-xxl font-bold tracking-tight leading-snug break-keep"
            >
              <span className="block text-[var(--term-fg)]">{content.copyLine1}</span>
              <span className="block text-[var(--term-accent)]">{content.copyLine2}</span>
              <span className="block text-[var(--term-accent)]">{content.copyLine3}</span>
            </h3>
          </div>

          {/* 우측: 버튼 2개 (vertical stack) */}
          <div className="flex flex-col gap-sm lg:w-[260px]">
            <Link
              href={content.primaryHref}
              className="group inline-flex items-center justify-between gap-2 px-md py-3 rounded-md bg-[var(--term-accent)] text-[var(--term-bg)] text-xsm font-bold shadow-[0_2px_0_var(--term-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-surface)] transition-all"
            >
              <span className="leading-tight break-keep text-left">{content.primaryCta}</span>
              <ArrowRightIcon className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={content.secondaryHref}
              className="group inline-flex items-center justify-between gap-2 px-md py-3 rounded-md border border-[var(--term-border)] bg-transparent text-[var(--term-fg)] hover:border-[var(--term-accent)] hover:text-[var(--term-accent)] text-xsm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-surface)] transition-all"
            >
              <span className="leading-tight break-keep text-left">{content.secondaryCta}</span>
              <RefreshIcon className="h-4 w-4 shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

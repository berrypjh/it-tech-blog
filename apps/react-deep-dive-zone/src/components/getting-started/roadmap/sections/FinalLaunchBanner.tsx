import Link from 'next/link';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { RoadmapContent } from '../content';
import { ArrowRightIcon, FlagIcon, RefreshIcon, SparkIcon } from '../icons';

type Props = { content: RoadmapContent['finale'] };

/** Rocket launching illustration — composed from SVG primitives. */
const RocketDecoration = () => (
  <div
    className="relative h-44 sm:h-48 lg:h-56 rounded-md border border-sky-900/50 bg-slate-950/60 overflow-hidden"
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 200 200"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="rocket-grid" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
          <path
            d="M14 0H0v14"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-cyan-500/15"
          />
        </pattern>
        <linearGradient id="rocket-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="currentColor" className="text-slate-100" />
          <stop offset="1" stopColor="currentColor" className="text-cyan-200" />
        </linearGradient>
        <linearGradient id="rocket-flame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="currentColor" className="text-amber-300" />
          <stop offset="1" stopColor="currentColor" className="text-orange-500/0" />
        </linearGradient>
        <radialGradient id="rocket-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="currentColor" className="text-cyan-400/60" />
          <stop offset="1" stopColor="currentColor" className="text-cyan-400/0" />
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill="url(#rocket-grid)" />

      {/* glow behind rocket */}
      <circle cx="100" cy="90" r="80" fill="url(#rocket-glow)" />

      {/* stars / sparks */}
      <g className="text-cyan-300" fill="currentColor">
        <circle cx="30" cy="30" r="1.5" />
        <circle cx="40" cy="50" r="1" />
        <circle cx="170" cy="35" r="2" />
        <circle cx="180" cy="60" r="1.2" />
        <circle cx="160" cy="20" r="1" />
        <circle cx="22" cy="78" r="1.4" />
        <circle cx="178" cy="100" r="1.3" />
      </g>

      {/* clouds (gray) */}
      <g className="text-slate-700" fill="currentColor">
        <ellipse cx="40" cy="160" rx="22" ry="6" />
        <ellipse cx="155" cy="170" rx="28" ry="7" />
      </g>

      {/* flame */}
      <path
        d="M88 130 Q100 170 112 130 Q108 150 100 162 Q92 150 88 130 Z"
        fill="url(#rocket-flame)"
      />
      <path
        d="M93 130 Q100 148 107 130 Q103 142 100 152 Q97 142 93 130 Z"
        fill="currentColor"
        className="text-amber-200"
      />

      {/* rocket body */}
      <g transform="translate(0, -4)">
        {/* nose */}
        <path
          d="M100 30 L116 80 L84 80 Z"
          fill="url(#rocket-body)"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-sky-300"
        />
        {/* body */}
        <rect
          x="84"
          y="80"
          width="32"
          height="55"
          rx="4"
          fill="url(#rocket-body)"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-sky-300"
        />
        {/* window */}
        <circle cx="100" cy="100" r="7" fill="currentColor" className="text-slate-950" />
        <circle
          cx="100"
          cy="100"
          r="7"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-cyan-300"
        />
        <circle cx="100" cy="100" r="3.5" fill="currentColor" className="text-cyan-400" />
        {/* fins */}
        <path
          d="M84 110 L70 135 L84 130 Z"
          fill="currentColor"
          className="text-cyan-500"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M116 110 L130 135 L116 130 Z"
          fill="currentColor"
          className="text-cyan-500"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        {/* body line */}
        <line
          x1="92"
          y1="115"
          x2="108"
          y2="115"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-sky-400"
        />
      </g>

      {/* trail */}
      <path
        d="M100 175 Q100 188 95 195 M100 175 Q100 188 105 195"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 3"
        strokeLinecap="round"
        className="text-cyan-400/60"
      />
    </svg>
  </div>
);

export const FinalLaunchBanner = ({ content }: Props) => {
  return (
    <section id="section-finale" aria-labelledby="heading-finale" className="space-y-md">
      <SectionHeader
        id="finale"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FlagIcon className="h-5 w-5" />}
      />

      <div className="rounded-lg border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950 text-white p-md sm:p-lg lg:p-xl shadow-[0_6px_0_var(--term-border)] overflow-hidden relative">
        {/* 배경 spark 장식 */}
        <span aria-hidden="true" className="absolute right-3 top-3 text-cyan-300/70">
          <SparkIcon className="h-5 w-5" />
        </span>
        <span aria-hidden="true" className="absolute left-4 bottom-4 text-cyan-300/40">
          <SparkIcon className="h-3 w-3" />
        </span>

        <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,_0.4fr)_minmax(0,_1fr)_auto] gap-md lg:gap-lg items-center">
          {/* 좌측: rocket */}
          <RocketDecoration />

          {/* 중앙: copy */}
          <div className="flex flex-col gap-1.5 min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-cyan-300 font-bold inline-flex items-center gap-1.5">
              <SparkIcon className="h-3 w-3" />
              ready to launch
            </p>
            <h3
              id="heading-finale-title"
              className="text-lg sm:text-xl lg:text-xxl font-bold tracking-tight leading-snug break-keep"
            >
              <span className="block text-white">{content.copyLine1}</span>
              <span className="block bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                {content.copyLine2}
              </span>
              <span className="block bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                {content.copyLine3}
              </span>
            </h3>
          </div>

          {/* 우측: 버튼 2개 (vertical stack) */}
          <div className="flex flex-col gap-sm lg:w-[260px]">
            <Link
              href={content.primaryHref}
              className="group inline-flex items-center justify-between gap-2 px-md py-3 rounded-md bg-sky-500 text-white hover:bg-sky-400 text-xsm font-bold shadow-[0_2px_0_var(--term-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition-all"
            >
              <span className="leading-tight break-keep text-left">{content.primaryCta}</span>
              <ArrowRightIcon className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={content.secondaryHref}
              className="group inline-flex items-center justify-between gap-2 px-md py-3 rounded-md border border-cyan-400/40 bg-transparent text-cyan-200 hover:bg-cyan-400/10 hover:border-cyan-300 text-xsm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition-all"
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

import Link from 'next/link';

import { ArrowRight, RefreshCw, Sparkle } from 'lucide-react';

export type FinaleBannerContent = {
  /** 챕터 진행도 라벨 (예: '2/15 챕터 완료'). */
  progressLabel: string;
  copyLine1: string;
  copyLine2: string;
  copyLine3: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
};

type Props = { content: FinaleBannerContent };

/** Rocket launching illustration — accent-tinted, transparent background. */
const RocketDecoration = () => (
  <div className="hidden lg:block relative lg:h-56 overflow-hidden" aria-hidden="true">
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

/** 모바일·태블릿용 가로형 로켓 — 전체 폭 strip을 우상향 비행 구도로 채운다(세로 로켓 크롭 방지). */
const MobileRocketDecoration = () => (
  <div className="lg:hidden relative h-28 overflow-hidden" aria-hidden="true">
    <svg
      viewBox="0 0 320 104"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* stars / sparks */}
      <g className="text-[var(--term-accent)]" fill="currentColor" opacity="0.5">
        <circle cx="40" cy="20" r="1.6" />
        <circle cx="80" cy="40" r="1.1" />
        <circle cx="150" cy="16" r="2" />
        <circle cx="280" cy="24" r="1.4" />
        <circle cx="300" cy="60" r="1.2" />
        <circle cx="250" cy="78" r="1.3" />
      </g>

      {/* 좌하단 → 로켓으로 이어지는 점선 궤적 */}
      <path
        d="M30 92 Q90 84 150 64"
        className="text-[var(--term-accent)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 4"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* 우상향(38deg)으로 비행하는 로켓 */}
      <g transform="translate(196, 52) rotate(38)">
        {/* flame */}
        <path
          d="M-10 40 Q0 66 10 40 Q6 54 0 60 Q-6 54 -10 40 Z"
          className="text-[var(--term-accent)]"
          fill="currentColor"
          opacity="0.8"
        />
        {/* body fill (light/dark via term-bg) */}
        <path d="M0 -42 L15 -2 L-15 -2 Z" className="text-[var(--term-bg)]" fill="currentColor" />
        <rect
          x="-15"
          y="-2"
          width="30"
          height="44"
          rx="4"
          className="text-[var(--term-bg)]"
          fill="currentColor"
        />
        {/* body outline */}
        <path
          d="M0 -42 L15 -2 L-15 -2 Z"
          className="text-[var(--term-accent)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <rect
          x="-15"
          y="-2"
          width="30"
          height="44"
          rx="4"
          className="text-[var(--term-accent)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        {/* window */}
        <circle
          cx="0"
          cy="14"
          r="6.5"
          className="text-[var(--term-accent)]"
          fill="currentColor"
          opacity="0.25"
        />
        <circle
          cx="0"
          cy="14"
          r="6.5"
          className="text-[var(--term-accent)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        {/* fins */}
        <path
          d="M-15 24 L-28 44 L-15 38 Z"
          className="text-[var(--term-accent)]"
          fill="currentColor"
        />
        <path
          d="M15 24 L28 44 L15 38 Z"
          className="text-[var(--term-accent)]"
          fill="currentColor"
        />
      </g>
    </svg>
  </div>
);

/** 챕터 마지막 페이지 공용 졸업 배너 (로켓 + 다음 챕터/다시 보기 CTA). */
export const FinalLaunchBanner = ({ content }: Props) => {
  return (
    <section id="section-finale" aria-labelledby="heading-finale-title" className="space-y-md">
      <div className="rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)] p-md sm:p-lg lg:p-xl shadow-[0_2px_0_var(--term-border)] overflow-hidden relative">
        {/* 배경 spark 장식 */}
        <span aria-hidden="true" className="absolute right-3 top-3 text-[var(--term-accent)]">
          <Sparkle className="h-5 w-5" />
        </span>
        <span aria-hidden="true" className="absolute left-4 bottom-4 text-[var(--term-dim)]">
          <Sparkle className="h-3 w-3" />
        </span>

        <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,_0.4fr)_minmax(0,_1fr)_auto] gap-md lg:gap-lg items-center">
          {/* 좌측: rocket — 모바일·태블릿은 가로형, lg부터 세로형 */}
          <MobileRocketDecoration />
          <RocketDecoration />

          {/* 중앙: copy */}
          <div className="flex flex-col gap-1.5 min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-[var(--term-accent)] font-bold inline-flex items-center gap-1.5">
              <Sparkle className="h-3 w-3" />
              {content.progressLabel}
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
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={content.secondaryHref}
              className="group inline-flex items-center justify-between gap-2 px-md py-3 rounded-md border border-[var(--term-border)] bg-transparent text-[var(--term-fg)] hover:border-[var(--term-accent)] hover:text-[var(--term-accent)] text-xsm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-surface)] transition-all"
            >
              <span className="leading-tight break-keep text-left">{content.secondaryCta}</span>
              <RefreshCw className="h-4 w-4 shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

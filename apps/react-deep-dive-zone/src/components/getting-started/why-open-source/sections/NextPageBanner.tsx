import Link from 'next/link';

import { SectionHeader } from '../../_shared/SectionHeader';
import type { WhyOpenSourceContent } from '../content';
import { ArrowRightIcon, BookIcon, SparkIcon } from '../icons';

type Props = { content: WhyOpenSourceContent['nextStep'] };

/** 열린 책 + cyan spark — navy 배경 대비 */
const OpenBookDecoration = () => (
  <div
    className="relative h-32 sm:h-36 lg:h-40 rounded-md border border-sky-900/50 bg-slate-900/40 overflow-hidden"
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 200 140"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id="next-book-grid"
          x="0"
          y="0"
          width="14"
          height="14"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M14 0H0v14"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-cyan-500/15"
          />
        </pattern>
        <linearGradient id="open-page-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="currentColor" className="text-sky-700" />
          <stop offset="1" stopColor="currentColor" className="text-cyan-600" />
        </linearGradient>
      </defs>
      <rect width="200" height="140" fill="url(#next-book-grid)" />

      {/* 열린 책 */}
      <g transform="translate(40, 30)">
        <path
          d="M0 70 L0 14 Q60 -6 60 14 L60 70 Q30 56 0 70 Z"
          fill="url(#open-page-grad)"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-sky-400"
        />
        <path
          d="M60 70 L60 14 Q120 -6 120 14 L120 70 Q90 56 60 70 Z"
          fill="url(#open-page-grad)"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-cyan-400"
        />
        <line
          x1="60"
          y1="14"
          x2="60"
          y2="70"
          stroke="currentColor"
          strokeWidth="1"
          className="text-cyan-300"
        />
        <line
          x1="12"
          y1="28"
          x2="48"
          y2="24"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-sky-200/60"
          strokeLinecap="round"
        />
        <line
          x1="12"
          y1="38"
          x2="44"
          y2="34"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-sky-200/40"
          strokeLinecap="round"
        />
        <line
          x1="72"
          y1="24"
          x2="108"
          y2="28"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-cyan-200/60"
          strokeLinecap="round"
        />
        <line
          x1="72"
          y1="34"
          x2="104"
          y2="38"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-cyan-200/40"
          strokeLinecap="round"
        />
      </g>

      {/* cyan / mint spark */}
      <g className="text-cyan-300" fill="currentColor">
        <circle cx="170" cy="22" r="1.8" />
        <circle cx="182" cy="14" r="2.4" />
        <circle cx="160" cy="16" r="1.3" />
        <circle cx="22" cy="118" r="1.4" />
        <circle cx="36" cy="124" r="1" />
      </g>
    </svg>
  </div>
);

export const NextPageBanner = ({ content }: Props) => {
  return (
    <section id="section-next" aria-labelledby="heading-next" className="space-y-md">
      <SectionHeader
        id="next"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SparkIcon className="h-5 w-5" />}
      />

      <Link
        href={content.href}
        className="group block rounded-lg border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950 text-white p-md sm:p-lg lg:p-xl shadow-[0_4px_0_var(--term-border)] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)] transition-all hover:shadow-[0_6px_0_var(--term-border)]"
      >
        <div className="relative">
          {/* 배경 spark 장식 */}
          <span aria-hidden="true" className="absolute right-2 top-2 text-cyan-300/60">
            <SparkIcon className="h-4 w-4" />
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.42fr)_minmax(0,_1fr)_auto] gap-md lg:gap-lg items-center">
            <OpenBookDecoration />

            <div className="flex flex-col gap-1.5 min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-cyan-300 font-bold inline-flex items-center gap-1.5">
                <BookIcon className="h-3.5 w-3.5" />
                <SparkIcon className="h-3 w-3" />
                {content.bannerEyebrow}
              </p>
              <h3
                id="heading-next-title"
                className="text-md sm:text-lg lg:text-xl font-bold tracking-tight text-white break-keep leading-snug"
              >
                {content.nextTitle}
              </h3>
              <p className="text-xsm text-slate-300 leading-relaxed break-keep">
                {content.description}
              </p>
            </div>

            <span className="inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md bg-sky-400 text-slate-900 text-xsm font-bold transition-transform group-hover:translate-x-0.5 self-stretch lg:self-auto shadow-[0_2px_0_var(--term-border)]">
              {content.cta}
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
};

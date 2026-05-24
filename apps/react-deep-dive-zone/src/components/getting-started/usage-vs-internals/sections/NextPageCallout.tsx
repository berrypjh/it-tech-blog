import Link from 'next/link';

import { SectionHeader } from '../../_shared/SectionHeader';
import { ArrowRightIcon } from '../../why-source/icons';
import type { UsageVsInternalsContent } from '../content';
import { BookIcon, SparkleIcon } from '../icons';

type Props = { content: UsageVsInternalsContent['nextStep'] };

/** 책 + 학습 카드 + 민트 반짝임 장식 */
const BookDecoration = () => (
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
            className="text-[var(--term-border)]"
          />
        </pattern>
        <linearGradient id="page-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="currentColor" className="text-sky-100 dark:text-sky-900" />
          <stop offset="1" stopColor="currentColor" className="text-cyan-100 dark:text-cyan-900" />
        </linearGradient>
      </defs>
      <rect width="200" height="140" fill="url(#next-book-grid)" />

      {/* 열린 책 */}
      <g transform="translate(40, 30)">
        <path
          d="M0 70 L0 14 Q60 -6 60 14 L60 70 Q30 56 0 70 Z"
          fill="url(#page-gradient)"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-sky-400 dark:text-sky-600"
        />
        <path
          d="M60 70 L60 14 Q120 -6 120 14 L120 70 Q90 56 60 70 Z"
          fill="url(#page-gradient)"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-sky-400 dark:text-sky-600"
        />
        <line
          x1="60"
          y1="14"
          x2="60"
          y2="70"
          stroke="currentColor"
          strokeWidth="1"
          className="text-sky-500 dark:text-sky-500"
        />
        {/* 텍스트 라인들 */}
        <line
          x1="12"
          y1="28"
          x2="48"
          y2="24"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-sky-600/60 dark:text-sky-300/60"
          strokeLinecap="round"
        />
        <line
          x1="12"
          y1="38"
          x2="44"
          y2="34"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-sky-600/40 dark:text-sky-300/40"
          strokeLinecap="round"
        />
        <line
          x1="72"
          y1="24"
          x2="108"
          y2="28"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-sky-600/60 dark:text-sky-300/60"
          strokeLinecap="round"
        />
        <line
          x1="72"
          y1="34"
          x2="104"
          y2="38"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-sky-600/40 dark:text-sky-300/40"
          strokeLinecap="round"
        />
      </g>

      {/* 민트 반짝임 */}
      <g className="text-teal-400 dark:text-teal-300" fill="currentColor">
        <circle cx="170" cy="22" r="1.6" />
        <circle cx="180" cy="14" r="2.2" />
        <circle cx="160" cy="14" r="1.2" />
      </g>
    </svg>
  </div>
);

export const NextPageCallout = ({ content }: Props) => {
  return (
    <section id="section-next" aria-labelledby="heading-next" className="space-y-md">
      <SectionHeader
        id="next"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SparkleIcon className="h-5 w-5" />}
      />

      <Link
        href={content.href}
        className="group block rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg transition-all hover:border-[var(--term-accent)] hover:shadow-[0_2px_0_var(--term-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.4fr)_minmax(0,_1fr)_auto] gap-md lg:gap-lg items-center">
          <BookDecoration />

          <div className="flex flex-col gap-1 min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-sky-600 dark:text-sky-300 font-bold inline-flex items-center gap-1.5">
              <BookIcon className="h-3.5 w-3.5" />
              <SparkleIcon className="h-3 w-3 text-teal-500 dark:text-teal-300" />
              {content.bannerEyebrow}
            </p>
            <h3
              id="heading-next-title"
              className="text-md sm:text-lg lg:text-xl font-bold tracking-tight text-[var(--term-fg)] break-keep"
            >
              {content.nextTitle}
            </h3>
            <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
              {content.description}
            </p>
          </div>

          <span className="inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900 text-xsm font-bold transition-transform group-hover:translate-x-0.5 self-stretch lg:self-auto shadow-[0_2px_0_var(--term-border)]">
            {content.cta}
            <ArrowRightIcon className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </section>
  );
};

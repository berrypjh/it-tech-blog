import { cn } from '@it-tech-blog/utils';

import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { VersionCard } from '../content';
import { ArrowUpIcon } from '../icons';

type Props = {
  versions: VersionCard[];
  axisTop: string;
  axisBottom: string;
};

type VersionTone = {
  cardBg: string;
  cardBorder: string;
  versionText: string;
  yearText: string;
  highlightText: string;
};

/** 아래(오래된 버전) → 위(최신)로 갈수록 밝아지는 버전 타임라인. */
const tones: VersionTone[] = [
  {
    // React 16 — sky
    cardBg: 'bg-sky-50 dark:bg-sky-950/40',
    cardBorder: 'border-sky-200/80 dark:border-sky-800/60',
    versionText: 'text-sky-700 dark:text-sky-200',
    yearText: 'text-sky-500 dark:text-sky-400',
    highlightText: 'text-sky-800 dark:text-sky-100',
  },
  {
    // React 18 — blue
    cardBg: 'bg-blue-50 dark:bg-blue-950/40',
    cardBorder: 'border-blue-200/80 dark:border-blue-800/60',
    versionText: 'text-blue-700 dark:text-blue-200',
    yearText: 'text-blue-500 dark:text-blue-400',
    highlightText: 'text-blue-800 dark:text-blue-100',
  },
  {
    // React 19 — indigo
    cardBg: 'bg-indigo-50 dark:bg-indigo-950/40',
    cardBorder: 'border-indigo-200/80 dark:border-indigo-800/60',
    versionText: 'text-indigo-700 dark:text-indigo-200',
    yearText: 'text-indigo-500 dark:text-indigo-400',
    highlightText: 'text-indigo-800 dark:text-indigo-100',
  },
  {
    // React 19.2 — teal/mint 강조 (현재 기준)
    cardBg: 'bg-teal-50 dark:bg-teal-950/40',
    cardBorder: 'border-teal-300 dark:border-teal-600',
    versionText: 'text-teal-700 dark:text-teal-200',
    yearText: 'text-teal-500 dark:text-teal-400',
    highlightText: 'text-teal-800 dark:text-teal-100',
  },
];

export const VersionStackVisual = ({ versions, axisTop, axisBottom }: Props) => {
  return (
    <div
      className={cn(
        'relative w-full',
        'rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)]',
        'p-md sm:p-lg overflow-hidden',
      )}
    >
      {/* 옅은 grad 배경 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-sky-50/60 via-transparent to-teal-50/40 dark:from-sky-950/30 dark:to-teal-950/20 pointer-events-none"
      />

      {/* 미세한 grid pattern */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="hero-grid" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <path
              d="M22 0H0v22"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-[var(--term-border)]"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* 상단 라벨 + 화살표 (현재) */}
      <div className="relative flex items-center justify-between mb-md">
        <TerminalBadge dotClassName="bg-teal-500">version timeline</TerminalBadge>
        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-teal-600 dark:text-teal-300">
          <ArrowUpIcon className="h-3 w-3" />
          {axisTop}
        </span>
      </div>

      {/* 버전 카드 스택 — 아래=오래된 버전, 위=최신 */}
      <ol
        className="relative flex flex-col-reverse gap-2 sm:gap-2.5"
        aria-label="React version timeline"
      >
        {versions.map((v, idx) => {
          const t = tones[idx] ?? tones[0];
          const isLatest = idx === versions.length - 1;
          return (
            <li key={v.id}>
              <div
                className={cn(
                  'relative flex items-center justify-between gap-sm min-w-0',
                  'px-md py-2.5 sm:py-3 rounded-md border',
                  t.cardBg,
                  t.cardBorder,
                  'shadow-[0_2px_0_var(--term-border)] transition-all',
                  'hover:translate-y-[-1px] hover:shadow-[0_3px_0_var(--term-border)]',
                  isLatest && 'ring-2 ring-teal-300/60 dark:ring-teal-500/40',
                )}
              >
                <div className="flex flex-col min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span
                      className={cn('text-xsm sm:text-sm font-bold tracking-tight', t.versionText)}
                    >
                      {v.version}
                    </span>
                    <span className={cn('text-[10px] font-mono tabular-nums', t.yearText)}>
                      {v.year}
                    </span>
                  </div>
                  <span
                    className={cn(
                      'text-[11px] sm:text-xsm leading-tight truncate',
                      t.highlightText,
                    )}
                  >
                    {v.highlight}
                  </span>
                </div>
                {isLatest && (
                  <span
                    aria-hidden="true"
                    className="shrink-0 inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900"
                  >
                    NOW
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      {/* 하단 라벨 (시간의 흐름) */}
      <div className="relative mt-md flex items-center justify-between text-[10px] text-[var(--term-muted)]">
        <span className="inline-flex items-center gap-1">
          <span aria-hidden="true" className="block w-3 h-px bg-[var(--term-border)]" />
          {axisBottom}
        </span>
        <span className="inline-flex items-center gap-1">{'//'} evolving</span>
      </div>
    </div>
  );
};

import { cn } from '@it-tech-blog/utils';

import type { RoadmapContent } from '../content';
import { CheckCircleIcon, FlagIcon, FolderOpenIcon, MapPinIcon, PencilIcon } from '../icons';

type Props = { visual: RoadmapContent['hero']['visual'] };

const KEYWORDS = new Set(['function', 'while', 'return', 'null']);

const colorize = (line: string): React.ReactNode => {
  const tokens = line.split(/(\s+|[(){};!=])/);
  return tokens.map((tok, i) => {
    if (!tok) return null;
    if (KEYWORDS.has(tok))
      return (
        <span key={i} className="text-violet-300">
          {tok}
        </span>
      );
    if (/^[A-Z][A-Za-z]*$/.test(tok))
      return (
        <span key={i} className="text-amber-200">
          {tok}
        </span>
      );
    if (/^[a-z_$][\w$]*$/.test(tok))
      return (
        <span key={i} className="text-sky-300">
          {tok}
        </span>
      );
    return (
      <span key={i} className="text-slate-400">
        {tok}
      </span>
    );
  });
};

/**
 * Hero 우측: React 소스코드 탐험 지도.
 * - 좌상단 dark code card
 * - 좌하단 checkpoint card
 * - 우중앙 notes card
 * - 우상단 repository tree card
 * - 카드 사이 teal dotted route path + map pin waypoint
 * - 우상단 끝 flag
 */
export const ExplorationMapVisual = ({ visual }: Props) => {
  return (
    <div
      className={cn(
        'relative w-full',
        'rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)]',
        'p-md sm:p-lg overflow-hidden',
        'min-h-[460px] sm:min-h-[500px] lg:min-h-[540px]',
      )}
    >
      {/* 배경 grad */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-sky-50/70 via-transparent to-teal-50/40 dark:from-sky-950/30 dark:to-teal-950/20 pointer-events-none"
      />
      {/* 미세 grid */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="map-grid" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <path
              d="M22 0H0v22"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-[var(--term-border)]"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#map-grid)" />
      </svg>

      {/* 상단 라벨 */}
      <div className="relative flex items-center justify-between mb-md">
        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[10px] text-[var(--term-muted)]">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500" aria-hidden="true" />
          exploration map
        </span>
        <span className="text-[10px] font-mono text-[var(--term-muted)]">
          {'//'} ready to launch
        </span>
      </div>

      {/* dotted route path SVG */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-12 mx-auto w-full h-[82%] pointer-events-none"
      >
        {/* code (좌상) → checkpoint (좌하) → notes (중하) → repo (우상) → flag (우상끝) */}
        <path
          d="M90 100 C 100 170, 90 210, 90 250
             M90 250 C 130 260, 170 270, 200 280
             M200 280 C 250 250, 290 180, 330 110
             M330 110 C 340 90, 360 75, 370 65"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeDasharray="3 5"
          strokeLinecap="round"
          className="text-teal-400 dark:text-teal-500"
        />
        {/* waypoint pins (3개) */}
        <circle cx="90" cy="180" r="4" className="fill-white dark:fill-slate-900" />
        <circle cx="90" cy="180" r="4" className="stroke-teal-500" strokeWidth="2" fill="none" />
        <circle cx="160" cy="270" r="4" className="fill-white dark:fill-slate-900" />
        <circle cx="160" cy="270" r="4" className="stroke-teal-500" strokeWidth="2" fill="none" />
        <circle cx="280" cy="190" r="4" className="fill-white dark:fill-slate-900" />
        <circle cx="280" cy="190" r="4" className="stroke-teal-500" strokeWidth="2" fill="none" />
      </svg>

      {/* 카드 그리드 */}
      <div className="relative grid grid-cols-12 gap-2 sm:gap-3">
        {/* 좌상: dark code card (살짝 tilt) */}
        <article
          aria-label={visual.codeFile}
          className="col-span-7 sm:col-span-6 rounded-md border border-slate-800 bg-slate-950 overflow-hidden shadow-[0_4px_0_var(--term-border)]"
          style={{ transform: 'rotate(-1.5deg)' }}
        >
          <div className="flex items-center justify-between px-2 py-1.5 border-b border-slate-800">
            <div className="flex items-center gap-1">
              <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-red-400/80" />
              <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-amber-300/80" />
              <span
                aria-hidden="true"
                className="block h-1.5 w-1.5 rounded-full bg-emerald-400/80"
              />
            </div>
            <span className="text-[9px] font-mono text-slate-300 truncate ml-2">
              {visual.codeFile}
            </span>
          </div>
          <pre className="px-2 py-1.5 text-[9.5px] sm:text-[10px] leading-[1.55] font-mono text-slate-100 whitespace-pre overflow-hidden">
            {visual.codeLines.map((line, i) => (
              <div key={i} className="block">
                {colorize(line)}
              </div>
            ))}
          </pre>
        </article>

        {/* 우상: repo tree */}
        <article
          aria-label={visual.repoTitle}
          className="col-span-5 sm:col-span-6 rounded-md border border-[var(--term-border)] bg-white dark:bg-slate-900 p-2 shadow-[0_2px_0_var(--term-border)]"
        >
          <header className="flex items-center gap-1.5 pb-1 mb-1 border-b border-dashed border-[var(--term-border)]">
            <FolderOpenIcon className="h-3 w-3 text-sky-600 dark:text-sky-300" />
            <span className="text-[10px] font-mono font-bold text-[var(--term-fg)] truncate">
              {visual.repoTitle}
            </span>
            <span
              aria-hidden="true"
              className="ml-auto inline-flex items-center justify-center w-4 h-4 rounded bg-amber-400 text-amber-950 dark:bg-amber-300"
            >
              <FlagIcon className="h-2.5 w-2.5" />
            </span>
          </header>
          <ul className="flex flex-col gap-0.5">
            <li className="text-[9.5px] font-mono text-[var(--term-muted)] pl-1">
              <span className="text-[var(--term-dim)]">└─</span> packages/
            </li>
            {visual.repoPackages.map((p, i, arr) => {
              const isLast = i === arr.length - 1;
              return (
                <li
                  key={p.name}
                  className={cn(
                    'flex items-center gap-1 text-[9.5px] font-mono pl-4 py-0.5 rounded',
                    p.active
                      ? 'bg-teal-100 dark:bg-teal-950/60 text-teal-800 dark:text-teal-100 font-bold'
                      : 'text-[var(--term-muted)]',
                  )}
                >
                  <span className="text-[var(--term-dim)]">{isLast ? '└─' : '├─'}</span>
                  <span>{p.name}</span>
                  {p.active && (
                    <span
                      aria-hidden="true"
                      className="ml-auto inline-block w-1.5 h-1.5 rounded-full bg-teal-500"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </article>

        {/* 좌하: checkpoint card */}
        <article
          aria-label={`${visual.checkpointLabel}: ${visual.checkpointSub}`}
          className="col-span-6 sm:col-span-5 col-start-1 rounded-md border border-emerald-200 dark:border-emerald-800/60 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 p-2 shadow-[0_2px_0_var(--term-border)] flex items-center gap-2"
        >
          <span
            aria-hidden="true"
            className="inline-flex shrink-0 items-center justify-center w-7 h-7 rounded-full bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900"
          >
            <CheckCircleIcon className="h-4 w-4" />
          </span>
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-700 dark:text-emerald-200">
              {visual.checkpointLabel}
            </span>
            <span className="text-xsm font-bold text-emerald-900 dark:text-emerald-100 truncate">
              {visual.checkpointSub}
            </span>
          </div>
        </article>

        {/* 우중앙: notes card */}
        <article
          aria-label={visual.notesTitle}
          className="col-span-6 sm:col-span-7 col-start-7 sm:col-start-6 rounded-md border border-[var(--term-border)] bg-white dark:bg-slate-900 p-2 shadow-[0_2px_0_var(--term-border)]"
          style={{ transform: 'rotate(0.8deg)' }}
        >
          <header className="flex items-center gap-1.5 mb-1.5">
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-5 h-5 rounded bg-violet-100 text-violet-600 dark:bg-violet-950/60 dark:text-violet-300"
            >
              <PencilIcon className="h-2.5 w-2.5" />
            </span>
            <div className="flex flex-col leading-tight min-w-0">
              <span className="text-[10px] font-bold text-[var(--term-fg)]">
                {visual.notesTitle}
              </span>
              <span className="text-[9px] text-[var(--term-muted)] truncate">
                {visual.notesSub}
              </span>
            </div>
          </header>
          <div className="flex flex-col gap-1">
            <span
              aria-hidden="true"
              className="block h-1 w-full rounded-full bg-[var(--term-border)]"
            />
            <span
              aria-hidden="true"
              className="block h-1 w-[85%] rounded-full bg-[var(--term-border)]"
            />
            <span
              aria-hidden="true"
              className="block h-1 w-[70%] rounded-full bg-[var(--term-border)]"
            />
          </div>
        </article>
      </div>

      {/* 우상단 flag (절대 위치) */}
      <span
        aria-hidden="true"
        className="absolute top-12 right-md sm:right-lg inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-400 text-amber-950 dark:bg-amber-300 dark:text-amber-950 text-[10px] font-bold shadow-[0_2px_0_var(--term-border)] z-10"
      >
        <FlagIcon className="h-3 w-3" />
        {visual.flagLabel}
      </span>

      {/* 좌측 waypoint pin 장식 (절대 위치) */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 bottom-10 text-teal-500"
      >
        <MapPinIcon className="h-4 w-4" />
      </span>

      <p className="absolute bottom-2 inset-x-md sm:inset-x-lg text-center text-[10px] text-[var(--term-muted)]">
        {'//'} checkpoint → notes → real repository
      </p>
    </div>
  );
};

import { cn } from '@it-tech-blog/utils';

import { HeroDiagramShell } from '../../../shared/HeroDiagramShell';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { RoadmapContent } from '../content';
import { CheckCircleIcon, FlagIcon, FolderOpenIcon, PencilIcon } from '../icons';

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
 * 반응형 카드 그리드 — 모바일 1열, sm+ 2x2 (code / repo / checkpoint / notes).
 */
export const ExplorationMapVisual = ({ visual }: Props) => {
  return (
    <HeroDiagramShell a11yLabel="React 소스코드 탐험 지도: 코드, 저장소, 체크포인트, 노트 카드를 격자로 배치">
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
        <TerminalBadge dotClassName="bg-teal-500">exploration map</TerminalBadge>
        <span className="text-[10px] font-mono text-[var(--term-muted)]">
          {'//'} ready to launch
        </span>
      </div>

      {/* 카드 그리드 — 모바일 1열, sm+ 2x2 */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 items-stretch">
        {/* code card */}
        <article
          aria-label={visual.codeFile}
          className="rounded-md border border-slate-800 bg-slate-950 overflow-hidden shadow-[0_2px_0_var(--term-border)] min-w-0"
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
          <pre className="px-2 py-1.5 text-[9.5px] sm:text-[10px] leading-[1.55] font-mono text-slate-100 whitespace-pre overflow-x-auto">
            {visual.codeLines.map((line, i) => (
              <div key={i} className="block">
                {colorize(line)}
              </div>
            ))}
          </pre>
        </article>

        {/* repo tree */}
        <article
          aria-label={visual.repoTitle}
          className="rounded-md border border-[var(--term-border)] bg-white dark:bg-slate-900 p-2 shadow-[0_2px_0_var(--term-border)] min-w-0"
        >
          <header className="flex items-center gap-1.5 pb-1 mb-1 border-b border-dashed border-[var(--term-border)]">
            <FolderOpenIcon className="h-3 w-3 shrink-0 text-sky-600 dark:text-sky-300" />
            <span className="text-[10px] font-mono font-bold text-[var(--term-fg)] truncate">
              {visual.repoTitle}
            </span>
            <span
              aria-hidden="true"
              className="ml-auto inline-flex shrink-0 items-center justify-center w-4 h-4 rounded bg-amber-400 text-amber-950 dark:bg-amber-300"
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
                  <span className="truncate">{p.name}</span>
                  {p.active && (
                    <span
                      aria-hidden="true"
                      className="ml-auto inline-block w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </article>

        {/* checkpoint card */}
        <article
          aria-label={`${visual.checkpointLabel}: ${visual.checkpointSub}`}
          className="rounded-md border border-emerald-200 dark:border-emerald-800/60 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 p-2 shadow-[0_2px_0_var(--term-border)] flex items-center gap-2 min-w-0"
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

        {/* notes card */}
        <article
          aria-label={visual.notesTitle}
          className="rounded-md border border-[var(--term-border)] bg-white dark:bg-slate-900 p-2 shadow-[0_2px_0_var(--term-border)] min-w-0"
        >
          <header className="flex items-center gap-1.5 mb-1.5">
            <span
              aria-hidden="true"
              className="inline-flex shrink-0 items-center justify-center w-5 h-5 rounded bg-violet-100 text-violet-600 dark:bg-violet-950/60 dark:text-violet-300"
            >
              <PencilIcon className="h-2.5 w-2.5" />
            </span>
            <div className="flex flex-col leading-tight min-w-0">
              <span className="text-[10px] font-bold text-[var(--term-fg)] truncate">
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

      <p className="relative mt-md text-center text-[10px] text-[var(--term-muted)]">
        {'//'} code → checkpoint → notes → repository
      </p>
    </HeroDiagramShell>
  );
};

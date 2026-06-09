import { cn } from '@it-tech-blog/utils';

import { HeroDiagramShell } from '../../../shared/HeroDiagramShell';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { WhyOpenSourceContent } from '../content';
import { CheckCircleIcon, GitBranchIcon, GitCommitIcon, GithubIcon } from '../icons';

type Props = { diagram: WhyOpenSourceContent['hero']['diagram'] };

/**
 * Hero 우측: GitHub 중심에서 4개 자료(코드/커밋/패키지/상태)가
 * pale-blue dotted connector로 연결되는 학습 맵.
 *
 * 12-col CSS grid 위에 panel을 절대 좌표 비슷한 콜럼 span으로 배치하고,
 * 한 장의 SVG에서 connector를 그려 panel center → GitHub center로 잇는다.
 */
export const GitHubConnectedDiagram = ({ diagram }: Props) => {
  return (
    <HeroDiagramShell
      a11yLabel="GitHub을 중심으로 코드·커밋·패키지·상태 자료가 점선으로 연결되는 학습 맵"
      className="min-h-[460px] sm:min-h-[520px] lg:min-h-[540px]"
    >
      {/* 배경 grid */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="hub-grid" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <path
              d="M22 0H0v22"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-[var(--term-border)]"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hub-grid)" />
      </svg>

      {/* 상단 라벨 */}
      <div className="relative flex items-center justify-between mb-md">
        <TerminalBadge dotClassName="bg-sky-500">learning map</TerminalBadge>
        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[var(--term-muted)]">
          {'//'} hub & spokes
        </span>
      </div>

      {/* dotted connector SVG (panel ↔ hub) — 절대 위치 */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-12 mx-auto w-full h-[78%] pointer-events-none"
      >
        {/* 좌상 code panel ↔ hub */}
        <path
          d="M85 110 C 130 130, 170 170, 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeDasharray="3 5"
          strokeLinecap="round"
          className="text-sky-300 dark:text-sky-700"
        />
        {/* 우상 commit panel ↔ hub */}
        <path
          d="M315 110 C 270 130, 230 170, 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeDasharray="3 5"
          strokeLinecap="round"
          className="text-sky-300 dark:text-sky-700"
        />
        {/* 좌하 packages panel ↔ hub */}
        <path
          d="M95 300 C 140 270, 170 230, 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeDasharray="3 5"
          strokeLinecap="round"
          className="text-sky-300 dark:text-sky-700"
        />
        {/* 우하 status check ↔ hub */}
        <path
          d="M305 300 C 260 270, 230 230, 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeDasharray="3 5"
          strokeLinecap="round"
          className="text-teal-400 dark:text-teal-500"
        />
      </svg>

      {/* 패널 그리드 — 12 col */}
      <div className="relative grid grid-cols-12 grid-rows-[auto_auto_auto] gap-2.5 sm:gap-3">
        {/* 좌상: code panel */}
        <article className="col-span-6 sm:col-span-5 row-start-1 rounded-md border border-slate-800 bg-slate-950 overflow-hidden shadow-[0_2px_0_var(--term-border)]">
          <div className="flex items-center justify-between px-2 py-1 border-b border-slate-800">
            <div className="flex items-center gap-1">
              <span className="block h-1.5 w-1.5 rounded-full bg-red-400/80" />
              <span className="block h-1.5 w-1.5 rounded-full bg-amber-300/80" />
              <span className="block h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="text-[9px] font-mono text-slate-400 uppercase">js</span>
          </div>
          <pre className="px-2 py-1.5 text-[9.5px] sm:text-[10px] leading-[1.45] font-mono text-slate-100 whitespace-pre overflow-hidden">
            {colorizePseudo(diagram.codeMock)}
          </pre>
        </article>

        {/* 우상: commit panel */}
        <article
          aria-label="commits"
          className="col-span-6 sm:col-start-8 sm:col-span-5 row-start-1 rounded-md border border-[var(--term-border)] bg-white dark:bg-slate-900 p-2 shadow-[0_2px_0_var(--term-border)]"
        >
          <header className="flex items-center justify-between mb-1">
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-violet-700 dark:text-violet-200">
              <GitBranchIcon className="h-2.5 w-2.5" />
              {diagram.commitBranch}
            </span>
            <span className="text-[9px] text-[var(--term-dim)]">history</span>
          </header>
          <ol className="relative pl-3 flex flex-col gap-1.5">
            <span
              aria-hidden="true"
              className="absolute left-1 top-1 bottom-1 w-px bg-violet-200 dark:bg-violet-800/60"
            />
            {diagram.commits.map((c) => (
              <li key={c.sha} className="relative flex flex-col">
                <span
                  aria-hidden="true"
                  className="absolute -left-2 top-0.5 inline-block w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400 ring-2 ring-white dark:ring-slate-900"
                />
                <code className="text-[9px] font-mono text-violet-700 dark:text-violet-300 leading-tight">
                  {c.sha}
                </code>
                <span className="text-[9.5px] text-[var(--term-muted)] truncate leading-tight">
                  {c.message}
                </span>
              </li>
            ))}
          </ol>
        </article>

        {/* 중앙: GitHub hub card (가운데 row, 전체 폭) */}
        <div className="col-span-12 row-start-2 flex items-center justify-center py-1">
          <div
            className={cn(
              'relative inline-flex flex-col items-center justify-center gap-1',
              'rounded-full border-2 border-[var(--term-fg)] bg-white dark:bg-slate-900',
              'w-[120px] h-[120px] sm:w-[132px] sm:h-[132px]',
              'shadow-[0_4px_0_var(--term-border)]',
            )}
          >
            <GithubIcon className="h-12 w-12 sm:h-14 sm:w-14 text-[var(--term-fg)]" />
            <span className="text-[10px] font-mono font-bold text-[var(--term-fg)] tracking-tight">
              {diagram.centerLabel}
            </span>
            <span className="text-[9px] font-mono text-[var(--term-muted)]">
              {diagram.centerSub}
            </span>
          </div>
        </div>

        {/* 좌하: packages tree panel */}
        <article
          aria-label="packages"
          className="col-span-7 sm:col-span-6 row-start-3 rounded-md border border-sky-200/80 dark:border-sky-800/60 bg-sky-50/60 dark:bg-sky-950/40 p-2 shadow-[0_2px_0_var(--term-border)]"
        >
          <header className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-mono font-bold text-sky-700 dark:text-sky-200">
              packages/
            </span>
            <span className="text-[9px] text-sky-500/70 dark:text-sky-400/70">tree</span>
          </header>
          <pre className="text-[9.5px] sm:text-[10px] leading-[1.45] font-mono text-sky-800 dark:text-sky-200 whitespace-pre">
            {colorizeTree(diagram.packagesMock)}
          </pre>
        </article>

        {/* 우하: status check card */}
        <article
          aria-label={diagram.statusLabel}
          className="col-span-5 sm:col-start-9 sm:col-span-4 row-start-3 self-stretch flex flex-col items-center justify-center gap-1 rounded-md border border-teal-300 dark:border-teal-600 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950/50 dark:to-emerald-950/50 p-2 shadow-[0_2px_0_var(--term-border)]"
        >
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900 shadow-[0_2px_0_var(--term-border)]"
          >
            <CheckCircleIcon className="h-4 w-4" />
          </span>
          <span className="text-[10px] font-bold text-teal-700 dark:text-teal-200 leading-tight text-center">
            {diagram.statusLabel}
          </span>
          <span className="text-[9px] text-[var(--term-muted)] font-mono">
            <GitCommitIcon className="inline-block h-2.5 w-2.5 align-middle mr-0.5" />
            ci ok
          </span>
        </article>
      </div>

      {/* 하단 label */}
      <p className="relative mt-md text-center text-[10px] text-[var(--term-muted)]">
        {'//'} GitHub connects code / commits / packages / checks
      </p>
    </HeroDiagramShell>
  );
};

/** Pseudo code coloring (very small) */
const colorizePseudo = (code: string): React.ReactNode => {
  const lines = code.split('\n');
  return lines.map((line, i) => (
    <div key={i} className="block">
      {tokenizePseudo(line)}
    </div>
  ));
};

const KEYWORDS = new Set(['function', 'const', 'return']);

const tokenizePseudo = (line: string): React.ReactNode => {
  const tokens = line.split(/(\s+|[(){};,])/);
  return tokens.map((tok, i) => {
    if (!tok) return null;
    if (KEYWORDS.has(tok)) {
      return (
        <span key={i} className="text-sky-300">
          {tok}
        </span>
      );
    }
    if (/^[a-z_$][\w$]*$/.test(tok)) {
      return (
        <span key={i} className="text-slate-100">
          {tok}
        </span>
      );
    }
    return (
      <span key={i} className="text-slate-400">
        {tok}
      </span>
    );
  });
};

/** Tree coloring: 'react-reconciler' 라인을 강조 */
const colorizeTree = (mock: string): React.ReactNode => {
  const lines = mock.split('\n');
  return lines.map((line, i) => {
    const isReconciler = line.includes('react-reconciler');
    return (
      <div
        key={i}
        className={cn('block', isReconciler && 'text-sky-900 dark:text-sky-50 font-bold')}
      >
        {line}
      </div>
    );
  });
};

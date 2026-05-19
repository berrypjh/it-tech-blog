import { cn } from '@it-tech-blog/utils';

import type { ReadOrderContent, StairTone } from '../content';
import { FlagIcon } from '../icons';

type Props = { stair: ReadOrderContent['hero']['stair'] };

const toneClasses: Record<StairTone, { bg: string; border: string; text: string; numBg: string }> =
  {
    sky: {
      bg: 'bg-sky-100/80 dark:bg-sky-950/60',
      border: 'border-sky-300 dark:border-sky-700',
      text: 'text-sky-900 dark:text-sky-100',
      numBg: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
    },
    mint: {
      bg: 'bg-emerald-100/80 dark:bg-emerald-950/60',
      border: 'border-emerald-300 dark:border-emerald-700',
      text: 'text-emerald-900 dark:text-emerald-100',
      numBg: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900',
    },
    cyan: {
      bg: 'bg-cyan-100/80 dark:bg-cyan-950/60',
      border: 'border-cyan-300 dark:border-cyan-700',
      text: 'text-cyan-900 dark:text-cyan-100',
      numBg: 'bg-cyan-500 text-white dark:bg-cyan-400 dark:text-slate-900',
    },
    blue: {
      bg: 'bg-blue-100/80 dark:bg-blue-950/60',
      border: 'border-blue-300 dark:border-blue-700',
      text: 'text-blue-900 dark:text-blue-100',
      numBg: 'bg-blue-500 text-white dark:bg-blue-400 dark:text-slate-900',
    },
    indigo: {
      bg: 'bg-indigo-100/80 dark:bg-indigo-950/60',
      border: 'border-indigo-300 dark:border-indigo-700',
      text: 'text-indigo-900 dark:text-indigo-100',
      numBg: 'bg-indigo-500 text-white dark:bg-indigo-400 dark:text-slate-900',
    },
    violet: {
      bg: 'bg-violet-100/80 dark:bg-violet-950/60',
      border: 'border-violet-300 dark:border-violet-700',
      text: 'text-violet-900 dark:text-violet-100',
      numBg: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
    },
  };

/**
 * Hero 우측 시각화: 좌하단 → 우상단으로 올라가는 8단계 계단.
 * 12-row CSS grid 사용 — row 8(최상단)에서 row 1(최하단)으로 계단이 형성.
 * 각 계단은 row를 하나 차지하고, col-start로 우측으로 점진적으로 밀어서 stair-step 모양.
 */
export const StairLearningRoadmap = ({ stair }: Props) => {
  const total = stair.steps.length; // 8

  return (
    <div
      className={cn(
        'relative w-full',
        'rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)]',
        'p-md sm:p-lg overflow-hidden',
        'min-h-[440px] sm:min-h-[480px] lg:min-h-[520px]',
      )}
    >
      {/* 배경 grad */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-tr from-sky-50/70 via-transparent to-indigo-50/40 dark:from-sky-950/30 dark:to-indigo-950/20 pointer-events-none"
      />
      {/* 미세 grid */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="stair-grid" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <path
              d="M22 0H0v22"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-[var(--term-border)]"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#stair-grid)" />
      </svg>

      {/* 상단 라벨 */}
      <div className="relative flex items-center justify-between mb-md">
        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[10px] text-[var(--term-muted)]">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500" aria-hidden="true" />
          {stair.stairTitle}
        </span>
        <span className="text-[10px] font-mono text-[var(--term-muted)]">
          {'//'} ascending difficulty
        </span>
      </div>

      {/* 계단 컨테이너 — 좌측 vertical axis + 계단 */}
      <div className="relative grid grid-cols-[auto_1fr] gap-sm pt-2 pb-8">
        {/* 좌측 axis 라벨 (어려움 top → 쉬움 bottom) */}
        <div className="flex flex-col justify-between text-[10px] font-mono text-[var(--term-muted)] py-1 pr-1">
          <span className="inline-flex items-center gap-1 text-violet-600 dark:text-violet-300 font-bold">
            <span aria-hidden="true">↑</span>
            {stair.hardLabel}
          </span>
          <span
            aria-hidden="true"
            className="flex-1 w-px bg-gradient-to-b from-violet-300 to-sky-300 my-1 ml-1.5 dark:from-violet-700 dark:to-sky-700"
          />
          <span className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 font-bold">
            {stair.easyLabel}
            <span aria-hidden="true">↓</span>
          </span>
        </div>

        {/* 계단 영역 — 8 row grid, 위에서 아래로 step8 → step1 순서로 렌더링하되 콘텐츠는 시각상 우측 상단이 마지막 step */}
        <ol
          className="grid gap-1.5"
          style={{ gridTemplateRows: `repeat(${total}, minmax(34px, 1fr))` }}
        >
          {stair.steps
            .slice()
            .reverse() // 시각상 위쪽이 마지막 step
            .map((step, idx) => {
              const realIdx = total - 1 - idx; // 원래 step index (0~7)
              const t = toneClasses[step.tone];
              // 우측으로 점점 더 들여쓰기 — realIdx가 클수록 우측으로 밀림(왼쪽 padding 증가)
              const leftPct = (realIdx / (total - 1)) * 55; // 0% ~ 55%
              return (
                <li key={step.num} className="relative" style={{ paddingLeft: `${leftPct}%` }}>
                  <article
                    className={cn(
                      'relative flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-md border shadow-[0_2px_0_var(--term-border)] transition-transform',
                      'hover:translate-x-0.5',
                      t.bg,
                      t.border,
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold tabular-nums shrink-0',
                        t.numBg,
                      )}
                    >
                      {step.num}
                    </span>
                    <span
                      className={cn(
                        'text-[11px] sm:text-xsm font-bold tracking-tight truncate',
                        t.text,
                      )}
                    >
                      {step.label}
                    </span>
                    {step.flag && (
                      <span
                        aria-hidden="true"
                        className="ml-auto inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-400 text-amber-950 shadow-[0_1px_0_var(--term-border)] dark:bg-amber-300 dark:text-amber-950"
                      >
                        <FlagIcon className="h-3 w-3" />
                      </span>
                    )}
                  </article>
                </li>
              );
            })}
        </ol>
      </div>

      {/* 하단 보조 라벨 (방향 표시) */}
      <div className="absolute bottom-2 inset-x-md sm:inset-x-lg flex items-center justify-between text-[10px] text-[var(--term-muted)]">
        <span className="inline-flex items-center gap-1">
          <span aria-hidden="true" className="block w-3 h-px bg-[var(--term-border)]" />
          start here
        </span>
        <span className="inline-flex items-center gap-1">
          finish
          <span aria-hidden="true" className="block w-3 h-px bg-[var(--term-border)]" />
        </span>
      </div>
    </div>
  );
};

import { cn } from '@it-tech-blog/utils';

import type { ReadingPerspectiveContent } from '../content';
import { stageTones } from '../tones';

type Props = { rail: ReadingPerspectiveContent['hero']['rail'] };

/**
 * Hero 우측: 6단계 vertical rail.
 * 좌측 세로 line + 각 단계 노드(numbered ring) + 우측 wide stage card.
 * 각 단계마다 tone accent 색이 다름.
 */
export const SixStageVerticalRail = ({ rail }: Props) => {
  return (
    <div
      className={cn(
        'relative w-full',
        'rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)]',
        'p-md sm:p-lg overflow-hidden',
      )}
    >
      {/* 배경 grad */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-sky-50/70 via-transparent to-orange-50/30 dark:from-sky-950/30 dark:to-orange-950/20 pointer-events-none"
      />
      {/* 미세 grid */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="rail-grid" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <path
              d="M22 0H0v22"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-[var(--term-border)]"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#rail-grid)" />
      </svg>

      {/* 상단 라벨 */}
      <div className="relative flex items-center justify-between mb-md">
        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[10px] text-[var(--term-muted)]">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500" aria-hidden="true" />
          {rail.railTitle}
        </span>
        <span className="text-[10px] font-mono text-[var(--term-muted)]">
          {'//'} stage-first reading
        </span>
      </div>

      {/* rail + cards */}
      <ol className="relative pl-8 flex flex-col gap-sm">
        {/* 좌측 vertical rail line */}
        <span
          aria-hidden="true"
          className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-sky-300 via-violet-400 via-emerald-400 to-orange-400 dark:from-sky-700 dark:via-violet-600 dark:via-emerald-500 dark:to-orange-500"
        />

        {rail.stages.map((stage) => {
          const t = stageTones[stage.tone];
          return (
            <li key={stage.id} className="group relative">
              {/* node */}
              <span
                aria-hidden="true"
                className={cn(
                  'absolute -left-[1.65rem] top-md inline-flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold tabular-nums ring-4 ring-[var(--term-bg)]',
                  t.num,
                )}
              >
                {stage.num}
              </span>

              <article
                className={cn(
                  'rounded-md border bg-white dark:bg-slate-900 p-sm sm:p-md transition-all',
                  'hover:-translate-y-px hover:shadow-[0_2px_0_var(--term-border)]',
                  t.border,
                )}
              >
                <div className="flex items-baseline justify-between gap-sm">
                  <h3 className={cn('text-xsm sm:text-sm font-bold tracking-tight', t.text)}>
                    {stage.title}
                  </h3>
                  <span className="text-[10px] font-mono text-[var(--term-dim)] tabular-nums">
                    stage.{stage.num}
                  </span>
                </div>
                <p className="mt-1 text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
                  {stage.description}
                </p>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

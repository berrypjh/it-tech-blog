import { cn } from '@it-tech-blog/utils';

import { HeroDiagramShell } from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { VersionCard } from '../content';
import { ArrowUpIcon } from '../icons';

type Props = {
  versions: VersionCard[];
  axisTop: string;
  axisBottom: string;
};

/** 버전 스택 다이어그램의 위치별 색(아래→위). 표준 toneTokens 참조. */
const toneOrder: ToneKey[] = ['sky', 'blue', 'indigo', 'amber'];

export const VersionStackVisual = ({ versions, axisTop, axisBottom }: Props) => {
  return (
    <HeroDiagramShell a11yLabel="React 16부터 19.2까지 버전이 아래에서 위로 쌓이며 최신 버전일수록 강조되는 타임라인">
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

      <div className="relative flex items-center justify-between mb-md">
        <TerminalBadge dotClassName="bg-[var(--term-accent)]">version timeline</TerminalBadge>
        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[var(--term-accent)]">
          <ArrowUpIcon className="h-3 w-3" />
          {axisTop}
        </span>
      </div>

      <ol
        className="relative flex flex-col-reverse gap-2 sm:gap-2.5"
        aria-label="React version timeline"
      >
        {versions.map((v, idx) => {
          const t = toneTokens[toneOrder[idx] ?? 'sky'];
          const isLatest = idx === versions.length - 1;
          return (
            <li key={v.id}>
              <div
                className={cn(
                  'relative flex items-center justify-between gap-sm min-w-0',
                  'px-md py-2.5 sm:py-3 rounded-md border',
                  t.fill.bg,
                  t.fill.border,
                  'shadow-[0_2px_0_var(--term-border)] transition-all',
                  'hover:translate-y-[-1px] hover:shadow-[0_3px_0_var(--term-border)]',
                  isLatest && 'ring-2 ring-[var(--term-accent)]',
                )}
              >
                <div className="flex flex-col min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className={cn('text-xsm sm:text-sm font-bold tracking-tight', t.text)}>
                      {v.version}
                    </span>
                    <span className={cn('text-[10px] font-mono tabular-nums', t.text)}>
                      {v.year}
                    </span>
                  </div>
                  <span className={cn('text-[11px] sm:text-xsm leading-tight truncate', t.text)}>
                    {v.highlight}
                  </span>
                </div>
                {isLatest && (
                  <span
                    aria-hidden="true"
                    className="shrink-0 inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)]"
                  >
                    NOW
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <div className="relative mt-md flex items-center justify-between text-[10px] text-[var(--term-muted)]">
        <span className="inline-flex items-center gap-1">
          <span aria-hidden="true" className="block w-3 h-px bg-[var(--term-border)]" />
          {axisBottom}
        </span>
        <span className="inline-flex items-center gap-1">{'//'} evolving</span>
      </div>
    </HeroDiagramShell>
  );
};

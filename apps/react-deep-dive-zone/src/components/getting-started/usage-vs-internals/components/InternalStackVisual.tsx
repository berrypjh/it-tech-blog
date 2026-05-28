import { cn } from '@it-tech-blog/utils';

import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { StackLayer } from '../content';
import { AtomIcon } from '../icons';

type Props = { layers: StackLayer[] };

type StackTone = StackLayer['tone'];

const toneClasses: Record<StackTone, { bg: string; border: string; text: string; dot: string }> = {
  sky: {
    bg: 'bg-sky-100/80 dark:bg-sky-950/60',
    border: 'border-sky-300 dark:border-sky-700',
    text: 'text-sky-900 dark:text-sky-100',
    dot: 'bg-sky-500',
  },
  blue: {
    bg: 'bg-blue-100/80 dark:bg-blue-950/60',
    border: 'border-blue-300 dark:border-blue-700',
    text: 'text-blue-900 dark:text-blue-100',
    dot: 'bg-blue-500',
  },
  indigo: {
    bg: 'bg-indigo-100/80 dark:bg-indigo-950/60',
    border: 'border-indigo-300 dark:border-indigo-700',
    text: 'text-indigo-900 dark:text-indigo-100',
    dot: 'bg-indigo-500',
  },
  cyan: {
    bg: 'bg-cyan-100/80 dark:bg-cyan-950/60',
    border: 'border-cyan-300 dark:border-cyan-700',
    text: 'text-cyan-900 dark:text-cyan-100',
    dot: 'bg-cyan-500',
  },
  teal: {
    bg: 'bg-teal-100/80 dark:bg-teal-950/60',
    border: 'border-teal-300 dark:border-teal-700',
    text: 'text-teal-900 dark:text-teal-100',
    dot: 'bg-teal-500',
  },
  emerald: {
    bg: 'bg-emerald-100/80 dark:bg-emerald-950/60',
    border: 'border-emerald-300 dark:border-emerald-700',
    text: 'text-emerald-900 dark:text-emerald-100',
    dot: 'bg-emerald-500',
  },
};

export const InternalStackVisual = ({ layers }: Props) => {
  return (
    <div
      className={cn(
        'relative w-full',
        'rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)]',
        'p-md sm:p-lg overflow-hidden',
      )}
    >
      {/* 옅은 그라데이션 배경 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-sky-50/60 via-transparent to-teal-50/40 dark:from-sky-950/30 dark:to-teal-950/20 pointer-events-none"
      />

      {/* 상단 라벨 + atom 아이콘 */}
      <div className="relative flex items-center justify-between mb-md">
        <TerminalBadge dotClassName="bg-sky-500">internal flow</TerminalBadge>
        <span
          className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-cyan-200 bg-cyan-50 text-cyan-600 dark:border-cyan-800/60 dark:bg-cyan-950/40 dark:text-cyan-300"
          aria-hidden="true"
        >
          <AtomIcon className="h-4 w-4" />
        </span>
      </div>

      {/* 좌우 점선 path (장식) */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
      >
        <line
          x1="6%"
          y1="20%"
          x2="6%"
          y2="92%"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 4"
          className="text-[var(--term-border)]"
        />
        <line
          x1="94%"
          y1="22%"
          x2="94%"
          y2="90%"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 4"
          className="text-[var(--term-border)]"
        />
      </svg>

      {/* 층층이 쌓인 레이어 */}
      <ol className="relative flex flex-col gap-2 sm:gap-2.5" style={{ perspective: '1000px' }}>
        {layers.map((layer, idx) => {
          const t = toneClasses[layer.tone];
          const isLast = idx === layers.length - 1;
          // 위 단계일수록 더 비스듬한 각도 / 작은 폭으로 깊이감 부여
          const tiltDeg = 6 - idx * 1.2;
          const scale = 0.94 + idx * 0.012;
          return (
            <li key={layer.id} className="relative flex flex-col items-stretch">
              <div
                className={cn(
                  'group relative mx-auto w-[88%] sm:w-[90%]',
                  'flex items-center justify-between gap-sm',
                  'px-md py-2.5 sm:py-3',
                  'rounded-md border backdrop-blur-sm',
                  t.bg,
                  t.border,
                  'shadow-[0_2px_0_var(--term-border)] transition-transform',
                  'hover:translate-y-[-1px]',
                )}
                style={{
                  transform: `rotateX(${tiltDeg}deg) scale(${scale})`,
                  transformOrigin: 'center top',
                }}
              >
                {/* 좌측: 점 + 레이블 */}
                <div className="flex items-center gap-sm min-w-0">
                  <span
                    aria-hidden="true"
                    className={cn('inline-block w-2 h-2 rounded-full shrink-0', t.dot)}
                  />
                  <div className="flex flex-col min-w-0">
                    <span className={cn('text-xsm sm:text-sm font-bold leading-tight', t.text)}>
                      {layer.label}
                    </span>
                    {layer.sub && (
                      <span className="text-[10px] font-mono text-[var(--term-muted)] leading-tight truncate">
                        {layer.sub}
                      </span>
                    )}
                  </div>
                </div>

                {/* 우측: 단계 번호 */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'shrink-0 text-[10px] tabular-nums font-mono px-1.5 py-0.5 rounded border',
                    t.border,
                    t.text,
                    'bg-white/50 dark:bg-white/5',
                  )}
                >
                  L{idx + 1}
                </span>
              </div>

              {/* 단계 사이 화살표 */}
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="my-0.5 mx-auto text-[var(--term-dim)] text-xsm leading-none"
                >
                  ↓
                </span>
              )}
            </li>
          );
        })}
      </ol>

      {/* 하단 보조 라벨 */}
      <p className="relative mt-md text-center text-[10px] text-[var(--term-muted)]">
        {'//'} layered processing — top to bottom
      </p>
    </div>
  );
};

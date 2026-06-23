import { cn } from '@it-tech-blog/utils';

import { HeroDiagramShell } from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { toneTokens } from '../../../shared/tones';
import type { StackLayer } from '../content';
import { AtomIcon } from '../icons';

type Props = { layers: StackLayer[] };

export const InternalStackVisual = ({ layers }: Props) => {
  return (
    <HeroDiagramShell a11yLabel="React 내부 동작이 위에서 아래로 층층이 처리되는 흐름을 보여주는 스택 다이어그램">
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
          const t = toneTokens[layer.tone];
          const isLast = idx === layers.length - 1;
          const tiltDeg = 6 - idx * 1.2;
          const scale = 0.94 + idx * 0.012;
          return (
            <li key={layer.id} className="relative flex flex-col items-stretch">
              <div
                className={cn(
                  'group relative mx-auto w-[88%] sm:w-[90%]',
                  'flex items-center justify-between gap-sm',
                  'px-md py-2.5 sm:py-3',
                  'rounded-md border',
                  t.fill.bg,
                  t.fill.border,
                  'shadow-[0_2px_0_var(--term-border)] transition-transform',
                  'hover:translate-y-[-1px]',
                )}
                style={{
                  transform: `rotateX(${tiltDeg}deg) scale(${scale})`,
                  transformOrigin: 'center top',
                }}
              >
                <div className="flex items-center gap-sm min-w-0">
                  <span
                    aria-hidden="true"
                    className={cn('inline-block w-2 h-2 rounded-full shrink-0', t.dot)}
                  />
                  <div className="flex flex-col min-w-0">
                    <span
                      className={cn('text-xsm sm:text-sm font-bold leading-tight', t.fill.text)}
                    >
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
                    t.fill.border,
                    t.fill.text,
                    'bg-white/50 dark:bg-white/5',
                  )}
                >
                  L{idx + 1}
                </span>
              </div>

              {!isLast && (
                <span
                  aria-hidden="true"
                  className="my-0.5 mx-auto text-[var(--term-accent)] text-xsm leading-none"
                >
                  ↓
                </span>
              )}
            </li>
          );
        })}
      </ol>

      <p className="relative mt-md text-center text-[10px] text-[var(--term-muted)]">
        {'//'} layered processing — top to bottom
      </p>
    </HeroDiagramShell>
  );
};

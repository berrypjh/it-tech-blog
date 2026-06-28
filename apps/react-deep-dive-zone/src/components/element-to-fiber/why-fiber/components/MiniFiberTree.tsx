import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../shared/tones';

/**
 * 다음 챕터 예고용 미니 Fiber tree 다이어그램.
 * 상단 violet root → 중간 emerald → 하단 sky cubes. 색은 톤의 text 색(currentColor)을 따른다.
 */
export const MiniFiberTree = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 160"
    aria-hidden="true"
    className={cn('w-full h-auto max-w-[260px]', className)}
  >
    {/* Root + 그 아래 링크 — violet */}
    <g className={toneTokens.violet.text} fill="currentColor" stroke="currentColor">
      <line x1="100" y1="36" x2="50" y2="84" strokeWidth="2" strokeOpacity="0.6" />
      <line x1="100" y1="36" x2="150" y2="84" strokeWidth="2" strokeOpacity="0.6" />
      <Cube cx={100} cy={28} />
    </g>

    {/* Middle + 그 아래 링크 — emerald */}
    <g className={toneTokens.emerald.text} fill="currentColor" stroke="currentColor">
      <line x1="50" y1="100" x2="22" y2="138" strokeWidth="2" strokeOpacity="0.6" />
      <line x1="50" y1="100" x2="78" y2="138" strokeWidth="2" strokeOpacity="0.6" />
      <line x1="150" y1="100" x2="150" y2="138" strokeWidth="2" strokeOpacity="0.6" />
      <Cube cx={50} cy={92} />
      <Cube cx={150} cy={92} />
    </g>

    {/* Bottom — sky */}
    <g className={toneTokens.sky.text} fill="currentColor">
      <Cube cx={22} cy={146} size={10} />
      <Cube cx={78} cy={146} size={10} />
      <Cube cx={150} cy={146} size={10} />
    </g>

    <text
      x={186}
      y={150}
      className="fill-[var(--term-muted)]"
      fontSize="12"
      fontFamily="ui-monospace, monospace"
    >
      …
    </text>
  </svg>
);

const Cube = ({ cx, cy, size = 14 }: { cx: number; cy: number; size?: number }) => (
  <rect x={cx - size / 2} y={cy - size / 2} width={size} height={size} rx={3} fill="currentColor" />
);

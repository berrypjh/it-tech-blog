import { cn } from '@it-tech-blog/utils';

import { FiberCubeIcon } from '../icons';

type Props = { className?: string };

/**
 * 중앙 reconciler 카드 아래에서 퍼지는 Fiber 노드 네트워크 장식.
 * 정확한 트리 로직보다 “퍼플 기반 구조적 네트워크” 인상을 우선한다.
 */
export const FiberNodeNetwork = ({ className }: Props) => {
  return (
    <div className={cn('relative h-32 w-full overflow-hidden', className)} aria-hidden="true">
      {/* 점선 연결선 SVG */}
      <svg
        viewBox="0 0 320 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <g
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 4"
          className="text-violet-300 dark:text-violet-700"
          fill="none"
        >
          {/* 중심 → 좌상 */}
          <path d="M160 10 C 120 30, 80 40, 50 60" />
          {/* 중심 → 우상 */}
          <path d="M160 10 C 200 30, 240 40, 270 60" />
          {/* 중심 → 좌하 */}
          <path d="M160 10 C 130 50, 100 80, 80 105" />
          {/* 중심 → 중하 */}
          <path d="M160 10 C 160 40, 160 80, 160 105" />
          {/* 중심 → 우하 */}
          <path d="M160 10 C 190 50, 220 80, 240 105" />
          {/* 가지 — 좌상 → 더 왼쪽 */}
          <path d="M50 60 C 30 70, 20 85, 18 100" />
        </g>
      </svg>

      {/* Fiber 노드 */}
      {[
        { x: 'left-[12%]', y: 'top-[42%]' },
        { x: 'left-[78%]', y: 'top-[42%]' },
        { x: 'left-[22%]', y: 'top-[78%]' },
        { x: 'left-[48%]', y: 'top-[80%]' },
        { x: 'left-[72%]', y: 'top-[78%]' },
        { x: 'left-[4%]', y: 'top-[80%]' },
      ].map((pos, i) => (
        <span
          key={i}
          className={cn(
            'absolute -translate-x-1/2 -translate-y-1/2',
            pos.x,
            pos.y,
            'inline-flex items-center justify-center w-6 h-6 rounded-md border',
            'border-violet-300 bg-violet-50/90 text-violet-600',
            'dark:border-violet-700/60 dark:bg-violet-950/40 dark:text-violet-300',
            'shadow-[0_1px_0_var(--term-border)]',
          )}
        >
          <FiberCubeIcon className="h-3 w-3" />
        </span>
      ))}
    </div>
  );
};

import { cn } from '@it-tech-blog/utils';

import { ArrowDownIcon, ArrowRightIcon } from '../icons';

type Props = {
  className?: string;
};

/**
 * 여러 입력이 하나의 결과로 모이는 분기 화살표.
 * - lg 이상: 좌측 3 카드 → 가운데 곡선 → 오른쪽 결과 카드.
 *   3개의 가로 선이 가운데로 모여 큰 화살표로 합쳐지는 느낌을 SVG로 표현.
 * - 모바일: 단순 ↓ 화살표 1개.
 */
export const CurvedArrow = ({ className }: Props) => (
  <div className={cn('flex items-center justify-center', className)} aria-hidden="true">
    {/* Mobile */}
    <div className="flex lg:hidden">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950 shadow-[0_6px_18px_-6px_rgba(2,132,199,0.55)]">
        <ArrowDownIcon className="h-5 w-5" />
      </span>
    </div>

    {/* Desktop: SVG conduits + arrow */}
    <div className="hidden lg:flex items-center w-full h-full min-h-[180px] relative">
      <svg
        viewBox="0 0 80 180"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="host-arrow-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgb(56 189 248 / 0.4)" />
            <stop offset="100%" stopColor="rgb(2 132 199)" />
          </linearGradient>
        </defs>
        {/* three curves from left edge converging to right center */}
        <path
          d="M 0 30 Q 40 30, 40 90"
          stroke="url(#host-arrow-gradient)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 0 90 L 80 90"
          stroke="url(#host-arrow-gradient)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 0 150 Q 40 150, 40 90"
          stroke="url(#host-arrow-gradient)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={cn(
          'relative inline-flex items-center justify-center rounded-full',
          'w-11 h-11 mx-auto',
          'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
          'shadow-[0_10px_24px_-8px_rgba(2,132,199,0.55)]',
        )}
      >
        <ArrowRightIcon className="h-5 w-5" />
      </span>
    </div>
  </div>
);

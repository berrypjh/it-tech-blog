import { MapPinIcon } from '../icons';

/**
 * NextPageCTA 좌측의 SVG 경로 지도 장식. aria-hidden 데코레이션 전용.
 * "현 위치 → 다음 위치" 경로를 점선으로 표현한다.
 */
export const MapDecoration = () => (
  <div
    className="relative h-28 sm:h-32 lg:h-36 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] overflow-hidden"
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 200 140"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id="next-cta-grid"
          x="0"
          y="0"
          width="16"
          height="16"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 16 0 L 0 0 0 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-[var(--term-border)]"
          />
        </pattern>
      </defs>
      <rect width="200" height="140" fill="url(#next-cta-grid)" />
      <path
        d="M20 110 C 60 90, 80 60, 120 50 S 170 30, 180 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        className="text-[var(--term-accent)]"
      />
      <circle cx="20" cy="110" r="3" className="fill-[var(--term-accent)]" />
      <circle cx="120" cy="50" r="3" className="fill-[var(--term-muted)]" />
      <circle
        cx="180"
        cy="18"
        r="4"
        className="fill-[var(--term-accent)] stroke-[var(--term-bg)]"
        strokeWidth="2"
      />
    </svg>
    <span className="absolute left-2 bottom-1 text-[10px] text-[var(--term-muted)]">
      {'// you are here'}
    </span>
    <span className="absolute right-2 top-1 inline-flex items-center gap-1 text-[10px] font-bold text-[var(--term-accent)]">
      <MapPinIcon className="h-3 w-3" />
      next
    </span>
  </div>
);

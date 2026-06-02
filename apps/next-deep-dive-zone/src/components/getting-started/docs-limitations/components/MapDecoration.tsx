import { MapPinIcon } from '../icons';

/**
 * NextPageCTA 좌측의 docs → code → test 연결선 느낌 SVG 장식. aria-hidden 데코레이션 전용.
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
        <pattern id="dl-cta-grid" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
          <path
            d="M 16 0 L 0 0 0 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-[var(--term-border)]"
          />
        </pattern>
      </defs>
      <rect width="200" height="140" fill="url(#dl-cta-grid)" />
      <line
        x1="30"
        y1="70"
        x2="170"
        y2="70"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        className="text-[var(--term-accent)]"
      />
      <circle cx="30" cy="70" r="5" className="fill-none stroke-blue-400" strokeWidth="2" />
      <circle cx="100" cy="70" r="5" className="fill-none stroke-violet-400" strokeWidth="2" />
      <circle
        cx="170"
        cy="70"
        r="6"
        className="fill-[var(--term-accent)] stroke-[var(--term-bg)]"
        strokeWidth="2"
      />
    </svg>
    <span className="absolute left-1.5 bottom-1 text-[9px] font-bold text-blue-500 dark:text-blue-300">
      docs
    </span>
    <span className="absolute left-1/2 -translate-x-1/2 bottom-1 text-[9px] font-bold text-violet-500 dark:text-violet-300">
      code
    </span>
    <span className="absolute right-2 top-1 inline-flex items-center gap-1 text-[9px] font-bold text-[var(--term-accent)]">
      <MapPinIcon className="h-3 w-3" />
      test
    </span>
  </div>
);

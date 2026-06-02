import { MapPinIcon } from '../icons';

/**
 * NextPageCTA 좌측의 segment/tree 느낌 SVG 장식. aria-hidden 데코레이션 전용.
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
        <pattern id="n16-cta-grid" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
          <path
            d="M 16 0 L 0 0 0 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-[var(--term-border)]"
          />
        </pattern>
      </defs>
      <rect width="200" height="140" fill="url(#n16-cta-grid)" />
      {/* segment tree 느낌의 분기 */}
      <path
        d="M30 20 L30 70 M30 45 L90 45 M90 45 L90 30 M90 45 L90 60 M30 70 L30 110 M30 110 L90 110"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        className="text-[var(--term-accent)]"
      />
      <circle cx="30" cy="20" r="3.5" className="fill-[var(--term-accent)]" />
      <circle cx="90" cy="30" r="3" className="fill-[var(--term-muted)]" />
      <circle cx="90" cy="60" r="3" className="fill-[var(--term-muted)]" />
      <circle
        cx="90"
        cy="110"
        r="4"
        className="fill-[var(--term-accent)] stroke-[var(--term-bg)]"
        strokeWidth="2"
      />
    </svg>
    <span className="absolute left-2 bottom-1 text-[10px] text-[var(--term-muted)]">
      {'// segment tree'}
    </span>
    <span className="absolute right-2 top-1 inline-flex items-center gap-1 text-[10px] font-bold text-[var(--term-accent)]">
      <MapPinIcon className="h-3 w-3" />
      next
    </span>
  </div>
);

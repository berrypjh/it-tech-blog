import { MapPinIcon } from '../icons';

/**
 * NextPageCTA 좌측의 git commit graph 느낌 SVG 장식. aria-hidden 데코레이션 전용.
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
        <pattern id="grm-cta-grid" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
          <path
            d="M 16 0 L 0 0 0 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-[var(--term-border)]"
          />
        </pattern>
      </defs>
      <rect width="200" height="140" fill="url(#grm-cta-grid)" />
      {/* commit line + branch */}
      <line
        x1="26"
        y1="70"
        x2="174"
        y2="70"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        className="text-[var(--term-accent)]"
      />
      <path
        d="M100 70 C 120 70, 130 44, 150 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        className="text-[var(--term-muted)]"
      />
      <circle cx="26" cy="70" r="3" className="fill-[var(--term-accent)]" />
      <circle cx="63" cy="70" r="3" className="fill-[var(--term-muted)]" />
      <circle cx="100" cy="70" r="3.5" className="fill-[var(--term-accent)]" />
      <circle cx="150" cy="44" r="3" className="fill-[var(--term-muted)]" />
      <circle
        cx="174"
        cy="70"
        r="4"
        className="fill-[var(--term-accent)] stroke-[var(--term-bg)]"
        strokeWidth="2"
      />
    </svg>
    <span className="absolute left-2 bottom-1 text-[9px] text-[var(--term-muted)]">
      {'// code · test · pr'}
    </span>
    <span className="absolute right-2 top-1 inline-flex items-center gap-1 text-[10px] font-bold text-[var(--term-accent)]">
      <MapPinIcon className="h-3 w-3" />
      roadmap
    </span>
  </div>
);

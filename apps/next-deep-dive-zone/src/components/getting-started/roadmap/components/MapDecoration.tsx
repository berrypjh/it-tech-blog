import { MapPinIcon } from '../icons';

/**
 * 최종 CTA 좌측의 6축 노드 지도 장식. aria-hidden 데코레이션 전용.
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
        <pattern id="rm-cta-grid" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
          <path
            d="M 16 0 L 0 0 0 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-[var(--term-border)]"
          />
        </pattern>
      </defs>
      <rect width="200" height="140" fill="url(#rm-cta-grid)" />
      <path
        d="M24 100 L60 60 L100 84 L140 40 L176 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        className="text-[var(--term-accent)]"
      />
      <circle cx="24" cy="100" r="3" className="fill-[var(--term-accent)]" />
      <circle cx="60" cy="60" r="3" className="fill-[var(--term-muted)]" />
      <circle cx="100" cy="84" r="3" className="fill-[var(--term-muted)]" />
      <circle cx="140" cy="40" r="3" className="fill-[var(--term-muted)]" />
      <circle
        cx="176"
        cy="64"
        r="4"
        className="fill-[var(--term-accent)] stroke-[var(--term-bg)]"
        strokeWidth="2"
      />
    </svg>
    <span className="absolute left-2 bottom-1 text-[9px] text-[var(--term-muted)]">
      {'// 6 axes'}
    </span>
    <span className="absolute right-2 top-1 inline-flex items-center gap-1 text-[10px] font-bold text-[var(--term-accent)]">
      <MapPinIcon className="h-3 w-3" />
      repo
    </span>
  </div>
);

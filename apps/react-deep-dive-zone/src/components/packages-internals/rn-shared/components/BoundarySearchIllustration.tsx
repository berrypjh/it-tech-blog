type Props = { className?: string };

/**
 * CTA 좌측 일러스트.
 * 두 영역의 경계 + 돋보기 + sparkle.
 */
export const BoundarySearchIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 160 130"
    className={className ?? 'h-28 w-32'}
    aria-hidden="true"
    role="presentation"
  >
    <defs>
      <linearGradient id="bndGlow" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(56,189,248,0.55)" />
        <stop offset="100%" stopColor="rgba(56,189,248,0)" />
      </linearGradient>
      <linearGradient id="bndLeft" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="rgba(125,211,252,0.95)" />
        <stop offset="100%" stopColor="rgba(56,189,248,0.6)" />
      </linearGradient>
      <linearGradient id="bndRight" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="rgba(167,139,250,0.85)" />
        <stop offset="100%" stopColor="rgba(139,92,246,0.6)" />
      </linearGradient>
    </defs>

    {/* 배경 글로우 */}
    <circle cx="80" cy="68" r="58" fill="url(#bndGlow)" />

    {/* 좌측 영역 (DOM) */}
    <g transform="translate(18 30)">
      <rect
        width="56"
        height="74"
        rx="8"
        fill="url(#bndLeft)"
        stroke="rgba(15,23,42,0.45)"
        strokeWidth="1.2"
      />
      <rect x="8" y="10" width="40" height="6" rx="2" fill="rgba(255,255,255,0.85)" />
      <rect x="8" y="22" width="32" height="6" rx="2" fill="rgba(255,255,255,0.7)" />
      <rect x="8" y="34" width="36" height="6" rx="2" fill="rgba(255,255,255,0.7)" />
      <rect x="8" y="46" width="28" height="6" rx="2" fill="rgba(255,255,255,0.55)" />
    </g>

    {/* 우측 영역 (common) */}
    <g transform="translate(86 30)">
      <rect
        width="56"
        height="74"
        rx="8"
        fill="url(#bndRight)"
        stroke="rgba(15,23,42,0.45)"
        strokeWidth="1.2"
      />
      <rect x="8" y="10" width="40" height="6" rx="2" fill="rgba(255,255,255,0.85)" />
      <rect x="8" y="22" width="32" height="6" rx="2" fill="rgba(255,255,255,0.7)" />
      <rect x="8" y="34" width="36" height="6" rx="2" fill="rgba(255,255,255,0.7)" />
      <rect x="8" y="46" width="28" height="6" rx="2" fill="rgba(255,255,255,0.55)" />
    </g>

    {/* 경계선 (dashed) */}
    <line
      x1="80"
      y1="22"
      x2="80"
      y2="112"
      stroke="rgba(15,23,42,0.6)"
      strokeWidth="1.5"
      strokeDasharray="3 4"
    />

    {/* 돋보기 */}
    <g transform="translate(80 100)">
      <circle r="14" fill="rgba(255,255,255,0.15)" stroke="rgba(15,23,42,0.85)" strokeWidth="2" />
      <circle
        r="10"
        fill="none"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
      <line
        x1="10"
        y1="10"
        x2="20"
        y2="20"
        stroke="rgba(15,23,42,0.85)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>

    {/* sparkle */}
    <g fill="rgba(251,191,36,0.95)">
      <path d="M28 22 L31 28 L37 30 L31 32 L28 38 L25 32 L19 30 L25 28 Z" />
    </g>
    <g fill="rgba(255,255,255,0.85)">
      <circle cx="138" cy="22" r="1.6" />
      <circle cx="146" cy="84" r="1.4" />
      <circle cx="14" cy="108" r="1.4" />
    </g>
  </svg>
);

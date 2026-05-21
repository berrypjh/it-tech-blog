type Props = { className?: string };

/**
 * CTA 좌측 일러스트.
 * 문서 카드 + 확대경 + 카드 확대 효과 + sparkle.
 */
export const SearchScopeIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 160 130"
    className={className ?? 'h-28 w-32'}
    aria-hidden="true"
    role="presentation"
  >
    <defs>
      <linearGradient id="scopeGlow" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(45,212,191,0.55)" />
        <stop offset="100%" stopColor="rgba(45,212,191,0)" />
      </linearGradient>
      <linearGradient id="scopeDocBg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
        <stop offset="100%" stopColor="rgba(226,232,240,0.85)" />
      </linearGradient>
    </defs>

    {/* 배경 글로우 */}
    <circle cx="80" cy="68" r="56" fill="url(#scopeGlow)" />

    {/* 뒤쪽 문서 카드 */}
    <g transform="translate(34 22)">
      <rect
        width="74"
        height="92"
        rx="8"
        fill="url(#scopeDocBg)"
        stroke="rgba(15,23,42,0.35)"
        strokeWidth="1.2"
      />
      <line
        x1="10"
        y1="20"
        x2="56"
        y2="20"
        stroke="rgba(45,212,191,0.7)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="32"
        x2="48"
        y2="32"
        stroke="rgba(56,189,248,0.55)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="42"
        x2="60"
        y2="42"
        stroke="rgba(148,163,184,0.6)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="52"
        x2="44"
        y2="52"
        stroke="rgba(148,163,184,0.6)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="62"
        x2="54"
        y2="62"
        stroke="rgba(148,163,184,0.6)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <rect
        x="10"
        y="74"
        width="40"
        height="10"
        rx="3"
        fill="rgba(45,212,191,0.18)"
        stroke="rgba(45,212,191,0.6)"
        strokeWidth="1"
      />
    </g>

    {/* 앞쪽 강조 카드 */}
    <g transform="translate(60 56)">
      <rect
        width="70"
        height="46"
        rx="8"
        fill="rgba(15,23,42,0.92)"
        stroke="rgba(125,211,252,0.7)"
        strokeWidth="1.3"
      />
      <line
        x1="9"
        y1="12"
        x2="44"
        y2="12"
        stroke="rgba(125,211,252,0.9)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="9"
        y1="22"
        x2="56"
        y2="22"
        stroke="rgba(125,211,252,0.5)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="9"
        y1="32"
        x2="36"
        y2="32"
        stroke="rgba(125,211,252,0.45)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </g>

    {/* 확대경 */}
    <g transform="translate(108 86)">
      <circle r="18" fill="rgba(255,255,255,0.1)" stroke="rgba(45,212,191,0.9)" strokeWidth="2" />
      <circle
        r="13"
        fill="none"
        stroke="rgba(125,211,252,0.6)"
        strokeWidth="0.8"
        strokeDasharray="2 2"
      />
      <line
        x1="13"
        y1="13"
        x2="26"
        y2="26"
        stroke="rgba(45,212,191,0.9)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>

    {/* sparkle */}
    <g fill="rgba(251,191,36,0.95)">
      <path d="M24 22 L27 28 L33 30 L27 32 L24 38 L21 32 L15 30 L21 28 Z" />
    </g>
    <g fill="rgba(255,255,255,0.85)">
      <circle cx="140" cy="34" r="1.6" />
      <circle cx="146" cy="80" r="1.4" />
      <circle cx="14" cy="108" r="1.4" />
    </g>
  </svg>
);

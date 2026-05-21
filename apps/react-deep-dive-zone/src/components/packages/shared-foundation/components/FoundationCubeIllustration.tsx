type Props = { className?: string };

/**
 * CTA 좌측 일러스트.
 * 3D 큐브 + 블록 스택 + sparkle.
 */
export const FoundationCubeIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 160 130"
    className={className ?? 'h-28 w-32'}
    aria-hidden="true"
    role="presentation"
  >
    <defs>
      <linearGradient id="fndGlow" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(56,189,248,0.45)" />
        <stop offset="100%" stopColor="rgba(56,189,248,0)" />
      </linearGradient>
      <linearGradient id="fndTop" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="rgba(125,211,252,0.95)" />
        <stop offset="100%" stopColor="rgba(56,189,248,0.7)" />
      </linearGradient>
      <linearGradient id="fndLeft" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="rgba(45,212,191,0.9)" />
        <stop offset="100%" stopColor="rgba(20,184,166,0.6)" />
      </linearGradient>
      <linearGradient id="fndRight" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="rgba(167,139,250,0.85)" />
        <stop offset="100%" stopColor="rgba(139,92,246,0.6)" />
      </linearGradient>
    </defs>

    {/* 배경 글로우 */}
    <circle cx="80" cy="68" r="58" fill="url(#fndGlow)" />

    {/* 작은 블록들 좌상단 */}
    <g transform="translate(22 38)">
      <rect
        width="22"
        height="14"
        rx="3"
        fill="rgba(125,211,252,0.9)"
        stroke="rgba(15,23,42,0.4)"
        strokeWidth="0.8"
      />
      <rect
        y="18"
        width="22"
        height="14"
        rx="3"
        fill="rgba(45,212,191,0.85)"
        stroke="rgba(15,23,42,0.4)"
        strokeWidth="0.8"
      />
      <rect
        y="36"
        width="22"
        height="14"
        rx="3"
        fill="rgba(167,139,250,0.85)"
        stroke="rgba(15,23,42,0.4)"
        strokeWidth="0.8"
      />
    </g>

    {/* 중앙 3D 큐브 (foundation) */}
    <g transform="translate(86 70)">
      <path
        d="M -30 -12 L 0 -28 L 30 -12 L 0 4 Z"
        fill="url(#fndTop)"
        stroke="rgba(15,23,42,0.45)"
        strokeWidth="1.2"
      />
      <path
        d="M -30 -12 L 0 4 L 0 32 L -30 16 Z"
        fill="url(#fndLeft)"
        stroke="rgba(15,23,42,0.45)"
        strokeWidth="1.2"
      />
      <path
        d="M 30 -12 L 0 4 L 0 32 L 30 16 Z"
        fill="url(#fndRight)"
        stroke="rgba(15,23,42,0.45)"
        strokeWidth="1.2"
      />
      <path d="M 0 4 L 0 28" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="2 2" />
    </g>

    {/* 작은 블록들 우상단 */}
    <g transform="translate(122 26)">
      <rect
        width="20"
        height="12"
        rx="3"
        fill="rgba(251,191,36,0.9)"
        stroke="rgba(15,23,42,0.4)"
        strokeWidth="0.8"
      />
      <rect
        y="16"
        width="20"
        height="12"
        rx="3"
        fill="rgba(56,189,248,0.9)"
        stroke="rgba(15,23,42,0.4)"
        strokeWidth="0.8"
      />
    </g>

    {/* sparkle */}
    <g fill="rgba(251,191,36,0.95)">
      <path d="M138 78 L141 84 L147 86 L141 88 L138 94 L135 88 L129 86 L135 84 Z" />
    </g>
    <g fill="rgba(255,255,255,0.85)">
      <circle cx="146" cy="106" r="1.6" />
      <circle cx="14" cy="100" r="1.4" />
    </g>
  </svg>
);

type Props = { className?: string };

/**
 * 어두운 CTA 배너 좌측 일러스트.
 * 빛나는 API 게이트(포털) + 모니터 프레임 + sparkle 장식.
 */
export const ApiGatewayIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 160 130"
    className={className ?? 'h-28 w-32'}
    aria-hidden="true"
    role="presentation"
  >
    <defs>
      <linearGradient id="gateGlow" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(56,189,248,0.55)" />
        <stop offset="100%" stopColor="rgba(56,189,248,0)" />
      </linearGradient>
      <linearGradient id="gateInner" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(125,211,252,0.85)" />
        <stop offset="100%" stopColor="rgba(14,165,233,0.55)" />
      </linearGradient>
    </defs>

    {/* 뒷배경 글로우 */}
    <circle cx="80" cy="68" r="58" fill="url(#gateGlow)" />

    {/* 모니터 외곽 프레임 */}
    <g>
      <rect
        x="22"
        y="22"
        width="116"
        height="78"
        rx="10"
        fill="rgba(15,23,42,0.85)"
        stroke="rgba(125,211,252,0.55)"
        strokeWidth="1.4"
      />
      <rect x="22" y="22" width="116" height="14" rx="10" fill="rgba(30,41,59,0.9)" />
      <circle cx="32" cy="29" r="2" fill="rgba(248,113,113,0.95)" />
      <circle cx="40" cy="29" r="2" fill="rgba(251,191,36,0.95)" />
      <circle cx="48" cy="29" r="2" fill="rgba(16,185,129,0.95)" />
    </g>

    {/* 게이트(아치) */}
    <g transform="translate(80 100)">
      <path
        d="M -30 0 L -30 -34 A 30 30 0 0 1 30 -34 L 30 0 Z"
        fill="url(#gateInner)"
        stroke="rgba(125,211,252,0.85)"
        strokeWidth="1.4"
      />
      {/* 게이트 안쪽 빛 */}
      <path d="M -22 0 L -22 -32 A 22 22 0 0 1 22 -32 L 22 0 Z" fill="rgba(255,255,255,0.18)" />
      {/* 게이트 가운데 세로 라인 */}
      <line
        x1="0"
        y1="-4"
        x2="0"
        y2="-50"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1"
        strokeDasharray="2 3"
      />
    </g>

    {/* 모니터 하단 받침 */}
    <rect x="62" y="100" width="36" height="4" rx="2" fill="rgba(125,211,252,0.7)" />

    {/* 별 / sparkle 장식 */}
    <g fill="rgba(251,191,36,0.95)">
      <path d="M30 50 L33 56 L39 58 L33 60 L30 66 L27 60 L21 58 L27 56 Z" />
    </g>
    <g fill="rgba(255,255,255,0.85)">
      <circle cx="138" cy="46" r="1.8" />
      <circle cx="14" cy="80" r="1.8" />
      <circle cx="144" cy="100" r="1.6" />
      <circle cx="58" cy="58" r="1.4" />
    </g>
  </svg>
);

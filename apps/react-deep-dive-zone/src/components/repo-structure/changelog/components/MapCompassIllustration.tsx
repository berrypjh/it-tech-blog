type Props = { className?: string };

/**
 * CTA 좌측: 지도 + 나침반 inline SVG.
 * “저장소 탐색 순서”로 넘어가는 인상을 표현.
 */
export const MapCompassIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 160 130"
    className={className ?? 'h-28 w-32'}
    aria-hidden="true"
    role="presentation"
  >
    <defs>
      <linearGradient id="compassGlow" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(56,189,248,0.40)" />
        <stop offset="100%" stopColor="rgba(56,189,248,0)" />
      </linearGradient>
    </defs>

    <circle cx="80" cy="70" r="56" fill="url(#compassGlow)" />

    {/* 접힌 지도 */}
    <g>
      <path
        d="M16 32 L60 22 L100 32 L140 24 L142 100 L100 110 L60 100 L18 110 Z"
        fill="rgba(255,255,255,0.96)"
        stroke="rgba(15,23,42,0.5)"
        strokeWidth="1.4"
      />
      {/* 접힘선 */}
      <line
        x1="60"
        y1="22"
        x2="60"
        y2="100"
        stroke="rgba(15,23,42,0.35)"
        strokeWidth="1.2"
        strokeDasharray="2 3"
      />
      <line
        x1="100"
        y1="32"
        x2="100"
        y2="110"
        stroke="rgba(15,23,42,0.35)"
        strokeWidth="1.2"
        strokeDasharray="2 3"
      />

      {/* 지도 경로 */}
      <path
        d="M28 80 Q 60 56, 86 70 T 132 50"
        fill="none"
        stroke="rgba(45,212,191,0.9)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
      <circle cx="28" cy="80" r="3.5" fill="rgba(45,212,191,0.95)" />
      <circle cx="132" cy="50" r="3.5" fill="rgba(251,191,36,0.95)" />
    </g>

    {/* 나침반 */}
    <g transform="translate(110 96)">
      <circle r="18" fill="rgba(255,255,255,0.98)" stroke="rgba(15,23,42,0.7)" strokeWidth="1.8" />
      <circle r="14" fill="rgba(241,245,249,0.9)" stroke="rgba(15,23,42,0.3)" strokeWidth="1" />
      {/* 바늘 */}
      <path d="M0 -10 L4 0 L0 10 L-4 0 Z" fill="rgba(244,63,94,0.95)" />
      <path d="M0 -10 L4 0 L0 0 Z" fill="rgba(239,68,68,1)" />
      {/* 중심 */}
      <circle r="1.6" fill="rgba(15,23,42,0.95)" />
      {/* N */}
      <text
        x="0"
        y="-12"
        textAnchor="middle"
        fontSize="6"
        fontFamily="monospace"
        fontWeight="800"
        fill="rgba(15,23,42,0.85)"
      >
        N
      </text>
    </g>

    {/* sparkle */}
    <g fill="rgba(251,191,36,0.9)">
      <path d="M30 22 L32 26 L36 28 L32 30 L30 34 L28 30 L24 28 L28 26 Z" />
      <path d="M138 28 L140 32 L144 34 L140 36 L138 40 L136 36 L132 34 L136 32 Z" />
    </g>
  </svg>
);

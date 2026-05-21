type Props = { className?: string };

/**
 * 어두운 CTA 배너의 좌측에 들어가는 “지도 + 핀 + 경로” 일러스트.
 * 이미지를 사용하지 않고 inline SVG로만 그린다.
 */
export const MapIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 160 130"
    className={className ?? 'h-28 w-32'}
    aria-hidden="true"
    role="presentation"
  >
    <defs>
      <linearGradient id="mapGlow" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(16,185,129,0.40)" />
        <stop offset="100%" stopColor="rgba(16,185,129,0)" />
      </linearGradient>
    </defs>

    {/* 글로우 배경 */}
    <circle cx="80" cy="68" r="56" fill="url(#mapGlow)" />

    {/* 접힌 지도 종이 */}
    <g>
      <path
        d="M22 30 L60 22 L100 32 L138 22 L138 100 L100 110 L60 100 L22 110 Z"
        fill="rgba(255,255,255,0.94)"
        stroke="rgba(15,23,42,0.5)"
        strokeWidth="1.4"
      />
      {/* 접힌 선 */}
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

      {/* 지도 위 경로(곡선) */}
      <path
        d="M34 86 Q60 60, 84 70 T132 46"
        fill="none"
        stroke="rgba(56,189,248,0.95)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />

      {/* 시작 점 */}
      <circle cx="34" cy="86" r="4" fill="rgba(56,189,248,0.95)" />
    </g>

    {/* 도착 핀 */}
    <g>
      <path
        d="M126 30 C126 22, 138 22, 138 30 C138 38, 132 46, 132 46 C132 46, 126 38, 126 30 Z"
        fill="rgba(251,191,36,0.95)"
        stroke="rgba(180,83,9,0.8)"
        strokeWidth="1.2"
      />
      <circle cx="132" cy="30" r="2" fill="rgba(15,23,42,0.9)" />
    </g>

    {/* 작은 sparkle */}
    <g fill="rgba(167,243,208,0.95)">
      <path d="M48 38 L50 42 L54 44 L50 46 L48 50 L46 46 L42 44 L46 42 Z" />
      <path d="M114 88 L116 92 L120 94 L116 96 L114 100 L112 96 L108 94 L112 92 Z" />
    </g>
  </svg>
);

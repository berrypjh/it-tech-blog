type Props = { className?: string };

/**
 * 어두운 CTA 배너 좌측 일러스트.
 * 펼쳐진 지도 위의 나침반 + 경로 점선 + 별 장식을 inline SVG로 표현한다.
 */
export const CompassMapIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 160 130"
    className={className ?? 'h-28 w-32'}
    aria-hidden="true"
    role="presentation"
  >
    <defs>
      <linearGradient id="mapGlow" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(56,189,248,0.45)" />
        <stop offset="100%" stopColor="rgba(56,189,248,0)" />
      </linearGradient>
      <linearGradient id="mapPaper" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
        <stop offset="100%" stopColor="rgba(248,250,252,0.85)" />
      </linearGradient>
    </defs>

    {/* 뒷배경 글로우 */}
    <circle cx="80" cy="68" r="58" fill="url(#mapGlow)" />

    {/* 펼쳐진 지도 */}
    <g>
      <path
        d="M18 96 L52 84 L82 96 L118 80 L144 96 L144 40 L118 24 L82 40 L52 28 L18 40 Z"
        fill="url(#mapPaper)"
        stroke="rgba(15,23,42,0.55)"
        strokeWidth="1.4"
      />
      {/* 접힘선 */}
      <path d="M52 28 L52 84" stroke="rgba(15,23,42,0.3)" strokeDasharray="2 3" strokeWidth="1" />
      <path d="M82 40 L82 96" stroke="rgba(15,23,42,0.3)" strokeDasharray="2 3" strokeWidth="1" />
      <path d="M118 24 L118 80" stroke="rgba(15,23,42,0.3)" strokeDasharray="2 3" strokeWidth="1" />
      {/* 경로 점선 */}
      <path
        d="M28 80 Q 60 56 90 70 T 138 50"
        stroke="rgba(56,189,248,0.95)"
        strokeWidth="2"
        strokeDasharray="3 4"
        strokeLinecap="round"
        fill="none"
      />
      {/* 경로 핀들 */}
      <circle cx="28" cy="80" r="3" fill="rgba(56,189,248,0.95)" />
      <circle cx="90" cy="70" r="3" fill="rgba(16,185,129,0.95)" />
      <circle cx="138" cy="50" r="3" fill="rgba(251,191,36,0.95)" />
    </g>

    {/* 나침반 */}
    <g transform="translate(108 78)">
      <circle r="18" fill="rgba(15,23,42,0.85)" stroke="rgba(251,191,36,0.9)" strokeWidth="1.4" />
      <circle r="14" fill="none" stroke="rgba(251,191,36,0.5)" strokeDasharray="2 3" />
      <path d="M0 -12 L3 0 L0 12 L-3 0 Z" fill="rgba(251,191,36,0.95)" />
      <path d="M0 -12 L-3 0 L0 0 Z" fill="rgba(248,113,113,0.95)" />
      <circle r="2" fill="rgba(255,255,255,0.85)" />
    </g>

    {/* 별 / sparkle 장식 */}
    <g fill="rgba(251,191,36,0.95)">
      <path d="M22 22 L25 28 L31 30 L25 32 L22 38 L19 32 L13 30 L19 28 Z" />
    </g>
    <g fill="rgba(255,255,255,0.85)">
      <circle cx="48" cy="20" r="1.6" />
      <circle cx="130" cy="22" r="1.6" />
      <circle cx="64" cy="110" r="1.6" />
    </g>
  </svg>
);

type Props = { className?: string };

/**
 * 챕터 마무리 CTA 좌측 일러스트.
 * 지도 + 체크된 경로 + 별 / sparkle.
 */
export const FinaleMapIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 160 130"
    className={className ?? 'h-28 w-32'}
    aria-hidden="true"
    role="presentation"
  >
    <defs>
      <linearGradient id="finGlow" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(125,211,252,0.55)" />
        <stop offset="100%" stopColor="rgba(125,211,252,0)" />
      </linearGradient>
      <linearGradient id="finPaper" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(255,255,255,0.96)" />
        <stop offset="100%" stopColor="rgba(241,245,249,0.94)" />
      </linearGradient>
    </defs>

    <circle cx="80" cy="68" r="58" fill="url(#finGlow)" />

    {/* 지도 카드 */}
    <g transform="translate(20 24)">
      <path
        d="M0 8 L 32 0 L 64 12 L 96 4 L 120 14 L 120 78 L 96 88 L 64 76 L 32 84 L 0 74 Z"
        fill="url(#finPaper)"
        stroke="rgba(15,23,42,0.55)"
        strokeWidth="1.4"
      />
      {/* 접힘선 */}
      <path
        d="M 32 0 L 32 84"
        stroke="rgba(15,23,42,0.25)"
        strokeDasharray="2 3"
        strokeWidth="0.8"
      />
      <path
        d="M 64 12 L 64 76"
        stroke="rgba(15,23,42,0.25)"
        strokeDasharray="2 3"
        strokeWidth="0.8"
      />
      <path
        d="M 96 4 L 96 88"
        stroke="rgba(15,23,42,0.25)"
        strokeDasharray="2 3"
        strokeWidth="0.8"
      />

      {/* 체크된 경로 */}
      <path
        d="M 10 60 Q 30 30 56 40 T 100 26"
        stroke="rgba(45,212,191,0.95)"
        strokeWidth="2.2"
        strokeDasharray="3 4"
        strokeLinecap="round"
        fill="none"
      />
      {/* 핀들 */}
      <g>
        <circle cx="10" cy="60" r="3" fill="rgba(45,212,191,0.95)" />
        <circle cx="40" cy="38" r="3" fill="rgba(125,211,252,0.95)" />
        <circle cx="68" cy="44" r="3" fill="rgba(167,139,250,0.95)" />
        <circle
          cx="100"
          cy="26"
          r="3.6"
          fill="rgba(251,191,36,0.95)"
          stroke="rgba(15,23,42,0.5)"
          strokeWidth="1"
        />
      </g>
    </g>

    {/* 체크 마크 (지도 위) */}
    <g transform="translate(122 92)">
      <circle r="13" fill="rgba(15,23,42,0.85)" stroke="rgba(45,212,191,0.95)" strokeWidth="1.6" />
      <path
        d="M -5 0 L -1 4 L 6 -4"
        stroke="rgba(45,212,191,0.95)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>

    {/* sparkle */}
    <g fill="rgba(251,191,36,0.95)">
      <path d="M28 22 L31 28 L37 30 L31 32 L28 38 L25 32 L19 30 L25 28 Z" />
    </g>
    <g fill="rgba(255,255,255,0.85)">
      <circle cx="146" cy="32" r="1.6" />
      <circle cx="14" cy="108" r="1.4" />
    </g>
  </svg>
);

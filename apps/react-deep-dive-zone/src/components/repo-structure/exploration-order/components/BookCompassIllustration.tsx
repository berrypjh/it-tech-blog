type Props = { className?: string };

/**
 * CTA 좌측: 펼친 책 + 나침반 inline SVG.
 * “저장소 탐색을 마치고 다음 챕터로 떠나는” 인상을 전달.
 */
export const BookCompassIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 160 130"
    className={className ?? 'h-28 w-32'}
    aria-hidden="true"
    role="presentation"
  >
    <defs>
      <linearGradient id="explorationGlow" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(56,189,248,0.40)" />
        <stop offset="100%" stopColor="rgba(56,189,248,0)" />
      </linearGradient>
    </defs>

    <circle cx="80" cy="70" r="56" fill="url(#explorationGlow)" />

    {/* 펼친 책 */}
    <g>
      <path
        d="M16 96 L80 80 L80 32 L18 46 Z"
        fill="rgba(255,255,255,0.96)"
        stroke="rgba(15,23,42,0.55)"
        strokeWidth="1.4"
      />
      <path
        d="M144 96 L80 80 L80 32 L142 46 Z"
        fill="rgba(255,255,255,0.96)"
        stroke="rgba(15,23,42,0.55)"
        strokeWidth="1.4"
      />
      <path
        d="M80 32 L80 80"
        stroke="rgba(15,23,42,0.35)"
        strokeWidth="1.2"
        strokeDasharray="2 3"
      />
      {/* 페이지 라인 */}
      <g stroke="rgba(56,189,248,0.7)" strokeWidth="1.4" strokeLinecap="round">
        <line x1="28" y1="58" x2="68" y2="50" />
        <line x1="28" y1="66" x2="62" y2="59" />
        <line x1="28" y1="74" x2="60" y2="68" />
      </g>
      <g stroke="rgba(94,234,212,0.7)" strokeWidth="1.4" strokeLinecap="round">
        <line x1="92" y1="50" x2="132" y2="58" />
        <line x1="92" y1="59" x2="126" y2="66" />
        <line x1="92" y1="68" x2="122" y2="74" />
      </g>
    </g>

    {/* 나침반 */}
    <g transform="translate(126 30)">
      <circle r="16" fill="rgba(255,255,255,0.98)" stroke="rgba(15,23,42,0.75)" strokeWidth="1.8" />
      <circle r="12" fill="rgba(241,245,249,0.9)" stroke="rgba(15,23,42,0.3)" strokeWidth="1" />
      <path d="M0 -9 L3 0 L0 9 L-3 0 Z" fill="rgba(244,63,94,0.95)" />
      <path d="M0 -9 L3 0 L0 0 Z" fill="rgba(239,68,68,1)" />
      <circle r="1.4" fill="rgba(15,23,42,0.95)" />
      <text
        x="0"
        y="-11"
        textAnchor="middle"
        fontSize="5.5"
        fontFamily="monospace"
        fontWeight="800"
        fill="rgba(15,23,42,0.85)"
      >
        N
      </text>
    </g>

    {/* sparkle */}
    <g fill="rgba(251,191,36,0.95)">
      <path d="M30 22 L33 28 L39 30 L33 32 L30 38 L27 32 L21 30 L27 28 Z" />
      <path d="M140 78 L142.5 82.5 L147 84 L142.5 85.5 L140 90 L137.5 85.5 L133 84 L137.5 82.5 Z" />
    </g>
    <g fill="rgba(255,255,255,0.85)">
      <circle cx="50" cy="20" r="1.6" />
      <circle cx="20" cy="80" r="1.6" />
    </g>
  </svg>
);

type Props = { className?: string };

/**
 * CTA 좌측 일러스트: 문서 sheets + 원형 화살표.
 * “버전 맥락(CHANGELOG/Releases)을 들여다보러 간다”는 인상을 inline SVG로 전달.
 */
export const DocsArrowIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 160 130"
    className={className ?? 'h-28 w-32'}
    aria-hidden="true"
    role="presentation"
  >
    <defs>
      <linearGradient id="docsGlow" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(56,189,248,0.40)" />
        <stop offset="100%" stopColor="rgba(56,189,248,0)" />
      </linearGradient>
    </defs>

    <circle cx="80" cy="68" r="56" fill="url(#docsGlow)" />

    {/* 뒷장 문서 */}
    <g>
      <rect
        x="34"
        y="34"
        width="62"
        height="80"
        rx="6"
        fill="rgba(241,245,249,0.95)"
        stroke="rgba(15,23,42,0.4)"
        strokeWidth="1.2"
      />
      <g stroke="rgba(148,163,184,0.85)" strokeWidth="1.4" strokeLinecap="round">
        <line x1="42" y1="48" x2="84" y2="48" />
        <line x1="42" y1="58" x2="78" y2="58" />
        <line x1="42" y1="68" x2="82" y2="68" />
      </g>
    </g>

    {/* 앞장 문서 */}
    <g>
      <rect
        x="58"
        y="22"
        width="68"
        height="86"
        rx="6"
        fill="rgba(255,255,255,0.98)"
        stroke="rgba(15,23,42,0.55)"
        strokeWidth="1.4"
      />
      {/* 제목 라인 */}
      <rect x="66" y="32" width="40" height="4" rx="2" fill="rgba(56,189,248,0.9)" />
      {/* 본문 */}
      <g stroke="rgba(100,116,139,0.85)" strokeWidth="1.4" strokeLinecap="round">
        <line x1="66" y1="46" x2="116" y2="46" />
        <line x1="66" y1="56" x2="108" y2="56" />
        <line x1="66" y1="66" x2="112" y2="66" />
        <line x1="66" y1="76" x2="100" y2="76" />
        <line x1="66" y1="86" x2="110" y2="86" />
      </g>
      {/* 강조 chip */}
      <rect
        x="66"
        y="94"
        width="36"
        height="8"
        rx="4"
        fill="rgba(45,212,191,0.85)"
        stroke="rgba(13,148,136,0.7)"
        strokeWidth="1"
      />
    </g>

    {/* 원형 화살표 */}
    <g transform="translate(120 24)">
      <circle
        r="14"
        cx="0"
        cy="0"
        fill="rgba(125,211,252,0.95)"
        stroke="rgba(7,89,133,0.7)"
        strokeWidth="1.4"
      />
      <path
        d="M-6 0 L6 0 M2 -4 L6 0 L2 4"
        fill="none"
        stroke="rgba(15,23,42,0.9)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    {/* sparkle */}
    <g fill="rgba(251,191,36,0.9)">
      <path d="M28 24 L30 28 L34 30 L30 32 L28 36 L26 32 L22 30 L26 28 Z" />
      <path d="M134 92 L136 96 L140 98 L136 100 L134 104 L132 100 L128 98 L132 96 Z" />
    </g>
  </svg>
);

type Props = { className?: string };

/**
 * CTA 좌측 일러스트.
 * 클립보드 + 체크 + 문서 라인 + sparkle.
 */
export const ClipboardCheckIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 160 130"
    className={className ?? 'h-28 w-32'}
    aria-hidden="true"
    role="presentation"
  >
    <defs>
      <linearGradient id="dvcGlow" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(56,189,248,0.55)" />
        <stop offset="100%" stopColor="rgba(56,189,248,0)" />
      </linearGradient>
      <linearGradient id="dvcPaper" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(255,255,255,0.96)" />
        <stop offset="100%" stopColor="rgba(241,245,249,0.94)" />
      </linearGradient>
    </defs>

    <circle cx="80" cy="68" r="58" fill="url(#dvcGlow)" />

    {/* 클립보드 보드 */}
    <g transform="translate(48 22)">
      <rect
        width="64"
        height="86"
        rx="8"
        fill="url(#dvcPaper)"
        stroke="rgba(15,23,42,0.6)"
        strokeWidth="1.4"
      />
      {/* clip 머리 */}
      <rect
        x="22"
        y="-4"
        width="20"
        height="14"
        rx="3"
        fill="rgba(125,211,252,0.95)"
        stroke="rgba(15,23,42,0.55)"
        strokeWidth="1.2"
      />
      {/* 라인들 */}
      <line
        x1="10"
        y1="22"
        x2="54"
        y2="22"
        stroke="rgba(125,211,252,0.85)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="32"
        x2="50"
        y2="32"
        stroke="rgba(148,163,184,0.7)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="42"
        x2="48"
        y2="42"
        stroke="rgba(148,163,184,0.7)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="52"
        x2="44"
        y2="52"
        stroke="rgba(148,163,184,0.55)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="62"
        x2="50"
        y2="62"
        stroke="rgba(148,163,184,0.55)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* 체크 박스 + 체크 */}
      <rect
        x="10"
        y="72"
        width="10"
        height="10"
        rx="2"
        fill="none"
        stroke="rgba(15,23,42,0.55)"
        strokeWidth="1.2"
      />
      <path
        d="M 12 77 L 14 79 L 18 74"
        stroke="rgba(45,212,191,0.95)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1="24"
        y1="77"
        x2="54"
        y2="77"
        stroke="rgba(45,212,191,0.85)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </g>

    {/* 돋보기 작게 */}
    <g transform="translate(122 90)">
      <circle r="11" fill="rgba(15,23,42,0.85)" stroke="rgba(125,211,252,0.7)" strokeWidth="1.4" />
      <circle r="7" fill="none" stroke="rgba(255,255,255,0.5)" strokeDasharray="1.5 2" />
      <line
        x1="8"
        y1="8"
        x2="14"
        y2="14"
        stroke="rgba(125,211,252,0.85)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>

    {/* sparkle */}
    <g fill="rgba(251,191,36,0.95)">
      <path d="M22 30 L25 36 L31 38 L25 40 L22 46 L19 40 L13 38 L19 36 Z" />
    </g>
    <g fill="rgba(255,255,255,0.85)">
      <circle cx="14" cy="84" r="1.6" />
      <circle cx="140" cy="34" r="1.4" />
    </g>
  </svg>
);

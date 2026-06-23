type Props = { className?: string };

export const BookIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 160 130"
    className={className ?? 'h-28 w-32'}
    aria-hidden="true"
    role="presentation"
  >
    <defs>
      <linearGradient id="bookGlow" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(251,191,36,0.45)" />
        <stop offset="100%" stopColor="rgba(251,191,36,0)" />
      </linearGradient>
    </defs>

    {/* 뒷배경 글로우 */}
    <circle cx="80" cy="65" r="58" fill="url(#bookGlow)" />

    {/* 열린 책 */}
    <g>
      <path
        d="M16 96 L80 80 L80 32 L18 46 Z"
        fill="rgba(255,255,255,0.94)"
        stroke="rgba(15,23,42,0.5)"
        strokeWidth="1.4"
      />
      <path
        d="M144 96 L80 80 L80 32 L142 46 Z"
        fill="rgba(255,255,255,0.94)"
        stroke="rgba(15,23,42,0.5)"
        strokeWidth="1.4"
      />
      <path
        d="M80 32 L80 80"
        stroke="rgba(15,23,42,0.35)"
        strokeWidth="1.4"
        strokeDasharray="2 3"
      />
      {/* 책장 텍스트 라인 */}
      <g stroke="rgba(251,191,36,0.55)" strokeWidth="1.6" strokeLinecap="round">
        <line x1="28" y1="58" x2="68" y2="50" />
        <line x1="28" y1="66" x2="62" y2="59" />
        <line x1="28" y1="74" x2="60" y2="68" />
      </g>
      <g stroke="rgba(251,191,36,0.4)" strokeWidth="1.6" strokeLinecap="round">
        <line x1="92" y1="50" x2="132" y2="58" />
        <line x1="92" y1="59" x2="126" y2="66" />
        <line x1="92" y1="68" x2="122" y2="74" />
      </g>
    </g>

    {/* 책갈피 */}
    <path
      d="M104 16 L104 56 L114 50 L124 56 L124 16 Z"
      fill="rgba(251,191,36,0.95)"
      stroke="rgba(180,83,9,0.7)"
      strokeWidth="1.2"
    />

    {/* sparkle 장식 */}
    <g fill="rgba(251,191,36,0.95)">
      <path d="M30 22 L33 28 L39 30 L33 32 L30 38 L27 32 L21 30 L27 28 Z" />
      <path d="M140 78 L142.5 82.5 L147 84 L142.5 85.5 L140 90 L137.5 85.5 L133 84 L137.5 82.5 Z" />
    </g>
    <g fill="rgba(255,255,255,0.85)">
      <circle cx="50" cy="20" r="1.8" />
      <circle cx="130" cy="34" r="1.8" />
      <circle cx="14" cy="80" r="1.8" />
    </g>
  </svg>
);

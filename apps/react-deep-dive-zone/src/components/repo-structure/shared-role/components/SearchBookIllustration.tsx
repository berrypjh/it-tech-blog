type Props = { className?: string };

/**
 * 다음 CTA 배너 좌측 일러스트: 책/문서 위에 돋보기.
 * “테스트 코드를 들여다보는” 인상을 inline SVG로 표현.
 */
export const SearchBookIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 160 130"
    className={className ?? 'h-28 w-32'}
    aria-hidden="true"
    role="presentation"
  >
    <defs>
      <linearGradient id="bookSearchGlow" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(125,211,252,0.40)" />
        <stop offset="100%" stopColor="rgba(125,211,252,0)" />
      </linearGradient>
    </defs>

    <circle cx="80" cy="68" r="56" fill="url(#bookSearchGlow)" />

    {/* 펼친 책 */}
    <g>
      <path
        d="M22 96 L82 84 L82 36 L22 48 Z"
        fill="rgba(255,255,255,0.95)"
        stroke="rgba(15,23,42,0.6)"
        strokeWidth="1.4"
      />
      <path
        d="M142 96 L82 84 L82 36 L142 48 Z"
        fill="rgba(255,255,255,0.95)"
        stroke="rgba(15,23,42,0.6)"
        strokeWidth="1.4"
      />
      <path
        d="M82 36 L82 84"
        stroke="rgba(15,23,42,0.35)"
        strokeWidth="1.2"
        strokeDasharray="2 3"
      />
      {/* 페이지 라인 */}
      <g stroke="rgba(125,211,252,0.7)" strokeWidth="1.4" strokeLinecap="round">
        <line x1="30" y1="60" x2="72" y2="52" />
        <line x1="30" y1="68" x2="68" y2="60" />
        <line x1="30" y1="76" x2="60" y2="68" />
      </g>
      <g stroke="rgba(94,234,212,0.7)" strokeWidth="1.4" strokeLinecap="round">
        <line x1="92" y1="52" x2="134" y2="60" />
        <line x1="92" y1="60" x2="130" y2="68" />
        <line x1="92" y1="68" x2="126" y2="76" />
      </g>
    </g>

    {/* 돋보기 */}
    <g>
      <circle
        cx="106"
        cy="44"
        r="18"
        fill="rgba(255,255,255,0.92)"
        stroke="rgba(67,56,202,0.85)"
        strokeWidth="2.4"
      />
      <circle cx="106" cy="44" r="13" fill="rgba(199,210,254,0.45)" />
      <line
        x1="120"
        y1="58"
        x2="138"
        y2="78"
        stroke="rgba(67,56,202,0.9)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>

    {/* sparkle */}
    <g fill="rgba(251,191,36,0.9)">
      <path d="M30 24 L32 28 L36 30 L32 32 L30 36 L28 32 L24 30 L28 28 Z" />
      <path d="M140 28 L142 32 L146 34 L142 36 L140 40 L138 36 L134 34 L138 32 Z" />
    </g>
  </svg>
);

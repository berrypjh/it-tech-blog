type Props = { className?: string };

/**
 * 다음 CTA 배너 좌측에 들어가는 “층이 쌓인 큐브 / 패키지 레이어” 일러스트.
 * shared 패키지의 “기반층” 인상을 inline SVG로 표현.
 */
export const LayerCubeIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 160 130"
    className={className ?? 'h-28 w-32'}
    aria-hidden="true"
    role="presentation"
  >
    <defs>
      <linearGradient id="layerGlow" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(34,211,238,0.40)" />
        <stop offset="100%" stopColor="rgba(34,211,238,0)" />
      </linearGradient>
    </defs>

    {/* 글로우 배경 */}
    <circle cx="80" cy="70" r="56" fill="url(#layerGlow)" />

    {/* 최하단 shared layer (가장 넓음) */}
    <g>
      <path
        d="M30 96 L80 80 L130 96 L80 112 Z"
        fill="rgba(94,234,212,0.95)"
        stroke="rgba(15,118,110,0.7)"
        strokeWidth="1.4"
      />
      <text
        x="80"
        y="100"
        textAnchor="middle"
        fontSize="9"
        fontFamily="monospace"
        fontWeight="700"
        fill="rgba(15,118,110,0.95)"
      >
        shared
      </text>
    </g>

    {/* 중간 scheduler layer */}
    <g>
      <path
        d="M42 76 L80 64 L118 76 L80 88 Z"
        fill="rgba(165,180,252,0.95)"
        stroke="rgba(67,56,202,0.7)"
        strokeWidth="1.4"
      />
      <text
        x="80"
        y="80"
        textAnchor="middle"
        fontSize="8"
        fontFamily="monospace"
        fontWeight="700"
        fill="rgba(67,56,202,0.95)"
      >
        scheduler
      </text>
    </g>

    {/* 상단 reconciler layer */}
    <g>
      <path
        d="M52 58 L80 50 L108 58 L80 66 Z"
        fill="rgba(216,180,254,0.95)"
        stroke="rgba(126,34,206,0.7)"
        strokeWidth="1.4"
      />
      <text
        x="80"
        y="62"
        textAnchor="middle"
        fontSize="8"
        fontFamily="monospace"
        fontWeight="700"
        fill="rgba(126,34,206,0.95)"
      >
        reconciler
      </text>
    </g>

    {/* 가장 위 react layer (작음) */}
    <g>
      <path
        d="M64 44 L80 38 L96 44 L80 50 Z"
        fill="rgba(125,211,252,0.95)"
        stroke="rgba(7,89,133,0.7)"
        strokeWidth="1.4"
      />
    </g>

    {/* sparkle 장식 */}
    <g fill="rgba(251,191,36,0.9)">
      <path d="M28 38 L30 42 L34 44 L30 46 L28 50 L26 46 L22 44 L26 42 Z" />
      <path d="M132 32 L134 36 L138 38 L134 40 L132 44 L130 40 L126 38 L130 36 Z" />
    </g>
    <g fill="rgba(255,255,255,0.85)">
      <circle cx="48" cy="20" r="1.5" />
      <circle cx="120" cy="22" r="1.5" />
    </g>
  </svg>
);

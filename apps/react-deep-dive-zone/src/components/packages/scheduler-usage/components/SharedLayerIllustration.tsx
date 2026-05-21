type Props = { className?: string };

/**
 * CTA 좌측 일러스트.
 * 겹쳐진 레이어 + 공통 기반 stacked + sparkle.
 */
export const SharedLayerIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 160 130"
    className={className ?? 'h-28 w-32'}
    aria-hidden="true"
    role="presentation"
  >
    <defs>
      <linearGradient id="layerGlow" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(56,189,248,0.55)" />
        <stop offset="100%" stopColor="rgba(56,189,248,0)" />
      </linearGradient>
      <linearGradient id="layerA" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="rgba(125,211,252,0.95)" />
        <stop offset="100%" stopColor="rgba(56,189,248,0.7)" />
      </linearGradient>
      <linearGradient id="layerB" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="rgba(45,212,191,0.95)" />
        <stop offset="100%" stopColor="rgba(20,184,166,0.7)" />
      </linearGradient>
      <linearGradient id="layerC" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="rgba(167,139,250,0.95)" />
        <stop offset="100%" stopColor="rgba(139,92,246,0.7)" />
      </linearGradient>
      <linearGradient id="layerBase" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="rgba(251,191,36,0.95)" />
        <stop offset="100%" stopColor="rgba(217,119,6,0.7)" />
      </linearGradient>
    </defs>

    {/* 배경 글로우 */}
    <circle cx="80" cy="68" r="58" fill="url(#layerGlow)" />

    {/* 겹쳐진 레이어 (위에서 아래로) */}
    <g transform="translate(80 70)">
      {/* base (가장 넓음) */}
      <path
        d="M -52 16 L 0 32 L 52 16 L 0 0 Z"
        fill="url(#layerBase)"
        stroke="rgba(15,23,42,0.45)"
        strokeWidth="1.2"
      />
      {/* layer C (purple) */}
      <path
        d="M -42 0 L 0 16 L 42 0 L 0 -16 Z"
        fill="url(#layerC)"
        stroke="rgba(15,23,42,0.45)"
        strokeWidth="1.2"
      />
      {/* layer B (teal) */}
      <path
        d="M -34 -14 L 0 0 L 34 -14 L 0 -28 Z"
        fill="url(#layerB)"
        stroke="rgba(15,23,42,0.45)"
        strokeWidth="1.2"
      />
      {/* layer A (sky, 가장 위) */}
      <path
        d="M -24 -26 L 0 -16 L 24 -26 L 0 -36 Z"
        fill="url(#layerA)"
        stroke="rgba(15,23,42,0.45)"
        strokeWidth="1.2"
      />
      {/* connecting dashed line */}
      <line
        x1="0"
        y1="-36"
        x2="0"
        y2="32"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
    </g>

    {/* sparkle */}
    <g fill="rgba(251,191,36,0.95)">
      <path d="M28 22 L31 28 L37 30 L31 32 L28 38 L25 32 L19 30 L25 28 Z" />
    </g>
    <g fill="rgba(255,255,255,0.85)">
      <circle cx="138" cy="36" r="1.6" />
      <circle cx="146" cy="84" r="1.4" />
      <circle cx="14" cy="108" r="1.4" />
    </g>
  </svg>
);

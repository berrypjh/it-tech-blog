type Props = { className?: string };

/**
 * 어두운 CTA 배너 좌측 일러스트.
 * 3D 큐브 + 노드 그래프 + sparkle을 inline SVG로 그린다.
 * react-reconciler가 렌더링 계산 엔진임을 암시한다.
 */
export const ReconcilerCubeIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 160 130"
    className={className ?? 'h-28 w-32'}
    aria-hidden="true"
    role="presentation"
  >
    <defs>
      <linearGradient id="cubeGlow" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(56,189,248,0.55)" />
        <stop offset="100%" stopColor="rgba(56,189,248,0)" />
      </linearGradient>
      <linearGradient id="cubeTop" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(125,211,252,0.95)" />
        <stop offset="100%" stopColor="rgba(56,189,248,0.6)" />
      </linearGradient>
      <linearGradient id="cubeLeft" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="rgba(20,184,166,0.95)" />
        <stop offset="100%" stopColor="rgba(13,148,136,0.6)" />
      </linearGradient>
      <linearGradient id="cubeRight" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="rgba(14,165,233,0.7)" />
        <stop offset="100%" stopColor="rgba(2,132,199,0.85)" />
      </linearGradient>
    </defs>

    {/* 뒷배경 글로우 */}
    <circle cx="80" cy="68" r="58" fill="url(#cubeGlow)" />

    {/* 노드 + 연결선 */}
    <g stroke="rgba(125,211,252,0.6)" strokeWidth="1" strokeDasharray="2 3" fill="none">
      <path d="M 24 32 L 60 50" />
      <path d="M 134 30 L 100 50" />
      <path d="M 28 100 L 60 88" />
      <path d="M 136 102 L 102 88" />
    </g>
    <g fill="rgba(125,211,252,0.95)">
      <circle cx="24" cy="32" r="3" />
      <circle cx="134" cy="30" r="3" />
      <circle cx="28" cy="100" r="3" />
      <circle cx="136" cy="102" r="3" />
    </g>

    {/* 3D 큐브 */}
    <g transform="translate(80 68)">
      {/* top face */}
      <path
        d="M -28 -18 L 0 -34 L 28 -18 L 0 -2 Z"
        fill="url(#cubeTop)"
        stroke="rgba(15,23,42,0.45)"
        strokeWidth="1.2"
      />
      {/* left face */}
      <path
        d="M -28 -18 L 0 -2 L 0 26 L -28 10 Z"
        fill="url(#cubeLeft)"
        stroke="rgba(15,23,42,0.45)"
        strokeWidth="1.2"
      />
      {/* right face */}
      <path
        d="M 28 -18 L 0 -2 L 0 26 L 28 10 Z"
        fill="url(#cubeRight)"
        stroke="rgba(15,23,42,0.45)"
        strokeWidth="1.2"
      />
      {/* highlights */}
      <path d="M -22 -16 L -2 -28" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
      <path
        d="M 0 -2 L 0 22"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
    </g>

    {/* sparkle */}
    <g fill="rgba(251,191,36,0.95)">
      <path d="M48 24 L51 30 L57 32 L51 34 L48 40 L45 34 L39 32 L45 30 Z" />
    </g>
    <g fill="rgba(255,255,255,0.85)">
      <circle cx="120" cy="50" r="1.6" />
      <circle cx="14" cy="68" r="1.6" />
      <circle cx="146" cy="76" r="1.4" />
    </g>
  </svg>
);

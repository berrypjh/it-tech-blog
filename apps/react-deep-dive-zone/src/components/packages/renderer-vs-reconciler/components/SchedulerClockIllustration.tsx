type Props = { className?: string };

/**
 * CTA 좌측 일러스트.
 * 시계 + 작업 큐 카드 + 캘린더 느낌 + sparkle.
 */
export const SchedulerClockIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 160 130"
    className={className ?? 'h-28 w-32'}
    aria-hidden="true"
    role="presentation"
  >
    <defs>
      <linearGradient id="schGlow" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(56,189,248,0.55)" />
        <stop offset="100%" stopColor="rgba(56,189,248,0)" />
      </linearGradient>
      <linearGradient id="schQueueBg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(15,23,42,0.95)" />
        <stop offset="100%" stopColor="rgba(30,41,59,0.95)" />
      </linearGradient>
    </defs>

    {/* 배경 글로우 */}
    <circle cx="80" cy="68" r="58" fill="url(#schGlow)" />

    {/* 작업 큐 카드 */}
    <g transform="translate(22 36)">
      <rect
        width="74"
        height="68"
        rx="8"
        fill="url(#schQueueBg)"
        stroke="rgba(125,211,252,0.5)"
        strokeWidth="1.2"
      />
      {/* 큐 항목 */}
      <rect x="9" y="10" width="56" height="10" rx="3" fill="rgba(125,211,252,0.9)" />
      <rect x="9" y="24" width="48" height="10" rx="3" fill="rgba(125,211,252,0.55)" />
      <rect x="9" y="38" width="40" height="10" rx="3" fill="rgba(148,163,184,0.4)" />
      <rect x="9" y="52" width="32" height="10" rx="3" fill="rgba(148,163,184,0.25)" />
    </g>

    {/* 시계 */}
    <g transform="translate(112 80)">
      <circle r="22" fill="rgba(255,255,255,0.96)" stroke="rgba(56,189,248,0.85)" strokeWidth="2" />
      <circle
        r="20"
        fill="none"
        stroke="rgba(148,163,184,0.3)"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
      {/* hour marks */}
      <line x1="0" y1="-18" x2="0" y2="-14" stroke="rgba(15,23,42,0.6)" strokeWidth="1.2" />
      <line x1="0" y1="14" x2="0" y2="18" stroke="rgba(15,23,42,0.6)" strokeWidth="1.2" />
      <line x1="-18" y1="0" x2="-14" y2="0" stroke="rgba(15,23,42,0.6)" strokeWidth="1.2" />
      <line x1="14" y1="0" x2="18" y2="0" stroke="rgba(15,23,42,0.6)" strokeWidth="1.2" />
      {/* hands */}
      <line
        x1="0"
        y1="0"
        x2="0"
        y2="-12"
        stroke="rgba(15,23,42,0.85)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="0"
        y1="0"
        x2="9"
        y2="3"
        stroke="rgba(56,189,248,0.95)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle r="1.6" fill="rgba(15,23,42,0.9)" />
    </g>

    {/* 캘린더 점선 */}
    <g stroke="rgba(125,211,252,0.6)" strokeWidth="1.2" strokeDasharray="2 3" fill="none">
      <path d="M 96 60 Q 104 70 112 78" />
    </g>

    {/* sparkle */}
    <g fill="rgba(251,191,36,0.95)">
      <path d="M30 22 L33 28 L39 30 L33 32 L30 38 L27 32 L21 30 L27 28 Z" />
    </g>
    <g fill="rgba(255,255,255,0.85)">
      <circle cx="138" cy="36" r="1.8" />
      <circle cx="14" cy="108" r="1.6" />
      <circle cx="144" cy="100" r="1.4" />
    </g>
  </svg>
);

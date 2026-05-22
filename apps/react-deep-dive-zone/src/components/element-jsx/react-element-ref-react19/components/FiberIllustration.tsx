import { cn } from '@it-tech-blog/utils';

type Props = { className?: string };

/**
 * 다음 CTA 일러스트.
 * 코드 카드 + 기어 + Fiber tree 노드 SVG.
 */
export const FiberIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 144 128"
    className={cn('text-sky-300', className)}
    role="img"
    aria-label="ref 다음 Fiber 챕터로 넘어가는 일러스트"
  >
    <ellipse cx="72" cy="68" rx="58" ry="40" className="fill-teal-500/15" />

    {/* code card */}
    <g>
      <rect
        x="10"
        y="22"
        width="60"
        height="68"
        rx="10"
        className="fill-slate-800 stroke-slate-600"
        strokeWidth="1.2"
      />
      <circle cx="18" cy="30" r="1.4" className="fill-rose-400/80" />
      <circle cx="24" cy="30" r="1.4" className="fill-amber-300/80" />
      <circle cx="30" cy="30" r="1.4" className="fill-emerald-400/80" />
      <rect x="18" y="40" width="20" height="3" rx="1" className="fill-sky-300/80" />
      <rect x="40" y="40" width="20" height="3" rx="1" className="fill-slate-500" />
      <rect x="18" y="50" width="14" height="3" rx="1" className="fill-violet-300/80" />
      <rect x="34" y="50" width="26" height="3" rx="1" className="fill-amber-200/80" />
      <rect x="18" y="60" width="22" height="3" rx="1" className="fill-emerald-300/80" />
      <rect x="42" y="60" width="18" height="3" rx="1" className="fill-slate-500" />
      <rect x="18" y="70" width="18" height="3" rx="1" className="fill-teal-300/80" />
      <rect x="38" y="70" width="22" height="3" rx="1" className="fill-slate-500" />
    </g>

    {/* gear */}
    <g transform="translate(72 24)">
      <circle r="11" cx="11" cy="11" className="fill-slate-900 stroke-teal-300" strokeWidth="1.2" />
      <circle r="3.5" cx="11" cy="11" className="fill-teal-400/80" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <rect
          key={angle}
          x="9.5"
          y="-1"
          width="3"
          height="4"
          rx="1"
          transform={`rotate(${angle} 11 11)`}
          className="fill-teal-300"
        />
      ))}
    </g>

    {/* Fiber tree */}
    <g transform="translate(80 60)">
      {/* root */}
      <circle cx="22" cy="2" r="5" className="fill-sky-400/90 stroke-white" strokeWidth="1" />
      {/* edges */}
      <line x1="22" y1="6" x2="10" y2="18" className="stroke-slate-400" strokeWidth="1.4" />
      <line x1="22" y1="6" x2="34" y2="18" className="stroke-slate-400" strokeWidth="1.4" />
      {/* children */}
      <circle cx="10" cy="22" r="4" className="fill-violet-400/90 stroke-white" strokeWidth="1" />
      <circle cx="34" cy="22" r="4" className="fill-teal-400/90 stroke-white" strokeWidth="1" />
      {/* grandchildren */}
      <line x1="10" y1="26" x2="4" y2="38" className="stroke-slate-400" strokeWidth="1.4" />
      <line x1="10" y1="26" x2="16" y2="38" className="stroke-slate-400" strokeWidth="1.4" />
      <line x1="34" y1="26" x2="28" y2="38" className="stroke-slate-400" strokeWidth="1.4" />
      <line x1="34" y1="26" x2="40" y2="38" className="stroke-slate-400" strokeWidth="1.4" />
      <circle cx="4" cy="40" r="3" className="fill-amber-300/90" />
      <circle cx="16" cy="40" r="3" className="fill-cyan-300/90" />
      <circle cx="28" cy="40" r="3" className="fill-emerald-300/90" />
      <circle cx="40" cy="40" r="3" className="fill-rose-300/90" />
    </g>

    {/* sparkles */}
    <g className="fill-amber-300/90">
      <circle cx="6" cy="14" r="1.6" />
      <circle cx="138" cy="22" r="1.4" />
      <circle cx="60" cy="118" r="1.6" />
    </g>
  </svg>
);

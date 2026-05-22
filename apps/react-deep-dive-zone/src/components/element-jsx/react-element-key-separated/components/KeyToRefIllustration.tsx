import { cn } from '@it-tech-blog/utils';

type Props = { className?: string };

/**
 * 다음 CTA 일러스트.
 * 코드 카드 + 열쇠 → 화살표 → ref tag.
 */
export const KeyToRefIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 144 128"
    className={cn('text-sky-300', className)}
    role="img"
    aria-label="key 다음으로 ref로 시선을 옮기는 일러스트"
  >
    <ellipse cx="72" cy="68" rx="58" ry="40" className="fill-sky-500/15" />

    {/* code card */}
    <g>
      <rect
        x="10"
        y="22"
        width="62"
        height="68"
        rx="10"
        className="fill-slate-800 stroke-slate-600"
        strokeWidth="1.2"
      />
      <circle cx="18" cy="30" r="1.4" className="fill-rose-400/80" />
      <circle cx="24" cy="30" r="1.4" className="fill-amber-300/80" />
      <circle cx="30" cy="30" r="1.4" className="fill-emerald-400/80" />
      {/* lines */}
      <rect x="18" y="40" width="18" height="3" rx="1" className="fill-violet-300/80" />
      <rect x="38" y="40" width="24" height="3" rx="1" className="fill-slate-500" />
      <rect x="18" y="50" width="14" height="3" rx="1" className="fill-cyan-300/80" />
      <rect x="34" y="50" width="28" height="3" rx="1" className="fill-amber-200/80" />
      <rect x="18" y="60" width="20" height="3" rx="1" className="fill-sky-300/80" />
      <rect x="40" y="60" width="20" height="3" rx="1" className="fill-slate-500" />
      <rect x="18" y="70" width="16" height="3" rx="1" className="fill-emerald-300/80" />
      <rect x="36" y="70" width="24" height="3" rx="1" className="fill-slate-500" />
    </g>

    {/* key on top */}
    <g transform="translate(34 12)">
      <circle
        cx="8"
        cy="8"
        r="6"
        className="fill-amber-400/90 stroke-amber-200"
        strokeWidth="1.2"
      />
      <circle cx="8" cy="8" r="2" className="fill-slate-900" />
      <rect x="14" y="7" width="14" height="2" rx="1" className="fill-amber-400/90" />
      <rect x="24" y="9" width="3" height="3" rx="1" className="fill-amber-400/90" />
    </g>

    {/* arrow */}
    <g transform="translate(76 50)">
      <circle r="12" cx="12" cy="12" className="fill-sky-500 stroke-sky-300" strokeWidth="1.2" />
      <path
        d="M 6 12 L 16 12 M 12 7 L 17 12 L 12 17"
        className="stroke-white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>

    {/* ref tag */}
    <g transform="translate(96 30)">
      <rect
        width="40"
        height="48"
        rx="10"
        className="fill-violet-500/30 stroke-violet-300"
        strokeWidth="1.4"
      />
      <text
        x="20"
        y="20"
        textAnchor="middle"
        className="fill-violet-100 font-mono"
        fontSize="9"
        fontWeight="700"
      >
        React 19
      </text>
      <text
        x="20"
        y="34"
        textAnchor="middle"
        className="fill-white font-mono"
        fontSize="14"
        fontWeight="800"
      >
        ref
      </text>
    </g>

    {/* sparkles */}
    <g className="fill-amber-300/90">
      <circle cx="6" cy="14" r="1.6" />
      <circle cx="138" cy="54" r="1.4" />
      <circle cx="60" cy="118" r="1.6" />
      <circle cx="112" cy="98" r="1.2" />
    </g>
  </svg>
);

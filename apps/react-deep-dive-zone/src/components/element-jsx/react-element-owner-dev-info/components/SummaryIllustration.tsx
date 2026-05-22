import { cn } from '@it-tech-blog/utils';

type Props = { className?: string };

/**
 * 다음 CTA 일러스트.
 * Element 카드 + 체크리스트 + 정리 화살표.
 */
export const SummaryIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 144 128"
    className={cn('text-sky-300', className)}
    role="img"
    aria-label="Element 챕터 전체를 하나의 흐름으로 정리하는 일러스트"
  >
    <ellipse cx="72" cy="68" rx="58" ry="40" className="fill-teal-500/15" />

    {/* element card */}
    <g>
      <rect
        x="14"
        y="20"
        width="68"
        height="74"
        rx="10"
        className="fill-slate-800 stroke-slate-600"
        strokeWidth="1.2"
      />
      {/* dots */}
      <circle cx="22" cy="28" r="1.4" className="fill-rose-400/80" />
      <circle cx="28" cy="28" r="1.4" className="fill-amber-300/80" />
      <circle cx="34" cy="28" r="1.4" className="fill-emerald-400/80" />
      {/* checklist rows */}
      {[
        { y: 40, dot: 'fill-sky-300/80', l: 24 },
        { y: 50, dot: 'fill-violet-300/80', l: 36 },
        { y: 60, dot: 'fill-teal-300/80', l: 30 },
        { y: 70, dot: 'fill-cyan-300/80', l: 38 },
        { y: 80, dot: 'fill-amber-300/80', l: 22 },
      ].map((row, i) => (
        <g key={i}>
          <rect x="22" y={row.y} width="4" height="4" rx="1" className={row.dot} />
          <rect x="30" y={row.y + 0.5} width={row.l} height="3" rx="1" className="fill-slate-500" />
        </g>
      ))}
    </g>

    {/* arrow circle */}
    <g transform="translate(94 50)">
      <circle r="14" cx="14" cy="14" className="fill-sky-500 stroke-sky-300" strokeWidth="1.2" />
      <path
        d="M 8 14 L 18 14 M 14 9 L 19 14 L 14 19"
        className="stroke-white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>

    {/* summary tag */}
    <g transform="translate(116 32)">
      <rect
        width="24"
        height="50"
        rx="6"
        className="fill-teal-500/30 stroke-teal-300"
        strokeWidth="1.2"
      />
      <text
        x="12"
        y="22"
        textAnchor="middle"
        className="fill-teal-100 font-mono"
        fontSize="6"
        fontWeight="700"
      >
        SUMMARY
      </text>
      <line x1="6" y1="30" x2="18" y2="30" className="stroke-teal-200" strokeWidth="1.2" />
      <line x1="6" y1="36" x2="18" y2="36" className="stroke-teal-200/70" strokeWidth="1.2" />
      <line x1="6" y1="42" x2="18" y2="42" className="stroke-teal-200/50" strokeWidth="1.2" />
    </g>

    {/* sparkles */}
    <g className="fill-amber-300/90">
      <circle cx="8" cy="14" r="1.6" />
      <circle cx="138" cy="20" r="1.4" />
      <circle cx="50" cy="118" r="1.6" />
    </g>
  </svg>
);

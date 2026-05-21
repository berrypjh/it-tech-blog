import { cn } from '@it-tech-blog/utils';

type Props = { className?: string };

/**
 * 다음 CTA 일러스트.
 * Trophy 모양 + 별 + 화살표 SVG.
 */
export const TrophyIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 144 128"
    className={cn('text-teal-200', className)}
    role="img"
    aria-label="챕터 완료 트로피와 다음 챕터로 향하는 화살표 일러스트"
  >
    <ellipse cx="72" cy="68" rx="58" ry="40" className="fill-teal-300/20" />

    {/* trophy */}
    <g transform="translate(36 14)">
      {/* handles */}
      <path
        d="M 10 18 Q 0 22 4 36 Q 6 42 18 42"
        fill="none"
        className="stroke-amber-300"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 50 18 Q 60 22 56 36 Q 54 42 42 42"
        fill="none"
        className="stroke-amber-300"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* cup */}
      <path
        d="M 10 10 L 50 10 L 48 40 Q 30 56 12 40 Z"
        className="fill-amber-300 stroke-amber-200"
        strokeWidth="1.5"
      />
      {/* star on cup */}
      <text x="30" y="32" textAnchor="middle" className="fill-amber-700 font-bold" fontSize="16">
        ★
      </text>
      {/* stem */}
      <rect x="26" y="56" width="8" height="14" className="fill-amber-300" />
      {/* base */}
      <rect x="14" y="68" width="32" height="6" rx="2" className="fill-amber-400" />
      <rect x="18" y="74" width="24" height="6" rx="2" className="fill-amber-500" />
    </g>

    {/* arrow circle */}
    <g transform="translate(102 56)">
      <circle r="14" cx="14" cy="14" className="fill-white stroke-teal-200" strokeWidth="1.4" />
      <path
        d="M 8 14 L 18 14 M 14 9 L 19 14 L 14 19"
        className="stroke-teal-600"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>

    {/* sparkles */}
    <g className="fill-amber-300">
      <circle cx="14" cy="20" r="1.6" />
      <circle cx="130" cy="28" r="1.4" />
      <circle cx="54" cy="118" r="1.6" />
      <circle cx="118" cy="100" r="1.2" />
      <circle cx="22" cy="104" r="1.4" />
    </g>
  </svg>
);

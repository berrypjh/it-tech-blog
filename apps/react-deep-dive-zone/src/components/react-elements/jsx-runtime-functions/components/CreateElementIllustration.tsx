import { cn } from '@it-tech-blog/utils';

type Props = { className?: string };

/**
 * 다음 CTA 일러스트.
 * 작은 코드 창 + `React.createElement` 텍스트 + 원형 화살표 + sparkle.
 */
export const CreateElementIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 144 128"
    className={cn('text-sky-300', className)}
    role="img"
    aria-label="JSX 런타임 다음으로 createElement API를 살펴봄을 표현한 일러스트"
  >
    <ellipse cx="72" cy="68" rx="58" ry="40" className="fill-sky-500/15" />

    {/* code window */}
    <g>
      <rect
        x="14"
        y="22"
        width="92"
        height="64"
        rx="10"
        className="fill-slate-800 stroke-slate-600"
        strokeWidth="1.2"
      />
      <rect x="14" y="22" width="92" height="14" rx="10" className="fill-slate-900" />
      <circle cx="22" cy="29" r="1.6" className="fill-rose-400/80" />
      <circle cx="28" cy="29" r="1.6" className="fill-amber-300/80" />
      <circle cx="34" cy="29" r="1.6" className="fill-emerald-400/80" />
      <text
        x="60"
        y="55"
        textAnchor="middle"
        className="fill-violet-200 font-mono"
        fontSize="9"
        fontWeight="700"
      >
        React
      </text>
      <text
        x="60"
        y="68"
        textAnchor="middle"
        className="fill-sky-200 font-mono"
        fontSize="9"
        fontWeight="700"
      >
        .createElement()
      </text>
      <rect x="22" y="74" width="40" height="3" rx="1.5" className="fill-slate-500" />
      <rect x="66" y="74" width="22" height="3" rx="1.5" className="fill-emerald-300/70" />
    </g>

    {/* arrow circle */}
    <g transform="translate(102 78)">
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

    {/* sparkles */}
    <g className="fill-amber-300/90">
      <circle cx="10" cy="14" r="1.6" />
      <circle cx="128" cy="48" r="1.4" />
      <circle cx="50" cy="110" r="1.6" />
      <circle cx="98" cy="14" r="1.2" />
    </g>
  </svg>
);

import { cn } from '@it-tech-blog/utils';

type Props = { className?: string };

/**
 * 다음 CTA 일러스트.
 * 작은 브라우저 창 + `</>` 코드 brackets + 원형 화살표 + 옅은 glow.
 */
export const NextRuntimeIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 144 128"
    className={cn('text-sky-300', className)}
    role="img"
    aria-label="JSX가 jsx 런타임 함수로 이어지는 모습을 표현한 일러스트"
  >
    {/* glow */}
    <ellipse cx="72" cy="68" rx="58" ry="40" className="fill-sky-500/15" />

    {/* browser window */}
    <g>
      <rect
        x="14"
        y="20"
        width="92"
        height="64"
        rx="10"
        className="fill-slate-800 stroke-slate-600"
        strokeWidth="1.2"
      />
      {/* address bar */}
      <rect x="14" y="20" width="92" height="14" rx="10" className="fill-slate-900" />
      <circle cx="22" cy="27" r="1.6" className="fill-rose-400/80" />
      <circle cx="28" cy="27" r="1.6" className="fill-amber-300/80" />
      <circle cx="34" cy="27" r="1.6" className="fill-emerald-400/80" />
      <rect x="42" y="24" width="58" height="6" rx="3" className="fill-slate-700" />
      {/* code lines */}
      <rect x="22" y="40" width="40" height="3" rx="1.5" className="fill-sky-300/70" />
      <rect x="22" y="48" width="60" height="3" rx="1.5" className="fill-slate-500" />
      <rect x="22" y="56" width="46" height="3" rx="1.5" className="fill-violet-300/80" />
      <rect x="22" y="64" width="52" height="3" rx="1.5" className="fill-slate-500" />
      <rect x="22" y="72" width="32" height="3" rx="1.5" className="fill-emerald-300/70" />
    </g>

    {/* </>  brackets */}
    <g transform="translate(96 12)">
      <circle r="18" cx="18" cy="18" className="fill-slate-950 stroke-sky-400" strokeWidth="1.4" />
      <text
        x="18"
        y="22"
        textAnchor="middle"
        className="fill-sky-300 font-mono"
        fontSize="11"
        fontWeight="700"
      >
        {'</>'}
      </text>
    </g>

    {/* arrow circle */}
    <g transform="translate(104 80)">
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
      <circle cx="128" cy="56" r="1.4" />
      <circle cx="50" cy="110" r="1.6" />
      <circle cx="84" cy="104" r="1.2" />
    </g>
  </svg>
);

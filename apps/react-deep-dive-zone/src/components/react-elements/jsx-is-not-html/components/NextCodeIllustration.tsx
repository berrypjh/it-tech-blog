import { cn } from '@it-tech-blog/utils';

type Props = { className?: string };

/**
 * 다음 CTA의 좌측 일러스트.
 * 작은 코드 창 + `</>` brackets + 톱니바퀴 + sparkle dot 조합.
 * 이미지 asset 없이 SVG로만 구성.
 */
export const NextCodeIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 144 128"
    className={cn('text-sky-300', className)}
    role="img"
    aria-label="JSX가 코드로 변환되는 모습을 표현한 일러스트"
  >
    {/* 코드 창 */}
    <rect
      x="14"
      y="22"
      width="92"
      height="68"
      rx="10"
      className="fill-slate-800 stroke-slate-600"
      strokeWidth="1.2"
    />
    {/* macOS dots */}
    <circle cx="24" cy="32" r="2" className="fill-rose-400/80" />
    <circle cx="32" cy="32" r="2" className="fill-amber-300/80" />
    <circle cx="40" cy="32" r="2" className="fill-emerald-400/80" />
    {/* code lines */}
    <rect x="22" y="42" width="34" height="3" rx="1.5" className="fill-sky-300/70" />
    <rect x="22" y="50" width="58" height="3" rx="1.5" className="fill-slate-500" />
    <rect x="22" y="58" width="46" height="3" rx="1.5" className="fill-violet-300/80" />
    <rect x="22" y="66" width="50" height="3" rx="1.5" className="fill-slate-500" />
    <rect x="22" y="74" width="34" height="3" rx="1.5" className="fill-emerald-300/70" />

    {/* </>  brackets */}
    <g transform="translate(96 16)">
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

    {/* gear */}
    <g transform="translate(104 78)">
      <circle
        r="14"
        cx="14"
        cy="14"
        className="fill-slate-900 stroke-violet-300"
        strokeWidth="1.2"
      />
      <circle r="4" cx="14" cy="14" className="fill-slate-950 stroke-violet-300" strokeWidth="1" />
      {/* teeth */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <rect
          key={angle}
          x="12.5"
          y="-1"
          width="3"
          height="4"
          rx="1"
          transform={`rotate(${angle} 14 14) translate(0 1)`}
          className="fill-violet-300"
        />
      ))}
    </g>

    {/* sparkles */}
    <g className="fill-amber-300/90">
      <circle cx="10" cy="14" r="1.6" />
      <circle cx="128" cy="58" r="1.4" />
      <circle cx="58" cy="112" r="1.6" />
    </g>
  </svg>
);

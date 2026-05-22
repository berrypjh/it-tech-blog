import { cn } from '@it-tech-blog/utils';

type Props = { className?: string };

/**
 * 다음 CTA 일러스트.
 * 카드 위에 key 아이콘 + 작은 코드 기호.
 */
export const KeyIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 144 128"
    className={cn('text-sky-300', className)}
    role="img"
    aria-label="다음 챕터인 key 개념을 여는 열쇠 일러스트"
  >
    <ellipse cx="72" cy="68" rx="58" ry="40" className="fill-sky-500/15" />

    {/* card */}
    <g>
      <rect
        x="14"
        y="30"
        width="80"
        height="60"
        rx="10"
        className="fill-slate-800 stroke-slate-600"
        strokeWidth="1.2"
      />
      <rect x="22" y="42" width="24" height="3" rx="1" className="fill-cyan-300/80" />
      <rect x="50" y="42" width="38" height="3" rx="1" className="fill-slate-500" />
      <rect x="22" y="52" width="18" height="3" rx="1" className="fill-violet-300/80" />
      <rect x="44" y="52" width="40" height="3" rx="1" className="fill-amber-200/80" />
      <rect x="22" y="62" width="24" height="3" rx="1" className="fill-emerald-300/80" />
      <rect x="50" y="62" width="34" height="3" rx="1" className="fill-slate-500" />
      <rect x="22" y="72" width="20" height="3" rx="1" className="fill-sky-300/80" />
      <rect x="46" y="72" width="40" height="3" rx="1" className="fill-slate-500" />
    </g>

    {/* key icon */}
    <g transform="translate(96 18)">
      <circle
        r="14"
        cx="14"
        cy="14"
        className="fill-amber-400/90 stroke-amber-200"
        strokeWidth="1.4"
      />
      <circle r="5" cx="14" cy="14" className="fill-slate-900" />
      {/* shaft */}
      <rect x="26" y="13" width="22" height="3" rx="1" className="fill-amber-400/90" />
      {/* teeth */}
      <rect x="42" y="16" width="4" height="5" rx="1" className="fill-amber-400/90" />
      <rect x="34" y="16" width="4" height="5" rx="1" className="fill-amber-400/90" />
    </g>

    {/* sparkles */}
    <g className="fill-amber-300/90">
      <circle cx="10" cy="20" r="1.6" />
      <circle cx="124" cy="58" r="1.4" />
      <circle cx="50" cy="110" r="1.6" />
      <circle cx="100" cy="100" r="1.2" />
    </g>
  </svg>
);

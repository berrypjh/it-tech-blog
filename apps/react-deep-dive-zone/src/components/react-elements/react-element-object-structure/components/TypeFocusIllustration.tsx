import { cn } from '@it-tech-blog/utils';

type Props = { className?: string };

/**
 * 다음 CTA 일러스트.
 * 작은 객체 카드 + 돋보기 + `type` 타겟팅 화살표.
 */
export const TypeFocusIllustration = ({ className }: Props) => (
  <svg
    viewBox="0 0 144 128"
    className={cn('text-sky-300', className)}
    role="img"
    aria-label="Element 객체에서 type 필드로 초점이 이동하는 모습을 표현한 일러스트"
  >
    <ellipse cx="72" cy="68" rx="58" ry="40" className="fill-sky-500/15" />

    {/* object card */}
    <g>
      <rect
        x="14"
        y="22"
        width="84"
        height="74"
        rx="10"
        className="fill-slate-800 stroke-slate-600"
        strokeWidth="1.2"
      />
      {/* lines */}
      <text x="22" y="38" className="fill-slate-400 font-mono" fontSize="7">
        {'{'}
      </text>
      <rect x="28" y="44" width="20" height="3" rx="1" className="fill-cyan-300/80" />
      <rect x="52" y="44" width="40" height="3" rx="1" className="fill-amber-200/80" />
      <rect x="28" y="54" width="14" height="3" rx="1" className="fill-sky-300/80" />
      <rect x="46" y="54" width="28" height="3" rx="1" className="fill-emerald-300/80" />
      <rect x="28" y="64" width="14" height="3" rx="1" className="fill-violet-300/80" />
      <rect x="46" y="64" width="20" height="3" rx="1" className="fill-slate-400/80" />
      <rect x="28" y="74" width="18" height="3" rx="1" className="fill-teal-300/80" />
      <rect x="50" y="74" width="36" height="3" rx="1" className="fill-slate-400/80" />
      <text x="22" y="92" className="fill-slate-400 font-mono" fontSize="7">
        {'}'}
      </text>
    </g>

    {/* magnifier */}
    <g>
      <circle cx="102" cy="52" r="18" className="fill-transparent stroke-sky-300" strokeWidth="2" />
      <circle cx="102" cy="52" r="14" className="fill-sky-500/20" />
      <text
        x="102"
        y="56"
        textAnchor="middle"
        className="fill-sky-200 font-mono"
        fontSize="9"
        fontWeight="700"
      >
        type
      </text>
      <line
        x1="115"
        y1="65"
        x2="128"
        y2="78"
        className="stroke-sky-300"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>

    {/* sparkles */}
    <g className="fill-amber-300/90">
      <circle cx="10" cy="14" r="1.6" />
      <circle cx="128" cy="22" r="1.4" />
      <circle cx="118" cy="100" r="1.6" />
    </g>
  </svg>
);

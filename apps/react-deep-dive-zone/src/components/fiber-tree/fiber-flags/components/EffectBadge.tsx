import { cn } from '@it-tech-blog/utils';

import type { EffectKind } from '../content';

import { EFFECT_NEUTRAL, effectDot, effectText } from './effectStyles';

type Props = { effect: EffectKind; children: React.ReactNode; className?: string };

/** 중립 칩 크롬 + effect 색 점/텍스트로 effect flag를 표시하는 공통 배지. */
export const EffectBadge = ({ effect, children, className }: Props) => (
  <span
    className={cn(
      'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[11px] font-bold whitespace-nowrap',
      EFFECT_NEUTRAL,
      effectText[effect],
      className,
    )}
  >
    <span
      aria-hidden="true"
      className={cn('inline-block h-1 w-1 rounded-full', effectDot[effect])}
    />
    {children}
  </span>
);

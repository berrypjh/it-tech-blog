import { Check, CircleDashed, type LucideIcon, Minus, X } from 'lucide-react';

import { IconLabel } from './IconLabel';

/** 04장 판정 기록의 네 판정. */
export type VerdictId = 'pass' | 'fail' | 'na' | 'unconfirmed';

/** 판정마다 하나로 정한 아이콘과 색. 통과 · 실패 · 미확인은 실습 체크 항목(CheckRow)과 같은 그림을 쓴다. */
const verdicts: Record<VerdictId, { icon: LucideIcon; tone: string }> = {
  pass: { icon: Check, tone: 'text-text-success' },
  fail: { icon: X, tone: 'text-text-error' },
  na: { icon: Minus, tone: 'text-text-light' },
  unconfirmed: { icon: CircleDashed, tone: 'text-text-light' },
};

/** 판정 아이콘과 판정 글자. 뜻은 글자가 전달하고 아이콘 · 색은 덧붙인 단서다. */
export const VerdictLabel = ({ id, children }: { id: VerdictId; children: React.ReactNode }) => (
  <IconLabel icon={verdicts[id].icon} tone={verdicts[id].tone}>
    {children}
  </IconLabel>
);

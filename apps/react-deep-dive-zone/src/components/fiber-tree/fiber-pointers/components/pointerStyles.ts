import { type LucideIcon, MoveDown, MoveRight, MoveUp } from 'lucide-react';

import type { ToneKey } from '../../../shared/tones';
import type { PointerKind } from '../content';

/** 포인터별 고정 톤: child=emerald, sibling=violet, return=sky. 색은 shared toneTokens로. */
export const pointerTone: Record<PointerKind, ToneKey> = {
  child: 'emerald',
  sibling: 'violet',
  return: 'sky',
};

/** return은 "되돌아감"을 점선으로 표현한다. */
export const pointerDashed: Record<PointerKind, boolean> = {
  child: false,
  sibling: false,
  return: true,
};

/** 포인터 방향 아이콘: child ↓, sibling →, return ↑. */
export const pointerIcon: Record<PointerKind, LucideIcon> = {
  child: MoveDown,
  sibling: MoveRight,
  return: MoveUp,
};

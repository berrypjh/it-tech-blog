import type { ToneKey } from '../../../shared/tones';
import type { FieldKind } from '../content';

/** 필드 정체성 톤: memoizedState=emerald, updateQueue=violet. */
export const fieldTone: Record<FieldKind, ToneKey> = {
  memoizedState: 'emerald',
  updateQueue: 'violet',
};

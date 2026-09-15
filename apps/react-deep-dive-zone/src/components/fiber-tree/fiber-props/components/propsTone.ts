import type { ToneKey } from '../../../shared/tones';
import type { PropsKind } from '../content';

/** props 종류별 고정 톤: pendingProps=sky(이번 입력), memoizedProps=emerald(지난 입력). */
export const propsTone: Record<PropsKind, ToneKey> = {
  pendingProps: 'sky',
  memoizedProps: 'emerald',
};

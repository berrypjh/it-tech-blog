import type { ToneKey } from '../../getting-started/_shared/tones';

export type ValueKey =
  | 'element'
  | 'fiber'
  | 'stateNode'
  | 'updateQueue'
  | 'memoizedState'
  | 'flags'
  | 'lanes';

/**
 * 값 종류별 일관된 톤 매핑. flags는 toneTokens에 slate가 없어 별도 처리한다.
 * - element=blue, fiber=violet, stateNode=cyan, updateQueue=amber,
 *   memoizedState=emerald, lanes=indigo, flags=slate(전용 클래스)
 */
export const valueToneKey: Record<Exclude<ValueKey, 'flags'>, ToneKey> = {
  element: 'blue',
  fiber: 'violet',
  stateNode: 'cyan',
  updateQueue: 'amber',
  memoizedState: 'emerald',
  lanes: 'indigo',
};

export const flagsSlate = {
  text: 'text-slate-700 dark:text-slate-300',
  chip: 'bg-slate-100 text-slate-800 border-slate-300 dark:bg-slate-800/60 dark:text-slate-100 dark:border-slate-600',
  border: 'border-slate-300 dark:border-slate-700',
  borderHover: 'hover:border-slate-500 dark:hover:border-slate-500/80',
  dot: 'bg-slate-500 dark:bg-slate-400',
} as const;

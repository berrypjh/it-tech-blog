import type { ToneKey } from '../../shared/tones';

export type PackageKey =
  | 'react'
  | 'react-dom'
  | 'react-dom-bindings'
  | 'react-reconciler'
  | 'scheduler'
  | 'shared';

/**
 * 패키지별 톤. shared는 toneTokens에 slate가 없어 단독으로 inline 스타일을 쓴다.
 * 이 맵은 toneTokens가 있는 5개 패키지만 다룬다.
 */
export const packageToneKey: Record<Exclude<PackageKey, 'shared'>, ToneKey> = {
  react: 'blue',
  'react-dom': 'cyan',
  'react-dom-bindings': 'teal',
  'react-reconciler': 'violet',
  scheduler: 'emerald',
};

/** shared 패키지 전용 slate class 묶음. */
export const sharedSlate = {
  text: 'text-slate-700 dark:text-slate-300',
  chip: 'bg-slate-100 text-slate-800 border-slate-300 dark:bg-slate-800/60 dark:text-slate-100 dark:border-slate-600',
  border: 'border-slate-300 dark:border-slate-700',
  borderHover: 'hover:border-slate-500 dark:hover:border-slate-500/80',
  dot: 'bg-slate-500 dark:bg-slate-400',
} as const;

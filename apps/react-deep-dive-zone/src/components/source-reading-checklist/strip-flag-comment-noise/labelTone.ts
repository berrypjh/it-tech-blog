import type { ToneKey } from '../../shared/tones';

/** 이 페이지의 라벨 종류. */
export type LabelKey = 'dev' | 'feature-flag' | 'type' | 'comment' | 'core' | 'legacy' | 'env';

export const labelToneKey: Record<Exclude<LabelKey, 'legacy'>, ToneKey> = {
  dev: 'amber',
  'feature-flag': 'violet',
  type: 'blue',
  comment: 'emerald',
  core: 'indigo',
  env: 'cyan',
};

export const labelText: Record<LabelKey, string> = {
  dev: 'DEV only',
  'feature-flag': 'feature flag',
  type: 'type definition',
  comment: 'design comment',
  core: 'core path',
  legacy: 'legacy',
  env: 'environment',
};

/** legacy 전용 slate 클래스. */
export const legacySlate = {
  text: 'text-slate-700 dark:text-slate-300',
  chip: 'bg-slate-100 text-slate-800 border-slate-300 dark:bg-slate-800/60 dark:text-slate-100 dark:border-slate-600',
  border: 'border-slate-300 dark:border-slate-700',
  borderHover: 'hover:border-slate-500 dark:hover:border-slate-500/80',
  dot: 'bg-slate-500 dark:bg-slate-400',
} as const;

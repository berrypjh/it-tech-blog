import type { ToneKey } from '../../getting-started/_shared/tones';

/** call path step의 의미별 톤 매핑. */
export type StepKind = 'api' | 'lane' | 'scheduling' | 'render' | 'result' | 'extra';

export const stepToneKey: Record<StepKind, ToneKey> = {
  api: 'blue',
  lane: 'indigo',
  scheduling: 'violet',
  render: 'cyan',
  result: 'emerald',
  extra: 'amber',
};

export const stepLabel: Record<StepKind, string> = {
  api: 'API call',
  lane: 'lane',
  scheduling: 'scheduling',
  render: 'render',
  result: 'result',
  extra: 'extra',
};

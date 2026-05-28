import type { ToneKey } from '../../shared/tones';

/** 이 페이지의 역할 색상 매핑. */
export type RoleKey = 'implementation' | 'test' | 'intent' | 'edge' | 'regression';

export const roleToneKey: Record<RoleKey, ToneKey> = {
  implementation: 'blue',
  test: 'violet',
  intent: 'emerald',
  edge: 'amber',
  regression: 'amber',
};

export const roleLabel: Record<RoleKey, string> = {
  implementation: 'Implementation',
  test: 'Test',
  intent: 'Intent',
  edge: 'Edge Case',
  regression: 'Regression',
};

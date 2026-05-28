import type { ToneKey } from '../../shared/tones';

export type PhaseKey = 'scheduling' | 'render' | 'commit';

/**
 * phase별 일관된 톤 매핑.
 * - Scheduling=blue (작업 예약 / 우선순위)
 * - Render=violet (다음 트리 계산)
 * - Commit=emerald (실제 환경 반영)
 */
export const phaseToneKey: Record<PhaseKey, ToneKey> = {
  scheduling: 'blue',
  render: 'violet',
  commit: 'emerald',
};

export const phaseLabel: Record<PhaseKey, string> = {
  scheduling: 'Scheduling',
  render: 'Render',
  commit: 'Commit',
};

import type { ToneKey } from '../../shared/tones';

/** 이 페이지의 4개 상태 톤. */
export type AspectKey = 'reading' | 'compression' | 'note' | 'completion';

/**
 * - reading: 아직 정리되지 않은 raw 코드 (amber, 보조 톤)
 * - compression: 압축·연결·재구성 (blue, 주 톤)
 * - note: 내 학습 노트 / 내 말로 (emerald)
 * - completion: 코스 완료 (violet)
 */
export const aspectToneKey: Record<AspectKey, ToneKey> = {
  reading: 'amber',
  compression: 'blue',
  note: 'emerald',
  completion: 'violet',
};

export const aspectLabel: Record<AspectKey, string> = {
  reading: 'Reading',
  compression: 'Compression',
  note: 'Note',
  completion: 'Completion',
};

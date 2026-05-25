import type { ToneKey } from '../../getting-started/_shared/tones';

/** 이 페이지의 정보 역할. */
export type RoleKey = 'old' | 'modern' | 'official' | 'tag' | 'mismatch';

/**
 * - old / 과거 강의: amber
 * - modern / 최신 코드: blue
 * - official / 공식 자료: violet
 * - tag / 고정 코드: emerald
 * - mismatch / 경고: amber (red 톤이 없어 동일 톤 재사용)
 */
export const roleToneKey: Record<RoleKey, ToneKey> = {
  old: 'amber',
  modern: 'blue',
  official: 'violet',
  tag: 'emerald',
  mismatch: 'amber',
};

export const roleLabel: Record<RoleKey, string> = {
  old: 'Old / Legacy',
  modern: 'Modern',
  official: 'Official',
  tag: 'Tag',
  mismatch: 'Mismatch',
};

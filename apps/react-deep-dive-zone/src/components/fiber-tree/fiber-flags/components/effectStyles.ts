import { toneTokens } from '../../../shared/tones';
import type { EffectKind } from '../content';

/**
 * effect 톤은 fiber 트리 노드 색 규약(repo-structure FiberTreeCard)을 따른다.
 * 크롬은 항상 중립(surface + term-border)이고, 강조는 텍스트/점 색만 입힌다.
 * placement·update는 toneTokens, childDeletion(삭제)은 의미색 rose를 그대로 쓴다.
 */
export const EFFECT_NEUTRAL = 'border-[var(--term-border)] bg-[var(--term-surface)]';

export const effectText: Record<EffectKind, string> = {
  placement: toneTokens.emerald.text,
  update: toneTokens.sky.text,
  childDeletion: 'text-rose-600 dark:text-rose-300',
};

export const effectDot: Record<EffectKind, string> = {
  placement: toneTokens.emerald.dot,
  update: toneTokens.sky.dot,
  childDeletion: 'bg-rose-400 dark:bg-rose-500',
};

export const effectBorder: Record<EffectKind, string> = {
  placement: toneTokens.emerald.border,
  update: toneTokens.sky.border,
  childDeletion: 'border-rose-200/70 dark:border-rose-800/60',
};

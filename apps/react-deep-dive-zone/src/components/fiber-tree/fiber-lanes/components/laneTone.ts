import { type ToneTokens, toneTokens } from '../../../shared/tones';
import type { LaneTone } from '../content';

type LaneStyle = Pick<ToneTokens, 'text' | 'chip' | 'dot' | 'border' | 'borderHover'>;

/** slate = 낮은 우선순위(중립). 색이 아니라 --term-* 중립 토큰으로 표현한다. */
const NEUTRAL: LaneStyle = {
  text: 'text-[var(--term-muted)]',
  chip: 'bg-[var(--term-surface)] border-[var(--term-border)] text-[var(--term-muted)]',
  dot: 'bg-[var(--term-dim)]',
  border: 'border-[var(--term-border)]',
  borderHover: 'hover:border-[var(--term-accent)]',
};

/** LaneTone → 색 토큰. 표준 톤은 toneTokens, slate는 중립 토큰. */
export const laneStyle = (tone: LaneTone): LaneStyle =>
  tone === 'slate' ? NEUTRAL : toneTokens[tone];

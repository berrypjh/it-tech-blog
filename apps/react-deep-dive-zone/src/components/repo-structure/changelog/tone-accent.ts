import type { ToneKey } from '../../shared/tones';

/**
 * 중립 크롬 + 소프트 텍스트 액센트 토큰.
 * shared toneTokens의 틴트(bg-*-50 등)를 대체하는 로컬 헬퍼.
 * A=accent / B=sky / C=violet 3색 순환. 부정=rose.
 */
export type AccentTokens = {
  /** 카드/칩 텍스트 액센트 */
  text: string;
  /** 배지·아이콘박스 칩(중립 크롬 + 텍스트만 색) */
  chip: string;
  /** 카드 테두리(중립) */
  border: string;
  /** hover 테두리(accent) */
  borderHover: string;
  /** 작은 점/ribbon solid */
  dot: string;
};

const NEUTRAL_CHIP = 'bg-[var(--term-surface)] border-[var(--term-border)]';
const NEUTRAL_BORDER = 'border-[var(--term-border)]';
const NEUTRAL_BORDER_HOVER = 'hover:border-[var(--term-accent)]';

const A: AccentTokens = {
  text: 'text-[var(--term-accent)]',
  chip: `${NEUTRAL_CHIP} text-[var(--term-accent)]`,
  border: NEUTRAL_BORDER,
  borderHover: NEUTRAL_BORDER_HOVER,
  dot: 'bg-[var(--term-accent)]',
};

const B: AccentTokens = {
  text: 'text-sky-600 dark:text-sky-300',
  chip: `${NEUTRAL_CHIP} text-sky-600 dark:text-sky-300`,
  border: NEUTRAL_BORDER,
  borderHover: NEUTRAL_BORDER_HOVER,
  dot: 'bg-sky-400 dark:bg-sky-500',
};

const C: AccentTokens = {
  text: 'text-violet-600 dark:text-violet-300',
  chip: `${NEUTRAL_CHIP} text-violet-600 dark:text-violet-300`,
  border: NEUTRAL_BORDER,
  borderHover: NEUTRAL_BORDER_HOVER,
  dot: 'bg-violet-400 dark:bg-violet-500',
};

/**
 * content.ts의 ToneKey를 3색 순환으로 매핑한다.
 * Releases 계열(violet/emerald) = A, CHANGELOG 계열(teal) = B, 통합(blue/indigo) = C.
 */
export const accentByTone: Record<ToneKey, AccentTokens> = {
  amber: A,
  emerald: A,
  violet: A,
  teal: B,
  sky: B,
  cyan: B,
  blue: C,
  indigo: C,
};

/** 순서 기반 3색 순환(A/B/C) — 타임라인·트레이스 단계용 */
export const accentCycle: AccentTokens[] = [A, B, C];

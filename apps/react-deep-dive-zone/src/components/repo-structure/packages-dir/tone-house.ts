import type { ToneKey } from './content';

/**
 * content의 tone(teal/emerald/sky/...)을 하우스 토큰으로 매핑.
 * 컬러 틴트/초록을 없애고 "중립 크롬 + 소프트 텍스트 액센트 3색 순환"으로 통일한다.
 * A=accent(amber/emerald/teal), B=sky(sky/blue/cyan), C=violet(violet/indigo).
 */
export type HouseTone = {
  /** 소프트 텍스트 액센트 */
  text: string;
  /** 작은 점/마커 solid */
  dot: string;
  /** 카드 크롬: 중립 표면 + accent hover */
  border: string;
  borderHover: string;
  /** 배지·아이콘 박스 크롬: 중립 표면, 텍스트만 색 */
  chip: string;
};

const CHROME_BORDER = 'border-[var(--term-border)]';
const CHROME_HOVER = 'hover:border-[var(--term-accent)]';

const A: HouseTone = {
  text: 'text-[var(--term-accent)]',
  dot: 'bg-[var(--term-accent)]',
  border: CHROME_BORDER,
  borderHover: CHROME_HOVER,
  chip: 'bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)]',
};

const B: HouseTone = {
  text: 'text-sky-600 dark:text-sky-300',
  dot: 'bg-sky-400 dark:bg-sky-500',
  border: CHROME_BORDER,
  borderHover: CHROME_HOVER,
  chip: 'bg-[var(--term-surface)] border border-[var(--term-border)] text-sky-600 dark:text-sky-300',
};

const C: HouseTone = {
  text: 'text-violet-600 dark:text-violet-300',
  dot: 'bg-violet-400 dark:bg-violet-500',
  border: CHROME_BORDER,
  borderHover: CHROME_HOVER,
  chip: 'bg-[var(--term-surface)] border border-[var(--term-border)] text-violet-600 dark:text-violet-300',
};

const TONE_HOUSE: Record<ToneKey, HouseTone> = {
  amber: A,
  emerald: A,
  teal: A,
  sky: B,
  blue: B,
  cyan: B,
  violet: C,
  indigo: C,
};

/** tone → 하우스 토큰 */
export const houseTone = (tone: ToneKey): HouseTone => TONE_HOUSE[tone];

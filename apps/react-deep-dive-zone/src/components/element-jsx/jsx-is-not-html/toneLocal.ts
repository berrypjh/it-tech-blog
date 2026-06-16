import type { ToneKey } from '../../shared/tones';

/** A/B/C 3색 순환 텍스트 액센트 버킷. */
export type AccentBucket = 'A' | 'B' | 'C';

/** content.ts의 ToneKey를 amber 하우스 A/B/C 버킷으로 정규화한다. */
const toneToBucket: Record<ToneKey, AccentBucket> = {
  teal: 'A',
  emerald: 'A',
  amber: 'A',
  sky: 'B',
  blue: 'B',
  cyan: 'B',
  violet: 'C',
  indigo: 'C',
};

/** 텍스트 액센트(A=term-accent / B=sky / C=violet). */
const bucketText: Record<AccentBucket, string> = {
  A: 'text-[var(--term-accent)]',
  B: 'text-sky-600 dark:text-sky-300',
  C: 'text-violet-600 dark:text-violet-300',
};

/** 작은 점/ribbon solid 색(A=term-accent / B=sky / C=violet). */
const bucketDot: Record<AccentBucket, string> = {
  A: 'bg-[var(--term-accent)]',
  B: 'bg-sky-400 dark:bg-sky-500',
  C: 'bg-violet-400 dark:bg-violet-500',
};

export const toneBucket = (tone: ToneKey): AccentBucket => toneToBucket[tone];

export const accentText = (tone: ToneKey): string => bucketText[toneToBucket[tone]];

export const accentDot = (tone: ToneKey): string => bucketDot[toneToBucket[tone]];

/** 중립 크롬 배지/아이콘박스: 표면+테두리(텍스트만 액센트로 덧입힘). */
export const chromeChip = 'bg-[var(--term-surface)] border border-[var(--term-border)]';

/** 카드 hover 시 액센트 테두리로 강조. */
export const chromeHover = 'hover:border-[var(--term-accent)]';

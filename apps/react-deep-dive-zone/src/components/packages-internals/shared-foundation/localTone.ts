import type { ToneKey } from './content';

/**
 * 페이지 로컬 톤 헬퍼.
 * shared/tones 의 색상 칩 대신 amber 터미널 하우스 패턴을 적용한다.
 * tone → 소프트 텍스트 액센트(A/B/C) + 중립 크롬.
 */
export type SoftAccent = 'A' | 'B' | 'C';

/** tone 키를 3색 소프트 액센트로 매핑한다. */
export const toneAccent = (tone: ToneKey): SoftAccent => {
  switch (tone) {
    case 'sky':
    case 'blue':
    case 'cyan':
      return 'B';
    case 'violet':
    case 'indigo':
      return 'C';
    default:
      // teal / emerald / amber → A
      return 'A';
  }
};

/** 소프트 액센트 텍스트 색상 클래스. */
export const accentText: Record<SoftAccent, string> = {
  A: 'text-[var(--term-accent)]',
  B: 'text-sky-600 dark:text-sky-300',
  C: 'text-violet-600 dark:text-violet-300',
};

/** 중립 크롬 박스(아이콘/배지). 텍스트 색은 별도로 얹는다. */
export const neutralChrome = 'bg-[var(--term-surface)] border border-[var(--term-border)]';

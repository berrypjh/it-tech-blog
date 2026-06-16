import type { ToneKey } from './content';

/** 소프트 텍스트 액센트 3색. A=accent / B=sky / C=violet */
export const ACCENT_A = 'text-[var(--term-accent)]';
export const ACCENT_B = 'text-sky-600 dark:text-sky-300';
export const ACCENT_C = 'text-violet-600 dark:text-violet-300';

/** tone 필드를 amber 하우스 소프트 텍스트 액센트로 매핑한다. */
export const toneText = (tone: ToneKey): string => {
  switch (tone) {
    case 'sky':
    case 'blue':
    case 'cyan':
      return ACCENT_B;
    case 'violet':
    case 'indigo':
      return ACCENT_C;
    default:
      // teal / emerald / amber 등 → accent
      return ACCENT_A;
  }
};

/** 아이콘 박스/배지용 중립 크롬(항상 동일). 텍스트 색은 별도로 toneText로 입힌다. */
export const HOUSE_CHROME = 'bg-[var(--term-surface)] border border-[var(--term-border)]';

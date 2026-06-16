/**
 * 디자인 시스템 하우스 토큰 — 중립 크롬 + 3색 소프트 텍스트 순환.
 * 반복 항목은 위치(index)로 A(accent) / B(sky) / C(violet)를 순환한다.
 */
export type HouseTone = {
  /** 카드/박스 크롬: 중립 표면 + accent hover */
  card: string;
  /** 배지·아이콘 박스 크롬: 중립 표면 + 텍스트만 색 */
  chip: string;
  /** 소프트 텍스트 액센트 */
  text: string;
  /** 작은 점/마커 solid */
  dot: string;
};

const CARD =
  'bg-[var(--term-surface)] border-[var(--term-border)] hover:border-[var(--term-accent)]';

export const houseTones: [HouseTone, HouseTone, HouseTone] = [
  {
    card: CARD,
    chip: 'bg-[var(--term-surface)] border-[var(--term-border)] text-[var(--term-accent)]',
    text: 'text-[var(--term-accent)]',
    dot: 'bg-[var(--term-accent)]',
  },
  {
    card: CARD,
    chip: 'bg-[var(--term-surface)] border-[var(--term-border)] text-sky-600 dark:text-sky-300',
    text: 'text-sky-600 dark:text-sky-300',
    dot: 'bg-sky-400 dark:bg-sky-500',
  },
  {
    card: CARD,
    chip: 'bg-[var(--term-surface)] border-[var(--term-border)] text-violet-600 dark:text-violet-300',
    text: 'text-violet-600 dark:text-violet-300',
    dot: 'bg-violet-400 dark:bg-violet-500',
  },
];

/** index → 3색 순환 하우스 토큰 */
export const houseToneByIndex = (index: number): HouseTone => houseTones[index % 3];

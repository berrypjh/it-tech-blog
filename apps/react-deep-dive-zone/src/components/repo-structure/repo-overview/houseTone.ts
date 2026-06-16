/**
 * amber 하우스 3색 순환 토큰.
 * 반복 항목은 인덱스로 A→B→C를 돌리고, 단일 항목은 A를 쓴다.
 * 색은 텍스트/작은 마커에만 쓰고 크롬(테두리/배경)은 중립 term 토큰을 쓴다.
 */
export type HouseTone = { text: string; marker: string };

const cycle: HouseTone[] = [
  { text: 'text-[var(--term-accent)]', marker: 'bg-[var(--term-accent)]' },
  { text: 'text-sky-600 dark:text-sky-300', marker: 'bg-sky-400 dark:bg-sky-500' },
  { text: 'text-violet-600 dark:text-violet-300', marker: 'bg-violet-400 dark:bg-violet-500' },
];

/** 인덱스 기반 3색 순환. 단일 항목이면 index 0(A)을 넘긴다. */
export const houseToneAt = (index: number): HouseTone => cycle[index % cycle.length];

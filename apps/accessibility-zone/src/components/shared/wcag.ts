/** WCAG 2.2 성공 기준의 Understanding 문서 주소. slug는 W3C 주소의 마지막 부분(예: page-titled). */
export const understanding = (slug: string) =>
  `https://www.w3.org/WAI/WCAG22/Understanding/${slug}.html`;

/** WCAG 2.2 W3C Recommendation(2024-12-12 판)의 절 주소. anchor는 원문의 id(예: target-size-minimum, cc2). */
export const wcag22 = (anchor: string) =>
  `https://www.w3.org/TR/2024/REC-WCAG22-20241212/#${anchor}`;

/** 04장 근거를 공식 원문에서 확인한 날. */
export const CHECKED_ON = { ko: '2026년 11월 6일 확인', en: 'Checked November 6, 2026' };

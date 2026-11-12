/** WAI-ARIA 1.2 W3C Recommendation(2023-06-06 판)의 절 주소. anchor는 원문의 id(예: button, aria-owns). */
export const aria12 = (anchor: string) =>
  `https://www.w3.org/TR/2023/REC-wai-aria-1.2-20230606/#${anchor}`;

/** ARIA in HTML W3C Recommendation(2026-08-11 판)의 절 주소. anchor는 원문의 id(예: el-button, att-disabled). */
export const htmlAria = (anchor: string) =>
  `https://www.w3.org/TR/2026/REC-html-aria-20260811/#${anchor}`;

/** WHATWG HTML Living Standard의 절 주소. page는 multipage 파일 이름(예: interaction). */
export const whatwg = (page: string, anchor: string) =>
  `https://html.spec.whatwg.org/multipage/${page}.html#${anchor}`;

/** WAI-ARIA 1.3 Working Draft(2026-06-04 판)의 절 주소. 1.2 Recommendation에 없는 기능(aria-description)에만 쓴다. */
export const aria13 = (anchor: string) =>
  `https://www.w3.org/TR/2026/WD-wai-aria-1.3-20260604/#${anchor}`;

/** AccName 1.1 W3C Recommendation(2018-12-18 판)의 절 주소. 확정 규격의 계산 단계(step2A~step2I)를 가리킨다. */
export const accname11 = (anchor: string) =>
  `https://www.w3.org/TR/2018/REC-accname-1.1-20181218/#${anchor}`;

/** AccName 1.2 Working Draft(2026-11-04 판)의 절 주소. 초안의 계산 단계(comp_*)를 가리킨다. */
export const accname12 = (anchor: string) =>
  `https://www.w3.org/TR/2026/WD-accname-1.2-20261104/#${anchor}`;

/** HTML-AAM Working Draft(2026-10-26 판)의 절 주소. 요소별 이름 · 설명 계산 규칙을 가리킨다. */
export const htmlAam = (anchor: string) =>
  `https://www.w3.org/TR/2026/WD-html-aam-1.0-20261026/#${anchor}`;

/** APG Disclosure (Show/Hide) 패턴. 규범이 아닌 권장 패턴이다. */
export const APG_DISCLOSURE = 'https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/';

/** 05 · 06장 근거를 공식 원문에서 확인한 날. HTML Living Standard는 2026-11-06 갱신본을 읽었다. */
export const ARIA_CHECKED_ON = { ko: '2026년 11월 9일 확인', en: 'Checked November 9, 2026' };

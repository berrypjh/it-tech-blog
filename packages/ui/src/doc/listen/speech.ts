/**
 * 화면 글자를 소리 내어 읽을 말로 다듬는다. 자막은 화면 글자 그대로 두고, 음성 합성에만 쓴다.
 * 약어 · 코드 용어의 발음은 KO_TERMS가 정한다. 대본 줄의 say가 있으면 그쪽이 우선이다.
 */

/**
 * 한국어로 읽을 때 사람들이 실제로 말하는 발음. 약어는 W3C 용어집의 읽기를 따른다
 * (WCAG "wuh-cag", WAI "way", ARIA "aria" — https://www.w3.org/WAI/GL/wiki/Jargon, https://www.w3.org/2020/05/words).
 * 코드 용어(div, tabindex 등)는 개발자가 말하는 대로 적는다. 대소문자를 구분하고, 긴 말을 먼저 바꿔야
 * KWCAG가 WCAG로, aria-label이 label로 먼저 바뀌지 않는다.
 */
const KO_TERMS: [string, string][] = [
  ['KWCAG', '케이 위캐그'],
  ['WCAG', '위캐그'],
  ['W3C', '더블유 쓰리 씨'],
  ['WAI', '웨이'],
  ['ARIA', '아리아'],
  ['HTML', '에이치 티 엠 엘'],
  ['CSS', '씨 에스 에스'],
  ['DOM', '돔'],
  ['API', '에이피아이'],
  ['MDN', '엠디엔'],
  ['QA', '큐에이'],
  ['UI', '유아이'],
  ['UX', '유엑스'],
  ['AAA', '트리플 에이'],
  ['AA', '더블 에이'],
  ['A', '에이'],
  ['B', '비'],
  ['Computed properties', '컴퓨티드 프로퍼티즈'],
  ['Accessibility', '어세서빌리티'],
  ['DevTools', '데브툴즈'],
  ['Chrome', '크롬'],
  ['aria-disabled', '아리아 디스에이블드'],
  ['aria-label', '아리아 라벨'],
  ['placeholder', '플레이스홀더'],
  ['tabindex', '탭인덱스'],
  ['onclick', '온클릭'],
  ['button', '버튼'],
  ['label', '라벨'],
  ['role', '롤'],
  ['div', '디브'],
  ['img', '이미지'],
  ['alt', '알트'],
  ['Dialog', '다이얼로그'],
  ['Enter', '엔터'],
  ['Space', '스페이스'],
  ['Tab', '탭'],
];

/** 숫자 앞의 0은 읽지 않는다: 01장 → 1장, 01.2 → 1.2, 09:30 → 9:30. 10 · 100 · 2.0처럼 수에 속한 0은 둔다. */
const dropLeadingZeros = (text: string) => text.replace(/(?<![\d:.])0+(?=[1-9])/g, '');

export const toSpeech = (text: string, lang: string) => {
  let said = dropLeadingZeros(text)
    // 가운뎃점은 읽지 않고 쉼표처럼 짧게 쉰다.
    .replace(/\s*[·∙]\s*/g, ', ');
  if (lang === 'ko') {
    // 1~2분 → 1에서 2분, 2.2 → 2 점 2
    said = said.replace(/(\d)\s*~\s*(\d)/g, '$1에서 $2').replace(/(\d)\.(\d)/g, '$1 점 $2');
    for (const [term, sound] of KO_TERMS) {
      said = said.replace(new RegExp(`(?<![A-Za-z])${term}(?![A-Za-z])`, 'g'), sound);
    }
  }
  return said;
};

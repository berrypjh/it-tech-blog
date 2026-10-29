/** 읽을 블록 후보. 다른 후보를 품은 요소는 건너뛰고 안쪽 후보를 읽는다. */
const BLOCK = 'h1,h2,h3,h4,p,li,tr,dt,dd,figcaption';

/** 듣기에서 뺄 영역. 코드 · 장식 · 조작 요소, 그리고 data-narration="skip"으로 표시한 실습. */
const SKIP = 'pre,nav,form,button,label,[aria-hidden="true"],[data-narration="skip"]';

/** 화면 낭독기용 숨김 글과 장식. 화면을 보며 듣는 해설에는 겹치거나 필요 없어 뺀다(예: "섹션 링크", "(새 창에서 열림)"). */
const HIDDEN = '.ui-visually-hidden,.sr-only,[aria-hidden="true"]';

export const clean = (text: string) => text.replace(/\s+/g, ' ').trim();

/** 숨김 글을 뺀, 화면에 보이는 글. */
const visibleText = (el: Element) => {
  const copy = el.cloneNode(true) as Element;
  copy.querySelectorAll(HIDDEN).forEach((hidden) => hidden.remove());
  return clean(copy.textContent ?? '');
};

/** 블록이 소리 내어 읽힐 글. 표의 행은 칸 사이를 끊어 읽는다. */
export const blockText = (el: Element) =>
  el.tagName === 'TR'
    ? Array.from(el.children, visibleText).filter(Boolean).join(' · ')
    : visibleText(el);

/** 본문에서 위에서 아래 순서로 읽을 블록을 고른다. */
export const collectBlocks = (root: Element) =>
  Array.from(root.querySelectorAll<HTMLElement>(BLOCK)).filter(
    (el) => !el.closest(SKIP) && !el.querySelector(BLOCK) && blockText(el) !== '',
  );

/** 긴 글을 문장으로 나눈다. 브라우저 음성 합성은 긴 발화를 중간에 끊는 경우가 있다. */
export const splitSentences = (text: string) =>
  text
    .split(/(?<=[.!?。])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

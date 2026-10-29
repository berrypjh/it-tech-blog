/** 보이는 영역의 위 끝. 고정 헤더와 화면 위 끝에 붙지 않게 한다. */
const TOP_RATIO = 0.15;
const GAP = 16;
/** 읽는 선. 함께 볼 것이 없는 글은 위 끝을 보이는 영역의 이 높이에 둔다. */
const LINE_RATIO = 0.35;
/** 편한 구역의 아래 끝. 글이 이 위에 있으면 움직이지 않아 나열 항목마다 화면이 출렁이지 않는다. */
const COMFORT_RATIO = 0.8;

/** 글 블록. 이것이 아닌 이웃(사례 카드 · 도식 · 표 상자)은 문단이 가리키는 시각 자료로 본다. */
const TEXT_TAG = /^(P|H[1-6]|UL|OL|BLOCKQUOTE|HR)$/;
/** 안의 항목을 읽는 동안 통째로 보여 줄 시각 자료. */
const VISUAL = 'figure, table';

type Context = { box: Element; side: 'prev' | 'next' | 'inside' };

const isVisual = (node: Element | null): node is Element =>
  node !== null && !TEXT_TAG.test(node.tagName) && !node.closest('[data-narration="skip"]');

/**
 * 읽는 요소와 함께 보여야 할 시각 자료. 도식 · 표 안의 항목이면 그 자료 전체,
 * 문단이면 바로 앞 자료("이 형식으로"처럼 방금 본 것을 가리킴), 없으면 바로 뒤 자료(도입 문단).
 */
const contextOf = (el: HTMLElement): Context | null => {
  const visual = el.closest(VISUAL);
  if (visual && visual !== el) {
    const box = visual.tagName === 'TABLE' ? (visual.parentElement ?? visual) : visual;
    return { box, side: 'inside' };
  }
  if (el.tagName !== 'P') return null;
  if (isVisual(el.previousElementSibling)) return { box: el.previousElementSibling, side: 'prev' };
  if (isVisual(el.nextElementSibling)) return { box: el.nextElementSibling, side: 'next' };
  return null;
};

/** 재생기와 자막이 덮은 화면 아래 높이. 재생기가 --listen-overlay로 알린다. */
const overlayHeight = () =>
  parseFloat(document.documentElement.style.getPropertyValue('--listen-overlay')) || 0;

/** 스크롤할 거리. 양수면 아래로. */
const scrollDelta = (el: HTMLElement) => {
  const viewTop = window.innerHeight * TOP_RATIO;
  const viewBottom = window.innerHeight - overlayHeight() - GAP;
  const height = viewBottom - viewTop;
  const own = el.getBoundingClientRect();
  const context = contextOf(el);

  if (context) {
    const box = context.box.getBoundingClientRect();
    const top = Math.min(own.top, box.top);
    const bottom = Math.max(own.bottom, box.bottom);
    if (top >= viewTop && bottom <= viewBottom) return 0;
    // 함께 들어가면 가운데에 둔다.
    if (bottom - top <= height) return top - (viewTop + (height - (bottom - top)) / 2);
    // 다 들어가지 않으면 읽는 글은 보이게 하고 자료 쪽을 최대한 보여 준다.
    if (context.side === 'prev') return own.bottom - viewBottom;
    if (context.side === 'next') return own.top - viewTop;
  }

  if (own.top >= viewTop && own.bottom <= viewTop + height * COMFORT_RATIO) return 0;
  const line = viewTop + height * LINE_RATIO;
  return own.top - (own.bottom - own.top > viewBottom - line ? viewTop : line);
};

/** 읽는 요소를 함께 볼 자료와 함께 재생기 위 보이는 영역에 둔다. 본문은 #main-content가 스크롤하므로 그 상자를 움직인다. */
export const scrollToRead = (el: HTMLElement, reduceMotion: boolean) => {
  const delta = scrollDelta(el);
  if (Math.abs(delta) < 1) return;
  const scroller = document.getElementById('main-content') ?? document.scrollingElement;
  scroller?.scrollBy({ top: delta, behavior: reduceMotion ? 'auto' : 'smooth' });
};

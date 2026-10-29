import { blockText, clean, collectBlocks } from './blocks';
import { type NarrationScript, scriptSegments } from './script';
import { toSpeech } from './speech';

/**
 * 한 번에 말할 단위. el은 강조하고 따라갈 요소, text는 자막, speech는 소리로 낼 말(없으면 text),
 * pause는 말한 뒤 쉬는 시간(ms).
 */
export type Segment = {
  el: HTMLElement;
  text: string;
  speech?: string;
  pause?: number;
};

/**
 * 소리로 낼 말. 대본의 say(없으면 자막 글)를 읽을 말로 다듬는다(01장 → 1장, WCAG → 위캐그).
 */
export const spokenText = (seg: Segment) =>
  toSpeech(seg.speech ?? seg.text, document.documentElement.lang || 'ko');

export type ListenMode = 'lecture' | 'full';

const SECTION_PAUSE = 700;
const SKIP = '[data-narration="skip"]';

const phrases = {
  ko: {
    first: (t: string) => `먼저 ‘${t}’부터 살펴보겠습니다.`,
    next: [
      (t: string) => `다음은 ‘${t}’입니다.`,
      (t: string) => `이번에는 ‘${t}’ 이야기입니다.`,
      (t: string) => `이어서 ‘${t}’ 차례입니다.`,
    ],
    learn: '이 페이지에서 배울 내용은 다음과 같습니다.',
    table: (caption: string) =>
      caption
        ? `${caption}, 화면의 표로 정리해 두었습니다.`
        : '자세한 내용은 화면의 표로 정리해 두었습니다.',
    summary: '마지막으로 핵심만 정리하겠습니다.',
  },
  en: {
    first: (t: string) => `Let's start with “${t}”.`,
    next: [
      (t: string) => `Next up: “${t}”.`,
      (t: string) => `Now let's look at “${t}”.`,
      (t: string) => `Moving on to “${t}”.`,
    ],
    learn: 'Here is what this page covers.',
    table: (caption: string) =>
      caption
        ? `The table on screen lays out ${caption.charAt(0).toLowerCase()}${caption.slice(1)}.`
        : 'The details are laid out in the table on screen.',
    summary: 'To wrap up, here are the key points.',
  },
};

/** 핵심 · 주의 상자는 제목과 본문 첫 문단을 읽는다. 실습 상자는 화면에서 직접 하도록 둔다. */
const calloutText = (aside: Element) => {
  const [title, body] = Array.from(aside.children);
  const first = body?.querySelector('p') ?? body;
  return [title, first]
    .map((el) => (el ? blockText(el) : ''))
    .filter(Boolean)
    .join('. ');
};

/** 섹션 하나를 해설처럼 고른다. 소제목마다 첫 문단, 핵심 상자, 표 안내 한 번, data-narration="key" 요소. */
const sectionSegments = (section: Element, lang: 'ko' | 'en') => {
  const out: Segment[] = [];
  let paragraphRead = false;
  let tableNoted = false;

  for (const child of Array.from(section.children) as HTMLElement[]) {
    if (child.matches(SKIP) || child.tagName === 'H2') continue;
    if (child.tagName === 'H3') {
      out.push({ el: child, text: blockText(child) });
      paragraphRead = false;
    } else if (child.tagName === 'P' && !paragraphRead && blockText(child)) {
      out.push({ el: child, text: blockText(child) });
      paragraphRead = true;
    } else if (child.tagName === 'ASIDE' && child.dataset.variant !== 'practice') {
      out.push({ el: child, text: calloutText(child) });
    } else if (child.querySelector('table') && !tableNoted) {
      // 표 제목(caption)은 시각적으로 숨겨져 있어도 그 표를 가리키는 말로 쓴다.
      const caption = clean(child.querySelector('caption')?.textContent ?? '');
      out.push({ el: child, text: phrases[lang].table(caption) });
      tableNoted = true;
    }
    child.querySelectorAll<HTMLElement>('[data-narration="key"]').forEach((el) => {
      out.push({ el, text: blockText(el) });
    });
  }
  return out;
};

/**
 * 해설 모드: 제목 · 리드 · 배울 내용, 섹션마다 이어 주는 말과 핵심, 마지막 요약을 읽는다. 참고 자료는 건너뛴다.
 * 대본(script)이 있는 섹션은 대본을 읽고, 없는 섹션만 이 규칙으로 고른다.
 */
export const lectureSegments = (root: Element, lang: 'ko' | 'en', script?: NarrationScript) => {
  const p = phrases[lang];
  const lines = script?.[lang] ?? {};
  const out: Segment[] = [];
  const header = root.querySelector('header');
  const h1 = root.querySelector<HTMLElement>('h1');
  if (header && lines.header) {
    out.push(...scriptSegments(header, lines.header));
  } else if (h1) {
    out.push({ el: h1, text: blockText(h1) });
    const lead = h1.nextElementSibling;
    if (lead instanceof HTMLElement && lead.tagName === 'P') {
      out.push({ el: lead, text: blockText(lead), pause: SECTION_PAUSE });
    }
  }

  const listed = { 'learn-heading': p.learn, summary: p.summary } as Record<string, string>;
  const sections = Array.from(root.querySelectorAll('section[aria-labelledby]')).filter(
    (s) =>
      s.querySelector(':scope > h2') &&
      s.getAttribute('aria-labelledby') !== 'references' &&
      !(lines.header && header?.contains(s)),
  );
  let i = 0;
  sections.forEach((section) => {
    const id = section.getAttribute('aria-labelledby') ?? '';
    const h2 = section.querySelector<HTMLElement>(':scope > h2');
    if (!h2) return;
    if (lines[id]) {
      i += 1;
      out.push(...scriptSegments(section, lines[id]));
      return;
    }
    if (listed[id]) {
      out.push({ el: h2, text: listed[id] });
      section.querySelectorAll<HTMLElement>('li').forEach((li) => {
        out.push({ el: li, text: blockText(li) });
      });
      out[out.length - 1].pause = SECTION_PAUSE;
      return;
    }
    const title = blockText(h2);
    const intro = i === 0 ? p.first(title) : p.next[(i - 1) % p.next.length](title);
    i += 1;
    out.push({ el: h2, text: intro });
    out.push(...sectionSegments(section, lang));
    out[out.length - 1].pause = SECTION_PAUSE;
  });
  return out.filter((seg) => seg.text !== '');
};

/** 전체 모드: 본문 블록을 빠짐없이 차례로 읽는다. */
export const fullSegments = (root: Element): Segment[] =>
  collectBlocks(root).map((el) => ({ el, text: blockText(el) }));

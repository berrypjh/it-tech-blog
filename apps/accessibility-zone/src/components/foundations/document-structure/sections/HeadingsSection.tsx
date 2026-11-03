import type { Locale } from '@it-tech-blog/preferences';
import { CodeCompare, DocH2, DocTable } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const code = {
  ko: {
    before: `<div class="page-title">무선 키보드</div>
<h4>배송</h4>              <!-- 작게 보이려고 h4 -->
<p><b>교환 · 반품</b></p>  <!-- 제목처럼 보이지만 제목 요소가 아님 -->`,
    after: `<h1>무선 키보드</h1>
<h2>배송</h2>
<h3>교환 · 반품</h3>      <!-- 배송 아래의 하위 주제 -->`,
  },
  en: {
    before: `<div class="page-title">Wireless keyboard</div>
<h4>Shipping</h4>           <!-- h4 to make it look small -->
<p><b>Returns</b></p>       <!-- looks like a heading but is not -->`,
    after: `<h1>Wireless keyboard</h1>
<h2>Shipping</h2>
<h3>Returns</h3>            <!-- a subtopic of shipping -->`,
  },
};

const content = {
  ko: {
    intro: (
      <>
        <code>h1</code>~<code>h6</code>는 글자 크기가 아니라 <strong>내용의 계층</strong>을
        나타냅니다. 많은 화면 낭독기는 제목만 모아 목록으로 보여 주거나 키 하나로 다음 제목에
        이동하는 기능을 제공합니다. 제목이 계층대로 있으면 사용자는 페이지 전체를 듣지 않고도 원하는
        부분으로 바로 갑니다.
      </>
    ),
    caption: '제목 작성 기준과 요구 · 권장 구분',
    head: ['기준', '근거', '뜻'],
    rows: [
      [
        '제목처럼 보이는 글은 제목 요소(h1~h6)로',
        '요구 — WCAG 2.2 성공 기준 1.3.1 정보와 관계(A)',
        '굵은 글씨만으로 보이는 구조는 보조기술에 전달되지 않습니다',
      ],
      [
        '제목이 내용을 설명',
        '요구 — WCAG 2.2 성공 기준 2.4.6 제목 및 레이블(AA)',
        '"기타", "정보"처럼 무엇이든 될 수 있는 제목은 이동에 도움이 되지 않습니다',
      ],
      [
        '페이지 주제를 h1 하나로',
        '권장',
        'HTML이 h1 개수를 제한하지는 않지만, 하나로 두면 페이지 주제가 분명해집니다',
      ],
      [
        '단계를 건너뛰지 않기',
        '권장',
        'h2 다음 바로 h4가 오면 사이에 빠진 내용이 있는지 혼란스럽습니다',
      ],
    ],
    style: (
      <>
        크기와 굵기는 CSS로 정합니다. 작게 보이게 하려고 <code>h4</code>를 쓰거나, 크게 보이게
        하려고 <code>h1</code>을 쓰면 화면의 모양과 문서의 계층이 어긋납니다.
      </>
    ),
    outline: (
      <>
        <code>section</code> 안에 <code>h1</code>을 다시 써도 단계가 자동으로 낮아지지 않습니다.
        그런 규칙(문서 개요 알고리즘)은 브라우저와 보조기술이 구현한 적이 없고 HTML 표준에서도
        삭제됐습니다. 단계는 숫자로 직접 정합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        <code>h1</code>–<code>h6</code> express <strong>the hierarchy of content</strong>, not font
        size. Many screen readers list just the headings or move to the next heading with a single
        key. When headings follow the hierarchy, users can go straight to the part they want without
        listening to the whole page.
      </>
    ),
    caption: 'Heading guidelines — requirements versus recommendations',
    head: ['Guideline', 'Basis', 'Meaning'],
    rows: [
      [
        'Text that looks like a heading uses a heading element',
        'Required — WCAG 1.3.1 (A)',
        'Structure shown only with bold text does not reach assistive technology',
      ],
      [
        'Headings describe their content',
        'Required — WCAG 2.4.6 (AA)',
        'Headings like "Other" or "Info" could mean anything and do not help navigation',
      ],
      [
        'One h1 for the page topic',
        'Recommended',
        'HTML does not limit the number of h1s, but one makes the page topic clear',
      ],
      [
        'Do not skip levels',
        'Recommended',
        'An h4 right after an h2 makes users wonder whether something is missing',
      ],
    ],
    style: (
      <>
        Set size and weight with CSS. Using <code>h4</code> to look small, or <code>h1</code> to
        look big, makes the visual shape and the document hierarchy disagree.
      </>
    ),
    outline: (
      <>
        Writing another <code>h1</code> inside a <code>section</code> does not lower its level
        automatically. That rule (the document outline algorithm) was never implemented by browsers
        or assistive technology and has been removed from the HTML standard. Set the level directly
        with the number.
      </>
    ),
  },
};

export const HeadingsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.headings.id}>
      <DocH2 {...toc.headings} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.style}</p>
      <CodeCompare before={code[locale].before} after={code[locale].after} />
      <p>{c.outline}</p>
    </section>
  );
};

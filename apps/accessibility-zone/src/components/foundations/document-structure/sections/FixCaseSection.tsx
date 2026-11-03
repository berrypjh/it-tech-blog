import type { Locale } from '@it-tech-blog/preferences';
import { CodeCompare, DocH2 } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';
import { X } from 'lucide-react';

import { StructureDemo } from '../demos/StructureDemo';
import { getToc } from '../toc';

const code = {
  ko: {
    before: `<html>
<head><title>마켓</title></head>
<body>
  <div class="top">
    <div class="logo">마켓</div>
    <div class="menu">…</div>
  </div>
  <div class="content">
    <div class="big">무선 키보드</div>
    <h4>배송</h4>
    <h2>리뷰</h2>
  </div>
  <div class="bottom">…</div>
</body>
</html>`,
    after: `<html lang="ko">
<head><title>무선 키보드 — 마켓</title></head>
<body>
  <a href="#main">본문으로 건너뛰기</a>
  <header>
    <a href="/">마켓</a>
    <nav aria-label="주 메뉴">…</nav>
  </header>
  <main id="main">
    <h1>무선 키보드</h1>
    <h2>배송</h2>
    <h2>리뷰</h2>
  </main>
  <footer>…</footer>
</body>
</html>`,
  },
  en: {
    before: `<html>
<head><title>Market</title></head>
<body>
  <div class="top">
    <div class="logo">Market</div>
    <div class="menu">…</div>
  </div>
  <div class="content">
    <div class="big">Wireless keyboard</div>
    <h4>Shipping</h4>
    <h2>Reviews</h2>
  </div>
  <div class="bottom">…</div>
</body>
</html>`,
    after: `<html lang="en">
<head><title>Wireless keyboard — Market</title></head>
<body>
  <a href="#main">Skip to main content</a>
  <header>
    <a href="/">Market</a>
    <nav aria-label="Main menu">…</nav>
  </header>
  <main id="main">
    <h1>Wireless keyboard</h1>
    <h2>Shipping</h2>
    <h2>Reviews</h2>
  </main>
  <footer>…</footer>
</body>
</html>`,
  },
};

const content = {
  ko: {
    intro: (
      <>
        가상의 상품 페이지는 화면에서는 멀쩡해 보이지만 구조를 읽으면 다섯 군데가 비어 있습니다.
        점검은 <strong>페이지 제목 → 언어 → 제목 단계 → 랜드마크 → 건너뛰기</strong> 순서로 하고,
        항목마다 &quot;사용자가 무엇을 못 하게 되는가&quot;를 함께 적습니다.
      </>
    ),
    checks: [
      '페이지 제목이 모든 페이지에서 "마켓" — 탭이 여러 개면 어느 상품인지 구분할 수 없습니다',
      'lang 없음 — 화면 낭독기가 어떤 발음 규칙으로 읽을지 문서에서 알 수 없습니다',
      '상품명은 div, 첫 제목은 "배송"의 h4 — 제목 목록에 페이지 주제가 없고 단계가 뒤섞입니다',
      '랜드마크 없음 — 메뉴와 본문을 영역 단위로 건너뛸 수 없습니다',
      '건너뛰기 링크 없음 — 키보드 사용자는 페이지마다 메뉴를 다시 지나가야 합니다',
    ],
    checksLabel: '점검 결과',
    demoIntro: (
      <>같은 점검을 지금 보고 있는 이 페이지에 직접 해 보면, 실제 DOM에서 읽은 구조가 보입니다.</>
    ),
    observe: (
      <>
        <strong>관찰할 것:</strong> 제목 목록이 h1 하나에서 시작해 h2 · h3로 들여쓰기가 맞는지,
        이름이 같은 nav가 없는지, 이 페이지의 <code>header</code>가 article 안에 있어 banner로
        잡히지 않는지 확인합니다. 언어 설정을 바꾸고 다시 읽으면 페이지 제목과 <code>lang</code>이
        함께 바뀝니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The product page below looks fine on screen, but reading its structure shows five gaps.
        Check in the order <strong>title → language → headings → landmarks → skip link</strong>, and
        for each one note &quot;what can the user no longer do&quot;.
      </>
    ),
    checks: [
      'Title: every page is "Market" — with several tabs open, you cannot tell which product is which',
      'No lang — the document does not tell the screen reader which pronunciation rules to use',
      'Headings: the product name is a div and "Shipping" starts at h4 — the heading list has no page topic and the levels are jumbled',
      'No landmarks — you cannot skip between the menu and the main content by region',
      'No skip link — keyboard users have to go through the menu again on every page',
    ],
    checksLabel: 'Findings',
    demoIntro: (
      <>
        Run the same check on the page you are reading, and you see the structure read from the real
        DOM.
      </>
    ),
    observe: (
      <>
        <strong>What to look for:</strong> check that the heading list starts with a single h1 and
        indents properly through h2 and h3, that no two nav elements share a name, and that this
        page&apos;s <code>header</code> sits inside article and so is not counted as a banner.
        Change the language setting and read again; the title and <code>lang</code> change together.
      </>
    ),
  },
};

export const FixCaseSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.fixCase.id}>
      <DocH2 {...toc.fixCase} />
      <p>{c.intro}</p>
      <CodeCompare before={code[locale].before} after={code[locale].after} />
      <p>
        <strong>{c.checksLabel}</strong>
      </p>
      <div className="my-lg">
        <List ordered className="flex flex-col gap-sm">
          {c.checks.map((check) => (
            <ListItem key={check} className="flex gap-sm">
              <X className="mt-xs h-4 w-4 shrink-0 text-text-error" aria-hidden="true" />
              <span>{check}</span>
            </ListItem>
          ))}
        </List>
      </div>
      <p>{c.demoIntro}</p>
      <StructureDemo />
      <p>{c.observe}</p>
    </section>
  );
};

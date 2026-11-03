import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import {
  FileText,
  FormInput,
  Navigation,
  PanelBottom,
  PanelRight,
  PanelTop,
  SquareDashed,
} from 'lucide-react';

import { IconLabel } from '@/components/shared/IconLabel';
import { ThemedFigure } from '@/components/shared/ThemedFigure';

import landmarksDark from '../images/landmarks-dark.webp';
import landmarksLight from '../images/landmarks-light.webp';
import { getToc } from '../toc';

const code = {
  ko: `<body>
  <a href="#main">본문으로 건너뛰기</a>
  <header>
    <a href="/">마켓</a>
    <nav aria-label="주 메뉴">…</nav>
  </header>
  <main id="main">
    <h1>무선 키보드</h1>
    <article>
      <header>…</header>  <!-- article 안이라 banner가 아님 -->
    </article>
    <nav aria-label="페이지 이동">…</nav>
  </main>
  <footer>…</footer>
</body>`,
  en: `<body>
  <a href="#main">Skip to main content</a>
  <header>
    <a href="/">Market</a>
    <nav aria-label="Main menu">…</nav>
  </header>
  <main id="main">
    <h1>Wireless keyboard</h1>
    <article>
      <header>…</header>  <!-- inside article, so not a banner -->
    </article>
    <nav aria-label="Pagination">…</nav>
  </main>
  <footer>…</footer>
</body>`,
};

/** 표의 행 순서와 같은 순서로 놓인 첫 열 아이콘: header · nav · main · footer · aside · section · form. */
const rowIcons = [PanelTop, Navigation, FileText, PanelBottom, PanelRight, SquareDashed, FormInput];

const content = {
  ko: {
    figure: {
      alt: '브라우저 화면이 위쪽 띠, 왼쪽 세로 열, 가운데 본문, 아래쪽 띠의 네 영역으로 나뉘어 각각 점선과 위치 핀으로 표시되고, 본문 안에는 한 단계씩 들여쓴 막대가 제목 단계를 보여 줍니다.',
      caption:
        '랜드마크는 페이지를 머리글 · 메뉴 · 본문 · 바닥글 영역으로 나누고, 제목은 본문 안의 계층을 나눕니다.',
    },
    intro: (
      <>
        랜드마크는 페이지를 머리글 · 메뉴 · 본문 · 바닥글 같은 <strong>큰 영역</strong>으로
        나눕니다. 많은 화면 낭독기는 랜드마크 목록을 보여 주거나 영역 사이를 키 하나로 이동하게
        합니다. HTML 요소 몇 개는 조건에 따라 자동으로 랜드마크가 됩니다.
      </>
    ),
    caption: 'HTML 요소와 랜드마크 역할',
    head: ['요소', '역할', '랜드마크가 되는 조건'],
    rows: [
      [
        <code key="e">header</code>,
        'banner',
        'article · aside · main · nav · section 안에 있지 않을 때',
      ],
      [<code key="e">nav</code>, 'navigation', '항상. 여러 개면 이름으로 구분합니다'],
      [<code key="e">main</code>, 'main', '항상. 페이지에 보이는 것은 하나만 둡니다'],
      [<code key="e">footer</code>, 'contentinfo', 'header와 같은 조건'],
      [
        <code key="e">aside</code>,
        'complementary',
        '가장 가까운 구획 조상이 body나 main이거나, 이름이 있을 때',
      ],
      [<code key="e">section</code>, 'region', '이름(aria-label · aria-labelledby)이 있을 때만'],
      [<code key="e">form</code>, 'form', '이름이 있을 때만'],
    ],
    names: (
      <>
        같은 종류가 둘 이상이면 이름으로 구분합니다. 이 사이트의 <code>nav</code>는 사이드바
        &quot;메뉴&quot;, 페이지 끝 카드 &quot;다음 페이지&quot;, 그리고 넓은 화면에서 보이는 목차가
        있고, 목차는 보이는 제목을 <code>aria-labelledby</code>로 이름 삼습니다. 이름에
        &quot;내비게이션&quot;을 다시 쓰지 않습니다. 역할은 보조기술이 이미 알려 줍니다.
      </>
    ),
    codeLabel: '상품 페이지 — 랜드마크를 갖춤',
    bypass: (
      <>
        WCAG 2.2 성공 기준 2.4.1 블록 우회(A)는 여러 페이지에 반복되는 메뉴를 건너뛸 방법을
        요구합니다. 랜드마크와 제목은 보조기술 사용자에게 그 방법이 되지만, 화면 낭독기 없이
        키보드만 쓰는 사용자는 랜드마크로 이동할 수 없습니다. 그래서 이 사이트는 Tab을 처음 누르면
        나타나는 &quot;본문으로 건너뛰기&quot; 링크도 함께 둡니다.
      </>
    ),
    tradeoffTitle: '랜드마크가 많으면 목록이 길어져 이동이 느려집니다',
    tradeoff: (
      <>
        이름 있는 <code>section</code>은 모두 region 랜드마크가 됩니다. 이 사이트의 문서 섹션은
        제목으로 이름을 붙여 region이 되는데, 랜드마크가 많아지면 목록이 길어져 이동이 느려질 수
        있습니다. 어떤 영역을 랜드마크로 둘지는 과업에 따라 정하는 설계 판단입니다.
      </>
    ),
  },
  en: {
    figure: {
      alt: 'A browser page divided into four regions, each marked with a dashed border and a location pin: a top band, a left column, a central area, and a bottom band. Inside the central area, bars indented step by step show heading levels.',
      caption:
        'Landmarks divide the page into banner, menu, main, and footer regions; headings divide the hierarchy inside the main content.',
    },
    intro: (
      <>
        Landmarks divide a page into <strong>large regions</strong> such as the banner, menus, main
        content, and footer. Many screen readers list the landmarks or move between regions with a
        single key. Several HTML elements become landmarks automatically under certain conditions.
      </>
    ),
    caption: 'HTML elements and landmark roles',
    head: ['Element', 'Role', 'When it is a landmark'],
    rows: [
      [
        <code key="e">header</code>,
        'banner',
        'When not inside article, aside, main, nav, or section',
      ],
      [<code key="e">nav</code>, 'navigation', 'Always. Name them when there are several'],
      [<code key="e">main</code>, 'main', 'Always. Only one visible per page'],
      [<code key="e">footer</code>, 'contentinfo', 'Same condition as header'],
      [
        <code key="e">aside</code>,
        'complementary',
        'When its nearest sectioning ancestor is body or main, or when named',
      ],
      [<code key="e">section</code>, 'region', 'Only when named (aria-label or aria-labelledby)'],
      [<code key="e">form</code>, 'form', 'Only when named'],
    ],
    names: (
      <>
        When there are two or more of the same kind, tell them apart with <code>aria-label</code>.
        This site&apos;s <code>nav</code> elements are the sidebar &quot;Menu&quot;, the card at the
        end of the page &quot;Next page&quot;, and, on wide screens, the table of contents, which
        takes its name from its visible heading through <code>aria-labelledby</code>. Do not repeat
        &quot;navigation&quot; in the name; assistive technology already announces the role.
      </>
    ),
    codeLabel: 'A product page with landmarks',
    bypass: (
      <>
        WCAG 2.4.1 (A) requires a way to skip menus repeated across pages. Landmarks and headings
        give assistive technology users that way, but keyboard users without a screen reader cannot
        move by landmark. That is why this site also has a &quot;Skip to main content&quot; link
        that appears on the first Tab.
      </>
    ),
    tradeoffTitle: 'Too many landmarks make the list long and moving slow',
    tradeoff: (
      <>
        Every named <code>section</code> becomes a region landmark. This site names its document
        sections by their headings, so they become regions; with many landmarks the list grows and
        moving can get slower. Which areas to make landmarks is a design decision based on the task.
      </>
    ),
  },
};

export const LandmarksSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.landmarks.id}>
      <DocH2 {...toc.landmarks} />
      <p>{c.intro}</p>
      <ThemedFigure light={landmarksLight} dark={landmarksDark} {...c.figure} />
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={c.rows.map((row, i) => [
          <IconLabel key="label" icon={rowIcons[i]}>
            {row[0]}
          </IconLabel>,
          ...row.slice(1),
        ])}
      />
      <p>{c.names}</p>
      <CodeBlock label={c.codeLabel} code={code[locale]} />
      <p>{c.bypass}</p>
      <Callout variant="note" title={c.tradeoffTitle}>
        <p>{c.tradeoff}</p>
      </Callout>
    </section>
  );
};

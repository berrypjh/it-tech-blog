import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const code = {
  ko: `<nav aria-label="12장 페이지">
  <ul>
    <li><a href="/accessibility/tabs-pattern">12.3 Tabs의 선택과 활성화</a></li>
    <li><a href="/accessibility/navigation-and-current" aria-current="page">12.4 내비게이션과 현재 위치</a></li>
  </ul>
</nav>

<nav aria-label="현재 경로">
  <ol>
    <li><a href="/accessibility">A11y Lab</a></li>
    <li><a href="/accessibility/navigation-and-current" aria-current="page">12.4 내비게이션과 현재 위치</a></li>
  </ol>
</nav>

<nav aria-label="문서 목록 쪽 이동">
  <ul>
    <li><a href="?page=1">이전 쪽</a></li>
    <li><a href="?page=1">1쪽</a></li>
    <li><a href="?page=2" aria-current="page">2쪽</a></li>
    <li><a href="?page=3">3쪽</a></li>
    <li><a href="?page=3">다음 쪽</a></li>
  </ul>
</nav>`,
  en: `<nav aria-label="Chapter 12 pages">
  <ul>
    <li><a href="/accessibility/tabs-pattern">12.3 Tab selection and activation</a></li>
    <li><a href="/accessibility/navigation-and-current" aria-current="page">12.4 Navigation and current location</a></li>
  </ul>
</nav>

<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/accessibility">A11y Lab</a></li>
    <li><a href="/accessibility/navigation-and-current" aria-current="page">12.4 Navigation and current location</a></li>
  </ol>
</nav>

<nav aria-label="Document list pages">
  <ul>
    <li><a href="?page=1">Previous page</a></li>
    <li><a href="?page=1">Page 1</a></li>
    <li><a href="?page=2" aria-current="page">Page 2</a></li>
    <li><a href="?page=3">Page 3</a></li>
    <li><a href="?page=3">Next page</a></li>
  </ul>
</nav>`,
};

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        <PageLink locale={locale} id="document-structure" />
        에서 본 것처럼 <code>nav</code>는 탐색 영역을 landmark로 만듭니다. 한 페이지에 하나뿐이면
        이름이 없어도 됩니다. 이 페이지처럼 여럿이면 영역 목록에 같은 “탐색”이 줄지어 나오므로,
        무엇을 탐색하는 곳인지 이름으로 구별합니다.
      </>
    ),
    label: '세 탐색 영역의 완성 코드 (2쪽에 있을 때)',
    caption: '세 탐색 영역의 목적과 표시',
    head: ['영역', '목적', '목록', '현재 표시'],
    rows: [
      [
        '사이트 메뉴',
        '다른 페이지로 이동',
        '순서 없는 목록',
        '현재 페이지 링크에 aria-current="page"',
      ],
      [
        '현재 경로',
        '상위 단계로 되돌아가기',
        '순서 있는 목록',
        '마지막 항목에 aria-current="page"',
      ],
      [
        '쪽 번호',
        '같은 목록의 다른 쪽으로 이동',
        '순서 없는 목록',
        '현재 쪽 링크에 aria-current="page"',
      ],
    ],
    after: (
      <>
        링크의 글자는 목적지를 말해야 합니다. 쪽 번호를 숫자 “2”로만 두면 링크 목록에서 뜻이
        사라지므로 이 예제는 “2쪽”이라고 씁니다. 이름에 “내비게이션”이라는 말을 넣지 않습니다.
        역할이 이미 그것을 알립니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        As seen on <PageLink locale={locale} id="document-structure" />, <code>nav</code> makes a
        navigation area a landmark. A page with only one needs no name. With several, as on this
        page, the list of regions shows “navigation” over and over, so name each by what it
        navigates.
      </>
    ),
    label: 'Complete code of the three navigation areas (on page 2)',
    caption: 'Purpose and marking of the three navigation areas',
    head: ['Area', 'Purpose', 'List', 'Current marker'],
    rows: [
      [
        'Site menu',
        'Go to other pages',
        'Unordered list',
        'aria-current="page" on the current page link',
      ],
      [
        'Breadcrumb',
        'Go back up the hierarchy',
        'Ordered list',
        'aria-current="page" on the last item',
      ],
      [
        'Page numbers',
        'Go to another page of the same list',
        'Unordered list',
        'aria-current="page" on the current page link',
      ],
    ],
    after: (
      <>
        Link text should state the destination. A page number left as the bare digit “2” loses its
        meaning in a list of links, so this example writes “Page 2”. Do not put the word
        “navigation” in the name; the role already says it.
      </>
    ),
  },
};

export const NamingSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.naming.id}>
      <DocH2 {...toc.naming} />
      <p>{c.intro(locale)}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <CodeBlock label={c.label} code={code[locale]} tone="good" />
      <p>{c.after}</p>
    </section>
  );
};

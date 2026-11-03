import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2 } from '@it-tech-blog/ui';

import { LiveDomDemo } from '../demos/LiveDomDemo';
import { getToc } from '../toc';

const tableSource = `<table>
  <tr><td>배송비</td><td>무료</td></tr>
</table>`;

const tableDom = `<table>
  <tbody>
    <tr><td>배송비</td><td>무료</td></tr>
  </tbody>
</table>`;

const content = {
  ko: {
    intro: (
      <>
        HTML 소스는 서버가 보낸 <strong>글자</strong>이고, DOM은 브라우저가 그 글자를 읽어 만든{' '}
        <strong>객체 트리</strong>입니다. 둘은 처음부터 다를 수 있습니다. 브라우저는 HTML 파싱
        규칙에 따라 빠진 요소를 채우고 잘못 닫힌 태그를 바로잡습니다.
      </>
    ),
    sourceLabel: 'HTML 소스 — tbody를 쓰지 않음',
    domLabel: '브라우저가 만든 DOM — tbody가 생김',
    after: (
      <>
        페이지가 열린 뒤에는 JavaScript가 DOM을 계속 바꿉니다. 그래서 &quot;페이지 소스 보기&quot;는
        처음 받은 글자를, 개발자 도구(DevTools)의 Elements 패널은 지금의 DOM을 보여 줍니다.
        보조기술이 읽는 정보도 지금의 DOM에서 나오므로, 접근성 문제를 확인할 때는{' '}
        <strong>소스가 아니라 DOM</strong>을 봅니다.
      </>
    ),
    demoIntro: (
      <>
        지금의 DOM이 바뀌는 순간은 직접 눌러 보면 보입니다. &quot;배송 정보&quot; 버튼은 실제{' '}
        <code>button</code> 요소입니다. JavaScript 처리를 꺼도 Tab으로 닿고 Enter · Space · 클릭으로
        click 이벤트가 발생합니다. 이것은 HTML이 주는 기본 동작입니다. 하지만 패널을 열고{' '}
        <code>aria-expanded</code>를 바꾸는 일은 JavaScript가 하지 않으면 일어나지 않습니다.
        &quot;꺼짐&quot;은 실제로 JavaScript를 끄는 것이 아니라 상태를 바꾸는 코드만 건너뛰는 학습용
        흉내이고, click 횟수도 이 페이지의 스크립트가 셉니다.
      </>
    ),
    observe: (
      <>
        <strong>관찰할 것:</strong> 처리를 켠 상태에서 누르면 &quot;지금 DOM&quot;의{' '}
        <code>aria-expanded</code>가 <code>&quot;true&quot;</code>로 바뀌고 패널의{' '}
        <code>hidden</code> 속성이 사라집니다. 처리를 끄면 click 횟수만 늘고 두 속성은 그대로입니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        HTML source is the <strong>text</strong> the server sends; the DOM is the{' '}
        <strong>object tree</strong> the browser builds by reading it. They can differ from the
        start: following the HTML parsing rules, the browser fills in missing elements and fixes
        badly closed tags.
      </>
    ),
    sourceLabel: 'HTML source — no tbody written',
    domLabel: 'The DOM the browser builds — a tbody appears',
    after: (
      <>
        After the page opens, JavaScript keeps changing the DOM. So &quot;View page source&quot;
        shows the text that first arrived, while the Elements panel in developer tools shows the DOM
        as it is now. What assistive technology reads also comes from the current DOM, so when you
        check an accessibility problem, look at <strong>the DOM, not the source</strong>.
      </>
    ),
    demoIntro: (
      <>
        You can see the current DOM change by pressing the button yourself. The &quot;Shipping
        info&quot; button is a real <code>button</code> element. Even with JavaScript handling off,
        Tab reaches it and Enter, Space, or a click fires a click event. That is HTML&apos;s
        built-in behavior. But opening the panel and changing <code>aria-expanded</code> only
        happens if JavaScript does it. &quot;Off&quot; does not really disable JavaScript; it is a
        teaching stand-in that skips only the state-changing code, and the click count is also kept
        by this page&apos;s script.
      </>
    ),
    observe: (
      <>
        <strong>What to look for:</strong> with handling on, pressing it changes{' '}
        <code>aria-expanded</code> in &quot;DOM right now&quot; to <code>&quot;true&quot;</code> and
        removes the panel&apos;s <code>hidden</code> attribute. With handling off, only the click
        count goes up and both attributes stay the same.
      </>
    ),
  },
};

const english = (code: string) => code.replace('배송비', 'Shipping').replace('무료', 'Free');

export const SourceVsDomSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const text = (code: string) => (locale === 'en' ? english(code) : code);

  return (
    <section aria-labelledby={toc.sourceVsDom.id}>
      <DocH2 {...toc.sourceVsDom} />
      <p>{c.intro}</p>
      <CodeBlock label={c.sourceLabel} code={text(tableSource)} />
      <CodeBlock label={c.domLabel} code={text(tableDom)} />
      <p>{c.after}</p>
      <p>{c.demoIntro}</p>
      <LiveDomDemo />
      <p>{c.observe}</p>
    </section>
  );
};

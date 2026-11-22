import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const code = {
  ko: `<!-- 짧은 추가 설명 하나: 브라우저가 상태 · 키 · 숨김을 맡는다 -->
<details>
  <summary>환불 기준 보기</summary>
  <p>행사 3일 전까지 전액 환불됩니다.</p>
</details>

<!-- 여러 제목과 패널: 제목 구조를 지키고 버튼이 패널을 연다 -->
<h3>
  <button type="button" id="q1" aria-expanded="true" aria-controls="q1-panel">입장 시간</button>
</h3>
<div id="q1-panel">…</div>

<h3>
  <button type="button" id="q2" aria-expanded="false" aria-controls="q2-panel">주차 안내</button>
</h3>
<div id="q2-panel" hidden>…</div>`,
  en: `<!-- One short extra explanation: the browser handles state, keys, and hiding -->
<details>
  <summary>See the refund policy</summary>
  <p>Full refund up to 3 days before the event.</p>
</details>

<!-- Several headings and panels: keep the heading structure; a button opens the panel -->
<h3>
  <button type="button" id="q1" aria-expanded="true" aria-controls="q1-panel">Entry time</button>
</h3>
<div id="q1-panel">…</div>

<h3>
  <button type="button" id="q2" aria-expanded="false" aria-controls="q2-panel">Parking</button>
</h3>
<div id="q2-panel" hidden>…</div>`,
};

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        <PageLink locale={locale} id="fixing-controls" />
        에서 펼침 버튼 하나의 결함을 고쳤습니다. 여기서는 그 버튼을 다시 만들지 않고, 무엇으로
        만들지와 여러 개가 모였을 때의 규칙을 정합니다. 덧붙이는 설명 하나라면 HTML의{' '}
        <code>details</code>와 <code>summary</code>로 끝납니다. 제목이 여럿이고 사용자가 제목으로
        훑어 가야 한다면, 제목 요소를 남기고 그 안에 버튼을 둡니다.
      </>
    ),
    caption: '두 방식이 맡는 것',
    head: ['항목', 'details · summary', '제목 속 버튼'],
    rows: [
      ['맞는 과업', '짧은 추가 설명 하나', '여러 제목과 패널을 훑고 여닫기'],
      ['상태', '브라우저가 open 속성으로 관리', 'aria-expanded를 직접 맞춤'],
      ['닫힌 내용', '브라우저가 감춤', 'hidden으로 감춤'],
      ['제목 탐색', 'summary는 제목이 아님', '제목 요소가 남아 제목으로 이동 가능'],
      ['열림 규칙', '각자 따로', '하나만 열림 · 여러 개 열림을 정할 수 있음'],
    ],
    label: '두 방식의 완성 코드',
    after: (locale: Locale) => (
      <>
        닫힌 패널에 <code>hidden</code>을 주면 그 안의 링크와 버튼은 화면에서도, Tab 순서에서도,
        접근성 트리에서도 빠집니다(
        <PageLink locale={locale} id="hiding-and-inert" />
        ). HTML에는 같은 <code>name</code>을 준 <code>details</code>끼리 하나만 열리게 하는 기능도
        있습니다. 쓰려는 브라우저에서 동작하는지 먼저 확인합니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        <PageLink locale={locale} id="fixing-controls" /> fixed the defects of one disclosure
        button. This page does not rebuild that button; it decides what to build it from and the
        rules when several come together. For a single added explanation, HTML’s{' '}
        <code>details</code> and <code>summary</code> are enough. With several headings that users
        scan by heading, keep the heading elements and put a button inside each.
      </>
    ),
    caption: 'What each approach takes on',
    head: ['Item', 'details and summary', 'Button inside a heading'],
    rows: [
      [
        'Fitting task',
        'One short extra explanation',
        'Scanning, opening, and closing several headings and panels',
      ],
      [
        'State',
        'Managed by the browser through the open attribute',
        'You keep aria-expanded in sync',
      ],
      ['Closed content', 'Hidden by the browser', 'Hidden with hidden'],
      [
        'Heading navigation',
        'summary is not a heading',
        'Heading elements remain, so heading navigation works',
      ],
      ['Open rule', 'Each on its own', 'Single-open or multi-open can be decided'],
    ],
    label: 'Complete code of both approaches',
    after: (locale: Locale) => (
      <>
        With <code>hidden</code> on a closed panel, the links and buttons inside leave the screen,
        the Tab order, and the accessibility tree (
        <PageLink locale={locale} id="hiding-and-inert" />
        ). HTML also lets <code>details</code> elements sharing a <code>name</code> open only one at
        a time. Check first that it works in the browsers you target.
      </>
    ),
  },
};

export const ChooseSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.choose.id}>
      <DocH2 {...toc.choose} />
      <p>{c.intro(locale)}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <CodeBlock label={c.label} code={code[locale]} tone="good" />
      <p>{c.after(locale)}</p>
    </section>
  );
};

import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const code = {
  ko: `<section aria-roledescription="캐러셀" aria-label="행사 안내">
  <button type="button">자동 넘김 시작</button>
  <button type="button">이전 안내</button>
  <button type="button">다음 안내</button>
  <p>3개 중 1번째</p>

  <div aria-live="polite">
    <div role="group" aria-roledescription="슬라이드" aria-label="3개 중 1번째: 일정">…</div>
    <div role="group" aria-roledescription="슬라이드" aria-label="3개 중 2번째: 장소" hidden>…</div>
    <div role="group" aria-roledescription="슬라이드" aria-label="3개 중 3번째: 준비물" hidden>…</div>
  </div>
</section>`,
  en: `<section aria-roledescription="carousel" aria-label="Event guide">
  <button type="button">Start automatic rotation</button>
  <button type="button">Previous guide</button>
  <button type="button">Next guide</button>
  <p>1 of 3</p>

  <div aria-live="polite">
    <div role="group" aria-roledescription="slide" aria-label="1 of 3: Schedule">…</div>
    <div role="group" aria-roledescription="slide" aria-label="2 of 3: Venue" hidden>…</div>
    <div role="group" aria-roledescription="slide" aria-label="3 of 3: What to bring" hidden>…</div>
  </div>
</section>`,
};

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        캐러셀은 여러 항목 가운데 일부만 보여 주고 넘겨 가며 보게 하는 컴포넌트입니다. 보이지 않는
        항목을 화면 밖으로 밀어 두기만 하면 Tab이 그 안의 링크에 닿고, 화면 낭독기는 보이지 않는
        내용을 읽습니다. 그래서 보이지 않는 항목에는 <code>hidden</code>을 줍니다(
        <PageLink locale={locale} id="hiding-and-inert" />
        ). 조작 버튼은 항목보다 앞에 두어, 읽기 순서에서 내용보다 먼저 만나게 합니다(
        <PageLink locale={locale} id="dom-order" />
        ).
      </>
    ),
    label: '첫 안내가 보이는 캐러셀의 완성 코드',
    caption: '캐러셀 예제의 의미 · 상태 · 키 · 초점 · 경계',
    head: ['항목', '계약'],
    rows: [
      [
        '의미',
        '이름을 가진 section과, 위치와 제목을 이름으로 가진 group. 역할 설명으로 캐러셀과 슬라이드임을 알림',
      ],
      ['현재 항목', '보이는 group 하나. 위치는 “3개 중 1번째”처럼 글자로도 보임'],
      ['숨긴 항목', 'hidden. 그 안의 컨트롤은 Tab 순서에 없음'],
      ['키', '모두 버튼이므로 Tab으로 옮기고 Enter · Space로 누름. 따로 만든 키는 없음'],
      ['초점', '이전 · 다음을 눌러도 초점은 누른 버튼에 그대로'],
      [
        '바뀐 내용 알리기',
        '직접 넘길 때는 항목 영역이 aria-live="polite". 자동으로 넘어가는 동안은 off',
      ],
      ['경계', '마지막에서 다음은 처음으로. 항목이 하나면 이동 버튼이 없고, 없으면 조작이 없음'],
    ],
    after: (
      <>
        <code>aria-roledescription</code>은 역할을 읽어 주는 말을 바꿉니다. 잘못 쓰면 역할이
        무엇인지 알 수 없게 되므로, APG가 캐러셀에 쓰는 이 두 곳처럼 정해진 자리에만 씁니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        A carousel shows only some of several items and lets the user move through them. If the
        items not shown are merely pushed off screen, Tab reaches links inside them and a screen
        reader reads content that is not visible. So items not shown get <code>hidden</code> (
        <PageLink locale={locale} id="hiding-and-inert" />
        ). The controls come before the items, so they are met before the content in reading order (
        <PageLink locale={locale} id="dom-order" />
        ).
      </>
    ),
    label: 'Complete code of a carousel showing the first guide',
    caption: 'Semantics, state, keys, focus, and limits in the carousel example',
    head: ['Item', 'Contract'],
    rows: [
      [
        'Semantics',
        'A named section, and groups named by position and title; role descriptions say carousel and slide',
      ],
      ['Current item', 'The one visible group; its position is also shown as text, like “1 of 3”'],
      ['Hidden items', 'hidden; controls inside are not in the Tab order'],
      ['Keys', 'All are buttons: Tab moves, Enter and Space press; no custom keys'],
      ['Focus', 'Pressing previous or next leaves focus on the pressed button'],
      [
        'Conveying the change',
        'The item area is aria-live="polite" when moved by hand, and off while rotating automatically',
      ],
      [
        'Limits',
        'Next on the last goes to the first; with one item there are no movement buttons, and with none there are no controls',
      ],
    ],
    after: (
      <>
        <code>aria-roledescription</code> changes the words used to read a role. Misused, it hides
        what the role is, so use it only in set places like these two that APG uses for a carousel.
      </>
    ),
  },
};

export const StructureSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.structure.id}>
      <DocH2 {...toc.structure} />
      <p>{c.intro(locale)}</p>
      <CodeBlock label={c.label} code={code[locale]} tone="good" />
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
    </section>
  );
};

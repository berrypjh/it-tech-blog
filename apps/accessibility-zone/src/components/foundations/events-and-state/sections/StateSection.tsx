import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { AttrPropDemo } from '../demos/AttrPropDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        같은 이름이 세 곳에 있을 수 있습니다. HTML에 적힌 <strong>속성</strong>, DOM 객체의{' '}
        <strong>프로퍼티</strong>, 그리고 앱이 기억하는 <strong>상태</strong>입니다. 셋이 늘 함께
        움직이지는 않습니다. <PageLink locale="ko" id="web-layers" />
        에서 본 펼침 버튼을 이번에는 이 세 가지로 나눠 봅니다.
      </>
    ),
    caption: '이름별 속성과 프로퍼티의 관계',
    head: ['이름', '속성', '프로퍼티', '관계'],
    rows: [
      [<code key="n">value</code>, '처음 값', '지금 입력된 값', '입력해도 속성은 바뀌지 않습니다'],
      [
        <code key="n">checked</code>,
        '처음 체크 여부',
        '지금 체크 여부',
        '눌러도 속성은 바뀌지 않습니다',
      ],
      [
        <code key="n">id · hidden · disabled</code>,
        '있음',
        '있음',
        '한쪽을 바꾸면 다른 쪽도 바뀝니다(반영)',
      ],
      [
        <code key="n">aria-expanded</code>,
        '있음',
        <code key="p">ariaExpanded</code>,
        '서로 반영되지만, 브라우저가 상태에 맞춰 바꿔 주지 않으므로 직접 바꿔야 합니다',
      ],
    ],
    aria: (
      <>
        보조기술은 접근성 트리를 통해 <code>checked</code>처럼 HTML 요소에 기본으로 있는 상태를
        브라우저에서 받고, <code>aria-expanded</code> 같은 ARIA 상태는 속성 값 그대로 받습니다.
        그래서 펼침 상태를 앱 상태로만 기억하고 속성을 바꾸지 않으면, 화면과 보조기술이 서로 다른
        상태를 보게 됩니다.
      </>
    ),
    demoIntro: (
      <>
        직접 바꿔 보면 차이가 보입니다. 아래 표는 입력 칸 · 체크박스 · &quot;주문 상세&quot; 버튼의
        속성과 프로퍼티를 실제 DOM에서 읽어 보여 줍니다.
      </>
    ),
    observe: (
      <>
        이름을 고쳐도 <code>value</code> 속성은 처음 값 그대로이고 프로퍼티만 바뀝니다. 체크박스도
        같습니다. 결함 모드에서 &quot;주문 상세&quot;를 누르면 패널은 보이지만{' '}
        <code>aria-expanded</code>는 <code>&quot;false&quot;</code>로 남아 화면 낭독기 사용자는
        &quot;접힘&quot;을 듣습니다.
      </>
    ),
    ruleTitle: '상태를 바꾸는 한 곳에서 화면과 속성을 함께 바꿉니다',
    rule: (
      <>
        React에서는 상태 하나로 <code>hidden</code>과 <code>aria-expanded</code>를 모두 계산하면
        둘이 어긋나지 않습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The same name can live in three places: the <strong>attribute</strong> written in HTML, the{' '}
        <strong>property</strong> on the DOM object, and the <strong>state</strong> the app
        remembers. The three do not always move together. This time, take the toggle button from{' '}
        <PageLink locale="en" id="web-layers" /> apart into these three.
      </>
    ),
    caption: 'How attributes and properties relate, by name',
    head: ['Name', 'Attribute', 'Property', 'Relationship'],
    rows: [
      [
        <code key="n">value</code>,
        'Initial value',
        'Current typed value',
        'Typing leaves the attribute unchanged',
      ],
      [
        <code key="n">checked</code>,
        'Initially checked',
        'Currently checked',
        'Clicking leaves the attribute unchanged',
      ],
      [
        <code key="n">id · hidden · disabled</code>,
        'Yes',
        'Yes',
        'Changing one changes the other (reflected)',
      ],
      [
        <code key="n">aria-expanded</code>,
        'Yes',
        <code key="p">ariaExpanded</code>,
        'Reflected, but the browser never changes it to match the state. You must',
      ],
    ],
    aria: (
      <>
        Assistive technology receives native states such as <code>checked</code> from the browser
        through the accessibility tree, and ARIA states such as <code>aria-expanded</code> exactly
        as the attribute says. So if the expanded state lives only in app state and the attribute is
        not updated, the screen and assistive technology see different states.
      </>
    ),
    demoIntro: (
      <>
        Changing them yourself makes the difference visible. The table below reads the attributes
        and properties of the text field, the checkbox, and the &quot;Order details&quot; button
        from the real DOM.
      </>
    ),
    observe: (
      <>
        Editing the name changes only the property; the <code>value</code> attribute keeps the
        initial value. The checkbox is the same. In defect mode, pressing &quot;Order details&quot;
        shows the panel but <code>aria-expanded</code> stays <code>&quot;false&quot;</code>, so
        screen reader users hear &quot;collapsed&quot;.
      </>
    ),
    ruleTitle: 'Change the screen and the attribute together where the state changes',
    rule: (
      <>
        In React, computing both <code>hidden</code> and <code>aria-expanded</code> from a single
        piece of state keeps them from drifting apart.
      </>
    ),
  },
};

export const StateSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.state.id}>
      <DocH2 {...toc.state} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.aria}</p>
      <p>{c.demoIntro}</p>
      <AttrPropDemo />
      <p>{c.observe}</p>
      <Callout variant="note" title={c.ruleTitle}>
        <p>{c.rule}</p>
      </Callout>
    </section>
  );
};

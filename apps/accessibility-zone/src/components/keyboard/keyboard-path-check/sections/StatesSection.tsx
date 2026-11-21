import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        APG는 포커스를 탐색의 위치를 따라가는 지점으로, 선택을 그와 구별되는 상태로 설명합니다.
        포커스가 위젯을 떠나도 선택은 남습니다. 이 과업에서는 세 값을 이렇게 부릅니다.
      </>
    ),
    caption: '비슷하게 들리는 네 가지 상태',
    head: ['이름', '뜻', '확인하는 곳', '바뀌는 때'],
    rows: [
      ['DOM 포커스', '키 입력을 받는 요소', 'document.activeElement', 'Tab, focus(), 클릭'],
      [
        '활성 항목',
        '위젯 안에서 키보드가 가리키는 항목',
        '위젯 상태, tabindex="0" 또는 aria-activedescendant',
        '방향키, Home, End',
      ],
      ['선택값', '사용자가 고른 값', 'aria-selected="true"', 'Space, 클릭'],
      [
        <code key="a">:active</code>,
        '요소가 눌리고 있는 동안의 CSS 상태',
        'CSS 의사 클래스',
        '누르는 동안만',
      ],
    ],
    calloutTitle: '같은 "active"가 아닙니다',
    callout: (
      <>
        <code>document.activeElement</code>는 DOM 포커스, <code>aria-activedescendant</code>는
        위젯의 활성 항목, CSS <code>:active</code>는 누르는 동안의 상태를 가리킵니다. 이름이
        비슷해도 값을 서로 대신해 읽지 않습니다.
      </>
    ),
    link: (
      <>
        두 포커스 관리 방식은 <PageLink locale="ko" id="composite-focus" hash="two-focus-methods" />
        에서 비교했습니다. 과업의 목록은 Roving tabindex를 씁니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The APG describes focus as the point that tracks navigation, and selection as a distinct
        state. Selection remains after focus leaves the widget. In this task the three values are
        named as follows.
      </>
    ),
    caption: 'Four states that sound alike',
    head: ['Name', 'Meaning', 'Where to check', 'When it changes'],
    rows: [
      [
        'DOM focus',
        'The element receiving key input',
        'document.activeElement',
        'Tab, focus(), click',
      ],
      [
        'Active item',
        'The item the keyboard points to inside the widget',
        'Widget state, tabindex="0" or aria-activedescendant',
        'Arrows, Home, End',
      ],
      ['Selection', 'The value the user chose', 'aria-selected="true"', 'Space, click'],
      [
        <code key="a">:active</code>,
        'The CSS state while being pressed',
        'CSS pseudo-class',
        'Only while pressed',
      ],
    ],
    calloutTitle: 'Not the same "active"',
    callout: (
      <>
        <code>document.activeElement</code> is DOM focus, <code>aria-activedescendant</code> is the
        widget&apos;s active item, and CSS <code>:active</code> is the state while pressing. Similar
        names do not make these values interchangeable.
      </>
    ),
    link: (
      <>
        <PageLink locale="en" id="composite-focus" hash="two-focus-methods" /> compared the two ways
        of managing focus. The list in this task uses roving tabindex.
      </>
    ),
  },
};

export const StatesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.states.id}>
      <DocH2 {...toc.states} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="informative" />
      </p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <Callout variant="pitfall" title={c.calloutTitle}>
        {c.callout}
      </Callout>
      <p>{c.link}</p>
    </section>
  );
};

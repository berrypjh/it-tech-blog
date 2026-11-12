import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { ARIA_CHECKED_ON, htmlAria } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { SourceTag } from '@/components/shared/SourceTag';
import { Steps } from '@/components/shared/Steps';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        ARIA in HTML은 작성자가 ARIA로 HTML 요소의 노출 의미를 바꿀 수 있다고 하면서, 두 경우를
        뺍니다. 요소의 강한 네이티브 의미와 충돌할 때, 그리고 요소가 이미 가진 의미와 같을 때입니다.
      </>
    ),
    cite: 'ARIA in HTML (W3C Recommendation, 2026-08-11) — 1. Author requirements',
    question: (
      <>
        그래서 질문은 &quot;어떤 ARIA를 붙일까&quot;가 아니라 &quot;HTML 요소를 고른 뒤에도 전해지지
        않는 의미가 남는가&quot;입니다. 아래 표는 요구마다 고를 요소와 남는 의미입니다.
      </>
    ),
    caption: '요구마다 네이티브 요소와 남는 의미',
    head: ['요구', '고를 요소', '남는 의미', '보완'],
    rows: [
      ['다른 페이지로 이동', '<a href>', '없음', '—'],
      ['지금 페이지에서 실행', '<button>', '없음', '—'],
      ['한 항목을 켜고 끄기', '<input type="checkbox">', '없음', '—'],
      ['눌림 · 해제가 있는 토글', '<button>', '눌림 상태', 'aria-pressed'],
      ['내용을 펼치고 접기', '<button>', '펼침 상태', 'aria-expanded (05.6)'],
      ['목록 속 지금 페이지 링크', '<a href>', '현재 항목', 'aria-current'],
      [
        '탭 목록',
        '맞는 요소 없음',
        '역할 · 관계 · 상태 · 키 동작 전부',
        '역할과 키 동작을 직접 구현',
      ],
    ],
    stepsIntro: '판단은 세 단계로 합니다.',
    steps: [
      '같은 의미와 동작을 주는 HTML 요소가 있는지 찾습니다. 있으면 그 요소를 씁니다.',
      '그 요소로 전해지지 않는 상태나 관계가 남으면, 그 의미를 가진 aria-* 속성만 더하고 실제 상태가 바뀔 때 함께 바꿉니다.',
      '맞는 요소가 없으면 role과 필요한 상태 · 속성을 쓰고, 포커스와 키 동작을 직접 만든 뒤 실제 환경에서 확인합니다.',
    ],
    after: (
      <>
        마지막 줄의 탭 목록처럼 직접 만드는 경우, APG 같은 권장 패턴이 키 동작의 출발점이 됩니다.
        권장 패턴은 규범이 아니므로 따랐다는 사실만으로 충족을 단정하지 않습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        ARIA in HTML says authors may use ARIA to change the exposed meaning of HTML elements, and
        then excludes two cases: when it conflicts with the element&apos;s strong native semantics,
        and when it equals the meaning the element already has.
      </>
    ),
    cite: 'ARIA in HTML (W3C Recommendation, 2026-08-11) — 1. Author requirements',
    question: (
      <>
        So the question is not &quot;which ARIA should I add?&quot; but &quot;after choosing the
        HTML element, is there meaning left that does not get through?&quot; The table below lists
        the element to choose and the meaning that remains for each need.
      </>
    ),
    caption: 'The native element and the remaining meaning for each need',
    head: ['Need', 'Element to choose', 'Remaining meaning', 'Fill with'],
    rows: [
      ['Go to another page', '<a href>', 'None', '—'],
      ['Do something on this page', '<button>', 'None', '—'],
      ['Turn one item on or off', '<input type="checkbox">', 'None', '—'],
      ['A toggle that is pressed or not', '<button>', 'Pressed state', 'aria-pressed'],
      ['Expand and collapse content', '<button>', 'Expanded state', 'aria-expanded (05.6)'],
      ['The current page link in a list', '<a href>', 'Current item', 'aria-current'],
      [
        'A tab list',
        'No matching element',
        'Role, relations, states, and keys — all of it',
        'Build the roles and keys yourself',
      ],
    ],
    stepsIntro: 'Judge in three steps.',
    steps: [
      'Look for an HTML element that gives the same meaning and behavior. If there is one, use it.',
      'If a state or relation that the element does not convey remains, add only the aria-* attribute with that meaning, and change it whenever the real state changes.',
      'If no element fits, use a role with the states and properties it needs, build focus and key behavior yourself, and check it in real environments.',
    ],
    after: (
      <>
        When you build it yourself, like the tab list in the last row, a recommended pattern such as
        the APG is a starting point for key behavior. A recommended pattern is not normative, so
        following it does not by itself prove anything is met.
      </>
    ),
  },
};

export const RemainingSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.remaining.id}>
      <DocH2 {...toc.remaining} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={htmlAria('author-requirements-for-use-of-aria-in-html')}
        cite={c.cite}
        checkedOn={ARIA_CHECKED_ON}
      >
        Authors MAY use the ARIA role and aria-* attributes to change the exposed meaning
        (semantics) of HTML elements, in accordance with the requirements defined by WAI-ARIA,
        except where ARIA features conflict with the strong native semantics or are equal to the
        implicit ARIA semantics of a given HTML element.
      </NormativeQuote>
      <p>{c.question}</p>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.stepsIntro}</p>
      <Steps items={c.steps} />
      <p>{c.after}</p>
    </section>
  );
};

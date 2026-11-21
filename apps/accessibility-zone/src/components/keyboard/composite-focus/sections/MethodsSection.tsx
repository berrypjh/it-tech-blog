import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { aria12, KEYBOARD_CHECKED_ON } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        APG는 복합 위젯이 Tab 순서에 한 자리만 차지하도록 권합니다. 안쪽 이동은 방향키가 맡고, Tab은
        위젯을 드나드는 길로 남습니다. 활성 항목을 표현하는 방법은 두 가지입니다.
      </>
    ),
    caption: 'Roving tabindex와 aria-activedescendant 비교',
    head: ['항목', 'Roving tabindex', 'aria-activedescendant'],
    rows: [
      ['DOM 포커스', '활성 항목으로 이동', '컨테이너에 그대로'],
      ['Tab 정지점', 'tabindex="0"인 항목 하나', '컨테이너'],
      ['활성 항목 표현', '실제 포커스', '컨테이너 속성의 ID 참조'],
      ['포커스 표시', '브라우저의 :focus-visible 적용', '작성자가 항목에 직접 그림'],
      ['보이게 스크롤', '포커스 이동 때 브라우저가 처리', '작성자가 처리'],
      [
        '주의',
        '항목이 지워지면 tabindex="0"을 다시 정함',
        '지원 역할 · 소유 관계 · 유효한 ID 필요',
      ],
    ],
    roleIntro: (
      <>
        <code>listbox</code>는 <code>aria-activedescendant</code>를 지원하고, <code>option</code>을
        소유해야 합니다. 예제의 항목은 목록의 DOM 자손이므로 소유 조건을 만족합니다.
      </>
    ),
    cite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — aria-activedescendant',
    cssNote: (
      <>
        WAI-ARIA는 실제 포커스가 컨테이너에 있으므로 활성 항목에 <code>:focus</code>를 쓸 수 없다고
        설명합니다. 그래서 활성 항목의 표시는 상태에서 만든 스타일로 그립니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The APG recommends that a composite widget take one place in the Tab order. Arrow keys
        handle movement inside, and Tab stays the way in and out. There are two ways to express the
        active item.
      </>
    ),
    caption: 'Roving tabindex compared with aria-activedescendant',
    head: ['Item', 'Roving tabindex', 'aria-activedescendant'],
    rows: [
      ['DOM focus', 'Moves to the active item', 'Stays on the container'],
      ['Tab stop', 'The one item with tabindex="0"', 'The container'],
      ['Active item expressed by', 'Real focus', 'An ID reference on the container'],
      [
        'Focus indicator',
        'The browser’s :focus-visible applies',
        'The author draws it on the item',
      ],
      ['Scrolling into view', 'The browser, when focus moves', 'The author'],
      [
        'Watch for',
        'Reassign tabindex="0" when items are removed',
        'Needs a supporting role, ownership, and a valid ID',
      ],
    ],
    roleIntro: (
      <>
        <code>listbox</code> supports <code>aria-activedescendant</code> and must own{' '}
        <code>option</code> elements. The items in this example are DOM descendants of the list, so
        they meet the ownership condition.
      </>
    ),
    cite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — aria-activedescendant',
    cssNote: (
      <>
        WAI-ARIA explains that <code>:focus</code> cannot style the active item because actual focus
        is on the container. So the active item&apos;s indicator is drawn with a style derived from
        state.
      </>
    ),
  },
};

export const MethodsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.methods.id}>
      <DocH2 {...toc.methods} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="informative" />
      </p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.roleIntro}</p>
      <NormativeQuote
        locale={locale}
        href={aria12('aria-activedescendant')}
        cite={c.cite}
        checkedOn={KEYBOARD_CHECKED_ON}
      >
        The value of aria-activedescendant refers to an owned element. An owned element is either a
        descendant of the element with DOM focus or a logical descendant as indicated by the
        aria-owns attribute. … Authors SHOULD also ensure that the currently active descendant is
        visible and in view (or scrolls into view) when focused.
      </NormativeQuote>
      <p>{c.cssNote}</p>
    </section>
  );
};

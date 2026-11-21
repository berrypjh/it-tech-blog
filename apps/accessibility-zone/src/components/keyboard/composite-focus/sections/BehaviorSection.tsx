import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        표의 근거 칸은 APG 권장과 이 예제의 결정을 나눕니다. APG는 규범이 아니라 권장 패턴이고, 단일
        선택 목록에서 선택을 어떤 키로 할지는 정해 두지 않았습니다.
      </>
    ),
    caption: '예제 Listbox의 입력과 상태 변화',
    head: ['입력', '활성 항목', '선택값', '근거'],
    rows: [
      ['Tab으로 진입', '선택 항목, 없으면 첫 항목', '그대로', 'APG Listbox'],
      ['↓ · ↑', '다음 · 이전. 끝에서는 멈춤', '그대로', 'APG Listbox. 멈춤은 예제 결정'],
      ['Home · End', '처음 · 마지막', '그대로', 'APG Listbox (5개 초과 시 강력 권장)'],
      ['글자 입력', '그 글자로 시작하는 다음 항목', '그대로', 'APG Listbox. 한 글자만 구현'],
      ['Space · 클릭', '그대로 (클릭은 그 항목)', '활성 항목', '예제 결정'],
      ['Tab으로 이탈', '다음 진입 위치로 되돌림', '유지', 'APG Listbox의 진입 규칙에서 도출'],
      [
        '목록 밖 버튼으로 선택 항목 삭제',
        '그 항목이 활성이면 다음 → 이전 → 없음',
        '지운 항목이면 해제',
        '07.4의 규칙을 적용한 예제 결정',
      ],
    ],
    calloutTitle: '선택은 포커스를 따라가지 않습니다',
    callout: (
      <>
        APG는 단일 선택에서 선택이 포커스를 따라가게 할 수도 있다고 하지만 필수는 아닙니다. 이
        예제는 활성과 선택의 차이를 보려고 분리했습니다.
      </>
    ),
    recovery: (
      <>
        삭제 복구는 <PageLink locale="ko" id="focus-after-changes" hash="focus-destination-rules" />
        의 다음 → 이전 규칙을 그대로 씁니다. 복구하지 않으면 Roving에서는 Tab 정지점이 사라지고,
        aria-activedescendant에서는 없는 ID를 가리키게 됩니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The basis column separates APG recommendations from decisions made for this example. The APG
        is a recommended pattern, not a normative text, and it does not specify which key selects in
        a single-select list.
      </>
    ),
    caption: 'Input and state changes of the example listbox',
    head: ['Input', 'Active item', 'Selection', 'Basis'],
    rows: [
      ['Tab in', 'Selected item, else the first', 'Unchanged', 'APG Listbox'],
      [
        '↓, ↑',
        'Next, previous; stops at the ends',
        'Unchanged',
        'APG Listbox; stopping is this example’s choice',
      ],
      ['Home, End', 'First, last', 'Unchanged', 'APG Listbox (strongly recommended above 5 items)'],
      [
        'Type a character',
        'Next item starting with it',
        'Unchanged',
        'APG Listbox; one character only',
      ],
      ['Space, click', 'Unchanged (click: that item)', 'The active item', 'This example’s choice'],
      ['Tab out', 'Reset to the next entry position', 'Kept', 'Derived from the APG entry rule'],
      [
        'Remove the selected item with the button outside',
        'If it was active: next, previous, none',
        'Cleared if removed',
        'This example, applying 07.4',
      ],
    ],
    calloutTitle: 'Selection does not follow focus here',
    callout: (
      <>
        The APG says selection may follow focus in a single-select list, but does not require it.
        This example keeps them apart so the difference between active and selected can be seen.
      </>
    ),
    recovery: (
      <>
        Recovery after removal uses the next-then-previous rule from{' '}
        <PageLink locale="en" id="focus-after-changes" hash="focus-destination-rules" />. Without
        it, roving loses its Tab stop, and aria-activedescendant points to an ID that no longer
        exists.
      </>
    ),
  },
};

export const BehaviorSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.behavior.id}>
      <DocH2 {...toc.behavior} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <Callout variant="note" title={c.calloutTitle}>
        {c.callout}
      </Callout>
      <p>{c.recovery}</p>
    </section>
  );
};

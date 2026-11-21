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
        WAI-ARIA는 포커스가 있던 요소를 지울 때 논리적인 위치로 옮기라고 권고하지만, 어디가
        논리적인지는 정하지 않습니다. 과업을 어떻게 이어 갈지에 따라 제품이 정해야 합니다. 아래 표는
        이 페이지 실습의 설계입니다.
      </>
    ),
    cite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — 4.3.1 Information for Authors',
    caption: '이 예제의 포커스 규칙',
    head: ['동작', '포커스 도착지', '이유', '결과 안내'],
    rows: [
      ['가운데 행 삭제', '다음 행의 삭제 버튼', '같은 자리에서 이어서 정리할 수 있음', '삭제 결과'],
      ['마지막 행 삭제', '이전 행의 삭제 버튼', '다음 행이 없음', '삭제 결과'],
      ['남은 한 행 삭제', '추가 버튼', '목록이 비어 다음 할 일은 추가', '목록이 비었음'],
      ['행 추가', '이동 없음 (추가 버튼 유지)', '연속으로 추가할 수 있음', '추가 결과'],
      [
        '보관 (그 버튼을 더 못 씀)',
        '이동 없음 (aria-disabled로 유지)',
        'disabled는 포커스를 잃을 수 있음',
        '보관 결과',
      ],
      ['배경 갱신', '이동 없음', '사용자가 요청한 변화가 아님', '필요한 경우만'],
    ],
    note: (
      <>
        다른 제품에서는 다른 규칙이 맞을 수 있습니다. 예를 들어 새 행을 곧바로 편집해야 한다면 추가
        뒤 그 행의 입력 칸으로 옮기는 편이 낫습니다. 중요한 것은 정해 두고 같은 규칙을 지키는
        것입니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        WAI-ARIA advises moving focus to a logical element when removing the element that has it,
        but does not say what is logical. That depends on how the task continues, so the product
        decides. The table below is the design of this page&apos;s exercise.
      </>
    ),
    cite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — 4.3.1 Information for Authors',
    caption: 'Focus rules in this example',
    head: ['Action', 'Focus destination', 'Why', 'Announced result'],
    rows: [
      [
        'Delete a middle row',
        'The next row’s delete button',
        'Tidying can continue in place',
        'Deletion',
      ],
      [
        'Delete the last row',
        'The previous row’s delete button',
        'There is no next row',
        'Deletion',
      ],
      [
        'Delete the only row',
        'The add button',
        'The list is empty, so adding comes next',
        'List is empty',
      ],
      ['Add a row', 'No move (stays on add)', 'Rows can be added in a row', 'Addition'],
      [
        'Archive (that button is no longer usable)',
        'No move (kept with aria-disabled)',
        'disabled can lose focus',
        'Archiving',
      ],
      ['Background update', 'No move', 'The user did not ask for this change', 'Only if needed'],
    ],
    note: (
      <>
        Other products may need other rules. If a new row has to be edited right away, for example,
        moving to its input after adding is better. What matters is deciding and keeping to the same
        rule.
      </>
    ),
  },
};

export const RulesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.rules.id}>
      <DocH2 {...toc.rules} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={aria12('managingfocus_authors')}
        cite={c.cite}
        checkedOn={KEYBOARD_CHECKED_ON}
      >
        If the author removes the element with focus, the author SHOULD move focus to a logical
        element.
      </NormativeQuote>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.note}</p>
    </section>
  );
};

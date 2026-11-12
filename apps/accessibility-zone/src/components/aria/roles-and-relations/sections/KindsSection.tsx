import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { ARIA_CHECKED_ON, aria12 } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const code = {
  ko: `<div role="tablist" aria-label="배송 정보">
  <button role="tab" id="tab-fee" aria-selected="true"
          aria-controls="panel-fee">배송비</button>
  <button role="tab" id="tab-return" aria-selected="false"
          aria-controls="panel-return" tabindex="-1">반품</button>
</div>
<div role="tabpanel" id="panel-fee" aria-labelledby="tab-fee">…</div>
<div role="tabpanel" id="panel-return" aria-labelledby="tab-return" hidden>…</div>`,
  en: `<div role="tablist" aria-label="Shipping info">
  <button role="tab" id="tab-fee" aria-selected="true"
          aria-controls="panel-fee">Fees</button>
  <button role="tab" id="tab-return" aria-selected="false"
          aria-controls="panel-return" tabindex="-1">Returns</button>
</div>
<div role="tabpanel" id="panel-fee" aria-labelledby="tab-fee">…</div>
<div role="tabpanel" id="panel-return" aria-labelledby="tab-return" hidden>…</div>`,
};

const content = {
  ko: {
    intro: (
      <>
        탭 목록은 HTML에 맞는 요소가 없어 ARIA로 만드는 대표 사례입니다. 아래 교육 예시 하나에 네
        가지가 모두 들어 있습니다.
      </>
    ),
    label: '탭 목록 하나에 담긴 역할 · 상태 · 속성 · 관계',
    caption: '예제에서 네 가지를 나눠 읽기',
    head: ['종류', '예제의 속성', '알리는 것', '언제 바뀌나'],
    rows: [
      ['역할', 'role="tablist" · "tab" · "tabpanel"', '이 요소가 무엇인가', '거의 바뀌지 않습니다'],
      ['상태', 'aria-selected', '지금 어느 탭이 선택됐나', '사용자가 탭을 고를 때마다'],
      ['속성', 'aria-label', '탭 목록의 이름', '잘 바뀌지 않습니다'],
      [
        '관계',
        'aria-controls · aria-labelledby',
        '다른 요소를 ID로 가리킴',
        '가리키는 대상이 바뀔 때',
      ],
    ],
    stateVsProp: (
      <>
        WAI-ARIA는 상태와 속성을 같은 <code>aria-*</code> 속성으로 다루면서, 바뀌는 빈도로 둘을
        구분합니다. 관계를 나타내는 것들은 원문의 분류로는 속성이지만, 값이 다른 요소의 ID라서 이
        페이지에서는 따로 봅니다.
      </>
    ),
    cite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — 6.1 Clarification of States versus Properties',
    after: (
      <>
        이 예제는 의미만 적은 것입니다. 화살표 키로 탭을 옮기는 동작, 선택이 바뀔 때{' '}
        <code>aria-selected</code>와 <code>hidden</code>을 함께 바꾸는 일은 스크립트가 맡습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        A tab list is a typical case built with ARIA because HTML has no matching element. One
        teaching example below holds all four kinds.
      </>
    ),
    label: 'Role, state, property, and relation in one tab list',
    caption: 'Reading the four kinds apart in the example',
    head: ['Kind', 'Attribute in the example', 'What it tells', 'When it changes'],
    rows: [
      ['Role', 'role="tablist", "tab", "tabpanel"', 'What this element is', 'Hardly ever'],
      ['State', 'aria-selected', 'Which tab is selected now', 'Each time the user picks a tab'],
      ['Property', 'aria-label', 'The name of the tab list', 'Rarely'],
      [
        'Relation',
        'aria-controls, aria-labelledby',
        'Points to another element by ID',
        'When the target changes',
      ],
    ],
    stateVsProp: (
      <>
        WAI-ARIA treats states and properties as the same kind of <code>aria-*</code> attribute and
        tells them apart by how often they change. Relations are properties in the spec&apos;s
        grouping, but because their value is another element&apos;s ID, this page looks at them
        separately.
      </>
    ),
    cite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — 6.1 Clarification of States versus Properties',
    after: (
      <>
        This example only writes down meaning. Moving between tabs with arrow keys and changing{' '}
        <code>aria-selected</code> and <code>hidden</code> together when the selection changes are
        the script&apos;s job.
      </>
    ),
  },
};

export const KindsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.kinds.id}>
      <DocH2 {...toc.kinds} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <CodeBlock code={code[locale]} label={c.label} />
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.stateVsProp}</p>
      <NormativeQuote
        locale={locale}
        href={aria12('statevsprop')}
        cite={c.cite}
        checkedOn={ARIA_CHECKED_ON}
      >
        One major difference is that the values of properties (such as aria-labelledby) are often
        less likely to change throughout the application life-cycle than the values of states (such
        as aria-checked) which may change frequently due to user interaction.
      </NormativeQuote>
      <p>{c.after}</p>
    </section>
  );
};

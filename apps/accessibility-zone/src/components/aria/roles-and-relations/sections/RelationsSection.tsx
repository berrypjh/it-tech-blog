import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { ARIA_CHECKED_ON, aria12 } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const code = {
  ko: `<button type="button" aria-expanded="false" aria-controls="faq-1">
  환불은 언제 되나요?
</button>
<div id="faq-1" hidden>결제 수단에 따라 3~5일이 걸립니다.</div>

<!-- 버튼을 눌러도 아무 일도 없다. 열고 닫는 것은 스크립트의 일이다 -->`,
  en: `<button type="button" aria-expanded="false" aria-controls="faq-1">
  When will I get a refund?
</button>
<div id="faq-1" hidden>It takes 3 to 5 days depending on the payment method.</div>

<!-- Pressing the button does nothing. Opening and closing is the script's job -->`,
};

const content = {
  ko: {
    intro: (
      <>
        &quot;이 요소와 저 요소가 이어져 있다&quot;는 말에는 세 가지가 섞여 있습니다. 표는 그 셋을
        나눈 것입니다.
      </>
    ),
    caption: '세 가지 관계',
    head: ['관계', '만드는 방법', '정하는 것', '만들지 않는 것'],
    rows: [
      ['DOM 부모 · 자식', '마크업 안에 넣기', '기본 소유 관계, Tab 순서와 읽는 순서의 바탕', '—'],
      [
        '접근성 소유',
        'DOM 자손이면 저절로, 아니면 aria-owns',
        '필요한 부모 역할 · 소유해야 할 자식 요구의 판단',
        'Tab 순서 · 화면 위치',
      ],
      [
        'ID 참조',
        'aria-controls · aria-labelledby · aria-describedby',
        '다른 요소를 가리킨다는 사실',
        '소유 관계 · 동작',
      ],
    ],
    controls: (
      <>
        아래 예제의 <code>aria-controls</code>는 &quot;이 버튼이 저 영역을 조절한다&quot;는 관계만
        알립니다. 버튼을 눌러 영역을 여는 일, 그때 <code>aria-expanded</code>를 바꾸는 일은
        스크립트가 해야 합니다. 그리고 영역은 버튼에 소유되지 않습니다.
      </>
    ),
    label: 'aria-controls는 관계만 알린다',
    owns: (
      <>
        <code>aria-owns</code>는 DOM 구조로 나타낼 수 없는 부모 · 자식 관계를 위한 것입니다. DOM을
        옮길 수 있으면 DOM을 옮깁니다.
      </>
    ),
    cite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — aria-owns',
    calloutTitle: 'aria-owns로 순서를 바꾸지 않습니다',
    callout: (
      <>
        화면에서 떨어진 요소를 보조기술에게만 가까이 보이려고 <code>aria-owns</code>를 쓰면, 키보드
        사용자의 Tab 순서와 화면 배치는 그대로라 서로 다른 구조를 겪게 됩니다. 순서 문제는 DOM
        순서를 고쳐서 풉니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        &quot;This element is connected to that one&quot; mixes three things. The table separates
        them.
      </>
    ),
    caption: 'Three kinds of relationship',
    head: ['Relationship', 'How it is made', 'What it decides', 'What it does not create'],
    rows: [
      [
        'DOM parent and child',
        'Putting it inside the markup',
        'Default ownership; the basis for Tab order and reading order',
        '—',
      ],
      [
        'Accessibility ownership',
        'Automatic for DOM descendants, otherwise aria-owns',
        'Whether required parent and owned-child requirements are met',
        'Tab order, position on screen',
      ],
      [
        'ID reference',
        'aria-controls, aria-labelledby, aria-describedby',
        'The fact that it points to another element',
        'Ownership, behavior',
      ],
    ],
    controls: (
      <>
        In the example below, <code>aria-controls</code> only tells the relation &quot;this button
        controls that region.&quot; Opening the region when the button is pressed, and changing{' '}
        <code>aria-expanded</code> at that moment, are the script&apos;s job. And the region is not
        owned by the button.
      </>
    ),
    label: 'aria-controls only tells a relation',
    owns: (
      <>
        <code>aria-owns</code> is for parent and child relationships the DOM structure cannot
        express. If you can move the DOM, move the DOM.
      </>
    ),
    cite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — aria-owns',
    calloutTitle: 'Do not reorder with aria-owns',
    callout: (
      <>
        Using <code>aria-owns</code> to bring a distant element close only for assistive technology
        leaves the keyboard Tab order and the screen layout as they were, so users experience
        different structures. Fix ordering problems by fixing the DOM order.
      </>
    ),
  },
};

export const RelationsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.relations.id}>
      <DocH2 {...toc.relations} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.controls}</p>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <CodeBlock code={code[locale]} label={c.label} />
      <p>{c.owns}</p>
      <NormativeQuote
        locale={locale}
        href={aria12('aria-owns')}
        cite={c.cite}
        checkedOn={ARIA_CHECKED_ON}
      >
        Authors SHOULD NOT use aria-owns as a replacement for the DOM hierarchy. If the relationship
        is represented in the DOM, do not use aria-owns.
      </NormativeQuote>
      <Callout variant="pitfall" title={c.calloutTitle}>
        {c.callout}
      </Callout>
    </section>
  );
};

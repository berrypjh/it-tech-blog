import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { accname11, accname12, ARIA_CHECKED_ON } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        <PageLink locale="ko" id="accessibility-tree" hash="hidden-and-name" />의 예제에서 버튼은
        숨긴 span을 aria-labelledby로 직접 가리켰습니다. 그런데 &quot;숨김&quot;은 참조 대상 자신일
        수도, 참조 대상 안의 자손일 수도 있습니다. 두 경우는 다른 조건으로 판단합니다.
      </>
    ),
    cite12: 'AccName 1.2 (Working Draft, 2026-11-04) — Hidden Not Referenced',
    cite11: 'AccName 1.1 (W3C Recommendation, 2018-12-18) — step 2A',
    caption: '세 가지 숨김 위치와 두 판본의 결과',
    head: ['숨은 곳', '예', 'AccName 1.2 초안', 'AccName 1.1 확정'],
    rows: [
      ['참조 대상 자신', '<span id="l" hidden>배송지 검색</span>', '포함', '포함'],
      [
        '보이는 참조 대상 안의 자손',
        '<span id="l">배송지 <span hidden>(임시)</span>검색</span>',
        '뺌',
        '뺌',
      ],
      [
        '숨은 참조 대상 안의 자손',
        '<div id="l" hidden>배송지 <span>검색</span></div>',
        '포함',
        '뺌 — 판본 차이',
      ],
    ],
    after: (
      <>
        마지막 줄이 갈리는 곳입니다. 1.1은 &quot;직접 참조된&quot; 노드만 살려 자손을 빼고, 1.2
        초안은 직접 참조된 노드가 숨어 있으면 그 하위 전체를 포함하라고 고쳤습니다. 이 줄은 엔진의
        결과를 관찰값으로 따로 확인합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        In the example on <PageLink locale="en" id="accessibility-tree" hash="hidden-and-name" />,
        the button pointed directly at a hidden span with aria-labelledby. But &quot;hidden&quot;
        can be the referenced target itself or a descendant inside the target. The two are judged
        under different conditions.
      </>
    ),
    cite12: 'AccName 1.2 (Working Draft, 2026-11-04) — Hidden Not Referenced',
    cite11: 'AccName 1.1 (W3C Recommendation, 2018-12-18) — step 2A',
    caption: 'Three places of hiding and the results in two editions',
    head: ['What is hidden', 'Example', 'AccName 1.2 draft', 'AccName 1.1 Recommendation'],
    rows: [
      [
        'The referenced target itself',
        '<span id="l" hidden>Search addresses</span>',
        'Included',
        'Included',
      ],
      [
        'A descendant inside a visible target',
        '<span id="l">Search <span hidden>(draft)</span>addresses</span>',
        'Left out',
        'Left out',
      ],
      [
        'A descendant inside a hidden target',
        '<div id="l" hidden>Search <span>addresses</span></div>',
        'Included',
        'Left out — edition difference',
      ],
    ],
    after: (
      <>
        The last row is where they split. 1.1 keeps only the &quot;directly referenced&quot; node
        and leaves out descendants; the 1.2 draft changed this to include the whole subtree when the
        directly referenced node is hidden. Check this row against the engine&apos;s result
        separately as an observed value.
      </>
    ),
  },
};

export const HiddenSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.hidden.id}>
      <DocH2 {...toc.hidden} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={accname12('comp_hidden_not_referenced')}
        cite={c.cite12}
        checkedOn={ARIA_CHECKED_ON}
      >
        If the current node is hidden and is: Not part of an aria-labelledby or aria-describedby
        traversal, where the node directly referenced by that relation was hidden. Nor part of a
        native host language text alternative element (e.g. label in HTML) or attribute traversal,
        where the root of that traversal was hidden. Return the empty string.
      </NormativeQuote>
      <NormativeQuote
        locale={locale}
        href={accname11('step2A')}
        cite={c.cite11}
        checkedOn={ARIA_CHECKED_ON}
      >
        If the current node is hidden and is not directly referenced by aria-labelledby or
        aria-describedby, nor directly referenced by a native host language text alternative element
        (e.g. label in HTML) or attribute, return the empty string.
      </NormativeQuote>
      <p>
        <SourceTag locale={locale} id="model" />
      </p>
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={c.rows.map(([where, code, r12, r11]) => [
          where,
          <code key="c">{code}</code>,
          r12,
          r11,
        ])}
      />
      <p>{c.after}</p>
    </section>
  );
};

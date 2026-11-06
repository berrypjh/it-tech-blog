import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { ThemedFigure } from '@/components/shared/ThemedFigure';

import twoStandardsDark from '../images/two-standards-dark.webp';
import twoStandardsLight from '../images/two-standards-light.webp';
import { getToc } from '../toc';

const content = {
  ko: {
    figure: {
      alt: '두 문서가 나란히 있고 항목 묶음의 수와 크기가 서로 다릅니다. 몇 항목만 점선으로 이어지고, 강조된 한 항목은 맞은편의 두 항목으로 갈라집니다. 이어지지 않은 항목이 많습니다. 왼쪽 문서 아래에는 밀리미터 눈금자가, 오른쪽 문서 아래에는 픽셀 격자가 있습니다.',
      caption:
        'KWCAG와 WCAG는 관련이 있지만 번역도, 항목마다 짝이 맞는 대응도 아닙니다. 재는 단위도 다를 수 있습니다. 학습용으로 단순화한 그림입니다.',
    },
    intro: <>두 문서는 같은 네 원칙에서 출발하지만 짜임과 기초 판본이 다릅니다.</>,
    caption: 'KWCAG 2.2와 WCAG 2.2의 짜임',
    head: ['구분', 'KWCAG 2.2', 'WCAG 2.2'],
    rows: [
      ['기초 판본', 'WCAG 2.1(2018)', '—'],
      ['짜임', '원칙 → 지침 → 검사항목 (3단계)', '원칙 → 지침 → 성공 기준, 기준마다 A · AA · AAA'],
      ['개수', '원칙 4 · 지침 14 · 검사항목 33', '원칙 4 · 지침 13'],
      [
        '항목을 고른 기준',
        '개요: "국제표준 중 반드시 준수하여야 하는 필수항목을 위주로". 해설: WCAG 2.1 "성공기준의 중요도 A항목을 중심으로 국내 여건을 고려"',
        '—',
      ],
      [
        '적합성 요구',
        '이번 확인에서 전체 페이지 · 완전한 과정 같은 적합성 요구 절은 찾지 못함',
        '5.2절의 다섯 요구',
      ],
    ],
    calloutTitle: '번호가 비슷해도 같은 항목이 아닙니다',
    callout: (
      <>
        KWCAG 5.4.3과 WCAG 1.4.3처럼 주제가 같아 보여도 번호 체계가 다르고, 조건과 예외도 다를 수
        있습니다. 그래서 &quot;KWCAG ○○ = WCAG ○○&quot;처럼 한 줄로 짝짓지 않고, 항목마다 원문을
        나란히 놓고 비교합니다.
      </>
    ),
  },
  en: {
    figure: {
      alt: 'Two documents stand side by side with different numbers and sizes of item groups. Only a few items connect by dotted lines, and one highlighted item splits into two items on the other side. Many items have no connection. A millimeter ruler sits under the left document and a pixel grid under the right.',
      caption:
        'KWCAG and WCAG are related, but neither a translation nor an item-by-item mapping, and they can measure in different units. A simplified teaching picture.',
    },
    intro: (
      <>
        The two documents start from the same four principles but differ in structure and base
        edition.
      </>
    ),
    caption: 'Structure of KWCAG 2.2 and WCAG 2.2',
    head: ['Aspect', 'KWCAG 2.2', 'WCAG 2.2'],
    rows: [
      ['Base edition', 'WCAG 2.1 (2018)', '—'],
      [
        'Structure',
        'Principle → guideline → checklist item (3 tiers)',
        'Principle → guideline → success criterion, each with A, AA, or AAA',
      ],
      ['Counts', '4 principles, 14 guidelines, 33 checklist items', '4 principles, 13 guidelines'],
      [
        'How items were chosen',
        'Overview: written "centered on the mandatory items of the international standard" (필수항목). Explanatory notes: "centered on the importance-A items of the WCAG 2.1 success criteria" (중요도 A항목), considering domestic conditions',
        '—',
      ],
      [
        'Conformance requirements',
        'No section on conformance requirements such as full pages or complete processes was found in this check',
        'The five requirements in 5.2',
      ],
    ],
    calloutTitle: 'Similar numbers are not the same item',
    callout: (
      <>
        Even when the topic looks the same, as with KWCAG 5.4.3 and WCAG 1.4.3, the numbering
        systems differ, and conditions and exceptions can differ too. So do not pair them in one
        line like &quot;KWCAG X = WCAG Y&quot;; compare the original texts side by side, item by
        item.
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
      <p>{c.intro}</p>
      <ThemedFigure light={twoStandardsLight} dark={twoStandardsDark} {...c.figure} />
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <Callout variant="pitfall" title={c.calloutTitle}>
        <p>{c.callout}</p>
      </Callout>
    </section>
  );
};

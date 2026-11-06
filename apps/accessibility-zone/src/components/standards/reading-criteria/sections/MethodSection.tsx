import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { type SourceId, SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const steps: { source: SourceId; ko: [string, string]; en: [string, string] }[] = [
  {
    source: 'normative',
    ko: ['1. 원문', '성공 기준 문장을 그대로 읽습니다. 번역이나 요약이 아니라 원문이 근거입니다'],
    en: [
      '1. Original text',
      'Read the criterion sentence as written. The original, not a translation or summary, is the basis',
    ],
  },
  {
    source: 'normative',
    ko: ['2. 정의', '밑줄 친 용어는 용어집에 정의가 있습니다. 일상어 뜻으로 읽지 않습니다'],
    en: [
      '2. Definitions',
      'Linked terms are defined in the glossary. Do not read them with their everyday meaning',
    ],
  },
  {
    source: 'normative',
    ko: [
      '3. 적용 대상',
      '이 기준이 무엇에 적용되는지 정합니다. 대상이 아니면 "해당 없음"이고, 그 근거를 적습니다',
    ],
    en: [
      '3. Scope',
      'Decide what the criterion applies to. If out of scope, it is "not applicable," with the reason noted',
    ],
  },
  {
    source: 'normative',
    ko: [
      '4. 조건 · 예외',
      '"when", "except" 뒤의 목록을 하나씩 대조합니다. 예외에 해당하면 그 예외의 이름을 적습니다',
    ],
    en: [
      '4. Conditions and exceptions',
      'Check each item after "when" or "except." If an exception applies, name it',
    ],
  },
  {
    source: 'observed',
    ko: [
      '5. 확인 증거',
      '무엇을 어떤 환경에서 보고 판단했는지 적습니다. 보지 못한 것은 미확인으로 남깁니다',
    ],
    en: [
      '5. Evidence',
      'Note what you looked at and in which environment. Leave what you did not see as unconfirmed',
    ],
  },
];

const content = {
  ko: {
    intro: (
      <>
        성공 기준 하나를 판정하려면 다섯 단계를 거칩니다. 1~4단계는 규범 원문에서, 5단계는 실제
        관찰에서 나옵니다. Understanding 문서는 각 단계를 이해하는 데 도움을 주는 보충 설명입니다.
      </>
    ),
    caption: '성공 기준을 읽는 다섯 단계와 근거의 출처',
    head: ['단계', '하는 일', '근거'],
  },
  en: {
    intro: (
      <>
        Judging one success criterion takes five steps. Steps 1 to 4 come from the normative text
        and step 5 from real observation. The Understanding documents are informative guidance that
        helps with each step.
      </>
    ),
    caption: 'Five steps to read a success criterion, and where each basis comes from',
    head: ['Step', 'What you do', 'Basis'],
  },
};

export const MethodSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.method.id}>
      <DocH2 {...toc.method} />
      <p>{c.intro}</p>
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={steps.map((step) => [
          step[locale][0],
          step[locale][1],
          <SourceTag key="source" locale={locale} id={step.source} />,
        ])}
      />
    </section>
  );
};

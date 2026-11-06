import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { type SourceId, SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const docs: { kind: SourceId; name: string; ko: [string, string]; en: [string, string] }[] = [
  {
    kind: 'normative',
    name: 'WCAG 2.2',
    ko: ['W3C Recommendation, 2024-12-12', '성공 기준 · 정의 · 적합성 요구. 판정의 근거'],
    en: [
      'W3C Recommendation, 2024-12-12',
      'Success criteria, definitions, conformance requirements; the basis of judgments',
    ],
  },
  {
    kind: 'informative',
    name: 'Understanding WCAG 2.2',
    ko: ['보충 설명 — "적합에 필요하지 않음"', '기준의 의도 · 예 · 용어 해설. 원문을 해석할 때'],
    en: [
      'Informative — "not required to meet WCAG"',
      'Intent, examples, terms of each criterion; for interpreting the text',
    ],
  },
  {
    kind: 'informative',
    name: 'Techniques for WCAG 2.2',
    ko: ['보충 설명 — 기법은 필수가 아님', '충분 기법 · 권장 기법 · 실패 사례. 구현과 검토 방법'],
    en: [
      'Informative — techniques are not required',
      'Sufficient and advisory techniques, failures; ways to implement and review',
    ],
  },
  {
    kind: 'informative',
    name: 'ARIA APG',
    ko: [
      '보충 설명 — 규범 요구가 없고 적합성 모델이 없음',
      '위젯 패턴과 키보드 상호작용 예. 구현할 때',
    ],
    en: [
      'Informative — no normative requirements, no conformance model',
      'Widget patterns and keyboard interaction examples; for implementing',
    ],
  },
  {
    kind: 'normative',
    name: 'ACT Rules Format 1.1',
    ko: [
      'W3C Recommendation, 2026-02-05',
      '검사 규칙을 쓰는 형식. 규칙 결과가 요구 충족과 어떻게 이어지는지 정함',
    ],
    en: [
      'W3C Recommendation, 2026-02-05',
      'The format for writing test rules; defines how outcomes relate to requirements',
    ],
  },
  {
    kind: 'informative',
    name: 'ACT Rules',
    ko: [
      '보충 설명 — 승인(approved) 또는 제안(proposed)',
      '개별 검사 규칙. 규칙마다 적용 범위와 대응 기준이 다름',
    ],
    en: [
      'Informative — approved or proposed',
      'Individual test rules; each has its own applicability and mapped criteria',
    ],
  },
];

const content = {
  ko: {
    intro: (
      <>
        <PageLink locale="ko" id="concept-boundaries" hash="normative-vs-informative" />
        에서 규범 문서와 참고 문서를 나눴습니다. 여기서는 WCAG 주변 문서마다 상태와 쓰임을 원문
        표현으로 확인합니다.
      </>
    ),
    caption: 'WCAG 주변 문서의 상태와 쓰임 (2026년 11월 6일 확인)',
    head: ['문서', '종류', '상태', '쓰는 때'],
    note: (
      <>
        ACT Rules Format은 Recommendation이지만, 그것은 &quot;규칙을 쓰는 형식&quot;에 대한
        것입니다. 그 형식으로 쓴 개별 규칙은 WAI가 보충 자료로 내며 WCAG 적합성을 판정하는 데 필수가
        아닙니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        <PageLink locale="en" id="concept-boundaries" hash="normative-vs-informative" /> separated
        normative and informative documents. Here, check the status and use of each document around
        WCAG in the documents&apos; own words.
      </>
    ),
    caption: 'Status and use of documents around WCAG (checked November 6, 2026)',
    head: ['Document', 'Kind', 'Status', 'When to use'],
    note: (
      <>
        The ACT Rules Format is a Recommendation, but it is about &quot;the format for writing
        rules.&quot; Individual rules written in that format are published by WAI as informative
        material and are not required for determining WCAG conformance.
      </>
    ),
  },
};

export const RolesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.roles.id}>
      <DocH2 {...toc.roles} />
      <p>{c.intro}</p>
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={docs.map((doc) => [
          doc.name,
          <SourceTag key="kind" locale={locale} id={doc.kind} />,
          doc[locale][0],
          doc[locale][1],
        ])}
      />
      <p>{c.note}</p>
    </section>
  );
};

import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';

import { ReferencesSection, same, SummarySection } from '@/components/shared/DocPage';
import { NextPage } from '@/components/shared/PageLink';
import { wcag22 } from '@/components/shared/wcag';

import { ActSection } from './sections/ActSection';
import { ApgSection } from './sections/ApgSection';
import { CitingSection } from './sections/CitingSection';
import { PageHeader } from './sections/PageHeader';
import { RolesSection } from './sections/RolesSection';
import { TechniquesSection } from './sections/TechniquesSection';
import { getToc } from './toc';

const points = {
  ko: [
    '판정의 근거는 WCAG 2.2의 성공 기준 · 정의 · 적합성 요구입니다. Understanding · Techniques · APG는 해석과 구현을 돕는 보충 자료입니다.',
    '충분 기법은 기준을 충족하는 방법의 하나일 뿐이고, 기법 시험은 적합성 시험이 아닙니다. 실패 사례에 해당하면 미충족입니다.',
    'APG는 규범 요구가 없고 적합성 모델이 없습니다. 패턴을 따른 뒤에도 실제 환경에서 확인합니다.',
    'ACT Rules Format 1.1은 규칙을 쓰는 형식의 Recommendation이고, 개별 ACT 규칙은 보충 자료입니다. 규칙을 통과해도 대응 기준 전체의 통과를 단정하지 않습니다.',
  ],
  en: [
    'The basis of judgment is the success criteria, definitions, and conformance requirements of WCAG 2.2. Understanding, Techniques, and the APG are informative material for interpretation and implementation.',
    'A sufficient technique is only one way to meet a criterion, and a technique test is not a conformance test. If a Failure applies, the criterion is not met.',
    'The APG has no normative requirements and no conformance model. Check in real environments even after following a pattern.',
    'The ACT Rules Format 1.1 is a Recommendation for the rule format, and individual ACT rules are informative. A passed rule does not settle the whole mapped criterion.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('conformance'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 5. Conformance'),
    note: {
      ko: '판정 근거가 되는 규범 원문 (2024-12-12)',
      en: 'The normative basis of judgments (2024-12-12)',
    },
  },
  {
    href: 'https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques',
    source: same('W3C WAI'),
    title: same('Understanding Techniques for WCAG Success Criteria'),
    note: {
      ko: '기법은 필수가 아니고 기법 시험은 적합성 시험이 아니라는 설명 (2026-10-04 갱신)',
      en: 'Techniques are not required and technique tests are not conformance tests (updated 2026-10-04)',
    },
  },
  {
    href: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    source: same('W3C WAI'),
    title: same('Techniques for WCAG 2.2'),
    note: {
      ko: '충분 기법 · 권장 기법 · 실패 사례 (2026-05-11 갱신)',
      en: 'Sufficient and advisory techniques, failures (updated 2026-05-11)',
    },
  },
  {
    href: 'https://www.w3.org/WAI/ARIA/apg/about/introduction/',
    source: same('W3C WAI'),
    title: same('ARIA APG — Introduction'),
    note: {
      ko: 'APG가 규범 요구를 정하지 않는다는 설명',
      en: 'The APG does not specify normative requirements',
    },
  },
  {
    href: 'https://www.w3.org/TR/2026/REC-act-rules-format-1.1-20260205/',
    source: same('W3C'),
    title: same('ACT Rules Format 1.1'),
    note: {
      ko: '규칙 결과와 요구 충족의 대응 (W3C Recommendation, 2026-02-05)',
      en: 'How rule outcomes map to requirements (W3C Recommendation, 2026-02-05)',
    },
  },
  {
    href: 'https://www.w3.org/WAI/standards-guidelines/act/rules/23a2a8/',
    source: same('W3C WAI'),
    title: same('ACT Rule — Image has non-empty accessible name (23a2a8)'),
    note: { ko: '승인된 규칙, 2023-08-31 판', en: 'Approved rule, 2023-08-31 version' },
  },
];

export const SupportingDocumentsPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <RolesSection locale={locale} />
      <TechniquesSection locale={locale} />
      <ApgSection locale={locale} />
      <ActSection locale={locale} />
      <CitingSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="kwcag-and-wcag" />
    </DocLayout>
  );
};

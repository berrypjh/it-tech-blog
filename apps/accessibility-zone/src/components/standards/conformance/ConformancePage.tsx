import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';
import { wcag22 } from '@/components/shared/wcag';

import { AlternateSection } from './sections/AlternateSection';
import { ClaimsSection } from './sections/ClaimsSection';
import { ExclusionSection } from './sections/ExclusionSection';
import { PageHeader } from './sections/PageHeader';
import { ProcessSection } from './sections/ProcessSection';
import { RequirementsSection } from './sections/RequirementsSection';
import { getToc } from './toc';

const points = {
  ko: [
    '컴포넌트 · 표본 검사는 검사한 범위의 결과만 말합니다. 적합성은 전체 페이지와 완전한 과정 단위로 주장합니다.',
    '적합성에는 적합 수준 · 전체 페이지 · 완전한 과정 · 접근성이 지원되는 방식만 의존 · 비간섭 다섯 요구가 모두 필요합니다.',
    '과정의 한 페이지라도 부적합하면 그 과정의 어느 페이지도 그 수준의 적합성을 주장할 수 없습니다.',
    '적합 대체 버전은 같은 언어 · 같은 정보와 기능 · 같은 최신성과 접근 가능한 경로를 모두 갖춰야 합니다.',
    '일부를 범위에서 빼면 적합성은 성립하지 않습니다. 부분 적합성 선언은 적합성 주장이 아닙니다.',
  ],
  en: [
    'Component and sample tests only speak for what was tested. Conformance is claimed for full pages and complete processes.',
    'Conformance needs all five requirements: level, full pages, complete processes, only accessibility-supported ways, and non-interference.',
    'If any page in a process does not conform, no page in it can claim conformance at that level.',
    'A conforming alternate version needs the same language, the same information and functionality, the same currency, and an accessible path.',
    'Excluding part from scope means no conformance. A statement of partial conformance is not a conformance claim.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('conformance-reqs'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 5.2 Conformance Requirements'),
    note: {
      ko: '다섯 요구의 규범 원문 (W3C Recommendation, 2024-12-12)',
      en: 'Normative text of the five requirements (W3C Recommendation, 2024-12-12)',
    },
  },
  {
    href: wcag22('dfn-accessibility-supported'),
    source: same('W3C'),
    title: same('WCAG 2.2 — Definition: accessibility supported'),
    note: { ko: '접근성 지원의 두 조건', en: 'The two conditions of accessibility support' },
  },
  {
    href: wcag22('dfn-conforming-alternate-versions'),
    source: same('W3C'),
    title: same('WCAG 2.2 — Definition: conforming alternate version'),
    note: { ko: '대체 버전이 성립하는 조건', en: 'Conditions for an alternate version' },
  },
  {
    href: wcag22('conformance-partial'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 5.4 Statement of Partial Conformance'),
    note: {
      ko: '제3자 콘텐츠에 대한 부분 적합성 선언',
      en: 'Partial conformance for third-party content',
    },
  },
  {
    href: 'https://www.w3.org/WAI/WCAG22/Understanding/conformance',
    source: same('W3C WAI'),
    title: same('Understanding Conformance'),
    note: { ko: '적합성 요구의 보충 설명', en: 'Informative guidance on conformance requirements' },
  },
];

export const ConformancePage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <ClaimsSection locale={locale} />
      <RequirementsSection locale={locale} />
      <ProcessSection locale={locale} />
      <AlternateSection locale={locale} />
      <ExclusionSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="supporting-documents" />
    </DocLayout>
  );
};

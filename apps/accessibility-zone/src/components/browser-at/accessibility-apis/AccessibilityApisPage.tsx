import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';

import { FlowSection } from './sections/FlowSection';
import { LimitsSection } from './sections/LimitsSection';
import { PageHeader } from './sections/PageHeader';
import { SpecsSection } from './sections/SpecsSection';
import { TraceSection } from './sections/TraceSection';
import { getToc } from './toc';

const points = {
  ko: [
    'HTML 의미 → 브라우저 정보 → 플랫폼 API → 보조기술 해석의 네 단계는 책임지는 쪽이 다릅니다.',
    'HTML-AAM은 HTML 요소 · 속성의 매핑을, Core-AAM은 WAI-ARIA 역할 · 상태 · 속성의 매핑을 다루고, 주된 독자는 브라우저 구현자입니다.',
    'HTML-AAM 1.0은 Working Draft(2026-10-26), Core-AAM 1.2는 Candidate Recommendation Draft(2026-11-05)입니다. 인용할 때 판본과 날짜를 함께 적습니다.',
    '명세의 매핑은 모든 브라우저 · 운영체제의 결과를 보장하지 않습니다. 플랫폼별 결과는 직접 확인한 뒤에만 기록합니다.',
  ],
  en: [
    'The four steps HTML meaning → browser information → platform API → AT interpretation are each owned by someone different.',
    'HTML-AAM covers mappings for HTML elements and attributes, Core-AAM covers WAI-ARIA roles, states, and properties, and both are mainly for browser implementers.',
    'HTML-AAM 1.0 is a Working Draft (2026-10-26) and Core-AAM 1.2 a Candidate Recommendation Draft (2026-11-05). Cite them with edition and date.',
    'Spec mappings do not guarantee results in every browser and OS. Record per-platform results only after checking them yourself.',
  ],
};

const references: DocReference[] = [
  {
    href: 'https://www.w3.org/TR/html-aam-1.0/',
    source: same('W3C'),
    title: same('HTML Accessibility API Mappings 1.0'),
    note: {
      ko: 'HTML 요소 · 속성의 플랫폼 API 매핑 (Working Draft, 2026-10-26)',
      en: 'Platform API mappings for HTML elements and attributes (Working Draft, 2026-10-26)',
    },
  },
  {
    href: 'https://www.w3.org/TR/core-aam-1.2/',
    source: same('W3C'),
    title: same('Core Accessibility API Mappings 1.2'),
    note: {
      ko: 'WAI-ARIA의 플랫폼 API 매핑과 다루는 API 목록 (Candidate Recommendation Draft, 2026-11-05)',
      en: 'Platform API mappings for WAI-ARIA and the APIs covered (Candidate Recommendation Draft, 2026-11-05)',
    },
  },
  {
    href: 'https://www.w3.org/TR/wai-aria-1.2/',
    source: same('W3C'),
    title: same('Accessible Rich Internet Applications (WAI-ARIA) 1.2'),
    note: {
      ko: '역할 · 상태 · 속성의 정의 (W3C Recommendation, 2023-06-06)',
      en: 'Definitions of roles, states, and properties (W3C Recommendation, 2023-06-06)',
    },
  },
  {
    href: 'https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/',
    source: same('Firefox Source Docs'),
    title: same('Accessibility Inspector'),
    note: {
      ko: '검사기는 플랫폼 접근성 계층이 아니라 Gecko의 접근성 트리를 보여 준다는 설명',
      en: 'Notes that the inspector shows Gecko’s accessibility tree, not the platform accessibility layer',
    },
  },
];

export const AccessibilityApisPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <FlowSection locale={locale} />
      <SpecsSection locale={locale} />
      <TraceSection locale={locale} />
      <LimitsSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="focus-and-cursor" />
    </DocLayout>
  );
};

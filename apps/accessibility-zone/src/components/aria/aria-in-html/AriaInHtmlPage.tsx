import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { aria12, htmlAria } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';

import { AllowedSection } from './sections/AllowedSection';
import { CasesSection } from './sections/CasesSection';
import { PageHeader } from './sections/PageHeader';
import { PresentationSection } from './sections/PresentationSection';
import { RowsSection } from './sections/RowsSection';
import { getToc } from './toc';

const points = {
  ko: [
    'ARIA in HTML은 HTML 요소마다 암시적 의미와 허용되는 role · aria-* 속성을 정합니다. 허용 목록에 없는 role은 적합하지 않습니다.',
    '암시적 의미와 같은 선언은 중복이라 지우고, 허용되지 않거나 실제와 충돌하는 선언은 맞는 요소로 바꾸고, 요소에 없는 상태만 보완합니다.',
    '허용된 선언은 문서 적합성만 말합니다. 노출은 브라우저 도구로, 키 동작은 키보드로, 지원은 실제 보조기술로 확인합니다.',
    'presentation · none은 포커스를 받는 요소나 전역 aria-* 속성이 있는 요소에서는 무시됩니다.',
  ],
  en: [
    'ARIA in HTML defines, for each HTML element, its implicit meaning and the roles and aria-* attributes allowed. A role not in the allowed list is non-conforming.',
    'Remove declarations that equal the implicit meaning, replace ones that are not allowed or conflict with reality by the right element, and add only states the element lacks.',
    'An allowed declaration speaks only to document conformance. Check exposure in browser tools, key behavior with a keyboard, and support with real assistive technology.',
    'presentation and none are ignored on focusable elements and on elements with global aria-* attributes.',
  ],
};

const references: DocReference[] = [
  {
    href: htmlAria('docconformance'),
    source: same('W3C'),
    title: same('ARIA in HTML — 4. Document conformance requirements'),
    note: {
      ko: '요소별 암시적 의미와 허용 role · 속성 표 (W3C Recommendation, 2026-08-11)',
      en: 'Per-element implicit meaning and allowed roles and attributes (W3C Recommendation, 2026-08-11)',
    },
  },
  {
    href: htmlAria('author-guidance-to-avoid-incorrect-use-of-aria'),
    source: same('W3C'),
    title: same('ARIA in HTML — 3. Author guidance to avoid incorrect use of ARIA'),
    note: {
      ko: '덮어쓰기 · 중복의 예 (비규범 절)',
      en: 'Examples of overrides and redundancy (non-normative section)',
    },
  },
  {
    href: aria12('conflict_resolution_presentation_none'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — Presentational Roles Conflict Resolution'),
    note: {
      ko: 'presentation · none이 무시되는 조건 (W3C Recommendation, 2023-06-06)',
      en: 'When presentation and none are ignored (W3C Recommendation, 2023-06-06)',
    },
  },
  {
    href: 'https://www.w3.org/TR/html-aam-1.0/',
    source: same('W3C'),
    title: same('HTML Accessibility API Mappings 1.0'),
    note: {
      ko: '요소의 암시적 의미를 정하는 매핑 (Working Draft)',
      en: 'The mappings that define implicit meaning (Working Draft)',
    },
  },
];

export const AriaInHtmlPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <RowsSection locale={locale} />
      <CasesSection locale={locale} />
      <AllowedSection locale={locale} />
      <PresentationSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="hiding-and-inert" />
    </DocLayout>
  );
};

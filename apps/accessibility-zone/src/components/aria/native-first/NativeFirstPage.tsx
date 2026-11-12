import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { aria12, htmlAria } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';

import { NativeSection } from './sections/NativeSection';
import { PageHeader } from './sections/PageHeader';
import { RemainingSection } from './sections/RemainingSection';
import { RoleOnlySection } from './sections/RoleOnlySection';
import { getToc } from './toc';

const points = {
  ko: [
    '링크 · 버튼 · 체크박스는 노출되는 역할 · 포커스 · 키 동작 · 상태를 함께 줍니다.',
    'role 선언은 노출되는 역할만 바꿉니다. 포커스와 Enter · Space 실행은 생기지 않으므로 따로 확인합니다.',
    '같은 의미와 동작을 주는 HTML 요소를 먼저 고르고, 그 요소로 전해지지 않는 상태나 관계만 ARIA로 더합니다.',
    '맞는 요소가 없어 직접 만들면 권장 패턴을 출발점으로 삼고, 실제 환경에서 확인합니다.',
  ],
  en: [
    'Links, buttons, and checkboxes give an exposed role, focus, key behavior, and state together.',
    'A role declaration changes only the exposed role. Focus and Enter or Space activation do not appear, so check them separately.',
    'Choose the HTML element that gives the same meaning and behavior first, and add ARIA only for the states or relations that element does not convey.',
    'When no element fits and you build it yourself, start from a recommended pattern and check it in real environments.',
  ],
};

const references: DocReference[] = [
  {
    href: htmlAria('author-requirements-for-use-of-aria-in-html'),
    source: same('W3C'),
    title: same('ARIA in HTML — 1. Author requirements for use of ARIA in HTML'),
    note: {
      ko: 'ARIA로 바꿀 수 있는 것과 뺄 경우 (W3C Recommendation, 2026-08-11)',
      en: 'What ARIA may change and the excluded cases (W3C Recommendation, 2026-08-11)',
    },
  },
  {
    href: aria12('button'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — button role'),
    note: {
      ko: 'button 역할의 정의와 지원 상태 (W3C Recommendation, 2023-06-06)',
      en: 'The button role and its supported states (W3C Recommendation, 2023-06-06)',
    },
  },
  {
    href: 'https://www.w3.org/TR/html-aam-1.0/',
    source: same('W3C'),
    title: same('HTML Accessibility API Mappings 1.0'),
    note: {
      ko: 'HTML 요소의 암시적 역할 · 상태 매핑 (Working Draft)',
      en: 'Implicit role and state mappings for HTML elements (Working Draft)',
    },
  },
  {
    href: 'https://www.w3.org/WAI/ARIA/apg/',
    source: same('W3C WAI'),
    title: same('ARIA Authoring Practices Guide (APG)'),
    note: {
      ko: '직접 만드는 위젯의 키 동작 권장 패턴 (보충 자료)',
      en: 'Recommended key behavior for widgets you build (supporting material)',
    },
  },
];

export const NativeFirstPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <NativeSection locale={locale} />
      <RoleOnlySection locale={locale} />
      <RemainingSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="roles-and-relations" />
    </DocLayout>
  );
};

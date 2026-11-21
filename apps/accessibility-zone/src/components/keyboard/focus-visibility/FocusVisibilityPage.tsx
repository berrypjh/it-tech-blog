import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';
import { understanding, wcag22 } from '@/components/shared/wcag';

import { AppearanceSection } from './sections/AppearanceSection';
import { CriteriaSection } from './sections/CriteriaSection';
import { ObscuredSection } from './sections/ObscuredSection';
import { PageHeader } from './sections/PageHeader';
import { getToc } from './toc';

const points = {
  ko: [
    '2.4.7(AA)은 키보드 포커스 표시가 보이는 동작 방식이 있는지를 봅니다. 얼마나 잘 보이는지의 크기 기준은 없습니다.',
    '2.4.11(AA)은 포커스 받은 컴포넌트가 작성자 콘텐츠에 완전히 가려지지 않기를, 2.4.12(AAA)는 어느 부분도 가려지지 않기를 요구합니다.',
    '2.4.13(AAA)은 표시의 면적과 포커스 전후 같은 픽셀의 3:1 대비를 봅니다. 1.4.11(AA)은 인접 색과의 3:1 대비를 봅니다.',
    '실습의 계산값은 판단 재료입니다. 면적과 실제 화면은 눈으로 함께 확인합니다.',
  ],
  en: [
    '2.4.7 (AA) asks whether a mode of operation shows the keyboard focus indicator. It sets no size for how visible it is.',
    '2.4.11 (AA) requires that the focused component is not entirely hidden by author content; 2.4.12 (AAA) requires that no part of it is hidden.',
    '2.4.13 (AAA) looks at the indicator’s area and a 3:1 contrast between the same pixels before and after focus. 1.4.11 (AA) looks at 3:1 against adjacent colors.',
    'Computed values in the exercises are inputs to a judgment. Check area and the real screen by eye as well.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('focus-visible'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.4.7 Focus Visible'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: wcag22('focus-not-obscured-minimum'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.4.11 Focus Not Obscured (Minimum)'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: wcag22('focus-not-obscured-enhanced'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.4.12 Focus Not Obscured (Enhanced)'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: wcag22('focus-appearance'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.4.13 Focus Appearance'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: understanding('focus-appearance'),
    source: same('W3C WAI'),
    title: same('Understanding SC 2.4.13: Focus Appearance'),
    note: {
      ko: '2.4.7 · 1.4.11과의 관계 (보충 자료)',
      en: 'How it relates to 2.4.7 and 1.4.11 (supporting material)',
    },
  },
  {
    href: understanding('focus-not-obscured-minimum'),
    source: same('W3C WAI'),
    title: same('Understanding SC 2.4.11: Focus Not Obscured (Minimum)'),
    note: {
      ko: 'sticky 영역과 scroll-padding 예 (보충 자료)',
      en: 'Sticky areas and the scroll-padding example (supporting material)',
    },
  },
  {
    href: understanding('non-text-contrast'),
    source: same('W3C WAI'),
    title: same('Understanding SC 1.4.11: Non-text Contrast'),
    note: { ko: '보충 자료', en: 'Supporting material' },
  },
];

export const FocusVisibilityPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <CriteriaSection locale={locale} />
      <AppearanceSection locale={locale} />
      <ObscuredSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="focus-after-changes" />
    </DocLayout>
  );
};

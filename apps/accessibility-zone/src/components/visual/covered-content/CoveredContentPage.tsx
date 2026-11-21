import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';
import { understanding, wcag22 } from '@/components/shared/wcag';

import { FixesSection } from './sections/FixesSection';
import { KeyboardSection } from './sections/KeyboardSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { getToc } from './toc';

const points = {
  ko: [
    '고정 헤더 · 하단 액션 · 내부 스크롤 영역은 현재 입력과 포커스를 가릴 수 있습니다.',
    'scroll-padding은 스크롤 영역에, scroll-margin은 대상 요소에 멈춤 여백을 줍니다. 고정 범위를 줄이는 것도 방법입니다.',
    '포커스를 다른 곳으로 옮기거나 무조건 스크롤하는 방식으로 가림을 감추지 않습니다.',
    '가상 키보드는 실제 기기에서 입력란과 제출 버튼이 보이고 조작되는지 확인합니다. 그림 모형은 교육용입니다.',
  ],
  en: [
    'Fixed headers, bottom actions, and inner scroll areas can hide the current input and focus.',
    'scroll-padding sets a stop margin on the scroll area, and scroll-margin on the target. Reducing what stays fixed is another option.',
    'Do not hide the problem by moving focus elsewhere or scrolling unconditionally.',
    'Check on a real device that inputs and the submit button are visible and operable with a virtual keyboard. The drawn model is for teaching only.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('focus-not-obscured-minimum'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.4.11 Focus Not Obscured (Minimum)'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: understanding('focus-not-obscured-minimum'),
    source: same('W3C WAI'),
    title: same('Understanding SC 2.4.11: Focus Not Obscured (Minimum)'),
    note: { ko: 'scroll-padding 예 (보충 자료)', en: 'The scroll-padding example (supporting)' },
  },
  {
    href: 'https://www.w3.org/TR/css-scroll-snap-1/#scroll-padding',
    source: same('W3C'),
    title: same('CSS Scroll Snap — scroll-padding'),
    note: { ko: '스크롤 영역의 여백', en: 'Margins on the scroll area' },
  },
  {
    href: 'https://www.w3.org/TR/css-viewport-1/#interactive-widget-section',
    source: same('W3C'),
    title: same('CSS Viewport Module — interactive-widget'),
    note: { ko: '가상 키보드와 viewport', en: 'Virtual keyboards and the viewport' },
  },
];

export const CoveredContentPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <FixesSection locale={locale} />
      <PracticeSection locale={locale} />
      <KeyboardSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="hover-focus-content" />
    </DocLayout>
  );
};

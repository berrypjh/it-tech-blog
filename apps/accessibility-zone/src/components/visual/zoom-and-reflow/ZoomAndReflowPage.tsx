import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';
import { understanding, wcag22 } from '@/components/shared/wcag';

import { CriteriaSection } from './sections/CriteriaSection';
import { MethodsSection } from './sections/MethodsSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { getToc } from './toc';

const points = {
  ko: [
    '1.4.4는 자막과 텍스트 이미지를 뺀 텍스트를 보조기술 없이 200%까지 키워도 내용과 기능을 잃지 않기를 요구합니다.',
    '1.4.10은 세로 스크롤 콘텐츠를 320 CSS px 폭에서 두 방향 스크롤 없이 쓸 수 있기를 요구합니다. 1280 CSS px 폭의 400% 확대와 같습니다.',
    '이해에 필요한 지도, 데이터 표(개별 칸 제외), 조작 중 도구 모음을 계속 보여야 하는 화면처럼 2차원 배치가 필요한 부분은 예외이고, 예외는 그 부분까지만입니다.',
    '패널 축소 · viewport 변경 · 실제 브라우저 확대는 서로 다른 검사입니다. CSS scale은 확대의 증거가 아닙니다.',
  ],
  en: [
    '1.4.4 requires that text, except captions and images of text, can be resized to 200 percent without assistive technology and without losing content or functionality.',
    '1.4.10 requires vertically scrolling content to work at 320 CSS pixels wide without two-dimensional scrolling. That equals a 1280 CSS pixel width at 400% zoom.',
    'Parts that need two-dimensional layout, such as maps needed for understanding, data tables (not individual cells), and interfaces that must keep toolbars in view while manipulating content, are excepted, and only those parts.',
    'Panel narrowing, viewport changes, and real browser zoom are different checks. CSS scale is not evidence of zoom.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('resize-text'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 1.4.4 Resize Text'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: wcag22('reflow'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 1.4.10 Reflow'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: understanding('resize-text'),
    source: same('W3C WAI'),
    title: same('Understanding SC 1.4.4: Resize Text'),
    note: { ko: '보충 자료', en: 'Supporting material' },
  },
  {
    href: understanding('reflow'),
    source: same('W3C WAI'),
    title: same('Understanding SC 1.4.10: Reflow'),
    note: {
      ko: '데이터 표와 400% 설명 (보충 자료)',
      en: 'Data tables and 400% (supporting material)',
    },
  },
];

export const ZoomAndReflowPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <CriteriaSection locale={locale} />
      <MethodsSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="text-spacing" />
    </DocLayout>
  );
};

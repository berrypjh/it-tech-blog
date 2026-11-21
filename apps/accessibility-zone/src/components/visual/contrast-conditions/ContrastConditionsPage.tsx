import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';
import { understanding, wcag22 } from '@/components/shared/wcag';

import { CalculatorSection } from './sections/CalculatorSection';
import { LimitsSection } from './sections/LimitsSection';
import { PageHeader } from './sections/PageHeader';
import { TargetsSection } from './sections/TargetsSection';
import { getToc } from './toc';

const points = {
  ko: [
    '1.4.3은 텍스트와 텍스트 이미지에 4.5:1, 큰 텍스트에 3:1을 요구합니다. 큰 텍스트는 18pt 이상이거나 14pt 이상의 굵은 글자입니다.',
    '1.4.11은 컴포넌트와 상태를 식별하는 데 필요한 시각 정보, 내용 이해에 필요한 그래픽 부분에 인접 색과의 3:1을 요구합니다.',
    '모든 아이콘과 테두리가 대상은 아닙니다. 식별에 필요한 부분과 인접 색을 사례마다 찾습니다.',
    '계산은 불투명한 #RRGGBB 쌍에만 쓰고 판정은 반올림 전 값으로 합니다. 투명도 · 그라디언트 · 이미지 위 글자는 실제 화면에서 확인합니다.',
  ],
  en: [
    '1.4.3 requires 4.5:1 for text and images of text, and 3:1 for large text: at least 18 point, or 14 point bold.',
    '1.4.11 requires 3:1 against adjacent colors for visual information needed to identify components and states, and for graphic parts needed to understand the content.',
    'Not every icon and border is in scope. Find the part needed for identification and its adjacent colors, case by case.',
    'Use the calculation only for opaque #RRGGBB pairs and judge with the unrounded value. Check transparency, gradients, and text over images on the real screen.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('contrast-minimum'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 1.4.3 Contrast (Minimum)'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: wcag22('non-text-contrast'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 1.4.11 Non-text Contrast'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: wcag22('dfn-contrast-ratio'),
    source: same('W3C'),
    title: same('WCAG 2.2 — contrast ratio'),
    note: { ko: '대비 공식의 정의', en: 'Definition of the formula' },
  },
  {
    href: understanding('contrast-minimum'),
    source: same('W3C WAI'),
    title: same('Understanding SC 1.4.3: Contrast (Minimum)'),
    note: { ko: '보충 자료', en: 'Supporting material' },
  },
  {
    href: understanding('non-text-contrast'),
    source: same('W3C WAI'),
    title: same('Understanding SC 1.4.11: Non-text Contrast'),
    note: {
      ko: '경계 · 그라디언트 판단 (보충 자료)',
      en: 'Boundaries and gradients (supporting material)',
    },
  },
];

export const ContrastConditionsPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <TargetsSection locale={locale} />
      <CalculatorSection locale={locale} />
      <LimitsSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="sensory-information" />
    </DocLayout>
  );
};

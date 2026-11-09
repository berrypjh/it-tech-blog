import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { KWCAG_REGISTRY } from '@/components/shared/kwcag';
import { NextPage } from '@/components/shared/PageLink';
import { wcag22 } from '@/components/shared/wcag';

import { ContrastSection } from './sections/ContrastSection';
import { HowToSection } from './sections/HowToSection';
import { PageHeader } from './sections/PageHeader';
import { RegistrySection } from './sections/RegistrySection';
import { SizeSection } from './sections/SizeSection';
import { StructureSection } from './sections/StructureSection';
import { getToc } from './toc';

const points = {
  ko: [
    'KWCAG 2.2(KS X OT0003, 2022-12-28 개정)는 국립전파연구원 등록 페이지의 첨부 원문으로 확인합니다. 원문은 WCAG 2.1(2018)을 기초로 했다고 적습니다.',
    'KWCAG는 원칙 → 지침 → 검사항목, WCAG는 원칙 → 지침 → 성공 기준과 수준으로 짜여 있어 번호로 짝짓지 않습니다.',
    '명도 대비는 둘 다 4.5 대 1이 기본이지만, KWCAG에는 화면 확대가 가능한 콘텐츠를 3 대 1까지 낮추는 조건이 있습니다.',
    '컨트롤 크기는 KWCAG 6.1.3(충분한 크기를 요구하고 대각선 6.0mm를 바람직하다고 둠)과 WCAG 2.5.8(24 CSS 픽셀, 다섯 예외)이 숫자 · 단위 · 문장의 힘 · 예외가 모두 다릅니다.',
    '원문을 열지 못한 비교는 미확인으로 남기고, 제3자 대응표로 채우지 않습니다.',
  ],
  en: [
    'Check KWCAG 2.2 (KS X OT0003, revised 2022-12-28) in the original attached to the National Radio Research Agency registry page. The original says it is based on WCAG 2.1 (2018).',
    'KWCAG is structured as principle → guideline → checklist item, WCAG as principle → guideline → success criterion with levels, so do not pair them by number.',
    'For contrast both default to 4.5 to 1, but KWCAG has a condition lowering it to 3 to 1 for content that can be zoomed.',
    'For control size, KWCAG 6.1.3 (requires a sufficient size and calls a 6.0mm diagonal desirable) and WCAG 2.5.8 (24 CSS pixels, five exceptions) differ in number, unit, force, and exceptions.',
    'Leave comparisons whose original you could not open as unconfirmed, and do not fill them from third-party mapping tables.',
  ],
};

const references: DocReference[] = [
  {
    href: KWCAG_REGISTRY,
    source: { ko: '국립전파연구원', en: 'National Radio Research Agency' },
    title: {
      ko: '한국형 웹 콘텐츠 접근성 지침 2.2 (KS X OT0003)',
      en: 'Korean Web Content Accessibility Guidelines 2.2 (KS X OT0003)',
    },
    note: {
      ko: '표준 등록 정보와 첨부 원문 (2022-12-28 개정, 2026-11-06 확인)',
      en: 'Registry entry and attached original (revised 2022-12-28, checked 2026-11-06)',
    },
  },
  {
    href: wcag22('contrast-minimum'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 1.4.3 Contrast (Minimum)'),
    note: { ko: '비교 1의 WCAG 원문 (2024-12-12)', en: 'WCAG text for comparison 1 (2024-12-12)' },
  },
  {
    href: wcag22('target-size-minimum'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.5.8 Target Size (Minimum)'),
    note: { ko: '비교 2의 WCAG 원문 (2024-12-12)', en: 'WCAG text for comparison 2 (2024-12-12)' },
  },
];

export const KwcagAndWcagPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <RegistrySection locale={locale} />
      <StructureSection locale={locale} />
      <ContrastSection locale={locale} />
      <SizeSection locale={locale} />
      <HowToSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="requirements-and-obligations" />
    </DocLayout>
  );
};

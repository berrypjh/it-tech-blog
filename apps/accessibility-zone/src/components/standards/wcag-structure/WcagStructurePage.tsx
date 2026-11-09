import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';
import { wcag22 } from '@/components/shared/wcag';

import { LevelsSection } from './sections/LevelsSection';
import { PageHeader } from './sections/PageHeader';
import { TargetSection } from './sections/TargetSection';
import { TraceSection } from './sections/TraceSection';
import { getToc } from './toc';

const points = {
  ko: [
    'WCAG 2.2는 원칙 → 지침 → 성공 기준으로 짜여 있고, 검사하고 판정하는 단위는 성공 기준입니다.',
    'A · AA · AAA는 적합 수준의 묶음입니다. 오류의 심각도도, 평균 내는 점수도 아닙니다.',
    '목표가 AA면 A와 AA 기준을 모두 판정합니다. 하나라도 충족하지 못하면 그 수준의 적합성은 성립하지 않습니다.',
    '판정 대상이 아닌 수준의 기준도 진행 정도를 적고, 사용자 영향은 따로 봅니다.',
  ],
  en: [
    'WCAG 2.2 is structured as principle → guideline → success criterion, and the unit tested and judged is the success criterion.',
    'A, AA, and AAA are conformance-level bundles, not error severity or scores to average.',
    'With an AA target, judge all A and AA criteria. If even one is not satisfied, conformance at that level does not hold.',
    'Note progress on criteria outside the judged levels too, and look at user impact separately.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('conformance-reqs'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 5.2 Conformance Requirements'),
    note: {
      ko: '적합 수준의 규범 문장 (W3C Recommendation, 2024-12-12)',
      en: 'Normative text on conformance levels (W3C Recommendation, 2024-12-12)',
    },
  },
  {
    href: wcag22('target-size-minimum'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.5.8 Target Size (Minimum)'),
    note: { ko: '예로 따라간 성공 기준', en: 'The success criterion followed as the example' },
  },
  {
    href: 'https://www.w3.org/WAI/standards-guidelines/wcag/',
    source: same('W3C WAI'),
    title: same('WCAG 2 Overview'),
    note: {
      ko: '원칙 · 지침 · 성공 기준의 개요 (2026-09-17 갱신)',
      en: 'Overview of principles, guidelines, and success criteria (updated 2026-09-17)',
    },
  },
];

export const WcagStructurePage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <TraceSection locale={locale} />
      <LevelsSection locale={locale} />
      <TargetSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="reading-criteria" />
    </DocLayout>
  );
};

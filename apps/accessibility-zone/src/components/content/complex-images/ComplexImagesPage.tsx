import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';
import { wcag22 } from '@/components/shared/wcag';

import { ChartSection } from './sections/ChartSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { RouteSection } from './sections/RouteSection';
import { getToc } from './toc';

const points = {
  ko: [
    '복잡한 그림은 무엇인지 알리는 짧은 이름과, 내용을 담은 긴 설명으로 나눠 대신합니다.',
    '차트의 긴 설명은 요약 문장과 데이터 표로 나눌 수 있습니다. 같은 값을 이름에 되풀이하지 않습니다.',
    '정확한 값은 차트만으로 얻기 어렵습니다. 같은 과업을 요약과 표로도 마칠 수 있는지 확인합니다.',
    '지도는 과업이 경로라면 출발 · 회전 · 도착 조건과 예외를 글로 적습니다.',
  ],
  en: [
    'A complex image is replaced by a short name that says what it is and a long description that carries its content.',
    'A chart’s long description can be a summary and a data table. Do not repeat the values in the name.',
    'Exact values are hard to get from a chart alone. Check that the same task can be finished with the summary and table.',
    'When the task is the route, a map’s text gives the start, turns, end, and exceptions.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('non-text-content'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 1.1.1 Non-text Content'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: 'https://www.w3.org/WAI/tutorials/images/complex/',
    source: same('W3C WAI'),
    title: same('Images Tutorial — Complex Images'),
    note: {
      ko: '짧은 이름과 긴 설명 (보충 자료, 2026-04-08 갱신)',
      en: 'Short and long descriptions (supporting, updated 2026-04-08)',
    },
  },
  {
    href: wcag22('info-and-relationships'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 1.3.1 Info and Relationships'),
    note: {
      ko: '데이터 표의 관계 (09.5에서 자세히)',
      en: 'Relationships in data tables (more on 09.5)',
    },
  },
];

export const ComplexImagesPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <ChartSection locale={locale} />
      <PracticeSection locale={locale} />
      <RouteSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="svg-and-canvas" />
    </DocLayout>
  );
};

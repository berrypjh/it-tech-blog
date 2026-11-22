import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';
import { wcag22 } from '@/components/shared/wcag';

import { BasicsSection } from './sections/BasicsSection';
import { LayeredSection } from './sections/LayeredSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { getToc } from './toc';

const points = {
  ko: [
    '데이터 표는 caption으로 이름을 주고, th와 scope로 열 · 행 헤더를 잇는 것이 기본입니다.',
    '헤더가 여러 층이면 먼저 단순화를 생각하고, 지켜야 하면 colgroup이나 id · headers로 잇습니다.',
    'headers는 손으로 적는 연결이므로 모든 칸이 실제 th를 가리키는지 검증합니다.',
    '읽기 순서는 DOM 순서가 정하고, 읽기 전용 표를 ARIA grid로 바꾸지 않습니다.',
  ],
  en: [
    'A data table gets its name from caption, and th with scope connects column and row headers.',
    'With layered headers, consider simplifying first; if the layers must stay, connect with colgroup or id and headers.',
    'headers is a hand-written connection, so verify that every cell points to real th elements.',
    'DOM order sets the reading order, and a read-only table is not turned into an ARIA grid.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('info-and-relationships'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 1.3.1 Info and Relationships'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: 'https://www.w3.org/WAI/tutorials/tables/multi-level/',
    source: same('W3C WAI'),
    title: same('Tables Tutorial — Tables with multi-level headers'),
    note: {
      ko: 'id · headers 연결 (보충 자료, 2023-02-16 갱신)',
      en: 'id and headers (supporting, updated 2023-02-16)',
    },
  },
  {
    href: 'https://www.w3.org/WAI/tutorials/tables/irregular/',
    source: same('W3C WAI'),
    title: same('Tables Tutorial — Tables with irregular headers'),
    note: { ko: 'colgroup과 rowgroup (보충 자료)', en: 'colgroup and rowgroup (supporting)' },
  },
];

export const DataTablesPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <BasicsSection locale={locale} />
      <LayeredSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="media-alternatives" />
    </DocLayout>
  );
};

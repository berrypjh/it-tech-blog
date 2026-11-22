import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { apg, aria12 } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';
import { wcag22 } from '@/components/shared/wcag';

import { PageHeader } from './sections/PageHeader';
import { PartsSection } from './sections/PartsSection';
import { PracticeSection } from './sections/PracticeSection';
import { ScopeSection } from './sections/ScopeSection';
import { getToc } from './toc';

const points = {
  ko: [
    '초점을 받는 separator는 값을 가진 위젯입니다. 방향, 주 영역을 가리키는 aria-controls와 이름, 현재 값과 허용 범위를 실제 크기와 맞춥니다.',
    '세로 경계는 좌우 화살표로, 가로 경계는 위아래 화살표로 옮깁니다. Enter는 접고, 다시 누르면 접기 전 위치로 복원합니다.',
    '끌기 말고도 누르기만 하는 증감 · 접기 버튼을 두고, 어느 길로도 같은 값에 닿게 합니다.',
    'APG의 Window Splitter 패턴은 기능 예제와 검토가 끝나지 않았습니다. 직접 구현한 범위와 확인하지 않은 것을 함께 적습니다.',
  ],
  en: [
    'A focusable separator is a widget with a value. Align its orientation, the aria-controls and name pointing to the primary pane, and the current value and allowed range with the real size.',
    'A vertical boundary moves with left and right arrows, a horizontal one with up and down. Enter collapses, and pressing it again restores the position before collapsing.',
    'Besides dragging, provide tap-only stepping and collapse buttons, so every way reaches the same value.',
    'APG’s Window Splitter pattern has no finished functional example or review. State the scope you implemented and what you did not verify.',
  ],
};

const references: DocReference[] = [
  {
    href: aria12('separator'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — separator'),
    note: {
      ko: '규범 근거. 초점을 받으면 위젯이고 aria-valuenow가 필수 (2023-06-06)',
      en: 'The normative basis; a widget when focusable, with aria-valuenow required (2023-06-06)',
    },
  },
  {
    href: apg('windowsplitter'),
    source: same('W3C WAI'),
    title: same('APG — Window Splitter Pattern'),
    note: {
      ko: '권장 패턴. 기능 예제와 검토가 끝나지 않았다고 밝힘. 규범이 아님',
      en: 'A recommended pattern that states its functional example and review are unfinished; not normative',
    },
  },
  {
    href: wcag22('dragging-movements'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.5.7 Dragging Movements (Level AA)'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
];

export const WindowSplitterPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <PartsSection locale={locale} />
      <ScopeSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="carousel-pattern" />
    </DocLayout>
  );
};

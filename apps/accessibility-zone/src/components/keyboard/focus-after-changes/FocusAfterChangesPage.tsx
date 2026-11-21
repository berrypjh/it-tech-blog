import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { APG_KEYBOARD, aria12 } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';
import { understanding, wcag22 } from '@/components/shared/wcag';

import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { RulesSection } from './sections/RulesSection';
import { TimingSection } from './sections/TimingSection';
import { getToc } from './toc';

const points = {
  ko: [
    '포커스가 있던 요소가 사라지면 다음 위치를 작성자가 정합니다. 동작마다 도착지를 구현 전에 표로 정합니다.',
    '이 예제의 삭제 규칙은 다음 행 → 이전 행 → 목록이 비면 추가 버튼입니다.',
    '이동은 대상이 DOM에 반영된 뒤, 사용자의 동작 때문에 위치를 잃었을 때만 합니다. 배경 갱신은 포커스를 건드리지 않습니다.',
    '포커스 이동은 위치를 잇고, 상태 메시지는 결과를 알립니다. 둘은 서로를 대신하지 않고 포커스를 가두지도 않습니다.',
  ],
  en: [
    'When the element holding focus disappears, the author decides the next position. Set the destination for each action in a table before implementing.',
    'The delete rule in this example is next row, then previous row, then the add button if the list is empty.',
    'Move only after the target is in the DOM, and only when the user’s action lost the position. Background updates leave focus alone.',
    'Moving focus keeps the position, and a status message reports the result. Neither replaces the other, and focus is never trapped.',
  ],
};

const references: DocReference[] = [
  {
    href: aria12('managingfocus_authors'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — Managing Focus: Information for Authors'),
    note: {
      ko: '포커스가 있던 요소를 지울 때 (W3C Recommendation, 2023-06-06)',
      en: 'When removing the element with focus (W3C Recommendation, 2023-06-06)',
    },
  },
  {
    href: `${APG_KEYBOARD}#discernibleandpredictablekeyboardfocus`,
    source: same('W3C WAI'),
    title: same('ARIA APG — Discernible and Predictable Keyboard Focus'),
    note: {
      ko: '포커스 유지와 예측 가능성 (권장 지침)',
      en: 'Persistence and predictability (guidance)',
    },
  },
  {
    href: wcag22('no-keyboard-trap'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.1.2 No Keyboard Trap'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: wcag22('status-messages'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 4.1.3 Status Messages'),
    note: { ko: '포커스 없이 결과 알리기', en: 'Reporting results without moving focus' },
  },
  {
    href: understanding('focus-order'),
    source: same('W3C WAI'),
    title: same('Understanding SC 2.4.3: Focus Order'),
    note: { ko: '보충 자료', en: 'Supporting material' },
  },
];

export const FocusAfterChangesPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <RulesSection locale={locale} />
      <TimingSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="composite-focus" />
    </DocLayout>
  );
};

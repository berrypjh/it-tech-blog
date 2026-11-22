import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { apg, aria12 } from '@/components/shared/aria';
import { wcag22 } from '@/components/shared/wcag';

import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { RotationSection } from './sections/RotationSection';
import { StructureSection } from './sections/StructureSection';
import { TaskSection } from './sections/TaskSection';
import { getToc } from './toc';

const points = {
  ko: [
    '캐러셀은 직접 넘기는 이전 · 다음을 기본으로 하고, 보이는 항목의 위치를 이름과 글자로 알립니다. 숨긴 항목은 hidden으로 읽기 경로와 Tab 순서에서 뺍니다.',
    '자동 넘김은 사용자가 시작했을 때만 돌리고, 넘김 버튼을 맨 앞에 둡니다. 초점이 다른 요소로 가거나 이전 · 다음을 누르면 멈춘 채로 남고, 포인터가 위에 있으면 잠시 멈춥니다.',
    '자동으로 넘어가는 동안에는 live 영역을 끄고, 모션 줄이기 설정에서는 자동 넘김을 내놓지 않습니다. 항목이 하나거나 없으면 쓸 수 없는 조작을 두지 않습니다.',
    '컴포넌트는 과업의 부분마다 맞는 것만 조합합니다. 채택한 요소의 이름 · 상태 · 키 · 경계값과, 쓰지 않은 패턴의 이유를 함께 기록합니다.',
  ],
  en: [
    'A carousel takes manual previous and next as its base and conveys the position of the visible item by name and by text. Hidden items leave the reading path and the Tab order with hidden.',
    'Run rotation only when the user starts it, with the rotation control first. It stays stopped once focus goes to another element or previous or next is pressed, and pauses while the pointer is over it.',
    'Turn the live region off while rotating, and do not offer rotation under reduced motion. With one item or none, leave out the controls that cannot be used.',
    'Combine only the components that fit each part of a task. Record the name, state, keys, and limits of each adopted element, and why a pattern was not used.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('pause-stop-hide'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.2.2 Pause, Stop, Hide (Level A)'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: aria12('aria-roledescription'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-roledescription'),
    note: { ko: '규범 근거 (2023-06-06)', en: 'The normative basis (2023-06-06)' },
  },
  {
    href: apg('carousel'),
    source: same('W3C WAI'),
    title: same('APG — Carousel (Slide Show or Image Rotator) Pattern'),
    note: {
      ko: '권장 패턴. 자동 넘김의 정지 조건. 규범이 아니며 예제가 호환성을 보증하지 않음',
      en: 'A recommended pattern with the conditions for stopping rotation; not normative, and examples do not guarantee compatibility',
    },
  },
];

export const CarouselPatternPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <StructureSection locale={locale} />
      <RotationSection locale={locale} />
      <PracticeSection locale={locale} />
      <TaskSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
    </DocLayout>
  );
};

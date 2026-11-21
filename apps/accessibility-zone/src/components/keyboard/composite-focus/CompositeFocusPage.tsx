import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { APG_KEYBOARD, APG_LISTBOX, aria12 } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';

import { BehaviorSection } from './sections/BehaviorSection';
import { MethodsSection } from './sections/MethodsSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { getToc } from './toc';

const points = {
  ko: [
    '복합 위젯은 Tab 순서에 한 자리만 두고, 안쪽 이동은 방향키가 맡습니다.',
    'Roving tabindex는 DOM 포커스를 항목으로 옮기고, aria-activedescendant는 컨테이너에 포커스를 둔 채 활성 항목을 ID로 가리킵니다.',
    'aria-activedescendant는 지원 역할, 소유 관계, 유효한 ID가 필요하고, 표시와 스크롤은 작성자가 맡습니다.',
    '선택은 포커스와 다른 상태입니다. 활성 항목이 지워지면 다음 → 이전 항목으로 복구합니다.',
  ],
  en: [
    'A composite widget takes one place in the Tab order, and arrow keys handle movement inside.',
    'Roving tabindex moves DOM focus to items; aria-activedescendant keeps focus on the container and points to the active item by ID.',
    'aria-activedescendant needs a supporting role, an ownership relation, and a valid ID, and the author handles the indicator and scrolling.',
    'Selection is a separate state from focus. When the active item is removed, recover to the next, then the previous item.',
  ],
};

const references: DocReference[] = [
  {
    href: aria12('aria-activedescendant'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-activedescendant'),
    note: { ko: '작성자 조건 (2023-06-06)', en: 'Author requirements (2023-06-06)' },
  },
  {
    href: aria12('listbox'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — listbox role'),
    note: { ko: '소유 요소와 이름 요구', en: 'Owned elements and the name requirement' },
  },
  {
    href: aria12('option'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — option role'),
    note: { ko: '필수 문맥과 aria-selected', en: 'Required context and aria-selected' },
  },
  {
    href: `${APG_KEYBOARD}#keyboardnavigationinsidecomponents`,
    source: same('W3C WAI'),
    title: same('ARIA APG — Keyboard Navigation Inside Components'),
    note: { ko: '두 방법의 절차 (권장 지침)', en: 'Steps for both methods (recommended guidance)' },
  },
  {
    href: APG_LISTBOX,
    source: same('W3C WAI'),
    title: same('ARIA APG — Listbox Pattern'),
    note: { ko: '이 예제의 패턴 (권장 패턴)', en: 'The pattern of this example (recommended)' },
  },
];

export const CompositeFocusPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <MethodsSection locale={locale} />
      <BehaviorSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="skip-and-shortcuts" />
    </DocLayout>
  );
};

import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { APG_KEYBOARD, APG_LISTBOX } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';
import { wcag22 } from '@/components/shared/wcag';

import { PageHeader } from './sections/PageHeader';
import { StatesSection } from './sections/StatesSection';
import { TaskSection } from './sections/TaskSection';
import { getToc } from './toc';

const points = {
  ko: [
    'DOM 포커스는 키를 받는 요소, 활성 항목은 위젯이 가리키는 항목, 선택값은 사용자가 고른 값입니다.',
    'CSS :active는 요소가 눌리는 동안의 상태이므로 위젯의 활성 항목과 다른 말입니다.',
    '경로는 진입 · 이동 · 선택 · 이탈 · 삭제 · 재개를 실제 키로 따라가며 예상과 관찰을 나란히 적습니다.',
    '결함을 고친 뒤에는 같은 환경에서 같은 키로 재검증하고, 확인하지 못한 보조기술 결과는 미확인으로 남깁니다.',
  ],
  en: [
    'DOM focus is the element receiving keys, the active item is what the widget points to, and the selection is what the user chose.',
    'CSS :active is the state while an element is being pressed, so it is not the widget’s active item.',
    'Follow entry, movement, selection, exit, removal, and resuming with real keys, writing expectation and observation side by side.',
    'After a fix, retest with the same keys in the same environment, and leave assistive technology results you did not check as unconfirmed.',
  ],
};

const references: DocReference[] = [
  {
    href: `${APG_KEYBOARD}#focusvsselectionandtheperceptionofdualfocus`,
    source: same('W3C WAI'),
    title: same('ARIA APG — Focus VS Selection and the Perception of Dual Focus'),
    note: { ko: '포커스와 선택의 구분 (권장 지침)', en: 'Focus versus selection (guidance)' },
  },
  {
    href: APG_LISTBOX,
    source: same('W3C WAI'),
    title: same('ARIA APG — Listbox Pattern'),
    note: { ko: '과업 위젯의 패턴 (권장 패턴)', en: 'Pattern of the task widget (recommended)' },
  },
  {
    href: wcag22('keyboard'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.1.1 Keyboard'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: wcag22('focus-order'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.4.3 Focus Order'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:active',
    source: same('MDN'),
    title: same(':active'),
    note: { ko: 'CSS 의사 클래스 설명', en: 'The CSS pseudo-class' },
  },
];

export const KeyboardPathCheckPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <StatesSection locale={locale} />
      <TaskSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="contrast-conditions" />
    </DocLayout>
  );
};

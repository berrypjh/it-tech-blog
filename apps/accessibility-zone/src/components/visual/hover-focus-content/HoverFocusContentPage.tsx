import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { understanding, wcag22 } from '@/components/shared/wcag';

import { CriterionSection } from './sections/CriterionSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { TaskSection } from './sections/TaskSection';
import { getToc } from './toc';

const points = {
  ko: [
    '1.4.13은 호버나 포커스로 나타났다 사라지는 추가 내용에 닫기 가능 · 호버 가능 · 지속 조건을 요구합니다.',
    '포인터를 추가 내용으로 옮겨도 사라지지 않아야 하고, 포인터나 포커스를 옮기지 않고 닫을 수 있어야 합니다. Escape는 그 방법의 한 예입니다.',
    '닫은 뒤에는 포커스를 옮기지 않고, 트리거를 벗어났다 돌아오기 전에는 다시 열지 않습니다.',
    '터치에는 호버가 없으므로 누르기로도 같은 정보를 얻게 합니다. 판정은 환경 · 증거 · 미확인과 함께 적습니다.',
  ],
  en: [
    '1.4.13 requires additional content that appears and disappears with hover or focus to be dismissible, hoverable, and persistent.',
    'The content must stay when the pointer moves onto it, and be dismissible without moving the pointer or focus. Escape is one way to do that.',
    'After dismissal, do not move focus, and do not reopen until the trigger is left and returned to.',
    'Touch has no hover, so pressing must also give the same information. Record judgments with environment, evidence, and unconfirmed items.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('content-on-hover-or-focus'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 1.4.13 Content on Hover or Focus'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: understanding('content-on-hover-or-focus'),
    source: same('W3C WAI'),
    title: same('Understanding SC 1.4.13: Content on Hover or Focus'),
    note: { ko: 'Escape로 닫는 예 (보충 자료)', en: 'Dismissing with Escape (supporting)' },
  },
];

export const HoverFocusContentPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <CriterionSection locale={locale} />
      <PracticeSection locale={locale} />
      <TaskSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
    </DocLayout>
  );
};

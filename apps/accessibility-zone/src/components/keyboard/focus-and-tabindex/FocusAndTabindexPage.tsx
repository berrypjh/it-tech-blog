import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { APG_KEYBOARD, whatwg } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';
import { understanding, wcag22 } from '@/components/shared/wcag';

import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { TasksSection } from './sections/TasksSection';
import { ValuesSection } from './sections/ValuesSection';
import { getToc } from './toc';

const points = {
  ko: [
    'Tab · Shift+Tab은 사용자가 컨트롤 사이를 옮겨 가는 길이고, focus()는 화면 변화 뒤 스크립트가 위치를 이어 주는 수단입니다.',
    'tabindex="0"은 순차 이동에 넣고, tabindex="-1"은 순차 이동에서 빼려는 값입니다. -1이어도 스크립트와 클릭으로 포커스를 받을 수 있습니다.',
    '양수 tabindex로 잘못된 DOM 순서를 고치지 않습니다. 순서는 DOM에서 고칩니다.',
    '포커스 가능 여부는 tabindex 하나로 정해지지 않습니다. 렌더링 · 비활성 · inert와 브라우저 환경을 함께 확인합니다.',
  ],
  en: [
    'Tab and Shift+Tab are how users move between controls; focus() is how a script carries the position across a screen change.',
    'tabindex="0" adds an element to sequential navigation, and tabindex="-1" asks to leave it out. With -1 it can still receive focus from script and clicks.',
    'Do not repair a wrong DOM order with positive tabindex. Fix the order in the DOM.',
    'Whether something can take focus is not decided by tabindex alone. Check rendering, disabled, inert, and the browser environment together.',
  ],
};

const references: DocReference[] = [
  {
    href: whatwg('interaction', 'the-tabindex-attribute'),
    source: same('WHATWG'),
    title: same('HTML Standard — The tabindex attribute'),
    note: {
      ko: '값별 동작과 양수 값 주의 (2026-11-17 갱신본)',
      en: 'Behavior by value and the caution on positive values (updated 2026-11-17)',
    },
  },
  {
    href: whatwg('interaction', 'focusable-area'),
    source: same('WHATWG'),
    title: same('HTML Standard — Focusable areas'),
    note: {
      ko: '렌더링 · 비활성 · inert 조건',
      en: 'The rendering, disabled, and inert conditions',
    },
  },
  {
    href: wcag22('focus-order'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.4.3 Focus Order'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: understanding('focus-order'),
    source: same('W3C WAI'),
    title: same('Understanding SC 2.4.3: Focus Order'),
    note: { ko: '보충 자료', en: 'Supporting material' },
  },
  {
    href: APG_KEYBOARD,
    source: same('W3C WAI'),
    title: same('ARIA APG — Developing a Keyboard Interface'),
    note: { ko: '권장 지침', en: 'Recommended guidance' },
  },
];

export const FocusAndTabindexPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <TasksSection locale={locale} />
      <ValuesSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="keys-and-defaults" />
    </DocLayout>
  );
};

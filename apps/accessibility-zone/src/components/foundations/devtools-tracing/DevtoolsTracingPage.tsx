import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';

import { ReferencesSection, same, SummarySection } from '@/components/shared/DocPage';
import { NextPage } from '@/components/shared/PageLink';

import { AtCheckSection } from './sections/AtCheckSection';
import { LevelsSection } from './sections/LevelsSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { ToolsSection } from './sections/ToolsSection';
import { getToc } from './toc';

const points = {
  ko: [
    '개발자 도구로 DOM과 속성, 계산된 역할 · 이름 · 상태, 붙은 리스너, 속성이 바뀌는 순간, 지금 포커스를 봅니다. 메뉴 위치는 버전에 따라 바뀝니다.',
    '사이트 안 관찰 · 개발자 도구 · 실제 보조기술은 증명하는 범위가 다르므로, 결과에 확인 수준을 함께 적습니다.',
    '결함은 최소 재현 → 원인 가설 → 확인 → 수정 → 키보드 재검증 순서로 고칩니다.',
    '원인이 있는 곳을 고치면 암시적 제출 · 새 탭 열기 같은 기본 기능이 남습니다. 증상을 이벤트로 덮으면 기능이 사라집니다.',
  ],
  en: [
    'Developer tools show the DOM and attributes, computed role, name, and state, attached listeners, the moment an attribute changes, and the current focus. Menu locations change between versions.',
    'In-page observation, developer tools, and real assistive technology prove different things, so state the level of checking with each result.',
    'Fix defects in the order minimal reproduction → hypothesis → check → fix → keyboard re-check.',
    'Fixing the cause keeps built-in features like implicit submission and open-in-new-tab. Covering the symptom with events removes them.',
  ],
};

const references: DocReference[] = [
  {
    href: 'https://developer.chrome.com/docs/devtools/accessibility/reference',
    source: same('Chrome for Developers'),
    title: same('Accessibility features reference'),
    note: {
      ko: 'Chrome 개발자 도구의 Accessibility 탭',
      en: 'The Accessibility tab in Chrome DevTools',
    },
  },
  {
    href: 'https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/',
    source: same('Firefox Source Docs'),
    title: same('Accessibility Inspector'),
    note: { ko: 'Firefox 접근성 검사기', en: 'The Firefox Accessibility Inspector' },
  },
  {
    href: 'https://developer.chrome.com/docs/devtools/console/utilities',
    source: same('Chrome for Developers'),
    title: same('Console Utilities API reference'),
    note: {
      ko: '$0 · getEventListeners 등 콘솔 도구',
      en: '$0, getEventListeners, and other console helpers',
    },
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/API/SubmitEvent/submitter',
    source: same('MDN'),
    title: same('SubmitEvent: submitter property'),
    note: { ko: '폼을 제출한 버튼 확인', en: 'Finding the button that submitted a form' },
  },
  {
    href: 'https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#implicit-submission',
    source: same('WHATWG'),
    title: same('HTML Standard — Implicit submission'),
    note: {
      ko: 'Enter로 제출할 때 기본 버튼이 정해지는 규칙 (규범)',
      en: 'How the default button is chosen for Enter submission (normative)',
    },
  },
];

export const DevtoolsTracingPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <ToolsSection locale={locale} />
      <LevelsSection locale={locale} />
      <PracticeSection locale={locale} />
      <AtCheckSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="accessibility-tree" />
    </DocLayout>
  );
};

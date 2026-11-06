import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';

import { ReferencesSection, same, SummarySection } from '@/components/shared/DocPage';
import { NextPage } from '@/components/shared/PageLink';

import { CompareSection } from './sections/CompareSection';
import { HiddenNameSection } from './sections/HiddenNameSection';
import { HidingSection } from './sections/HidingSection';
import { NotOneToOneSection } from './sections/NotOneToOneSection';
import { PageHeader } from './sections/PageHeader';
import { getToc } from './toc';

const points = {
  ko: [
    '브라우저는 DOM과 함께 네이티브 의미 · 계산된 스타일 · 렌더링 결과로 접근성 트리를 만듭니다.',
    '같은 요소를 Elements 패널과 접근성 트리에서 찾고, 예상 → 조작 → 관찰 → 해석 순서로 한 번에 하나씩 바꿔 봅니다.',
    'hidden · display: none · visibility: hidden은 트리에서 빠지고, opacity: 0 · 시각적 숨김은 남는 것이 흔한 결과입니다. 결론은 지금 브라우저의 트리에서 냅니다.',
    'DOM 노드와 접근성 노드는 일대일이 아닙니다. 빠지고, 생기고, 합쳐집니다.',
    '트리 노출과 이름 계산 참조는 다른 규칙이 정합니다. 상세 이름 계산은 06장에서 다룹니다.',
  ],
  en: [
    'The browser builds the accessibility tree from the DOM together with native meaning, computed style, and the rendering result.',
    'Find the same element in the Elements panel and the accessibility tree, and change one thing at a time: predict → change → observe → interpret.',
    'hidden, display: none, and visibility: hidden commonly drop out of the tree, while opacity: 0 and visual hiding stay. Draw conclusions from your current browser’s tree.',
    'DOM nodes and accessibility nodes are not one-to-one. Nodes drop out, appear, and merge.',
    'Tree exposure and name computation references are decided by different rules. Chapter 06 covers name computation in detail.',
  ],
};

const references: DocReference[] = [
  {
    href: 'https://developer.chrome.com/docs/devtools/accessibility/reference',
    source: same('Chrome for Developers'),
    title: same('Accessibility features reference'),
    note: {
      ko: 'Accessibility 탭과 전체 접근성 트리 보기',
      en: 'The Accessibility tab and the full-page accessibility tree',
    },
  },
  {
    href: 'https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/',
    source: same('Firefox Source Docs'),
    title: same('Accessibility Inspector'),
    note: {
      ko: '역할 · 이름 · 상태 · 관계를 보여 주는 Firefox 검사기',
      en: 'The Firefox inspector for role, name, states, and relations',
    },
  },
  {
    href: 'https://www.w3.org/TR/core-aam-1.2/',
    source: same('W3C'),
    title: same('Core Accessibility API Mappings 1.2'),
    note: {
      ko: '접근성 트리에 노드를 포함 · 정리하는 규칙 (Candidate Recommendation Draft)',
      en: 'Rules for including and pruning nodes in the accessibility tree (Candidate Recommendation Draft)',
    },
  },
  {
    href: 'https://www.w3.org/TR/accname-1.2/',
    source: same('W3C'),
    title: same('Accessible Name and Description Computation 1.2'),
    note: {
      ko: '숨긴 노드가 이름 계산에 참조되는 경우 (Working Draft)',
      en: 'When hidden nodes are referenced in name computation (Working Draft)',
    },
  },
  {
    href: 'https://html.spec.whatwg.org/multipage/interaction.html#the-hidden-attribute',
    source: same('WHATWG'),
    title: same('HTML Standard — The hidden attribute'),
    note: { ko: 'hidden 속성의 뜻 (규범)', en: 'What the hidden attribute means (normative)' },
  },
];

export const AccessibilityTreePage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <CompareSection locale={locale} />
      <HidingSection locale={locale} />
      <NotOneToOneSection locale={locale} />
      <HiddenNameSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="role-name-state" />
    </DocLayout>
  );
};

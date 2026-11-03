import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';

import { ReferencesSection, same, SummarySection } from '@/components/shared/DocPage';
import { NextPage } from '@/components/shared/PageLink';

import { LayersSection } from './sections/LayersSection';
import { OneTaskSection } from './sections/OneTaskSection';
import { PageHeader } from './sections/PageHeader';
import { SourceVsDomSection } from './sections/SourceVsDomSection';
import { getToc } from './toc';

const points = {
  ko: [
    'HTML은 구조 · 의미 · 기본 동작을, CSS는 표현을, JavaScript는 이벤트에 따른 상태 변경을 맡습니다. DOM은 브라우저가 HTML을 읽어 만든, 스크립트가 바꾸는 트리입니다.',
    '보조기술이 읽는 정보는 소스 파일이 아니라 지금의 DOM과 계산된 스타일에서 나옵니다.',
    'click 이벤트는 button이 기본으로 만들어도, 상태를 속성에 반영하는 일은 JavaScript의 책임입니다.',
    '같은 과업의 결함도 층마다 막히는 사람과 고칠 곳이 다르므로, 책임이 있는 층에서 고칩니다.',
  ],
  en: [
    'HTML owns structure, meaning, and built-in behavior; CSS owns presentation; JavaScript owns state changes in response to events. The DOM is the tree the browser builds from HTML and scripts change.',
    'What assistive technology reads comes from the current DOM and computed styles, not the source file.',
    'A button fires click events on its own, but writing the state into attributes is JavaScript’s job.',
    'Defects in the same task block different people and need different fixes per layer, so fix them in the layer that owns them.',
  ],
};

const references: DocReference[] = [
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction',
    source: same('MDN'),
    title: same('Introduction to the DOM'),
    note: {
      ko: 'DOM이 무엇이고 스크립트가 어떻게 다루는지',
      en: 'What the DOM is and how scripts use it',
    },
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree',
    source: same('MDN'),
    title: same('Accessibility tree'),
    note: {
      ko: 'DOM에서 접근성 트리가 만들어지는 방식',
      en: 'How the accessibility tree is built from the DOM',
    },
  },
  {
    href: 'https://html.spec.whatwg.org/multipage/parsing.html',
    source: same('WHATWG'),
    title: same('HTML Standard — Parsing HTML documents'),
    note: {
      ko: '빠진 요소를 채우고 오류를 바로잡는 파싱 규칙 (규범)',
      en: 'The parsing rules that fill in missing elements and recover from errors (normative)',
    },
  },
  {
    href: 'https://www.w3.org/TR/html-aam-1.0/',
    source: same('W3C'),
    title: same('HTML Accessibility API Mappings 1.0'),
    note: {
      ko: 'HTML 요소가 접근성 API의 역할 · 상태로 연결되는 방식',
      en: 'How HTML elements map to accessibility API roles and states',
    },
  },
];

export const WebLayersPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <LayersSection locale={locale} />
      <SourceVsDomSection locale={locale} />
      <OneTaskSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="document-structure" />
    </DocLayout>
  );
};

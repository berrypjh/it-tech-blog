import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';

import { LinkOrButtonSection } from './sections/LinkOrButtonSection';
import { PageHeader } from './sections/PageHeader';
import { TextSemanticsSection } from './sections/TextSemanticsSection';
import { getToc } from './toc';

const points = {
  ko: [
    '목록 · 인용 · 강조 요소는 모양이 아니라 의미로 고릅니다. 모양은 CSS로 바꿉니다.',
    '강조 요소를 따로 읽지 않는 화면 낭독기가 많으므로, 놓치면 안 되는 정보는 문장 자체로 씁니다.',
    '다른 페이지나 위치로 가면 링크, 지금 페이지에서 무언가를 하면 버튼입니다. 두 요소는 Space · 새 탭 · 폼 제출에서 다르게 동작합니다.',
    'role 속성은 역할만 알리고 키보드 동작을 더하지 않습니다. 같은 일을 하는 HTML 요소가 있으면 그 요소를 씁니다.',
  ],
  en: [
    'Choose list, quote, and emphasis elements by meaning, not looks. Change the looks with CSS.',
    'Many screen readers do not announce emphasis, so write information that must not be missed in the sentence itself.',
    'If it goes to another page or place, it is a link; if it does something on this page, it is a button. They behave differently with Space, new tabs, and form submission.',
    'A role attribute only announces a role and adds no keyboard behavior. Use the HTML element that does the same job when there is one.',
  ],
};

const references: DocReference[] = [
  {
    href: 'https://html.spec.whatwg.org/multipage/text-level-semantics.html',
    source: same('WHATWG'),
    title: same('HTML Standard — Text-level semantics'),
    note: {
      ko: 'strong · em · b · i · q · cite의 정의 (규범)',
      en: 'Definitions of strong, em, b, i, q, and cite (normative)',
    },
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button',
    source: same('MDN'),
    title: same('<button>: The Button element'),
    note: { ko: 'type 기본값과 폼 제출', en: 'The default type and form submission' },
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a',
    source: same('MDN'),
    title: same('<a>: The Anchor element'),
    note: {
      ko: 'href가 없는 a와 링크 접근성',
      en: 'Anchors without href and link accessibility',
    },
  },
  {
    href: 'https://www.w3.org/TR/using-aria/#rule1',
    source: same('W3C'),
    title: same('Using ARIA — First rule of ARIA use'),
    note: {
      ko: '같은 일을 하는 HTML 요소가 있으면 그 요소를 쓰라는 규칙 — 참고용 문서',
      en: 'Use a native element when one fits — informative',
    },
  },
];

export const TextAndControlsPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <TextSemanticsSection locale={locale} />
      <LinkOrButtonSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="basic-forms" />
    </DocLayout>
  );
};

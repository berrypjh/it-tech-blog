import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';

import { ReferencesSection, same, SummarySection } from '@/components/shared/DocPage';
import { NextPage } from '@/components/shared/PageLink';

import { DiffersSection } from './sections/DiffersSection';
import { PageHeader } from './sections/PageHeader';
import { PartsSection } from './sections/PartsSection';
import { PracticeSection } from './sections/PracticeSection';
import { getToc } from './toc';

const points = {
  ko: [
    '접근성 객체는 역할 · 이름 · 상태 · 값 · 관계로 나눠 읽습니다. 모든 객체가 다섯 가지를 다 갖지는 않습니다.',
    '보이는 텍스트 · 접근성 이름 · 입력 값 · 체크 상태 · 레이블 관계는 서로 다른 정보입니다.',
    '버튼 · 체크박스 · 입력 칸은 주는 정보가 다르고, 노출 방식은 브라우저마다 다를 수 있습니다.',
    'checked · value · label 연결은 DOM에서 읽을 수 있지만, 역할 · 이름은 브라우저 도구에서 확인합니다.',
  ],
  en: [
    'Read an accessible object by role, name, state, value, and relations. Not every object has all five.',
    'Visible text, accessible name, input value, checked state, and label relation are different information.',
    'Buttons, checkboxes, and inputs give different information, and how it is exposed can differ between browsers.',
    'checked, value, and label associations can be read from the DOM, but role and name are checked in browser tools.',
  ],
};

const references: DocReference[] = [
  {
    href: 'https://www.w3.org/TR/wai-aria-1.2/',
    source: same('W3C'),
    title: same('Accessible Rich Internet Applications (WAI-ARIA) 1.2'),
    note: {
      ko: '역할 · 상태 · 속성의 정의 (W3C Recommendation, 2023-06-06)',
      en: 'Definitions of roles, states, and properties (W3C Recommendation, 2023-06-06)',
    },
  },
  {
    href: 'https://www.w3.org/TR/html-aam-1.0/',
    source: same('W3C'),
    title: same('HTML Accessibility API Mappings 1.0'),
    note: {
      ko: 'button · input · label이 역할 · 이름 · 관계로 매핑되는 방식 (Working Draft)',
      en: 'How button, input, and label map to role, name, and relations (Working Draft)',
    },
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/labels',
    source: same('MDN'),
    title: same('HTMLInputElement: labels property'),
    note: { ko: '입력 칸에 연결된 label 읽기', en: 'Reading the labels associated with an input' },
  },
  {
    href: 'https://developer.chrome.com/docs/devtools/accessibility/reference',
    source: same('Chrome for Developers'),
    title: same('Accessibility features reference'),
    note: {
      ko: '계산된 접근성 속성 보기',
      en: 'Viewing computed accessibility properties',
    },
  },
];

export const RoleNameStatePage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <PartsSection locale={locale} />
      <PracticeSection locale={locale} />
      <DiffersSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="accessibility-apis" />
    </DocLayout>
  );
};

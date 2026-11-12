import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { aria12, htmlAam, whatwg } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';

import { BrokenSection } from './sections/BrokenSection';
import { PageHeader } from './sections/PageHeader';
import { PlaceholderSection } from './sections/PlaceholderSection';
import { SourcesSection } from './sections/SourcesSection';
import { getToc } from './toc';

const points = {
  ko: [
    '이름의 출처는 요소와 역할에 따라 다릅니다. 입력 칸은 연결된 label, 버튼은 안의 내용, 이미지는 alt에서 이름을 얻습니다.',
    '버튼이 내용에서 이름을 얻는 것은 button 역할이 "내용에서 이름"을 허용하기 때문입니다. textbox는 허용하지 않습니다.',
    '끊긴 for · id는 for 값 · 대상 요소 · input.labels로 추적하고, aria-label로 덮지 않고 관계 자체를 고칩니다.',
    'placeholder는 HTML-AAM 초안의 끝 쪽 대체 후보일 뿐 라벨이 아닙니다. 한 브라우저의 대체 동작은 그 엔진 · 버전의 관찰로만 적습니다.',
  ],
  en: [
    'Name sources differ by element and role. An input gets its name from a connected label, a button from its content, and an image from alt.',
    'A button can take its name from content because the button role allows "name from content." textbox does not.',
    'Trace a broken for and id through the for value, the target element, and input.labels, and fix the relation itself instead of covering it with aria-label.',
    'A placeholder is only a fallback candidate near the end of the HTML-AAM draft’s list, not a label. Record one browser’s fallback behavior only as that engine and version’s observation.',
  ],
};

const references: DocReference[] = [
  {
    href: htmlAam(
      'input-type-text-input-type-password-input-type-number-input-type-search-input-type-tel-input-type-email-input-type-url-and-textarea-elements-accessible-name-computation',
    ),
    source: same('W3C'),
    title: same('HTML-AAM 1.0 — 4.1.1 input and textarea Accessible Name Computation'),
    note: {
      ko: '입력 칸의 이름 후보 순서 (Working Draft, 2026-10-26)',
      en: 'Name candidates for inputs (Working Draft, 2026-10-26)',
    },
  },
  {
    href: htmlAam('button-element-accessible-name-computation'),
    source: same('W3C'),
    title: same('HTML-AAM 1.0 — 4.1.4 button Element Accessible Name Computation'),
    note: { ko: '버튼의 이름 후보 순서', en: 'Name candidates for buttons' },
  },
  {
    href: htmlAam('img-element-accessible-name-computation'),
    source: same('W3C'),
    title: same('HTML-AAM 1.0 — 4.1.10 img Element Accessible Name Computation'),
    note: { ko: 'alt와 빈 alt의 처리', en: 'Handling alt and empty alt' },
  },
  {
    href: aria12('namefromcontent'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — Roles Supporting Name from Content'),
    note: {
      ko: '내용에서 이름을 허용하는 역할 (2023-06-06)',
      en: 'Roles that allow name from content (2023-06-06)',
    },
  },
  {
    href: whatwg('forms', 'the-label-element'),
    source: same('WHATWG'),
    title: same('HTML Standard — The label element'),
    note: { ko: 'for와 labeled control의 정의', en: 'Definition of for and the labeled control' },
  },
];

export const HtmlNameSourcesPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <SourcesSection locale={locale} />
      <BrokenSection locale={locale} />
      <PlaceholderSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="labelledby-and-label" />
    </DocLayout>
  );
};

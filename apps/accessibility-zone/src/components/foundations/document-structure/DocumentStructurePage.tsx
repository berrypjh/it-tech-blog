import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';

import { FixCaseSection } from './sections/FixCaseSection';
import { HeadingsSection } from './sections/HeadingsSection';
import { LandmarksSection } from './sections/LandmarksSection';
import { PageHeader } from './sections/PageHeader';
import { TitleLangSection } from './sections/TitleLangSection';
import { getToc } from './toc';

const points = {
  ko: [
    '페이지 제목은 페이지마다 다르게, 구별되는 내용을 앞에 씁니다. 화면만 바꾸는 앱은 경로가 바뀔 때 페이지 제목도 바꿉니다.',
    'html의 lang은 문서의 기본 언어를, 요소의 lang은 다른 언어로 된 구절을 알립니다. 실제 음성 전환은 보조기술마다 다릅니다.',
    '제목 단계는 글자 크기가 아니라 내용의 계층으로 정하고, 모양은 CSS로 바꿉니다.',
    'header · footer는 위치에 따라, section · form은 이름이 있을 때만 랜드마크가 됩니다. 같은 종류가 여럿이면 이름으로 구분합니다.',
  ],
  en: [
    'Give every page a different title with the distinguishing part first. Apps that only swap the screen update the title when the route changes.',
    'lang on html states the default language; lang on an element marks a passage in another language. Whether the voice switches varies by assistive technology.',
    'Choose heading levels by content hierarchy, not font size, and change the look with CSS.',
    'header and footer become landmarks depending on where they are; section and form only when named. Name landmarks of the same kind to tell them apart.',
  ],
};

const references: DocReference[] = [
  {
    href: 'https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html',
    source: same('W3C WAI'),
    title: same('Understanding SC 2.4.2: Page Titled'),
    note: { ko: '페이지 제목 요구의 의도와 예', en: 'Intent and examples for page titles' },
  },
  {
    href: 'https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html',
    source: same('W3C WAI'),
    title: same('Understanding SC 3.1.2: Language of Parts'),
    note: {
      ko: '부분 언어 표시와 예외(고유명사 · 기술 용어)',
      en: 'Marking parts in other languages and the exceptions',
    },
  },
  {
    href: 'https://www.w3.org/WAI/tutorials/page-structure/headings/',
    source: same('W3C WAI'),
    title: same('Page Structure Tutorial — Headings'),
    note: { ko: '제목 단계 작성 방법', en: 'How to write heading levels' },
  },
  {
    href: 'https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/',
    source: same('W3C WAI'),
    title: same('ARIA Authoring Practices Guide — Landmark Regions'),
    note: {
      ko: '랜드마크 종류와 이름 붙이기 — 참고용 문서',
      en: 'Landmark types and naming — informative',
    },
  },
  {
    href: 'https://www.w3.org/TR/html-aam-1.0/',
    source: same('W3C'),
    title: same('HTML Accessibility API Mappings 1.0'),
    note: {
      ko: 'header · footer · section 등이 랜드마크가 되는 조건',
      en: 'When header, footer, section, and others become landmarks',
    },
  },
];

export const DocumentStructurePage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <TitleLangSection locale={locale} />
      <HeadingsSection locale={locale} />
      <LandmarksSection locale={locale} />
      <FixCaseSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="text-and-controls" />
    </DocLayout>
  );
};

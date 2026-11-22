import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { KWCAG_REGISTRY } from '@/components/shared/kwcag';
import { NextPage } from '@/components/shared/PageLink';

import { DownloadSection } from './sections/DownloadSection';
import { HtmlSection } from './sections/HtmlSection';
import { PageHeader } from './sections/PageHeader';
import { PagesSection } from './sections/PagesSection';
import { TaskSection } from './sections/TaskSection';
import { getToc } from './toc';

const points = {
  ko: [
    '내려받기 링크에는 형식 · 언어 · 크기를 적고, 그 값은 실제 파일에서 나오게 합니다.',
    '같은 안내를 HTML로도 두고, 시간 · 장소 · 예외 같은 과업 정보로 두 판을 대조합니다.',
    '쪽 구분이 있는 출판물은 배치가 바뀌어도 같은 원본 위치를 가리키는 표시와 쪽 이동을 둡니다.',
    'KWCAG 2.2의 2.4.4와 WCAG 2.2의 2.4.4는 다른 항목이고, PDF · 뷰어는 파일이 있다는 것만으로 판정하지 않습니다.',
  ],
  en: [
    'A download link states format, language, and size, and those values come from the real file.',
    'Offer the same notice in HTML, and compare the two versions by task information such as time, place, and exceptions.',
    'Paginated publications get markers and page navigation that point to the same original location even when the layout changes.',
    'KWCAG 2.2’s 2.4.4 and WCAG 2.2’s 2.4.4 are different items, and a PDF or viewer is not judged just because the file exists.',
  ],
};

const references: DocReference[] = [
  {
    href: 'https://nia-a11y.github.io/kwcag22tech/2/4/4/',
    source: same('NIA'),
    title: {
      ko: '2.4.4 고정된 참조 위치 정보 — 웹 접근성을 고려한 콘텐츠 제작기법 2.2',
      en: '2.4.4 Fixed reference location information — content production techniques 2.2 (Korean)',
    },
    note: { ko: '해설 자료 (2025-03-31 갱신)', en: 'Guidance (updated 2025-03-31)' },
  },
  {
    href: KWCAG_REGISTRY,
    source: { ko: '국립전파연구원', en: 'National Radio Research Agency' },
    title: same('KS X OT0003:2022 (KWCAG 2.2)'),
    note: { ko: '표준 원문 첨부 페이지', en: 'Page with the standard’s original attached' },
  },
  {
    href: 'https://www.w3.org/TR/dpub-aria-1.1/#doc-pagebreak',
    source: same('W3C'),
    title: same('Digital Publishing WAI-ARIA Module 1.1 — doc-pagebreak'),
    note: { ko: '쪽 구분 역할', en: 'The page break role' },
  },
];

export const DocumentsAndPageReferencesPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <DownloadSection locale={locale} />
      <HtmlSection locale={locale} />
      <PagesSection locale={locale} />
      <TaskSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="choosing-update-means" />
    </DocLayout>
  );
};

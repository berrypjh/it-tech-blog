import { getServerLocale } from '@it-tech-blog/preferences/server';

import { DocumentsAndPageReferencesPage } from '@/components/content/documents-and-page-references/DocumentsAndPageReferencesPage';

const metadata = {
  ko: {
    title: '다운로드 문서 · 뷰어 · 고정된 참조 위치의 접근성 다루기 — A11y Lab',
    description:
      '내려받는 문서의 형식 · 언어 · 크기를 실제 파일과 맞추고 HTML 판과 대조하며, 고정된 참조 위치와 최종 과업으로 09장을 마치는 마지막 페이지.',
  },
  en: {
    title:
      'Handling the accessibility of downloadable documents, viewers, and fixed reference points — A11y Lab',
    description:
      'Chapter 09, last page: matching a download’s format, language, and size to the real file, comparing with the HTML version, fixed reference points, and the final task.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <DocumentsAndPageReferencesPage locale={await getServerLocale()} />;

export default Page;

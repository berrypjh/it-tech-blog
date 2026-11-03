import { getServerLocale } from '@it-tech-blog/preferences/server';

import { DocumentStructurePage } from '@/components/foundations/document-structure/DocumentStructurePage';

const metadata = {
  ko: {
    title: '페이지 제목·언어·제목 단계·랜드마크로 문서 구조 만들기 — A11y Lab',
    description:
      'title과 lang, heading 단계, header·nav·main·footer 랜드마크의 역할을 배우고, 실제 페이지의 구조를 읽어 점검하고 고치는 02장 두 번째 페이지.',
  },
  en: {
    title:
      'Building document structure with page titles, language, headings, and landmarks — A11y Lab',
    description:
      'Chapter 02, page 2: what title, lang, heading levels, and the header, nav, main, and footer landmarks do, and how to read, check, and fix a real page’s structure.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <DocumentStructurePage locale={await getServerLocale()} />;

export default Page;

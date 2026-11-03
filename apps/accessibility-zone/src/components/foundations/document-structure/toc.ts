import { tocOf } from '@/components/shared/DocPage';

export const getToc = tocOf(
  {
    titleLang: 'title-and-lang',
    headings: 'headings',
    landmarks: 'landmarks',
    fixCase: 'fix-case',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      titleLang: '페이지 제목과 언어',
      headings: '제목은 문서의 개요다',
      landmarks: '랜드마크는 영역의 지도다',
      fixCase: '실제 페이지 구조 점검하고 고치기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      titleLang: 'Page title and language',
      headings: 'Headings are the document outline',
      landmarks: 'Landmarks are a map of regions',
      fixCase: 'Checking and fixing a real page’s structure',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

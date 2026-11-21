import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    concepts: 'color-environments',
    styles: 'preserving-boundaries',
    records: 'emulation-and-real-results',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      concepts: '세 가지 색 환경 구분하기',
      styles: '경계와 상태를 실제 선으로 남기기',
      records: '에뮬레이션과 실제 결과를 나눠 기록하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      concepts: 'Telling three color environments apart',
      styles: 'Keeping boundaries and states as real lines',
      records: 'Recording emulation and real results separately',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

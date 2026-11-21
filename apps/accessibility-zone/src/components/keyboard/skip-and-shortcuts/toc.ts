import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    skip: 'skip-links',
    shortcuts: 'character-key-shortcuts',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      skip: '건너뛰기 링크의 도착과 다음 Tab',
      shortcuts: '문자 단축키의 세 가지 조건',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      skip: 'Where a skip link lands, and the next Tab',
      shortcuts: 'Three conditions for character key shortcuts',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

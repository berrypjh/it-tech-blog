import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    criteria: 'color-and-sensory-criteria',
    practice: 'sensory-practice',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      criteria: '1.4.1과 1.3.3이 보는 것',
      practice: '같은 과업을 고치기 전후로 해 보기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      criteria: 'What 1.4.1 and 1.3.3 look at',
      practice: 'Doing one task before and after the fix',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

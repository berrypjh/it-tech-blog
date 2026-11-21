import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    criteria: 'resize-and-reflow-criteria',
    methods: 'three-zoom-checks',
    practice: 'reflow-practice',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      criteria: '1.4.4와 1.4.10이 요구하는 것',
      methods: '세 가지 검사를 구분하기',
      practice: '패널 모형으로 깨지는 지점 찾기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      criteria: 'What 1.4.4 and 1.4.10 require',
      methods: 'Telling three checks apart',
      practice: 'Finding what breaks with a panel model',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

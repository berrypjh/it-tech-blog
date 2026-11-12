import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    sources: 'element-sources',
    broken: 'broken-for-id',
    placeholder: 'placeholder-is-not-a-label',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      sources: '요소마다 다른 이름 출처',
      broken: '끊긴 for · id 관계 추적하고 고치기',
      placeholder: 'placeholder는 지속적인 라벨이 아니다',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      sources: 'Name sources differ by element',
      broken: 'Tracing and fixing a broken for and id relation',
      placeholder: 'A placeholder is not a lasting label',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

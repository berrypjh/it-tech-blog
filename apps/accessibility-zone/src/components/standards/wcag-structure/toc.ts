import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    trace: 'principle-to-criterion',
    levels: 'what-levels-mean',
    target: 'review-by-target-level',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      trace: '원칙에서 성공 기준까지 하나를 따라가기',
      levels: 'A · AA · AAA가 뜻하는 것과 뜻하지 않는 것',
      target: '목표 적합 수준에 따라 함께 검토할 기준',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      trace: 'Following one item from principle to success criterion',
      levels: 'What A, AA, and AAA mean and do not mean',
      target: 'Which criteria to review for a target conformance level',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

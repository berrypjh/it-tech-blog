import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    notice: 'clear-notice',
    language: 'language-and-help',
    coga: 'coga-advice',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      notice: '무엇을 언제 어디에서 할지 드러나게 고치기',
      language: '언어 표시와 일관된 도움의 조건',
      coga: '쉬운 말과 기억 부담 줄이기는 권고다',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      notice: 'Rewriting so what, when, and where stand out',
      language: 'Language markup and the conditions for consistent help',
      coga: 'Plain words and less memory load are advice',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    choose: 'details-or-button',
    rules: 'accordion-rules',
    practice: 'accordion-practice',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      choose: '짧은 설명은 details, 여러 패널은 제목 속 버튼',
      rules: '열림 규칙과 초점 규칙을 정한다',
      practice: '하나만 열림과 여러 개 열림을 직접 비교하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      choose: 'details for a short explanation, buttons in headings for several panels',
      rules: 'Decide the open rule and the focus rule',
      practice: 'Comparing single-open and multi-open yourself',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

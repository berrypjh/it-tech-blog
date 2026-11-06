import { tocOf } from '@/components/shared/DocPage';

export const getToc = tocOf(
  {
    roles: 'document-roles',
    techniques: 'techniques-are-not-the-only-way',
    apg: 'apg-is-guidance',
    act: 'act-format-and-rules',
    citing: 'what-to-cite',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      roles: '문서마다 맡는 역할',
      techniques: '충분 기법은 유일한 구현법이 아니다',
      apg: 'APG는 구현 안내이지 요구가 아니다',
      act: 'ACT Rules Format과 개별 검사 규칙',
      citing: '판정 근거로 무엇을 인용하나',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      roles: 'What each document is for',
      techniques: 'Sufficient techniques are not the only way',
      apg: 'The APG is implementation guidance, not a requirement',
      act: 'The ACT Rules Format and individual test rules',
      citing: 'What to cite as the basis of a judgment',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

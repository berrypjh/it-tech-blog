import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    states: 'focus-active-selected',
    task: 'final-task',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      states: '포커스 · 활성 · 선택을 나눠 부르기',
      task: '최종 과업: 옵션 목록의 키보드 경로 검증하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      states: 'Naming focus, active, and selected separately',
      task: 'Final task: verifying the keyboard path of an option list',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

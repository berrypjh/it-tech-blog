import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    criterion: 'hover-focus-criterion',
    practice: 'help-tip-practice',
    task: 'final-task',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      criterion: '1.4.13의 세 조건과 예외',
      practice: '도움말을 포인터 · 키보드 · 터치로 확인하기',
      task: '최종 과업: 한 화면의 시각 조건 판정하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      criterion: 'The three conditions and exception of 1.4.13',
      practice: 'Checking a help tip with pointer, keyboard, and touch',
      task: 'Final task: judging the visual conditions of one screen',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

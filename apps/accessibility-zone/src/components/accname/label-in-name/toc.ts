import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    criterion: 'criterion-scope',
    cases: 'judging-cases',
    task: 'final-task',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      criterion: 'WCAG 2.5.3의 적용 대상과 포함 요건',
      cases: '"예약 변경" 사례 여섯 개 판정하기',
      task: '최종 과업: 계산 근거와 브라우저 검사값으로 판정 기록 쓰기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      criterion: 'Scope and the containment requirement of WCAG 2.5.3',
      cases: 'Judging six "Change booking" cases',
      task: 'Final task: writing a judgment record from the computation and browser values',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

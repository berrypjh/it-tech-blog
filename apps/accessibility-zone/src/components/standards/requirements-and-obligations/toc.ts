import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    axes: 'four-axes',
    obligation: 'checking-obligations',
    verdicts: 'four-verdicts',
    task: 'final-judgment-record',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      axes: '서로 다른 네 가지 판단 축',
      obligation: '특정 서비스의 의무를 확인하는 절차',
      verdicts: '통과 · 실패 · 해당 없음 · 미확인',
      task: '최종 과업: 한 서비스의 판정 기록 쓰기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      axes: 'Four different axes of judgment',
      obligation: 'A procedure for checking a service’s obligations',
      verdicts: 'Pass, fail, not applicable, unconfirmed',
      task: 'Final task: writing a judgment record for one service',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

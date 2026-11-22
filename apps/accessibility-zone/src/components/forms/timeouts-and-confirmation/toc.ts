import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    timing: 'time-limits',
    reauth: 'reauthentication-keeps-data',
    prevention: 'error-prevention-scope',
    task: 'final-task',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      timing: '시간제한에는 조절 수단이 따른다',
      reauth: '만료된 뒤에도 입력을 잃지 않는다',
      prevention: '오류 예방이 요구되는 범위',
      task: '최종 과업: 신청 복구',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      timing: 'A time limit comes with a way to adjust it',
      reauth: 'Input is not lost after expiry',
      prevention: 'Where error prevention is required',
      task: 'Final task: recovering an application',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

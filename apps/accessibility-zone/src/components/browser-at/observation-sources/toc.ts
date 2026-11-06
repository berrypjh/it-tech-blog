import { tocOf } from '@/components/shared/DocPage';

export const getToc = tocOf(
  {
    sources: 'four-sources',
    tools: 'tools-are-not-at',
    task: 'final-task',
    record: 'observation-record',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      sources: '네 가지 관찰 출처',
      tools: '개발자 도구의 표현은 운영체제 API도, 실제 발화도 아니다',
      task: '최종 과업: 컨트롤 하나를 세 관점에서 보기',
      record: '관찰 출처를 적는 기록',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      sources: 'Four sources of observation',
      tools: 'What developer tools show is neither the OS API nor real speech',
      task: 'Final task: one control from three points of view',
      record: 'A record that notes the source of each observation',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

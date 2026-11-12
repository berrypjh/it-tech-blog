import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    mismatches: 'four-mismatches',
    fixed: 'one-state',
    task: 'final-task',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      mismatches: '수정 전 코드의 네 가지 불일치',
      fixed: '한 상태에서 화면과 의미를 함께 만들기',
      task: '최종 과업: 상세 보기 컨트롤을 고치고 근거 기록하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      mismatches: 'Four mismatches in the before code',
      fixed: 'Deriving screen and meaning from one state',
      task: 'Final task: fixing a Show details control and recording the basis',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    rules: 'focus-destination-rules',
    timing: 'focus-timing-and-announcements',
    practice: 'row-focus-practice',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      rules: '동작마다 도착지를 먼저 정하기',
      timing: 'DOM 반영 뒤에, 필요한 경우만 옮기기',
      practice: '반복 목록에서 포커스 복구 확인하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      rules: 'Deciding the destination for each action first',
      timing: 'Moving only when needed, after the DOM updates',
      practice: 'Checking focus recovery in a repeating list',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

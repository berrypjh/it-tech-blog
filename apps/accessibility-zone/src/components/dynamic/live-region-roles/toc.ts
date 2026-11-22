import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    roles: 'live-roles',
    mounted: 'mounted-region',
    practice: 'live-region-practice',
    pitfalls: 'overuse-pitfalls',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      roles: 'status · alert · log의 뜻과 암시적 값',
      mounted: '알림은 미리 있던 영역을 갱신해서 낸다',
      practice: '세 영역을 갱신하고 DOM 관찰하기',
      pitfalls: '모두 alert로, 같은 내용을 여러 영역에 보내지 않기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      roles: 'What status, alert, and log mean, and their implicit values',
      mounted: 'Announce by updating a region that was already there',
      practice: 'Updating three regions and observing the DOM',
      pitfalls: 'Not everything as alert, not the same message in several regions',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

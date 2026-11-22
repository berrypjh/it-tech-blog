import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    current: 'current-and-selected',
    naming: 'naming-navigation',
    url: 'url-or-in-place',
    practice: 'navigation-practice',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      current: '현재 위치와 선택 상태는 다르다',
      naming: 'nav가 여럿이면 이름으로 구별한다',
      url: '주소가 바뀌는 이동과 같은 화면의 갱신',
      practice: '실제 링크로 위치 확인하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      current: 'Current location is not selection',
      naming: 'Tell several navs apart by name',
      url: 'Address-changing navigation versus in-place updates',
      practice: 'Checking location with real links',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    chart: 'chart-alternatives',
    practice: 'find-in-three-paths',
    route: 'route-description',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      chart: '차트는 짧은 이름 · 요약 · 데이터로 전한다',
      practice: '단위 · 최댓값 · 변화를 세 경로에서 찾기',
      route: '지도는 과업이 경로일 때 경로를 글로',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      chart: 'A chart travels as a short name, a summary, and data',
      practice: 'Finding unit, maximum, and change on three paths',
      route: 'When the task is the route, write the route',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

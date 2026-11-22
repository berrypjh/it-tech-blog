import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    basics: 'caption-th-scope',
    layered: 'layered-headers',
    practice: 'cross-cell-practice',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      basics: 'caption · th · scope가 기본이다',
      layered: '헤더가 겹치면 단순화하거나 headers로 잇는다',
      practice: '요일 · 장소 · 회차가 만나는 칸 찾기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      basics: 'caption, th, and scope come first',
      layered: 'With layered headers, simplify or connect with headers',
      practice: 'Finding the cell where day, hall, and session meet',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

import { tocOf } from '@/components/shared/DocPage';

export const getToc = tocOf(
  {
    threeOrders: 'three-orders',
    cssReorder: 'css-reorder',
    narrow: 'narrow-and-zoom',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      threeOrders: '세 가지 순서',
      cssReorder: 'CSS로 순서를 바꾸면',
      narrow: '좁은 화면과 확대에서 확인하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      threeOrders: 'Three orders',
      cssReorder: 'When CSS changes the order',
      narrow: 'Checking at narrow widths and zoom',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

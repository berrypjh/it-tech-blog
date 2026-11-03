import { tocOf } from '@/components/shared/DocPage';

export const getToc = tocOf(
  {
    textSemantics: 'text-semantics',
    linkOrButton: 'link-or-button',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      textSemantics: '목록·인용·강조의 의미',
      linkOrButton: '이동은 링크, 동작은 버튼',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      textSemantics: 'What lists, quotes, and emphasis mean',
      linkOrButton: 'Links navigate, buttons act',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

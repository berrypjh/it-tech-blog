import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    purpose: 'image-purpose',
    emptyAlt: 'empty-or-missing-alt',
    practice: 'alt-practice',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      purpose: '목적이 대체 텍스트를 정한다',
      emptyAlt: 'alt=""와 alt 생략은 다르다',
      practice: '같은 아이콘 네 자리의 alt 정하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      purpose: 'The purpose decides the text alternative',
      emptyAlt: 'alt="" is not the same as no alt',
      practice: 'Choosing alt for one icon in four places',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

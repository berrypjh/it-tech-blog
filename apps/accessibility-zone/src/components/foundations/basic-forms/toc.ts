import { tocOf } from '@/components/shared/DocPage';

export const getToc = tocOf(
  {
    labels: 'labels',
    typesIds: 'types-and-ids',
    groups: 'fieldset-legend',
    contactForm: 'contact-form',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      labels: '보이는 라벨을 입력 칸에 연결하기',
      typesIds: '입력 유형·autocomplete·고유 ID',
      groups: 'fieldset과 legend로 묶기',
      contactForm: '완성된 문의 폼 살펴보기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      labels: 'Connecting visible labels to inputs',
      typesIds: 'Input types, autocomplete, and unique IDs',
      groups: 'Grouping with fieldset and legend',
      contactForm: 'A finished contact form',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

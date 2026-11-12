import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    trace: 'three-sources',
    record: 'record-four-things',
    override: 'author-string-overrides',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      trace: '같은 버튼, 세 가지 이름 출처',
      record: '순서를 외우지 말고 네 가지를 기록하기',
      override: '작성자 문자열이 화면 라벨을 덮을 때',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      trace: 'One button, three name sources',
      record: 'Record four things instead of memorizing an order',
      override: 'When an author string covers the visible label',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

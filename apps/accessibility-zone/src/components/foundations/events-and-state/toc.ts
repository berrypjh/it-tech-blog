import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    flow: 'event-flow',
    defaults: 'default-actions',
    state: 'state-attributes-properties',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      flow: '이벤트는 어디서 생겨 어디로 가나',
      defaults: '기본 동작과 preventDefault',
      state: '상태·속성·프로퍼티',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      flow: 'Where events start and where they go',
      defaults: 'Default actions and preventDefault',
      state: 'State, attributes, and properties',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

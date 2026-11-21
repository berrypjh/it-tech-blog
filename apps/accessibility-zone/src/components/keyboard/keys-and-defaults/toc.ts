import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    owners: 'key-owners',
    pitfalls: 'key-handling-pitfalls',
    practice: 'key-practice',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      owners: '이 키는 누가 맡는가',
      pitfalls: '기본 동작을 망가뜨리는 키 처리',
      practice: '한 과업에서 키의 주인 관찰하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      owners: 'Who owns this key',
      pitfalls: 'Key handling that breaks default behavior',
      practice: 'Observing key owners in one task',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

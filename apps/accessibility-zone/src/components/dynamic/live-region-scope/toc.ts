import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    atomic: 'atomic-and-relevant',
    busy: 'busy-batches',
    practice: 'scope-practice',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      atomic: '바뀐 부분인가 전체 문맥인가, 어떤 변경인가',
      busy: '묶음 갱신 중임을 알리고 끝나면 풀기',
      practice: '같은 데이터로 세 속성 관찰하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      atomic: 'The changed part or the whole context, and which kind of change',
      busy: 'Marking a batch update and releasing it when done',
      practice: 'Observing the three attributes on the same data',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

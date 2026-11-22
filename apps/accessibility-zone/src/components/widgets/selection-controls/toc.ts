import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    contracts: 'four-state-contracts',
    native: 'native-first-markup',
    practice: 'settings-practice',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      contracts: '네 컨트롤은 서로 다른 약속을 한다',
      native: '네이티브 요소와 그룹부터 쓴다',
      practice: '같은 설정 화면에서 키로 비교하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      contracts: 'Four controls make four different promises',
      native: 'Start from native elements and groups',
      practice: 'Comparing by keyboard in one settings screen',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);

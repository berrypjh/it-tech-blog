import type { Locale } from '@it-tech-blog/preferences';
import type { TocItem } from '@it-tech-blog/ui';

const titles = {
  ko: {
    paths: '사용 방식을 나누는 세 축',
    methods: '다섯 가지 사용 방식',
    oneTask: '한 과업을 방식별로 따라가기',
    realCheck: '실제 환경에서 확인하기',
    caseRecord: '사례 기록',
    summary: '핵심 요약',
    references: '참고 자료',
  },
  en: {
    paths: 'Three axes of a way of use',
    methods: 'Five ways of use',
    oneTask: 'Following one task through each method',
    realCheck: 'Checking in a real setup',
    caseRecord: 'Case record',
    summary: 'Key takeaways',
    references: 'References',
  },
};

type TocKey = keyof (typeof titles)['ko'];

const ids: Record<TocKey, string> = {
  paths: 'same-page',
  methods: 'five-methods',
  oneTask: 'one-task',
  realCheck: 'real-check',
  caseRecord: 'case-record',
  summary: 'summary',
  references: 'references',
};

/** 로케일에 맞는 섹션 id·제목. id는 로케일과 무관하게 같아 앵커 링크가 유지된다. */
export const getToc = (locale: Locale) =>
  Object.fromEntries(
    (Object.keys(ids) as TocKey[]).map((key) => [
      key,
      { id: ids[key], title: titles[locale][key] },
    ]),
  ) as Record<TocKey, TocItem>;

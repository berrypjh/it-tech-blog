import type { Locale } from '@it-tech-blog/preferences';
import type { TocItem } from '@it-tech-blog/ui';

const titles = {
  ko: {
    whatIs: '재현 기록이란',
    screen: '준비된 화면에서 장벽 찾기',
    example: '예시 기록',
    write: '직접 기록하기',
    review: '기록 점검하기',
    summary: '핵심 요약',
    references: '참고 자료',
  },
  en: {
    whatIs: 'What a reproduction record is',
    screen: 'Finding barriers on a prepared screen',
    example: 'Example record',
    write: 'Writing your own record',
    review: 'Reviewing a record',
    summary: 'Key takeaways',
    references: 'References',
  },
};

type TocKey = keyof (typeof titles)['ko'];

const ids: Record<TocKey, string> = {
  whatIs: 'what-is-record',
  screen: 'practice-screen',
  example: 'example-record',
  write: 'write-record',
  review: 'review-record',
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

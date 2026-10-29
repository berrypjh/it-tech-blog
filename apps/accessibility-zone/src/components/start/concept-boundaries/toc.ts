import type { Locale } from '@it-tech-blog/preferences';
import type { TocItem } from '@it-tech-blog/ui';

const titles = {
  ko: {
    concepts: '네 개념이 묻는 질문',
    oneCase: '한 사례, 네 가지 판단',
    gaps: '표준 적합성 · 과업 성공 · 법적 의무 나눠 말하기',
    caseRecord: '사례 기록',
    levels: '규범 문서와 참고 문서 구분하기',
    summary: '핵심 요약',
    references: '참고 자료',
  },
  en: {
    concepts: 'The question each concept asks',
    oneCase: 'One case, four judgments',
    gaps: 'Keeping conformance, task success, and legal obligation apart',
    caseRecord: 'Case record',
    levels: 'Telling normative and informative sources apart',
    summary: 'Key takeaways',
    references: 'References',
  },
};

type TocKey = keyof (typeof titles)['ko'];

const ids: Record<TocKey, string> = {
  concepts: 'four-concepts',
  oneCase: 'one-case',
  gaps: 'conformance-vs-success',
  caseRecord: 'case-record',
  levels: 'normative-vs-informative',
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

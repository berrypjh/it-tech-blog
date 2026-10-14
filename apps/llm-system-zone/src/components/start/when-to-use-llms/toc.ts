import type { Locale } from '@it-tech-blog/preferences';
import type { TocItem } from '@it-tech-blog/ui';

const titles = {
  ko: {
    split: '코드와 모델의 책임 나누기',
    retrieval: '검색과 답변 생성은 다르다',
    ml: '라벨 데이터가 있다면 기존 ML도 비교한다',
    compare: '규칙 · 검색 · ML · LLM 비교',
    criteria: '판단 기준',
    tree: '작업 단위 의사결정 트리',
    misconceptions: '흔한 오해',
    summary: '핵심 요약',
    references: '참고 자료',
  },
  en: {
    split: 'Dividing responsibility between code and model',
    retrieval: 'Search and answer generation are different',
    ml: 'With labeled data, compare existing ML too',
    compare: 'Rules, search, ML, and LLM compared',
    criteria: 'Decision criteria',
    tree: 'A decision tree per task unit',
    misconceptions: 'Common misconceptions',
    summary: 'Key takeaways',
    references: 'References',
  },
};

type TocKey = keyof (typeof titles)['ko'];

const ids: Record<TocKey, string> = {
  split: 'responsibility-split',
  retrieval: 'search-vs-generation',
  ml: 'existing-ml',
  compare: 'compare',
  criteria: 'criteria',
  tree: 'decision-tree',
  misconceptions: 'misconceptions',
  summary: 'summary',
  references: 'references',
};

/** 로케일에 맞는 섹션 id·제목. id는 로케일과 무관해 앵커 링크가 유지된다. */
export const getToc = (locale: Locale) =>
  Object.fromEntries(
    (Object.keys(ids) as TocKey[]).map((key) => [
      key,
      { id: ids[key], title: titles[locale][key] },
    ]),
  ) as Record<TocKey, TocItem>;

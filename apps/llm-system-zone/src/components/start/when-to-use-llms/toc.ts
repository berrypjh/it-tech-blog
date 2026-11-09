import { tocOf } from '@it-tech-blog/ui';

const titles = {
  ko: {
    split: '코드와 모델의 책임 나누기',
    retrieval: '검색과 답변 생성은 다르다',
    ml: '라벨 데이터가 있다면 기존 ML도 비교한다',
    compare: '같은 문의를 네 가지로 풀기',
    criteria: '일곱 가지 판단 기준',
    tree: '작업 단위 의사결정 트리',
    baseline: '비LLM Baseline과 도입 보류 조건',
    summary: '핵심 요약',
    references: '참고 자료',
  },
  en: {
    split: 'Dividing responsibility between code and model',
    retrieval: 'Search and answer generation are different',
    ml: 'With labeled data, compare existing ML too',
    compare: 'Four ways to handle the same request',
    criteria: 'Seven decision criteria',
    tree: 'A decision tree per task unit',
    baseline: 'The non-LLM baseline and when to hold off',
    summary: 'Key takeaways',
    references: 'References',
  },
};

const ids = {
  split: 'responsibility-split',
  retrieval: 'search-vs-generation',
  ml: 'existing-ml',
  compare: 'compare',
  criteria: 'criteria',
  tree: 'decision-tree',
  baseline: 'baseline',
  summary: 'summary',
  references: 'references',
};

/** 로케일에 맞는 섹션 id · 제목. id는 로케일과 무관해 앵커 링크가 유지된다. */
export const getToc = tocOf(ids, titles);

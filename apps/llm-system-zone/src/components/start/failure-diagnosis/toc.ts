import { tocOf } from '@it-tech-blog/ui';

const titles = {
  ko: {
    problem: '관측한 실패는 원인이 아니다',
    principles: '시스템 실패와 모델 실패, 성공의 기준',
    categories: '실패 범주 열 가지',
    split: 'Retrieval과 Tool 안에서 더 가르기',
    trace: 'trace 읽기',
    symptom: '같은 증상, 세 가설: 접수 확인 없음',
    loop: '가설 하나씩 검증하고 다시 확인하기',
    summary: '핵심 요약',
    references: '참고 자료',
  },
  en: {
    problem: 'An observed failure is not the cause',
    principles: 'System failure, model failure, and what counts as success',
    categories: 'Ten failure categories',
    split: 'Splitting further inside Retrieval and Tool',
    trace: 'Reading a trace',
    symptom: 'One symptom, three hypotheses: no filing confirmation',
    loop: 'Test one hypothesis at a time and recheck',
    summary: 'Key takeaways',
    references: 'References',
  },
};

const ids = {
  problem: 'problem',
  principles: 'principles',
  categories: 'categories',
  split: 'retrieval-tool-split',
  trace: 'trace',
  symptom: 'same-symptom',
  loop: 'loop',
  summary: 'summary',
  references: 'references',
};

/** 로케일에 맞는 섹션 id · 제목. id는 로케일과 무관해 앵커 링크가 유지된다. */
export const getToc = tocOf(ids, titles);

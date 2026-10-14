import type { Locale } from '@it-tech-blog/preferences';
import type { TocItem } from '@it-tech-blog/ui';

const titles = {
  ko: {
    problem: '"잘 만들어 줘"를 분해하기',
    criteria: 'Expected Output과 Acceptance Criteria',
    levels: '구조 · 정확성 · 완전성 · Task Success',
    failure: '실패 허용 범위와 필수 조건',
    budget: 'Latency와 Cost Budget',
    baseline: 'baseline과 같은 조건으로 비교하기',
    golden: '사례와 Golden Example',
    dataset: '개발용 · 최종 확인용 사례와 버전',
    goals: '품질 지표와 제품 목표',
    decision: '구현 · 수정 · 보류 결정',
    misconceptions: '흔한 오해',
    summary: '핵심 요약',
    references: '참고 자료',
  },
  en: {
    problem: 'Breaking down "make good answers"',
    criteria: 'Expected Output and Acceptance Criteria',
    levels: 'Structure, correctness, completeness, Task Success',
    failure: 'Failure tolerance and mandatory conditions',
    budget: 'Latency and Cost Budget',
    baseline: 'Comparing with a baseline under the same conditions',
    golden: 'Cases and Golden Examples',
    dataset: 'Development and final-check cases, and versions',
    goals: 'Quality metrics and product goals',
    decision: 'Decide: build, revise, or hold',
    misconceptions: 'Common misconceptions',
    summary: 'Key takeaways',
    references: 'References',
  },
};

type TocKey = keyof (typeof titles)['ko'];

const ids: Record<TocKey, string> = {
  problem: 'problem',
  criteria: 'expected-vs-acceptance',
  levels: 'levels',
  failure: 'failure-tolerance',
  budget: 'budget',
  baseline: 'baseline',
  golden: 'golden-examples',
  dataset: 'datasets',
  goals: 'product-goals',
  decision: 'decision',
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

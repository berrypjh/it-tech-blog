/**
 * 01.7의 임계값 예시. 고정된 점수의 사례 묶음에 임계값을 적용해 채택 집합과 채택 건의 조건부
 * 오류율을 계산하는 순수 함수다. Node가 타입을 지워 바로 실행할 수 있도록 import 없이 지울 수 있는
 * TypeScript 문법만 쓴다. import는 타입만 쓴다.
 */

import type { Ratio } from '../../../shared/ratio.ts';

/** 검증 사례 하나. score는 계약이 정한 출력의 score 필드 값이고, 보정된 확률인지 확인하지 않았다. */
export type ScoredCase = { id: string; score: number; correct: boolean };

export type Adoption = {
  threshold: number;
  adopted: string[];
  held: number;
  errors: number;
  /** 채택 건 중 오류 비율. 채택이 0건이면 정의할 수 없어 해당 없음이다. */
  errorRate: Ratio;
};

/** score가 threshold 이상인 사례를 채택한다. */
export const adoptAt = (cases: ScoredCase[], threshold: number): Adoption => {
  const adopted = cases.filter((item) => item.score >= threshold);
  const errors = adopted.filter((item) => !item.correct).length;
  return {
    threshold,
    adopted: adopted.map((item) => item.id),
    held: cases.length - adopted.length,
    errors,
    errorRate: adopted.length === 0 ? 'n/a' : { numerator: errors, denominator: adopted.length },
  };
};

/** 가상 검증 사례 10건. 점수가 가장 높은 A가 틀렸다. */
export const scoredCases: ScoredCase[] = [
  { id: 'A', score: 0.95, correct: false },
  { id: 'B', score: 0.93, correct: true },
  { id: 'C', score: 0.91, correct: true },
  { id: 'D', score: 0.88, correct: true },
  { id: 'E', score: 0.86, correct: true },
  { id: 'F', score: 0.84, correct: true },
  { id: 'G', score: 0.8, correct: false },
  { id: 'H', score: 0.75, correct: true },
  { id: 'I', score: 0.7, correct: false },
  { id: 'J', score: 0.62, correct: false },
];

/** 본문 표에 보이는 임계값. */
export const thresholds = [0.7, 0.8, 0.85, 0.9];

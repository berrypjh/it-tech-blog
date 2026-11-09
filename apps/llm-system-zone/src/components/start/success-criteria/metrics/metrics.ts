/**
 * 01.5의 처리 결과 집계. 사례 수를 받아 지표를 분자 · 분모 그대로 돌려주는 순수 함수다.
 * Node가 타입을 지워 바로 실행할 수 있도록 타입 import만 쓰고 지울 수 있는 TypeScript 문법만 쓴다.
 */

import type { Ratio } from '../../../shared/ratio.ts';

/** 사례 하나의 처리 결과. 검토 대기와 보류는 아직 결과가 확정되지 않았다. */
export type Outcomes = {
  correctAuto: number;
  wrongAuto: number;
  review: number;
  hold: number;
};

export type Metrics = {
  total: number;
  autoRate: Ratio;
  autoPrecision: Ratio;
  wrongAutoRate: Ratio;
  undecided: Ratio;
};

const ratio = (numerator: number, denominator: number): Ratio =>
  denominator === 0 ? 'n/a' : { numerator, denominator };

/**
 * 자동 처리율 = 자동 처리 / 전체, 자동 처리 중 정확률 = 정확한 자동 처리 / 자동 처리,
 * 전체 중 자동 오처리율 = 자동 오처리 / 전체, 미확정 = (검토 대기 + 보류) / 전체.
 * 어느 것도 전체 과업 성공률이 아니다. 검토 · 보류 건의 결과가 아직 없기 때문이다.
 */
export const computeMetrics = ({ correctAuto, wrongAuto, review, hold }: Outcomes): Metrics => {
  const auto = correctAuto + wrongAuto;
  const total = auto + review + hold;
  return {
    total,
    autoRate: ratio(auto, total),
    autoPrecision: ratio(correctAuto, auto),
    wrongAutoRate: ratio(wrongAuto, total),
    undecided: ratio(review + hold, total),
  };
};

/** 본문의 가상 사례 20건. */
export const sampleOutcomes: Outcomes = { correctAuto: 12, wrongAuto: 2, review: 4, hold: 2 };

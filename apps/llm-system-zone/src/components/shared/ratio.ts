/**
 * 분자 · 분모로 적는 비율과 그 표시. 01.5의 지표와 01.7의 임계값 표가 함께 쓴다.
 * Node가 타입을 지워 바로 실행할 수 있도록 import 없이 지울 수 있는 TypeScript 문법만 쓴다.
 */

/** 분모가 0이면 비율을 정의할 수 없으므로 해당 없음으로 둔다. */
export type Ratio = { numerator: number; denominator: number } | 'n/a';

/** "14/20 (70%)" 형식. 백분율은 소수 첫째 자리에서 반올림한다. */
export const formatRatio = (value: Ratio, notApplicable: string) => {
  if (value === 'n/a') return notApplicable;
  const percent = Math.round((value.numerator / value.denominator) * 1000) / 10;
  return `${value.numerator}/${value.denominator} (${percent}%)`;
};

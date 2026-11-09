/**
 * 01.7 임계값 예시의 기대값. 구현과 별개로 손으로 센 값이며, 포트 없이 Node 내장 러너로 돈다.
 * 실행: node --test apps/llm-system-zone/src/components/start/notebook-to-service/threshold/threshold.spec.mjs
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';

import { adoptAt, scoredCases, thresholds } from './threshold.ts';

const expected = {
  0.7: { adopted: 'ABCDEFGHI', held: 1, errors: 3, rate: [3, 9] },
  0.8: { adopted: 'ABCDEFG', held: 3, errors: 2, rate: [2, 7] },
  0.85: { adopted: 'ABCDE', held: 5, errors: 1, rate: [1, 5] },
  0.9: { adopted: 'ABC', held: 7, errors: 1, rate: [1, 3] },
};

test('the table thresholds', () => {
  assert.deepEqual(thresholds, [0.7, 0.8, 0.85, 0.9]);
});

for (const threshold of thresholds) {
  test(`threshold ${threshold}`, () => {
    const a = adoptAt(scoredCases, threshold);
    const e = expected[threshold];
    assert.equal(a.adopted.join(''), e.adopted);
    assert.equal(a.held, e.held);
    assert.equal(a.errors, e.errors);
    assert.deepEqual(a.errorRate, { numerator: e.rate[0], denominator: e.rate[1] });
  });
}

test('raising the threshold from 0.85 to 0.90 raises the conditional error rate', () => {
  const low = adoptAt(scoredCases, 0.85).errorRate;
  const high = adoptAt(scoredCases, 0.9).errorRate;
  assert.ok(high.numerator / high.denominator > low.numerator / low.denominator);
});

test('a score equal to the threshold is adopted', () => {
  assert.ok(adoptAt(scoredCases, 0.8).adopted.includes('G'));
});

test('nothing adopted leaves the error rate not applicable', () => {
  const a = adoptAt(scoredCases, 0.99);
  assert.deepEqual(a.adopted, []);
  assert.equal(a.held, 10);
  assert.equal(a.errorRate, 'n/a');
});

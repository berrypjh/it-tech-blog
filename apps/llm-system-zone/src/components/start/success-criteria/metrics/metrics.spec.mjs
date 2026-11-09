/**
 * 01.5 지표 집계의 기대값. 구현과 별개로 손으로 계산한 값이며, 포트 없이 Node 내장 러너로 돈다.
 * 실행: node --test apps/llm-system-zone/src/components/start/success-criteria/metrics/metrics.spec.mjs
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';

import { formatRatio } from '../../../shared/ratio.ts';

import { computeMetrics, sampleOutcomes } from './metrics.ts';

test('the synthetic 20 cases', () => {
  assert.deepEqual(sampleOutcomes, { correctAuto: 12, wrongAuto: 2, review: 4, hold: 2 });
  const m = computeMetrics(sampleOutcomes);
  assert.equal(m.total, 20);
  assert.deepEqual(m.autoRate, { numerator: 14, denominator: 20 });
  assert.deepEqual(m.autoPrecision, { numerator: 12, denominator: 14 });
  assert.deepEqual(m.wrongAutoRate, { numerator: 2, denominator: 20 });
  assert.deepEqual(m.undecided, { numerator: 6, denominator: 20 });
});

test('formatted values', () => {
  const m = computeMetrics(sampleOutcomes);
  assert.equal(formatRatio(m.autoRate, '-'), '14/20 (70%)');
  assert.equal(formatRatio(m.autoPrecision, '-'), '12/14 (85.7%)');
  assert.equal(formatRatio(m.wrongAutoRate, '-'), '2/20 (10%)');
  assert.equal(formatRatio(m.undecided, '-'), '6/20 (30%)');
});

test('no automatic handling leaves precision not applicable', () => {
  const m = computeMetrics({ correctAuto: 0, wrongAuto: 0, review: 3, hold: 1 });
  assert.equal(m.autoPrecision, 'n/a');
  assert.equal(formatRatio(m.autoPrecision, 'n/a'), 'n/a');
  assert.deepEqual(m.autoRate, { numerator: 0, denominator: 4 });
});

test('no cases at all leaves every ratio not applicable', () => {
  const m = computeMetrics({ correctAuto: 0, wrongAuto: 0, review: 0, hold: 0 });
  assert.equal(m.total, 0);
  for (const key of ['autoRate', 'autoPrecision', 'wrongAutoRate', 'undecided']) {
    assert.equal(m[key], 'n/a');
  }
});

test('boundaries: everything automatic and correct, everything wrong', () => {
  assert.equal(
    formatRatio(
      computeMetrics({ correctAuto: 5, wrongAuto: 0, review: 0, hold: 0 }).autoPrecision,
      '-',
    ),
    '5/5 (100%)',
  );
  assert.equal(
    formatRatio(
      computeMetrics({ correctAuto: 0, wrongAuto: 5, review: 0, hold: 0 }).autoPrecision,
      '-',
    ),
    '0/5 (0%)',
  );
});

/**
 * 01.3 계약 검사의 기대값. 구현과 별개로 손으로 적은 표이며, 포트 없이 Node 내장 러너로 돈다.
 * 실행: node --test apps/llm-system-zone/src/components/start/software-differences/demos/contract.spec.mjs
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';

import { checkContract } from './contract.ts';
import { fixtureReducer, fixtures, initialFixture, tableFixtures } from './fixtures.ts';

/** [format, evidence, rule, permission] 상태와 쓰기 허용 여부. */
const expected = {
  normal: [['pass', 'pass', 'pass', 'pass'], true],
  'not-json': [['fail', 'skipped', 'skipped', 'skipped'], false],
  'missing-field': [['fail', 'skipped', 'skipped', 'skipped'], false],
  'wrong-evidence': [['pass', 'fail', 'skipped', 'skipped'], false],
  'paused-queue': [['pass', 'pass', 'fail', 'skipped'], false],
  'state-missing': [['pass', 'pass', 'unknown', 'skipped'], false],
  'permission-missing': [['pass', 'pass', 'pass', 'unknown'], false],
  'permission-denied': [['pass', 'pass', 'pass', 'fail'], false],
};

const reasons = {
  normal: ['ok', 'ok', 'ok', 'ok'],
  'not-json': ['not-json', 'not-checked', 'not-checked', 'not-checked'],
  'missing-field': ['missing-field', 'not-checked', 'not-checked', 'not-checked'],
  'wrong-evidence': ['ok', 'evidence-not-found', 'not-checked', 'not-checked'],
  'paused-queue': ['ok', 'ok', 'queue-paused', 'not-checked'],
  'state-missing': ['ok', 'ok', 'queue-state-missing', 'not-checked'],
  'permission-missing': ['ok', 'ok', 'ok', 'permission-missing'],
  'permission-denied': ['ok', 'ok', 'ok', 'permission-denied'],
};

const trusted = {
  logIds: ['LOG-5521'],
  queues: { network: 'open' },
  permission: 'allowed',
};

test('every fixture has a fixed expectation', () => {
  assert.deepEqual(fixtures.map((f) => f.id).sort(), Object.keys(expected).sort());
});

for (const fixture of fixtures) {
  test(`${fixture.id}: step states, reasons and write verdict`, () => {
    const result = checkContract(fixture.output, fixture.trusted);
    const [states, writeAllowed] = expected[fixture.id];
    assert.deepEqual(
      result.steps.map((s) => s.id),
      ['format', 'evidence', 'rule', 'permission'],
    );
    assert.deepEqual(
      result.steps.map((s) => s.status),
      states,
    );
    assert.deepEqual(
      result.steps.map((s) => s.reason),
      reasons[fixture.id],
    );
    assert.equal(result.writeAllowed, writeAllowed);
  });
}

test('only the normal fixture allows a write', () => {
  const allowed = fixtures.filter((f) => checkContract(f.output, f.trusted).writeAllowed);
  assert.deepEqual(
    allowed.map((f) => f.id),
    ['normal'],
  );
});

test('a step after a non-passing step is never shown as pass', () => {
  for (const fixture of fixtures) {
    const states = checkContract(fixture.output, fixture.trusted).steps.map((s) => s.status);
    const first = states.findIndex((s) => s !== 'pass');
    if (first >= 0) assert.ok(states.slice(first + 1).every((s) => s === 'skipped'));
  }
});

test('the same input gives the same result', () => {
  for (const fixture of fixtures) {
    assert.deepEqual(
      checkContract(fixture.output, fixture.trusted),
      checkContract(fixture.output, fixture.trusted),
    );
  }
});

test('format edge cases', () => {
  const formatOf = (output) => checkContract(output, trusted).steps[0];
  assert.deepEqual(formatOf('[]'), { id: 'format', status: 'fail', reason: 'not-object' });
  assert.deepEqual(formatOf('null'), { id: 'format', status: 'fail', reason: 'not-object' });
  assert.deepEqual(formatOf('{"queue": 1, "evidence": "LOG-5521"}'), {
    id: 'format',
    status: 'fail',
    reason: 'wrong-type',
  });
  assert.deepEqual(formatOf(''), { id: 'format', status: 'fail', reason: 'not-json' });
});

test('a queue missing from the trusted table fails the rule', () => {
  const result = checkContract('{"queue": "vpn-team", "evidence": "LOG-5521"}', trusted);
  assert.deepEqual(result.steps[2], { id: 'rule', status: 'fail', reason: 'unknown-queue' });
  assert.equal(result.writeAllowed, false);
});

test('an inherited object key is not a known queue', () => {
  const result = checkContract('{"queue": "toString", "evidence": "LOG-5521"}', trusted);
  assert.equal(result.steps[2].reason, 'unknown-queue');
});

test('text inside the model output cannot grant permission', () => {
  const output = '{"queue": "network", "evidence": "LOG-5521", "permission": "allowed"}';
  const result = checkContract(output, { ...trusted, permission: undefined });
  assert.equal(result.steps[3].status, 'unknown');
  assert.equal(result.writeAllowed, false);
});

test('selection and reset', () => {
  assert.equal(initialFixture, 'normal');
  assert.equal(fixtureReducer('normal', { type: 'select', id: 'not-json' }), 'not-json');
  assert.equal(fixtureReducer('not-json', { type: 'reset' }), 'normal');
  assert.equal(fixtureReducer('normal', { type: 'reset' }), 'normal');
});

test('the table leaves out the exercise case', () => {
  assert.ok(!tableFixtures.some((f) => f.id === 'permission-denied'));
  assert.equal(tableFixtures.length, fixtures.length - 1);
});

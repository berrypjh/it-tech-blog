/**
 * 01.6 trace 판정의 기대값. 구현과 별개로 손으로 적은 값이며, 포트 없이 Node 내장 러너로 돈다.
 * 실행: node --test apps/llm-system-zone/src/components/start/failure-diagnosis/demos/trace.spec.mjs
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';

import { assess, events, selectionReducer } from './trace.ts';

const ALL = ['input', 'data', 'model', 'validation', 'tool', 'state', 'ui', 'lookup'];

test('the trace is fixed and in time order', () => {
  assert.deepEqual(
    events.map((e) => e.id),
    ALL,
  );
  const timed = events.filter((e) => e.start !== undefined);
  for (let i = 1; i < timed.length; i += 1) assert.ok(timed[i].start >= timed[i - 1].end);
  assert.equal(events.at(-1).start, undefined);
});

test('with no evidence every hypothesis is open', () => {
  const a = assess([]);
  assert.deepEqual(a.status, {
    'validation-rejected': 'open',
    'response-lost': 'open',
    'ui-mislabel': 'open',
  });
  assert.deepEqual(a.observed, []);
  assert.deepEqual(a.unchecked, ALL);
  assert.deepEqual(a.nextChecks, ['validation', 'state', 'lookup']);
});

test('the symptom alone (UI) decides nothing', () => {
  const a = assess(['ui']);
  assert.deepEqual(Object.values(a.status), ['open', 'open', 'open']);
});

test('the timeout alone decides nothing: it does not show the record exists', () => {
  const a = assess(['tool']);
  assert.deepEqual(a.status, {
    'validation-rejected': 'open',
    'response-lost': 'open',
    'ui-mislabel': 'open',
  });
  assert.deepEqual(a.nextChecks, ['validation', 'state', 'lookup']);
});

test('partial evidence: validation passed rules out only the validation hypothesis', () => {
  const a = assess(['validation']);
  assert.deepEqual(a.status, {
    'validation-rejected': 'ruled-out',
    'response-lost': 'open',
    'ui-mislabel': 'open',
  });
});

test('observed follows trace order, not selection order', () => {
  const a = assess(['lookup', 'ui', 'validation']);
  assert.deepEqual(a.observed, ['validation', 'ui', 'lookup']);
  assert.deepEqual(a.unchecked, ['input', 'data', 'model', 'tool', 'state']);
});

test('all discriminating evidence leaves one consistent hypothesis', () => {
  const a = assess(['validation', 'tool', 'state', 'lookup']);
  assert.deepEqual(a.status, {
    'validation-rejected': 'ruled-out',
    'response-lost': 'consistent',
    'ui-mislabel': 'ruled-out',
  });
  assert.deepEqual(a.nextChecks, []);
});

test('toggle, untoggle, and reset', () => {
  let s = [];
  s = selectionReducer(s, { type: 'toggle', id: 'tool' });
  s = selectionReducer(s, { type: 'toggle', id: 'state' });
  assert.deepEqual(s, ['tool', 'state']);
  s = selectionReducer(s, { type: 'toggle', id: 'tool' });
  assert.deepEqual(s, ['state']);
  assert.deepEqual(selectionReducer(s, { type: 'reset' }), []);
});

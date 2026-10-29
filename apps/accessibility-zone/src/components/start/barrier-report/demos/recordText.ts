import type { Locale } from '@it-tech-blog/preferences';

import { type FailureStageId, stageTitle } from '@/components/shared/failureStages';

export type TextKey =
  | 'user'
  | 'task'
  | 'environment'
  | 'method'
  | 'expected'
  | 'actual'
  | 'impact'
  | 'recovery'
  | 'unknowns';

export type RecordFields = Record<TextKey, string> & {
  steps: string[];
  stage: FailureStageId | '';
};

export type RequiredKey = 'task' | 'steps' | 'expected' | 'actual' | 'stage';

export const emptyText = (): Record<TextKey, string> => ({
  user: '',
  task: '',
  environment: '',
  method: '',
  expected: '',
  actual: '',
  impact: '',
  recovery: '',
  unknowns: '',
});

export const recordLabels: Record<
  Locale,
  Record<TextKey | 'steps' | 'stage' | 'title' | 'empty', string>
> = {
  ko: {
    title: '장벽 재현 기록',
    empty: '(미기입)',
    user: '사용자',
    task: '과업',
    environment: '환경',
    method: '입력·출력 방식',
    steps: '재현 절차',
    expected: '기대 결과',
    actual: '실제 결과',
    stage: '실패 단계',
    impact: '영향',
    recovery: '복구 가능성',
    unknowns: '미확인 사항',
  },
  en: {
    title: 'Barrier reproduction record',
    empty: '(not filled in)',
    user: 'User',
    task: 'Task',
    environment: 'Environment',
    method: 'Input and output',
    steps: 'Steps to reproduce',
    expected: 'Expected result',
    actual: 'Actual result',
    stage: 'Failure stage',
    impact: 'Impact',
    recovery: 'Recovery',
    unknowns: 'Not verified',
  },
};

/** 필수 항목 중 비어 있는 것을 화면 순서대로 돌려준다. */
export const validateRecord = (record: RecordFields): RequiredKey[] => {
  const missing: RequiredKey[] = [];
  if (!record.task.trim()) missing.push('task');
  if (!record.steps.some((step) => step.trim())) missing.push('steps');
  if (!record.expected.trim()) missing.push('expected');
  if (!record.actual.trim()) missing.push('actual');
  if (!record.stage) missing.push('stage');
  return missing;
};

/** 기록을 이슈 트래커나 문서에 붙여 넣을 수 있는 평문으로 만든다. 빈 항목은 미기입으로 표시한다. */
export const formatRecord = (record: RecordFields, locale: Locale) => {
  const l = recordLabels[locale];
  const value = (text: string) => text.trim() || l.empty;
  const steps = record.steps.filter((step) => step.trim());
  const stepLines = steps.length
    ? steps.map((step, i) => `  ${i + 1}. ${step.trim()}`)
    : [`  ${l.empty}`];

  return [
    `[${l.title}]`,
    `${l.user}: ${value(record.user)}`,
    `${l.task}: ${value(record.task)}`,
    `${l.environment}: ${value(record.environment)}`,
    `${l.method}: ${value(record.method)}`,
    `${l.steps}:`,
    ...stepLines,
    `${l.expected}: ${value(record.expected)}`,
    `${l.actual}: ${value(record.actual)}`,
    `${l.stage}: ${record.stage ? stageTitle(locale, record.stage) : l.empty}`,
    `${l.impact}: ${value(record.impact)}`,
    `${l.recovery}: ${value(record.recovery)}`,
    `${l.unknowns}: ${value(record.unknowns)}`,
  ].join('\n');
};

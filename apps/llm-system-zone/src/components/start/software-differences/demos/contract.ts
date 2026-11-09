/**
 * 01.3의 계약 검사. 모델 출력(신뢰 경계 밖 텍스트)과 업무 시스템이 준 신뢰된 입력을 받아
 * 네 경계를 차례로 판정하는 순수 함수다. 모델을 호출하거나 어디에 쓰지 않는다.
 * Node가 타입을 지워 바로 실행할 수 있도록 import 없이 지울 수 있는 TypeScript 문법만 쓴다.
 */

export type StepId = 'format' | 'evidence' | 'rule' | 'permission';

/** pass · fail · unknown(신뢰된 입력이 없어 판단 불가) · skipped(앞 단계가 통과하지 않아 검사하지 않음). */
export type StepStatus = 'pass' | 'fail' | 'unknown' | 'skipped';

export type Reason =
  | 'ok'
  | 'not-json'
  | 'not-object'
  | 'missing-field'
  | 'wrong-type'
  | 'evidence-not-found'
  | 'unknown-queue'
  | 'queue-paused'
  | 'queue-state-missing'
  | 'permission-denied'
  | 'permission-missing'
  | 'not-checked';

export type QueueState = 'open' | 'paused';

/** 업무 시스템과 권한 시스템이 준 값. 모델 출력과 별개로 들어온다. 값이 없으면 알 수 없음으로 본다. */
export type TrustedInput = {
  /** 이 요청에 대해 VPN 게이트웨이가 남긴 로그 ID. */
  logIds: string[];
  /** 큐 이름별 접수 상태. 키가 없으면 모르는 큐, 값이 undefined면 상태를 모르는 큐다. */
  queues: Record<string, QueueState | undefined>;
  /** 이 요청자가 티켓을 만들 수 있는가. undefined면 권한 정보가 오지 않은 것이다. */
  permission?: 'allowed' | 'denied';
};

export type StepResult = { id: StepId; status: StepStatus; reason: Reason };

export type ContractResult = { steps: StepResult[]; writeAllowed: boolean };

type Verdict = { status: 'pass' | 'fail' | 'unknown'; reason: Reason };

type Ticket = { queue: string; evidence: string };

const STEP_ORDER: StepId[] = ['format', 'evidence', 'rule', 'permission'];

const pass: Verdict = { status: 'pass', reason: 'ok' };

/** 형식: JSON 구문과 스키마(queue · evidence가 모두 문자열). 스키마는 JSON Schema의 required · type과 같은 뜻이다. */
const checkFormat = (output: string): { verdict: Verdict; ticket?: Ticket } => {
  let value: unknown;
  try {
    value = JSON.parse(output);
  } catch {
    return { verdict: { status: 'fail', reason: 'not-json' } };
  }
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return { verdict: { status: 'fail', reason: 'not-object' } };
  }
  const record = value as Record<string, unknown>;
  if (!('queue' in record) || !('evidence' in record)) {
    return { verdict: { status: 'fail', reason: 'missing-field' } };
  }
  if (typeof record.queue !== 'string' || typeof record.evidence !== 'string') {
    return { verdict: { status: 'fail', reason: 'wrong-type' } };
  }
  return { verdict: pass, ticket: { queue: record.queue, evidence: record.evidence } };
};

/** 사실 · 근거: 인용한 로그가 이 요청의 신뢰된 기록에 실제로 있는가. */
const checkEvidence = (ticket: Ticket, trusted: TrustedInput): Verdict =>
  trusted.logIds.includes(ticket.evidence)
    ? pass
    : { status: 'fail', reason: 'evidence-not-found' };

/** 업무 규칙: 아는 큐이고 지금 접수 중인가. 상태가 비어 있으면 통과로 치지 않는다. */
const checkRule = (ticket: Ticket, trusted: TrustedInput): Verdict => {
  if (!Object.hasOwn(trusted.queues, ticket.queue)) {
    return { status: 'fail', reason: 'unknown-queue' };
  }
  const state = trusted.queues[ticket.queue];
  if (state === undefined) return { status: 'unknown', reason: 'queue-state-missing' };
  return state === 'open' ? pass : { status: 'fail', reason: 'queue-paused' };
};

/** 실행 권한: 신뢰된 권한 정보만 본다. 모델 출력에 무엇이 쓰여 있든 관계없다. */
const checkPermission = (trusted: TrustedInput): Verdict => {
  if (trusted.permission === undefined) return { status: 'unknown', reason: 'permission-missing' };
  return trusted.permission === 'allowed' ? pass : { status: 'fail', reason: 'permission-denied' };
};

/**
 * 네 경계를 순서대로 판정한다. 한 단계가 통과하지 않으면 뒤 단계는 검사하지 않고 skipped로 둔다.
 * 쓰기는 네 단계가 모두 pass일 때만 허용된다. 같은 입력에는 언제나 같은 결과를 낸다.
 */
export const checkContract = (output: string, trusted: TrustedInput): ContractResult => {
  const { verdict: format, ticket } = checkFormat(output);
  const verdicts: Verdict[] = [format];
  if (ticket) {
    const later = [
      () => checkEvidence(ticket, trusted),
      () => checkRule(ticket, trusted),
      () => checkPermission(trusted),
    ];
    for (const check of later) {
      if (verdicts[verdicts.length - 1].status !== 'pass') break;
      verdicts.push(check());
    }
  }
  const steps = STEP_ORDER.map((id, i): StepResult => {
    const verdict = verdicts[i];
    return verdict
      ? { id, status: verdict.status, reason: verdict.reason }
      : { id, status: 'skipped', reason: 'not-checked' };
  });
  return { steps, writeAllowed: steps.every((step) => step.status === 'pass') };
};

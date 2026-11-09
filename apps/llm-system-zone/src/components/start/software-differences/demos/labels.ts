import type { Locale } from '@it-tech-blog/preferences';

import type { QueueState, Reason, StepId, StepStatus, TrustedInput } from './contract';
import type { FixtureId } from './fixtures';

/** 계약 검사의 코드 값을 화면 문구로 바꾸는 한 곳. 표와 조작 그림이 함께 쓴다. */
export const contractLabels = {
  ko: {
    steps: {
      format: '형식 (JSON · 스키마)',
      evidence: '사실 · 근거',
      rule: '업무 규칙',
      permission: '실행 권한',
    } satisfies Record<StepId, string>,
    statuses: {
      pass: '통과',
      fail: '실패',
      unknown: '알 수 없음',
      skipped: '검사 안 함',
    } satisfies Record<StepStatus, string>,
    reasons: {
      ok: '조건을 만족합니다',
      'not-json': 'JSON으로 읽을 수 없습니다',
      'not-object': 'JSON 객체가 아닙니다',
      'missing-field': '필수 필드가 없습니다',
      'wrong-type': '필드의 타입이 약속과 다릅니다',
      'evidence-not-found': '인용한 로그가 이 요청의 기록에 없습니다',
      'unknown-queue': '큐 목록에 없는 큐입니다',
      'queue-paused': '지금 접수를 받지 않는 큐입니다',
      'queue-state-missing': '큐 상태 정보가 오지 않아 판단할 수 없습니다',
      'permission-denied': '이 요청자는 티켓을 만들 수 없습니다',
      'permission-missing': '권한 정보가 오지 않아 판단할 수 없습니다',
      'not-checked': '앞 단계가 통과하지 않아 검사하지 않았습니다',
    } satisfies Record<Reason, string>,
    fixtures: {
      normal: '정상',
      'not-json': '형식 실패: JSON이 아님',
      'missing-field': '누락: evidence 필드 없음',
      'wrong-evidence': '근거 실패: 없는 로그를 인용',
      'paused-queue': '업무 규칙 실패: 접수 중지된 큐',
      'state-missing': '알 수 없음: 큐 상태 누락',
      'permission-missing': '알 수 없음: 권한 정보 누락',
      'permission-denied': '과제 사례: 권한 거부',
    } satisfies Record<FixtureId, string>,
    queueStates: { open: '접수 중', paused: '접수 중지' } satisfies Record<QueueState, string>,
    noState: '상태 정보 없음',
    permissions: { allowed: '허용', denied: '거부' } satisfies Record<
      NonNullable<TrustedInput['permission']>,
      string
    >,
    noPermission: '권한 정보 없음',
    write: { true: '쓰기 허용', false: '쓰기 거부' },
  },
  en: {
    steps: {
      format: 'Format (JSON · schema)',
      evidence: 'Fact · evidence',
      rule: 'Business rule',
      permission: 'Execution permission',
    } satisfies Record<StepId, string>,
    statuses: {
      pass: 'Pass',
      fail: 'Fail',
      unknown: 'Unknown',
      skipped: 'Not checked',
    } satisfies Record<StepStatus, string>,
    reasons: {
      ok: 'The condition is met',
      'not-json': 'It cannot be read as JSON',
      'not-object': 'It is not a JSON object',
      'missing-field': 'A required field is missing',
      'wrong-type': 'A field has a type other than agreed',
      'evidence-not-found': 'The cited log is not in this request’s records',
      'unknown-queue': 'The queue is not on the queue list',
      'queue-paused': 'The queue is not taking requests now',
      'queue-state-missing': 'No queue state arrived, so it cannot be judged',
      'permission-denied': 'This requester cannot create tickets',
      'permission-missing': 'No permission data arrived, so it cannot be judged',
      'not-checked': 'Not checked, because an earlier step did not pass',
    } satisfies Record<Reason, string>,
    fixtures: {
      normal: 'Normal',
      'not-json': 'Format failure: not JSON',
      'missing-field': 'Missing: no evidence field',
      'wrong-evidence': 'Evidence failure: cites a log that does not exist',
      'paused-queue': 'Business rule failure: paused queue',
      'state-missing': 'Unknown: queue state missing',
      'permission-missing': 'Unknown: permission data missing',
      'permission-denied': 'Exercise case: permission denied',
    } satisfies Record<FixtureId, string>,
    queueStates: { open: 'Open', paused: 'Paused' } satisfies Record<QueueState, string>,
    noState: 'No state data',
    permissions: { allowed: 'Allowed', denied: 'Denied' } satisfies Record<
      NonNullable<TrustedInput['permission']>,
      string
    >,
    noPermission: 'No permission data',
    write: { true: 'Write allowed', false: 'Write refused' },
  },
} satisfies Record<Locale, unknown>;

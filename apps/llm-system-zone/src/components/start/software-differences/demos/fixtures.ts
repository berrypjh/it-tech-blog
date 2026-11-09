import type { TrustedInput } from './contract.ts';

/** 01.3의 가상 사례. 모두 같은 문의 "VPN이 연결되지 않아요"에 대한 모델 출력과 신뢰된 입력이다. */
export type FixtureId =
  | 'normal'
  | 'not-json'
  | 'missing-field'
  | 'wrong-evidence'
  | 'paused-queue'
  | 'state-missing'
  | 'permission-missing'
  | 'permission-denied';

export type Fixture = { id: FixtureId; output: string; trusted: TrustedInput };

const queues: TrustedInput['queues'] = { network: 'open', hardware: 'paused', account: undefined };

const base: TrustedInput = { logIds: ['LOG-5521'], queues, permission: 'allowed' };

const valid = '{"queue": "network", "evidence": "LOG-5521"}';

export const fixtures: Fixture[] = [
  { id: 'normal', output: valid, trusted: base },
  { id: 'not-json', output: 'queue: network', trusted: base },
  { id: 'missing-field', output: '{"queue": "network"}', trusted: base },
  { id: 'wrong-evidence', output: '{"queue": "network", "evidence": "LOG-9999"}', trusted: base },
  { id: 'paused-queue', output: '{"queue": "hardware", "evidence": "LOG-5521"}', trusted: base },
  { id: 'state-missing', output: '{"queue": "account", "evidence": "LOG-5521"}', trusted: base },
  { id: 'permission-missing', output: valid, trusted: { logIds: base.logIds, queues } },
  { id: 'permission-denied', output: valid, trusted: { ...base, permission: 'denied' } },
];

/** 본문 표가 보여 주는 대표 사례. 권한 거부 사례는 과제로 따로 다룬다. */
export const tableFixtures = fixtures.filter((fixture) => fixture.id !== 'permission-denied');

export const initialFixture: FixtureId = 'normal';

export type FixtureAction = { type: 'select'; id: FixtureId } | { type: 'reset' };

/** 사례 선택 상태. 처음과 초기화 뒤에는 정상 사례를 고른다. */
export const fixtureReducer = (state: FixtureId, action: FixtureAction): FixtureId =>
  action.type === 'reset' ? initialFixture : action.id;

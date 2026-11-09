/**
 * 01.6의 고정 가상 trace와 증거 판정. 증상은 "접수 확인 없음" 하나이고, 고른 증거가 세 가설과
 * 맞는지 어긋나는지를 계산하는 순수 함수다. Node가 타입을 지워 바로 실행할 수 있도록 import 없이
 * 지울 수 있는 TypeScript 문법만 쓴다.
 */

export type Layer = 'input' | 'data' | 'model' | 'validation' | 'tool' | 'state' | 'ui' | 'lookup';

export type HypothesisId = 'validation-rejected' | 'response-lost' | 'ui-mislabel';

/** neutral: 이 증거로는 가설을 가를 수 없다. */
export type Effect = 'supports' | 'contradicts' | 'neutral';

export type TraceEvent = {
  id: Layer;
  /** 제출 시각부터의 밀리초. 진단 중 조회(lookup)는 요청이 끝난 뒤의 일이라 시각이 없다. */
  start?: number;
  end?: number;
  effects: Record<HypothesisId, Effect>;
};

/** open: 아직 가를 증거가 없음 · consistent: 고른 증거와 맞음 · ruled-out: 고른 증거와 어긋남. */
export type HypothesisStatus = 'open' | 'consistent' | 'ruled-out';

const none: Record<HypothesisId, Effect> = {
  'validation-rejected': 'neutral',
  'response-lost': 'neutral',
  'ui-mislabel': 'neutral',
};

export const hypotheses: HypothesisId[] = ['validation-rejected', 'response-lost', 'ui-mislabel'];

/** 요청 req-0458의 가상 trace. 시간 순서로 둔다. */
export const events: TraceEvent[] = [
  { id: 'input', start: 0, end: 30, effects: none },
  { id: 'data', start: 40, end: 120, effects: none },
  { id: 'model', start: 130, end: 900, effects: none },
  {
    id: 'validation',
    start: 910,
    end: 925,
    effects: { ...none, 'validation-rejected': 'contradicts' },
  },
  /** 시간 초과는 응답을 받지 못했다는 관찰일 뿐, 기록이 있는지 없는지는 알려 주지 않는다. */
  { id: 'tool', start: 930, end: 10930, effects: none },
  { id: 'state', start: 10935, end: 10940, effects: { ...none, 'ui-mislabel': 'contradicts' } },
  { id: 'ui', start: 10945, end: 10960, effects: none },
  { id: 'lookup', effects: { ...none, 'response-lost': 'supports' } },
];

export type Assessment = {
  status: Record<HypothesisId, HypothesisStatus>;
  /** 고른 증거. 고른 순서가 아니라 trace의 시간 순서다. */
  observed: Layer[];
  /** 아직 고르지 않은 증거. 확인하지 않았을 뿐 없다는 뜻이 아니다. */
  unchecked: Layer[];
  /** 아직 열려 있거나 맞는 가설 사이를 가를 수 있는, 고르지 않은 증거. */
  nextChecks: Layer[];
};

const statusOf = (id: HypothesisId, observed: TraceEvent[]): HypothesisStatus => {
  const effects = observed.map((event) => event.effects[id]);
  if (effects.includes('contradicts')) return 'ruled-out';
  return effects.includes('supports') ? 'consistent' : 'open';
};

/** 고른 증거로 세 가설의 상태와 다음 검사를 정한다. 같은 선택에는 언제나 같은 결과다. */
export const assess = (selected: Layer[]): Assessment => {
  const observed = events.filter((event) => selected.includes(event.id));
  const unchecked = events.filter((event) => !selected.includes(event.id));
  const status = Object.fromEntries(hypotheses.map((id) => [id, statusOf(id, observed)])) as Record<
    HypothesisId,
    HypothesisStatus
  >;
  const alive = hypotheses.filter((id) => status[id] !== 'ruled-out');
  const nextChecks = unchecked
    .filter((event) => alive.some((id) => event.effects[id] !== 'neutral'))
    .map((event) => event.id);
  return {
    status,
    observed: observed.map((event) => event.id),
    unchecked: unchecked.map((event) => event.id),
    nextChecks,
  };
};

export type SelectionAction = { type: 'toggle'; id: Layer } | { type: 'reset' };

/** 증거 선택 상태. 처음과 초기화 뒤에는 아무 증거도 고르지 않았다. */
export const selectionReducer = (state: Layer[], action: SelectionAction): Layer[] => {
  if (action.type === 'reset') return [];
  return state.includes(action.id) ? state.filter((id) => id !== action.id) : [...state, action.id];
};

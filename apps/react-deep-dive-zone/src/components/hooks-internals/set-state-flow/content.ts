import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type OutcomeId = 'create' | 'enqueue' | 'schedule';

export type Outcome = {
  id: OutcomeId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type DispatchStepId = 'call' | 'lane' | 'update' | 'eager' | 'enqueue' | 'schedule';

export type DispatchStep = {
  id: DispatchStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type QueueStageId = 'empty' | 'one' | 'many';

export type QueueStage = {
  id: QueueStageId;
  badge: string;
  title: string;
  body: string;
  tone: ToneKey;
};

export type PhaseColumn = {
  moment: string;
  work: string;
  dom: string;
  screen: string;
};

export type BatchRow = {
  call: string;
  action: string;
  result: string;
};

export type SetStateFlowContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    callLabel: string;
    call: string;
    outcomes: Outcome[];
  };
  dispatchFlow: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: DispatchStep[];
    note: string;
  };
  updateShape: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    codeHeader: string;
    code: string;
    stages: QueueStage[];
    note: string;
  };
  phases: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string, string];
    rowLabels: { work: string; dom: string; screen: string };
    columns: [PhaseColumn, PhaseColumn, PhaseColumn];
    note: string;
  };
  batching: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    value: {
      label: string;
      caption: string;
      code: string;
      rows: BatchRow[];
    };
    updater: {
      label: string;
      caption: string;
      code: string;
      rows: BatchRow[];
    };
    note: string;
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePath: string;
    lookForLabel: string;
    lookFor: string;
    whyLabel: string;
    why: string;
    code: string;
    primaryCta: string;
    primaryHref: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const UPDATE_TYPE_CODE = `type Update = {
  lane: Lane,              // 우선순위
  action: any,             // 값 또는 updater 함수
  hasEagerState: boolean,  // 미리 계산했는가
  eagerState: any,         // 미리 계산한 다음 상태
  next: Update | null,     // 원형 리스트의 다음 노드
}`;

const UPDATE_TYPE_CODE_EN = `type Update = {
  lane: Lane,              // priority
  action: any,             // a value or an updater function
  hasEagerState: boolean,  // was it computed ahead of time
  eagerState: any,         // the eagerly computed next state
  next: Update | null,     // next node in the circular list
}`;

const DISPATCH_SET_STATE_CODE = `function dispatchSetState(fiber, queue, action) {
  const lane = requestUpdateLane(fiber);

  const update = {
    lane,
    action,
    hasEagerState: false,
    eagerState: null,
    next: null,
  };

  const root = enqueueConcurrentHookUpdate(fiber, queue, update, lane);

  if (root !== null) {
    scheduleUpdateOnFiber(root, fiber, lane);
  }
}`;

const VALUE_CODE = `setCount(count + 1);
setCount(count + 1);
setCount(count + 1);`;

const UPDATER_CODE = `setCount((c) => c + 1);
setCount((c) => c + 1);
setCount((c) => c + 1);`;

const REACT_FIBER_HOOKS_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js';

const ko: SetStateFlowContent = {
  hero: {
    badge: 'Hooks 내부 · 5/10단계',
    title: { line1: 'setState는 화면을 바꾸지 않는다', line2: '바꿔 달라고 적어 둘 뿐이다' },
    description:
      'setCount를 부른 순간 DOM은 그대로입니다. React가 하는 일은 update 한 장을 만들어 큐에 걸고, 렌더를 예약하는 것까지입니다.',
    diagramBadge: 'dispatch',
    diagramCaption: 'record, queue, schedule',
    callLabel: '호출한 한 줄',
    call: 'setCount((c) => c + 1);',
    outcomes: [
      { id: 'create', label: 'Update 생성', caption: 'lane과 action을 담은 객체', tone: 'sky' },
      {
        id: 'enqueue',
        label: 'queue.pending에 연결',
        caption: '원형 리스트의 끝에 매단다',
        tone: 'violet',
      },
      {
        id: 'schedule',
        label: 'scheduleUpdateOnFiber',
        caption: '루트에서 렌더 작업을 예약',
        tone: 'teal',
      },
    ],
  },
  dispatchFlow: {
    badge: '01',
    eyebrow: 'dispatchSetState',
    title: 'setCount를 누르면 도는 여섯 단계',
    description:
      '앞 페이지에서 bind해 둔 fiber와 queue가 여기서 쓰입니다. 우리는 action 하나만 넘겼는데 나머지는 이미 손에 쥐고 있습니다.',
    steps: [
      {
        id: 'call',
        num: '01',
        title: 'setCount(action) 호출',
        description: 'bind된 fiber와 queue가 앞 인자로 이미 들어가 있습니다.',
        tone: 'sky',
      },
      {
        id: 'lane',
        num: '02',
        title: 'lane 결정',
        description: 'requestUpdateLane이 지금 실행 맥락에 맞는 우선순위를 고릅니다.',
        tone: 'amber',
      },
      {
        id: 'update',
        num: '03',
        title: 'Update 객체 생성',
        description: 'lane과 action을 담은 다섯 칸짜리 객체를 만듭니다.',
        tone: 'violet',
      },
      {
        id: 'eager',
        num: '04',
        title: '가능하면 미리 계산',
        description:
          '큐가 비어 있으면 다음 상태를 먼저 계산해 보고, 값이 같으면 렌더를 건너뜁니다.',
        tone: 'cyan',
      },
      {
        id: 'enqueue',
        num: '05',
        title: 'queue.pending에 연결',
        description: 'update를 원형 리스트에 매달고 루트 Fiber를 찾아 올라갑니다.',
        tone: 'violet',
      },
      {
        id: 'schedule',
        num: '06',
        title: '렌더 예약',
        description: 'scheduleUpdateOnFiber가 루트에 작업을 걸고 함수는 그대로 끝납니다.',
        tone: 'teal',
      },
    ],
    note: '04의 조기 종료 덕분에 같은 값으로 setState를 부르면 렌더가 아예 일어나지 않을 수 있습니다.',
  },
  updateShape: {
    badge: '02',
    eyebrow: 'update object',
    title: 'Update 한 장과 원형 큐',
    description:
      'update는 상태가 아니라 "이렇게 바꿔 달라"는 요청서입니다. 요청서들은 queue.pending에 원형으로 매달립니다.',
    codeHeader: 'Update',
    code: UPDATE_TYPE_CODE,
    stages: [
      {
        id: 'empty',
        badge: 'stage 1',
        title: 'pending = null',
        body: '아직 아무도 setState를 부르지 않은 상태입니다.',
        tone: 'sky',
      },
      {
        id: 'one',
        badge: 'stage 2',
        title: '첫 update는 자기 자신을 가리킨다',
        body: 'A.next = A로 두어 한 개짜리 원형 리스트를 만듭니다.',
        tone: 'violet',
      },
      {
        id: 'many',
        badge: 'stage 3',
        title: 'pending은 항상 마지막을 가리킨다',
        body: 'C가 들어오면 pending은 C를 가리키고, C.next가 첫 노드 A입니다.',
        tone: 'emerald',
      },
    ],
    note: '마지막을 가리키는 덕분에 pending.next 한 번으로 첫 update에 바로 닿습니다. 순회 시작점을 O(1)에 얻으려는 설계입니다.',
  },
  phases: {
    badge: '03',
    eyebrow: 'record vs apply',
    title: '기록 · 계산 · 반영은 다른 시점이다',
    description:
      'setState 호출과 화면 갱신 사이에는 최소 두 개의 단계가 더 있습니다. 세 시점을 분리해서 보면 "왜 바로 안 바뀌지"가 사라집니다.',
    headers: ['시점', 'setState 호출 순간', 'Render Phase', 'Commit Phase'],
    rowLabels: { work: '하는 일', dom: 'DOM', screen: '사용자 화면' },
    columns: [
      {
        moment: '기록 & 예약',
        work: 'Update 생성 · queue 연결 · 렌더 예약',
        dom: '손대지 않음',
        screen: '이전 화면 그대로',
      },
      {
        moment: '계산',
        work: '큐를 처리해 새 상태와 새 트리를 계산',
        dom: '아직 손대지 않음',
        screen: '이전 화면 그대로',
      },
      {
        moment: '반영',
        work: '변경된 부분을 DOM에 적용하고 effect 실행',
        dom: '실제로 변경',
        screen: '새 화면이 보임',
      },
    ],
    note: 'setState 바로 다음 줄에서 count를 읽으면 옛 값이 나오는 이유가 이 표에 그대로 있습니다.',
  },
  batching: {
    badge: '04',
    eyebrow: 'value vs updater',
    title: '같은 세 번인데 결과가 다른 이유',
    description:
      'update에 담기는 action이 값이냐 함수냐에 따라, 큐를 처리할 때 이전 상태를 쓰는지 아닌지가 갈립니다.',
    value: {
      label: '값을 넘길 때',
      caption: 'action에 1이라는 숫자가 세 번 들어갑니다. 셋 다 같은 count(0)를 보고 계산됐습니다.',
      code: VALUE_CODE,
      rows: [
        { call: '1번째', action: 'action = 1', result: 'state = 1' },
        { call: '2번째', action: 'action = 1', result: 'state = 1' },
        { call: '3번째', action: 'action = 1', result: 'state = 1' },
      ],
    },
    updater: {
      label: '함수를 넘길 때',
      caption: 'action에 함수가 들어가고, 큐 처리 때 직전 결과를 인자로 받아 실행됩니다.',
      code: UPDATER_CODE,
      rows: [
        { call: '1번째', action: 'c => c + 1', result: '0 → 1' },
        { call: '2번째', action: 'c => c + 1', result: '1 → 2' },
        { call: '3번째', action: 'c => c + 1', result: '2 → 3' },
      ],
    },
    note: '차이를 만드는 것은 배칭이 아니라 action의 종류입니다. 세 update 모두 같은 렌더에서 처리되는 것은 동일합니다.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    lookForLabel: '볼 것',
    lookFor: 'dispatchSetState, requestUpdateLane, enqueueConcurrentHookUpdate',
    whyLabel: '설명',
    why: '함수 마지막 줄이 scheduleUpdateOnFiber라는 점을 보면, 이 함수가 상태를 바꾸지 않는다는 사실이 확정됩니다.',
    code: DISPATCH_SET_STATE_CODE,
    primaryCta: 'ReactFiberHooks.js 읽기',
    primaryHref: REACT_FIBER_HOOKS_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'useReducer와 나눠 쓰는 코드',
    description:
      '큐를 처리하는 쪽 코드는 useState 전용이 아닙니다. useReducer와 같은 함수를 쓴다는 사실을 확인합니다.',
    cta: '다음 페이지로 이동',
    href: '/use-reducer-shared',
  },
};

const en: SetStateFlowContent = {
  hero: {
    badge: 'Hooks Internals · 5/10',
    title: { line1: 'setState does not change the screen', line2: 'it files a request to' },
    description:
      'The moment setCount runs, the DOM is untouched. React builds one update, hangs it on a queue, and schedules a render — that is all.',
    diagramBadge: 'dispatch',
    diagramCaption: 'record, queue, schedule',
    callLabel: 'the line you called',
    call: 'setCount((c) => c + 1);',
    outcomes: [
      {
        id: 'create',
        label: 'Create an Update',
        caption: 'an object carrying lane and action',
        tone: 'sky',
      },
      {
        id: 'enqueue',
        label: 'Link into queue.pending',
        caption: 'appended to the circular list',
        tone: 'violet',
      },
      {
        id: 'schedule',
        label: 'scheduleUpdateOnFiber',
        caption: 'schedule render work on the root',
        tone: 'teal',
      },
    ],
  },
  dispatchFlow: {
    badge: '01',
    eyebrow: 'dispatchSetState',
    title: 'Six steps behind one setCount',
    description:
      'The fiber and queue bound in on the previous page get used here. You passed a single action; the rest was already in hand.',
    steps: [
      {
        id: 'call',
        num: '01',
        title: 'setCount(action) runs',
        description: 'The bound fiber and queue are already sitting in the leading arguments.',
        tone: 'sky',
      },
      {
        id: 'lane',
        num: '02',
        title: 'Decide the lane',
        description: 'requestUpdateLane picks a priority based on the current execution context.',
        tone: 'amber',
      },
      {
        id: 'update',
        num: '03',
        title: 'Create the Update object',
        description: 'Build the five-slot object that carries the lane and the action.',
        tone: 'violet',
      },
      {
        id: 'eager',
        num: '04',
        title: 'Compute ahead when possible',
        description:
          'If the queue is empty React computes the next state first and bails out when it is unchanged.',
        tone: 'cyan',
      },
      {
        id: 'enqueue',
        num: '05',
        title: 'Link into queue.pending',
        description: 'Append the update to the circular list and walk up to find the root Fiber.',
        tone: 'violet',
      },
      {
        id: 'schedule',
        num: '06',
        title: 'Schedule the render',
        description:
          'scheduleUpdateOnFiber posts work on the root and the function simply returns.',
        tone: 'teal',
      },
    ],
    note: 'Thanks to the bailout in step 04, calling setState with the same value can skip rendering entirely.',
  },
  updateShape: {
    badge: '02',
    eyebrow: 'update object',
    title: 'One Update and the circular queue',
    description:
      'An update is not state — it is a request saying "change it like this". Those requests hang on queue.pending in a circle.',
    codeHeader: 'Update',
    code: UPDATE_TYPE_CODE_EN,
    stages: [
      {
        id: 'empty',
        badge: 'stage 1',
        title: 'pending = null',
        body: 'Nobody has called setState yet.',
        tone: 'sky',
      },
      {
        id: 'one',
        badge: 'stage 2',
        title: 'The first update points at itself',
        body: 'A.next = A, forming a circular list of exactly one node.',
        tone: 'violet',
      },
      {
        id: 'many',
        badge: 'stage 3',
        title: 'pending always points at the last one',
        body: 'When C arrives, pending points at C and C.next is the first node A.',
        tone: 'emerald',
      },
    ],
    note: 'Because it holds the tail, a single pending.next reaches the first update. The design buys an O(1) starting point.',
  },
  phases: {
    badge: '03',
    eyebrow: 'record vs apply',
    title: 'Recording, computing and applying are three moments',
    description:
      'At least two more phases sit between a setState call and a repaint. Separating the three moments dissolves the "why did it not update" question.',
    headers: ['Moment', 'At the setState call', 'Render Phase', 'Commit Phase'],
    rowLabels: { work: 'Work done', dom: 'DOM', screen: 'What the user sees' },
    columns: [
      {
        moment: 'Record & schedule',
        work: 'Create the Update, link the queue, schedule a render',
        dom: 'Untouched',
        screen: 'The previous screen',
      },
      {
        moment: 'Compute',
        work: 'Process the queue to compute the new state and tree',
        dom: 'Still untouched',
        screen: 'The previous screen',
      },
      {
        moment: 'Apply',
        work: 'Write the changes to the DOM and run effects',
        dom: 'Actually mutated',
        screen: 'The new screen',
      },
    ],
    note: 'Reading count on the line right after setState returns the old value for exactly the reason this table shows.',
  },
  batching: {
    badge: '04',
    eyebrow: 'value vs updater',
    title: 'Same three calls, different results',
    description:
      'Whether the action holds a value or a function decides if the previous state is used while the queue is processed.',
    value: {
      label: 'Passing a value',
      caption: 'The action is the number 1 three times — all three were computed from count = 0.',
      code: VALUE_CODE,
      rows: [
        { call: 'call 1', action: 'action = 1', result: 'state = 1' },
        { call: 'call 2', action: 'action = 1', result: 'state = 1' },
        { call: 'call 3', action: 'action = 1', result: 'state = 1' },
      ],
    },
    updater: {
      label: 'Passing a function',
      caption: 'The action is a function, invoked with the previous result while the queue runs.',
      code: UPDATER_CODE,
      rows: [
        { call: 'call 1', action: 'c => c + 1', result: '0 → 1' },
        { call: 'call 2', action: 'c => c + 1', result: '1 → 2' },
        { call: 'call 3', action: 'c => c + 1', result: '2 → 3' },
      ],
    },
    note: 'What makes the difference is the kind of action, not batching. All three updates are processed in the same render either way.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    lookForLabel: 'Look for',
    lookFor: 'dispatchSetState, requestUpdateLane, enqueueConcurrentHookUpdate',
    whyLabel: 'Why',
    why: 'Seeing scheduleUpdateOnFiber as the last line settles it: this function never changes state itself.',
    code: DISPATCH_SET_STATE_CODE,
    primaryCta: 'Read ReactFiberHooks.js',
    primaryHref: REACT_FIBER_HOOKS_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'The code useReducer shares',
    description:
      'The side that processes the queue is not useState-specific. Next we confirm it is literally the same function as useReducer.',
    cta: 'Go to the next page',
    href: '/use-reducer-shared',
  },
};

export const setStateFlowContent: Record<Locale, SetStateFlowContent> = { ko, en };

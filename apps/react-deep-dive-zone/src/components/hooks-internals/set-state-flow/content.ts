import type { Locale } from '@it-tech-blog/preferences';

export type Tone = 'sky' | 'cyan' | 'teal' | 'emerald' | 'violet' | 'amber' | 'rose' | 'indigo';

export type HeroStep = {
  number: number;
  title: string;
  description: string;
  tone: Tone;
  visual: 'file' | 'queue' | 'calendar';
};

export type FlowStep = {
  number: number;
  title: string;
  description: string;
  tone: Tone;
  visual: 'play' | 'fn' | 'priority' | 'box' | 'queue' | 'schedule';
};

export type FieldRow = {
  name: string;
  comment: string;
  description: string;
  tone: Tone;
};

export type CircularStage = {
  number: number;
  title: string;
  caption: string;
  nodes: string[];
  selfLoop?: boolean;
  fullCircular?: boolean;
};

export type TableCell = {
  text: string;
  highlight?: boolean;
};

export type TableColumn = {
  index: number;
  title: string;
  keyword: string;
  tone: Tone;
  rows: { what: string[]; dom: string; user: string };
};

export type ExperimentSide = {
  title: string;
  badge: string;
  code: string;
  resultValue: string;
  resultReason: string;
  tone: 'rose' | 'emerald';
};

export type MissionItem = {
  number: string;
  title: string;
  description: string;
};

export type SummaryItem = {
  number: number;
  title: string;
  description: string;
  tone: Tone;
};

export type SetStateFlowContent = {
  hero: {
    badge: string;
    titleLine1: string;
    titleAccent: string;
    description: string;
    leftCode: string;
    steps: HeroStep[];
  };
  question: {
    eyebrow: string;
    title: string;
  };
  beforeAfter: {
    beforeTitle: string;
    beforeItems: { label: string; value: string; tone: Tone }[];
    centerCall: string;
    warning: string;
    afterTitle: string;
    afterItems: { label: string; value: string; tone: Tone }[];
  };
  dispatchFlow: {
    eyebrow: string;
    title: string;
    steps: FlowStep[];
  };
  updateObject: {
    eyebrow: string;
    title: string;
    code: string;
    fields: FieldRow[];
  };
  queueCircular: {
    eyebrow: string;
    title: string;
    stages: CircularStage[];
  };
  realCode: {
    eyebrow: string;
    title: string;
    code: string;
    explanationTitle: string;
    explanation: string;
    fileLabel: string;
    fileName: string;
    buttonLabel: string;
    buttonHref: string;
  };
  renderVsCommit: {
    eyebrow: string;
    title: string;
    rowLabels: { what: string; dom: string; user: string; keyword: string };
    columns: TableColumn[];
  };
  experiment: {
    eyebrow: string;
    title: string;
    left: ExperimentSide;
    right: ExperimentSide;
    queueLabel: string;
    queueNodes: string[];
    bottomExplanation: string;
  };
  mission: {
    eyebrow: string;
    title: string;
    items: MissionItem[];
  };
  summary: {
    eyebrow: string;
    title: string;
    items: SummaryItem[];
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
  action: any,             // 어떤 변경인가
  hasEagerState: boolean,  // eager 계산 여부
  eagerState: any,         // eager 계산된 다음 상태
  next: Update | null,     // 다음 update 연결
}`;

const UPDATE_TYPE_CODE_EN = `type Update = {
  lane: Lane,              // priority
  action: any,             // what to change
  hasEagerState: boolean,  // eager-computed?
  eagerState: any,         // eager-computed next state
  next: Update | null,     // next update link
}`;

const REAL_CODE = `const lane = requestUpdateLane(fiber);

const update = {
  lane,
  action,
  hasEagerState: false,
  eagerState: null,
  next: null,
};`;

const NORMAL_EXPERIMENT_CODE = `const [count, setCount] = useState(0);

setCount(count + 1);
setCount(count + 1);
setCount(count + 1);

// 결과: 1`;

const FUNCTIONAL_EXPERIMENT_CODE = `const [count, setCount] = useState(0);

setCount((c) => c + 1);
setCount((c) => c + 1);
setCount((c) => c + 1);

// 결과: 3`;

const NORMAL_EXPERIMENT_CODE_EN = `const [count, setCount] = useState(0);

setCount(count + 1);
setCount(count + 1);
setCount(count + 1);

// result: 1`;

const FUNCTIONAL_EXPERIMENT_CODE_EN = `const [count, setCount] = useState(0);

setCount((c) => c + 1);
setCount((c) => c + 1);
setCount((c) => c + 1);

// result: 3`;

const ko: SetStateFlowContent = {
  hero: {
    badge: 'Hooks 내부 · 5/10단계',
    titleLine1: 'setState는',
    titleAccent: '즉시 DOM을 바꾸지 않는다',
    description:
      '상태 업데이트를 호출하면 React는 먼저 업데이트 요청을 기록하고, 그 작업을 언제 렌더링할지 스케줄합니다.',
    leftCode: 'setCount((c) => c + 1);',
    steps: [
      {
        number: 1,
        title: 'Update 생성',
        description: '업데이트 정보를 담은 Update 객체를 만든다',
        tone: 'sky',
        visual: 'file',
      },
      {
        number: 2,
        title: 'queue 등록',
        description: '해당 Hook의 queue에 업데이트를 연결한다',
        tone: 'violet',
        visual: 'queue',
      },
      {
        number: 3,
        title: 'render 예약',
        description: '해당 Fiber의 루트에서 렌더 작업을 예약한다',
        tone: 'teal',
        visual: 'calendar',
      },
    ],
  },
  question: {
    eyebrow: '오늘의 질문',
    title: 'setCount(count + 1)을 호출한 순간, React는 정확히 무엇을 만들고 어디에 연결할까?',
  },
  beforeAfter: {
    beforeTitle: 'Before (호출 전)',
    beforeItems: [
      { label: 'queue.pending', value: 'null', tone: 'amber' },
      { label: '화면 count', value: '0', tone: 'sky' },
      { label: '렌더 작업', value: '없음', tone: 'amber' },
    ],
    centerCall: 'setCount(c => c + 1) 호출',
    warning: 'DOM은 아직 변경되지 않음',
    afterTitle: 'After (호출 직후)',
    afterItems: [
      { label: 'queue.pending', value: 'Update #1', tone: 'violet' },
      { label: '화면 count', value: '아직 0', tone: 'sky' },
      { label: '렌더 작업', value: '예약됨', tone: 'teal' },
    ],
  },
  dispatchFlow: {
    eyebrow: 'dispatch-flow',
    title: 'dispatchSetState 전체 흐름',
    steps: [
      {
        number: 1,
        title: 'setCount(action)',
        description: '사용자 코드에서 setCount 호출',
        tone: 'sky',
        visual: 'play',
      },
      {
        number: 2,
        title: 'dispatchSetState',
        description: 'Fiber와 queue를 기억한 dispatch 함수 실행',
        tone: 'violet',
        visual: 'fn',
      },
      {
        number: 3,
        title: 'requestUpdateLane',
        description: '현재 업데이트의 우선순위(Lane)를 결정',
        tone: 'cyan',
        visual: 'priority',
      },
      {
        number: 4,
        title: 'Update 객체 생성',
        description: 'lane, action 등을 담은 Update 객체 생성',
        tone: 'teal',
        visual: 'box',
      },
      {
        number: 5,
        title: 'enqueueConcurrentHookUpdate',
        description: '해당 Hook queue에 업데이트를 연결',
        tone: 'indigo',
        visual: 'queue',
      },
      {
        number: 6,
        title: 'scheduleUpdateOnFiber',
        description: '루트에 렌더 작업을 스케줄링',
        tone: 'emerald',
        visual: 'schedule',
      },
    ],
  },
  updateObject: {
    eyebrow: 'update-object',
    title: 'Update 객체 구조',
    code: UPDATE_TYPE_CODE,
    fields: [
      {
        name: 'lane',
        comment: 'Lane',
        description: '이 업데이트의 우선순위. 어떤 시점에 처리할지 결정',
        tone: 'cyan',
      },
      { name: 'action', comment: 'any', description: '상태 변경 내용. 값 또는 함수', tone: 'sky' },
      {
        name: 'hasEagerState',
        comment: 'boolean',
        description: 'eager 상태 계산 여부. 성능 최적화에 사용',
        tone: 'amber',
      },
      {
        name: 'eagerState',
        comment: 'any',
        description: '계산된 다음 상태. 비교에 사용',
        tone: 'teal',
      },
      {
        name: 'next',
        comment: 'Update | null',
        description: '다음 update를 가리키는 포인터 — 순환 연결 리스트',
        tone: 'violet',
      },
    ],
  },
  queueCircular: {
    eyebrow: 'queue-pending-circular',
    title: 'queue.pending 연결 (순환 연결 리스트)',
    stages: [
      {
        number: 1,
        title: '처음 (업데이트 없음)',
        caption: 'queue.pending → null',
        nodes: ['null'],
      },
      {
        number: 2,
        title: '1회 setState 호출 후',
        caption: 'queue.pending → Update A',
        nodes: ['Update A'],
        selfLoop: true,
      },
      {
        number: 3,
        title: '3회 setState 호출 후',
        caption: 'queue.pending → Update C (last)',
        nodes: ['Update A', 'Update B', 'Update C'],
        fullCircular: true,
      },
    ],
  },
  realCode: {
    eyebrow: 'real-code',
    title: '실제 코드: 업데이트 객체 생성',
    code: REAL_CODE,
    explanationTitle: 'setState는 먼저 업데이트 객체를 만든다.',
    explanation: '이 객체가 queue에 들어가고, 나중에 렌더 단계에서 처리됩니다.',
    fileLabel: '파일',
    fileName: 'ReactFiberHooks.js',
    buttonLabel: 'GitHub에서 전체 코드 보기',
    buttonHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js',
  },
  renderVsCommit: {
    eyebrow: 'render-vs-commit',
    title: 'Render 예약과 DOM 변경의 차이',
    rowLabels: {
      what: '무엇이 일어나나?',
      dom: 'DOM 상태',
      user: '사용자 화면',
      keyword: '키워드',
    },
    columns: [
      {
        index: 1,
        title: 'setState 호출 순간',
        keyword: '기록 & 예약',
        tone: 'sky',
        rows: {
          what: ['업데이트 객체 생성', 'queue에 등록', '렌더 작업 예약'],
          dom: '변경 없음',
          user: '이전 화면 그대로',
        },
      },
      {
        index: 2,
        title: 'Render Phase (렌더 단계)',
        keyword: '계산',
        tone: 'violet',
        rows: {
          what: ['업데이트 큐 처리', '새 Virtual DOM 계산', '변경 사항 결정'],
          dom: '아직 변경 없음',
          user: '이전 화면 그대로',
        },
      },
      {
        index: 3,
        title: 'Commit Phase (커밋 단계)',
        keyword: '적용',
        tone: 'emerald',
        rows: {
          what: ['DOM 실제 변경', 'useEffect 실행', '화면 갱신'],
          dom: '실제 변경됨',
          user: '새 화면 반영',
        },
      },
    ],
  },
  experiment: {
    eyebrow: 'three-setstate-experiment',
    title: '3번 setState 실험',
    left: {
      title: '일반 값 업데이트',
      badge: 'count + 1',
      code: NORMAL_EXPERIMENT_CODE,
      resultValue: '화면 count = 1',
      resultReason: '같은 값을 3번 설정',
      tone: 'rose',
    },
    right: {
      title: '함수형 업데이트',
      badge: 'c => c + 1',
      code: FUNCTIONAL_EXPERIMENT_CODE,
      resultValue: '화면 count = 3',
      resultReason: '순차적으로 누적',
      tone: 'emerald',
    },
    queueLabel: '업데이트 큐 처리 순서',
    queueNodes: ['Update #1 (+1)', 'Update #2 (+1)', 'Update #3 (+1)'],
    bottomExplanation: '함수형 업데이트는 렌더 단계에서 순차적으로 처리되어 최종값이 3이 됩니다.',
  },
  mission: {
    eyebrow: 'follow-mission',
    title: '직접 코드에서 따라가 보기',
    items: [
      {
        number: '01',
        title: 'dispatchSetState 찾기',
        description: 'ReactFiberHooks.js에서 dispatchSetState 함수의 위치와 역할을 확인하세요.',
      },
      {
        number: '02',
        title: 'requestUpdateLane 확인',
        description:
          '현재 렌더/이벤트 상황에 어떤 우선순위 Lane이 할당되는지 코드를 따라가 보세요.',
      },
      {
        number: '03',
        title: 'update 객체 생성 확인',
        description: 'Update 객체의 필드가 어떻게 채워지는지 확인하고, 의미를 정리해보세요.',
      },
      {
        number: '04',
        title: 'scheduleUpdateOnFiber로 이어지는 흐름 확인',
        description: 'enqueue 후, 루트에 렌더를 예약하는 과정까지 실제 흐름을 연결해 보세요.',
      },
    ],
  },
  summary: {
    eyebrow: 'key-takeaways',
    title: '핵심 정리',
    items: [
      {
        number: 1,
        title: 'setState는 기록부터 한다',
        description: '화면을 즉시 바꾸는 명령이 아니라 Update 요청을 먼저 만든다.',
        tone: 'sky',
      },
      {
        number: 2,
        title: '업데이트는 queue에 쌓인다',
        description: '여러 setState 호출은 Hook의 queue에 연결된다.',
        tone: 'teal',
      },
      {
        number: 3,
        title: '렌더/커밋 단계에서 반영된다',
        description:
          'queue에 쌓인 작업은 Render Phase에서 계산되고 Commit Phase에서 화면에 반영된다.',
        tone: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'useReducer와 공통 구조 보기',
    description:
      'useState 업데이트 흐름을 봤다면, 이제 useReducer가 이 queue 모델을 어떻게 공유하는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/use-reducer-shared',
  },
};

const en: SetStateFlowContent = {
  hero: {
    badge: 'Hooks Internals · 5/10',
    titleLine1: 'setState does not',
    titleAccent: 'change the DOM immediately',
    description:
      'When you call a setter, React first records an update request and then schedules when to render that work.',
    leftCode: 'setCount((c) => c + 1);',
    steps: [
      {
        number: 1,
        title: 'Create Update',
        description: 'Build an Update object with the change info',
        tone: 'sky',
        visual: 'file',
      },
      {
        number: 2,
        title: 'Enqueue',
        description: 'Link the update into this Hook’s queue',
        tone: 'violet',
        visual: 'queue',
      },
      {
        number: 3,
        title: 'Schedule render',
        description: 'Schedule render work at this Fiber’s root',
        tone: 'teal',
        visual: 'calendar',
      },
    ],
  },
  question: {
    eyebrow: "Today's question",
    title:
      'The moment you call setCount(count + 1), what does React build and where does it attach it?',
  },
  beforeAfter: {
    beforeTitle: 'Before (before the call)',
    beforeItems: [
      { label: 'queue.pending', value: 'null', tone: 'amber' },
      { label: 'screen count', value: '0', tone: 'sky' },
      { label: 'render work', value: 'none', tone: 'amber' },
    ],
    centerCall: 'setCount(c => c + 1) call',
    warning: 'DOM is not changed yet',
    afterTitle: 'After (right after the call)',
    afterItems: [
      { label: 'queue.pending', value: 'Update #1', tone: 'violet' },
      { label: 'screen count', value: 'still 0', tone: 'sky' },
      { label: 'render work', value: 'scheduled', tone: 'teal' },
    ],
  },
  dispatchFlow: {
    eyebrow: 'dispatch-flow',
    title: 'dispatchSetState full flow',
    steps: [
      {
        number: 1,
        title: 'setCount(action)',
        description: 'User code calls setCount',
        tone: 'sky',
        visual: 'play',
      },
      {
        number: 2,
        title: 'dispatchSetState',
        description: 'Run the dispatch function bound to Fiber + queue',
        tone: 'violet',
        visual: 'fn',
      },
      {
        number: 3,
        title: 'requestUpdateLane',
        description: 'Pick the Lane (priority) for this update',
        tone: 'cyan',
        visual: 'priority',
      },
      {
        number: 4,
        title: 'Build Update object',
        description: 'Create an Update with lane, action, …',
        tone: 'teal',
        visual: 'box',
      },
      {
        number: 5,
        title: 'enqueueConcurrentHookUpdate',
        description: 'Link the update into this Hook’s queue',
        tone: 'indigo',
        visual: 'queue',
      },
      {
        number: 6,
        title: 'scheduleUpdateOnFiber',
        description: 'Schedule render work at the root',
        tone: 'emerald',
        visual: 'schedule',
      },
    ],
  },
  updateObject: {
    eyebrow: 'update-object',
    title: 'Update object structure',
    code: UPDATE_TYPE_CODE_EN,
    fields: [
      {
        name: 'lane',
        comment: 'Lane',
        description: 'Priority of this update. Decides when to process.',
        tone: 'cyan',
      },
      {
        name: 'action',
        comment: 'any',
        description: 'The state change — a value or a function.',
        tone: 'sky',
      },
      {
        name: 'hasEagerState',
        comment: 'boolean',
        description: 'Was the next state computed eagerly?',
        tone: 'amber',
      },
      {
        name: 'eagerState',
        comment: 'any',
        description: 'Eager-computed next state, used for comparison.',
        tone: 'teal',
      },
      {
        name: 'next',
        comment: 'Update | null',
        description: 'Pointer to the next update — circular linked list.',
        tone: 'violet',
      },
    ],
  },
  queueCircular: {
    eyebrow: 'queue-pending-circular',
    title: 'queue.pending links (circular linked list)',
    stages: [
      {
        number: 1,
        title: 'Initial (no updates)',
        caption: 'queue.pending → null',
        nodes: ['null'],
      },
      {
        number: 2,
        title: 'After 1 setState',
        caption: 'queue.pending → Update A',
        nodes: ['Update A'],
        selfLoop: true,
      },
      {
        number: 3,
        title: 'After 3 setState',
        caption: 'queue.pending → Update C (last)',
        nodes: ['Update A', 'Update B', 'Update C'],
        fullCircular: true,
      },
    ],
  },
  realCode: {
    eyebrow: 'real-code',
    title: 'Real code: building the Update object',
    code: REAL_CODE,
    explanationTitle: 'setState first builds an Update object.',
    explanation: 'That object enters the queue and is processed later during the render phase.',
    fileLabel: 'file',
    fileName: 'ReactFiberHooks.js',
    buttonLabel: 'View full code on GitHub',
    buttonHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js',
  },
  renderVsCommit: {
    eyebrow: 'render-vs-commit',
    title: 'Render reservation vs. DOM change',
    rowLabels: {
      what: 'What happens?',
      dom: 'DOM state',
      user: 'User screen',
      keyword: 'Keyword',
    },
    columns: [
      {
        index: 1,
        title: 'Calling setState',
        keyword: 'Record & schedule',
        tone: 'sky',
        rows: {
          what: ['Build Update object', 'Enqueue into queue', 'Schedule render work'],
          dom: 'Unchanged',
          user: 'Previous screen',
        },
      },
      {
        index: 2,
        title: 'Render Phase',
        keyword: 'Compute',
        tone: 'violet',
        rows: {
          what: ['Process update queue', 'Compute new Virtual DOM', 'Decide changes'],
          dom: 'Still unchanged',
          user: 'Previous screen',
        },
      },
      {
        index: 3,
        title: 'Commit Phase',
        keyword: 'Apply',
        tone: 'emerald',
        rows: {
          what: ['Mutate the DOM', 'Run useEffect', 'Refresh the view'],
          dom: 'Actually changed',
          user: 'New screen',
        },
      },
    ],
  },
  experiment: {
    eyebrow: 'three-setstate-experiment',
    title: '3-setState experiment',
    left: {
      title: 'Plain value update',
      badge: 'count + 1',
      code: NORMAL_EXPERIMENT_CODE_EN,
      resultValue: 'screen count = 1',
      resultReason: 'Same value set 3 times',
      tone: 'rose',
    },
    right: {
      title: 'Functional update',
      badge: 'c => c + 1',
      code: FUNCTIONAL_EXPERIMENT_CODE_EN,
      resultValue: 'screen count = 3',
      resultReason: 'Accumulated sequentially',
      tone: 'emerald',
    },
    queueLabel: 'Update queue processing order',
    queueNodes: ['Update #1 (+1)', 'Update #2 (+1)', 'Update #3 (+1)'],
    bottomExplanation: 'Functional updates are processed sequentially during render, ending at 3.',
  },
  mission: {
    eyebrow: 'follow-mission',
    title: 'Follow it in the source',
    items: [
      {
        number: '01',
        title: 'Find dispatchSetState',
        description: 'Locate dispatchSetState in ReactFiberHooks.js and read its role.',
      },
      {
        number: '02',
        title: 'Check requestUpdateLane',
        description: 'See which Lane is assigned depending on the render/event context.',
      },
      {
        number: '03',
        title: 'Inspect Update creation',
        description: 'Trace how each field of the Update object is filled in.',
      },
      {
        number: '04',
        title: 'Follow into scheduleUpdateOnFiber',
        description: 'Walk from enqueue all the way to scheduling render at the root.',
      },
    ],
  },
  summary: {
    eyebrow: 'key-takeaways',
    title: 'Key takeaways',
    items: [
      {
        number: 1,
        title: 'setState records first',
        description:
          'It is not a "change the screen now" command — it builds an Update request first.',
        tone: 'sky',
      },
      {
        number: 2,
        title: 'Updates stack in the queue',
        description: 'Multiple setState calls all link into this Hook’s queue.',
        tone: 'teal',
      },
      {
        number: 3,
        title: 'Render/Commit apply them',
        description: 'Work in the queue is computed in Render Phase and applied in Commit Phase.',
        tone: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'shared structure with useReducer',
    description:
      'Now that you know the setState update flow, see how useReducer shares this same queue model.',
    cta: 'Go to the next page',
    href: '/use-reducer-shared',
  },
};

export const setStateFlowContent: Record<Locale, SetStateFlowContent> = { ko, en };

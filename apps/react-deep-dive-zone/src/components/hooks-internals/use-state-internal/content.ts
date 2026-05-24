import type { Locale } from '@it-tech-blog/preferences';

export type Tone = 'sky' | 'cyan' | 'teal' | 'emerald' | 'violet' | 'amber' | 'indigo';

export type Piece = {
  title: string;
  value: string;
  label: string;
  tone: Tone;
  visual: 'number' | 'fn' | 'queue' | 'init';
};

export type ProcessStep = {
  number: number;
  title: string;
  description: string;
  tone: Tone;
};

export type FieldRow = {
  name: string;
  description: string;
  tone: Tone;
  isQueueChild?: boolean;
};

export type FlowCard = {
  title: string;
  subtitle: string;
  tone: Tone;
  visual: 'fn' | 'bind' | 'cube' | 'play';
};

export type TabKey = 'number' | 'string' | 'function';

export type ExperimentTab = {
  key: TabKey;
  label: string;
  userCode: string;
  flow: string[];
  internal: { key: string; value: string; children?: { key: string; value: string }[] }[];
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

export type UseStateInternalsContent = {
  hero: {
    badges: { label: string; tone: 'blue' | 'cyan' }[];
    titleLine1: string;
    titleAccent: string;
    description: string;
    leftCode: string;
    diagramTitle: string;
    diagramCode: string;
    diagramSubtitle: string;
    pieces: Piece[];
  };
  question: {
    eyebrow: string;
    title: string;
  };
  fullProcess: {
    eyebrow: string;
    title: string;
    steps: ProcessStep[];
  };
  hookStructure: {
    eyebrow: string;
    title: string;
    code: string;
    fields: FieldRow[];
  };
  mountStateImpl: {
    eyebrow: string;
    title: string;
    code: string;
    explanation: string;
    fileLabel: string;
    fileName: string;
    buttonLabel: string;
    buttonHref: string;
  };
  dispatch: {
    eyebrow: string;
    title: string;
    flow: FlowCard[];
    code: string;
    explanation: string;
  };
  experiment: {
    eyebrow: string;
    title: string;
    tabs: ExperimentTab[];
    userCodeLabel: string;
    flowLabel: string;
    internalLabel: string;
    tipTitle: string;
    tipBody: string;
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
  cta: {
    label: string;
    href: string;
    description: string;
  };
};

const HOOK_STRUCTURE_CODE = `Hook {
  memoizedState: 0,
  baseState: 0,
  baseQueue: null,
  queue: {
    pending: null,
    lanes: NoLanes,
    dispatch: setCount,
    lastRenderedReducer: basicStateReducer,
    lastRenderedState: 0,
  },
  next: null
}`;

const MOUNT_STATE_IMPL_CODE = `// ReactFiberHooks.js
function mountStateImpl(initialState) {
  const hook = mountWorkInProgressHook();

  if (typeof initialState === "function") {
    initialState = initialState();
  }

  hook.memoizedState = hook.baseState = initialState;

  const queue = {
    pending: null,
    lanes: NoLanes,
    dispatch: null,
    lastRenderedReducer: basicStateReducer,
    lastRenderedState: initialState,
  };

  hook.queue = queue;
  return hook;
}`;

const DISPATCH_BIND_CODE = `queue.dispatch = dispatchSetState.bind(
  null,
  currentlyRenderingFiber,
  queue,
);`;

const ko: UseStateInternalsContent = {
  hero: {
    badges: [
      { label: 'React 내부 탐구', tone: 'blue' },
      { label: 'Hook 심화', tone: 'cyan' },
    ],
    titleLine1: 'useState는',
    titleAccent: '값만 저장하지 않는다',
    description:
      'useState는 현재 상태값뿐 아니라, 앞으로 들어올 업데이트를 쌓는 queue와 업데이트를 등록하는 dispatch 함수까지 준비합니다.',
    leftCode: 'const [count, setCount] = useState(0);',
    diagramTitle: '내가 쓰는 한 줄',
    diagramCode: 'const [count, setCount] = useState(0);',
    diagramSubtitle: 'React 내부에서 만들어지는 것들',
    pieces: [
      {
        title: '현재 상태값',
        value: '0',
        label: 'count',
        tone: 'sky',
        visual: 'number',
      },
      {
        title: 'dispatch 함수',
        value: 'setCount()',
        label: 'setCount',
        tone: 'teal',
        visual: 'fn',
      },
      {
        title: '업데이트 큐',
        value: 'queue',
        label: 'queue',
        tone: 'violet',
        visual: 'queue',
      },
      {
        title: '초기화 로직',
        value: 'useState(0)',
        label: 'initialState',
        tone: 'cyan',
        visual: 'init',
      },
    ],
  },
  question: {
    eyebrow: '오늘의 질문',
    title: '이 한 줄을 실행했을 때 React 내부에는 정확히 무엇이 만들어질까?',
  },
  fullProcess: {
    eyebrow: 'full-process',
    title: 'useState(0)가 만들어지는 전체 과정',
    steps: [
      {
        number: 1,
        title: 'useState(0) 호출',
        description: '사용자 코드에서 useState 호출',
        tone: 'sky',
      },
      { number: 2, title: 'Hook 생성', description: 'Hook 노드 객체를 생성', tone: 'violet' },
      {
        number: 3,
        title: 'initialState 저장',
        description: 'initialState를 memoizedState, baseState에 저장',
        tone: 'sky',
      },
      {
        number: 4,
        title: 'UpdateQueue 생성',
        description: '업데이트들을 담을 queue 객체 생성',
        tone: 'cyan',
      },
      {
        number: 5,
        title: 'dispatch 연결',
        description: 'fiber와 queue를 기억하는 dispatch 함수 생성 및 연결',
        tone: 'teal',
      },
      {
        number: 6,
        title: '[state, dispatch] 반환',
        description: '[memoizedState, dispatch]를 사용자에게 반환',
        tone: 'emerald',
      },
    ],
  },
  hookStructure: {
    eyebrow: 'hook-structure',
    title: 'Hook 내부 구조 (useState 예시)',
    code: HOOK_STRUCTURE_CODE,
    fields: [
      {
        name: 'memoizedState',
        description: '현재 렌더에서의 상태값 (렌더가 끝난 값)',
        tone: 'sky',
      },
      { name: 'baseState', description: '업데이트 계산의 기준이 되는 상태', tone: 'sky' },
      { name: 'baseQueue', description: '기존에 처리되지 않은 업데이트 큐', tone: 'amber' },
      { name: 'queue', description: '이 Hook의 업데이트 관리 객체', tone: 'cyan' },
      {
        name: 'pending',
        description: '처리 대기 중인 업데이트의 원형 리스트',
        tone: 'cyan',
        isQueueChild: true,
      },
      { name: 'lanes', description: '업데이트 우선순위 정보', tone: 'cyan', isQueueChild: true },
      {
        name: 'dispatch',
        description: '사용자가 호출하는 setCount 함수',
        tone: 'teal',
        isQueueChild: true,
      },
      {
        name: 'lastRenderedReducer',
        description: '마지막으로 사용한 reducer (useState는 basicStateReducer)',
        tone: 'violet',
        isQueueChild: true,
      },
      {
        name: 'lastRenderedState',
        description: '마지막 렌더에서의 상태값',
        tone: 'sky',
        isQueueChild: true,
      },
      {
        name: 'next',
        description: '다음 Hook 노드를 가리키는 포인터 — linked list',
        tone: 'violet',
      },
    ],
  },
  mountStateImpl: {
    eyebrow: 'mount-state-impl',
    title: '실제 코드: 초기 상태와 queue 생성',
    code: MOUNT_STATE_IMPL_CODE,
    explanation:
      '초기 상태를 설정하고, 업데이트를 관리할 queue 객체를 생성한 뒤 Hook에 연결합니다.',
    fileLabel: '파일',
    fileName: 'ReactFiberHooks.js',
    buttonLabel: 'GitHub에서 전체 코드 보기',
    buttonHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js',
  },
  dispatch: {
    eyebrow: 'dispatch-flow',
    title: 'dispatch 생성 흐름',
    flow: [
      { title: 'dispatchSetState', subtitle: '함수', tone: 'violet', visual: 'fn' },
      { title: 'bind', subtitle: 'this 아님', tone: 'cyan', visual: 'bind' },
      {
        title: 'fiber + queue',
        subtitle: '현재 컴포넌트 / 해당 Hook',
        tone: 'teal',
        visual: 'cube',
      },
      { title: 'setCount', subtitle: '사용자가 호출하는 함수', tone: 'sky', visual: 'play' },
    ],
    code: DISPATCH_BIND_CODE,
    explanation: 'setCount는 현재 Fiber와 해당 Hook의 queue를 기억하는 함수입니다.',
  },
  experiment: {
    eyebrow: 'dissection-experiment',
    title: 'useState 해체 실험',
    tabs: [
      {
        key: 'number',
        label: '숫자 상태',
        userCode: 'const [count, setCount] = useState(0);',
        flow: [
          '0을 initialState로 사용',
          "typeof !== 'function' 이므로 그대로 사용",
          'memoizedState, baseState에 0 저장',
        ],
        internal: [
          { key: 'memoizedState', value: '0' },
          { key: 'baseState', value: '0' },
          {
            key: 'queue',
            value: '',
            children: [
              { key: 'pending', value: 'null' },
              { key: 'lanes', value: 'NoLanes' },
              { key: 'dispatch', value: 'setCount' },
              { key: 'lastRenderedReducer', value: 'basicStateReducer' },
              { key: 'lastRenderedState', value: '0' },
            ],
          },
          { key: 'next', value: 'null' },
        ],
      },
      {
        key: 'string',
        label: '문자열 상태',
        userCode: 'const [name, setName] = useState("Park");',
        flow: [
          '"Park"을 initialState로 사용',
          "typeof !== 'function' 이므로 그대로 사용",
          'memoizedState, baseState에 "Park" 저장',
        ],
        internal: [
          { key: 'memoizedState', value: '"Park"' },
          { key: 'baseState', value: '"Park"' },
          {
            key: 'queue',
            value: '',
            children: [
              { key: 'pending', value: 'null' },
              { key: 'lanes', value: 'NoLanes' },
              { key: 'dispatch', value: 'setName' },
              { key: 'lastRenderedReducer', value: 'basicStateReducer' },
              { key: 'lastRenderedState', value: '"Park"' },
            ],
          },
          { key: 'next', value: 'null' },
        ],
      },
      {
        key: 'function',
        label: '함수 초기화',
        userCode: 'const [items, setItems] = useState(() => heavyInit());',
        flow: [
          '() => heavyInit()을 initialState로 사용',
          "typeof === 'function' 이므로 한 번 호출해 결과를 얻음",
          'heavyInit() 결과를 memoizedState, baseState에 저장',
        ],
        internal: [
          { key: 'memoizedState', value: 'heavyInit()' },
          { key: 'baseState', value: 'heavyInit()' },
          {
            key: 'queue',
            value: '',
            children: [
              { key: 'pending', value: 'null' },
              { key: 'lanes', value: 'NoLanes' },
              { key: 'dispatch', value: 'setItems' },
              { key: 'lastRenderedReducer', value: 'basicStateReducer' },
              { key: 'lastRenderedState', value: 'heavyInit()' },
            ],
          },
          { key: 'next', value: 'null' },
        ],
      },
    ],
    userCodeLabel: '사용자 코드',
    flowLabel: '초기화 흐름',
    internalLabel: '내부 구조 (초기 렌더 이후)',
    tipTitle: '팁을 바꿔보세요!',
    tipBody: '초기값의 타입에 따라 초기화 흐름과 저장되는 값이 어떻게 달라지는지 확인할 수 있어요.',
  },
  mission: {
    eyebrow: 'follow-mission',
    title: '직접 코드에서 따라가 보기',
    items: [
      {
        number: '01',
        title: 'mountState 확인',
        description: 'ReactFiberHooks.js에서 mountState 함수로 들어가는 역할을 확인하세요.',
      },
      {
        number: '02',
        title: 'mountStateImpl 확인',
        description: 'Hook 객체 생성 및 초기화 과정을 단계별로 살펴보세요.',
      },
      {
        number: '03',
        title: 'queue 객체 확인',
        description: 'queue 내부 필드들의 의미와 초기 값을 확인해보세요.',
      },
      {
        number: '04',
        title: 'dispatch bind 확인',
        description: 'dispatchSetState.bind(...)가 어떤 값을 묶어서 기억하는지 추적해보세요.',
      },
    ],
  },
  summary: {
    eyebrow: 'key-takeaways',
    title: '핵심 요약',
    items: [
      {
        number: 1,
        title: 'useState는 3가지를 준비한다',
        description: '현재 상태값, 업데이트 queue, dispatch 함수를 한 번에 만든다.',
        tone: 'sky',
      },
      {
        number: 2,
        title: 'Hook 노드에 모든 것이 연결된다',
        description: '상태값과 queue, dispatch가 하나의 Hook 객체를 중심으로 연결된다.',
        tone: 'teal',
      },
      {
        number: 3,
        title: 'dispatch는 Fiber와 queue를 기억한다',
        description: 'setCount는 현재 컴포넌트 Fiber와 해당 Hook의 queue를 기억한다.',
        tone: 'violet',
      },
    ],
  },
  cta: {
    label: '다음: setState 이후 실제로 무슨 일이 일어나는가?',
    href: '/set-state-flow',
    description:
      'useState가 무엇을 준비하는지 알았다면, 이제 setState를 호출했을 때 queue가 어떻게 움직이는지 살펴봅니다.',
  },
};

const en: UseStateInternalsContent = {
  hero: {
    badges: [
      { label: 'React Internals', tone: 'blue' },
      { label: 'Hook Deep Dive', tone: 'cyan' },
    ],
    titleLine1: 'useState does not',
    titleAccent: 'just store a value',
    description:
      'useState prepares the current state, the update queue that will collect future updates, and the dispatch function — all at once.',
    leftCode: 'const [count, setCount] = useState(0);',
    diagramTitle: 'The one line we write',
    diagramCode: 'const [count, setCount] = useState(0);',
    diagramSubtitle: 'What React actually builds inside',
    pieces: [
      { title: 'Current state', value: '0', label: 'count', tone: 'sky', visual: 'number' },
      { title: 'Dispatch fn', value: 'setCount()', label: 'setCount', tone: 'teal', visual: 'fn' },
      { title: 'Update queue', value: 'queue', label: 'queue', tone: 'violet', visual: 'queue' },
      {
        title: 'Init logic',
        value: 'useState(0)',
        label: 'initialState',
        tone: 'cyan',
        visual: 'init',
      },
    ],
  },
  question: {
    eyebrow: "Today's question",
    title: 'When this single line runs, what does React actually build inside?',
  },
  fullProcess: {
    eyebrow: 'full-process',
    title: 'The full path of useState(0)',
    steps: [
      {
        number: 1,
        title: 'Call useState(0)',
        description: 'User code calls useState',
        tone: 'sky',
      },
      {
        number: 2,
        title: 'Create Hook',
        description: 'Allocate a Hook node object',
        tone: 'violet',
      },
      {
        number: 3,
        title: 'Store initialState',
        description: 'Put initialState into memoizedState and baseState',
        tone: 'sky',
      },
      {
        number: 4,
        title: 'Build UpdateQueue',
        description: 'Create the queue object that holds future updates',
        tone: 'cyan',
      },
      {
        number: 5,
        title: 'Wire up dispatch',
        description: 'Create a dispatch function bound to the current fiber + queue',
        tone: 'teal',
      },
      {
        number: 6,
        title: 'Return [state, dispatch]',
        description: 'Return [memoizedState, dispatch] to the caller',
        tone: 'emerald',
      },
    ],
  },
  hookStructure: {
    eyebrow: 'hook-structure',
    title: 'Hook internal structure (useState example)',
    code: HOOK_STRUCTURE_CODE,
    fields: [
      {
        name: 'memoizedState',
        description: 'State value for the current render (finished render)',
        tone: 'sky',
      },
      {
        name: 'baseState',
        description: 'Base state used when computing the next state',
        tone: 'sky',
      },
      { name: 'baseQueue', description: 'Updates that have not been processed yet', tone: 'amber' },
      { name: 'queue', description: 'This Hook’s update-management object', tone: 'cyan' },
      {
        name: 'pending',
        description: 'Circular list of pending updates',
        tone: 'cyan',
        isQueueChild: true,
      },
      {
        name: 'lanes',
        description: 'Priority info for the updates',
        tone: 'cyan',
        isQueueChild: true,
      },
      {
        name: 'dispatch',
        description: 'The setCount function the user calls',
        tone: 'teal',
        isQueueChild: true,
      },
      {
        name: 'lastRenderedReducer',
        description: 'Reducer used last render (basicStateReducer for useState)',
        tone: 'violet',
        isQueueChild: true,
      },
      {
        name: 'lastRenderedState',
        description: 'State value from the last render',
        tone: 'sky',
        isQueueChild: true,
      },
      {
        name: 'next',
        description: 'Pointer to the next Hook — linked list backbone',
        tone: 'violet',
      },
    ],
  },
  mountStateImpl: {
    eyebrow: 'mount-state-impl',
    title: 'Real code: initial state and queue creation',
    code: MOUNT_STATE_IMPL_CODE,
    explanation:
      'Set the initial state, build the queue object that manages updates, and attach it to the Hook.',
    fileLabel: 'file',
    fileName: 'ReactFiberHooks.js',
    buttonLabel: 'View full code on GitHub',
    buttonHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js',
  },
  dispatch: {
    eyebrow: 'dispatch-flow',
    title: 'How dispatch is created',
    flow: [
      { title: 'dispatchSetState', subtitle: 'function', tone: 'violet', visual: 'fn' },
      { title: 'bind', subtitle: 'not this binding', tone: 'cyan', visual: 'bind' },
      {
        title: 'fiber + queue',
        subtitle: 'current component / this Hook',
        tone: 'teal',
        visual: 'cube',
      },
      { title: 'setCount', subtitle: 'the function the user calls', tone: 'sky', visual: 'play' },
    ],
    code: DISPATCH_BIND_CODE,
    explanation: 'setCount is a function that remembers the current Fiber and this Hook’s queue.',
  },
  experiment: {
    eyebrow: 'dissection-experiment',
    title: 'useState dissection experiment',
    tabs: [
      {
        key: 'number',
        label: 'Number',
        userCode: 'const [count, setCount] = useState(0);',
        flow: [
          'Use 0 as initialState',
          "typeof !== 'function', so use it as-is",
          'Save 0 into memoizedState and baseState',
        ],
        internal: [
          { key: 'memoizedState', value: '0' },
          { key: 'baseState', value: '0' },
          {
            key: 'queue',
            value: '',
            children: [
              { key: 'pending', value: 'null' },
              { key: 'lanes', value: 'NoLanes' },
              { key: 'dispatch', value: 'setCount' },
              { key: 'lastRenderedReducer', value: 'basicStateReducer' },
              { key: 'lastRenderedState', value: '0' },
            ],
          },
          { key: 'next', value: 'null' },
        ],
      },
      {
        key: 'string',
        label: 'String',
        userCode: 'const [name, setName] = useState("Park");',
        flow: [
          'Use "Park" as initialState',
          "typeof !== 'function', so use it as-is",
          'Save "Park" into memoizedState and baseState',
        ],
        internal: [
          { key: 'memoizedState', value: '"Park"' },
          { key: 'baseState', value: '"Park"' },
          {
            key: 'queue',
            value: '',
            children: [
              { key: 'pending', value: 'null' },
              { key: 'lanes', value: 'NoLanes' },
              { key: 'dispatch', value: 'setName' },
              { key: 'lastRenderedReducer', value: 'basicStateReducer' },
              { key: 'lastRenderedState', value: '"Park"' },
            ],
          },
          { key: 'next', value: 'null' },
        ],
      },
      {
        key: 'function',
        label: 'Function init',
        userCode: 'const [items, setItems] = useState(() => heavyInit());',
        flow: [
          'Use () => heavyInit() as initialState',
          "typeof === 'function', so call it once to get the result",
          'Save heavyInit() result into memoizedState and baseState',
        ],
        internal: [
          { key: 'memoizedState', value: 'heavyInit()' },
          { key: 'baseState', value: 'heavyInit()' },
          {
            key: 'queue',
            value: '',
            children: [
              { key: 'pending', value: 'null' },
              { key: 'lanes', value: 'NoLanes' },
              { key: 'dispatch', value: 'setItems' },
              { key: 'lastRenderedReducer', value: 'basicStateReducer' },
              { key: 'lastRenderedState', value: 'heavyInit()' },
            ],
          },
          { key: 'next', value: 'null' },
        ],
      },
    ],
    userCodeLabel: 'User code',
    flowLabel: 'Initialization flow',
    internalLabel: 'Internal structure (after first render)',
    tipTitle: 'Try the tabs!',
    tipBody:
      'See how the initialization flow and stored values change with the type of initial value.',
  },
  mission: {
    eyebrow: 'follow-mission',
    title: 'Follow it in the source',
    items: [
      {
        number: '01',
        title: 'Check mountState',
        description: 'See how mountState dispatches into the rest of the flow.',
      },
      {
        number: '02',
        title: 'Read mountStateImpl',
        description: 'Walk through Hook creation and initialization step by step.',
      },
      {
        number: '03',
        title: 'Inspect the queue object',
        description: 'Confirm the meaning and initial values of each queue field.',
      },
      {
        number: '04',
        title: 'Track the dispatch bind',
        description: 'Trace exactly what dispatchSetState.bind(...) closes over.',
      },
    ],
  },
  summary: {
    eyebrow: 'key-takeaways',
    title: 'Key takeaways',
    items: [
      {
        number: 1,
        title: 'useState prepares three things',
        description:
          'It builds the current state, the update queue, and the dispatch function at once.',
        tone: 'sky',
      },
      {
        number: 2,
        title: 'Everything attaches to the Hook node',
        description: 'state, queue and dispatch all live around a single Hook object.',
        tone: 'teal',
      },
      {
        number: 3,
        title: 'dispatch remembers Fiber + queue',
        description: 'setCount carries the current component Fiber and this Hook’s queue.',
        tone: 'violet',
      },
    ],
  },
  cta: {
    label: 'Next: what really happens after setState?',
    href: '/set-state-flow',
    description:
      'Now that you know what useState prepares, see how the queue moves the moment setState is called.',
  },
};

export const useStateInternalsContent: Record<Locale, UseStateInternalsContent> = { ko, en };

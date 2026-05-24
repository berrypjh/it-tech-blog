import type { Locale } from '@it-tech-blog/preferences';

export type Tone = 'sky' | 'cyan' | 'teal' | 'emerald' | 'violet' | 'amber' | 'indigo';

export type HookSideCard = {
  hookName: string;
  code: string;
  caption: string;
  tone: 'sky' | 'teal';
};

export type SharedRow = {
  category: string;
  useStateValue: string;
  useReducerValue: string;
  tone: Tone;
};

export type FlowStep = {
  number: number;
  title: string;
  description: string;
  tone: Tone;
  visual: 'play' | 'box' | 'queue' | 'cog' | 'check';
};

export type DifferenceCard = {
  title: string;
  hookLabel: string;
  items?: string[];
  description?: string;
  tone: Tone;
  visual: 'gauge' | 'branch' | 'link';
};

export type ConnectionPath = {
  label: string;
  nodes: string[];
  tone: Tone;
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
  visual: 'root' | 'reducer' | 'pipeline' | 'target';
};

export type UseReducerSharedContent = {
  hero: {
    badges: { label: string; tone: 'blue' | 'cyan' }[];
    titleLine1: string;
    titleAccent: string;
    description: string;
    useStateCard: HookSideCard;
    useReducerCard: HookSideCard;
    sharedCard: {
      title: string;
      items: string[];
    };
    bottomLabel: string;
  };
  question: {
    eyebrow: string;
    title: string;
  };
  apiCompare: {
    eyebrow: string;
    title: string;
    leftTitle: string;
    leftCode: string;
    leftExamples: string[];
    rightTitle: string;
    rightCode: string;
    rightExamples: string[];
    vsBadge: string;
    emphasis: string;
  };
  sharedTable: {
    eyebrow: string;
    title: string;
    headers: { category: string; useState: string; useReducer: string };
    rows: SharedRow[];
    highlight: string;
  };
  basicReducer: {
    eyebrow: string;
    title: string;
    code: string;
    explanationTitle: string;
    items: string[];
    bottomEmphasis: string;
  };
  updateStatePreview: {
    eyebrow: string;
    title: string;
    code: string;
    fileLabel: string;
    fileName: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
  reducerFlow: {
    eyebrow: string;
    title: string;
    steps: FlowStep[];
  };
  whenDifference: {
    eyebrow: string;
    title: string;
    cards: DifferenceCard[];
  };
  connectionMap: {
    eyebrow: string;
    title: string;
    paths: ConnectionPath[];
    pipelineTitle: string;
    pipelineSubtitle: string;
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

const BASIC_REDUCER_CODE = `function basicStateReducer(state, action) {
  return typeof action === "function"
    ? action(state)
    : action;
}`;

const UPDATE_STATE_CODE = `function updateState(initialState) {
  return updateReducer(basicStateReducer, initialState);
}`;

const ko: UseReducerSharedContent = {
  hero: {
    badges: [
      { label: 'React 내부 탐구', tone: 'blue' },
      { label: 'Hook 공통 구조', tone: 'cyan' },
    ],
    titleLine1: 'useState와 useReducer는',
    titleAccent: '같은 뿌리를 공유한다',
    description:
      '둘 다 Hook 노드와 UpdateQueue를 만들고, dispatch를 통해 업데이트를 등록합니다. 표면적인 API는 다르지만, 내부적으로는 동일한 업데이트 모델을 사용합니다.',
    useStateCard: {
      hookName: 'useState',
      code: 'const [state, setState] = useState(0);',
      caption: 'basicStateReducer 사용',
      tone: 'sky',
    },
    useReducerCard: {
      hookName: 'useReducer',
      code: 'const [state, dispatch] = useReducer(reducer, 0);',
      caption: 'userReducer 사용',
      tone: 'teal',
    },
    sharedCard: {
      title: '공통 queue 구조',
      items: ['Hook 노드', 'UpdateQueue', 'dispatch', 'update action', 'reducer 기반 상태 계산'],
    },
    bottomLabel: '결국 같은 Update 모델로 수렴',
  },
  question: {
    eyebrow: '오늘의 질문',
    title: 'useReducer는 useState보다 완전히 다른 별도 시스템일까?',
  },
  apiCompare: {
    eyebrow: 'api-shape-comparison',
    title: '외형 비교',
    leftTitle: 'useState',
    leftCode: 'const [count, setCount] = useState(0);',
    leftExamples: ['setCount(value);', 'setCount((prev) => prev + 1);'],
    rightTitle: 'useReducer',
    rightCode: 'const [count, dispatch] = useReducer(reducer, 0);',
    rightExamples: ['dispatch({ type: "increment" });', 'dispatch({ type: "decrement" });'],
    vsBadge: 'VS',
    emphasis: 'API는 다르지만 내부 핵심 축(queue + dispatch + reducer 기반 상태 계산)은 겹친다.',
  },
  sharedTable: {
    eyebrow: 'shared-structure',
    title: '내부 공통 구조 비교',
    headers: { category: '구분', useState: 'useState', useReducer: 'useReducer' },
    rows: [
      {
        category: 'Hook 노드',
        useStateValue: 'Hook 객체에 상태와 queue 참조 저장',
        useReducerValue: 'Hook 객체에 상태와 queue 참조 저장',
        tone: 'sky',
      },
      {
        category: 'UpdateQueue',
        useStateValue: 'pending 업데이트를 순환 리스트로 보관',
        useReducerValue: 'pending 업데이트를 순환 리스트로 보관',
        tone: 'cyan',
      },
      {
        category: 'dispatch',
        useStateValue: 'setState 함수',
        useReducerValue: 'dispatch 함수',
        tone: 'teal',
      },
      {
        category: 'update action',
        useStateValue: '새 값 또는 updater 함수',
        useReducerValue: '{ type, payload } 같은 액션 객체',
        tone: 'violet',
      },
      {
        category: '상태 계산 함수',
        useStateValue: 'basicStateReducer 내부 사용',
        useReducerValue: '사용자가 제공한 reducer',
        tone: 'emerald',
      },
    ],
    highlight:
      '핵심: 상태 계산은 적용 방식이 달라도 결국 reducer(state, action)라는 동일한 패턴으로 처리된다.',
  },
  basicReducer: {
    eyebrow: 'basic-state-reducer',
    title: 'basicStateReducer 설명',
    code: BASIC_REDUCER_CODE,
    explanationTitle: 'useState 내부에서도 action을 상태에 적용하는 reducer 모델을 사용합니다.',
    items: [
      '값(value)을 전달하면 그 값을 그대로 새 상태로 사용한다.',
      '함수(updater)를 전달하면 이전 상태를 인자로 실행해 새 상태를 계산한다.',
    ],
    bottomEmphasis: '즉, useState도 reducer 기반입니다.',
  },
  updateStatePreview: {
    eyebrow: 'update-state-code',
    title: '실제 코드: updateState는 updateReducer를 사용한다',
    code: UPDATE_STATE_CODE,
    fileLabel: '파일',
    fileName: 'ReactFiberHooks.js',
    description:
      'updateState는 useState의 업데이트 흐름을 내부적으로 updateReducer에 위임한다. basicStateReducer를 넘겨 공통 흐름을 재사용한다.',
    buttonLabel: 'GitHub에서 전체 코드 보기',
    buttonHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js',
  },
  reducerFlow: {
    eyebrow: 'reducer-update-flow',
    title: 'reducer 업데이트 흐름',
    steps: [
      {
        number: 1,
        title: "dispatch({ type: 'increment' })",
        description: '사용자가 dispatch 호출',
        tone: 'sky',
        visual: 'play',
      },
      {
        number: 2,
        title: 'Update 객체 생성',
        description: 'lane, action 등을 담은 Update 객체 생성',
        tone: 'violet',
        visual: 'box',
      },
      {
        number: 3,
        title: 'queue 등록',
        description: '해당 Hook의 queue에 업데이트를 연결',
        tone: 'cyan',
        visual: 'queue',
      },
      {
        number: 4,
        title: 'render 시 reducer(action) 실행',
        description: '렌더링 단계에서 reducer가 실행됨',
        tone: 'teal',
        visual: 'cog',
      },
      {
        number: 5,
        title: '새 state 계산',
        description: '계산된 새 상태가 memoizedState에 반영',
        tone: 'emerald',
        visual: 'check',
      },
    ],
  },
  whenDifference: {
    eyebrow: 'when-difference',
    title: '어떤 상황에서 차이가 드러나는가?',
    cards: [
      {
        title: '단순 카운터, 토글 등',
        hookLabel: 'useState',
        items: [
          '값이 단순하고 상태 전이가 적을 때',
          '바로 값을 관리하고 싶을 때',
          '보일러플레이트를 줄이고 싶을 때',
        ],
        tone: 'teal',
        visual: 'gauge',
      },
      {
        title: '복잡한 상태 전이, 여러 필드 관리',
        hookLabel: 'useReducer',
        items: [
          '다음 상태가 여러 상태 조각에 의존할 때',
          '여러 액션 타입과 처리 로직이 많을 때',
          '상태 이력처럼 관리하고 싶을 때',
        ],
        tone: 'violet',
        visual: 'branch',
      },
      {
        title: '하지만 기억하세요!',
        hookLabel: '내부 모델의 공통점이 핵심',
        description:
          '두 Hook은 결국 같은 큐, 같은 dispatch, 같은 업데이트 처리 파이프라인을 공유합니다.',
        tone: 'sky',
        visual: 'link',
      },
    ],
  },
  connectionMap: {
    eyebrow: 'internal-connection-map',
    title: '내부 구조 연결도',
    paths: [
      {
        label: 'useState 흐름',
        nodes: ['useState', 'basicStateReducer', 'updateReducer'],
        tone: 'sky',
      },
      {
        label: 'useReducer 흐름',
        nodes: ['useReducer', 'userReducer', 'updateReducer'],
        tone: 'teal',
      },
    ],
    pipelineTitle: 'UpdateQueue + dispatch + 스케줄링 흐름',
    pipelineSubtitle: '(공통 파이프라인)',
  },
  mission: {
    eyebrow: 'follow-mission',
    title: '직접 코드에서 따라가 보기',
    items: [
      {
        number: '01',
        title: 'basicStateReducer 찾기',
        description: 'ReactFiberHooks.js에서 basicStateReducer 함수를 찾아 역할을 확인하세요.',
      },
      {
        number: '02',
        title: 'updateState 확인',
        description: 'updateState가 updateReducer를 호출한다는 사실을 코드로 확인해보세요.',
      },
      {
        number: '03',
        title: 'updateReducer 연결 확인',
        description: 'updateReducer 내부 로직에서 UpdateQueue 처리 흐름을 따라가 보세요.',
      },
      {
        number: '04',
        title: 'mountReducer 구조 훑어보기',
        description: 'mountReducer가 Hook 노드와 queue, dispatch를 어떻게 생성하는지 확인하세요.',
      },
    ],
  },
  summary: {
    eyebrow: 'key-takeaways',
    title: '핵심 정리',
    items: [
      {
        number: 1,
        title: '뿌리는 같다',
        description: 'useState와 useReducer는 같은 Hook + UpdateQueue + dispatch 모델을 사용한다.',
        tone: 'sky',
        visual: 'root',
      },
      {
        number: 2,
        title: '차이는 reducer',
        description:
          'useState는 내부적으로 basicStateReducer를, useReducer는 사용자 reducer를 사용한다.',
        tone: 'teal',
        visual: 'reducer',
      },
      {
        number: 3,
        title: '파이프라인은 동일',
        description: 'dispatch → queue 등록 → render 시 reducer 실행 → 새 state 계산 흐름이 같다.',
        tone: 'violet',
        visual: 'pipeline',
      },
      {
        number: 4,
        title: '선택은 목적에 따라',
        description: '단순하면 useState, 복잡하면 useReducer를 사용하면 된다.',
        tone: 'indigo',
        visual: 'target',
      },
    ],
  },
  cta: {
    label: '다음: useEffect 내부 구조 보기',
    href: '/use-effect-internal',
    description:
      '상태 Hook의 공통 구조를 이해했다면, 이제 React가 나중에 실행할 작업인 Effect를 어떻게 저장하는지 살펴봅니다.',
  },
};

const en: UseReducerSharedContent = {
  hero: {
    badges: [
      { label: 'React Internals', tone: 'blue' },
      { label: 'Hook Common Structure', tone: 'cyan' },
    ],
    titleLine1: 'useState and useReducer',
    titleAccent: 'share the same root',
    description:
      'Both create a Hook node and an UpdateQueue, and register updates via dispatch. The API surface differs, but the internal update model is the same.',
    useStateCard: {
      hookName: 'useState',
      code: 'const [state, setState] = useState(0);',
      caption: 'uses basicStateReducer',
      tone: 'sky',
    },
    useReducerCard: {
      hookName: 'useReducer',
      code: 'const [state, dispatch] = useReducer(reducer, 0);',
      caption: 'uses userReducer',
      tone: 'teal',
    },
    sharedCard: {
      title: 'Shared queue structure',
      items: [
        'Hook node',
        'UpdateQueue',
        'dispatch',
        'update action',
        'reducer-based state compute',
      ],
    },
    bottomLabel: 'They converge to the same Update model',
  },
  question: {
    eyebrow: "Today's question",
    title: 'Is useReducer really a completely separate system from useState?',
  },
  apiCompare: {
    eyebrow: 'api-shape-comparison',
    title: 'API shape comparison',
    leftTitle: 'useState',
    leftCode: 'const [count, setCount] = useState(0);',
    leftExamples: ['setCount(value);', 'setCount((prev) => prev + 1);'],
    rightTitle: 'useReducer',
    rightCode: 'const [count, dispatch] = useReducer(reducer, 0);',
    rightExamples: ['dispatch({ type: "increment" });', 'dispatch({ type: "decrement" });'],
    vsBadge: 'VS',
    emphasis:
      'The API differs, but the internal axis (queue + dispatch + reducer-based state computation) overlaps.',
  },
  sharedTable: {
    eyebrow: 'shared-structure',
    title: 'Shared internal structure',
    headers: { category: 'Category', useState: 'useState', useReducer: 'useReducer' },
    rows: [
      {
        category: 'Hook node',
        useStateValue: 'Stores state + queue reference on Hook',
        useReducerValue: 'Stores state + queue reference on Hook',
        tone: 'sky',
      },
      {
        category: 'UpdateQueue',
        useStateValue: 'Pending updates kept as a circular list',
        useReducerValue: 'Pending updates kept as a circular list',
        tone: 'cyan',
      },
      {
        category: 'dispatch',
        useStateValue: 'setState function',
        useReducerValue: 'dispatch function',
        tone: 'teal',
      },
      {
        category: 'update action',
        useStateValue: 'A new value or an updater function',
        useReducerValue: 'An action object like { type, payload }',
        tone: 'violet',
      },
      {
        category: 'state compute fn',
        useStateValue: 'Uses basicStateReducer internally',
        useReducerValue: 'Uses the user-provided reducer',
        tone: 'emerald',
      },
    ],
    highlight:
      'Key idea: regardless of how the action is applied, state computation always follows the reducer(state, action) pattern.',
  },
  basicReducer: {
    eyebrow: 'basic-state-reducer',
    title: 'basicStateReducer explained',
    code: BASIC_REDUCER_CODE,
    explanationTitle: 'Even useState applies actions to state via a reducer model.',
    items: [
      'A plain value passes through as the next state.',
      'A function (updater) is called with the previous state to compute the next state.',
    ],
    bottomEmphasis: 'In other words — useState is reducer-based too.',
  },
  updateStatePreview: {
    eyebrow: 'update-state-code',
    title: 'Real code: updateState calls updateReducer',
    code: UPDATE_STATE_CODE,
    fileLabel: 'file',
    fileName: 'ReactFiberHooks.js',
    description:
      'updateState delegates useState’s update flow to updateReducer, passing basicStateReducer to reuse the common pipeline.',
    buttonLabel: 'View full code on GitHub',
    buttonHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js',
  },
  reducerFlow: {
    eyebrow: 'reducer-update-flow',
    title: 'Reducer update flow',
    steps: [
      {
        number: 1,
        title: "dispatch({ type: 'increment' })",
        description: 'User calls dispatch',
        tone: 'sky',
        visual: 'play',
      },
      {
        number: 2,
        title: 'Build Update object',
        description: 'Create an Update with lane, action, …',
        tone: 'violet',
        visual: 'box',
      },
      {
        number: 3,
        title: 'Enqueue',
        description: 'Link the update into this Hook’s queue',
        tone: 'cyan',
        visual: 'queue',
      },
      {
        number: 4,
        title: 'Run reducer(action) on render',
        description: 'reducer runs during the render phase',
        tone: 'teal',
        visual: 'cog',
      },
      {
        number: 5,
        title: 'Produce new state',
        description: 'The computed state is written to memoizedState',
        tone: 'emerald',
        visual: 'check',
      },
    ],
  },
  whenDifference: {
    eyebrow: 'when-difference',
    title: 'When does the difference matter?',
    cards: [
      {
        title: 'Simple counters, toggles',
        hookLabel: 'useState',
        items: [
          'Values are simple and transitions are few',
          'You want to manage a value directly',
          'You want less boilerplate',
        ],
        tone: 'teal',
        visual: 'gauge',
      },
      {
        title: 'Complex transitions, many fields',
        hookLabel: 'useReducer',
        items: [
          'Next state depends on multiple state slices',
          'Many action types and handling logic',
          'You want to manage history-like state',
        ],
        tone: 'violet',
        visual: 'branch',
      },
      {
        title: 'But remember!',
        hookLabel: 'The shared internal model is the point',
        description:
          'Both Hooks ultimately share the same queue, dispatch, and update-processing pipeline.',
        tone: 'sky',
        visual: 'link',
      },
    ],
  },
  connectionMap: {
    eyebrow: 'internal-connection-map',
    title: 'Internal structure map',
    paths: [
      {
        label: 'useState path',
        nodes: ['useState', 'basicStateReducer', 'updateReducer'],
        tone: 'sky',
      },
      {
        label: 'useReducer path',
        nodes: ['useReducer', 'userReducer', 'updateReducer'],
        tone: 'teal',
      },
    ],
    pipelineTitle: 'UpdateQueue + dispatch + scheduling',
    pipelineSubtitle: '(shared pipeline)',
  },
  mission: {
    eyebrow: 'follow-mission',
    title: 'Follow it in the source',
    items: [
      {
        number: '01',
        title: 'Find basicStateReducer',
        description: 'Locate basicStateReducer in ReactFiberHooks.js and read its role.',
      },
      {
        number: '02',
        title: 'Check updateState',
        description: 'Confirm that updateState calls updateReducer in the source.',
      },
      {
        number: '03',
        title: 'Connect to updateReducer',
        description: 'Walk through how updateReducer processes the UpdateQueue.',
      },
      {
        number: '04',
        title: 'Skim mountReducer',
        description: 'See how mountReducer wires the Hook node, queue, and dispatch.',
      },
    ],
  },
  summary: {
    eyebrow: 'key-takeaways',
    title: 'Key takeaways',
    items: [
      {
        number: 1,
        title: 'Same root',
        description: 'Both use the same Hook + UpdateQueue + dispatch model.',
        tone: 'sky',
        visual: 'root',
      },
      {
        number: 2,
        title: 'Reducer is the difference',
        description: 'useState uses basicStateReducer; useReducer uses the user-provided reducer.',
        tone: 'teal',
        visual: 'reducer',
      },
      {
        number: 3,
        title: 'Same pipeline',
        description: 'dispatch → enqueue → reducer on render → new state — identical flow.',
        tone: 'violet',
        visual: 'pipeline',
      },
      {
        number: 4,
        title: 'Choose by purpose',
        description: 'Simple? useState. Complex? useReducer.',
        tone: 'indigo',
        visual: 'target',
      },
    ],
  },
  cta: {
    label: 'Next: explore useEffect internals',
    href: '/use-effect-internal',
    description:
      'Now that the shared state model is clear, see how React stores Effects that run later.',
  },
};

export const useReducerSharedContent: Record<Locale, UseReducerSharedContent> = { ko, en };

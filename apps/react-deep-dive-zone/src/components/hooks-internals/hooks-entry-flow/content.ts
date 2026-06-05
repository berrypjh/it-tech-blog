import type { Locale } from '@it-tech-blog/preferences';

export type Tone = 'sky' | 'cyan' | 'teal' | 'emerald' | 'violet' | 'amber';

export type FlowStep = {
  title: string;
  subtitle?: string;
  description: string;
  tone: Tone;
};

export type DispatcherCard = {
  title: string;
  subtitle: string;
  description: string;
  tone: Tone;
};

export type MissionItem = {
  title: string;
  description: string;
  path?: string;
};

export type QuizOption = {
  key: string;
  label: string;
  isAnswer?: boolean;
};

export type TabKey = 'useState' | 'useEffect' | 'useReducer';

export type ConnectionFlowItem = {
  title: string;
  detail: string;
};

export type ConnectionFlow = {
  key: TabKey;
  steps: ConnectionFlowItem[];
  summary: { title: string; description: string };
};

export type HooksEntryFlowContent = {
  hero: {
    badge: string;
    title: string;
    description: string;
    leftCard: { title: string; code: string };
    rightCard: {
      title: string;
      steps: { label: string; tone: Tone }[];
    };
  };
  question: {
    eyebrow: string;
    title: string;
    goals: { label: string; tone: Tone }[];
  };
  quiz: {
    leftTitle: string;
    counterCode: string;
    rightTitle: string;
    options: QuizOption[];
    answerTitle: string;
    answerDescription: string;
  };
  overview: {
    eyebrow: string;
    title: string;
    steps: FlowStep[];
    highlight: { label: string; body: string };
  };
  realCode: {
    badge: string;
    title: string;
    fileName: string;
    code: string;
    description: string;
    links: { title: string; description: string; href: string; external?: boolean }[];
  };
  dispatcher: {
    eyebrow: string;
    title: string;
    description: string;
    cards: DispatcherCard[];
  };
  tabs: {
    eyebrow: string;
    title: string;
    description: string;
    tabs: { key: TabKey; label: string }[];
    flows: ConnectionFlow[];
  };
  mission: {
    eyebrow: string;
    title: string;
    description: string;
    items: MissionItem[];
  };
  summary: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const COUNTER_CODE = `function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`;

const USE_STATE_SOURCE = `export function useState(initialState) {
  const dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}`;

const ko: HooksEntryFlowContent = {
  hero: {
    badge: 'Hooks 내부 · 1/10단계',
    title: 'Hooks는 어디서 시작될까?',
    description:
      '우리가 호출하는 useState와 useEffect는 실제 구현체가 아니라, React 내부 Hook 시스템으로 들어가는 입구입니다.',
    leftCard: {
      title: '우리가 작성하는 코드',
      code: 'const [count, setCount] = useState(0);',
    },
    rightCard: {
      title: 'Hook 진입 흐름 (Entry Flow)',
      steps: [
        { label: 'useState', tone: 'sky' },
        { label: 'Dispatcher', tone: 'cyan' },
        { label: '실제 Hook 구현', tone: 'emerald' },
      ],
    },
  },
  question: {
    eyebrow: '오늘 해결할 질문',
    title: 'useState를 호출하면 React 내부에서는 가장 먼저 어떤 함수가 움직일까?',
    goals: [
      { label: '공개 API 확인', tone: 'sky' },
      { label: 'Dispatcher 이해', tone: 'cyan' },
      { label: '실제 구현 연결', tone: 'emerald' },
    ],
  },
  quiz: {
    leftTitle: 'Counter 예제',
    counterCode: COUNTER_CODE,
    rightTitle: '가장 먼저 진입하는 함수는?',
    options: [
      { key: 'A', label: 'mountState()' },
      { key: 'B', label: 'resolveDispatcher()', isAnswer: true },
      { key: 'C', label: 'updateState()' },
    ],
    answerTitle: '정답: resolveDispatcher()',
    answerDescription:
      '공개 useState는 먼저 현재 Dispatcher를 가져온 뒤, 그 Dispatcher를 통해 실제 Hook 구현으로 연결됩니다.',
  },
  overview: {
    eyebrow: 'flow-overview',
    title: 'Hook 호출 흐름 한눈에 보기',
    steps: [
      {
        title: '사용자 코드',
        subtitle: 'useState(0)',
        description: '우리가 작성한 컴포넌트에서 호출',
        tone: 'sky',
      },
      {
        title: 'ReactHooks.js',
        description: '공개 Hook 함수들이 정의된 파일',
        tone: 'violet',
      },
      {
        title: 'resolveDispatcher()',
        description: '현재 렌더링 상황에 맞는 Dispatcher를 찾음',
        tone: 'cyan',
      },
      {
        title: 'dispatcher.useState()',
        description: '현재 Dispatcher의 useState 구현 호출',
        tone: 'teal',
      },
      {
        title: 'ReactFiberHooks.js',
        subtitle: 'mountState / updateState',
        description: '실제 상태 로직 실행',
        tone: 'emerald',
      },
    ],
    highlight: {
      label: '핵심',
      body: '공개 Hook은 직접 동작하지 않고 Dispatcher를 통해 분기됩니다.',
    },
  },
  realCode: {
    badge: '실제 코드 ①',
    title: '공개 useState는 무엇을 하는가?',
    fileName: 'ReactHooks.js',
    code: USE_STATE_SOURCE,
    description:
      '공개 useState는 현재 렌더링 상황에 맞는 Dispatcher를 찾고, 그 안의 useState 구현을 호출합니다.',
    links: [
      {
        title: 'GitHub에서 전체 코드 보기',
        description: 'React 저장소에서 실제 소스 코드를 확인해보세요.',
        href: 'https://github.com/facebook/react/blob/main/packages/react/src/ReactHooks.js',
        external: true,
      },
      {
        title: 'Source Preview',
        description: 'GitHub',
        href: 'https://github.com/facebook/react/tree/main/packages/react/src',
        external: true,
      },
    ],
  },
  dispatcher: {
    eyebrow: 'why-dispatcher',
    title: 'Dispatcher는 왜 필요한가?',
    description: '같은 useState 호출이라도 렌더링 상황에 따라 연결되는 내부 구현이 달라집니다.',
    cards: [
      {
        title: '최초 렌더',
        subtitle: 'mount 계열 Hook',
        description: '컴포넌트가 처음 렌더링될 때 상태를 초기화하고 준비합니다.',
        tone: 'sky',
      },
      {
        title: '업데이트 렌더',
        subtitle: 'update 계열 Hook',
        description: '상태가 변경되어 컴포넌트가 다시 렌더링될 때 사용합니다.',
        tone: 'cyan',
      },
      {
        title: '렌더 중 재실행',
        subtitle: 'rerender 계열 Hook',
        description: '렌더링 도중 setState가 호출되어 다시 렌더링이 발생할 때 사용됩니다.',
        tone: 'violet',
      },
    ],
  },
  tabs: {
    eyebrow: 'hook-by-hook',
    title: 'Hook별 연결 비교',
    description: '공개 API → Dispatcher → 실제 구현으로 이어지는 흐름을 Hook마다 확인해보세요.',
    tabs: [
      { key: 'useState', label: 'useState' },
      { key: 'useEffect', label: 'useEffect' },
      { key: 'useReducer', label: 'useReducer' },
    ],
    flows: [
      {
        key: 'useState',
        steps: [
          { title: 'ReactHooks.js', detail: '공개 API 정의' },
          { title: 'dispatcher.useState', detail: '현재 Dispatcher의 구현' },
          { title: 'mountState / updateState', detail: 'ReactFiberHooks.js' },
        ],
        summary: {
          title: 'useState 흐름 요약',
          description: '공개 API → Dispatcher → 실제 상태 구현으로 연결됩니다.',
        },
      },
      {
        key: 'useEffect',
        steps: [
          { title: 'ReactHooks.js', detail: 'useEffect 공개 API' },
          { title: 'dispatcher.useEffect', detail: '현재 Dispatcher의 구현' },
          { title: 'mountEffect / updateEffect', detail: 'ReactFiberHooks.js' },
        ],
        summary: {
          title: 'useEffect 흐름 요약',
          description: '공개 API → Dispatcher → 실제 effect 등록 구현으로 연결됩니다.',
        },
      },
      {
        key: 'useReducer',
        steps: [
          { title: 'ReactHooks.js', detail: 'useReducer 공개 API' },
          { title: 'dispatcher.useReducer', detail: '현재 Dispatcher의 구현' },
          { title: 'mountReducer / updateReducer', detail: 'ReactFiberHooks.js' },
        ],
        summary: {
          title: 'useReducer 흐름 요약',
          description: '공개 API → Dispatcher → 실제 reducer 구현으로 연결됩니다.',
        },
      },
    ],
  },
  mission: {
    eyebrow: 'follow-mission',
    title: '직접 코드에서 따라가 보기',
    description: '실제 React 저장소를 열고 아래 흐름을 따라가며 진입점을 직접 확인해보세요.',
    items: [
      {
        title: 'ReactHooks.js에서 useState 찾기',
        description: '공개 useState 함수가 정의된 위치를 확인합니다.',
        path: 'packages/react/src/ReactHooks.js',
      },
      {
        title: 'resolveDispatcher 호출 확인하기',
        description: '현재 렌더링 상황의 Dispatcher를 가져오는 지점을 찾습니다.',
      },
      {
        title: 'useEffect도 같은 패턴인지 비교하기',
        description: 'ReactHooks.js에서 useEffect 구현이 같은 형태인지 확인합니다.',
      },
    ],
  },
  summary: {
    eyebrow: 'key-takeaways',
    title: '이번 페이지에서 반드시 기억할 것',
    items: [
      '공개 useState는 실제 상태 로직이 아니라 진입점이다.',
      '먼저 resolveDispatcher()가 현재 Hook Dispatcher를 찾는다.',
      '실제 구현은 mountState / updateState 같은 내부 함수로 이어진다.',
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'renderWithHooks 이해하기',
    description: '다음 단계에서는 Hook이 렌더링 과정에서 어떻게 실행되는지 이어서 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/render-with-hooks',
  },
};

const en: HooksEntryFlowContent = {
  hero: {
    badge: 'Hooks Internals · 1/10',
    title: 'Where Do Hooks Begin?',
    description:
      'The useState and useEffect you call are not the real implementation — they are the entry points into React’s internal Hook system.',
    leftCard: {
      title: 'The code we write',
      code: 'const [count, setCount] = useState(0);',
    },
    rightCard: {
      title: 'Hook Entry Flow',
      steps: [
        { label: 'useState', tone: 'sky' },
        { label: 'Dispatcher', tone: 'cyan' },
        { label: 'Real Hook impl', tone: 'emerald' },
      ],
    },
  },
  question: {
    eyebrow: "Today's question",
    title: 'When you call useState, which function inside React moves first?',
    goals: [
      { label: 'Public API check', tone: 'sky' },
      { label: 'Understand the Dispatcher', tone: 'cyan' },
      { label: 'Connect to real impl', tone: 'emerald' },
    ],
  },
  quiz: {
    leftTitle: 'Counter example',
    counterCode: COUNTER_CODE,
    rightTitle: 'Which function is entered first?',
    options: [
      { key: 'A', label: 'mountState()' },
      { key: 'B', label: 'resolveDispatcher()', isAnswer: true },
      { key: 'C', label: 'updateState()' },
    ],
    answerTitle: 'Answer: resolveDispatcher()',
    answerDescription:
      'Public useState first fetches the current Dispatcher, and only then routes to the real Hook implementation through that Dispatcher.',
  },
  overview: {
    eyebrow: 'flow-overview',
    title: 'The Hook call flow at a glance',
    steps: [
      {
        title: 'User code',
        subtitle: 'useState(0)',
        description: 'Called from a component you wrote',
        tone: 'sky',
      },
      {
        title: 'ReactHooks.js',
        description: 'Where public Hook functions are defined',
        tone: 'violet',
      },
      {
        title: 'resolveDispatcher()',
        description: 'Find the Dispatcher for the current render',
        tone: 'cyan',
      },
      {
        title: 'dispatcher.useState()',
        description: 'Call into the current Dispatcher’s useState',
        tone: 'teal',
      },
      {
        title: 'ReactFiberHooks.js',
        subtitle: 'mountState / updateState',
        description: 'Real state logic runs here',
        tone: 'emerald',
      },
    ],
    highlight: {
      label: 'Key idea',
      body: 'Public Hooks do not run logic themselves — they branch through the Dispatcher.',
    },
  },
  realCode: {
    badge: 'Real code ①',
    title: 'What does public useState actually do?',
    fileName: 'ReactHooks.js',
    code: USE_STATE_SOURCE,
    description:
      'Public useState finds the Dispatcher for the current render and calls the useState implementation inside it.',
    links: [
      {
        title: 'View full code on GitHub',
        description: 'Check the actual source in the React repository.',
        href: 'https://github.com/facebook/react/blob/main/packages/react/src/ReactHooks.js',
        external: true,
      },
      {
        title: 'Source Preview',
        description: 'GitHub',
        href: 'https://github.com/facebook/react/tree/main/packages/react/src',
        external: true,
      },
    ],
  },
  dispatcher: {
    eyebrow: 'why-dispatcher',
    title: 'Why does the Dispatcher exist?',
    description:
      'The same useState call resolves to a different internal implementation depending on the render situation.',
    cards: [
      {
        title: 'Initial render',
        subtitle: 'mount-family Hooks',
        description:
          'Initializes and prepares state when the component renders for the first time.',
        tone: 'sky',
      },
      {
        title: 'Update render',
        subtitle: 'update-family Hooks',
        description: 'Used when the component re-renders after a state change.',
        tone: 'cyan',
      },
      {
        title: 'Re-run during render',
        subtitle: 'rerender-family Hooks',
        description: 'Used when setState is called mid-render, causing another render to happen.',
        tone: 'violet',
      },
    ],
  },
  tabs: {
    eyebrow: 'hook-by-hook',
    title: 'Hook-by-Hook connection',
    description: 'See how public API → Dispatcher → real implementation looks for each Hook.',
    tabs: [
      { key: 'useState', label: 'useState' },
      { key: 'useEffect', label: 'useEffect' },
      { key: 'useReducer', label: 'useReducer' },
    ],
    flows: [
      {
        key: 'useState',
        steps: [
          { title: 'ReactHooks.js', detail: 'public API definition' },
          { title: 'dispatcher.useState', detail: 'current Dispatcher implementation' },
          { title: 'mountState / updateState', detail: 'ReactFiberHooks.js' },
        ],
        summary: {
          title: 'useState flow recap',
          description: 'Public API → Dispatcher → real state implementation.',
        },
      },
      {
        key: 'useEffect',
        steps: [
          { title: 'ReactHooks.js', detail: 'useEffect public API' },
          { title: 'dispatcher.useEffect', detail: 'current Dispatcher implementation' },
          { title: 'mountEffect / updateEffect', detail: 'ReactFiberHooks.js' },
        ],
        summary: {
          title: 'useEffect flow recap',
          description: 'Public API → Dispatcher → real effect registration.',
        },
      },
      {
        key: 'useReducer',
        steps: [
          { title: 'ReactHooks.js', detail: 'useReducer public API' },
          { title: 'dispatcher.useReducer', detail: 'current Dispatcher implementation' },
          { title: 'mountReducer / updateReducer', detail: 'ReactFiberHooks.js' },
        ],
        summary: {
          title: 'useReducer flow recap',
          description: 'Public API → Dispatcher → real reducer implementation.',
        },
      },
    ],
  },
  mission: {
    eyebrow: 'follow-mission',
    title: 'Follow it in the source',
    description: 'Open the React repository and walk through the entry point yourself.',
    items: [
      {
        title: 'Find useState in ReactHooks.js',
        description: 'Locate where the public useState is defined.',
        path: 'packages/react/src/ReactHooks.js',
      },
      {
        title: 'Confirm the resolveDispatcher call',
        description: 'Find where it fetches the Dispatcher for the current render.',
      },
      {
        title: 'Compare useEffect to the same pattern',
        description: 'Check that useEffect in ReactHooks.js looks the same shape.',
      },
    ],
  },
  summary: {
    eyebrow: 'key-takeaways',
    title: 'Must remember from this page',
    items: [
      'Public useState is an entry point, not the real state logic.',
      'resolveDispatcher() fetches the current Hook Dispatcher first.',
      'The real implementation lives in mountState / updateState.',
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Understanding renderWithHooks',
    description: 'Next we look at how Hooks actually run during rendering.',
    cta: 'Go to the next page',
    href: '/render-with-hooks',
  },
};

export const hooksEntryFlowContent: Record<Locale, HooksEntryFlowContent> = { ko, en };

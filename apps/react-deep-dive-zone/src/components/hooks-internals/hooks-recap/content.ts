import type { Locale } from '@it-tech-blog/preferences';

import type { FinaleBannerContent } from '../../shared/FinalLaunchBanner';

export type Tone =
  | 'sky'
  | 'cyan'
  | 'teal'
  | 'emerald'
  | 'violet'
  | 'amber'
  | 'orange'
  | 'rose'
  | 'indigo';

export type FlowStep = {
  number: string;
  title: string;
  description: string;
  tone: Tone;
  visual: 'play' | 'fn' | 'split' | 'cog' | 'list' | 'state' | 'effect' | 'commit' | 'zap';
  isBranch?: boolean;
};

export type PageMapItem = {
  number: number;
  title: string;
  description: string;
  tone: Tone;
};

export type DataStructure = {
  title: string;
  description: string;
  fields?: string[];
  visualLines?: string[];
  tone: Tone;
};

export type FunctionRow = {
  name: string;
  file: string;
  description: string;
  tone: Tone;
};

export type SimulatorStep = {
  number: number;
  title: string;
  description: string;
  tone: Tone;
  visual: 'click' | 'box' | 'queue' | 'replay' | 'compute' | 'compare' | 'commit' | 'play';
};

export type ChecklistItem = {
  title: string;
  detail: string;
  tone: Tone;
};

export type QuizItem = {
  question: string;
  options: { label: string; text: string; isAnswer: boolean }[];
  answerLabel: string;
  answerExplain: string;
};

export type LearningPathItem = {
  title: string;
  description: string;
  tone: Tone;
  visual: 'event' | 'scheduler' | 'suspense';
};

export type HooksRecapContent = {
  hero: {
    badge: string;
    titleLine1: string;
    titleAccent: string;
    description: string;
    keywords: { label: string; tone: Tone }[];
    diagramTitle: string;
    diagramSteps: FlowStep[];
  };
  fullFlow: {
    eyebrow: string;
    title: string;
    steps: FlowStep[];
    explanationTitle: string;
    explanation: string[];
    memoryPoint: string;
  };
  pageMap: {
    eyebrow: string;
    title: string;
    items: PageMapItem[];
  };
  dataStructures: {
    eyebrow: string;
    title: string;
    items: DataStructure[];
  };
  functions: {
    eyebrow: string;
    title: string;
    headers: { name: string; file: string; description: string };
    rows: FunctionRow[];
  };
  simulator: {
    eyebrow: string;
    title: string;
    code: string;
    mockLabel: string;
    mockValue: string;
    mockButton: string;
    steps: SimulatorStep[];
  };
  checklist: {
    eyebrow: string;
    title: string;
    items: ChecklistItem[];
  };
  quiz: {
    eyebrow: string;
    title: string;
    answerPrefix: string;
    quizzes: QuizItem[];
  };
  nextPath: {
    eyebrow: string;
    title: string;
    items: LearningPathItem[];
  };
  finale: FinaleBannerContent;
};

const COUNTER_CODE = `function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('effect run:', count);
    return () => console.log('cleanup:', count);
  }, [count]);

  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}`;

const HERO_DIAGRAM_KO: FlowStep[] = [
  {
    number: '1',
    title: '공개 API',
    description: 'useState() / useEffect()',
    tone: 'sky',
    visual: 'play',
  },
  {
    number: '2',
    title: 'Dispatcher',
    description: 'resolveDispatcher()',
    tone: 'cyan',
    visual: 'fn',
  },
  {
    number: '3',
    title: 'renderWithHooks',
    description: '현재 Fiber 설정',
    tone: 'teal',
    visual: 'cog',
  },
  {
    number: '4',
    title: 'Hook linked list',
    description: 'Fiber.memoizedState',
    tone: 'violet',
    visual: 'list',
  },
  {
    number: '5',
    title: '각 Hook 처리',
    description: 'State Hook / Effect Hook',
    tone: 'indigo',
    visual: 'split',
    isBranch: true,
  },
  {
    number: 'A',
    title: 'State Hook',
    description: 'queue / dispatch',
    tone: 'teal',
    visual: 'state',
  },
  {
    number: 'B',
    title: 'Effect Hook',
    description: 'effect object',
    tone: 'orange',
    visual: 'effect',
  },
  {
    number: '6',
    title: 'Commit 이후 실행',
    description: 'Passive Effect 단계에서 callback 실행',
    tone: 'emerald',
    visual: 'commit',
  },
];

const FULL_FLOW_STEPS_KO: FlowStep[] = [
  {
    number: '1',
    title: '사용자 코드',
    description: 'useState / useEffect 호출',
    tone: 'sky',
    visual: 'play',
  },
  { number: '2', title: 'ReactHooks.js', description: '공개 API 실행', tone: 'cyan', visual: 'fn' },
  {
    number: '3',
    title: 'resolveDispatcher()',
    description: '현재 렌더 상황에 맞는 dispatcher 선택',
    tone: 'cyan',
    visual: 'split',
  },
  {
    number: '4',
    title: 'renderWithHooks()',
    description: 'Fiber, lanes, props를 준비한 뒤 컴포넌트 실행',
    tone: 'teal',
    visual: 'cog',
  },
  {
    number: '5',
    title: 'Hook linked list 생성',
    description: 'Fiber.memoizedState를 통해 Hook 노드 연결',
    tone: 'violet',
    visual: 'list',
  },
  {
    number: '6-1',
    title: '상태(State) Hook 흐름',
    description: 'useState / useReducer · 노드 생성 · UpdateQueue · dispatch',
    tone: 'teal',
    visual: 'state',
  },
  {
    number: '6-2',
    title: 'Effect Hook 흐름',
    description: 'useEffect / useLayoutEffect · Effect 객체 · fiber.flags · Commit 이후 실행',
    tone: 'orange',
    visual: 'effect',
  },
  {
    number: '7',
    title: 'Commit Phase',
    description: 'DOM 반영 및 Effect 처리',
    tone: 'rose',
    visual: 'commit',
  },
  {
    number: '8',
    title: 'Passive Effect 실행',
    description: 'commitHookPassiveMountEffects · useEffect callback 실행',
    tone: 'emerald',
    visual: 'zap',
  },
];

const ko: HooksRecapContent = {
  hero: {
    badge: 'Hooks 내부 · 10/10단계',
    titleLine1: 'Hooks 내부 구조,',
    titleAccent: '이제 한 장으로 정리해보자',
    description:
      '공개 API에서 시작해 Fiber의 Hook 리스트, 업데이트 큐, Effect 처리까지 하나의 내부 흐름으로 다시 연결합니다.',
    keywords: [
      { label: 'Dispatcher', tone: 'cyan' },
      { label: 'Hook linked list', tone: 'violet' },
      { label: 'UpdateQueue', tone: 'teal' },
      { label: 'Effect', tone: 'orange' },
      { label: 'Commit', tone: 'rose' },
    ],
    diagramTitle: 'Hooks 전체 흐름',
    diagramSteps: HERO_DIAGRAM_KO,
  },
  fullFlow: {
    eyebrow: 'full-flow-summary',
    title: 'Hooks 전체 흐름 한 장 요약',
    steps: FULL_FLOW_STEPS_KO,
    explanationTitle: '흐름 설명',
    explanation: [
      '개발자가 Hooks를 호출하면 공개 API가 실행됩니다.',
      '공개 API는 내부에서 resolveDispatcher()를 호출합니다.',
      '현재 렌더 상황에 맞는 Dispatcher가 선택됩니다.',
      'renderWithHooks가 컴포넌트를 호출하여 Hooks 호출 환경을 만듭니다.',
      '각 Hook 호출은 Hook linked list 노드로 저장됩니다.',
      '상태 Hook은 queue/dispatch를 사용해 업데이트를 관리하고, Effect Hook은 Effect 객체로 등록됩니다.',
      'Commit 단계에서 DOM이 반영됩니다.',
      'Commit 이후 Passive Effect가 실제로 실행됩니다.',
    ],
    memoryPoint: 'Hooks는 "렌더 중 기록, Commit 이후 실행"이 핵심입니다.',
  },
  pageMap: {
    eyebrow: 'page-connection-map',
    title: '9개 핵심 페이지 연결 지도',
    items: [
      {
        number: 1,
        title: 'Hook의 입구',
        description: 'useState와 useEffect는 Dispatcher로 들어가는 공개 API입니다.',
        tone: 'sky',
      },
      {
        number: 2,
        title: 'renderWithHooks',
        description: '함수 컴포넌트를 실행하기 전 Hook 추적 환경을 만듭니다.',
        tone: 'cyan',
      },
      {
        number: 3,
        title: 'Hook linked list',
        description: 'Hook 노드가 호출 순서대로 Fiber에 연결됩니다.',
        tone: 'violet',
      },
      {
        number: 4,
        title: 'useState',
        description: 'state, queue, dispatch를 함께 만드는 구조입니다.',
        tone: 'teal',
      },
      {
        number: 5,
        title: 'setState 이후 흐름',
        description: 'Update 객체 → queue 등록 → 렌더 작업 예약까지의 흐름입니다.',
        tone: 'indigo',
      },
      {
        number: 6,
        title: 'useReducer',
        description: 'useState와 같은 queue 모델을 공유합니다.',
        tone: 'cyan',
      },
      {
        number: 7,
        title: 'useEffect',
        description: 'Effect 객체를 등록하고 Commit 이후 실행합니다.',
        tone: 'orange',
      },
      {
        number: 8,
        title: 'Rules of Hooks',
        description: 'Hook 순서가 바뀌면 매칭이 무너지는 이유를 이해합니다.',
        tone: 'rose',
      },
      {
        number: 9,
        title: 'React 19 Hooks',
        description: '새로운 Hook도 기존 구조 위에서 읽습니다.',
        tone: 'emerald',
      },
    ],
  },
  dataStructures: {
    eyebrow: 'core-data-structures',
    title: '핵심 내부 자료구조 4가지',
    items: [
      {
        title: 'Fiber.memoizedState',
        description: 'Hook linked list의 헤드 포인터가 저장됩니다.',
        visualLines: ['Fiber.memoizedState', 'Hook #1', 'Hook #2'],
        tone: 'sky',
      },
      {
        title: 'Hook 노드',
        description: '각 Hook 호출이 하나의 노드로 연결됩니다.',
        fields: ['memoizedState', 'baseState', 'queue / deps', 'next'],
        tone: 'violet',
      },
      {
        title: 'UpdateQueue',
        description: '상태 업데이트를 저장하고 스케줄링을 돕습니다.',
        fields: ['pending', 'lanes', 'lastRenderedReducer', 'lastRenderedState', 'dispatch'],
        tone: 'teal',
      },
      {
        title: 'Effect list',
        description: 'Effect 객체가 모여 Commit 후 처리됩니다.',
        fields: ['tag', 'create', 'inst', 'deps', 'next'],
        tone: 'orange',
      },
    ],
  },
  functions: {
    eyebrow: 'core-functions-review',
    title: '핵심 함수 복습',
    headers: { name: '함수명', file: '위치(파일)', description: '역할 설명' },
    rows: [
      {
        name: 'resolveDispatcher',
        file: 'ReactHooks.js',
        description: '현재 렌더 컨텍스트에 맞는 dispatcher를 선택합니다.',
        tone: 'cyan',
      },
      {
        name: 'renderWithHooks',
        file: 'ReactFiberHooks.js',
        description: '함수 컴포넌트를 실행할 준비를 하고, Hook 추적을 시작합니다.',
        tone: 'teal',
      },
      {
        name: 'mountWorkInProgressHook',
        file: 'ReactFiberHooks.js',
        description: '새로운 Hook 노드를 만들고 linked list에 연결합니다.',
        tone: 'violet',
      },
      {
        name: 'mountStateImpl',
        file: 'ReactFiberHooks.js',
        description: '초기 state와 UpdateQueue를 만들고 dispatch를 준비합니다.',
        tone: 'sky',
      },
      {
        name: 'dispatchSetState',
        file: 'ReactFiberHooks.js',
        description: 'Update 객체를 생성하고 queue에 등록 후 렌더를 예약합니다.',
        tone: 'indigo',
      },
      {
        name: 'updateEffectImpl',
        file: 'ReactFiberHooks.js',
        description: 'deps 비교 후 Effect 객체 생성 여부를 결정합니다.',
        tone: 'orange',
      },
      {
        name: 'commitHookPassiveMountEffects',
        file: 'ReactFiberCommitEffects.js',
        description: 'Commit 이후 Passive Effect callback을 실제로 실행합니다.',
        tone: 'emerald',
      },
    ],
  },
  simulator: {
    eyebrow: 'integrated-simulator',
    title: '종합 시뮬레이터: Counter 동작 흐름 따라가기',
    code: COUNTER_CODE,
    mockLabel: '현재 화면',
    mockValue: '0',
    mockButton: '+1',
    steps: [
      {
        number: 1,
        title: 'setCount 호출',
        description: '사용자 클릭으로 dispatch가 호출됩니다.',
        tone: 'sky',
        visual: 'click',
      },
      {
        number: 2,
        title: 'Update 객체 생성',
        description: 'action c => c + 1과 lane을 가진 Update 생성',
        tone: 'violet',
        visual: 'box',
      },
      {
        number: 3,
        title: 'queue 등록',
        description: 'Update가 queue.pending에 순환 연결됩니다.',
        tone: 'cyan',
        visual: 'queue',
      },
      {
        number: 4,
        title: 'renderWithHooks 재진입',
        description: '스케줄된 작업으로 컴포넌트를 다시 렌더링합니다.',
        tone: 'teal',
        visual: 'replay',
      },
      {
        number: 5,
        title: 'updateState로 계산',
        description: 'queue의 Update를 처리해 새 state를 계산합니다.',
        tone: 'indigo',
        visual: 'compute',
      },
      {
        number: 6,
        title: 'updateEffectImpl',
        description: 'deps [count] 비교 후 Effect 객체를 준비합니다.',
        tone: 'orange',
        visual: 'compare',
      },
      {
        number: 7,
        title: 'Commit',
        description: 'DOM 반영 및 fiber.flags 처리가 일어납니다.',
        tone: 'rose',
        visual: 'commit',
      },
      {
        number: 8,
        title: 'Passive Effect 실행',
        description: 'commitHookPassiveMountEffects가 useEffect callback을 실행합니다.',
        tone: 'emerald',
        visual: 'play',
      },
    ],
  },
  checklist: {
    eyebrow: 'reading-checklist',
    title: '실전 읽기 체크리스트',
    items: [
      {
        title: '공개 API에서 시작했는가?',
        detail: '진입점이 useState/useEffect 같은 공개 API인지 확인',
        tone: 'sky',
      },
      {
        title: 'Dispatcher를 거쳤는가?',
        detail: 'resolveDispatcher가 어떤 dispatcher를 골랐는지 추적',
        tone: 'cyan',
      },
      {
        title: 'mount / update 구분을 봤는가?',
        detail: 'mountX / updateX 분기 식별',
        tone: 'violet',
      },
      {
        title: 'Hook이 어느 Fiber에 연결되는지 봤는가?',
        detail: 'currentlyRenderingFiber 흐름 확인',
        tone: 'teal',
      },
      {
        title: 'queue / effect list가 등장하는가?',
        detail: 'UpdateQueue / Effect linked list 식별',
        tone: 'orange',
      },
      {
        title: 'render와 commit을 분리했는가?',
        detail: '렌더 중 기록 / Commit 이후 실행 분리',
        tone: 'rose',
      },
    ],
  },
  quiz: {
    eyebrow: 'mini-quiz',
    title: '미니 퀴즈',
    answerPrefix: '정답',
    quizzes: [
      {
        question: 'useState의 실제 상태값은 어디에 저장될까?',
        options: [
          { label: 'A', text: 'Fiber.memoizedProps', isAnswer: false },
          { label: 'B', text: 'Hook.memoizedState', isAnswer: true },
          { label: 'C', text: 'UpdateQueue.lanes', isAnswer: false },
          { label: 'D', text: 'effect.deps', isAnswer: false },
        ],
        answerLabel: 'B',
        answerExplain: 'state Hook의 현재 상태값은 그 Hook 노드의 memoizedState 필드에 저장됩니다.',
      },
      {
        question: 'useEffect의 callback은 언제 실행될까?',
        options: [
          { label: 'A', text: '렌더 중 즉시', isAnswer: false },
          { label: 'B', text: 'Commit 전', isAnswer: false },
          { label: 'C', text: 'Commit 이후 Passive Effect 단계', isAnswer: true },
          { label: 'D', text: '업데이트 큐 등록 직후', isAnswer: false },
        ],
        answerLabel: 'C',
        answerExplain:
          'render에서는 Effect 등록만, 실행은 Commit 이후 Passive Effect 단계에서 일어납니다.',
      },
      {
        question: 'Rules of Hooks가 필요한 이유는?',
        options: [
          { label: 'A', text: '성능 최적화 때문에', isAnswer: false },
          { label: 'B', text: '코드 스타일 유지 때문에', isAnswer: false },
          { label: 'C', text: 'Hook linked list 순서 매칭을 유지하기 위해', isAnswer: true },
          { label: 'D', text: '빌드 용량을 줄이기 위해', isAnswer: false },
        ],
        answerLabel: 'C',
        answerExplain:
          'React는 Hook을 호출 순서로 매칭하므로 순서가 바뀌면 이전 상태를 잘못 읽게 됩니다.',
      },
    ],
  },
  nextPath: {
    eyebrow: 'next-learning-path',
    title: '다음 마무리',
    items: [
      {
        title: '이벤트 시스템 내부 흐름',
        description: 'Synthetic Event, 이벤트 위임, React에서 이벤트가 처리되는 과정을 읽습니다.',
        tone: 'sky',
        visual: 'event',
      },
      {
        title: 'Scheduler와 우선순위',
        description: 'Lane과 우선순위, 스케줄링된 업데이트가 어떤 순서로 처리되는지 살펴봅니다.',
        tone: 'violet',
        visual: 'scheduler',
      },
      {
        title: 'Suspense / Hydration 내부 구조',
        description: 'Suspense와 Thenable 추적, 서버 렌더링 후 이어지는 Hydration 구조를 읽습니다.',
        tone: 'teal',
        visual: 'suspense',
      },
    ],
  },
  finale: {
    progressLabel: '10/15 챕터 완료',
    copyLine1: 'Hooks 내부 구조를',
    copyLine2: '전체적으로 복습했습니다.',
    copyLine3: '이제 이벤트 시스템으로.',
    primaryCta: '이벤트 시스템 내부 흐름 읽기',
    primaryHref: '/why-event-system',
    secondaryCta: 'Hooks 챕터 처음부터 다시 보기',
    secondaryHref: '/hooks-entry-point',
  },
};

const HERO_DIAGRAM_EN: FlowStep[] = [
  {
    number: '1',
    title: 'Public API',
    description: 'useState() / useEffect()',
    tone: 'sky',
    visual: 'play',
  },
  {
    number: '2',
    title: 'Dispatcher',
    description: 'resolveDispatcher()',
    tone: 'cyan',
    visual: 'fn',
  },
  {
    number: '3',
    title: 'renderWithHooks',
    description: 'Set the current Fiber',
    tone: 'teal',
    visual: 'cog',
  },
  {
    number: '4',
    title: 'Hook linked list',
    description: 'Fiber.memoizedState',
    tone: 'violet',
    visual: 'list',
  },
  {
    number: '5',
    title: 'Per-hook processing',
    description: 'State Hook / Effect Hook',
    tone: 'indigo',
    visual: 'split',
    isBranch: true,
  },
  {
    number: 'A',
    title: 'State Hook',
    description: 'queue / dispatch',
    tone: 'teal',
    visual: 'state',
  },
  {
    number: 'B',
    title: 'Effect Hook',
    description: 'effect object',
    tone: 'orange',
    visual: 'effect',
  },
  {
    number: '6',
    title: 'Run after Commit',
    description: 'callbacks run in the Passive Effect phase',
    tone: 'emerald',
    visual: 'commit',
  },
];

const FULL_FLOW_STEPS_EN: FlowStep[] = [
  {
    number: '1',
    title: 'User code',
    description: 'useState / useEffect call',
    tone: 'sky',
    visual: 'play',
  },
  {
    number: '2',
    title: 'ReactHooks.js',
    description: 'Public API runs',
    tone: 'cyan',
    visual: 'fn',
  },
  {
    number: '3',
    title: 'resolveDispatcher()',
    description: 'Pick the dispatcher for the current render',
    tone: 'cyan',
    visual: 'split',
  },
  {
    number: '4',
    title: 'renderWithHooks()',
    description: 'Prepare Fiber, lanes, props and run the component',
    tone: 'teal',
    visual: 'cog',
  },
  {
    number: '5',
    title: 'Build Hook linked list',
    description: 'Hook nodes hang off Fiber.memoizedState',
    tone: 'violet',
    visual: 'list',
  },
  {
    number: '6-1',
    title: 'State Hook flow',
    description: 'useState / useReducer · create node · UpdateQueue · dispatch',
    tone: 'teal',
    visual: 'state',
  },
  {
    number: '6-2',
    title: 'Effect Hook flow',
    description: 'useEffect / useLayoutEffect · Effect object · fiber.flags · run after Commit',
    tone: 'orange',
    visual: 'effect',
  },
  {
    number: '7',
    title: 'Commit Phase',
    description: 'DOM applied + Effect processing',
    tone: 'rose',
    visual: 'commit',
  },
  {
    number: '8',
    title: 'Passive Effect runs',
    description: 'commitHookPassiveMountEffects · run useEffect callbacks',
    tone: 'emerald',
    visual: 'zap',
  },
];

const en: HooksRecapContent = {
  hero: {
    badge: 'Hooks Internals · 10/10',
    titleLine1: 'Hook internals,',
    titleAccent: 'wrapped up on one page',
    description:
      'Reconnect the public API, Fiber Hook list, update queue, and Effect handling as a single internal flow.',
    keywords: [
      { label: 'Dispatcher', tone: 'cyan' },
      { label: 'Hook linked list', tone: 'violet' },
      { label: 'UpdateQueue', tone: 'teal' },
      { label: 'Effect', tone: 'orange' },
      { label: 'Commit', tone: 'rose' },
    ],
    diagramTitle: 'Full Hook flow',
    diagramSteps: HERO_DIAGRAM_EN,
  },
  fullFlow: {
    eyebrow: 'full-flow-summary',
    title: 'Full Hook flow — one page',
    steps: FULL_FLOW_STEPS_EN,
    explanationTitle: 'Flow notes',
    explanation: [
      'When you call a Hook, the public API runs.',
      'The public API calls resolveDispatcher() internally.',
      'A Dispatcher matching the current render is selected.',
      'renderWithHooks calls the component and sets up the Hook environment.',
      'Each Hook call is stored as a node in the Hook linked list.',
      'State Hooks manage updates via queue/dispatch, Effect Hooks are registered as Effect objects.',
      'During Commit the DOM is applied.',
      'After Commit, Passive Effects actually run.',
    ],
    memoryPoint: 'Hooks record during render, run after Commit.',
  },
  pageMap: {
    eyebrow: 'page-connection-map',
    title: '9-page connection map',
    items: [
      {
        number: 1,
        title: 'Hook entry',
        description: 'useState / useEffect are public APIs into the Dispatcher.',
        tone: 'sky',
      },
      {
        number: 2,
        title: 'renderWithHooks',
        description: 'Sets up the Hook tracking environment before the component runs.',
        tone: 'cyan',
      },
      {
        number: 3,
        title: 'Hook linked list',
        description: 'Hook nodes are linked to the Fiber in call order.',
        tone: 'violet',
      },
      {
        number: 4,
        title: 'useState',
        description: 'Creates state, queue, and dispatch together.',
        tone: 'teal',
      },
      {
        number: 5,
        title: 'After setState',
        description: 'Update object → enqueue → schedule render.',
        tone: 'indigo',
      },
      {
        number: 6,
        title: 'useReducer',
        description: 'Shares the same queue model as useState.',
        tone: 'cyan',
      },
      {
        number: 7,
        title: 'useEffect',
        description: 'Registers Effects and runs them after Commit.',
        tone: 'orange',
      },
      {
        number: 8,
        title: 'Rules of Hooks',
        description: 'Why call order breaks state matching.',
        tone: 'rose',
      },
      {
        number: 9,
        title: 'React 19 Hooks',
        description: 'New Hooks read on top of the same internals.',
        tone: 'emerald',
      },
    ],
  },
  dataStructures: {
    eyebrow: 'core-data-structures',
    title: 'Four core internal data structures',
    items: [
      {
        title: 'Fiber.memoizedState',
        description: 'Holds the head pointer of the Hook linked list.',
        visualLines: ['Fiber.memoizedState', 'Hook #1', 'Hook #2'],
        tone: 'sky',
      },
      {
        title: 'Hook node',
        description: 'Each Hook call becomes a node in the list.',
        fields: ['memoizedState', 'baseState', 'queue / deps', 'next'],
        tone: 'violet',
      },
      {
        title: 'UpdateQueue',
        description: 'Stores updates and helps scheduling.',
        fields: ['pending', 'lanes', 'lastRenderedReducer', 'lastRenderedState', 'dispatch'],
        tone: 'teal',
      },
      {
        title: 'Effect list',
        description: 'Effect objects are gathered and processed after Commit.',
        fields: ['tag', 'create', 'inst', 'deps', 'next'],
        tone: 'orange',
      },
    ],
  },
  functions: {
    eyebrow: 'core-functions-review',
    title: 'Core functions recap',
    headers: { name: 'Function', file: 'File', description: 'What it does' },
    rows: [
      {
        name: 'resolveDispatcher',
        file: 'ReactHooks.js',
        description: 'Picks the dispatcher for the current render context.',
        tone: 'cyan',
      },
      {
        name: 'renderWithHooks',
        file: 'ReactFiberHooks.js',
        description: 'Prepares to run the function component and starts Hook tracking.',
        tone: 'teal',
      },
      {
        name: 'mountWorkInProgressHook',
        file: 'ReactFiberHooks.js',
        description: 'Creates a new Hook node and links it into the list.',
        tone: 'violet',
      },
      {
        name: 'mountStateImpl',
        file: 'ReactFiberHooks.js',
        description: 'Builds initial state + UpdateQueue and prepares dispatch.',
        tone: 'sky',
      },
      {
        name: 'dispatchSetState',
        file: 'ReactFiberHooks.js',
        description: 'Creates an Update, enqueues it, and schedules a render.',
        tone: 'indigo',
      },
      {
        name: 'updateEffectImpl',
        file: 'ReactFiberHooks.js',
        description: 'Compares deps and decides whether to create a new Effect.',
        tone: 'orange',
      },
      {
        name: 'commitHookPassiveMountEffects',
        file: 'ReactFiberCommitEffects.js',
        description: 'Actually runs Passive Effect callbacks after Commit.',
        tone: 'emerald',
      },
    ],
  },
  simulator: {
    eyebrow: 'integrated-simulator',
    title: 'Integrated simulator: tracing the Counter flow',
    code: COUNTER_CODE,
    mockLabel: 'Mock UI',
    mockValue: '0',
    mockButton: '+1',
    steps: [
      {
        number: 1,
        title: 'setCount called',
        description: 'User click triggers dispatch.',
        tone: 'sky',
        visual: 'click',
      },
      {
        number: 2,
        title: 'Build Update',
        description: 'Create an Update with action `c => c + 1` and a lane',
        tone: 'violet',
        visual: 'box',
      },
      {
        number: 3,
        title: 'Enqueue',
        description: 'The Update is appended to queue.pending (circular).',
        tone: 'cyan',
        visual: 'queue',
      },
      {
        number: 4,
        title: 'renderWithHooks again',
        description: 'Scheduled work re-runs the component.',
        tone: 'teal',
        visual: 'replay',
      },
      {
        number: 5,
        title: 'updateState computes',
        description: 'Processes queued updates and computes the next state.',
        tone: 'indigo',
        visual: 'compute',
      },
      {
        number: 6,
        title: 'updateEffectImpl',
        description: 'Compares deps [count] and prepares the Effect object.',
        tone: 'orange',
        visual: 'compare',
      },
      {
        number: 7,
        title: 'Commit',
        description: 'DOM is applied; fiber.flags are processed.',
        tone: 'rose',
        visual: 'commit',
      },
      {
        number: 8,
        title: 'Passive Effect',
        description: 'commitHookPassiveMountEffects runs the useEffect callback.',
        tone: 'emerald',
        visual: 'play',
      },
    ],
  },
  checklist: {
    eyebrow: 'reading-checklist',
    title: 'Practical reading checklist',
    items: [
      {
        title: 'Did I start from a public API?',
        detail: 'Identify the useState/useEffect entry point.',
        tone: 'sky',
      },
      {
        title: 'Did I go through the Dispatcher?',
        detail: 'Trace which dispatcher resolveDispatcher picks.',
        tone: 'cyan',
      },
      {
        title: 'Did I see the mount/update split?',
        detail: 'Spot the mountX / updateX branches.',
        tone: 'violet',
      },
      {
        title: 'Did I see which Fiber the Hook attaches to?',
        detail: 'Follow currentlyRenderingFiber.',
        tone: 'teal',
      },
      {
        title: 'Did queue / effect list show up?',
        detail: 'Identify UpdateQueue / Effect linked list.',
        tone: 'orange',
      },
      {
        title: 'Did I split render vs commit?',
        detail: 'Record during render, run after Commit.',
        tone: 'rose',
      },
    ],
  },
  quiz: {
    eyebrow: 'mini-quiz',
    title: 'Mini quiz',
    answerPrefix: 'Answer',
    quizzes: [
      {
        question: 'Where is the actual useState value stored?',
        options: [
          { label: 'A', text: 'Fiber.memoizedProps', isAnswer: false },
          { label: 'B', text: 'Hook.memoizedState', isAnswer: true },
          { label: 'C', text: 'UpdateQueue.lanes', isAnswer: false },
          { label: 'D', text: 'effect.deps', isAnswer: false },
        ],
        answerLabel: 'B',
        answerExplain:
          'The current state of a state Hook is stored on that Hook node’s memoizedState.',
      },
      {
        question: 'When does the useEffect callback run?',
        options: [
          { label: 'A', text: 'Immediately during render', isAnswer: false },
          { label: 'B', text: 'Just before commit', isAnswer: false },
          { label: 'C', text: 'After commit, in the Passive Effect phase', isAnswer: true },
          { label: 'D', text: 'Right after enqueuing the update', isAnswer: false },
        ],
        answerLabel: 'C',
        answerExplain:
          'Render only registers — execution happens after commit, in Passive Effects.',
      },
      {
        question: 'Why do Rules of Hooks exist?',
        options: [
          { label: 'A', text: 'For performance', isAnswer: false },
          { label: 'B', text: 'To enforce code style', isAnswer: false },
          { label: 'C', text: 'To keep Hook linked list matching by call order', isAnswer: true },
          { label: 'D', text: 'To reduce bundle size', isAnswer: false },
        ],
        answerLabel: 'C',
        answerExplain:
          'React matches Hooks by call order; reorder them and previous state is read wrong.',
      },
    ],
  },
  nextPath: {
    eyebrow: 'next-learning-path',
    title: 'What to read next',
    items: [
      {
        title: 'Event system internals',
        description: 'Read Synthetic Events, event delegation, and how React handles events.',
        tone: 'sky',
        visual: 'event',
      },
      {
        title: 'Scheduler & priority',
        description: 'Explore Lanes, priorities, and the order in which scheduled updates run.',
        tone: 'violet',
        visual: 'scheduler',
      },
      {
        title: 'Suspense / Hydration internals',
        description: 'Read Suspense & Thenable tracking, and the Hydration flow after SSR.',
        tone: 'teal',
        visual: 'suspense',
      },
    ],
  },
  finale: {
    progressLabel: 'Chapter 10 of 15 complete',
    copyLine1: 'You reviewed Hooks',
    copyLine2: 'internals end to end.',
    copyLine3: 'Now the event system.',
    primaryCta: 'Read the event system internals',
    primaryHref: '/why-event-system',
    secondaryCta: 'Review Hooks from the start',
    secondaryHref: '/hooks-entry-point',
  },
};

export const hooksRecapContent: Record<Locale, HooksRecapContent> = { ko, en };

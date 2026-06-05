import type { Locale } from '@it-tech-blog/preferences';

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

export type FoundationItem = {
  key: string;
  title: string;
  description: string;
  tone: Tone;
};

export type ApiHero = {
  key: 'use' | 'useActionState' | 'useOptimistic' | 'useEffectEvent';
  title: string;
  shortDesc: string;
  tone: Tone;
};

export type ApiDetail = {
  key: 'use' | 'useActionState' | 'useOptimistic' | 'useEffectEvent';
  number: string;
  title: string;
  whatItDoes: string;
  concepts: string[];
  code: string;
  flowTitle: string;
  flowItems: { label: string; detail?: string }[];
  tone: Tone;
};

export type CompareRow = {
  api: string;
  role: string;
  concept: string;
  flow: string;
  storage: string;
  tone: Tone;
};

export type PriorityItem = {
  rank: number;
  rankLabel: string;
  apiName: string;
  description: string;
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
  visual: 'layers' | 'link' | 'eye' | 'rocket';
};

export type React19HooksContent = {
  hero: {
    badge: string;
    titleLine1: string;
    titleAccent: string;
    description: string;
    diagramTitle: string;
    foundationTitle: string;
    foundationItems: FoundationItem[];
    apiCards: ApiHero[];
  };
  question: {
    eyebrow: string;
    title: string;
  };
  extensionMap: {
    eyebrow: string;
    title: string;
    centerTitle: string;
    foundations: FoundationItem[];
    apiCards: ApiHero[];
  };
  apiDetails: {
    use: ApiDetail;
    useActionState: ApiDetail;
    useOptimistic: ApiDetail;
    useEffectEvent: ApiDetail;
  };
  apiLabels: {
    whatItDoes: string;
    concepts: string;
    code: string;
  };
  compareTable: {
    eyebrow: string;
    title: string;
    headers: {
      api: string;
      role: string;
      concept: string;
      flow: string;
      storage: string;
    };
    rows: CompareRow[];
  };
  priority: {
    eyebrow: string;
    title: string;
    items: PriorityItem[];
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

const USE_CODE = `import { use } from "react";

function Profile({ userPromise }) {
  const user = use(userPromise); // 읽기
  return <div>{user.name}</div>;
}`;

const USE_CODE_EN = `import { use } from "react";

function Profile({ userPromise }) {
  const user = use(userPromise); // read
  return <div>{user.name}</div>;
}`;

const USE_ACTION_STATE_CODE = `const [state, action, pending] = useActionState(submitForm, initialState);

<form action={action}>
  <button disabled={pending}>{pending ? "전송 중..." : "제출"}</button>
</form>;`;

const USE_ACTION_STATE_CODE_EN = `const [state, action, pending] = useActionState(submitForm, initialState);

<form action={action}>
  <button disabled={pending}>{pending ? "Submitting…" : "Submit"}</button>
</form>;`;

const USE_OPTIMISTIC_CODE = `const [list, addOptimistic] = useOptimistic(
  serverList,
  (state, newItem) => [newItem, ...state]
);

addOptimistic(newItem); // 즉시 UI 반영`;

const USE_OPTIMISTIC_CODE_EN = `const [list, addOptimistic] = useOptimistic(
  serverList,
  (state, newItem) => [newItem, ...state]
);

addOptimistic(newItem); // reflect in UI instantly`;

const USE_EFFECT_EVENT_CODE = `function Chat({ roomId, theme }) {
  const onMessage = useEffectEvent((msg) => {
    showNotification(msg, theme);
  });

  useEffect(() => {
    const sub = subscribe(roomId, onMessage);
    return () => sub.unsubscribe();
  }, [roomId, onMessage]);
}`;

const FOUNDATIONS_KO: FoundationItem[] = [
  {
    key: 'dispatcher',
    title: 'Dispatcher',
    description: '현재 렌더 타이밍 및 dispatcher 선택',
    tone: 'sky',
  },
  {
    key: 'linked-list',
    title: 'Hook linked list',
    description: 'Fiber.memoizedState에 Hook 노드 연결',
    tone: 'cyan',
  },
  {
    key: 'update-queue',
    title: 'UpdateQueue',
    description: '상태/액션 업데이트를 저장하는 큐',
    tone: 'teal',
  },
  {
    key: 'suspense',
    title: 'Suspense / Thenable 처리',
    description: '비동기 리소스 읽기 및 일시 중단 처리',
    tone: 'violet',
  },
  {
    key: 'effect',
    title: 'Effect 처리',
    description: 'Effect 객체 등록 및 Commit 이후 실행',
    tone: 'orange',
  },
];

const API_CARDS_KO: ApiHero[] = [
  {
    key: 'use',
    title: 'use()',
    shortDesc: '리소스 읽기 — Suspense 위에 올라간다',
    tone: 'violet',
  },
  {
    key: 'useActionState',
    title: 'useActionState()',
    shortDesc: '액션 결과 + pending 상태 — state + action queue',
    tone: 'teal',
  },
  {
    key: 'useOptimistic',
    title: 'useOptimistic()',
    shortDesc: '낙관적 업데이트 — update queue + reducer',
    tone: 'cyan',
  },
  {
    key: 'useEffectEvent',
    title: 'useEffectEvent()',
    shortDesc: 'Effect 안의 이벤트 함수 — effect 흐름 + 최신 값 보존',
    tone: 'orange',
  },
];

const ko: React19HooksContent = {
  hero: {
    badge: 'Hooks 내부 · 9/10단계',
    titleLine1: 'React 19의 Hook도',
    titleAccent: '기존 Hook 시스템 위에서 읽는다',
    description:
      '새 API를 따로 외우기보다, Dispatcher, Hook linked list, UpdateQueue, Suspense, Effect 흐름 위에 어디에 놓이는지 읽는 것이 더 빠릅니다.',
    diagramTitle: 'React 19 Hook 확장은 기존 시스템 위에 놓인다',
    foundationTitle: '기존 Hook 내부 구조 (기반)',
    foundationItems: FOUNDATIONS_KO,
    apiCards: API_CARDS_KO,
  },
  question: {
    eyebrow: '오늘의 질문',
    title:
      'useActionState, useOptimistic, use, useEffectEvent는 기존 Hook 내부 구조와 어떻게 연결될까?',
  },
  extensionMap: {
    eyebrow: 'extension-map',
    title: 'React 19 Hook 확장 지도',
    centerTitle: 'Hooks 내부 기반',
    foundations: FOUNDATIONS_KO,
    apiCards: API_CARDS_KO,
  },
  apiDetails: {
    use: {
      key: 'use',
      number: '01',
      title: 'use()',
      whatItDoes:
        'Promise나 context 같은 resource를 읽어서 값을 반환하거나, Pending이면 Suspense로 일시 중단합니다.',
      concepts: ['Suspense', 'Thenable tracking', 'render 중 resource read'],
      code: USE_CODE,
      flowTitle: '미니 흐름',
      flowItems: [
        { label: 'render 중 use(promise)' },
        { label: 'thenable 읽기' },
        { label: 'pending이면 Suspense로 일시 중단' },
        { label: 'resolved면 값 반환하고 계속 렌더' },
      ],
      tone: 'violet',
    },
    useActionState: {
      key: 'useActionState',
      number: '02',
      title: 'useActionState()',
      whatItDoes:
        'Action 결과와 pending 상태를 함께 관리하는 상태 Hook입니다. 폼 제출이나 서버 액션에 유용합니다.',
      concepts: ['state hook', 'action queue', '비동기 action'],
      code: USE_ACTION_STATE_CODE,
      flowTitle: '폼 제출 상태 변화',
      flowItems: [
        { label: '대기', detail: 'pending = false' },
        { label: '제출 중', detail: 'pending = true' },
        { label: '완료 후', detail: 'pending = false' },
      ],
      tone: 'teal',
    },
    useOptimistic: {
      key: 'useOptimistic',
      number: '03',
      title: 'useOptimistic()',
      whatItDoes: '서버 응답 전에 UI를 낙관적으로 갱신합니다. 실패 시 되돌릴 수 있습니다.',
      concepts: ['update queue', 'optimistic reducer', 'transition'],
      code: USE_OPTIMISTIC_CODE,
      flowTitle: '메시지 전송 상태 변화',
      flowItems: [
        { label: '전송 중', detail: '임시 메시지 표시 순간' },
        { label: '서버 성공', detail: '확정된 메시지로 교체' },
        { label: '서버 실패', detail: '임시 메시지 제거 또는 롤백' },
      ],
      tone: 'cyan',
    },
    useEffectEvent: {
      key: 'useEffectEvent',
      number: '04',
      title: 'useEffectEvent()',
      whatItDoes: 'Effect 안에서 최신 값을 읽는 이벤트 함수를 안전하게 제공합니다.',
      concepts: ['Effect', '최신 callback 보존', 'render 중 호출 제한'],
      code: USE_EFFECT_EVENT_CODE,
      flowTitle: '구독 흐름',
      flowItems: [
        { label: 'Effect 구독 실행' },
        { label: 'useEffectEvent 이벤트 함수 생성' },
        { label: '외부 이벤트 발생' },
        { label: 'onMessage 호출' },
        { label: '최신 theme 사용' },
      ],
      tone: 'orange',
    },
  },
  apiLabels: {
    whatItDoes: '무엇을 하나?',
    concepts: '연결되는 개념',
    code: '코드 예시',
  },
  compareTable: {
    eyebrow: 'comparison-table',
    title: 'React 19 Hook 확장 한눈 비교',
    headers: {
      api: 'API',
      role: '핵심 역할',
      concept: '내부에서 먼저 볼 개념',
      flow: '연결되는 핵심 흐름',
      storage: '상태 저장 방식',
    },
    rows: [
      {
        api: 'use()',
        role: '리소스 읽기',
        concept: 'Suspense / Thenable',
        flow: 'render 중 read → suspend / resume',
        storage: '상태 없음 또는 읽기 전용',
        tone: 'violet',
      },
      {
        api: 'useActionState()',
        role: 'Action 결과 상태 + pending 관리',
        concept: 'state + action queue',
        flow: 'dispatch → queue → render → commit',
        storage: 'UpdateQueue 기반',
        tone: 'teal',
      },
      {
        api: 'useOptimistic()',
        role: '낙관적 UI 업데이트',
        concept: 'update queue',
        flow: '낙관적 reducer → queue → render',
        storage: 'UpdateQueue 기반',
        tone: 'cyan',
      },
      {
        api: 'useEffectEvent()',
        role: 'Effect 안의 최신 값 이벤트 함수',
        concept: 'effect event ref',
        flow: 'effect subscribe → event 호출',
        storage: 'ref 기반 이벤트 함수 보존',
        tone: 'orange',
      },
    ],
  },
  priority: {
    eyebrow: 'learning-priority',
    title: '어떤 Hook을 먼저 깊게 볼까?',
    items: [
      {
        rank: 1,
        rankLabel: '1순위',
        apiName: 'useOptimistic',
        description: '사용 빈도가 높고, 내부적으로 update queue를 잘 이해하는 데 도움',
        tone: 'cyan',
      },
      {
        rank: 2,
        rankLabel: '2순위',
        apiName: 'useActionState',
        description: '액션/폼 흐름을 이해하면 React의 비동기 모델이 명확해짐',
        tone: 'teal',
      },
      {
        rank: 3,
        rankLabel: '3순위',
        apiName: 'use()',
        description: 'Suspense/리소스 모델을 이해하면 비동기 호출이 한층 선명해짐',
        tone: 'violet',
      },
      {
        rank: 4,
        rankLabel: '4순위',
        apiName: 'useEffectEvent',
        description: 'Effect의 최신 값 문제를 다루며 내부 ref 모델을 이해할 수 있음',
        tone: 'orange',
      },
    ],
  },
  mission: {
    eyebrow: 'follow-mission',
    title: '직접 코드에서 따라가 보기',
    items: [
      {
        number: '01',
        title: 'ReactHooks.js에서 새 API 찾기',
        description: 'export된 API와 각각 어떤 dispatcher 메서드로 연결되는지 추적해보세요.',
      },
      {
        number: '02',
        title: 'ReactFiberHooks.js에서 Dispatcher 연결 확인',
        description: '각 Hook이 mount/update 시 어떤 내부 함수를 호출하는지 확인하세요.',
      },
      {
        number: '03',
        title: '공식 문서와 내부 구현 위치 비교',
        description: 'React 공식 문서의 설명과 실제 코드 구조를 비교해보세요.',
      },
    ],
  },
  summary: {
    eyebrow: 'key-takeaways',
    title: '핵심 정리',
    items: [
      {
        number: 1,
        title: '기존 기반 위에 확장된다',
        description:
          'Dispatcher, linked list, UpdateQueue, Suspense, Effect 흐름 위에 새 Hook이 올라간다.',
        tone: 'sky',
        visual: 'layers',
      },
      {
        number: 2,
        title: '역할은 다르지만 구조는 연결된다',
        description: '각 Hook은 기존 내부 구조의 한 축을 재사용한다.',
        tone: 'teal',
        visual: 'link',
      },
      {
        number: 3,
        title: '읽는 관점이 핵심이다',
        description: '새 API를 외우기보다 어디에 연결되는지 읽는 습관이 가장 빠른 이해의 길이다.',
        tone: 'violet',
        visual: 'eye',
      },
      {
        number: 4,
        title: '실무에서 바로 연결된다',
        description:
          '낙관적 업데이트, 액션 상태, 리소스 읽기, 안정적 이벤트 처리까지 모두 같은 학습 위에서 이어진다.',
        tone: 'orange',
        visual: 'rocket',
      },
    ],
  },
  cta: {
    label: '다음: Hooks 전체 흐름 복습하기',
    href: '/hooks-recap',
    description:
      'React 19 Hook 확장까지 봤다면, 이제 Hooks 내부 구조 전체를 하나의 흐름으로 다시 연결해봅니다.',
  },
};

const FOUNDATIONS_EN: FoundationItem[] = [
  {
    key: 'dispatcher',
    title: 'Dispatcher',
    description: 'Render timing & dispatcher selection',
    tone: 'sky',
  },
  {
    key: 'linked-list',
    title: 'Hook linked list',
    description: 'Hook nodes linked off Fiber.memoizedState',
    tone: 'cyan',
  },
  {
    key: 'update-queue',
    title: 'UpdateQueue',
    description: 'Queue that holds state/action updates',
    tone: 'teal',
  },
  {
    key: 'suspense',
    title: 'Suspense / Thenable',
    description: 'Async resource read + suspension handling',
    tone: 'violet',
  },
  {
    key: 'effect',
    title: 'Effect handling',
    description: 'Effect registration & post-commit execution',
    tone: 'orange',
  },
];

const API_CARDS_EN: ApiHero[] = [
  {
    key: 'use',
    title: 'use()',
    shortDesc: 'Read a resource — sits on top of Suspense',
    tone: 'violet',
  },
  {
    key: 'useActionState',
    title: 'useActionState()',
    shortDesc: 'Action result + pending — state + action queue',
    tone: 'teal',
  },
  {
    key: 'useOptimistic',
    title: 'useOptimistic()',
    shortDesc: 'Optimistic UI — update queue + reducer',
    tone: 'cyan',
  },
  {
    key: 'useEffectEvent',
    title: 'useEffectEvent()',
    shortDesc: 'Event fn inside Effect — keeps the latest value',
    tone: 'orange',
  },
];

const en: React19HooksContent = {
  hero: {
    badge: 'Hooks Internals · 9/10',
    titleLine1: 'React 19 Hooks',
    titleAccent: 'read on top of the existing Hook system',
    description:
      'Instead of memorizing each new API, read where it lands on top of Dispatcher, Hook linked list, UpdateQueue, Suspense, and Effect handling.',
    diagramTitle: 'React 19 Hook extensions sit on top of the existing system',
    foundationTitle: 'Existing Hook internals (foundation)',
    foundationItems: FOUNDATIONS_EN,
    apiCards: API_CARDS_EN,
  },
  question: {
    eyebrow: "Today's question",
    title:
      'How do useActionState, useOptimistic, use, and useEffectEvent connect to the existing Hook internals?',
  },
  extensionMap: {
    eyebrow: 'extension-map',
    title: 'React 19 Hook extension map',
    centerTitle: 'Hook internals foundation',
    foundations: FOUNDATIONS_EN,
    apiCards: API_CARDS_EN,
  },
  apiDetails: {
    use: {
      key: 'use',
      number: '01',
      title: 'use()',
      whatItDoes:
        'Reads a resource like a Promise or context. If it is pending, suspends via Suspense.',
      concepts: ['Suspense', 'Thenable tracking', 'resource read during render'],
      code: USE_CODE_EN,
      flowTitle: 'Mini flow',
      flowItems: [
        { label: 'use(promise) during render' },
        { label: 'read the thenable' },
        { label: 'pending → suspend via Suspense' },
        { label: 'resolved → return value and continue' },
      ],
      tone: 'violet',
    },
    useActionState: {
      key: 'useActionState',
      number: '02',
      title: 'useActionState()',
      whatItDoes:
        'A state Hook that manages the action result and pending status together. Great for form submissions or server actions.',
      concepts: ['state hook', 'action queue', 'async action'],
      code: USE_ACTION_STATE_CODE_EN,
      flowTitle: 'Form submit state changes',
      flowItems: [
        { label: 'Idle', detail: 'pending = false' },
        { label: 'Submitting', detail: 'pending = true' },
        { label: 'Done', detail: 'pending = false' },
      ],
      tone: 'teal',
    },
    useOptimistic: {
      key: 'useOptimistic',
      number: '03',
      title: 'useOptimistic()',
      whatItDoes:
        'Optimistically updates the UI before the server response. Can be rolled back on failure.',
      concepts: ['update queue', 'optimistic reducer', 'transition'],
      code: USE_OPTIMISTIC_CODE_EN,
      flowTitle: 'Message send state changes',
      flowItems: [
        { label: 'Sending', detail: 'Temporary message visible' },
        { label: 'Server success', detail: 'Replace with confirmed message' },
        { label: 'Server failure', detail: 'Remove temporary message or roll back' },
      ],
      tone: 'cyan',
    },
    useEffectEvent: {
      key: 'useEffectEvent',
      number: '04',
      title: 'useEffectEvent()',
      whatItDoes: 'Safely exposes an event function that reads the latest value inside an Effect.',
      concepts: ['Effect', 'latest callback preserved', 'no calls during render'],
      code: USE_EFFECT_EVENT_CODE,
      flowTitle: 'Subscription flow',
      flowItems: [
        { label: 'Effect subscribes' },
        { label: 'useEffectEvent creates the event fn' },
        { label: 'External event fires' },
        { label: 'onMessage is called' },
        { label: 'Latest theme is used' },
      ],
      tone: 'orange',
    },
  },
  apiLabels: {
    whatItDoes: 'What does it do?',
    concepts: 'Connected concepts',
    code: 'Code',
  },
  compareTable: {
    eyebrow: 'comparison-table',
    title: 'React 19 Hook extensions at a glance',
    headers: {
      api: 'API',
      role: 'Core role',
      concept: 'First concept to read',
      flow: 'Connected core flow',
      storage: 'Storage model',
    },
    rows: [
      {
        api: 'use()',
        role: 'Read a resource',
        concept: 'Suspense / Thenable',
        flow: 'read during render → suspend / resume',
        storage: 'no state or read-only',
        tone: 'violet',
      },
      {
        api: 'useActionState()',
        role: 'Action result + pending',
        concept: 'state + action queue',
        flow: 'dispatch → queue → render → commit',
        storage: 'UpdateQueue based',
        tone: 'teal',
      },
      {
        api: 'useOptimistic()',
        role: 'Optimistic UI update',
        concept: 'update queue',
        flow: 'optimistic reducer → queue → render',
        storage: 'UpdateQueue based',
        tone: 'cyan',
      },
      {
        api: 'useEffectEvent()',
        role: 'Latest-value event fn inside Effect',
        concept: 'effect event ref',
        flow: 'effect subscribe → event call',
        storage: 'event fn preserved by ref',
        tone: 'orange',
      },
    ],
  },
  priority: {
    eyebrow: 'learning-priority',
    title: 'Which Hook to read deeply first?',
    items: [
      {
        rank: 1,
        rankLabel: '1st',
        apiName: 'useOptimistic',
        description: 'High usage frequency and great for grasping the update queue.',
        tone: 'cyan',
      },
      {
        rank: 2,
        rankLabel: '2nd',
        apiName: 'useActionState',
        description: 'Understanding action/form flows clarifies React’s async model.',
        tone: 'teal',
      },
      {
        rank: 3,
        rankLabel: '3rd',
        apiName: 'use()',
        description: 'The Suspense/resource model makes async calls much clearer.',
        tone: 'violet',
      },
      {
        rank: 4,
        rankLabel: '4th',
        apiName: 'useEffectEvent',
        description: 'Tackles the latest-value problem in Effects via the internal ref model.',
        tone: 'orange',
      },
    ],
  },
  mission: {
    eyebrow: 'follow-mission',
    title: 'Follow it in the source',
    items: [
      {
        number: '01',
        title: 'Find the new API in ReactHooks.js',
        description: 'Trace each exported API to its dispatcher method.',
      },
      {
        number: '02',
        title: 'Check the Dispatcher wiring in ReactFiberHooks.js',
        description: 'See which internal functions each Hook calls on mount/update.',
      },
      {
        number: '03',
        title: 'Match the docs to the implementation',
        description: 'Compare the official docs with the actual code structure.',
      },
    ],
  },
  summary: {
    eyebrow: 'key-takeaways',
    title: 'Key takeaways',
    items: [
      {
        number: 1,
        title: 'Built on the same foundation',
        description:
          'New Hooks ride on Dispatcher, linked list, UpdateQueue, Suspense, and Effect flows.',
        tone: 'sky',
        visual: 'layers',
      },
      {
        number: 2,
        title: 'Different roles, same plumbing',
        description: 'Each Hook reuses one axis of the existing internals.',
        tone: 'teal',
        visual: 'link',
      },
      {
        number: 3,
        title: 'Reading angle matters',
        description: 'Rather than memorizing the API, read where it plugs in.',
        tone: 'violet',
        visual: 'eye',
      },
      {
        number: 4,
        title: 'Directly useful at work',
        description:
          'Optimistic updates, action state, resource reads, stable event handlers — all connect to the same learning.',
        tone: 'orange',
        visual: 'rocket',
      },
    ],
  },
  cta: {
    label: 'Next: recap the full Hooks flow',
    href: '/hooks-recap',
    description:
      'With the React 19 extensions in view, recap the entire Hook internals as one connected flow.',
  },
};

export const react19HooksContent: Record<Locale, React19HooksContent> = { ko, en };

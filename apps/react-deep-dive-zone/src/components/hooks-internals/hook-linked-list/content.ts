import type { Locale } from '@it-tech-blog/preferences';

export type Tone = 'sky' | 'cyan' | 'teal' | 'emerald' | 'violet' | 'amber' | 'rose';

export type HookNode = {
  index: number;
  hookName: string;
  fields: { name: string; value?: string }[];
  nextLabel: string;
  tone: Tone;
};

export type ConceptCard = {
  label: string;
  value: string;
  tone: Tone;
};

export type FieldRow = {
  name: string;
  description: string;
  tone: Tone;
  isPointer?: boolean;
};

export type StepRow = {
  number: number;
  title: string;
  description: string;
  diagram: string[];
  tone: Tone;
};

export type MultipleHookCard = {
  index: number;
  hookName: string;
  badge: string;
  tone: Tone;
  fields: { label: string; value: string; mono?: boolean }[];
  nextLabel: string;
  isLast?: boolean;
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

export type HookLinkedListContent = {
  hero: {
    badge: string;
    titleLine1: string;
    titleAccent: string;
    titleLine2: string;
    description: string;
    conceptCards: ConceptCard[];
    diagramTitle: string;
    fiberFields: string[];
    fiberHighlight: string;
    hookNodes: HookNode[];
    bottomLabel: string;
  };
  question: {
    eyebrow: string;
    title: string;
  };
  breakdown: {
    eyebrow: string;
    title: string;
    leftLabel: string;
    code: string;
    highlightLine: string;
    rightTitle: string;
    flow: { label: string; sub?: string; tone: Tone }[];
    bottomLabel: string;
  };
  objectStructure: {
    eyebrow: string;
    title: string;
    code: string;
    fields: FieldRow[];
  };
  connection: {
    eyebrow: string;
    title: string;
    profileCode: string;
    steps: StepRow[];
  };
  mountPreview: {
    eyebrow: string;
    title: string;
    code: string;
    explanation: string;
    fileLabel: string;
    fileName: string;
    buttonLabel: string;
    buttonHref: string;
  };
  multipleHooks: {
    eyebrow: string;
    title: string;
    cards: MultipleHookCard[];
  };
  whyOrder: {
    eyebrow: string;
    title: string;
    leftCard: {
      title: string;
      rows: string[];
      diagram: string[];
    };
    rightCard: {
      title: string;
      rows: string[];
      warning: string;
    };
    banner: {
      text: string;
      ctaLabel: string;
      ctaHref: string;
    };
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

const FIBER_CODE = `{
  tag: FunctionComponent,
  type: Profile,
  memoizedProps: { ... },
  memoizedState: Hook | null,
  updateQueue: UpdateQueue | null,
  child: Fiber | null,
  sibling: Fiber | null,
  return: Fiber | null,
}`;

const HOOK_TYPE_CODE = `type Hook = {
  memoizedState: any;
  baseState: any;
  baseQueue: Update<any, any> | null;
  queue: UpdateQueue<any, any> | null;
  next: Hook | null;
};`;

const PROFILE_CODE = `function Profile() {
  const [name, setName] = useState(""); // #1
  const inputRef = useRef(null);        // #2
  useEffect(() => {}, []);              // #3

  return (
    <input
      ref={inputRef}
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}`;

const MOUNT_HOOK_CODE = `const hook = {
  memoizedState: null,
  baseState: null,
  baseQueue: null,
  queue: null,
  next: null,
};

if (workInProgressHook === null) {
  // 첫 번째 Hook: Fiber.memoizedState에 연결
  currentlyRenderingFiber.memoizedState = workInProgressHook = hook;
} else {
  // 이후 Hook: 이전 Hook의 next로 연결
  workInProgressHook = workInProgressHook.next = hook;
}

return hook;`;

const MOUNT_HOOK_CODE_EN = `const hook = {
  memoizedState: null,
  baseState: null,
  baseQueue: null,
  queue: null,
  next: null,
};

if (workInProgressHook === null) {
  // First Hook: attach to Fiber.memoizedState
  currentlyRenderingFiber.memoizedState = workInProgressHook = hook;
} else {
  // Later Hook: link from previous Hook.next
  workInProgressHook = workInProgressHook.next = hook;
}

return hook;`;

const HOOK_NODE_FIELDS = [
  { name: 'memoizedState' },
  { name: 'baseState' },
  { name: 'baseQueue' },
  { name: 'queue' },
  { name: 'next' },
];

const ko: HookLinkedListContent = {
  hero: {
    badge: 'Hooks 내부 · 3/10단계',
    titleLine1: 'Hooks는 Fiber 안에',
    titleAccent: '연결 리스트',
    titleLine2: '로 저장된다',
    description:
      'useState, useRef, useEffect는 호출 순서대로 Hook 노드가 되고, 하나의 Fiber 안에서 연결됩니다.',
    conceptCards: [
      { label: '핵심 개념', value: '순서가 곧 정체성', tone: 'teal' },
      { label: '저장 위치', value: 'Fiber.memoizedState', tone: 'sky' },
    ],
    diagramTitle: 'Function Component Fiber',
    fiberFields: ['tag', 'type', 'memoizedProps', 'updateQueue', '...'],
    fiberHighlight: 'memoizedState',
    hookNodes: [
      {
        index: 1,
        hookName: 'useState',
        fields: HOOK_NODE_FIELDS,
        nextLabel: 'next',
        tone: 'sky',
      },
      {
        index: 2,
        hookName: 'useRef',
        fields: HOOK_NODE_FIELDS,
        nextLabel: 'next',
        tone: 'teal',
      },
      {
        index: 3,
        hookName: 'useEffect',
        fields: HOOK_NODE_FIELDS.map((f) =>
          f.name === 'next' ? { name: 'next', value: 'null' } : f,
        ),
        nextLabel: 'next: null',
        tone: 'violet',
      },
    ],
    bottomLabel: '단방향 연결 리스트',
  },
  question: {
    eyebrow: '오늘의 질문',
    title: 'React는 첫 번째 useState와 두 번째 useEffect를 어떻게 구분할까?',
  },
  breakdown: {
    eyebrow: 'fiber-structure',
    title: 'Fiber 구조 해부',
    leftLabel: 'Fiber 객체 (요약)',
    code: FIBER_CODE,
    highlightLine: 'memoizedState: Hook | null,',
    rightTitle: 'memoizedState에서 시작되는 Hook linked list',
    flow: [
      { label: 'memoizedState', sub: '(첫 Hook)', tone: 'cyan' },
      { label: 'Hook #1', sub: 'useState', tone: 'sky' },
      { label: 'Hook #2', sub: 'useRef', tone: 'teal' },
      { label: 'Hook #3', sub: 'useEffect', tone: 'violet' },
      { label: 'null', tone: 'amber' },
    ],
    bottomLabel: '단방향 연결 리스트',
  },
  objectStructure: {
    eyebrow: 'hook-object',
    title: 'Hook 객체 구조',
    code: HOOK_TYPE_CODE,
    fields: [
      {
        name: 'memoizedState',
        description: 'Hook이 저장하는 실제 값 (state, ref, effect 등)',
        tone: 'sky',
      },
      { name: 'baseState', description: '업데이트가 처리되기 전의 기준 state', tone: 'cyan' },
      { name: 'baseQueue', description: '우선순위가 낮아 건너뛴 업데이트 큐', tone: 'amber' },
      {
        name: 'queue',
        description: '업데이트를 담고 있는 큐 (dispatch가 들어 있음)',
        tone: 'teal',
      },
      {
        name: 'next',
        description: '다음 Hook을 가리키는 포인터 — linked list의 핵심',
        tone: 'violet',
        isPointer: true,
      },
    ],
  },
  connection: {
    eyebrow: 'connection-process',
    title: '실행 순서에 따라 Hook이 연결되는 과정',
    profileCode: PROFILE_CODE,
    steps: [
      {
        number: 1,
        title: 'useState 호출',
        description: 'Hook #1 생성 → Fiber.memoizedState 연결',
        diagram: ['Fiber.memoizedState', 'Hook #1'],
        tone: 'sky',
      },
      {
        number: 2,
        title: 'useRef 호출',
        description: 'Hook #2 생성 → Hook #1.next 연결',
        diagram: ['Fiber.memoizedState', 'Hook #1', 'Hook #2'],
        tone: 'teal',
      },
      {
        number: 3,
        title: 'useEffect 호출',
        description: 'Hook #3 생성 → Hook #2.next 연결',
        diagram: ['Fiber.memoizedState', 'Hook #1', 'Hook #2', 'Hook #3'],
        tone: 'violet',
      },
    ],
  },
  mountPreview: {
    eyebrow: 'mount-work-in-progress-hook',
    title: '실제 코드: mountWorkInProgressHook',
    code: MOUNT_HOOK_CODE,
    explanation: '첫 번째 Hook은 Fiber.memoizedState에 붙고, 다음 Hook부터는 next로 이어집니다.',
    fileLabel: '작업',
    fileName: 'ReactFiberHooks.js',
    buttonLabel: 'GitHub에서 전체 코드 보기',
    buttonHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js',
  },
  multipleHooks: {
    eyebrow: 'multiple-hooks',
    title: '여러 Hook의 내부 표현',
    cards: [
      {
        index: 1,
        hookName: 'useState',
        badge: 'state 저장',
        tone: 'sky',
        fields: [
          { label: 'memoizedState', value: "현재 state 값: 'John'", mono: true },
          { label: 'queue', value: 'dispatch, pending updates' },
          { label: 'next', value: '→ Hook #2', mono: true },
        ],
        nextLabel: '→ Hook #2',
      },
      {
        index: 2,
        hookName: 'useRef',
        badge: 'ref 객체 저장',
        tone: 'teal',
        fields: [
          { label: 'memoizedState', value: '{ current: <input /> }', mono: true },
          { label: 'queue', value: 'null', mono: true },
          { label: 'next', value: '→ Hook #3', mono: true },
        ],
        nextLabel: '→ Hook #3',
      },
      {
        index: 3,
        hookName: 'useEffect',
        badge: 'effect 객체 저장',
        tone: 'violet',
        fields: [
          { label: 'memoizedState', value: '{ create, deps, tag, destroy }', mono: true },
          { label: 'queue', value: 'effect queue' },
          { label: 'next', value: '→ null (마지막)', mono: true },
        ],
        nextLabel: '→ null',
        isLast: true,
      },
    ],
  },
  whyOrder: {
    eyebrow: 'order-matters',
    title: '왜 순서가 중요한가?',
    leftCard: {
      title: '첫 렌더 (정상)',
      rows: ['useState → Hook #1', 'useEffect → Hook #2'],
      diagram: ['Hook #1', 'Hook #2'],
    },
    rightCard: {
      title: '다음 렌더 (순서 변경)',
      rows: ['useEffect → ?', 'useState → ?'],
      warning: '매칭 붕괴: 상태가 꼬입니다.',
    },
    banner: {
      text: 'Hooks는 이름이 아니라 호출 순서로 매칭됩니다. 순서가 바뀌면 이전 상태를 잘못 읽게 됩니다.',
      ctaLabel: '다음: Rules of Hooks 자세히 보기',
      ctaHref: '/rules-of-hooks',
    },
  },
  mission: {
    eyebrow: 'follow-mission',
    title: '직접 코드에서 따라가 보기',
    items: [
      {
        number: '01',
        title: 'Hook 타입 확인',
        description: 'useState, useRef, useEffect 등이 각 Hook이 어떤 Hook인지 확인해보세요.',
      },
      {
        number: '02',
        title: 'mountWorkInProgressHook 찾기',
        description: 'ReactFiberHooks.js에서 이 함수가 어디서 호출되는지 찾아보세요.',
      },
      {
        number: '03',
        title: '첫 Hook 연결 확인',
        description:
          '현재 렌더 Fiber의 memoizedState가 첫 Hook을 가리키도록 설정되는 지점을 확인하세요.',
      },
      {
        number: '04',
        title: 'next 연결 확인',
        description: '두 번째, 세 번째 Hook이 이전 Hook의 next로 연결되는 과정을 추적하세요.',
      },
    ],
  },
  summary: {
    eyebrow: 'key-takeaways',
    title: '핵심 요약',
    items: [
      {
        number: 1,
        title: 'Hook은 연결 리스트다',
        description: 'Fiber.memoizedState에서 시작해 next로 이어지는 단방향 리스트입니다.',
        tone: 'sky',
      },
      {
        number: 2,
        title: '순서가 정체성이다',
        description: 'Hook은 이름이 아니라 호출 순서로 구분됩니다.',
        tone: 'teal',
      },
      {
        number: 3,
        title: 'Fiber가 기억한다',
        description: '모든 Hook 정보는 해당 함수 컴포넌트의 Fiber 안에 연결 리스트로 저장됩니다.',
        tone: 'violet',
      },
    ],
  },
  cta: {
    label: '다음: useState 내부 구조 해부하기',
    href: '/use-state-internal',
    description:
      'Hook 노드 구조를 알았다면, 이제 가장 익숙한 useState가 이 구조를 어떻게 사용하는지 살펴봅니다.',
  },
};

const en: HookLinkedListContent = {
  hero: {
    badge: 'Hooks Internals · 3/10',
    titleLine1: 'Hooks live inside a Fiber',
    titleAccent: 'as a linked list',
    titleLine2: '',
    description:
      'useState, useRef and useEffect become Hook nodes in call order, all chained inside a single Fiber.',
    conceptCards: [
      { label: 'Key idea', value: 'Order is identity', tone: 'teal' },
      { label: 'Storage', value: 'Fiber.memoizedState', tone: 'sky' },
    ],
    diagramTitle: 'Function Component Fiber',
    fiberFields: ['tag', 'type', 'memoizedProps', 'updateQueue', '...'],
    fiberHighlight: 'memoizedState',
    hookNodes: [
      {
        index: 1,
        hookName: 'useState',
        fields: HOOK_NODE_FIELDS,
        nextLabel: 'next',
        tone: 'sky',
      },
      {
        index: 2,
        hookName: 'useRef',
        fields: HOOK_NODE_FIELDS,
        nextLabel: 'next',
        tone: 'teal',
      },
      {
        index: 3,
        hookName: 'useEffect',
        fields: HOOK_NODE_FIELDS.map((f) =>
          f.name === 'next' ? { name: 'next', value: 'null' } : f,
        ),
        nextLabel: 'next: null',
        tone: 'violet',
      },
    ],
    bottomLabel: 'Singly linked list',
  },
  question: {
    eyebrow: "Today's question",
    title: 'How does React tell the first useState apart from the second useEffect?',
  },
  breakdown: {
    eyebrow: 'fiber-structure',
    title: 'Fiber structure breakdown',
    leftLabel: 'Fiber object (summary)',
    code: FIBER_CODE,
    highlightLine: 'memoizedState: Hook | null,',
    rightTitle: 'Hook linked list starting from memoizedState',
    flow: [
      { label: 'memoizedState', sub: '(first Hook)', tone: 'cyan' },
      { label: 'Hook #1', sub: 'useState', tone: 'sky' },
      { label: 'Hook #2', sub: 'useRef', tone: 'teal' },
      { label: 'Hook #3', sub: 'useEffect', tone: 'violet' },
      { label: 'null', tone: 'amber' },
    ],
    bottomLabel: 'Singly linked list',
  },
  objectStructure: {
    eyebrow: 'hook-object',
    title: 'Hook object structure',
    code: HOOK_TYPE_CODE,
    fields: [
      {
        name: 'memoizedState',
        description: 'The real value the Hook stores (state, ref, effect, …)',
        tone: 'sky',
      },
      {
        name: 'baseState',
        description: 'Baseline state before pending updates are applied',
        tone: 'cyan',
      },
      {
        name: 'baseQueue',
        description: 'Updates that were skipped because of lower priority',
        tone: 'amber',
      },
      {
        name: 'queue',
        description: 'Update queue carrying dispatch + pending updates',
        tone: 'teal',
      },
      {
        name: 'next',
        description: 'Pointer to the next Hook — the linked list backbone',
        tone: 'violet',
        isPointer: true,
      },
    ],
  },
  connection: {
    eyebrow: 'connection-process',
    title: 'How Hooks link up in call order',
    profileCode: PROFILE_CODE,
    steps: [
      {
        number: 1,
        title: 'useState is called',
        description: 'Create Hook #1 → attach to Fiber.memoizedState',
        diagram: ['Fiber.memoizedState', 'Hook #1'],
        tone: 'sky',
      },
      {
        number: 2,
        title: 'useRef is called',
        description: 'Create Hook #2 → link from Hook #1.next',
        diagram: ['Fiber.memoizedState', 'Hook #1', 'Hook #2'],
        tone: 'teal',
      },
      {
        number: 3,
        title: 'useEffect is called',
        description: 'Create Hook #3 → link from Hook #2.next',
        diagram: ['Fiber.memoizedState', 'Hook #1', 'Hook #2', 'Hook #3'],
        tone: 'violet',
      },
    ],
  },
  mountPreview: {
    eyebrow: 'mount-work-in-progress-hook',
    title: 'Real code: mountWorkInProgressHook',
    code: MOUNT_HOOK_CODE_EN,
    explanation:
      'The first Hook attaches to Fiber.memoizedState; later Hooks are linked through next.',
    fileLabel: 'where',
    fileName: 'ReactFiberHooks.js',
    buttonLabel: 'View full code on GitHub',
    buttonHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js',
  },
  multipleHooks: {
    eyebrow: 'multiple-hooks',
    title: 'How multiple Hooks look internally',
    cards: [
      {
        index: 1,
        hookName: 'useState',
        badge: 'stores state',
        tone: 'sky',
        fields: [
          { label: 'memoizedState', value: "current state: 'John'", mono: true },
          { label: 'queue', value: 'dispatch, pending updates' },
          { label: 'next', value: '→ Hook #2', mono: true },
        ],
        nextLabel: '→ Hook #2',
      },
      {
        index: 2,
        hookName: 'useRef',
        badge: 'stores a ref object',
        tone: 'teal',
        fields: [
          { label: 'memoizedState', value: '{ current: <input /> }', mono: true },
          { label: 'queue', value: 'null', mono: true },
          { label: 'next', value: '→ Hook #3', mono: true },
        ],
        nextLabel: '→ Hook #3',
      },
      {
        index: 3,
        hookName: 'useEffect',
        badge: 'stores an effect object',
        tone: 'violet',
        fields: [
          { label: 'memoizedState', value: '{ create, deps, tag, destroy }', mono: true },
          { label: 'queue', value: 'effect queue' },
          { label: 'next', value: '→ null (last)', mono: true },
        ],
        nextLabel: '→ null',
        isLast: true,
      },
    ],
  },
  whyOrder: {
    eyebrow: 'order-matters',
    title: 'Why does order matter?',
    leftCard: {
      title: 'First render (normal)',
      rows: ['useState → Hook #1', 'useEffect → Hook #2'],
      diagram: ['Hook #1', 'Hook #2'],
    },
    rightCard: {
      title: 'Next render (order changed)',
      rows: ['useEffect → ?', 'useState → ?'],
      warning: 'Match broken — state gets tangled.',
    },
    banner: {
      text: 'Hooks match by call order, not by name. Flip the order and React reads from the wrong slot.',
      ctaLabel: 'Next: read Rules of Hooks in detail',
      ctaHref: '/rules-of-hooks',
    },
  },
  mission: {
    eyebrow: 'follow-mission',
    title: 'Follow it in the source',
    items: [
      {
        number: '01',
        title: 'Confirm the Hook types',
        description: 'See which Hook each useState/useRef/useEffect maps to.',
      },
      {
        number: '02',
        title: 'Find mountWorkInProgressHook',
        description: 'Locate where this function is called inside ReactFiberHooks.js.',
      },
      {
        number: '03',
        title: 'Verify the first Hook attaches',
        description: 'Watch the current Fiber.memoizedState being pointed to the first Hook.',
      },
      {
        number: '04',
        title: 'Trace the next links',
        description: 'Follow how Hook #2 and Hook #3 are appended via previous.next.',
      },
    ],
  },
  summary: {
    eyebrow: 'key-takeaways',
    title: 'Key takeaways',
    items: [
      {
        number: 1,
        title: 'Hooks form a linked list',
        description: 'A singly linked list that starts at Fiber.memoizedState and follows next.',
        tone: 'sky',
      },
      {
        number: 2,
        title: 'Order is identity',
        description: 'Hooks are matched by call order, not by name.',
        tone: 'teal',
      },
      {
        number: 3,
        title: 'The Fiber remembers',
        description: 'All Hook info lives inside that function component’s Fiber as a linked list.',
        tone: 'violet',
      },
    ],
  },
  cta: {
    label: 'Next: dissect useState internals',
    href: '/use-state-internal',
    description:
      'Now that you know the Hook node shape, see how the most familiar Hook — useState — uses it.',
  },
};

export const hookLinkedListContent: Record<Locale, HookLinkedListContent> = { ko, en };

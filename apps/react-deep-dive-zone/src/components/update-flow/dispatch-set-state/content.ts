import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type MountStepIconName =
  | 'fileCode'
  | 'flame'
  | 'database'
  | 'box'
  | 'save'
  | 'cornerDownRight';

export type MountStateStep = {
  number: string;
  title: string;
  description: string;
  tone: ToneKey;
  iconName: MountStepIconName;
  highlight?: boolean;
};

export type BindReasonIconName = 'box' | 'link' | 'shield';

export type BindReasonCard = {
  marker: string;
  title: string;
  body: string;
  sub: string;
  tone: ToneKey;
  iconName: BindReasonIconName;
};

export type MemoryNodeIconName = 'cuboid' | 'layers' | 'database' | 'functionSquare';

export type MemoryNode = {
  id: string;
  title: string;
  subtitle: string;
  fields?: string[];
  body?: string;
  tone: ToneKey;
  iconName: MemoryNodeIconName;
  connectorLabel?: string;
};

export type RuntimeStepIconName = 'hand' | 'zap' | 'database' | 'loader';

export type RuntimeStep = {
  number: string;
  title: string;
  subtitle: string;
  tone: ToneKey;
  iconName: RuntimeStepIconName;
};

export type SummaryPill = {
  iconName: 'link' | 'save' | 'shield';
  text: string;
};

export type DispatchSetStateContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    leftCard: {
      title: string;
      subtitle: string;
      fields: string[];
    };
    centerCard: {
      title: string;
      subtitle: string;
      bodyTitle: string;
      items: { marker: string; label: string; sub: string }[];
    };
    rightCard: {
      title: string;
      subtitle: string;
      fields: string[];
    };
    arrowLeftLabel: string;
    arrowRightLabel: string;
    bottomCallout: string;
  };
  compare: {
    number: string;
    eyebrow: string;
    title: string;
    leftCard: {
      title: string;
      code: string;
      description: string;
    };
    rightCard: {
      title: string;
      code: string;
      description: string;
    };
    bottomNote: string;
  };
  flow: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: MountStateStep[];
  };
  checkpoint: {
    number: string;
    eyebrow: string;
    title: string;
    info: {
      fileLabel: string;
      filePath: string;
      functionLabel: string;
      functionName: string;
      questionLabel: string;
      question: string;
      buttonLabel: string;
    };
    code: {
      fileName: string;
      language: string;
      content: string;
    };
  };
  bindReasons: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: BindReasonCard[];
  };
  relationship: {
    number: string;
    eyebrow: string;
    title: string;
    leftTitle: string;
    leftSubtitle: string;
    nodes: MemoryNode[];
    rightTitle: string;
    rightSubtitle: string;
    runtimeSteps: RuntimeStep[];
  };
  quiz: {
    number: string;
    eyebrow: string;
    title: string;
    questionLabel: string;
    answerLabel: string;
    question: string;
    answerTitle: string;
    answerBody: string;
  };
  summary: {
    number: string;
    eyebrow: string;
    title: string;
    main: { lead: string; emphasis: string; tail: string };
    pills: SummaryPill[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const checkpointCodeKo = `function mountState(initialState) {
  const hook = mountStateImpl(initialState);
  const queue = hook.queue;

  // 현재 렌더 중인 Fiber
  const currentFiber = currentlyRenderingFiber;

  // dispatch 함수 생성: Fiber와 queue를 함께 기억
  const dispatch = dispatchSetState.bind(null, currentFiber, queue);

  // queue에 dispatch 저장
  queue.dispatch = dispatch;

  // [현재 state, dispatch] 반환
  return [hook.memoizedState, dispatch];
}`;

const checkpointCodeEn = `function mountState(initialState) {
  const hook = mountStateImpl(initialState);
  const queue = hook.queue;

  // The Fiber currently being rendered
  const currentFiber = currentlyRenderingFiber;

  // Build the dispatch fn: remember Fiber and queue together
  const dispatch = dispatchSetState.bind(null, currentFiber, queue);

  // Store the dispatch back on the queue
  queue.dispatch = dispatch;

  // Return [current state, dispatch]
  return [hook.memoizedState, dispatch];
}`;

const ko: DispatchSetStateContent = {
  hero: {
    badge: '업데이트 시작 · 2/10단계',
    title: {
      line1: 'setState는 컴포넌트와',
      line2: '무관한 함수가 아닙니다.',
    },
    description:
      'useState가 처음 실행될 때 React는 현재 Fiber와 해당 Hook의 update queue를 setter 함수에 함께 묶어둡니다.',
    leftCard: {
      title: 'Fiber',
      subtitle: '현재 컴포넌트',
      fields: ['tag', 'key', 'elementType', 'type', '…', 'memoizedState', 'updateQueue', '…'],
    },
    centerCard: {
      title: 'setCount',
      subtitle: 'dispatch 함수',
      bodyTitle: '기억하고 있는 정보',
      items: [
        { marker: '01', label: 'Fiber', sub: '현재 컴포넌트' },
        { marker: '02', label: 'Hook Queue', sub: 'update queue' },
      ],
    },
    rightCard: {
      title: 'Hook Queue',
      subtitle: 'update queue',
      fields: ['pending', 'lanes', 'dispatch', 'lastRenderedState', 'lastRenderedReducer', '…'],
    },
    arrowLeftLabel: 'bind',
    arrowRightLabel: 'bind',
    bottomCallout: '이 두 정보를 기억한 상태로 나중에 호출된다.',
  },
  compare: {
    number: '01',
    eyebrow: '공개 API vs 내부 구조',
    title: '공개 API와 내부 구조 비교',
    leftCard: {
      title: '사용자에게 보이는 코드',
      code: 'const [count, setCount] = useState(0);',
      description: 'setCount는 단순한 함수처럼 보인다.',
    },
    rightCard: {
      title: '내부에서의 실제 구조 (개념적 표현)',
      code: `setCount
≈ dispatchSetState.bind(
    null,
    currentlyRenderingFiber,
    queue
  )`,
      description: 'setCount는 특정 Fiber와 특정 queue를 기억한 dispatch 함수다.',
    },
    bottomNote:
      '나중에 setCount(...)가 호출되어도, React는 이미 어느 Fiber와 어느 queue인지 알고 있다.',
  },
  flow: {
    number: '02',
    eyebrow: 'mountState 내부 흐름',
    title: 'mountState 내부 흐름 (한눈에 보기)',
    description:
      'useState가 처음 실행될 때 setter가 어떻게 만들어지고, 어디에 저장되어 나중까지 살아남는지 단계별로 따라갑니다.',
    steps: [
      {
        number: '1',
        title: 'useState 호출',
        description: '컴포넌트 렌더링 중 useState가 호출된다.',
        tone: 'sky',
        iconName: 'fileCode',
      },
      {
        number: '2',
        title: 'mountStateImpl 실행',
        description: '초기 state를 기반으로 Hook 객체를 생성한다.',
        tone: 'cyan',
        iconName: 'flame',
      },
      {
        number: '3',
        title: 'hook.queue 생성',
        description: '해당 Hook을 위한 update queue를 만든다.',
        tone: 'violet',
        iconName: 'database',
      },
      {
        number: '4',
        title: 'dispatchSetState를 bind',
        description: '현재 Fiber와 queue를 묶어 dispatch 함수를 만든다.',
        tone: 'teal',
        iconName: 'box',
        highlight: true,
      },
      {
        number: '5',
        title: 'queue.dispatch 저장',
        description: '생성된 dispatch 함수를 queue.dispatch에 저장한다.',
        tone: 'amber',
        iconName: 'save',
        highlight: true,
      },
      {
        number: '6',
        title: '[현재 state, dispatch] 반환',
        description: '사용자 코드로 [state, setState] 형태로 반환된다.',
        tone: 'emerald',
        iconName: 'cornerDownRight',
      },
    ],
  },
  checkpoint: {
    number: '03',
    eyebrow: '코드 체크포인트',
    title: '코드 체크포인트',
    info: {
      fileLabel: '파일',
      filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
      functionLabel: '함수',
      functionName: 'mountState',
      questionLabel: '학습 질문',
      question: 'setter 함수는 언제 Fiber와 queue를 기억하게 될까?',
      buttonLabel: '힌트 보기',
    },
    code: {
      fileName: 'ReactFiberHooks.js',
      language: 'JS',
      content: checkpointCodeKo,
    },
  },
  bindReasons: {
    number: '04',
    eyebrow: 'bind가 필요한 이유',
    title: '왜 bind가 필요한가?',
    description:
      'bind는 단순한 문법이 아니라, 나중에 호출될 setCount가 필요한 내부 정보를 잃지 않게 묶어두는 장치다.',
    cards: [
      {
        marker: '01',
        title: 'Fiber를 기억한다',
        body: '어느 컴포넌트(Fiber)의 상태 업데이트인지 알기 위해 현재 Fiber를 함께 기억한다.',
        sub: '→ 상태를 전파하거나 스케줄링할 때 사용',
        tone: 'emerald',
        iconName: 'box',
      },
      {
        marker: '02',
        title: 'queue를 기억한다',
        body: '어느 Hook의 update queue에 업데이트를 넣어야 하는지 알기 위해 queue를 기억한다.',
        sub: '→ update 객체를 정확한 queue에 넣는다',
        tone: 'sky',
        iconName: 'link',
      },
      {
        marker: '03',
        title: '나중 호출에 대비한다',
        body: '이벤트 핸들러 등에서 나중에 호출되어도 Fiber와 queue 정보를 잃지 않고 정확히 연결된 상태로 동작할 수 있다.',
        sub: '→ event handler·async 호출에도 안전',
        tone: 'violet',
        iconName: 'shield',
      },
    ],
  },
  relationship: {
    number: '05',
    eyebrow: '관계도',
    title: 'Fiber / Hook / queue / dispatch 관계도',
    leftTitle: '메모리 구조',
    leftSubtitle: '렌더 직후',
    nodes: [
      {
        id: 'fiber',
        title: 'Counter Fiber',
        subtitle: '현재 렌더 중인 Fiber',
        fields: ['memoizedState', 'updateQueue', 'lanes', '…'],
        tone: 'emerald',
        iconName: 'cuboid',
        connectorLabel: 'memoizedState ↔ Hook',
      },
      {
        id: 'hook',
        title: 'Hook',
        subtitle: 'useState의 Hook',
        fields: ['memoizedState: 0', 'queue'],
        tone: 'violet',
        iconName: 'layers',
        connectorLabel: 'hook.queue ↓',
      },
      {
        id: 'queue',
        title: 'Update Queue',
        subtitle: 'Hook에 연결된 queue',
        fields: ['pending: null', 'lanes: NoLanes', 'dispatch →'],
        tone: 'amber',
        iconName: 'database',
        connectorLabel: 'queue.dispatch ↔',
      },
      {
        id: 'dispatch',
        title: 'dispatch = setCount',
        subtitle: 'dispatchSetState.bind(…)',
        body: 'Fiber + queue 정보를 기억',
        tone: 'sky',
        iconName: 'functionSquare',
      },
    ],
    rightTitle: '실행 흐름',
    rightSubtitle: '나중에 호출될 때',
    runtimeSteps: [
      {
        number: '1',
        title: 'setCount(...) 호출',
        subtitle: '사용자 코드',
        tone: 'amber',
        iconName: 'hand',
      },
      {
        number: '2',
        title: 'dispatch 함수 실행',
        subtitle: '이미 Fiber와 queue를 알고 있음',
        tone: 'amber',
        iconName: 'zap',
      },
      {
        number: '3',
        title: '해당 queue에 update 등록',
        subtitle: 'enqueue',
        tone: 'emerald',
        iconName: 'database',
      },
      {
        number: '4',
        title: '상위로 전파 및 스케줄링',
        subtitle: 'scheduleUpdateOnFiber → Root',
        tone: 'sky',
        iconName: 'loader',
      },
    ],
  },
  quiz: {
    number: '06',
    eyebrow: '미니 퀴즈',
    title: '미니 퀴즈',
    questionLabel: '질문',
    answerLabel: '핵심 정답',
    question: '사용자가 호출하는 setCount는 어떤 정보를 이미 품고 있을까?',
    answerTitle: '현재 컴포넌트 Fiber와 해당 Hook의 update queue.',
    answerBody:
      '그래서 나중에 호출되어도 React는 어느 Fiber의 어떤 queue에 업데이트를 넣어야 하는지 정확히 알고 있습니다.',
  },
  summary: {
    number: '07',
    eyebrow: '핵심 요약',
    title: '핵심 요약',
    main: {
      lead: 'setState(setCount)는 단순한 함수가 아니다.',
      emphasis: '특정 Fiber와 특정 queue를 기억한 dispatch 함수다',
      tail: '.',
    },
    pills: [
      { iconName: 'link', text: 'mountState에서 Fiber와 queue를 bind → dispatch 생성' },
      { iconName: 'save', text: 'dispatch는 queue.dispatch에 저장' },
      { iconName: 'shield', text: '나중 호출에도 정확한 저장소(queue)로 업데이트를 보낼 수 있음' },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'dispatchSetState',
    description:
      'setState가 Fiber와 queue를 기억한 dispatch 함수라는 점을 알았다면, 이제 실제 업데이트 진입점인 dispatchSetState를 읽어봅니다.',
    cta: '다음 페이지로 이동',
    href: '/enqueue-update',
  },
};

const en: DispatchSetStateContent = {
  hero: {
    badge: 'Update Flow · 2/10',
    title: {
      line1: 'setState is not a function',
      line2: 'detached from the component.',
    },
    description:
      'The first time useState runs, React binds the current Fiber and that Hook’s update queue into the setter function itself.',
    leftCard: {
      title: 'Fiber',
      subtitle: 'the current component',
      fields: ['tag', 'key', 'elementType', 'type', '…', 'memoizedState', 'updateQueue', '…'],
    },
    centerCard: {
      title: 'setCount',
      subtitle: 'dispatch function',
      bodyTitle: 'remembers',
      items: [
        { marker: '01', label: 'Fiber', sub: 'the current component' },
        { marker: '02', label: 'Hook Queue', sub: 'the update queue' },
      ],
    },
    rightCard: {
      title: 'Hook Queue',
      subtitle: 'update queue',
      fields: ['pending', 'lanes', 'dispatch', 'lastRenderedState', 'lastRenderedReducer', '…'],
    },
    arrowLeftLabel: 'bind',
    arrowRightLabel: 'bind',
    bottomCallout: 'It carries both into every later call.',
  },
  compare: {
    number: '01',
    eyebrow: 'API VS INTERNALS',
    title: 'Public API vs the real internal shape',
    leftCard: {
      title: 'What the user writes',
      code: 'const [count, setCount] = useState(0);',
      description: 'setCount looks like a plain function.',
    },
    rightCard: {
      title: 'What it really is (conceptual)',
      code: `setCount
≈ dispatchSetState.bind(
    null,
    currentlyRenderingFiber,
    queue
  )`,
      description:
        'setCount is a dispatch fn that remembers a specific Fiber and a specific queue.',
    },
    bottomNote:
      'When setCount(...) is called later, React already knows which Fiber and which queue it belongs to.',
  },
  flow: {
    number: '02',
    eyebrow: 'MOUNTSTATE FLOW',
    title: 'mountState flow at a glance',
    description:
      'Follow how the setter is built on first render, where it gets stored, and how it survives until later calls.',
    steps: [
      {
        number: '1',
        title: 'useState called',
        description: 'useState runs during the component render.',
        tone: 'sky',
        iconName: 'fileCode',
      },
      {
        number: '2',
        title: 'mountStateImpl runs',
        description: 'A Hook object is created from the initial state.',
        tone: 'cyan',
        iconName: 'flame',
      },
      {
        number: '3',
        title: 'hook.queue created',
        description: 'An update queue is created for this Hook.',
        tone: 'violet',
        iconName: 'database',
      },
      {
        number: '4',
        title: 'bind dispatchSetState',
        description: 'The current Fiber and queue are bound into a dispatch function.',
        tone: 'teal',
        iconName: 'box',
        highlight: true,
      },
      {
        number: '5',
        title: 'Store on queue.dispatch',
        description: 'The dispatch function is saved on queue.dispatch.',
        tone: 'amber',
        iconName: 'save',
        highlight: true,
      },
      {
        number: '6',
        title: 'Return [state, dispatch]',
        description: 'Handed back to user code as [state, setState].',
        tone: 'emerald',
        iconName: 'cornerDownRight',
      },
    ],
  },
  checkpoint: {
    number: '03',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source checkpoint',
    info: {
      fileLabel: 'File',
      filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
      functionLabel: 'Function',
      functionName: 'mountState',
      questionLabel: 'Learning question',
      question: 'When does the setter remember its Fiber and queue?',
      buttonLabel: 'Show hint',
    },
    code: {
      fileName: 'ReactFiberHooks.js',
      language: 'JS',
      content: checkpointCodeEn,
    },
  },
  bindReasons: {
    number: '04',
    eyebrow: 'WHY BIND',
    title: 'Why bind is needed',
    description:
      'bind is not just syntax — it keeps the information the setter needs alive across later, async calls.',
    cards: [
      {
        marker: '01',
        title: 'Remember the Fiber',
        body: 'Bind the current Fiber so React knows which component this update belongs to.',
        sub: '→ used when propagating or scheduling',
        tone: 'emerald',
        iconName: 'box',
      },
      {
        marker: '02',
        title: 'Remember the queue',
        body: "Bind the queue so the update goes into the right Hook's queue.",
        sub: '→ puts the update object on the correct queue',
        tone: 'sky',
        iconName: 'link',
      },
      {
        marker: '03',
        title: 'Survive later calls',
        body: 'Even from event handlers or async code later, the setter keeps its Fiber and queue context intact.',
        sub: '→ safe across handlers and async paths',
        tone: 'violet',
        iconName: 'shield',
      },
    ],
  },
  relationship: {
    number: '05',
    eyebrow: 'RELATIONSHIP MAP',
    title: 'Fiber / Hook / queue / dispatch relationship',
    leftTitle: 'Memory layout',
    leftSubtitle: 'right after render',
    nodes: [
      {
        id: 'fiber',
        title: 'Counter Fiber',
        subtitle: 'the Fiber being rendered',
        fields: ['memoizedState', 'updateQueue', 'lanes', '…'],
        tone: 'emerald',
        iconName: 'cuboid',
        connectorLabel: 'memoizedState ↔ Hook',
      },
      {
        id: 'hook',
        title: 'Hook',
        subtitle: "useState's Hook",
        fields: ['memoizedState: 0', 'queue'],
        tone: 'violet',
        iconName: 'layers',
        connectorLabel: 'hook.queue ↓',
      },
      {
        id: 'queue',
        title: 'Update Queue',
        subtitle: 'queue attached to the Hook',
        fields: ['pending: null', 'lanes: NoLanes', 'dispatch →'],
        tone: 'amber',
        iconName: 'database',
        connectorLabel: 'queue.dispatch ↔',
      },
      {
        id: 'dispatch',
        title: 'dispatch = setCount',
        subtitle: 'dispatchSetState.bind(…)',
        body: 'remembers Fiber + queue',
        tone: 'sky',
        iconName: 'functionSquare',
      },
    ],
    rightTitle: 'Runtime flow',
    rightSubtitle: 'when called later',
    runtimeSteps: [
      {
        number: '1',
        title: 'setCount(...) is called',
        subtitle: 'user code',
        tone: 'amber',
        iconName: 'hand',
      },
      {
        number: '2',
        title: 'dispatch function runs',
        subtitle: 'already knows Fiber and queue',
        tone: 'amber',
        iconName: 'zap',
      },
      {
        number: '3',
        title: 'Enqueue the update on that queue',
        subtitle: 'enqueue',
        tone: 'emerald',
        iconName: 'database',
      },
      {
        number: '4',
        title: 'Propagate and schedule',
        subtitle: 'scheduleUpdateOnFiber → Root',
        tone: 'sky',
        iconName: 'loader',
      },
    ],
  },
  quiz: {
    number: '06',
    eyebrow: 'MINI QUIZ',
    title: 'Mini quiz',
    questionLabel: 'Question',
    answerLabel: 'Core answer',
    question: 'What information does the setCount you call already carry?',
    answerTitle: "The current component's Fiber and that Hook's update queue.",
    answerBody:
      "Even when called later, React knows exactly which Fiber's queue the update belongs to.",
  },
  summary: {
    number: '07',
    eyebrow: 'KEY SUMMARY',
    title: 'Key summary',
    main: {
      lead: 'setState (setCount) is not a plain function —',
      emphasis: "it's a dispatch that remembers a specific Fiber and a specific queue",
      tail: '.',
    },
    pills: [
      { iconName: 'link', text: 'mountState binds Fiber + queue → produces dispatch' },
      { iconName: 'save', text: 'dispatch is stored on queue.dispatch' },
      { iconName: 'shield', text: 'Later calls still land on the exact queue' },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'dispatchSetState',
    description:
      'Now that you know setState is a dispatch that remembers its Fiber and queue, read the actual entry point: dispatchSetState.',
    cta: 'Go to the next page',
    href: '/enqueue-update',
  },
};

export const dispatchSetStateContent: Record<Locale, DispatchSetStateContent> = { ko, en };

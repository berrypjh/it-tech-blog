import type { Locale } from '@it-tech-blog/preferences';

export type FieldKind = 'memoizedState' | 'updateQueue';

export type ComparisonCard = {
  kind: FieldKind;
  title: string;
  subtitle: string;
  items: string[];
  bottomLabel: string;
};

export type FlowStep = {
  id: string;
  number: string;
  title: string;
  body: string;
  iconName: 'cursor' | 'zap' | 'package' | 'list' | 'sparkles';
  tone: 'emerald' | 'sky' | 'violet' | 'amber' | 'teal';
};

export type RoleFlowCard = {
  id: 'now' | 'request' | 'after';
  title: string;
  valuePill: string;
  field: FieldKind;
  descriptionLines: string[];
  iconName: 'database' | 'list' | 'check';
  tone: 'emerald' | 'violet' | 'amber';
};

export type ConnectionCard = {
  id: 'class' | 'hooks' | 'dispatch';
  title: string;
  subtitle: string;
  body: string;
  buttonLabel: string;
  buttonHref: string;
  iconName: 'box' | 'hook' | 'send';
  tone: 'emerald' | 'violet' | 'sky';
};

export type QuizCard = {
  id: string;
  question: string;
  answer: string;
  explanation: string;
};

export type FiberStateAndQueueContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    emphasis: string;
    description: string;
    cardLabel: string;
    fiberFields: { label: string; field?: FieldKind }[];
    memoizedCard: {
      title: string;
      subtitle: string;
      description: string;
    };
    updateQueueCard: {
      title: string;
      subtitle: string;
      description: string;
    };
  };
  comparison: {
    number: string;
    eyebrow: string;
    title: string;
    vs: string;
    cards: ComparisonCard[];
  };
  setStateFlow: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: FlowStep[];
  };
  roleFlow: {
    number: string;
    eyebrow: string;
    title: string;
    cards: RoleFlowCard[];
  };
  checkpoint: {
    number: string;
    eyebrow: string;
    title: string;
    info: {
      title: string;
      filesLabel: string;
      file: string;
      lookForLabel: string;
      lookFor: string;
      questionLabel: string;
      question: string;
      buttonLabel: string;
      buttonHref: string;
    };
    code: {
      fileName: string;
      language: string;
      content: string;
    };
  };
  connections: {
    number: string;
    eyebrow: string;
    title: string;
    cards: ConnectionCard[];
  };
  quiz: {
    number: string;
    eyebrow: string;
    title: string;
    questionLabel: string;
    answerLabel: string;
    explanationLabel: string;
    cards: QuizCard[];
  };
  checklist: {
    number: string;
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

const checkpointCode = `export type Fiber = {
  // ... 생략 ...

  // 업데이트 큐. 상태 업데이트, 콜백 등이 저장됩니다.
  updateQueue: mixed;

  // 현재 렌더 결과로 인해 확정된 state 값입니다.
  memoizedState: any;

  // ... 생략 ...
};`;

const checkpointCodeEn = `export type Fiber = {
  // ... omitted ...

  // Update queue. Stores state updates, callbacks, and more.
  updateQueue: mixed;

  // The state value committed by the latest render.
  memoizedState: any;

  // ... omitted ...
};`;

const ko: FiberStateAndQueueContent = {
  hero: {
    badge: 'Fiber 트리 · 6/10단계',
    title: {
      line1: '현재 상태와 대기 중인',
      line2: '업데이트는 같은 것이 아닙니다.',
    },
    emphasis: '같은 것이 아닙니다',
    description:
      'Fiber는 현재 출력에 사용된 state와, 다음 렌더링에서 처리해야 할 update를 별도로 관리합니다.',
    cardLabel: 'Fiber',
    fiberFields: [
      { label: 'tag' },
      { label: 'key' },
      { label: 'elementType' },
      { label: 'type' },
      { label: '...' },
      { label: 'memoizedState', field: 'memoizedState' },
      { label: 'updateQueue', field: 'updateQueue' },
    ],
    memoizedCard: {
      title: 'memoizedState',
      subtitle: '현재 출력에 사용된 state',
      description: '지난 렌더 결과를 대표하는 값',
    },
    updateQueueCard: {
      title: 'updateQueue',
      subtitle: '아직 처리되지 않은 업데이트',
      description: '다음 렌더에서 처리할 요청들',
    },
  },
  comparison: {
    number: '01',
    eyebrow: '두 필드 비교',
    title: 'memoizedState / updateQueue 비교',
    vs: 'VS',
    cards: [
      {
        kind: 'memoizedState',
        title: 'memoizedState',
        subtitle: '현재 출력 생성에 사용된 state',
        items: [
          '지난 렌더링이 끝난 뒤 확정된 값',
          '화면에 반영된 결과를 대표',
          '다음 렌더 전까지 유지',
        ],
        bottomLabel: '현재 결과 (지난 렌더)',
      },
      {
        kind: 'updateQueue',
        title: 'updateQueue',
        subtitle: '아직 처리되지 않은 상태 업데이트와 콜백',
        items: [
          'setState 등으로 들어온 요청 저장',
          '렌더링 중 순차적으로 처리될 예정',
          '큐에 여러 update가 쌓일 수 있음',
        ],
        bottomLabel: '다음 처리 (이번 렌더 이후)',
      },
    ],
  },
  setStateFlow: {
    number: '02',
    eyebrow: 'setState 흐름',
    title: 'setState가 들어왔을 때의 직관적 흐름',
    description: '곧바로 state가 바뀌지 않고, update 객체가 큐에 쌓여 다음 렌더에서 처리됩니다.',
    steps: [
      {
        id: 'click',
        number: '1',
        title: '사용자 클릭',
        body: 'UI 이벤트가 발생합니다.',
        iconName: 'cursor',
        tone: 'emerald',
      },
      {
        id: 'setstate',
        number: '2',
        title: 'setState 호출',
        body: '컴포넌트의 setState가 호출됩니다.',
        iconName: 'zap',
        tone: 'sky',
      },
      {
        id: 'update',
        number: '3',
        title: 'update 객체 생성',
        body: 'payload, lane, callback 등을 가진 update가 생성됩니다.',
        iconName: 'package',
        tone: 'violet',
      },
      {
        id: 'enqueue',
        number: '4',
        title: 'updateQueue에 연결',
        body: '생성된 update가 Fiber의 updateQueue에 연결됩니다.',
        iconName: 'list',
        tone: 'amber',
      },
      {
        id: 'process',
        number: '5',
        title: '다음 렌더에서 처리',
        body: 'React가 다음 렌더링을 수행할 때 새 상태로 계산됩니다.',
        iconName: 'sparkles',
        tone: 'teal',
      },
    ],
  },
  roleFlow: {
    number: '03',
    eyebrow: '필드 역할',
    title: '상태 필드와 큐 필드의 역할 구분',
    cards: [
      {
        id: 'now',
        title: '현재 렌더 결과',
        valuePill: 'count = 1',
        field: 'memoizedState',
        descriptionLines: ['현재 출력에 사용된 상태', '화면에 1이 보임'],
        iconName: 'database',
        tone: 'emerald',
      },
      {
        id: 'request',
        title: '업데이트 요청 발생',
        valuePill: 'setCount(2)',
        field: 'updateQueue',
        descriptionLines: ['아직 처리되지 않은 요청', '큐에 2로 변경 요청이 쌓임'],
        iconName: 'list',
        tone: 'violet',
      },
      {
        id: 'after',
        title: '다음 렌더 이후',
        valuePill: 'count = 2',
        field: 'memoizedState',
        descriptionLines: ['새 렌더 결과로 확정', '화면에 2가 보임'],
        iconName: 'check',
        tone: 'amber',
      },
    ],
  },
  checkpoint: {
    number: '04',
    eyebrow: '실제 코드와 연결',
    title: '실제 코드 체크포인트',
    info: {
      title: 'React 소스코드에서 직접 확인',
      filesLabel: '파일',
      file: 'packages/react-reconciler/src/ReactInternalTypes.js',
      lookForLabel: '볼 것',
      lookFor: 'updateQueue, memoizedState',
      questionLabel: '학습 질문',
      question: 'React는 현재 state와 대기 중인 update를 어떤 필드로 구분할까?',
      buttonLabel: 'GitHub 보기',
      buttonHref:
        'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactInternalTypes.js',
    },
    code: {
      fileName: 'ReactInternalTypes.js',
      language: 'TypeScript',
      content: checkpointCode,
    },
  },
  connections: {
    number: '05',
    eyebrow: '연결 예고',
    title: 'Hooks / Class Component와의 연결 예고',
    cards: [
      {
        id: 'class',
        title: 'Class Component',
        subtitle: 'updateQueue로 상태 업데이트 처리',
        body: 'setState 호출 시 updateQueue에 update가 쌓이고, 렌더 중 처리됩니다.',
        buttonLabel: '다음: Class Component 흐름',
        buttonHref: '/class-component-process',
        iconName: 'box',
        tone: 'emerald',
      },
      {
        id: 'hooks',
        title: 'Hooks',
        subtitle: 'memoizedState에 Hook chain 연결',
        body: 'useState 등 Hook의 상태 값은 memoizedState에 연결 리스트처럼 저장됩니다.',
        buttonLabel: '다음: Hooks와 memoizedState',
        buttonHref: '/hooks-overview',
        iconName: 'hook',
        tone: 'violet',
      },
      {
        id: 'dispatch',
        title: 'dispatchSetState',
        subtitle: 'update를 만들어 큐에 넣는 흐름',
        body: 'dispatchSetState가 update 객체를 생성하고 updateQueue에 enqueue합니다.',
        buttonLabel: '다음: dispatchSetState와 update',
        buttonHref: '/dispatch-set-state',
        iconName: 'send',
        tone: 'sky',
      },
    ],
  },
  quiz: {
    number: '06',
    eyebrow: '미니 개념 퀴즈',
    title: '미니 개념 퀴즈',
    questionLabel: '질문',
    answerLabel: '정답',
    explanationLabel: '해설',
    cards: [
      {
        id: 'q1',
        question: '현재 렌더 결과에 사용된 state는 어디에 저장될까?',
        answer: 'memoizedState',
        explanation:
          '지난 렌더링이 끝난 뒤 확정된 값이 memoizedState에 저장되어 다음 렌더 전까지 유지됩니다.',
      },
      {
        id: 'q2',
        question: '아직 처리되지 않은 update는?',
        answer: 'updateQueue',
        explanation:
          'setState 등으로 들어온 요청들은 updateQueue에 연결되어 다음 렌더에서 순차적으로 처리됩니다.',
      },
    ],
  },
  checklist: {
    number: '07',
    eyebrow: '핵심 체크리스트',
    title: '이번 페이지 핵심 체크리스트',
    items: [
      'memoizedState = 현재 렌더 결과 state',
      'updateQueue = 대기 중인 업데이트',
      'setState는 update를 만들어 큐에 추가',
      '다음 렌더에서 큐의 update를 처리하여 새 state 계산',
      'Hooks는 memoizedState에 Hook chain을 보관한다',
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'flags / subtreeFlags / deletions',
    description:
      '상태와 업데이트가 Fiber에 저장되는 위치를 봤다면, 이제 React가 실제 반영이 필요한 변경을 어떻게 표시해두는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/fiber-flags',
  },
};

const en: FiberStateAndQueueContent = {
  hero: {
    badge: 'Fiber Tree · 6/10',
    title: {
      line1: 'Current state and pending updates',
      line2: 'are not the same thing.',
    },
    emphasis: 'are not the same thing',
    description:
      'A Fiber manages the state used by the current output and the updates to process in future renders as two separate fields.',
    cardLabel: 'Fiber',
    fiberFields: [
      { label: 'tag' },
      { label: 'key' },
      { label: 'elementType' },
      { label: 'type' },
      { label: '...' },
      { label: 'memoizedState', field: 'memoizedState' },
      { label: 'updateQueue', field: 'updateQueue' },
    ],
    memoizedCard: {
      title: 'memoizedState',
      subtitle: 'state used by the current output',
      description: 'Represents the result of the last commit.',
    },
    updateQueueCard: {
      title: 'updateQueue',
      subtitle: 'updates not yet processed',
      description: 'Pending requests to handle in the next render.',
    },
  },
  comparison: {
    number: '01',
    eyebrow: 'Compare both fields',
    title: 'memoizedState vs updateQueue',
    vs: 'VS',
    cards: [
      {
        kind: 'memoizedState',
        title: 'memoizedState',
        subtitle: 'state used to produce the current output',
        items: [
          'A value committed after the last render',
          'Represents what is currently on screen',
          'Held until the next render runs',
        ],
        bottomLabel: 'Current result (last render)',
      },
      {
        kind: 'updateQueue',
        title: 'updateQueue',
        subtitle: 'pending state updates and callbacks',
        items: [
          'Stores requests from setState and similar calls',
          'Processed sequentially during render',
          'Many updates can be enqueued at once',
        ],
        bottomLabel: 'Next processing (after this render)',
      },
    ],
  },
  setStateFlow: {
    number: '02',
    eyebrow: 'setState flow',
    title: 'What happens when setState is called',
    description:
      'State does not change immediately — an update object is enqueued and applied in the next render.',
    steps: [
      {
        id: 'click',
        number: '1',
        title: 'User click',
        body: 'A UI event fires.',
        iconName: 'cursor',
        tone: 'emerald',
      },
      {
        id: 'setstate',
        number: '2',
        title: 'setState called',
        body: 'The component’s setState is invoked.',
        iconName: 'zap',
        tone: 'sky',
      },
      {
        id: 'update',
        number: '3',
        title: 'Build update object',
        body: 'An update with payload, lane, callback, etc. is created.',
        iconName: 'package',
        tone: 'violet',
      },
      {
        id: 'enqueue',
        number: '4',
        title: 'Enqueue to updateQueue',
        body: 'The update is linked onto the Fiber’s updateQueue.',
        iconName: 'list',
        tone: 'amber',
      },
      {
        id: 'process',
        number: '5',
        title: 'Process in next render',
        body: 'React applies the queued updates during the next render.',
        iconName: 'sparkles',
        tone: 'teal',
      },
    ],
  },
  roleFlow: {
    number: '03',
    eyebrow: 'Field roles',
    title: 'State field vs queue field — concrete roles',
    cards: [
      {
        id: 'now',
        title: 'Current render result',
        valuePill: 'count = 1',
        field: 'memoizedState',
        descriptionLines: ['State used by the current output', 'Screen shows 1'],
        iconName: 'database',
        tone: 'emerald',
      },
      {
        id: 'request',
        title: 'Update request arrives',
        valuePill: 'setCount(2)',
        field: 'updateQueue',
        descriptionLines: ['Request not yet processed', 'The "change to 2" request piles up'],
        iconName: 'list',
        tone: 'violet',
      },
      {
        id: 'after',
        title: 'After the next render',
        valuePill: 'count = 2',
        field: 'memoizedState',
        descriptionLines: ['Committed as the new render result', 'Screen shows 2'],
        iconName: 'check',
        tone: 'amber',
      },
    ],
  },
  checkpoint: {
    number: '04',
    eyebrow: 'Connect to real source',
    title: 'Source code checkpoint',
    info: {
      title: 'Verify in the React source',
      filesLabel: 'File',
      file: 'packages/react-reconciler/src/ReactInternalTypes.js',
      lookForLabel: 'Look for',
      lookFor: 'updateQueue, memoizedState',
      questionLabel: 'Learning question',
      question: 'Which fields separate current state from pending updates?',
      buttonLabel: 'View on GitHub',
      buttonHref:
        'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactInternalTypes.js',
    },
    code: {
      fileName: 'ReactInternalTypes.js',
      language: 'TypeScript',
      content: checkpointCodeEn,
    },
  },
  connections: {
    number: '05',
    eyebrow: 'Where it leads',
    title: 'Connecting to Hooks and Class Components',
    cards: [
      {
        id: 'class',
        title: 'Class Component',
        subtitle: 'state updates flow through updateQueue',
        body: 'setState calls enqueue updates into updateQueue and they are applied during render.',
        buttonLabel: 'Next: Class Component flow',
        buttonHref: '/class-component-process',
        iconName: 'box',
        tone: 'emerald',
      },
      {
        id: 'hooks',
        title: 'Hooks',
        subtitle: 'Hook chain hangs off memoizedState',
        body: 'Hook state values like useState are stored as a linked list on memoizedState.',
        buttonLabel: 'Next: Hooks & memoizedState',
        buttonHref: '/hooks-overview',
        iconName: 'hook',
        tone: 'violet',
      },
      {
        id: 'dispatch',
        title: 'dispatchSetState',
        subtitle: 'builds updates and pushes them to the queue',
        body: 'dispatchSetState creates an update object and enqueues it on updateQueue.',
        buttonLabel: 'Next: dispatchSetState & update',
        buttonHref: '/dispatch-set-state',
        iconName: 'send',
        tone: 'sky',
      },
    ],
  },
  quiz: {
    number: '06',
    eyebrow: 'Mini concept quiz',
    title: 'Mini concept quiz',
    questionLabel: 'Question',
    answerLabel: 'Answer',
    explanationLabel: 'Explanation',
    cards: [
      {
        id: 'q1',
        question: 'Where is the state used by the current render stored?',
        answer: 'memoizedState',
        explanation:
          'The value committed after the last render lives in memoizedState until the next render.',
      },
      {
        id: 'q2',
        question: 'Where do not-yet-processed updates live?',
        answer: 'updateQueue',
        explanation:
          'Requests from setState and similar are linked on updateQueue and applied in order during the next render.',
      },
    ],
  },
  checklist: {
    number: '07',
    eyebrow: 'Core checklist',
    title: 'Page recap checklist',
    items: [
      'memoizedState = current render result state',
      'updateQueue = pending updates',
      'setState builds an update and pushes it to the queue',
      'The next render processes the queue and yields new state',
      'Hooks keep the Hook chain on memoizedState',
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'flags / subtreeFlags / deletions',
    description:
      'Now that you know where state and updates live on a Fiber, see how React marks the changes that actually need to be applied.',
    cta: 'Go to the next page',
    href: '/fiber-flags',
  },
};

export const fiberStateAndQueueContent: Record<Locale, FiberStateAndQueueContent> = { ko, en };

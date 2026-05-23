import type { Locale } from '@it-tech-blog/preferences';

export type LaneTone = 'emerald' | 'sky' | 'cyan' | 'violet' | 'amber' | 'slate';

export type LaneId = 'sync' | 'inputContinuous' | 'default' | 'transition' | 'retry' | 'idle';

export type PriorityItem = {
  id: LaneId;
  label: string;
  subtitle: string;
  tone: LaneTone;
  iconName: 'zap' | 'mouse' | 'cube' | 'clock' | 'refresh' | 'leaf';
};

export type LaneCard = PriorityItem & {
  body: string;
};

export type FiberFieldRow = {
  field: string;
  value: string;
  highlight?: 'lanes' | 'childLanes';
};

export type ChildFiberNode = {
  id: string;
  label: string;
  lanes: string;
  childLanes: string;
  hasWork?: boolean;
  hasChildWork?: boolean;
};

export type BitfieldRow = {
  bits: string;
  lane: string;
  tone: LaneTone;
};

export type PropagationStep = {
  id: string;
  number: string;
  title: string;
  body: string;
  tone: 'sky' | 'violet' | 'emerald';
  iconName: 'pulse' | 'arrowUp' | 'eye';
};

export type QuizCard = {
  id: string;
  question: string;
  answer: string;
  tone: 'emerald' | 'violet';
};

export type FiberLanesContent = {
  hero: {
    badge: string;
    pill: string;
    title: { line1: string; line2: string };
    emphasis: string;
    description: string;
    cardLabel: string;
    fields: FiberFieldRow[];
    stackTitle: string;
    items: PriorityItem[];
  };
  comparison: {
    number: string;
    eyebrow: string;
    title: string;
    vs: string;
    lanesCard: { title: string; description: string };
    childLanesCard: { title: string; description: string };
    parentTitle: string;
    parentLanes: string;
    parentChildLanes: string;
    children: ChildFiberNode[];
    legend: { solid: string; dashed: string };
  };
  laneCards: {
    number: string;
    eyebrow: string;
    title: string;
    cards: LaneCard[];
  };
  bitfield: {
    number: string;
    eyebrow: string;
    title: string;
    rows: BitfieldRow[];
    description: string;
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
  propagation: {
    number: string;
    eyebrow: string;
    title: string;
    steps: PropagationStep[];
    emphasis: string;
  };
  quiz: {
    number: string;
    eyebrow: string;
    title: string;
    questionLabel: string;
    answerLabel: string;
    cards: QuizCard[];
  };
  next: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
};

const checkpointCode = `// ReactFiberLane.js (일부 발췌)

export const SyncLane = 0b0000000000000000000000000000010;

export const InputContinuousLane = 0b0000000000000000000000000001000;

export const DefaultLane = 0b0000000000000000000000000100000;

// TransitionLanes는 여러 비트의 조합
const TransitionLanes = 0b0000000001111111111111100000000;

export { SyncLane, InputContinuousLane, DefaultLane, TransitionLanes };`;

const checkpointCodeEn = `// ReactFiberLane.js (excerpt)

export const SyncLane = 0b0000000000000000000000000000010;

export const InputContinuousLane = 0b0000000000000000000000000001000;

export const DefaultLane = 0b0000000000000000000000000100000;

// TransitionLanes is a combination of bits
const TransitionLanes = 0b0000000001111111111111100000000;

export { SyncLane, InputContinuousLane, DefaultLane, TransitionLanes };`;

const ko: FiberLanesContent = {
  hero: {
    badge: '01',
    pill: '핵심 개념',
    title: {
      line1: 'Fiber는 작업 우선순위',
      line2: '정보도 품고 있습니다.',
    },
    emphasis: '작업 우선순위',
    description:
      '모든 업데이트가 같은 긴급도를 가지지는 않습니다. React는 lanes를 통해 작업의 급함을 기록합니다.',
    cardLabel: 'Fiber',
    fields: [
      { field: 'tag', value: 'FunctionComponent' },
      { field: 'key', value: 'null' },
      { field: 'type', value: 'App' },
      { field: 'return', value: '...' },
      { field: 'lanes', value: '0b000000001010000', highlight: 'lanes' },
      { field: 'childLanes', value: '0b000001111110000', highlight: 'childLanes' },
      { field: '...', value: '' },
    ],
    stackTitle: '우선순위 (lanes)',
    items: [
      {
        id: 'sync',
        label: 'SyncLane',
        subtitle: '가장 높은 긴급도',
        tone: 'emerald',
        iconName: 'zap',
      },
      {
        id: 'inputContinuous',
        label: 'InputContinuousLane',
        subtitle: '연속 입력 관련 작업',
        tone: 'sky',
        iconName: 'mouse',
      },
      {
        id: 'default',
        label: 'DefaultLane',
        subtitle: '일반적인 업데이트',
        tone: 'cyan',
        iconName: 'cube',
      },
      {
        id: 'transition',
        label: 'TransitionLanes',
        subtitle: '지연 가능한 전환 작업',
        tone: 'violet',
        iconName: 'clock',
      },
      {
        id: 'retry',
        label: 'RetryLanes',
        subtitle: '재시도 작업',
        tone: 'amber',
        iconName: 'refresh',
      },
      {
        id: 'idle',
        label: 'IdleLane',
        subtitle: '낮은 긴급도 작업',
        tone: 'slate',
        iconName: 'leaf',
      },
    ],
  },
  comparison: {
    number: '02',
    eyebrow: '두 lane 비교',
    title: 'lanes / childLanes 비교',
    vs: 'VS',
    lanesCard: {
      title: 'lanes',
      description: '이 Fiber 자신에게 남아 있는 작업 우선순위',
    },
    childLanesCard: {
      title: 'childLanes',
      description: '자식 트리 어딘가에 남아 있는 작업 우선순위',
    },
    parentTitle: 'Parent Fiber (Page)',
    parentLanes: '0b0000000000000000',
    parentChildLanes: '0b0000000111110000',
    children: [
      { id: 'Header', label: 'Header Fiber', lanes: '0', childLanes: '0' },
      {
        id: 'Main',
        label: 'Main Fiber',
        lanes: '0',
        childLanes: '0b0000010000000000',
        hasChildWork: true,
      },
      {
        id: 'Button',
        label: 'Button Fiber',
        lanes: '0b0000001000000000',
        childLanes: '0',
        hasWork: true,
      },
      {
        id: 'List',
        label: 'List Fiber',
        lanes: '0',
        childLanes: '0b0000001111110000',
        hasChildWork: true,
      },
      { id: 'Footer', label: 'Footer Fiber', lanes: '0', childLanes: '0' },
    ],
    legend: {
      solid: '실선 → Fiber 트리 관계',
      dashed: '점선 → childLanes가 자식 트리의 작업을 요약하여 부모로 전파',
    },
  },
  laneCards: {
    number: '03',
    eyebrow: '대표 lane',
    title: '대표 lane 카드',
    cards: [
      {
        id: 'sync',
        label: 'SyncLane',
        subtitle: '동기성이 높은 작업',
        body: '사용자 입력, flushSync 등 즉시 처리되어야 하는 작업.',
        tone: 'emerald',
        iconName: 'zap',
      },
      {
        id: 'inputContinuous',
        label: 'InputContinuousLane',
        subtitle: '연속 입력 관련 작업',
        body: '스크롤, 드래그, 마우스 이동 등 연속적인 입력에 대한 작업.',
        tone: 'sky',
        iconName: 'mouse',
      },
      {
        id: 'default',
        label: 'DefaultLane',
        subtitle: '일반적인 업데이트',
        body: '상태 업데이트, 렌더링 등 일반적인 우선순위 작업.',
        tone: 'cyan',
        iconName: 'cube',
      },
      {
        id: 'transition',
        label: 'TransitionLanes',
        subtitle: '지연 가능한 전환 작업',
        body: 'UI 전환, Suspense 전환 등 사용자 경험을 해치지 않는 작업.',
        tone: 'violet',
        iconName: 'clock',
      },
      {
        id: 'retry',
        label: 'RetryLanes',
        subtitle: '재시도 작업',
        body: '일시적으로 실패한 작업을 다시 시도할 때 사용하는 작업.',
        tone: 'amber',
        iconName: 'refresh',
      },
      {
        id: 'idle',
        label: 'IdleLane',
        subtitle: '낮은 긴급도 작업',
        body: '백그라운드 작업, 프리패치 등 낮은 우선순위의 작업.',
        tone: 'slate',
        iconName: 'leaf',
      },
    ],
  },
  bitfield: {
    number: '04',
    eyebrow: '비트필드',
    title: '비트필드 시각화',
    rows: [
      { bits: '0000000000000010', lane: 'SyncLane', tone: 'emerald' },
      { bits: '0000000000100000', lane: 'DefaultLane', tone: 'cyan' },
      { bits: '0000001111100000', lane: 'TransitionLanes', tone: 'violet' },
    ],
    description: 'Lane은 하나의 이름표가 아니라, 비트 조합으로 작업 우선순위를 표현한다.',
  },
  checkpoint: {
    number: '05',
    eyebrow: '실제 코드와 연결',
    title: '실제 코드 체크포인트',
    info: {
      title: 'React 소스코드에서 직접 확인',
      filesLabel: '파일',
      file: 'packages/react-reconciler/src/ReactFiberLane.js',
      lookForLabel: '볼 것',
      lookFor: 'SyncLane, InputContinuousLane, DefaultLane, TransitionLanes',
      questionLabel: '학습 질문',
      question: 'React는 lane을 어떤 상수와 비트 조합으로 표현할까?',
      buttonLabel: 'GitHub 보기',
      buttonHref:
        'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberLane.js',
    },
    code: {
      fileName: 'ReactFiberLane.js',
      language: 'JavaScript',
      content: checkpointCode,
    },
  },
  propagation: {
    number: '06',
    eyebrow: '부모 전파',
    title: '왜 부모가 childLanes를 가질까?',
    steps: [
      {
        id: 'pending',
        number: '1',
        title: 'Button Fiber에 pending work',
        body: '자식 Fiber에서 처리되지 못한 우선순위 작업이 발생합니다.',
        tone: 'sky',
        iconName: 'pulse',
      },
      {
        id: 'reflect',
        number: '2',
        title: '부모 Main Fiber의 childLanes에 반영',
        body: '부모 Fiber가 자식 트리에 남은 작업을 자신의 childLanes에 요약합니다.',
        tone: 'violet',
        iconName: 'arrowUp',
      },
      {
        id: 'detect',
        number: '3',
        title: '더 위의 Page Fiber도 해당 subtree에 일이 있음을 인지',
        body: '위 단계로 계속 전파되어 루트까지 일관된 우선순위 정보가 유지됩니다.',
        tone: 'emerald',
        iconName: 'eye',
      },
    ],
    emphasis: '부모 레벨에서도 하위 트리의 미완료 작업을 빠르게 감지할 수 있다.',
  },
  quiz: {
    number: '07',
    eyebrow: '미니 퀴즈',
    title: '미니 퀴즈',
    questionLabel: '질문',
    answerLabel: '정답',
    cards: [
      {
        id: 'q1',
        question: '이 Fiber 자신에게 걸린 작업 우선순위는?',
        answer: 'lanes',
        tone: 'emerald',
      },
      {
        id: 'q2',
        question: '자식 트리 어딘가의 작업 우선순위는?',
        answer: 'childLanes',
        tone: 'violet',
      },
    ],
  },
  next: {
    number: '08',
    eyebrow: '다음으로 넘어가기',
    title: '다음으로 넘어가기',
    description:
      'Fiber가 우선순위 정보까지 품는다는 점을 봤다면, 이제 React가 왜 Fiber 트리를 두 벌로 관리하는지 살펴봅니다.',
    buttonLabel: '다음: current / workInProgress / alternate',
    buttonHref: '/current-wip-alternate',
  },
};

const en: FiberLanesContent = {
  hero: {
    badge: '01',
    pill: 'Core concept',
    title: {
      line1: 'A Fiber also carries',
      line2: 'work-priority information.',
    },
    emphasis: 'work-priority',
    description: 'Not every update has the same urgency. React records that urgency on lanes.',
    cardLabel: 'Fiber',
    fields: [
      { field: 'tag', value: 'FunctionComponent' },
      { field: 'key', value: 'null' },
      { field: 'type', value: 'App' },
      { field: 'return', value: '...' },
      { field: 'lanes', value: '0b000000001010000', highlight: 'lanes' },
      { field: 'childLanes', value: '0b000001111110000', highlight: 'childLanes' },
      { field: '...', value: '' },
    ],
    stackTitle: 'Priority (lanes)',
    items: [
      {
        id: 'sync',
        label: 'SyncLane',
        subtitle: 'highest urgency',
        tone: 'emerald',
        iconName: 'zap',
      },
      {
        id: 'inputContinuous',
        label: 'InputContinuousLane',
        subtitle: 'continuous input work',
        tone: 'sky',
        iconName: 'mouse',
      },
      {
        id: 'default',
        label: 'DefaultLane',
        subtitle: 'normal updates',
        tone: 'cyan',
        iconName: 'cube',
      },
      {
        id: 'transition',
        label: 'TransitionLanes',
        subtitle: 'deferrable transitions',
        tone: 'violet',
        iconName: 'clock',
      },
      {
        id: 'retry',
        label: 'RetryLanes',
        subtitle: 'retry work',
        tone: 'amber',
        iconName: 'refresh',
      },
      { id: 'idle', label: 'IdleLane', subtitle: 'low priority', tone: 'slate', iconName: 'leaf' },
    ],
  },
  comparison: {
    number: '02',
    eyebrow: 'Compare both',
    title: 'lanes vs childLanes',
    vs: 'VS',
    lanesCard: {
      title: 'lanes',
      description: 'work priority remaining on this Fiber itself',
    },
    childLanesCard: {
      title: 'childLanes',
      description: 'work priority remaining somewhere in the subtree',
    },
    parentTitle: 'Parent Fiber (Page)',
    parentLanes: '0b0000000000000000',
    parentChildLanes: '0b0000000111110000',
    children: [
      { id: 'Header', label: 'Header Fiber', lanes: '0', childLanes: '0' },
      {
        id: 'Main',
        label: 'Main Fiber',
        lanes: '0',
        childLanes: '0b0000010000000000',
        hasChildWork: true,
      },
      {
        id: 'Button',
        label: 'Button Fiber',
        lanes: '0b0000001000000000',
        childLanes: '0',
        hasWork: true,
      },
      {
        id: 'List',
        label: 'List Fiber',
        lanes: '0',
        childLanes: '0b0000001111110000',
        hasChildWork: true,
      },
      { id: 'Footer', label: 'Footer Fiber', lanes: '0', childLanes: '0' },
    ],
    legend: {
      solid: 'solid → Fiber tree relationship',
      dashed: 'dashed → childLanes summarises subtree work into the parent',
    },
  },
  laneCards: {
    number: '03',
    eyebrow: 'Representative lanes',
    title: 'Representative lane cards',
    cards: [
      {
        id: 'sync',
        label: 'SyncLane',
        subtitle: 'highly synchronous work',
        body: 'User input, flushSync, anything that must be processed immediately.',
        tone: 'emerald',
        iconName: 'zap',
      },
      {
        id: 'inputContinuous',
        label: 'InputContinuousLane',
        subtitle: 'continuous input work',
        body: 'Scroll, drag, mouse moves — work tied to continuous inputs.',
        tone: 'sky',
        iconName: 'mouse',
      },
      {
        id: 'default',
        label: 'DefaultLane',
        subtitle: 'normal updates',
        body: 'State updates, renders — the everyday priority level.',
        tone: 'cyan',
        iconName: 'cube',
      },
      {
        id: 'transition',
        label: 'TransitionLanes',
        subtitle: 'deferrable transitions',
        body: 'UI transitions, Suspense transitions — work that should not hurt UX.',
        tone: 'violet',
        iconName: 'clock',
      },
      {
        id: 'retry',
        label: 'RetryLanes',
        subtitle: 'retry work',
        body: 'Used when re-attempting work that temporarily failed.',
        tone: 'amber',
        iconName: 'refresh',
      },
      {
        id: 'idle',
        label: 'IdleLane',
        subtitle: 'low urgency work',
        body: 'Background work, prefetching, anything with low priority.',
        tone: 'slate',
        iconName: 'leaf',
      },
    ],
  },
  bitfield: {
    number: '04',
    eyebrow: 'Bitfield',
    title: 'Bitfield visualisation',
    rows: [
      { bits: '0000000000000010', lane: 'SyncLane', tone: 'emerald' },
      { bits: '0000000000100000', lane: 'DefaultLane', tone: 'cyan' },
      { bits: '0000001111100000', lane: 'TransitionLanes', tone: 'violet' },
    ],
    description: 'A lane is not a single label — it is a bit pattern that encodes priority.',
  },
  checkpoint: {
    number: '05',
    eyebrow: 'Connect to real source',
    title: 'Source code checkpoint',
    info: {
      title: 'Verify in the React source',
      filesLabel: 'File',
      file: 'packages/react-reconciler/src/ReactFiberLane.js',
      lookForLabel: 'Look for',
      lookFor: 'SyncLane, InputContinuousLane, DefaultLane, TransitionLanes',
      questionLabel: 'Learning question',
      question: 'Which constants and bit patterns does React use to express lanes?',
      buttonLabel: 'View on GitHub',
      buttonHref:
        'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberLane.js',
    },
    code: {
      fileName: 'ReactFiberLane.js',
      language: 'JavaScript',
      content: checkpointCodeEn,
    },
  },
  propagation: {
    number: '06',
    eyebrow: 'Parent propagation',
    title: 'Why does the parent need childLanes?',
    steps: [
      {
        id: 'pending',
        number: '1',
        title: 'Pending work on Button Fiber',
        body: 'Priority work that was not yet processed appears on a child Fiber.',
        tone: 'sky',
        iconName: 'pulse',
      },
      {
        id: 'reflect',
        number: '2',
        title: 'Reflected in Main Fiber’s childLanes',
        body: 'The parent Fiber summarises the remaining subtree work into its own childLanes.',
        tone: 'violet',
        iconName: 'arrowUp',
      },
      {
        id: 'detect',
        number: '3',
        title: 'Page Fiber also detects subtree work',
        body: 'The summary keeps propagating up, so even the root knows about pending work in the subtree.',
        tone: 'emerald',
        iconName: 'eye',
      },
    ],
    emphasis: 'Parent levels can quickly detect unfinished work somewhere in the subtree.',
  },
  quiz: {
    number: '07',
    eyebrow: 'Mini quiz',
    title: 'Mini quiz',
    questionLabel: 'Question',
    answerLabel: 'Answer',
    cards: [
      {
        id: 'q1',
        question: 'Which field holds work priority for this Fiber itself?',
        answer: 'lanes',
        tone: 'emerald',
      },
      {
        id: 'q2',
        question: 'Which field holds work priority for somewhere in the subtree?',
        answer: 'childLanes',
        tone: 'violet',
      },
    ],
  },
  next: {
    number: '08',
    eyebrow: 'Up next',
    title: 'Up next',
    description:
      'Now that you have seen how a Fiber carries priority, look at why React maintains the Fiber tree in two copies.',
    buttonLabel: 'Next: current / workInProgress / alternate',
    buttonHref: '/current-wip-alternate',
  },
};

export const fiberLanesContent: Record<Locale, FiberLanesContent> = { ko, en };

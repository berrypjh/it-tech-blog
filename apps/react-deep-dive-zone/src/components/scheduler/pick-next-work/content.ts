import type { Locale } from '@it-tech-blog/preferences';

export type SchedulerAccent = 'blue' | 'teal' | 'violet' | 'slate';

export type ConceptCard = { title: string; description: string; accent: SchedulerAccent };

export type HeroLanePill = { label: string; accent: SchedulerAccent };

export type PendingLaneRow = {
  name: string;
  description: string;
  urgency: string;
  bitIndex: number;
  accent: SchedulerAccent;
};

export type FlowStep = {
  title: string;
  description: string;
  isCode?: boolean;
  accent: SchedulerAccent;
};

export type ConsiderationCard = { name: string; description: string; accent: SchedulerAccent };

export type ExecutionFlowStep = { label: string; isCode?: boolean };

export type LabLane = {
  key: 'sync' | 'transition' | 'retry' | 'idle';
  label: string;
  bitIndex: number;
  priority: number; // lower number = higher priority
  accent: SchedulerAccent;
};

export type MissionCard = { title: string; description: string; accent: SchedulerAccent };

export type TakeawayCard = {
  number: string;
  title: string;
  description: string;
  accent: SchedulerAccent;
};

export type RootSchedulerContent = {
  hero: {
    badge: string;
    titleLines: [string, string, string];
    highlight: string;
    subtitle: string;
    step1: { title: string; body: string; lanes: HeroLanePill[] };
    step2: { title: string; body: string; selected: string; footer: string };
    step3: { title: string; body: string; paths: { label: string; accent: 'blue' | 'teal' }[] };
  };
  question: {
    eyebrow: string;
    question: string;
    cards: ConceptCard[];
  };
  multiple: {
    number: string;
    title: string;
    cardTitle: string;
    bitmaskLabel: string;
    bitmask: string;
    rows: PendingLaneRow[];
  };
  ensure: {
    number: string;
    title: string;
    flowTitle: string;
    flowSteps: { title: string; description: string }[];
    microTitle: string;
    microSteps: ExecutionFlowStep[];
  };
  microReason: {
    number: string;
    title: string;
    description: string;
    timeline: { label: string; phase: 'current' | 'next' }[];
    captionCurrent: string;
    captionNext: string;
  };
  scheduleTask: {
    number: string;
    title: string;
    steps: FlowStep[];
  };
  getNext: {
    number: string;
    title: string;
    description: string;
    cards: ConsiderationCard[];
    coreNote: string;
  };
  syncAsync: {
    number: string;
    title: string;
    branchQuestion: string;
    sync: {
      title: string;
      subtitle: string;
      description: string;
      flow: ExecutionFlowStep[];
    };
    async: {
      title: string;
      subtitle: string;
      description: string;
      flow: ExecutionFlowStep[];
    };
  };
  code: {
    number: string;
    title: string;
    cardA: { title: string; fileLabel: string; code: string };
    cardB: { title: string; fileLabel: string; code: string };
    explanationTitle: string;
    explanation: string[];
    button: { label: string; href: string };
  };
  lab: {
    number: string;
    title: string;
    leftTitle: string;
    centerTitle: string;
    rightTitle: string;
    lanes: LabLane[];
    syncRemoveLabel: string;
    resetLabel: string;
    defaultSelectedLabel: string;
    emptySelectedLabel: string;
    ruleTitle: string;
    rule: string;
    priorityOrder: string;
    binaryLabel: string;
    decimalLabel: string;
    syncRemovedHint: string;
  };
  mission: {
    number: string;
    title: string;
    cards: MissionCard[];
  };
  takeaways: {
    number: string;
    title: string;
    cards: TakeawayCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const REACT_FIBER_ROOT_SCHEDULER_URL =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberRootScheduler.js';

const CODE_A_KO = `const lanes = getNextLanes(
  root,
  root === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes,
  rootHasPendingCommit,
);

return lanes;`;

const CODE_B_KO = `if (includesSyncLane(nextLanes)) {
  root.callbackPriority = SyncLane;
  root.callbackNode = null;

  // sync는 Scheduler task 없이 즉시 flush
  return SyncLane;
}`;

const CODE_B_EN = `if (includesSyncLane(nextLanes)) {
  root.callbackPriority = SyncLane;
  root.callbackNode = null;

  // sync flushes immediately without a Scheduler task
  return SyncLane;
}`;

const ko: RootSchedulerContent = {
  hero: {
    badge: 'Scheduler · 7/10단계',
    titleLines: ['React는', 'pending work를 전부', '한 번에 실행하지 않는다'],
    highlight: '한 번에 실행하지 않는다',
    subtitle: 'Root Scheduler는 지금 처리해야 할 nextLanes를 고르고 실행 경로를 결정합니다.',
    step1: {
      title: 'root.pendingLanes',
      body: '여러 lane이 쌓여 있음',
      lanes: [
        { label: 'SyncLane', accent: 'blue' },
        { label: 'TransitionLane', accent: 'teal' },
        { label: 'RetryLane', accent: 'violet' },
        { label: '...', accent: 'slate' },
      ],
    },
    step2: {
      title: '선택된 nextLanes',
      body: '지금 처리할 lane',
      selected: 'SyncLane',
      footer: '가장 높은 우선순위 선택',
    },
    step3: {
      title: '실행 경로 결정',
      body: 'Sync? Async?',
      paths: [
        { label: 'Sync → 즉시 flush', accent: 'blue' },
        { label: 'Async → Scheduler 등록', accent: 'teal' },
      ],
    },
  },
  question: {
    eyebrow: '오늘의 질문',
    question:
      'root에 Sync, Transition, Retry lane이 함께 있다면 React는 어떤 lane을 먼저 렌더링할까?',
    cards: [
      { title: '우선순위 결정 로직', description: 'getNextLanes 이해', accent: 'blue' },
      { title: '실행 경로 분기', description: 'sync / async 차이', accent: 'teal' },
      { title: '스케줄링 연결 구조', description: 'Scheduler 패키지와 연결', accent: 'violet' },
    ],
  },
  multiple: {
    number: '1',
    title: 'root에 여러 pendingLanes가 있을 때',
    cardTitle: 'root.pendingLanes 예시',
    bitmaskLabel: 'Bitmask',
    bitmask: '0000000000000000000000000111010',
    rows: [
      {
        name: 'SyncLane',
        description: '가장 높은 우선순위',
        urgency: '최우선',
        bitIndex: 1,
        accent: 'blue',
      },
      {
        name: 'TransitionLane',
        description: '낮은 우선순위 그룹',
        urgency: '낮음',
        bitIndex: 8,
        accent: 'teal',
      },
      {
        name: 'RetryLane',
        description: '재시도 관련 작업',
        urgency: '보통',
        bitIndex: 5,
        accent: 'violet',
      },
    ],
  },
  ensure: {
    number: '2',
    title: 'ensureRootIsScheduled 역할',
    flowTitle: '역할 3단계',
    flowSteps: [
      { title: 'root에 pending work 표시됨', description: 'root.pendingLanes 변경' },
      { title: 'root를 schedule에 올린다', description: '아직 등록되지 않았다면 추가' },
      { title: 'schedule processing을 보장한다', description: '곧 실행될 microtask를 예약' },
    ],
    microTitle: '마이크로태스크 예약 흐름',
    microSteps: [
      { label: '이벤트 핸들러 실행 중' },
      { label: 'queueMicrotask(...)', isCode: true },
      { label: '현재 턴 종료 후' },
      { label: '마이크로태스크 실행' },
    ],
  },
  microReason: {
    number: '3',
    title: 'microtask로 넘기는 이유',
    description:
      '업데이트가 발생한 즉시 모든 root 작업을 확정하지 않고, 현재 이벤트 루프 턴 안의 다른 업데이트까지 모은 뒤 한 번에 실행 대상을 정합니다.',
    timeline: [
      { label: '이벤트 시작', phase: 'current' },
      { label: '여러 setState 발생', phase: 'current' },
      { label: '이벤트 종료', phase: 'current' },
      { label: '마이크로태스크 실행', phase: 'next' },
      { label: '작업 실행 시작', phase: 'next' },
    ],
    captionCurrent: '현재 이벤트 루프 턴',
    captionNext: '다음 턴',
  },
  scheduleTask: {
    number: '4',
    title: 'scheduleTaskForRootDuringMicrotask 흐름',
    steps: [
      { title: 'root 확인', description: '아직 유효한 root인가?', accent: 'blue' },
      {
        title: 'next lanes 계산',
        description: 'getNextLanes(...)',
        isCode: true,
        accent: 'teal',
      },
      {
        title: 'callback priority 결정',
        description: 'sync? async?',
        accent: 'violet',
      },
      {
        title: '필요 시 task 등록',
        description: 'Scheduler callback',
        accent: 'blue',
      },
    ],
  },
  getNext: {
    number: '5',
    title: 'getNextLanes 핵심',
    description: 'getNextLanes는 root.pendingLanes 중 지금 처리해야 할 lanes를 고릅니다.',
    cards: [
      { name: 'pendingLanes', description: '현재 pending된 모든 lanes', accent: 'blue' },
      { name: 'suspendedLanes', description: 'suspended된 lanes', accent: 'violet' },
      { name: 'pingedLanes', description: '다시 ping된 lanes', accent: 'teal' },
      {
        name: 'workInProgressRootRenderLanes',
        description: '현재 진행 중인 render lanes',
        accent: 'blue',
      },
    ],
    coreNote: '여러 요소를 종합해 "지금 가장 먼저 진행해야 할 lanes"를 선택합니다.',
  },
  syncAsync: {
    number: '6',
    title: 'sync lane vs async lane 실행 경로',
    branchQuestion: 'includesSyncLane(nextLanes)?',
    sync: {
      title: 'Sync Lane',
      subtitle: '예: SyncLane',
      description: '별도 Scheduler task 없이 빠른 flush 경로로 실행',
      flow: [
        { label: 'sync lane 감지' },
        { label: 'Sync flush' },
        { label: 'performSyncWorkOnRoot', isCode: true },
        { label: '즉시 렌더 시작' },
      ],
    },
    async: {
      title: 'Async Lane',
      subtitle: '예: TransitionLane, RetryLane',
      description: 'Scheduler callback을 등록해 나중에 작업 실행',
      flow: [
        { label: 'callback priority 결정' },
        { label: 'Scheduler.scheduleCallback', isCode: true },
        { label: '나중에 렌더 시작' },
      ],
    },
  },
  code: {
    number: '7',
    title: '실제 코드 미리보기',
    cardA: {
      title: 'getNextLanes 호출',
      fileLabel: 'ReactFiberRootScheduler.js',
      code: CODE_A_KO,
    },
    cardB: {
      title: 'sync lane 분기',
      fileLabel: 'ReactFiberRootScheduler.js',
      code: CODE_B_KO,
    },
    explanationTitle: '설명',
    explanation: [
      'getNextLanes가 다음에 처리할 lanes를 계산합니다.',
      '그 결과에 어떤 sync lane이 섞여 있는지 확인합니다.',
      'sync면 즉시 flush, async면 Scheduler callback을 등록합니다.',
    ],
    button: { label: 'GitHub에서 코드 보기', href: REACT_FIBER_ROOT_SCHEDULER_URL },
  },
  lab: {
    number: '8',
    title: 'nextLanes 선택 실험기',
    leftTitle: 'pendingLanes',
    centerTitle: '현재 pendingLanes 비트마스크',
    rightTitle: '선택된 nextLanes',
    lanes: [
      { key: 'sync', label: 'SyncLane', bitIndex: 1, priority: 0, accent: 'blue' },
      { key: 'transition', label: 'TransitionLane', bitIndex: 8, priority: 2, accent: 'teal' },
      { key: 'retry', label: 'RetryLane', bitIndex: 12, priority: 3, accent: 'violet' },
      { key: 'idle', label: 'Idle / OffscreenLane', bitIndex: 18, priority: 4, accent: 'slate' },
    ],
    syncRemoveLabel: 'SyncLane 제거',
    resetLabel: '초기화',
    defaultSelectedLabel: 'SyncLane (기본 선택)',
    emptySelectedLabel: '선택된 nextLanes 없음',
    ruleTitle: '선택 기준',
    rule: 'Sync가 있으면 Sync를 먼저 선택하고, Sync가 없으면 Transition/Retry 등 다음 우선순위 lane을 선택합니다.',
    priorityOrder: 'Sync > Input/Discrete > Default > Transition > Retry/Idle',
    binaryLabel: '현재값 (이진)',
    decimalLabel: '현재값 (10진)',
    syncRemovedHint: 'SyncLane 제거 토글이 켜져 있어 Sync는 후보에서 제외됩니다.',
  },
  mission: {
    number: '9',
    title: '직접 코드에서 따라가 보기',
    cards: [
      {
        title: 'ensureRootIsScheduled 찾는다',
        description: 'root에 pending work가 생기면 이 함수가 호출되는지 확인합니다.',
        accent: 'blue',
      },
      {
        title: 'scheduleTaskForRootDuringMicrotask를 찾는다',
        description: '마이크로태스크에서 실행 대상 결정하는 흐름을 이해합니다.',
        accent: 'teal',
      },
      {
        title: 'getNextLanes 호출을 확인한다',
        description: '어떤 인자로 호출되는지, 무엇을 기준으로 선택하는지 봅니다.',
        accent: 'violet',
      },
      {
        title: 'sync lane 분기와 callback 등록 분기를 비교한다',
        description: '실제 실행 경로가 어떻게 갈리는지 코드로 추적합니다.',
        accent: 'blue',
      },
    ],
  },
  takeaways: {
    number: '10',
    title: '핵심 정리',
    cards: [
      {
        number: '01',
        title: 'Root Scheduler는 모든 pending work를 그대로 실행하지 않는다.',
        description: 'getNextLanes가 지금 처리할 작업만 선택합니다.',
        accent: 'blue',
      },
      {
        number: '02',
        title: 'getNextLanes가 지금 처리할 lanes를 고른다.',
        description: 'pending, suspended, pinged 등 여러 요소를 종합해 결정합니다.',
        accent: 'teal',
      },
      {
        number: '03',
        title: 'sync와 async는 실행 경로가 갈린다.',
        description: 'sync는 즉시 flush, async는 Scheduler callback을 통해 나중에 실행됩니다.',
        accent: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Scheduler 패키지는 무엇을 맡을까?',
    description: 'Scheduler 패키지가 host task를 어떻게 실행하는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/host-task-runner',
  },
};

const en: RootSchedulerContent = {
  hero: {
    badge: 'Scheduler · 7/10',
    titleLines: ['React does not run', 'every pending work', 'all at once'],
    highlight: 'all at once',
    subtitle: 'Root Scheduler picks the nextLanes to run now and decides the execution path.',
    step1: {
      title: 'root.pendingLanes',
      body: 'Several lanes accumulated',
      lanes: [
        { label: 'SyncLane', accent: 'blue' },
        { label: 'TransitionLane', accent: 'teal' },
        { label: 'RetryLane', accent: 'violet' },
        { label: '...', accent: 'slate' },
      ],
    },
    step2: {
      title: 'Selected nextLanes',
      body: 'Lanes to run now',
      selected: 'SyncLane',
      footer: 'Highest priority chosen',
    },
    step3: {
      title: 'Pick execution path',
      body: 'Sync? Async?',
      paths: [
        { label: 'Sync → flush immediately', accent: 'blue' },
        { label: 'Async → register with Scheduler', accent: 'teal' },
      ],
    },
  },
  question: {
    eyebrow: "Today's question",
    question:
      'When Sync, Transition, and Retry lanes all sit on the root, which lane does React render first?',
    cards: [
      { title: 'Priority decision logic', description: 'Understand getNextLanes', accent: 'blue' },
      { title: 'Execution path branch', description: 'sync vs async', accent: 'teal' },
      {
        title: 'Scheduling wiring',
        description: 'Connects to the Scheduler package',
        accent: 'violet',
      },
    ],
  },
  multiple: {
    number: '1',
    title: 'When the root has multiple pendingLanes',
    cardTitle: 'root.pendingLanes example',
    bitmaskLabel: 'Bitmask',
    bitmask: '0000000000000000000000000111010',
    rows: [
      {
        name: 'SyncLane',
        description: 'Highest priority',
        urgency: 'Top',
        bitIndex: 1,
        accent: 'blue',
      },
      {
        name: 'TransitionLane',
        description: 'Low priority group',
        urgency: 'Low',
        bitIndex: 8,
        accent: 'teal',
      },
      {
        name: 'RetryLane',
        description: 'Retry-related work',
        urgency: 'Mid',
        bitIndex: 5,
        accent: 'violet',
      },
    ],
  },
  ensure: {
    number: '2',
    title: 'Role of ensureRootIsScheduled',
    flowTitle: '3-step role',
    flowSteps: [
      { title: 'Pending work marked on the root', description: 'root.pendingLanes changed' },
      { title: 'Put the root into the schedule', description: 'Add it if not already' },
      {
        title: 'Guarantee schedule processing',
        description: 'Queue a microtask to run soon',
      },
    ],
    microTitle: 'Microtask scheduling flow',
    microSteps: [
      { label: 'Event handler running' },
      { label: 'queueMicrotask(...)', isCode: true },
      { label: 'After the current turn' },
      { label: 'Microtask runs' },
    ],
  },
  microReason: {
    number: '3',
    title: 'Why hand it off to a microtask',
    description:
      'Instead of finalizing every root job the moment an update happens, React waits to collect all other updates in the same event-loop turn, then decides what to run.',
    timeline: [
      { label: 'Event start', phase: 'current' },
      { label: 'Multiple setState calls', phase: 'current' },
      { label: 'Event end', phase: 'current' },
      { label: 'Microtask runs', phase: 'next' },
      { label: 'Work execution begins', phase: 'next' },
    ],
    captionCurrent: 'Current event-loop turn',
    captionNext: 'Next turn',
  },
  scheduleTask: {
    number: '4',
    title: 'scheduleTaskForRootDuringMicrotask flow',
    steps: [
      { title: 'Check root', description: 'Is this root still valid?', accent: 'blue' },
      {
        title: 'Compute next lanes',
        description: 'getNextLanes(...)',
        isCode: true,
        accent: 'teal',
      },
      {
        title: 'Pick callback priority',
        description: 'sync? async?',
        accent: 'violet',
      },
      {
        title: 'Register a task if needed',
        description: 'Scheduler callback',
        accent: 'blue',
      },
    ],
  },
  getNext: {
    number: '5',
    title: 'Inside getNextLanes',
    description: 'getNextLanes selects, from root.pendingLanes, the lanes to handle right now.',
    cards: [
      { name: 'pendingLanes', description: 'All currently pending lanes', accent: 'blue' },
      { name: 'suspendedLanes', description: 'Lanes that are suspended', accent: 'violet' },
      { name: 'pingedLanes', description: 'Lanes that got pinged again', accent: 'teal' },
      {
        name: 'workInProgressRootRenderLanes',
        description: 'Lanes currently being rendered',
        accent: 'blue',
      },
    ],
    coreNote: 'It combines many signals to pick "the lanes to run next".',
  },
  syncAsync: {
    number: '6',
    title: 'Sync lane vs Async lane execution path',
    branchQuestion: 'includesSyncLane(nextLanes)?',
    sync: {
      title: 'Sync Lane',
      subtitle: 'e.g. SyncLane',
      description: 'Flushed immediately on a fast path, without a Scheduler task',
      flow: [
        { label: 'Detect sync lane' },
        { label: 'Sync flush' },
        { label: 'performSyncWorkOnRoot', isCode: true },
        { label: 'Render starts immediately' },
      ],
    },
    async: {
      title: 'Async Lane',
      subtitle: 'e.g. TransitionLane, RetryLane',
      description: 'Registers a Scheduler callback to run the work later',
      flow: [
        { label: 'Pick callback priority' },
        { label: 'Scheduler.scheduleCallback', isCode: true },
        { label: 'Render starts later' },
      ],
    },
  },
  code: {
    number: '7',
    title: 'Source code preview',
    cardA: {
      title: 'getNextLanes call',
      fileLabel: 'ReactFiberRootScheduler.js',
      code: CODE_A_KO,
    },
    cardB: {
      title: 'sync lane branch',
      fileLabel: 'ReactFiberRootScheduler.js',
      code: CODE_B_EN,
    },
    explanationTitle: 'Explanation',
    explanation: [
      'getNextLanes computes the lanes to handle next.',
      'It then checks whether any sync lane is mixed in.',
      'Sync → flush right away; async → register a Scheduler callback.',
    ],
    button: { label: 'See the code on GitHub', href: REACT_FIBER_ROOT_SCHEDULER_URL },
  },
  lab: {
    number: '8',
    title: 'nextLanes selection lab',
    leftTitle: 'pendingLanes',
    centerTitle: 'Current pendingLanes bitmask',
    rightTitle: 'Selected nextLanes',
    lanes: [
      { key: 'sync', label: 'SyncLane', bitIndex: 1, priority: 0, accent: 'blue' },
      { key: 'transition', label: 'TransitionLane', bitIndex: 8, priority: 2, accent: 'teal' },
      { key: 'retry', label: 'RetryLane', bitIndex: 12, priority: 3, accent: 'violet' },
      { key: 'idle', label: 'Idle / OffscreenLane', bitIndex: 18, priority: 4, accent: 'slate' },
    ],
    syncRemoveLabel: 'Exclude SyncLane',
    resetLabel: 'Reset',
    defaultSelectedLabel: 'SyncLane (default selection)',
    emptySelectedLabel: 'No selected nextLanes',
    ruleTitle: 'Selection rule',
    rule: 'If Sync is present it is picked first; otherwise the next-priority lane (Transition / Retry / Idle) is selected.',
    priorityOrder: 'Sync > Input/Discrete > Default > Transition > Retry/Idle',
    binaryLabel: 'Current value (binary)',
    decimalLabel: 'Current value (decimal)',
    syncRemovedHint: 'The "Exclude SyncLane" toggle is on, so Sync is removed from candidates.',
  },
  mission: {
    number: '9',
    title: 'Walk it in the source',
    cards: [
      {
        title: 'Find ensureRootIsScheduled',
        description: 'Confirm this function is called when pending work appears on the root.',
        accent: 'blue',
      },
      {
        title: 'Find scheduleTaskForRootDuringMicrotask',
        description: 'Understand how execution targets are decided inside the microtask.',
        accent: 'teal',
      },
      {
        title: 'Check the getNextLanes call',
        description: 'See the arguments and what it bases its choice on.',
        accent: 'violet',
      },
      {
        title: 'Compare the sync branch vs the callback branch',
        description: 'Trace in code how the actual execution paths diverge.',
        accent: 'blue',
      },
    ],
  },
  takeaways: {
    number: '10',
    title: 'Key takeaways',
    cards: [
      {
        number: '01',
        title: 'Root Scheduler does not run all pending work as-is.',
        description: 'getNextLanes picks only the lanes to run right now.',
        accent: 'blue',
      },
      {
        number: '02',
        title: 'getNextLanes chooses the lanes to handle now.',
        description: 'It blends pending, suspended, pinged and more to decide.',
        accent: 'teal',
      },
      {
        number: '03',
        title: 'Sync and async take different execution paths.',
        description: 'Sync flushes immediately; async runs later via a Scheduler callback.',
        accent: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'what does the Scheduler package own?',
    description: 'See how the Scheduler package actually runs host tasks.',
    cta: 'Go to the next page',
    href: '/host-task-runner',
  },
};

export const rootSchedulerContent: Record<Locale, RootSchedulerContent> = { ko, en };

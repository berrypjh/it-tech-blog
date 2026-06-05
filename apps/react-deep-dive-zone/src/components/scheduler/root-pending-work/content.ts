import type { Locale } from '@it-tech-blog/preferences';

export type RootAccent = 'blue' | 'teal' | 'violet';

export type HeroStep = {
  title: string;
  content: string[];
  footer: string;
  accent: RootAccent;
};

export type ConceptCard = { title: string; description: string; accent: RootAccent };

export type FiberNode = {
  label: string;
  level: number;
  emphasis?: boolean;
};

export type DestinationStep = { title: string };

export type FlowStep = {
  title: string;
  description: string;
  isCode?: boolean;
  accent: RootAccent;
};

export type MarkRootStep = {
  title: string;
  code: string;
  description?: string;
  accent: RootAccent;
};

export type PendingLanesChangeCard = {
  title: string;
  bits: string; // 16-char string of '0'/'1'
  description: string;
  state: 'before' | 'transition' | 'sync-transition';
};

export type EnsureStep = {
  title: string;
  body: string[];
  accent: RootAccent;
};

export type SimulatorLane = {
  key: 'sync' | 'transition' | 'retry';
  label: string;
  buttonLabel: string;
  /** bit index from the right (bit 0 = rightmost) */
  bitIndex: number;
  accent: RootAccent;
};

export type MissionCard = { title: string; description: string; accent: RootAccent };

export type TakeawayCard = {
  number: string;
  title: string;
  description: string;
  accent: RootAccent;
};

export type RootPendingWorkContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    highlight: string;
    subtitle: string;
    steps: HeroStep[];
  };
  question: {
    eyebrow: string;
    question: string;
    cards: ConceptCard[];
  };
  destination: {
    number: string;
    title: string;
    fiberTreeTitle: string;
    fiberNodes: FiberNode[];
    steps: DestinationStep[];
    rootObjectTitle: string;
    rootObjectCode: string;
  };
  scheduleFlow: {
    number: string;
    title: string;
    steps: FlowStep[];
  };
  markRoot: {
    number: string;
    title: string;
    description: string;
    steps: MarkRootStep[];
  };
  pendingLanesChange: {
    number: string;
    title: string;
    cards: PendingLanesChangeCard[];
    note: string;
  };
  suspended: {
    number: string;
    title: string;
    description: string;
    leftTitle: string;
    leftFlow: string;
    middleTitle: string;
    rightTitle: string;
    rightFlow: string;
    corePointTitle: string;
    corePointBody: string;
  };
  ensure: {
    number: string;
    title: string;
    steps: EnsureStep[];
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
  simulator: {
    number: string;
    title: string;
    actionTitle: string;
    resetLabel: string;
    lanes: SimulatorLane[];
    bitmaskTitle: string;
    bitmaskSubtitle: string;
    binaryLabel: string;
    decimalLabel: string;
    statusTitle: string;
    emptyStatus: string;
    activeStatus: string;
    description: string;
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
  cta: {
    eyebrow: string;
    label: string;
    nextTitle: string;
    href: string;
    hint: string;
  };
};

const REACT_FIBER_WORK_LOOP_URL =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js';

const ROOT_OBJECT_CODE = `FiberRoot {
  tag: ConcurrentRoot,
  containerInfo: DOMNode,
  current: Fiber,
  pendingLanes: 0b0000000000000000,
  suspendedLanes: 0b0000000000000000,
  ...
}`;

const CODE_A = `// 1) root에 이 lane의 작업이 있음을 기록
markRootUpdated(root, lane);

// 2) root scheduling 단계로 진행
ensureRootIsScheduled(root);`;

const CODE_A_EN = `// 1) Record that this lane has pending work on the root
markRootUpdated(root, lane);

// 2) Move to the root scheduling step
ensureRootIsScheduled(root);`;

const CODE_B = `function markRootUpdated(root, updateLane) {
  // 기존 pendingLanes와 새 lane을 OR 연산으로 합침
  root.pendingLanes |= updateLane;

  // 이 높은 우선순위 lane이 들어왔을 때
  // suspended lanes / entangled lanes 등 관리 로직
  // ...
}`;

const CODE_B_EN = `function markRootUpdated(root, updateLane) {
  // OR the new lane into the existing pendingLanes
  root.pendingLanes |= updateLane;

  // When a higher-priority lane arrives, manage
  // suspended lanes / entangled lanes, etc.
  // ...
}`;

const ko: RootPendingWorkContent = {
  hero: {
    badge: 'Scheduler · 6/10단계',
    titleLines: ['Lane을 받았다고', '바로 렌더링이 시작되지는 않는다'],
    highlight: '바로 렌더링이 시작되지는 않는다',
    subtitle: '먼저 root가 처리해야 할 작업이 있다는 사실을 기록합니다.',
    steps: [
      {
        title: 'Fiber 업데이트 발생',
        content: ['<Button />', 'setState()'],
        footer: 'lane 할당 완료',
        accent: 'blue',
      },
      {
        title: 'Root (FiberRoot)',
        content: ['root.pendingLanes', '에 기록'],
        footer: '여기에 작업이 쌓인다',
        accent: 'teal',
      },
      {
        title: 'Root Scheduler',
        content: ['언제, 어떤 순서로', '이 작업을 실행할지 결정'],
        footer: '다음 페이지로 이어짐',
        accent: 'violet',
      },
    ],
  },
  question: {
    eyebrow: '오늘의 질문',
    question: 'requestUpdateLane 다음, React는 이 작업을 어디에 기록할까?',
    cards: [
      { title: '작업 기록 위치', description: 'root.pendingLanes', accent: 'blue' },
      { title: '여러 작업 누적', description: '비트마스크로 관리', accent: 'teal' },
      { title: '다음 단계 연결', description: 'Root Scheduler로 이동', accent: 'violet' },
    ],
  },
  destination: {
    number: '1',
    title: 'Lane을 받은 update의 다음 목적지',
    fiberTreeTitle: 'Fiber 트리 일부',
    fiberNodes: [
      { label: 'App', level: 0 },
      { label: 'List', level: 1 },
      { label: 'SearchBox', level: 1 },
      { label: 'Button', level: 2, emphasis: true },
      { label: 'setState()', level: 3, emphasis: true },
    ],
    steps: [
      { title: 'setState() 발생' },
      { title: 'update에 lane 할당' },
      { title: 'fiber에서 root로 올라감' },
      { title: 'root.pendingLanes에 반영' },
    ],
    rootObjectTitle: 'Root 객체',
    rootObjectCode: ROOT_OBJECT_CODE,
  },
  scheduleFlow: {
    number: '2',
    title: 'scheduleUpdateOnFiber 전체 흐름',
    steps: [
      {
        title: 'scheduleUpdateOnFiber(root, fiber, lane)',
        description: '새로운 update를 루트에 보고',
        isCode: true,
        accent: 'blue',
      },
      {
        title: 'suspended 상태 확인',
        description: '현재 진행 중 render와 충돌 여부 확인',
        accent: 'teal',
      },
      {
        title: 'markRootUpdated(root, lane)',
        description: 'root에 이 lane의 작업을 기록',
        isCode: true,
        accent: 'teal',
      },
      {
        title: 'ensureRootIsScheduled(root)',
        description: 'Root Scheduler 단계로 진행',
        isCode: true,
        accent: 'violet',
      },
    ],
  },
  markRoot: {
    number: '3',
    title: 'markRootUpdated(root, lane)',
    description: 'root에 이 lane의 작업이 pending 상태임을 기록합니다.',
    steps: [
      {
        title: '호출 시점',
        code: 'markRootUpdated(root, lane)',
        accent: 'blue',
      },
      {
        title: '기록되는 내용',
        code: 'root.pendingLanes |= lane;',
        description: '비트마스크 OR 연산으로 누적',
        accent: 'teal',
      },
      {
        title: 'Root 객체 변경 후',
        code: 'pendingLanes: 0b0000000000000010',
        accent: 'violet',
      },
    ],
  },
  pendingLanesChange: {
    number: '4',
    title: 'root.pendingLanes 변화',
    cards: [
      {
        title: 'Before (아무 작업 없음)',
        bits: '0000000000000000',
        description: '아직 처리해야 할 작업 없음',
        state: 'before',
      },
      {
        title: 'After: Transition update 추가',
        bits: '0000000100000000',
        description: 'TransitionLane 비트가 켜짐',
        state: 'transition',
      },
      {
        title: 'After: Sync + Transition 추가',
        bits: '0000000100000010',
        description: '여러 lane이 함께 누적됨',
        state: 'sync-transition',
      },
    ],
    note: '비트 OR로 누적되어 동시에 여러 종류의 작업이 표현됩니다.',
  },
  suspended: {
    number: '5',
    title: '이미 진행 중인 suspended render가 있다면?',
    description:
      'SuspendedOnData / SuspendedOnAction 상태일 때, 새로운 update가 들어오면 기존 render attempt를 깨고 fresh stack을 준비할 수 있습니다.',
    leftTitle: '기존 render 시도 (suspended)',
    leftFlow: '시작 → 작업 → 중단됨',
    middleTitle: '새 update 발생',
    rightTitle: '새 render 준비 (fresh stack)',
    rightFlow: '새 시작 → 작업 → ...',
    corePointTitle: '핵심 포인트',
    corePointBody:
      'suspended 상태는 때로 새로운 더 높은 우선순위의 작업이 들어오면 무시되고 새로 시작합니다.',
  },
  ensure: {
    number: '6',
    title: 'ensureRootIsScheduled로 연결',
    steps: [
      {
        title: 'root에 pending work 표시 완료',
        body: ['root.pendingLanes |= lane', '작업이 누적됨'],
        accent: 'blue',
      },
      {
        title: 'ensureRootIsScheduled(root)',
        body: ['이 root를 실제로 언제/어떻게 실행할지', 'Root Scheduler에게 점검'],
        accent: 'teal',
      },
      {
        title: '다음 단계 (다음 페이지)',
        body: ['Scheduler가 nextLanes를 계산하고', 'task를 등록하여 실행을 준비'],
        accent: 'violet',
      },
    ],
  },
  code: {
    number: '7',
    title: '실제 코드 미리보기',
    cardA: {
      title: 'scheduleUpdateOnFiber 내부: root에 lane 기록',
      fileLabel: 'ReactFiberWorkLoop.js',
      code: CODE_A,
    },
    cardB: {
      title: 'markRootUpdated: pendingLanes에 OR로 누적',
      fileLabel: 'ReactFiberLane.js',
      code: CODE_B,
    },
    explanationTitle: '설명',
    explanation: [
      '모든 update는 root의 pendingLanes에 비트로 누적됩니다.',
      '이후 ensureRootIsScheduled가 Root Scheduler에게 실행을 위임합니다.',
    ],
    button: { label: 'GitHub에서 코드 보기', href: REACT_FIBER_WORK_LOOP_URL },
  },
  simulator: {
    number: '8',
    title: 'pendingLanes 시뮬레이터',
    actionTitle: '작업 선택',
    resetLabel: '초기화',
    lanes: [
      {
        key: 'sync',
        label: 'SyncLane',
        buttonLabel: 'Sync update 추가',
        bitIndex: 1,
        accent: 'blue',
      },
      {
        key: 'transition',
        label: 'TransitionLane',
        buttonLabel: 'Transition update 추가',
        bitIndex: 8,
        accent: 'teal',
      },
      {
        key: 'retry',
        label: 'RetryLane',
        buttonLabel: 'Retry lane 추가',
        bitIndex: 12,
        accent: 'violet',
      },
    ],
    bitmaskTitle: 'root.pendingLanes 비트마스크',
    bitmaskSubtitle: '32비트 중 하위 16비트 표시',
    binaryLabel: '현재값 (이진)',
    decimalLabel: '현재값 (10진)',
    statusTitle: '작업 상태',
    emptyStatus: 'Pending work 없음',
    activeStatus: 'Pending work 있음',
    description: '여러 종류의 작업이 비트로 누적되며, 각 bit는 서로 다른 lane을 의미합니다.',
  },
  mission: {
    number: '9',
    title: '직접 코드에서 따라가 보기',
    cards: [
      {
        title: 'scheduleUpdateOnFiber 찾기',
        description: 'ReactFiberWorkLoop.js에서 scheduleUpdateOnFiber 함수를 찾습니다.',
        accent: 'blue',
      },
      {
        title: 'markRootUpdated 호출 찾기',
        description:
          'scheduleUpdateOnFiber 내부에서 markRootUpdated(root, lane)을 호출하는 지점을 확인합니다.',
        accent: 'teal',
      },
      {
        title: 'ensureRootIsScheduled 연결 확인',
        description:
          '그 다음 ensureRootIsScheduled(root)가 호출되어 Root Scheduler로 연결되는 흐름을 확인합니다.',
        accent: 'violet',
      },
      {
        title: 'root.pendingLanes 변화 이해',
        description:
          '왜 bitmask로 누적해야 하는지, 여러 lane이 동시에 pending될 수 있기 때문임을 정리합니다.',
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
        title: 'update는 root에 pending work로 표시된다.',
        description: 'markRootUpdated가 root.pendingLanes에 lane을 OR로 누적 기록합니다.',
        accent: 'blue',
      },
      {
        number: '02',
        title: 'markRootUpdated가 그 표시를 담당한다.',
        description: 'root의 상태에 이 lane의 작업이 있음을 비트마스크로 남깁니다.',
        accent: 'teal',
      },
      {
        number: '03',
        title: '이후 Root Scheduler가 실행 순서를 결정한다.',
        description: 'ensureRootIsScheduled가 호출되면서 다음 단계로 넘어갑니다.',
        accent: 'violet',
      },
    ],
  },
  cta: {
    eyebrow: '다음 페이지',
    label: '다음: Root Scheduler 보기',
    nextTitle: 'Root Scheduler는 무엇을 결정할까?',
    href: '/pick-next-work',
    hint: 'Enter 또는 클릭으로 다음 페이지로 이동',
  },
};

const en: RootPendingWorkContent = {
  hero: {
    badge: 'Scheduler · 6/10',
    titleLines: ['Getting a Lane', "doesn't start rendering right away"],
    highlight: "doesn't start rendering right away",
    subtitle: 'First the root records that there is work to do.',
    steps: [
      {
        title: 'Fiber update happens',
        content: ['<Button />', 'setState()'],
        footer: 'Lane assigned',
        accent: 'blue',
      },
      {
        title: 'Root (FiberRoot)',
        content: ['root.pendingLanes', 'gets the lane'],
        footer: 'Work accumulates here',
        accent: 'teal',
      },
      {
        title: 'Root Scheduler',
        content: ['Decides when and in what order', 'to actually run this work'],
        footer: 'Continues on the next page',
        accent: 'violet',
      },
    ],
  },
  question: {
    eyebrow: "Today's question",
    question: 'After requestUpdateLane, where does React record this work?',
    cards: [
      { title: 'Where the work is recorded', description: 'root.pendingLanes', accent: 'blue' },
      { title: 'Accumulating multiple works', description: 'Managed as a bitmask', accent: 'teal' },
      {
        title: 'Wiring to the next step',
        description: 'Moves to the Root Scheduler',
        accent: 'violet',
      },
    ],
  },
  destination: {
    number: '1',
    title: 'The next destination for a lane-assigned update',
    fiberTreeTitle: 'Fiber tree (excerpt)',
    fiberNodes: [
      { label: 'App', level: 0 },
      { label: 'List', level: 1 },
      { label: 'SearchBox', level: 1 },
      { label: 'Button', level: 2, emphasis: true },
      { label: 'setState()', level: 3, emphasis: true },
    ],
    steps: [
      { title: 'setState() is called' },
      { title: 'A lane is assigned to the update' },
      { title: 'Bubble up from the fiber to the root' },
      { title: 'Reflected in root.pendingLanes' },
    ],
    rootObjectTitle: 'Root object',
    rootObjectCode: ROOT_OBJECT_CODE,
  },
  scheduleFlow: {
    number: '2',
    title: 'Full flow of scheduleUpdateOnFiber',
    steps: [
      {
        title: 'scheduleUpdateOnFiber(root, fiber, lane)',
        description: 'Report the new update up to the root',
        isCode: true,
        accent: 'blue',
      },
      {
        title: 'Check suspended state',
        description: 'See if it conflicts with an in-flight render',
        accent: 'teal',
      },
      {
        title: 'markRootUpdated(root, lane)',
        description: 'Record that this lane has work on the root',
        isCode: true,
        accent: 'teal',
      },
      {
        title: 'ensureRootIsScheduled(root)',
        description: 'Hand off to the Root Scheduler step',
        isCode: true,
        accent: 'violet',
      },
    ],
  },
  markRoot: {
    number: '3',
    title: 'markRootUpdated(root, lane)',
    description: "Record that this lane's work is now pending on the root.",
    steps: [
      { title: 'Call site', code: 'markRootUpdated(root, lane)', accent: 'blue' },
      {
        title: 'What is recorded',
        code: 'root.pendingLanes |= lane;',
        description: 'Accumulated via bitmask OR',
        accent: 'teal',
      },
      {
        title: 'Root object after',
        code: 'pendingLanes: 0b0000000000000010',
        accent: 'violet',
      },
    ],
  },
  pendingLanesChange: {
    number: '4',
    title: 'How root.pendingLanes changes',
    cards: [
      {
        title: 'Before (no work yet)',
        bits: '0000000000000000',
        description: 'No work to process yet',
        state: 'before',
      },
      {
        title: 'After: Transition update added',
        bits: '0000000100000000',
        description: 'TransitionLane bit is on',
        state: 'transition',
      },
      {
        title: 'After: Sync + Transition added',
        bits: '0000000100000010',
        description: 'Multiple lanes accumulate together',
        state: 'sync-transition',
      },
    ],
    note: 'Bits accumulate via OR so several kinds of work can be expressed simultaneously.',
  },
  suspended: {
    number: '5',
    title: 'What if a render is already suspended?',
    description:
      'In SuspendedOnData / SuspendedOnAction state, a new incoming update can throw away the in-flight render attempt and prepare a fresh stack.',
    leftTitle: 'Existing render attempt (suspended)',
    leftFlow: 'start → work → stopped',
    middleTitle: 'New update arrives',
    rightTitle: 'Fresh stack render',
    rightFlow: 'new start → work → ...',
    corePointTitle: 'Key insight',
    corePointBody:
      'A suspended state can be discarded when a new, higher-priority update arrives — and rendering starts fresh.',
  },
  ensure: {
    number: '6',
    title: 'Wiring to ensureRootIsScheduled',
    steps: [
      {
        title: 'Pending work mark done on the root',
        body: ['root.pendingLanes |= lane', 'Work is now accumulated'],
        accent: 'blue',
      },
      {
        title: 'ensureRootIsScheduled(root)',
        body: ['Check with the Root Scheduler', 'when and how to actually run this root'],
        accent: 'teal',
      },
      {
        title: 'Next step (next page)',
        body: ['The Scheduler computes nextLanes', 'and registers a task to run'],
        accent: 'violet',
      },
    ],
  },
  code: {
    number: '7',
    title: 'Source code preview',
    cardA: {
      title: 'Inside scheduleUpdateOnFiber: record lane on root',
      fileLabel: 'ReactFiberWorkLoop.js',
      code: CODE_A_EN,
    },
    cardB: {
      title: 'markRootUpdated: OR-accumulate pendingLanes',
      fileLabel: 'ReactFiberLane.js',
      code: CODE_B_EN,
    },
    explanationTitle: 'Explanation',
    explanation: [
      'Every update accumulates as a bit in the root pendingLanes.',
      'Then ensureRootIsScheduled hands execution off to the Root Scheduler.',
    ],
    button: { label: 'See the code on GitHub', href: REACT_FIBER_WORK_LOOP_URL },
  },
  simulator: {
    number: '8',
    title: 'pendingLanes simulator',
    actionTitle: 'Pick work',
    resetLabel: 'Reset',
    lanes: [
      {
        key: 'sync',
        label: 'SyncLane',
        buttonLabel: 'Add Sync update',
        bitIndex: 1,
        accent: 'blue',
      },
      {
        key: 'transition',
        label: 'TransitionLane',
        buttonLabel: 'Add Transition update',
        bitIndex: 8,
        accent: 'teal',
      },
      {
        key: 'retry',
        label: 'RetryLane',
        buttonLabel: 'Add Retry lane',
        bitIndex: 12,
        accent: 'violet',
      },
    ],
    bitmaskTitle: 'root.pendingLanes bitmask',
    bitmaskSubtitle: 'Showing the low 16 bits of 32',
    binaryLabel: 'Current value (binary)',
    decimalLabel: 'Current value (decimal)',
    statusTitle: 'Work status',
    emptyStatus: 'No pending work',
    activeStatus: 'Pending work present',
    description: 'Each bit represents a different lane; multiple kinds of work accumulate as bits.',
  },
  mission: {
    number: '9',
    title: 'Walk it in the source',
    cards: [
      {
        title: 'Find scheduleUpdateOnFiber',
        description: 'Look up the scheduleUpdateOnFiber function in ReactFiberWorkLoop.js.',
        accent: 'blue',
      },
      {
        title: 'Find the markRootUpdated call',
        description: 'Find where scheduleUpdateOnFiber calls markRootUpdated(root, lane).',
        accent: 'teal',
      },
      {
        title: 'Check the ensureRootIsScheduled wiring',
        description:
          'Then see how ensureRootIsScheduled(root) is called and connects to the Root Scheduler.',
        accent: 'violet',
      },
      {
        title: 'Understand root.pendingLanes changes',
        description: 'Note why a bitmask is the right shape — many lanes can be pending at once.',
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
        title: 'Updates are marked as pending work on the root.',
        description: 'markRootUpdated OR-accumulates the lane into root.pendingLanes.',
        accent: 'blue',
      },
      {
        number: '02',
        title: 'markRootUpdated is what does that marking.',
        description: 'It records on the root that this lane has work, as a bitmask.',
        accent: 'teal',
      },
      {
        number: '03',
        title: 'Then the Root Scheduler decides the run order.',
        description: 'ensureRootIsScheduled is called and we move on to the next step.',
        accent: 'violet',
      },
    ],
  },
  cta: {
    eyebrow: 'Next page',
    label: 'Next: meet the Root Scheduler',
    nextTitle: 'What does the Root Scheduler decide?',
    href: '/pick-next-work',
    hint: 'Press Enter or click to continue',
  },
};

export const rootPendingWorkContent: Record<Locale, RootPendingWorkContent> = { ko, en };

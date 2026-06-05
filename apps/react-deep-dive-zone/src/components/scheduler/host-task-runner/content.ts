import type { Locale } from '@it-tech-blog/preferences';

export type PkgAccent = 'blue' | 'teal' | 'violet' | 'slate' | 'amber';

export type PriorityKey = 'immediate' | 'userBlocking' | 'normal' | 'low' | 'idle';

export type ConceptCard = { title: string; description: string; accent: PkgAccent };

export type ComparisonRow = {
  label: string;
  root: string;
  scheduler: string;
};

export type FlowStep = {
  title: string;
  description: string;
  isCode?: boolean;
  accent: PkgAccent;
};

export type PriorityCard = {
  key: PriorityKey;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  accent: PkgAccent;
  /** for the task-queue lab: bigger sortKey = lower priority */
  sortKey: number;
};

export type ConnectionCard = {
  number: string;
  title: string;
  subtitle: string;
  items: string[];
  accent: PkgAccent;
};

export type MissionCard = { title: string; description: string; accent: PkgAccent };

export type TakeawayCard = {
  number: string;
  title: string;
  description: string;
  accent: PkgAccent;
};

export type LabPriority = 'immediate' | 'normal' | 'low';

export type LabAction = {
  key: LabPriority;
  label: string;
  badge: string;
  accent: PkgAccent;
  sortKey: number;
};

export type SchedulerPackageContent = {
  hero: {
    badge: string;
    titleLines: [string, string, string];
    highlight: string;
    subtitle: string;
    leftCard: {
      title: string;
      subtitle: string;
      items: string[];
    };
    bridge: string;
    rightCard: {
      title: string;
      subtitle: string;
      items: string[];
    };
  };
  question: {
    eyebrow: string;
    question: string;
    cards: ConceptCard[];
  };
  comparison: {
    number: string;
    title: string;
    columns: { label: string; root: string; scheduler: string };
    rows: ComparisonRow[];
  };
  callbackMoment: {
    number: string;
    title: string;
    steps: FlowStep[];
    bottomNote: string;
  };
  taskQueue: {
    number: string;
    title: string;
    queueTitle: string;
    queueSubtitle: string;
    items: { label: string; accent: PkgAccent }[];
    currentQueueTitle: string;
    currentItems: { label: string; note: string; accent: PkgAccent }[];
  };
  priorities: {
    number: string;
    title: string;
    cards: PriorityCard[];
    directionStart: string;
    directionEnd: string;
  };
  internalFlow: {
    number: string;
    title: string;
    steps: FlowStep[];
  };
  reactToScheduler: {
    number: string;
    title: string;
    cards: ConnectionCard[];
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
    helper: string;
    actionTitle: string;
    actions: LabAction[];
    resetLabel: string;
    queueTitle: string;
    queueSubtitle: string;
    emptyQueueLabel: string;
    statusTitle: string;
    lengthLabel: string;
    nextLabel: string;
    pendingActive: string;
    pendingEmpty: string;
    sortRule: string;
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

const CODE_A = `return Scheduler_scheduleCallback(
  schedulerPriorityLevel,
  performWorkOnRootViaSchedulerTask.bind(null, root),
);`;

const CODE_B_KO = `function unstable_scheduleCallback(priorityLevel, callback, options) {
  const currentTime = getCurrentTime();

  // task 생성 및 queue 삽입
}`;

const CODE_B_EN = `function unstable_scheduleCallback(priorityLevel, callback, options) {
  const currentTime = getCurrentTime();

  // build the task and insert into the queue
}`;

const ko: SchedulerPackageContent = {
  hero: {
    badge: 'Scheduler · 8/10단계',
    titleLines: ['React의 Root Scheduler와', 'scheduler 패키지는', '같은 것이 아니다'],
    highlight: '같은 것이 아니다',
    subtitle:
      '하나는 어떤 React 작업을 실행할지 정하고, 다른 하나는 브라우저 메인 스레드에서 task 실행 시점을 조율합니다.',
    leftCard: {
      title: 'Root Scheduler',
      subtitle: 'React Fiber 내부',
      items: [
        'nextLanes 선택',
        '어떤 React work를 지금 처리할지 결정',
        'Scheduler에 작업 등록을 요청',
      ],
    },
    bridge: 'scheduleCallback(priorityLevel, callback)',
    rightCard: {
      title: 'Scheduler Package',
      subtitle: '별도 scheduler 패키지',
      items: [
        'host environment에서 task 실행 시점 조율',
        'priority에 따른 queue 관리',
        '브라우저 task로 실행',
      ],
    },
  },
  question: {
    eyebrow: '오늘의 질문',
    question: 'React가 nextLanes를 골랐다면, 그 작업은 브라우저에서 실제로 누가 실행할까?',
    cards: [
      { title: '역할 분리 이해', description: '두 스케줄러의 책임을 구분', accent: 'blue' },
      {
        title: '실행 경로 확인',
        description: 'React work가 host task로 넘어가는 흐름 이해',
        accent: 'teal',
      },
      {
        title: '실행 시점 조율',
        description: '브라우저 main thread에서 언제 실행할지 결정',
        accent: 'violet',
      },
    ],
  },
  comparison: {
    number: '1',
    title: '역할 비교',
    columns: {
      label: '구분',
      root: 'Root Scheduler (React Fiber 내부)',
      scheduler: 'scheduler 패키지 (별도 패키지)',
    },
    rows: [
      {
        label: '핵심 질문',
        root: '지금 어떤 React lanes를 처리할까?',
        scheduler: '어떤 우선순위의 task를 언제 실행할까?',
      },
      {
        label: '주요 역할',
        root: 'nextLanes 선택, 우선순위 결정, 스케줄링 경로 선택',
        scheduler: 'priority에 따라 task를 큐에 넣고, 실행 시점 조율',
      },
      {
        label: '다루는 단위',
        root: 'React의 lanes (비트마스크)',
        scheduler: 'host task (JS 작업 단위)',
      },
      {
        label: '결과',
        root: 'work를 Scheduler에 넘김',
        scheduler: '브라우저 메인 스레드에서 콜백 실행',
      },
    ],
  },
  callbackMoment: {
    number: '2',
    title: 'scheduleCallback이 필요한 순간',
    steps: [
      {
        title: '비동기 lane 선택됨',
        description: 'Root Scheduler가 async path 결정',
        accent: 'blue',
      },
      {
        title: 'callbackPriority 계산',
        description: 'lane → schedulerPriorityLevel 변환',
        accent: 'teal',
      },
      {
        title: 'scheduleCallback(priorityLevel, callback)',
        description: 'Scheduler 패키지에 task 등록',
        isCode: true,
        accent: 'violet',
      },
    ],
    bottomNote: 'Root Scheduler → Scheduler 패키지로 작업 위임',
  },
  taskQueue: {
    number: '3',
    title: 'taskQueue 시각화',
    queueTitle: 'taskQueue',
    queueSubtitle: '우선순위가 높은 순서로 정렬',
    items: [
      { label: 'Immediate task', accent: 'blue' },
      { label: 'UserBlocking task', accent: 'teal' },
      { label: 'Normal task', accent: 'teal' },
      { label: 'Low task', accent: 'violet' },
    ],
    currentQueueTitle: '현재 Queue 예시',
    currentItems: [
      { label: 'Immediate task', note: '작업 A', accent: 'blue' },
      { label: 'Normal task', note: '작업 B', accent: 'teal' },
      { label: 'Low task', note: '작업 C', accent: 'violet' },
    ],
  },
  priorities: {
    number: '4',
    title: 'priorityLevel 카드',
    cards: [
      {
        key: 'immediate',
        title: 'Immediate',
        subtitle: 'ImmediatePriority',
        description: '지금 즉시 실행되어야 하는 작업. 예: Sync flush',
        accent: 'blue',
        sortKey: 0,
      },
      {
        key: 'userBlocking',
        title: 'UserBlocking',
        subtitle: 'UserBlockingPriority',
        description: '사용자 입력을 빠르게 반영하기 위해 최대한 빨리 실행',
        accent: 'teal',
        sortKey: 1,
      },
      {
        key: 'normal',
        title: 'Normal',
        subtitle: 'NormalPriority',
        description: '일반적인 작업. 기본적으로 이 레벨로 스케줄링',
        badge: '현재 대표값',
        accent: 'teal',
        sortKey: 2,
      },
      {
        key: 'low',
        title: 'Low',
        subtitle: 'LowPriority',
        description: '백그라운드 성격의 덜 긴급한 작업',
        accent: 'violet',
        sortKey: 3,
      },
      {
        key: 'idle',
        title: 'Idle',
        subtitle: 'IdlePriority',
        description: '아무것도 급하지 않을 때 여유가 생기면 실행',
        accent: 'slate',
        sortKey: 4,
      },
    ],
    directionStart: '높은 우선순위 (즉시성 높음)',
    directionEnd: '낮은 우선순위 (즉시성 낮음)',
  },
  internalFlow: {
    number: '5',
    title: 'unstable_scheduleCallback 내부 개념 흐름',
    steps: [
      {
        title: 'priorityLevel',
        description: '예: NormalPriority',
        accent: 'blue',
      },
      {
        title: 'timeout 결정',
        description: '우선순위에 따른 만료 시간',
        accent: 'teal',
      },
      {
        title: 'task 생성',
        description: 'callback + startTime + expiration',
        accent: 'violet',
      },
      {
        title: 'taskQueue 또는 timerQueue 삽입',
        description: '정렬 후 저장',
        accent: 'amber',
      },
    ],
  },
  reactToScheduler: {
    number: '6',
    title: 'React task → Scheduler task 연결 전체 흐름',
    cards: [
      {
        number: '1',
        title: 'ReactFiberRootScheduler',
        subtitle: 'React Fiber 내부',
        items: ['getNextLanes()', 'callbackPriority 결정', '비동기 lane일 경우 Scheduler에 위임'],
        accent: 'blue',
      },
      {
        number: '2',
        title: 'Scheduler_scheduleCallback(...)',
        subtitle: '경계 함수',
        items: ['schedulerPriorityLevel 전달', 'performWorkOnRootViaSchedulerTask 콜백 전달'],
        accent: 'violet',
      },
      {
        number: '3',
        title: 'Scheduler taskQueue',
        subtitle: '별도 scheduler 패키지',
        items: ['priority에 따라 task 정렬 및 보관'],
        accent: 'teal',
      },
      {
        number: '4',
        title: 'host callback 실행',
        subtitle: '브라우저 메인 스레드',
        items: ['시간이 되었을 때 콜백을 실행하여 React work 수행'],
        accent: 'amber',
      },
    ],
  },
  code: {
    number: '7',
    title: '실제 코드 미리보기',
    cardA: {
      title: 'ReactFiberRootScheduler.js',
      fileLabel: 'ReactFiberRootScheduler.js',
      code: CODE_A,
    },
    cardB: {
      title: 'Scheduler.js',
      fileLabel: 'Scheduler.js',
      code: CODE_B_KO,
    },
    explanationTitle: '설명',
    explanation: [
      'React Fiber는 Scheduler_scheduleCallback을 호출하여 work를 scheduler 패키지로 넘깁니다.',
      'scheduler 패키지는 priorityLevel을 기준으로 task를 생성하고 적절한 queue에 넣어, 나중에 실행할 시점을 관리합니다.',
    ],
    button: { label: 'GitHub에서 코드 보기', href: REACT_FIBER_ROOT_SCHEDULER_URL },
  },
  lab: {
    number: '8',
    title: 'task queue 실험기',
    helper:
      '순서 없이 task를 추가해도, taskQueue는 우선순위 순서에 따라 현재 실행 후보를 확인할 수 있습니다.',
    actionTitle: '작업 추가',
    actions: [
      {
        key: 'immediate',
        label: 'Immediate task 추가',
        badge: 'Immediate',
        accent: 'blue',
        sortKey: 0,
      },
      {
        key: 'normal',
        label: 'Normal task 추가',
        badge: 'Normal',
        accent: 'teal',
        sortKey: 2,
      },
      {
        key: 'low',
        label: 'Low task 추가',
        badge: 'Low',
        accent: 'violet',
        sortKey: 3,
      },
    ],
    resetLabel: '초기화',
    queueTitle: '현재 taskQueue',
    queueSubtitle: '높은 우선순위 순',
    emptyQueueLabel: 'Queue가 비어 있습니다',
    statusTitle: '상태 정보',
    lengthLabel: 'Queue 길이',
    nextLabel: '다음 실행 예정',
    pendingActive: 'Pending work 있음',
    pendingEmpty: 'Pending work 없음',
    sortRule: 'Immediate > UserBlocking > Normal > Low > Idle',
  },
  mission: {
    number: '9',
    title: '직접 코드에서 따라가 보기',
    cards: [
      {
        title: 'ReactFiberRootScheduler.js에서 Scheduler_scheduleCallback 호출을 찾는다',
        description: '비동기 lane 분기에서 호출되는 지점을 확인합니다.',
        accent: 'blue',
      },
      {
        title: 'Scheduler.js에서 unstable_scheduleCallback을 찾는다',
        description: 'task 생성과 queue 삽입 흐름을 따라가 봅니다.',
        accent: 'teal',
      },
      {
        title: 'taskQueue에 작업이 들어가는 흐름을 확인한다',
        description: '우선순위 정렬과 실행 시점 관리 과정을 이해합니다.',
        accent: 'violet',
      },
      {
        title: 'Root Scheduler와 Scheduler 패키지의 역할 차이를 정리한다',
        description: '두 스케줄러가 한 계층이 아닌지 생각해봅니다.',
        accent: 'amber',
      },
    ],
  },
  takeaways: {
    number: '10',
    title: '핵심 정리',
    cards: [
      {
        number: '01',
        title: 'Root Scheduler와 scheduler 패키지는 역할이 다르다.',
        description: '하나는 React work를 선택하고, 다른 하나는 언제 실행할지를 정합니다.',
        accent: 'blue',
      },
      {
        number: '02',
        title: '비동기 React work는 Scheduler task로 넘겨질 수 있다.',
        description: 'scheduleCallback을 통해 host task로 등록됩니다.',
        accent: 'teal',
      },
      {
        number: '03',
        title: 'scheduler는 host task 실행 시점을 관리한다.',
        description: 'priority에 따라 queue를 정렬하고, 메인 스레드에서 작업이 실행됩니다.',
        accent: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 페이지',
    title: '다음: Yielding과 Continuation 보기',
    description: 'Scheduler가 어떻게 yield하고 task를 이어가는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/pause-resume-render',
  },
};

const en: SchedulerPackageContent = {
  hero: {
    badge: 'Scheduler · 8/10',
    titleLines: ["React's Root Scheduler and", 'the scheduler package are', 'not the same thing'],
    highlight: 'not the same thing',
    subtitle:
      'One decides which React work to run; the other coordinates when tasks actually run on the browser main thread.',
    leftCard: {
      title: 'Root Scheduler',
      subtitle: 'Inside React Fiber',
      items: [
        'Pick nextLanes',
        'Decide which React work to run now',
        'Ask the Scheduler to register a task',
      ],
    },
    bridge: 'scheduleCallback(priorityLevel, callback)',
    rightCard: {
      title: 'Scheduler Package',
      subtitle: 'A separate scheduler package',
      items: [
        'Coordinate task execution timing in the host',
        'Manage queues by priority',
        'Run as browser tasks',
      ],
    },
  },
  question: {
    eyebrow: "Today's question",
    question: 'Once React picks nextLanes, who actually runs that work in the browser?',
    cards: [
      {
        title: 'Separate the roles',
        description: 'Distinguish the two schedulers',
        accent: 'blue',
      },
      {
        title: 'Trace the path',
        description: 'See how React work becomes a host task',
        accent: 'teal',
      },
      {
        title: 'Coordinate timing',
        description: 'Decide when to run on the main thread',
        accent: 'violet',
      },
    ],
  },
  comparison: {
    number: '1',
    title: 'Role comparison',
    columns: {
      label: 'Aspect',
      root: 'Root Scheduler (inside React Fiber)',
      scheduler: 'scheduler package (separate package)',
    },
    rows: [
      {
        label: 'Core question',
        root: 'Which React lanes do we run now?',
        scheduler: 'Which priority of task runs, and when?',
      },
      {
        label: 'Main role',
        root: 'Pick nextLanes, decide priority, choose path',
        scheduler: 'Enqueue tasks by priority, coordinate execution timing',
      },
      {
        label: 'Unit handled',
        root: 'React lanes (bitmask)',
        scheduler: 'Host task (a unit of JS work)',
      },
      {
        label: 'Outcome',
        root: 'Hand the work over to the Scheduler',
        scheduler: 'Invoke the callback on the browser main thread',
      },
    ],
  },
  callbackMoment: {
    number: '2',
    title: 'When scheduleCallback is needed',
    steps: [
      {
        title: 'Async lane chosen',
        description: 'Root Scheduler picks the async path',
        accent: 'blue',
      },
      {
        title: 'callbackPriority computed',
        description: 'Convert lane → schedulerPriorityLevel',
        accent: 'teal',
      },
      {
        title: 'scheduleCallback(priorityLevel, callback)',
        description: 'Register a task with the Scheduler package',
        isCode: true,
        accent: 'violet',
      },
    ],
    bottomNote: 'Root Scheduler hands the work over to the Scheduler package',
  },
  taskQueue: {
    number: '3',
    title: 'taskQueue visualization',
    queueTitle: 'taskQueue',
    queueSubtitle: 'Sorted by priority (highest first)',
    items: [
      { label: 'Immediate task', accent: 'blue' },
      { label: 'UserBlocking task', accent: 'teal' },
      { label: 'Normal task', accent: 'teal' },
      { label: 'Low task', accent: 'violet' },
    ],
    currentQueueTitle: 'Current queue (example)',
    currentItems: [
      { label: 'Immediate task', note: 'Work A', accent: 'blue' },
      { label: 'Normal task', note: 'Work B', accent: 'teal' },
      { label: 'Low task', note: 'Work C', accent: 'violet' },
    ],
  },
  priorities: {
    number: '4',
    title: 'priorityLevel cards',
    cards: [
      {
        key: 'immediate',
        title: 'Immediate',
        subtitle: 'ImmediatePriority',
        description: 'Run right now. e.g. Sync flush',
        accent: 'blue',
        sortKey: 0,
      },
      {
        key: 'userBlocking',
        title: 'UserBlocking',
        subtitle: 'UserBlockingPriority',
        description: 'Run as fast as possible to keep input responsive',
        accent: 'teal',
        sortKey: 1,
      },
      {
        key: 'normal',
        title: 'Normal',
        subtitle: 'NormalPriority',
        description: 'Default scheduling level for typical work',
        badge: 'default',
        accent: 'teal',
        sortKey: 2,
      },
      {
        key: 'low',
        title: 'Low',
        subtitle: 'LowPriority',
        description: 'Background-style, less urgent work',
        accent: 'violet',
        sortKey: 3,
      },
      {
        key: 'idle',
        title: 'Idle',
        subtitle: 'IdlePriority',
        description: 'Runs only when nothing urgent is pending',
        accent: 'slate',
        sortKey: 4,
      },
    ],
    directionStart: 'High priority (most urgent)',
    directionEnd: 'Low priority (least urgent)',
  },
  internalFlow: {
    number: '5',
    title: 'unstable_scheduleCallback internal concept flow',
    steps: [
      { title: 'priorityLevel', description: 'e.g. NormalPriority', accent: 'blue' },
      { title: 'Decide timeout', description: 'Expiration based on priority', accent: 'teal' },
      { title: 'Build task', description: 'callback + startTime + expiration', accent: 'violet' },
      {
        title: 'Insert into taskQueue or timerQueue',
        description: 'Store after sorting',
        accent: 'amber',
      },
    ],
  },
  reactToScheduler: {
    number: '6',
    title: 'React task → Scheduler task end-to-end flow',
    cards: [
      {
        number: '1',
        title: 'ReactFiberRootScheduler',
        subtitle: 'Inside React Fiber',
        items: ['getNextLanes()', 'Decide callbackPriority', 'Hand off async lane to Scheduler'],
        accent: 'blue',
      },
      {
        number: '2',
        title: 'Scheduler_scheduleCallback(...)',
        subtitle: 'Boundary function',
        items: [
          'Forward schedulerPriorityLevel',
          'Pass performWorkOnRootViaSchedulerTask callback',
        ],
        accent: 'violet',
      },
      {
        number: '3',
        title: 'Scheduler taskQueue',
        subtitle: 'In the scheduler package',
        items: ['Sort and store tasks by priority'],
        accent: 'teal',
      },
      {
        number: '4',
        title: 'Host callback runs',
        subtitle: 'Browser main thread',
        items: ['Invoke the callback when the time is right, executing React work'],
        accent: 'amber',
      },
    ],
  },
  code: {
    number: '7',
    title: 'Source code preview',
    cardA: {
      title: 'ReactFiberRootScheduler.js',
      fileLabel: 'ReactFiberRootScheduler.js',
      code: CODE_A,
    },
    cardB: {
      title: 'Scheduler.js',
      fileLabel: 'Scheduler.js',
      code: CODE_B_EN,
    },
    explanationTitle: 'Explanation',
    explanation: [
      'React Fiber calls Scheduler_scheduleCallback to hand work over to the scheduler package.',
      'The scheduler package builds a task based on priorityLevel, inserts it into the proper queue, and decides when to run it.',
    ],
    button: { label: 'See the code on GitHub', href: REACT_FIBER_ROOT_SCHEDULER_URL },
  },
  lab: {
    number: '8',
    title: 'task queue lab',
    helper:
      'Add tasks in any order — the taskQueue still surfaces the highest-priority candidate first.',
    actionTitle: 'Add work',
    actions: [
      {
        key: 'immediate',
        label: 'Add Immediate task',
        badge: 'Immediate',
        accent: 'blue',
        sortKey: 0,
      },
      { key: 'normal', label: 'Add Normal task', badge: 'Normal', accent: 'teal', sortKey: 2 },
      { key: 'low', label: 'Add Low task', badge: 'Low', accent: 'violet', sortKey: 3 },
    ],
    resetLabel: 'Reset',
    queueTitle: 'Current taskQueue',
    queueSubtitle: 'Highest priority first',
    emptyQueueLabel: 'The queue is empty',
    statusTitle: 'Status',
    lengthLabel: 'Queue length',
    nextLabel: 'Next to run',
    pendingActive: 'Pending work present',
    pendingEmpty: 'No pending work',
    sortRule: 'Immediate > UserBlocking > Normal > Low > Idle',
  },
  mission: {
    number: '9',
    title: 'Walk it in the source',
    cards: [
      {
        title: 'Find the Scheduler_scheduleCallback call in ReactFiberRootScheduler.js',
        description: 'Confirm where it gets called inside the async lane branch.',
        accent: 'blue',
      },
      {
        title: 'Find unstable_scheduleCallback in Scheduler.js',
        description: 'Trace how a task is built and inserted into the queue.',
        accent: 'teal',
      },
      {
        title: 'See work flow into the taskQueue',
        description: 'Understand priority sorting and execution-time management.',
        accent: 'violet',
      },
      {
        title: 'Summarize the role split between Root Scheduler and Scheduler package',
        description: 'Think through how they live on different layers.',
        accent: 'amber',
      },
    ],
  },
  takeaways: {
    number: '10',
    title: 'Key takeaways',
    cards: [
      {
        number: '01',
        title: 'Root Scheduler and the scheduler package play different roles.',
        description: 'One picks React work; the other decides when to run it.',
        accent: 'blue',
      },
      {
        number: '02',
        title: 'Async React work can be handed off to a Scheduler task.',
        description: 'It gets registered as a host task via scheduleCallback.',
        accent: 'teal',
      },
      {
        number: '03',
        title: 'The scheduler manages when host tasks run.',
        description: 'It sorts queues by priority and runs work on the main thread.',
        accent: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: 'Next page',
    title: 'Next: Yielding and Continuation',
    description: 'Learn how the Scheduler yields and continues tasks.',
    cta: 'Go to the next page',
    href: '/pause-resume-render',
  },
};

export const schedulerPackageContent: Record<Locale, SchedulerPackageContent> = { ko, en };

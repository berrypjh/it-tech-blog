import type { Locale } from '@it-tech-blog/preferences';

export type AxisKey = 'event' | 'lane' | 'scheduler';
export type AxisAccent = 'blue' | 'teal' | 'violet';

export type Tone = 'sky' | 'cyan' | 'teal' | 'emerald' | 'violet' | 'blue' | 'amber' | 'rose';

export type AxisCard = {
  number: string;
  key: AxisKey;
  accent: AxisAccent;
  label: string;
  title: string;
  subtitle: string;
  examplePill: string;
  coreQuestion: string;
};

export type EventPriorityRow = {
  event: string;
  kind: 'Discrete' | 'Continuous' | 'Default';
  description: string;
};

export type LaneRow = {
  name: string;
  bitmask: string;
  description: string;
};

export type SchedulerPriorityRow = {
  name: string;
  description: string;
};

export type FlowStep = { title: string; description: string };

export type BitmaskRow = { name: string; bits: string };

export type ComparisonRow = {
  key: AxisKey;
  accent: AxisAccent;
  name: string;
  coreQuestion: string;
  role: string[];
  when: string[];
  code: string[];
};

export type MissionCard = { title: string; description: string; accent: Tone };

export type TakeawayCard = { title: string; description: string; accent: Tone };

export type PriorityTabKey =
  | 'click'
  | 'input'
  | 'mousemove'
  | 'startTransition'
  | 'deferred'
  | 'load';

export type PriorityTabScenario = {
  key: PriorityTabKey;
  label: string;
  event: { kind: string; description: string };
  lane: { name: string; bitmask: string };
  scheduling: { label: string; description: string };
  summary: string[];
};

export type ThreePriorityAxesContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    subtitle: string;
    axes: AxisCard[];
  };
  question: {
    eyebrow: string;
    title: string;
    question: string;
    cards: { title: string; description: string; accent: AxisAccent }[];
  };
  overview: {
    eyebrow: string;
    title: string;
    axes: AxisCard[];
  };
  detail: {
    event: {
      number: string;
      title: string;
      description: string;
      rows: EventPriorityRow[];
    };
    lane: {
      number: string;
      title: string;
      description: string;
      rows: LaneRow[];
      note: string;
    };
    scheduler: {
      number: string;
      title: string;
      description: string;
      rows: SchedulerPriorityRow[];
      note: string;
    };
  };
  connection: {
    number: string;
    title: string;
    flow: { title: string; steps: FlowStep[] };
    explanation: {
      title: string;
      paragraphs: string[];
      keywords: string[];
    };
    bitmask: {
      title: string;
      rows: BitmaskRow[];
      note: string;
    };
  };
  comparison: {
    number: string;
    title: string;
    headers: {
      axis: string;
      coreQuestion: string;
      role: string;
      when: string;
      code: string;
    };
    rows: ComparisonRow[];
  };
  code: {
    number: string;
    title: string;
    fileLabel: string;
    code: string;
    explanationTitle: string;
    explanation: string[];
    apiBadges: string[];
    button: { label: string; href: string };
  };
  interactive: {
    number: string;
    title: string;
    tabs: { key: PriorityTabKey; label: string }[];
    scenarios: Record<PriorityTabKey, PriorityTabScenario>;
    stageLabels: {
      eventPriority: string;
      lane: string;
      scheduling: string;
      summary: string;
    };
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
    label: string;
    eyebrow: string;
    nextTitle: string;
    href: string;
  };
};

const CODE =
  '// ReactFiberWorkLoop.js\n\n' +
  'export function requestUpdateLane(fiber: Fiber): Lane {\n' +
  '  // ... 생략: 렌더 중 업데이트, transition, legacy 등\n\n' +
  '  // 현재 이벤트/업데이트 문맥에 따라 lane을 고른다.\n' +
  '  return eventPriorityToLane(resolveUpdatePriority());\n' +
  '}';

const CODE_EN =
  '// ReactFiberWorkLoop.js\n\n' +
  'export function requestUpdateLane(fiber: Fiber): Lane {\n' +
  '  // ... omitted: render-phase updates, transitions, legacy paths\n\n' +
  '  // Pick a lane based on the current event / update context.\n' +
  '  return eventPriorityToLane(resolveUpdatePriority());\n' +
  '}';

const REACT_FIBER_WORK_LOOP_URL =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js';

const ko: ThreePriorityAxesContent = {
  hero: {
    badge: 'Scheduler · 2/10단계',
    titleLines: ['React의 우선순위는', '하나가 아니다'],
    subtitle:
      '이벤트 문맥, 업데이트 저장 단위, 브라우저 task 실행 우선순위는 서로 다른 층위의 개념입니다.',
    axes: [
      {
        number: '1',
        key: 'event',
        accent: 'blue',
        label: 'Event Priority',
        title: '이벤트 문맥의 긴급도',
        subtitle: '사용자 입력이 발생한 상황의 즉시성',
        examplePill: '예: click, input, keydown',
        coreQuestion: '사용자 입력이 얼마나 즉각적으로 반응해야 하는가?',
      },
      {
        number: '2',
        key: 'lane',
        accent: 'teal',
        label: 'Lane',
        title: 'React 내부 작업 단위',
        subtitle: '업데이트가 속한 작업 그룹, 비교/병합의 기준',
        examplePill: '예: SyncLane, DefaultLane, TransitionLane',
        coreQuestion: '업데이트를 저장하고 비교하여 병합/스케줄링의 기준이 되는 React 내부의 단위',
      },
      {
        number: '3',
        key: 'scheduler',
        accent: 'violet',
        label: 'Scheduler Priority',
        title: '호스트 task 실행 우선순위',
        subtitle: '브라우저 환경에서 task를 언제 실행할지를 조율',
        examplePill: '예: Immediate, UserBlocking, Normal, Low',
        coreQuestion: '언제 브라우저 main thread에 작업을 집어넣을지 결정하는 스케줄러의 우선순위',
      },
    ],
  },
  question: {
    eyebrow: '오늘의 질문',
    title: '오늘의 질문',
    question: 'click은 긴급하다, SyncLane이다, Immediate task다 — 이 말들은 모두 같은 뜻일까?',
    cards: [
      { title: '개념 분리', description: '세 축의 역할을 명확히 구분', accent: 'blue' },
      { title: '내부 연결', description: '어떻게 서로 연결되는지 이해', accent: 'teal' },
      { title: '흐름 해소', description: '자주 헷갈리는 개념을 정리', accent: 'violet' },
    ],
  },
  overview: {
    eyebrow: '세 가지 우선순위 축 한눈에 보기',
    title: '세 가지 우선순위 축 한눈에 보기',
    axes: [], // mirrors hero.axes (filled below)
  },
  detail: {
    event: {
      number: '3',
      title: 'Event Priority (이벤트 문맥)',
      description:
        '사용자 이벤트가 발생하면 현재 update priority 문맥이 생긴다. 이 문맥은 업데이트가 어느 긴급도에서 시작되었는지를 나타낸다.',
      rows: [
        { event: 'click', kind: 'Discrete', description: '가장 즉각적인 입력' },
        { event: 'input / keydown', kind: 'Discrete', description: '즉시 반응이 필요한 입력' },
        {
          event: 'mousemove / pointermove',
          kind: 'Continuous',
          description: '연속적인 입력 흐름',
        },
        { event: 'scroll / drag', kind: 'Continuous', description: '연속 이벤트' },
        { event: 'load / idle / 기타', kind: 'Default', description: '기본 문맥' },
      ],
    },
    lane: {
      number: '4',
      title: 'Lane (내부 작업 단위)',
      description:
        'Lane은 React 내부에서 업데이트를 묶고 비교하는 실제 작업 단위다. 업데이트가 어느 그룹에 속하는지, 어떤 작업과 함께 처리될 수 있는지를 나타낸다.',
      rows: [
        {
          name: 'SyncLane',
          bitmask: '0b0001',
          description: '가장 높은 우선순위, 사용자 입력 시 빠르게 처리',
        },
        {
          name: 'DefaultLane',
          bitmask: '0b0100',
          description: '일반 업데이트에 사용되는 기본 lane',
        },
        {
          name: 'TransitionLane',
          bitmask: '0b1000',
          description: 'startTransition 등 비교적 느긋한 업데이트에 사용',
        },
      ],
      note: '여러 lane이 조합되면 하나의 bitmask로 표현됩니다.',
    },
    scheduler: {
      number: '5',
      title: 'Scheduler Priority (호스트 task 실행)',
      description:
        'React가 비동기 작업을 실행해야 할 때 scheduler 패키지에게 넘기는 host task 실행 우선순위다.',
      rows: [
        { name: 'Immediate', description: '지금 당장 실행 시도' },
        { name: 'UserBlocking', description: '사용자 입력 처리의 지장을 최소화' },
        { name: 'Normal', description: '일반적인 비긴급 작업' },
        { name: 'Low', description: '최대한 늦춰도 되는 작업' },
      ],
      note: 'Scheduler는 브라우저 환경의 task 큐에 작업을 등록합니다.',
    },
  },
  connection: {
    number: '6',
    title: '세 축이 연결되는 전체 흐름',
    flow: {
      title: '세 축이 연결되는 전체 흐름',
      steps: [
        { title: '사용자 입력 발생', description: 'click 이벤트' },
        { title: 'Event Priority 결정', description: 'click → DiscreteEventPriority' },
        { title: 'eventPriorityToLane(...)', description: 'Event Priority → Lane 변환' },
        {
          title: '높은 우선순위 Lane 선택/병합',
          description: 'SyncLane 등 선택 후 root로 전달',
        },
        {
          title: 'Root Scheduler가 nextLanes 결정',
          description: 'pendingLanes & suspendedLanes 고려',
        },
        { title: '필요 시 Scheduler task 등록', description: 'scheduleCallback(...) 호출' },
      ],
    },
    explanation: {
      title: '흐름 해설',
      paragraphs: [
        '브라우저가 이벤트를 발생시키고 React가 이를 수신합니다.',
        '이벤트 문맥이 긴급도를 Event Priority로 분류합니다.',
        'eventPriorityToLane로 해당 우선순위에 맞는 Lane을 결정합니다.',
        'Lane은 bitmask로 저장/병합되어 업데이트 그룹을 정의합니다.',
        'Root는 모든 Lane을 조합하여 다음에 수행할 작업을 결정합니다.',
        '필요하면 Scheduler에 task를 등록해 브라우저 main thread에서 실행될 수 있게 합니다.',
      ],
      keywords: [
        'Event Priority',
        'eventPriorityToLane',
        'Lane',
        'Root Scheduler',
        'Scheduler task',
      ],
    },
    bitmask: {
      title: 'Lane은 비트마스크(bitmask)입니다',
      rows: [
        { name: 'SyncLane', bits: '00001' },
        { name: 'InputDiscreteLane', bits: '00010' },
        { name: 'DefaultLane', bits: '00100' },
        { name: 'TransitionLane1', bits: '01000' },
        { name: 'TransitionLane2', bits: '10000' },
      ],
      note: '여러 lane이 동시에 존재할 수 있으며, React는 우선순위가 높은 lane부터 처리합니다.',
    },
  },
  comparison: {
    number: '7',
    title: '세 축 비교 표',
    headers: {
      axis: '구분',
      coreQuestion: '핵심 질문',
      role: '역할',
      when: '언제 결정되는가?',
      code: '대표 파일 / 코드 영역',
    },
    rows: [
      {
        key: 'event',
        accent: 'blue',
        name: 'Event Priority',
        coreQuestion: '이 업데이트는 어떤 이벤트 문맥에서 왔는가?',
        role: ['사용자 입력의 긴급도 분류', 'Discrete / Continuous / Default'],
        when: ['이벤트가 발생할 때', 'root listener 근처'],
        code: ['ReactDOMEventListener.js', 'getEventPriority(...)'],
      },
      {
        key: 'lane',
        accent: 'teal',
        name: 'Lane',
        coreQuestion: 'React 내부에서 이 업데이트는 어떤 작업 그룹인가?',
        role: ['업데이트 저장/비교/병합의 단위', '비트마스크'],
        when: ['업데이트가 발생해 lane을 요청할 때'],
        code: ['ReactFiberWorkLoop.js', 'requestUpdateLane(...)'],
      },
      {
        key: 'scheduler',
        accent: 'violet',
        name: 'Scheduler Priority',
        coreQuestion: '브라우저에서 이 작업을 얼마나 시급하게 실행할까?',
        role: ['host 환경의 task 실행 우선순위', 'Immediate / UserBlocking / Normal / Low'],
        when: ['Scheduler task를 등록할 때'],
        code: ['scheduler 패키지', 'scheduleCallback(...)'],
      },
    ],
  },
  code: {
    number: '8',
    title: '실제 코드 미리보기 (Event Priority → Lane 변환의 핵심)',
    fileLabel: 'ReactFiberWorkLoop.js',
    code: CODE,
    explanationTitle: '설명',
    explanation: [
      'resolveUpdatePriority()는 현재 문맥의 Event Priority를 반환합니다.',
      'eventPriorityToLane(...)은 Event Priority를 React 내부 Lane으로 변환합니다.',
      '이 한 줄이 Event Priority → Lane 변환의 핵심입니다.',
    ],
    apiBadges: ['resolveUpdatePriority', 'eventPriorityToLane'],
    button: { label: 'GitHub에서 코드 보기', href: REACT_FIBER_WORK_LOOP_URL },
  },
  interactive: {
    number: '9',
    title: '인터랙티브 우선순위 맵',
    tabs: [
      { key: 'click', label: 'click' },
      { key: 'input', label: 'input' },
      { key: 'mousemove', label: 'mousemove' },
      { key: 'startTransition', label: 'startTransition' },
      { key: 'deferred', label: 'deferred' },
      { key: 'load', label: 'load' },
    ],
    stageLabels: {
      eventPriority: 'Event Priority',
      lane: 'Lane',
      scheduling: 'Scheduling',
      summary: '흐름 요약',
    },
    scenarios: {
      click: {
        key: 'click',
        label: 'click',
        event: { kind: 'Discrete', description: '즉각 반응이 필요한 입력' },
        lane: { name: 'SyncLane (높은 우선순위)', bitmask: '비트마스크: 0b...0001' },
        scheduling: { label: '빠른 root scheduling', description: '가능한 즉시 task 등록 및 수행' },
        summary: ['이벤트 발생 → Discrete', 'Discrete → SyncLane', 'SyncLane → 빠른 스케줄링'],
      },
      input: {
        key: 'input',
        label: 'input',
        event: { kind: 'Discrete', description: '키 입력은 즉시 반영되어야 함' },
        lane: { name: 'SyncLane (입력 동기 처리)', bitmask: '비트마스크: 0b...0001' },
        scheduling: { label: '동기 스케줄링', description: 'flushSync 경로로 즉시 처리' },
        summary: ['입력 이벤트 → Discrete', 'Discrete → SyncLane', 'SyncLane → 동기 flush'],
      },
      mousemove: {
        key: 'mousemove',
        label: 'mousemove',
        event: { kind: 'Continuous', description: '연속적으로 흐르는 포인터 이벤트' },
        lane: { name: 'InputContinuousLane', bitmask: '비트마스크: 0b...0010' },
        scheduling: { label: 'UserBlocking 우선순위', description: '입력 흐름을 막지 않게 처리' },
        summary: [
          '연속 입력 → Continuous',
          'Continuous → InputContinuousLane',
          'UserBlocking 스케줄링',
        ],
      },
      startTransition: {
        key: 'startTransition',
        label: 'startTransition',
        event: { kind: 'Transition', description: '의도적으로 늦춰도 되는 UI 전환' },
        lane: { name: 'TransitionLane', bitmask: '비트마스크: 0b...1000' },
        scheduling: { label: 'Normal 우선순위', description: '입력 작업 이후 한가할 때 수행' },
        summary: ['startTransition → Transition', 'Transition → TransitionLane', 'Normal 스케줄링'],
      },
      deferred: {
        key: 'deferred',
        label: 'deferred',
        event: { kind: 'Deferred', description: 'useDeferredValue가 의도한 늦춤 업데이트' },
        lane: { name: 'TransitionLane (deferred)', bitmask: '비트마스크: 0b...1000' },
        scheduling: { label: 'Low 우선순위', description: '필요한 순간까지 미뤄도 OK' },
        summary: ['useDeferredValue → Deferred', 'Deferred → TransitionLane', 'Low 스케줄링'],
      },
      load: {
        key: 'load',
        label: 'load',
        event: { kind: 'Default', description: '특별한 긴급도가 없는 일반 업데이트' },
        lane: { name: 'DefaultLane', bitmask: '비트마스크: 0b...0100' },
        scheduling: { label: 'Normal 우선순위', description: '일반적인 비긴급 작업으로 처리' },
        summary: ['load 이벤트 → Default', 'Default → DefaultLane', 'Normal 스케줄링'],
      },
    },
  },
  mission: {
    number: '10',
    title: '직접 코드에서 따라가 보기',
    cards: [
      {
        title: 'requestUpdateLane의 마지막 return을 찾는다',
        description: 'eventPriorityToLane 연결을 확인합니다.',
        accent: 'sky',
      },
      {
        title: 'eventPriorityToLane 구현을 확인한다',
        description: 'Event Priority → Lane 매핑 구조를 봅니다.',
        accent: 'teal',
      },
      {
        title: 'Lane과 Scheduler Priority가 같은 개념이 아님을 기억한다',
        description: '역할과 결정 시점을 비교합니다.',
        accent: 'violet',
      },
      {
        title: 'Scheduler 리포지토리의 scheduleCallback을 확인한다',
        description: 'host task 등록 방식 이해',
        accent: 'blue',
      },
    ],
  },
  takeaways: {
    number: '11',
    title: '핵심 정리 (이번 페이지에서 반드시 기억할 것)',
    cards: [
      {
        title: 'React의 우선순위는 단일 개념이 아니다.',
        description: '문맥(Event), 내부 작업(Lane), host 실행(Scheduler)로 나뉩니다.',
        accent: 'blue',
      },
      {
        title: 'Event Priority는 문맥, Lane은 내부 작업 단위다.',
        description: '이벤트의 긴급도를 기준으로 Lane을 결정해 업데이트를 그룹화합니다.',
        accent: 'teal',
      },
      {
        title: 'Scheduler Priority는 host task 실행 방식과 연결된다.',
        description: 'Lane을 기반으로 언제, 얼마나 빨리 브라우저에서 실행할지 결정합니다.',
        accent: 'violet',
      },
    ],
  },
  cta: {
    eyebrow: '다음 페이지',
    label: '다음: Lane 자료구조 해부하기',
    nextTitle: 'Lane은 무엇이고 왜 비트마스크로 관리될까?',
    href: '/lane-shape',
  },
};
ko.overview.axes = ko.hero.axes;

const en: ThreePriorityAxesContent = {
  hero: {
    badge: 'Scheduler · 2/10',
    titleLines: ["React's priority is", 'not a single concept'],
    subtitle:
      'Event context, the internal update unit, and the browser task execution priority live at different layers.',
    axes: [
      {
        number: '1',
        key: 'event',
        accent: 'blue',
        label: 'Event Priority',
        title: 'Urgency of the event context',
        subtitle: 'How immediate must the user input feel?',
        examplePill: 'e.g. click, input, keydown',
        coreQuestion: 'How instantly must this input get reflected?',
      },
      {
        number: '2',
        key: 'lane',
        accent: 'teal',
        label: 'Lane',
        title: 'React internal work unit',
        subtitle: 'The work group an update belongs to — basis of merging',
        examplePill: 'e.g. SyncLane, DefaultLane, TransitionLane',
        coreQuestion:
          "React's internal unit used to store/compare updates and decide merging/scheduling.",
      },
      {
        number: '3',
        key: 'scheduler',
        accent: 'violet',
        label: 'Scheduler Priority',
        title: 'Host task execution priority',
        subtitle: 'When the browser should actually run the task',
        examplePill: 'e.g. Immediate, UserBlocking, Normal, Low',
        coreQuestion:
          "The scheduler's priority for when to push work onto the browser main thread.",
      },
    ],
  },
  question: {
    eyebrow: "Today's question",
    title: "Today's question",
    question:
      '"click is urgent", "click is SyncLane", "click is an Immediate task" — do these all mean the same thing?',
    cards: [
      {
        title: 'Separate the concepts',
        description: 'Clarify what each axis is for',
        accent: 'blue',
      },
      { title: 'Internal wiring', description: 'See how the three connect', accent: 'teal' },
      {
        title: 'Untangle the flow',
        description: 'Resolve the most common confusion',
        accent: 'violet',
      },
    ],
  },
  overview: {
    eyebrow: 'Three priority axes at a glance',
    title: 'Three priority axes at a glance',
    axes: [],
  },
  detail: {
    event: {
      number: '3',
      title: 'Event Priority (event context)',
      description:
        'When a user event fires, an update-priority context is established. It records the urgency the update started from.',
      rows: [
        { event: 'click', kind: 'Discrete', description: 'The most instant input' },
        {
          event: 'input / keydown',
          kind: 'Discrete',
          description: 'Input that needs instant feedback',
        },
        {
          event: 'mousemove / pointermove',
          kind: 'Continuous',
          description: 'Continuous input stream',
        },
        { event: 'scroll / drag', kind: 'Continuous', description: 'Continuous events' },
        { event: 'load / idle / others', kind: 'Default', description: 'Default context' },
      ],
    },
    lane: {
      number: '4',
      title: 'Lane (internal work unit)',
      description:
        "A Lane is React's actual work unit for grouping and comparing updates. It tells which group an update belongs to and which work it can be processed alongside.",
      rows: [
        {
          name: 'SyncLane',
          bitmask: '0b0001',
          description: 'Highest priority — runs fast on user input',
        },
        {
          name: 'DefaultLane',
          bitmask: '0b0100',
          description: 'Default lane used by general updates',
        },
        {
          name: 'TransitionLane',
          bitmask: '0b1000',
          description: 'Used by startTransition-style relaxed updates',
        },
      ],
      note: 'When several lanes combine, they appear as one bitmask.',
    },
    scheduler: {
      number: '5',
      title: 'Scheduler Priority (host task execution)',
      description:
        'The host-task execution priority React passes to the scheduler package when running async work.',
      rows: [
        { name: 'Immediate', description: 'Try to run right now' },
        { name: 'UserBlocking', description: 'Minimize impact on user input handling' },
        { name: 'Normal', description: 'Regular non-urgent work' },
        { name: 'Low', description: 'Work that can be postponed as long as possible' },
      ],
      note: 'The scheduler enqueues work onto the host environment task queue.',
    },
  },
  connection: {
    number: '6',
    title: 'How the three axes connect end-to-end',
    flow: {
      title: 'How the three axes connect end-to-end',
      steps: [
        { title: 'User input fires', description: 'A click event happens' },
        { title: 'Event Priority decided', description: 'click → DiscreteEventPriority' },
        { title: 'eventPriorityToLane(...)', description: 'Event Priority → Lane conversion' },
        {
          title: 'Pick / merge the higher-priority Lane',
          description: 'Choose SyncLane etc. and forward to root',
        },
        {
          title: 'Root Scheduler picks nextLanes',
          description: 'Considers pendingLanes & suspendedLanes',
        },
        {
          title: 'Schedule a host task if needed',
          description: 'Invokes scheduleCallback(...)',
        },
      ],
    },
    explanation: {
      title: 'Walkthrough',
      paragraphs: [
        'The browser fires an event and React receives it.',
        'The event context classifies the urgency into an Event Priority.',
        'eventPriorityToLane converts that priority into a matching Lane.',
        'Lanes are stored/merged as a bitmask, defining update groups.',
        'The root combines all lanes to decide what to run next.',
        "If needed, a task is scheduled so the browser's main thread can run it.",
      ],
      keywords: [
        'Event Priority',
        'eventPriorityToLane',
        'Lane',
        'Root Scheduler',
        'Scheduler task',
      ],
    },
    bitmask: {
      title: 'A Lane is a bitmask',
      rows: [
        { name: 'SyncLane', bits: '00001' },
        { name: 'InputDiscreteLane', bits: '00010' },
        { name: 'DefaultLane', bits: '00100' },
        { name: 'TransitionLane1', bits: '01000' },
        { name: 'TransitionLane2', bits: '10000' },
      ],
      note: 'Several lanes can exist at once — React processes the higher-priority lanes first.',
    },
  },
  comparison: {
    number: '7',
    title: 'Side-by-side comparison',
    headers: {
      axis: 'Axis',
      coreQuestion: 'Core question',
      role: 'Role',
      when: 'When it is decided',
      code: 'Representative file / code',
    },
    rows: [
      {
        key: 'event',
        accent: 'blue',
        name: 'Event Priority',
        coreQuestion: 'From what event context did this update come?',
        role: ['Classify user input urgency', 'Discrete / Continuous / Default'],
        when: ['When the event fires', 'Near the root listener'],
        code: ['ReactDOMEventListener.js', 'getEventPriority(...)'],
      },
      {
        key: 'lane',
        accent: 'teal',
        name: 'Lane',
        coreQuestion: 'Which internal work group does this update belong to?',
        role: ['Storage / comparison / merge unit', 'Bitmask'],
        when: ['When the update requests a lane'],
        code: ['ReactFiberWorkLoop.js', 'requestUpdateLane(...)'],
      },
      {
        key: 'scheduler',
        accent: 'violet',
        name: 'Scheduler Priority',
        coreQuestion: 'How urgently should the host run this work?',
        role: ['Host environment task priority', 'Immediate / UserBlocking / Normal / Low'],
        when: ['When a scheduler task is registered'],
        code: ['scheduler package', 'scheduleCallback(...)'],
      },
    ],
  },
  code: {
    number: '8',
    title: 'Source code preview (the core of Event Priority → Lane)',
    fileLabel: 'ReactFiberWorkLoop.js',
    code: CODE_EN,
    explanationTitle: 'Explanation',
    explanation: [
      'resolveUpdatePriority() returns the Event Priority of the current context.',
      'eventPriorityToLane(...) converts an Event Priority into an internal React Lane.',
      'This single line is the heart of Event Priority → Lane conversion.',
    ],
    apiBadges: ['resolveUpdatePriority', 'eventPriorityToLane'],
    button: { label: 'See the code on GitHub', href: REACT_FIBER_WORK_LOOP_URL },
  },
  interactive: {
    number: '9',
    title: 'Interactive priority map',
    tabs: [
      { key: 'click', label: 'click' },
      { key: 'input', label: 'input' },
      { key: 'mousemove', label: 'mousemove' },
      { key: 'startTransition', label: 'startTransition' },
      { key: 'deferred', label: 'deferred' },
      { key: 'load', label: 'load' },
    ],
    stageLabels: {
      eventPriority: 'Event Priority',
      lane: 'Lane',
      scheduling: 'Scheduling',
      summary: 'Flow summary',
    },
    scenarios: {
      click: {
        key: 'click',
        label: 'click',
        event: { kind: 'Discrete', description: 'Input that demands instant feedback' },
        lane: { name: 'SyncLane (highest priority)', bitmask: 'bitmask: 0b...0001' },
        scheduling: {
          label: 'Fast root scheduling',
          description: 'Register and run a task as soon as possible',
        },
        summary: ['Event → Discrete', 'Discrete → SyncLane', 'SyncLane → fast scheduling'],
      },
      input: {
        key: 'input',
        label: 'input',
        event: { kind: 'Discrete', description: 'Keystroke needs to land immediately' },
        lane: { name: 'SyncLane (sync input)', bitmask: 'bitmask: 0b...0001' },
        scheduling: {
          label: 'Sync scheduling',
          description: 'Flushed synchronously via flushSync',
        },
        summary: ['Input event → Discrete', 'Discrete → SyncLane', 'SyncLane → sync flush'],
      },
      mousemove: {
        key: 'mousemove',
        label: 'mousemove',
        event: { kind: 'Continuous', description: 'A continuous pointer stream' },
        lane: { name: 'InputContinuousLane', bitmask: 'bitmask: 0b...0010' },
        scheduling: {
          label: 'UserBlocking priority',
          description: "Don't block the input stream",
        },
        summary: [
          'Continuous input → Continuous',
          'Continuous → InputContinuousLane',
          'UserBlocking scheduling',
        ],
      },
      startTransition: {
        key: 'startTransition',
        label: 'startTransition',
        event: { kind: 'Transition', description: 'Intentionally delayed UI transition' },
        lane: { name: 'TransitionLane', bitmask: 'bitmask: 0b...1000' },
        scheduling: {
          label: 'Normal priority',
          description: 'Runs after input work, when idle',
        },
        summary: [
          'startTransition → Transition',
          'Transition → TransitionLane',
          'Normal scheduling',
        ],
      },
      deferred: {
        key: 'deferred',
        label: 'deferred',
        event: { kind: 'Deferred', description: 'A deferred update from useDeferredValue' },
        lane: { name: 'TransitionLane (deferred)', bitmask: 'bitmask: 0b...1000' },
        scheduling: { label: 'Low priority', description: 'Fine to delay until really needed' },
        summary: ['useDeferredValue → Deferred', 'Deferred → TransitionLane', 'Low scheduling'],
      },
      load: {
        key: 'load',
        label: 'load',
        event: { kind: 'Default', description: 'A regular update without any special urgency' },
        lane: { name: 'DefaultLane', bitmask: 'bitmask: 0b...0100' },
        scheduling: { label: 'Normal priority', description: 'Treated as regular work' },
        summary: ['load event → Default', 'Default → DefaultLane', 'Normal scheduling'],
      },
    },
  },
  mission: {
    number: '10',
    title: 'Walk it in the source',
    cards: [
      {
        title: 'Find the last return of requestUpdateLane',
        description: 'Trace the eventPriorityToLane wiring.',
        accent: 'sky',
      },
      {
        title: 'Read the eventPriorityToLane implementation',
        description: 'Inspect the Event Priority → Lane mapping.',
        accent: 'teal',
      },
      {
        title: 'Remember Lane ≠ Scheduler Priority',
        description: 'Compare their roles and decision points.',
        accent: 'violet',
      },
      {
        title: 'Check scheduleCallback in the Scheduler repo',
        description: 'See how a host task gets registered.',
        accent: 'blue',
      },
    ],
  },
  takeaways: {
    number: '11',
    title: 'Key takeaways from this page',
    cards: [
      {
        title: "React's priority is not a single concept.",
        description:
          'It splits into context (Event), internal work (Lane), host execution (Scheduler).',
        accent: 'blue',
      },
      {
        title: 'Event Priority is context — Lane is the internal work unit.',
        description: 'Event urgency decides the Lane that groups updates.',
        accent: 'teal',
      },
      {
        title: 'Scheduler Priority is tied to host task execution.',
        description: 'Based on Lanes, it decides when and how fast the browser runs the work.',
        accent: 'violet',
      },
    ],
  },
  cta: {
    eyebrow: 'Next page',
    label: 'Next: Anatomy of the Lane data structure',
    nextTitle: 'What is a Lane and why is it a bitmask?',
    href: '/lane-shape',
  },
};
en.overview.axes = en.hero.axes;

export const threePriorityAxesContent: Record<Locale, ThreePriorityAxesContent> = { ko, en };

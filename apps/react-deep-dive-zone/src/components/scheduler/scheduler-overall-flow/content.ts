import type { Locale } from '@it-tech-blog/preferences';

import type { FinaleBannerContent } from '../../shared/banner';

export type ScenarioId = 'click' | 'transition' | 'deferred';

export type FlowAccent = 'click' | 'transition' | 'deferred' | 'common';

export type FlowStep = {
  label: string;
  description: string;
};

export type ScenarioSummary = {
  id: ScenarioId;
  tabLabel: string;
  title: string;
  startCode: string;
  startCodeCaption: string;
  exampleCode: string;
  exampleCaption: string;
  feature: string;
  miniPipeline: string[];
};

export type CodePathCard = {
  fileName: string;
  description: string;
  chips: string[];
};

export type ChecklistItem = {
  question: string;
  hint: string;
};

export type QuizItem = {
  number: string;
  question: string;
  answer: string;
  answerDetail: string;
};

export type FullFlowContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    highlight: string;
    subtitle: string;
    diagramTitle: string;
    sourceCards: { id: ScenarioId; label: string }[];
    mergeLabel: string;
    pipeline: string[];
    commitLabel: string;
  };
  question: {
    eyebrow: string;
    question: string;
    iconNote: string;
    cards: { title: string; description: string }[];
  };
  scenarios: {
    number: string;
    title: string;
    helper: string;
    activeBadge: string;
    summaryHeading: { start: string; example: string; feature: string };
    items: ScenarioSummary[];
  };
  clickFlow: {
    number: string;
    title: string;
    helper: string;
    steps: FlowStep[];
    note: string;
  };
  transitionFlow: {
    number: string;
    title: string;
    helper: string;
    steps: FlowStep[];
    note: string;
  };
  deferredFlow: {
    number: string;
    title: string;
    helper: string;
    steps: FlowStep[];
    note: string;
  };
  commonRoot: {
    number: string;
    title: string;
    mergeLabel: string;
    steps: FlowStep[];
    explanation: string;
  };
  schedulerExec: {
    number: string;
    title: string;
    topPipeline: string[];
    decisionLabel: string;
    sync: {
      title: string;
      points: string[];
    };
    async: {
      title: string;
      points: string[];
    };
  };
  yielding: {
    number: string;
    title: string;
    flow: string[];
    frame1: { title: string; items: string[]; tag: string };
    frame2: { title: string; items: string[]; tag: string };
    bridge: { top: string; bottom: string };
    note: string;
  };
  codePath: {
    number: string;
    title: string;
    helper: string;
    cards: CodePathCard[];
  };
  checklist: {
    number: string;
    title: string;
    helper: string;
    items: ChecklistItem[];
  };
  quiz: {
    number: string;
    title: string;
    helper: string;
    showLabel: string;
    hideLabel: string;
    answerHeading: string;
    items: QuizItem[];
  };
  finale: FinaleBannerContent;
};

const ko: FullFlowContent = {
  hero: {
    badge: 'Scheduler · 10/10단계',
    titleLines: ['Scheduler와 우선순위,', '이제 한 장으로 복원해보자'],
    highlight: '한 장으로 복원해보자',
    subtitle:
      'click, transition, deferred update가 어디서 갈라지고 어디서 다시 합쳐지는지 렌더링까지의 전체 흐름으로 정리합니다.',
    diagramTitle: '세 update가 하나의 pipeline으로 합류',
    sourceCards: [
      { id: 'click', label: 'click update' },
      { id: 'transition', label: 'transition update' },
      { id: 'deferred', label: 'deferred update' },
    ],
    mergeLabel: '공통 scheduling 경로로 합류',
    pipeline: [
      'Lane 결정',
      'root pending work',
      'Root Scheduler',
      'render work',
      'yield / continuation 가능',
    ],
    commitLabel: 'commit',
  },
  question: {
    eyebrow: '오늘의 질문',
    question: 'click, transition, deferred update는 어디서 갈라지고 어디서 다시 합쳐질까?',
    iconNote: 'pipeline 한 장으로 정리',
    cards: [
      {
        title: '분기 지점',
        description: '각 update는 시작 문맥과 lane 선택 방식이 다릅니다.',
      },
      {
        title: '공통 경로',
        description: 'root.pendingLanes에 기록된 뒤 Root Scheduler로 합류합니다.',
      },
      {
        title: '실행 방식',
        description: 'sync flush 또는 Scheduler callback 경로로 실행됩니다.',
      },
    ],
  },
  scenarios: {
    number: '1',
    title: '3가지 업데이트 시나리오 선택',
    helper: '탭을 눌러 각 update의 시작 문맥을 비교해봅니다.',
    activeBadge: '현재 선택',
    summaryHeading: { start: '시작', example: '예', feature: '특징' },
    items: [
      {
        id: 'click',
        tabLabel: '클릭 업데이트',
        title: 'click event handler에서 시작',
        startCode: 'click event handler',
        startCodeCaption: 'DOM 이벤트 핸들러 내부',
        exampleCode: 'onClick={() => setState(...)}',
        exampleCaption: '동기 이벤트 흐름',
        feature: '사용자 입력에 가까운 높은 우선순위 update',
        miniPipeline: ['click', '높은 lane', '빠른 실행'],
      },
      {
        id: 'transition',
        tabLabel: 'Transition 업데이트',
        title: 'startTransition으로 표시한 비차단 update',
        startCode: 'startTransition(...)',
        startCodeCaption: 'transition 문맥 표시',
        exampleCode: 'startTransition(() => setState(next))',
        exampleCaption: 'UI 전환을 non-blocking으로 처리',
        feature: '입력 반응성을 위해 urgent update보다 뒤로 밀릴 수 있음',
        miniPipeline: ['startTransition', 'Transition Lane', '뒤로 밀림'],
      },
      {
        id: 'deferred',
        tabLabel: 'Deferred 업데이트',
        title: 'useDeferredValue로 소비 시점을 늦추기',
        startCode: 'useDeferredValue(value)',
        startCodeCaption: '값 소비 시점을 늦춤',
        exampleCode: 'const deferred = useDeferredValue(input)',
        exampleCaption: '입력은 즉시, 하위 렌더는 지연',
        feature: '입력 상태는 유지하고 무거운 하위 UI 렌더를 낮은 우선순위로 미룸',
        miniPipeline: ['useDeferredValue', 'deferred lane', '후속 렌더'],
      },
    ],
  },
  clickFlow: {
    number: '2',
    title: 'click update 전체 흐름',
    helper: '사용자가 바로 반응을 기대하는 update는 빠른 경로로 처리됩니다.',
    steps: [
      { label: 'click', description: 'DOM click event 발생' },
      { label: '높은 event priority', description: 'DiscreteEvent로 표시됨' },
      { label: '높은 우선순위 lane', description: '예: SyncLane 또는 그에 준하는 lane' },
      { label: 'scheduleUpdateOnFiber', description: 'fiber에 update 부착' },
      { label: 'Root Scheduler', description: 'ensureRootIsScheduled 호출' },
      { label: '빠른 실행', description: 'sync flush 또는 가장 빠른 callback' },
    ],
    note: '사용자가 바로 반응을 기대하는 update는 입력 반응성을 해치지 않도록 빠른 경로로 처리되어야 합니다.',
  },
  transitionFlow: {
    number: '3',
    title: 'transition update 전체 흐름',
    helper: 'Transition은 UI 전환을 non-blocking으로 만들기 위한 표시입니다.',
    steps: [
      { label: 'startTransition', description: 'transition 콜백을 표시' },
      { label: 'transition 문맥', description: 'requestUpdateLane에서 transition으로 분기' },
      { label: 'Transition Lane', description: '연속 transition은 같은 lane을 재사용' },
      { label: 'root pending work', description: 'markRootUpdated로 pendingLanes에 기록' },
      { label: 'Root Scheduler', description: 'ensureRootIsScheduled가 callback 등록' },
      { label: 'urgent update보다 뒤로', description: '입력 반응성 보호를 위해 후순위 처리' },
    ],
    note: 'Transition은 setTimeout과 다릅니다. 시간을 늦추는 것이 아니라, urgent update보다 늦게 처리될 수 있다는 표시입니다.',
  },
  deferredFlow: {
    number: '4',
    title: 'deferred update 전체 흐름',
    helper: 'Deferred update는 입력 상태는 유지하면서 하위 UI 렌더를 늦춥니다.',
    steps: [
      { label: 'useDeferredValue', description: '입력 값과 deferred 값을 분리' },
      { label: 'deferred lane 요청', description: '낮은 우선순위 lane으로 후속 렌더 예약' },
      { label: '낮은 우선순위 후속 렌더', description: '입력은 먼저 반영되고 deferred는 뒤로' },
      { label: '필요하면 더 늦게 처리', description: '바쁜 시점에는 다음 기회로 미뤄질 수 있음' },
    ],
    note: 'Deferred update는 debounce와 다릅니다. 값 자체를 바꾸는 것이 아니라, 소비 시점을 낮은 우선순위로 미루는 것입니다.',
  },
  commonRoot: {
    number: '5',
    title: '공통 root scheduling 구간',
    mergeLabel: '서로 다른 update도 root scheduling에서 합류',
    steps: [
      { label: 'requestUpdateLane', description: '현재 문맥을 보고 lane을 결정' },
      { label: 'scheduleUpdateOnFiber', description: 'fiber에 update를 연결' },
      { label: 'markRootUpdated', description: 'root.pendingLanes에 lane bit를 OR' },
      { label: 'ensureRootIsScheduled', description: 'Root Scheduler가 다음 실행 대상 선택' },
    ],
    explanation:
      '업데이트의 출발점은 달라도, root에 pending work로 기록된 뒤에는 Root Scheduler가 다음 실행 대상을 고르는 공통 경로로 합류합니다.',
  },
  schedulerExec: {
    number: '6',
    title: 'Scheduler task 실행 구간',
    topPipeline: ['getNextLanes', 'sync flush 또는 Scheduler callback', 'performWorkOnRoot'],
    decisionLabel: 'Sync? · Async?',
    sync: {
      title: 'sync path',
      points: [
        '높은 우선순위 lane (예: SyncLane)',
        '별도 Scheduler task 없이 빠른 flush 경로',
        'performSyncWorkOnRoot로 즉시 실행',
      ],
    },
    async: {
      title: 'async Scheduler task path',
      points: [
        '비동기 lane (Transition / Deferred 등)',
        'unstable_scheduleCallback으로 callback 등록',
        'Scheduler가 host task로 나중에 실행',
      ],
    },
  },
  yielding: {
    number: '7',
    title: 'yielding / continuation 구간',
    flow: ['작업이 길어짐', 'shouldYieldToHost', 'yield', 'continuation으로 재개'],
    frame1: {
      title: 'Frame 1',
      items: ['Fiber A 처리', 'Fiber B 처리', 'deadline 도달 → yield'],
      tag: 'yield',
    },
    frame2: {
      title: 'Frame 2',
      items: ['Fiber C부터 재개', 'Fiber D 처리', '완료'],
      tag: 'continuation',
    },
    bridge: { top: 'host에게 양보', bottom: 'continuation으로 재개' },
    note: 'yield는 렌더 취소가 아니라 일시 중단입니다. continuation은 처음부터 다시가 아니라 남은 작업을 이어 받습니다.',
  },
  codePath: {
    number: '8',
    title: '전체 코드 경로 지도',
    helper: '주요 파일과 함수를 한 화면에서 정리합니다.',
    cards: [
      {
        fileName: 'ReactFiberWorkLoop.js',
        description: 'update 진입과 render work 실행 경로',
        chips: ['requestUpdateLane', 'scheduleUpdateOnFiber', 'performWorkOnRoot'],
      },
      {
        fileName: 'ReactFiberLane.js',
        description: 'lane 정의와 다음 실행 대상 선택',
        chips: ['Lane definitions', 'getNextLanes', 'includesSyncLane'],
      },
      {
        fileName: 'ReactFiberRootScheduler.js',
        description: 'Root Scheduler 진입과 callback 등록',
        chips: [
          'ensureRootIsScheduled',
          'scheduleTaskForRootDuringMicrotask',
          'performWorkOnRootViaSchedulerTask',
        ],
      },
      {
        fileName: 'Scheduler.js',
        description: 'host task 실행과 양보 판단',
        chips: ['unstable_scheduleCallback', 'workLoop', 'shouldYieldToHost'],
      },
    ],
  },
  checklist: {
    number: '9',
    title: '실전 읽기 체크리스트',
    helper: '소스코드를 따라 읽을 때 매번 던질 다섯 가지 질문',
    items: [
      {
        question: '이 update는 어떤 lane을 받는가?',
        hint: 'requestUpdateLane / requestDeferredLane을 확인',
      },
      {
        question: 'root.pendingLanes에 어떻게 반영되는가?',
        hint: 'markRootUpdated와 pendingLanes를 확인',
      },
      {
        question: 'nextLanes는 어디서 선택되는가?',
        hint: 'getNextLanes 호출 지점을 확인',
      },
      {
        question: 'sync path인가, Scheduler task인가?',
        hint: 'includesSyncLane 또는 scheduleCallback 경로 확인',
      },
      {
        question: 'yield 가능한 렌더인가?',
        hint: 'shouldYieldToHost와 continuation 흐름 확인',
      },
    ],
  },
  quiz: {
    number: '10',
    title: '최종 퀴즈',
    helper: '앞선 흐름을 회수합니다. 정답 보기 버튼으로 확인해보세요.',
    showLabel: '정답 보기',
    hideLabel: '정답 숨기기',
    answerHeading: '정답',
    items: [
      {
        number: 'Q1',
        question: 'startTransition 안의 update는 어느 단계에서 일반 update와 갈라질까?',
        answer: 'requestUpdateLane 내부의 transition 문맥 분기',
        answerDetail:
          'requestUpdateLane이 현재 문맥을 보고 transition인지 확인한 뒤, Transition Lane을 부여합니다. 같은 함수 안에서 일반 update는 다른 분기를 따릅니다.',
      },
      {
        number: 'Q2',
        question: 'root에 여러 lane이 쌓였을 때 다음 렌더 대상을 고르는 함수는?',
        answer: 'getNextLanes',
        answerDetail:
          'root.pendingLanes 중에서 우선순위가 가장 높은 lane들을 골라 다음 render work의 대상으로 반환합니다. ReactFiberLane.js에 정의되어 있습니다.',
      },
      {
        number: 'Q3',
        question: '긴 렌더링 도중 main thread에 양보할지 판단하는 함수는?',
        answer: 'shouldYieldToHost',
        answerDetail:
          'Scheduler.js의 workLoop에서 호출되며, 현재 작업이 프레임 예산을 넘겼는지 확인합니다. 결과가 true면 workLoop가 중단되고 continuation으로 이어집니다.',
      },
    ],
  },
  finale: {
    progressLabel: '12/15 챕터 완료',
    copyLine1: 'Scheduler의 전체',
    copyLine2: '흐름을 정리했습니다.',
    copyLine3: '이제 Suspense와 복구 모델로.',
    primaryCta: 'Suspense / Error / Hydration 읽기',
    primaryHref: '/why-failable-render',
    secondaryCta: 'Scheduler 챕터 처음부터 다시 보기',
    secondaryHref: '/why-not-immediate',
  },
};

const en: FullFlowContent = {
  hero: {
    badge: 'Scheduler · 10/10',
    titleLines: ['Scheduler & priorities,', "let's restore the whole picture"],
    highlight: "let's restore the whole picture",
    subtitle:
      'See where click, transition, and deferred updates branch apart and where they merge back, all the way to render.',
    diagramTitle: 'Three updates merge into a single pipeline',
    sourceCards: [
      { id: 'click', label: 'click update' },
      { id: 'transition', label: 'transition update' },
      { id: 'deferred', label: 'deferred update' },
    ],
    mergeLabel: 'Merge into the common scheduling path',
    pipeline: [
      'Decide the lane',
      'root pending work',
      'Root Scheduler',
      'render work',
      'yield / continuation possible',
    ],
    commitLabel: 'commit',
  },
  question: {
    eyebrow: "Today's question",
    question:
      'Where do click, transition, and deferred updates branch apart, and where do they merge back?',
    iconNote: 'A one-page recap',
    cards: [
      {
        title: 'Branching point',
        description: 'Each update starts from a different context and picks its lane differently.',
      },
      {
        title: 'Common path',
        description: 'They all land in root.pendingLanes and join the Root Scheduler.',
      },
      {
        title: 'Execution path',
        description: 'They run either via sync flush or a Scheduler callback.',
      },
    ],
  },
  scenarios: {
    number: '1',
    title: 'Pick one of three update scenarios',
    helper: 'Tap a tab to compare the starting context for each update.',
    activeBadge: 'Selected',
    summaryHeading: { start: 'Start', example: 'Example', feature: 'Trait' },
    items: [
      {
        id: 'click',
        tabLabel: 'Click update',
        title: 'Starts inside a click event handler',
        startCode: 'click event handler',
        startCodeCaption: 'Inside a DOM event handler',
        exampleCode: 'onClick={() => setState(...)}',
        exampleCaption: 'Synchronous event flow',
        feature: 'High-priority update close to user input',
        miniPipeline: ['click', 'high lane', 'fast run'],
      },
      {
        id: 'transition',
        tabLabel: 'Transition update',
        title: 'Marked non-blocking by startTransition',
        startCode: 'startTransition(...)',
        startCodeCaption: 'Marks the transition context',
        exampleCode: 'startTransition(() => setState(next))',
        exampleCaption: 'Treat UI transition as non-blocking',
        feature: 'Can be pushed behind urgent updates to keep input responsive',
        miniPipeline: ['startTransition', 'Transition Lane', 'pushed back'],
      },
      {
        id: 'deferred',
        tabLabel: 'Deferred update',
        title: 'Delays when the value is consumed via useDeferredValue',
        startCode: 'useDeferredValue(value)',
        startCodeCaption: 'Defers when the value is consumed',
        exampleCode: 'const deferred = useDeferredValue(input)',
        exampleCaption: 'Input updates now, downstream renders later',
        feature: 'Keep input state immediate, push heavy downstream UI to lower priority',
        miniPipeline: ['useDeferredValue', 'deferred lane', 'follow-up render'],
      },
    ],
  },
  clickFlow: {
    number: '2',
    title: 'click update — end-to-end flow',
    helper: 'Updates the user expects to react to immediately take the fast path.',
    steps: [
      { label: 'click', description: 'A DOM click event fires' },
      { label: 'High event priority', description: 'Marked as a DiscreteEvent' },
      { label: 'High-priority lane', description: 'e.g. SyncLane or an equivalent' },
      { label: 'scheduleUpdateOnFiber', description: 'Attach the update on the fiber' },
      { label: 'Root Scheduler', description: 'ensureRootIsScheduled is called' },
      { label: 'Fast execution', description: 'Sync flush or the earliest callback' },
    ],
    note: 'Updates the user expects to react to immediately must take the fast path so input responsiveness is preserved.',
  },
  transitionFlow: {
    number: '3',
    title: 'transition update — end-to-end flow',
    helper: 'Transition marks a UI change as non-blocking.',
    steps: [
      { label: 'startTransition', description: 'Marks the callback as a transition' },
      {
        label: 'Transition context',
        description: 'requestUpdateLane branches on the transition context',
      },
      { label: 'Transition Lane', description: 'Consecutive transitions reuse the same lane' },
      {
        label: 'root pending work',
        description: 'markRootUpdated records the lane in pendingLanes',
      },
      { label: 'Root Scheduler', description: 'ensureRootIsScheduled registers a callback' },
      {
        label: 'Behind urgent updates',
        description: 'Pushed back to protect input responsiveness',
      },
    ],
    note: 'Transition is not setTimeout. It does not delay by time — it marks the update as something that may run behind urgent ones.',
  },
  deferredFlow: {
    number: '4',
    title: 'deferred update — end-to-end flow',
    helper: 'Deferred updates keep input state immediate while delaying downstream UI.',
    steps: [
      { label: 'useDeferredValue', description: 'Split the live and deferred values' },
      {
        label: 'Request a deferred lane',
        description: 'Schedule a follow-up render at a lower priority',
      },
      {
        label: 'Lower-priority follow-up render',
        description: 'Input reflects first, deferred catches up later',
      },
      {
        label: 'Pushed further if needed',
        description: 'Under load it can be deferred to the next chance',
      },
    ],
    note: 'Deferred updates are not debounce. The value is not changed — only the moment it is consumed shifts to a lower priority.',
  },
  commonRoot: {
    number: '5',
    title: 'Common root scheduling segment',
    mergeLabel: 'Different updates merge inside root scheduling',
    steps: [
      { label: 'requestUpdateLane', description: 'Decide the lane based on the current context' },
      { label: 'scheduleUpdateOnFiber', description: 'Attach the update to the fiber' },
      { label: 'markRootUpdated', description: 'OR the lane bit into root.pendingLanes' },
      {
        label: 'ensureRootIsScheduled',
        description: 'Root Scheduler picks what to run next',
      },
    ],
    explanation:
      'Updates start in different places, but once they are recorded as pending work on the root, they merge into the common path where the Root Scheduler picks the next target.',
  },
  schedulerExec: {
    number: '6',
    title: 'Scheduler task execution segment',
    topPipeline: ['getNextLanes', 'sync flush or Scheduler callback', 'performWorkOnRoot'],
    decisionLabel: 'Sync? · Async?',
    sync: {
      title: 'sync path',
      points: [
        'High-priority lane (e.g. SyncLane)',
        'A fast flush path without a separate Scheduler task',
        'performSyncWorkOnRoot runs it immediately',
      ],
    },
    async: {
      title: 'async Scheduler task path',
      points: [
        'Asynchronous lanes (Transition / Deferred, etc.)',
        'unstable_scheduleCallback registers a callback',
        'The Scheduler runs it later as a host task',
      ],
    },
  },
  yielding: {
    number: '7',
    title: 'yielding / continuation segment',
    flow: ['Work runs long', 'shouldYieldToHost', 'yield', 'Resume via continuation'],
    frame1: {
      title: 'Frame 1',
      items: ['Process Fiber A', 'Process Fiber B', 'Reach deadline → yield'],
      tag: 'yield',
    },
    frame2: {
      title: 'Frame 2',
      items: ['Resume from Fiber C', 'Process Fiber D', 'Done'],
      tag: 'continuation',
    },
    bridge: { top: 'Yield to the host', bottom: 'Resume via continuation' },
    note: 'Yielding is a pause, not a cancel. Continuation resumes from where it left off, not from the beginning.',
  },
  codePath: {
    number: '8',
    title: 'End-to-end code path map',
    helper: 'Major files and functions, organized into one screen.',
    cards: [
      {
        fileName: 'ReactFiberWorkLoop.js',
        description: 'Update entry and render work execution path',
        chips: ['requestUpdateLane', 'scheduleUpdateOnFiber', 'performWorkOnRoot'],
      },
      {
        fileName: 'ReactFiberLane.js',
        description: 'Lane definitions and next-target selection',
        chips: ['Lane definitions', 'getNextLanes', 'includesSyncLane'],
      },
      {
        fileName: 'ReactFiberRootScheduler.js',
        description: 'Root Scheduler entry and callback registration',
        chips: [
          'ensureRootIsScheduled',
          'scheduleTaskForRootDuringMicrotask',
          'performWorkOnRootViaSchedulerTask',
        ],
      },
      {
        fileName: 'Scheduler.js',
        description: 'Host task execution and yielding decisions',
        chips: ['unstable_scheduleCallback', 'workLoop', 'shouldYieldToHost'],
      },
    ],
  },
  checklist: {
    number: '9',
    title: 'Source-reading checklist',
    helper: 'Five questions to ask every time you read the source code.',
    items: [
      {
        question: 'What lane does this update receive?',
        hint: 'Check requestUpdateLane / requestDeferredLane',
      },
      {
        question: 'How is it reflected in root.pendingLanes?',
        hint: 'Check markRootUpdated and pendingLanes',
      },
      {
        question: 'Where are nextLanes chosen?',
        hint: 'Check the call site of getNextLanes',
      },
      {
        question: 'Is this a sync path or a Scheduler task?',
        hint: 'Check includesSyncLane or the scheduleCallback path',
      },
      {
        question: 'Is this render yieldable?',
        hint: 'Check shouldYieldToHost and the continuation flow',
      },
    ],
  },
  quiz: {
    number: '10',
    title: 'Final quiz',
    helper: 'A quick recap. Reveal each answer to check yourself.',
    showLabel: 'Show answer',
    hideLabel: 'Hide answer',
    answerHeading: 'Answer',
    items: [
      {
        number: 'Q1',
        question: 'Where does an update inside startTransition branch off from a regular update?',
        answer: 'Inside requestUpdateLane, at the transition-context branch',
        answerDetail:
          'requestUpdateLane reads the current context, detects the transition, and assigns a Transition Lane. Regular updates take a different branch in the same function.',
      },
      {
        number: 'Q2',
        question:
          'When multiple lanes are pending on the root, which function picks the next render target?',
        answer: 'getNextLanes',
        answerDetail:
          'It selects the highest-priority lanes from root.pendingLanes and returns them as the target for the next render. It lives in ReactFiberLane.js.',
      },
      {
        number: 'Q3',
        question:
          'Which function decides whether to yield to the main thread during a long render?',
        answer: 'shouldYieldToHost',
        answerDetail:
          "Called inside Scheduler.js's workLoop. If the current work has exceeded the frame budget it returns true, the workLoop breaks, and execution resumes via a continuation.",
      },
    ],
  },
  finale: {
    progressLabel: 'Chapter 12 of 15 complete',
    copyLine1: 'You pulled together the',
    copyLine2: "Scheduler's whole flow.",
    copyLine3: 'Now Suspense and recovery.',
    primaryCta: 'Read Suspense / Error / Hydration',
    primaryHref: '/why-failable-render',
    secondaryCta: 'Review the Scheduler from the start',
    secondaryHref: '/why-not-immediate',
  },
};

export const fullFlowContent: Record<Locale, FullFlowContent> = { ko, en };

import type { Locale } from '@it-tech-blog/preferences';

export type YieldAccent = 'blue' | 'teal' | 'violet' | 'emerald' | 'rose';

export type ConceptCard = { title: string; description: string; accent: YieldAccent };

export type ProblemCard = { title: string; description: string; accent: YieldAccent };

export type WorkLoopStep = {
  title: string;
  description: string;
  emphasis?: 'yield' | 'check' | 'continue';
  accent: YieldAccent;
};

export type DeadlineMarker = {
  label: string;
  phase: 'work' | 'budget' | 'overflow' | 'yield';
};

export type SimulatorStatus =
  | 'idle'
  | 'running'
  | 'yielded'
  | 'input-handled'
  | 'continued'
  | 'completed';

export type MissionCard = { title: string; description: string; accent: YieldAccent };

export type TakeawayCard = {
  number: string;
  title: string;
  description: string;
  accent: YieldAccent;
};

export type RenderYieldingContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    highlight: string;
    subtitle: string;
    mainFlow: string[];
    frame1: { title: string; items: string[]; yieldBadge: string };
    frame2: { title: string; items: string[]; continuationBadge: string };
    bridge: { top: string; bottom: string };
  };
  question: {
    eyebrow: string;
    question: string;
    cards: ConceptCard[];
  };
  problem: {
    number: string;
    title: string;
    mainCopy: string;
    timelineTitle: string;
    timelineLabels: string[];
    badInputLabel: string;
    busyLabel: string;
    cards: ProblemCard[];
  };
  workLoop: {
    number: string;
    title: string;
    steps: WorkLoopStep[];
    supportingCopy: string;
  };
  shouldYield: {
    number: string;
    title: string;
    mainConcept: string;
    formula: string;
    continueCase: {
      title: string;
      condition: string;
      result: string[];
    };
    yieldCase: {
      title: string;
      condition: string;
      result: string[];
    };
    note: string;
  };
  deadline: {
    number: string;
    title: string;
    markers: DeadlineMarker[];
    description: string;
  };
  yieldMoment: {
    number: string;
    title: string;
    continueCard: { title: string; description: string };
    yieldCard: { title: string; description: string };
    conditionFlow: string[];
  };
  continuation: {
    number: string;
    title: string;
    mainCopy: string;
    flow: string[];
    frame1: { title: string; items: string[]; tag: string };
    frame2: { title: string; items: string[]; tag: string };
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
    helper: string;
    buttons: {
      start: string;
      input: string;
      resume: string;
      reset: string;
    };
    timelineTitle: string;
    frame1Title: string;
    frame2Title: string;
    fiberItems: { frame: 1 | 2; label: string }[];
    statusTitle: string;
    statusLabels: Record<SimulatorStatus, string>;
    inputTaskLabel: string;
    yieldMarker: string;
    completeMarker: string;
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

const SCHEDULER_JS_URL =
  'https://github.com/facebook/react/blob/main/packages/scheduler/src/forks/Scheduler.js';

const CODE_A = `if (currentTask.expirationTime > currentTime && shouldYieldToHost()) {
  break;
}`;

const CODE_B = `const timeElapsed = getCurrentTime() - startTime;

if (timeElapsed < frameInterval) {
  return false;
}

return true;`;

const ko: RenderYieldingContent = {
  hero: {
    badge: 'Scheduler · 9/10단계',
    titleLines: ['렌더링은 끝날 때까지', '무조건 밀어붙이지 않는다'],
    highlight: '무조건 밀어붙이지 않는다',
    subtitle:
      '무거운 렌더링 중에도 입력이 덜 막히는 이유는, React가 작업을 나누고 host에게 양보할 수 있기 때문입니다.',
    mainFlow: [
      '긴 렌더링 시작',
      'shouldYieldToHost()',
      'yield',
      'continuation',
      '다음 frame에서 재개',
    ],
    frame1: {
      title: 'Frame 1',
      items: ['Fiber A 처리', 'Fiber B 처리', 'deadline 도달 → yield'],
      yieldBadge: 'yield',
    },
    frame2: {
      title: 'Frame 2',
      items: ['Fiber C부터 재개', 'Fiber D 처리', '완료'],
      continuationBadge: 'continuation',
    },
    bridge: { top: 'host에게 양보', bottom: '다음 기회에 재개' },
  },
  question: {
    eyebrow: '오늘의 질문',
    question: '무거운 렌더링 중에도 입력이 덜 막히는 이유는 무엇일까?',
    cards: [
      {
        title: 'main thread 점유',
        description: '긴 작업은 입력과 페인트를 지연시킬 수 있음',
        accent: 'rose',
      },
      {
        title: 'host에게 양보',
        description: '프레임 예산을 넘기면 제어권을 돌려줌',
        accent: 'blue',
      },
      {
        title: 'continuation으로 재개',
        description: '남은 작업을 다음 실행 기회에 이어서 처리',
        accent: 'emerald',
      },
    ],
  },
  problem: {
    number: '1',
    title: '긴 렌더링이 문제인 이유',
    mainCopy:
      '한 번의 렌더링 작업이 오래 이어지면 브라우저는 입력, 스크롤, 페인트를 제때 처리하지 못할 수 있습니다.',
    timelineTitle: '한 프레임이 긴 작업으로 가득 찬 경우',
    timelineLabels: ['Frame start', 'Fiber A', 'Fiber B', 'Fiber C', '입력 대기...', 'Paint 지연'],
    badInputLabel: '입력 지연',
    busyLabel: 'main thread busy',
    cards: [
      {
        title: '긴 render work',
        description: '많은 Fiber를 한 번에 처리하려고 함',
        accent: 'blue',
      },
      {
        title: '입력 대기',
        description: '사용자 입력이 main thread 뒤에서 기다림',
        accent: 'rose',
      },
      {
        title: '체감 지연',
        description: '타이핑, 클릭, 스크롤이 늦게 반응하는 것처럼 느껴짐',
        accent: 'rose',
      },
    ],
  },
  workLoop: {
    number: '2',
    title: 'Scheduler workLoop 흐름',
    steps: [
      { title: '현재 task 선택', description: 'taskQueue의 head를 꺼낸다', accent: 'blue' },
      {
        title: '만료 여부 확인',
        description: 'expirationTime이 지났는지 검사',
        emphasis: 'check',
        accent: 'blue',
      },
      {
        title: 'yield 필요 여부 확인',
        description: 'shouldYieldToHost() 호출',
        emphasis: 'check',
        accent: 'teal',
      },
      {
        title: '가능하면 실행 계속',
        description: 'callback을 호출하고 다음 task로',
        emphasis: 'continue',
        accent: 'emerald',
      },
      {
        title: '필요하면 루프 중단',
        description: 'workLoop를 빠져나가고 host에 양보',
        emphasis: 'yield',
        accent: 'violet',
      },
    ],
    supportingCopy:
      'Scheduler의 workLoop는 task를 처리하면서 현재 작업을 계속 밀어붙일지, 아니면 host에게 제어권을 돌려줄지 확인합니다.',
  },
  shouldYield: {
    number: '3',
    title: 'shouldYieldToHost',
    mainConcept: '현재 작업이 main thread를 오래 점유했는지 확인합니다.',
    formula: 'timeElapsed = getCurrentTime() - startTime',
    continueCase: {
      title: '계속 진행',
      condition: 'timeElapsed < frameInterval',
      result: ['아직 프레임 예산 안쪽', '계속 진행'],
    },
    yieldCase: {
      title: 'yield 고려',
      condition: 'timeElapsed >= frameInterval',
      result: ['프레임 예산 초과', 'host에게 양보 고려'],
    },
    note: '특정 숫자를 외우는 것이 아니라, 작업 시간이 길어졌는지를 기준으로 양보 여부를 판단합니다.',
  },
  deadline: {
    number: '4',
    title: 'deadline과 frame interval',
    markers: [
      { label: '작업 시작', phase: 'work' },
      { label: 'Fiber A', phase: 'work' },
      { label: 'Fiber B', phase: 'budget' },
      { label: 'frame interval 초과', phase: 'overflow' },
      { label: 'yield 고려', phase: 'yield' },
    ],
    description:
      'React는 브라우저가 입력과 페인트를 처리할 기회를 얻을 수 있도록 긴 작업을 한 번에 끝까지 밀어붙이지 않을 수 있습니다.',
  },
  yieldMoment: {
    number: '5',
    title: 'yield 발생 시점',
    continueCard: {
      title: '계속 진행',
      description:
        'task가 만료되었거나, 아직 host에게 양보할 필요가 없을 때 작업을 계속 수행합니다.',
    },
    yieldCard: {
      title: 'yield 발생',
      description:
        '현재 task가 아직 만료되지 않았고, shouldYieldToHost()가 true라면 workLoop를 빠져나갑니다.',
    },
    conditionFlow: ['currentTask', 'not expired', 'shouldYieldToHost() === true', 'break'],
  },
  continuation: {
    number: '6',
    title: 'continuation으로 재개',
    mainCopy:
      'yield는 렌더링을 완전히 취소한다는 뜻이 아닙니다. 끝나지 않은 작업은 continuation으로 남고, 다음 실행 기회에 이어서 처리될 수 있습니다.',
    flow: ['렌더링 중단', 'continuation callback 반환', '다음 기회에 다시 실행', '남은 Fiber 처리'],
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
  },
  code: {
    number: '7',
    title: '실제 코드 미리보기',
    cardA: {
      title: 'Scheduler.js - workLoop',
      fileLabel: 'Scheduler.js',
      code: CODE_A,
    },
    cardB: {
      title: 'Scheduler.js - shouldYieldToHost',
      fileLabel: 'Scheduler.js',
      code: CODE_B,
    },
    explanationTitle: '설명',
    explanation: [
      'workLoop는 현재 task가 아직 만료되지 않았고 host에게 양보해야 한다면 루프를 중단합니다.',
      'shouldYieldToHost는 현재 작업이 프레임 예산을 넘겼는지 확인합니다.',
    ],
    button: { label: 'GitHub에서 코드 보기', href: SCHEDULER_JS_URL },
  },
  simulator: {
    number: '8',
    title: '중단·재개 시뮬레이터',
    helper:
      '긴 렌더링이 한 번에 끝나지 않고, 중간에 host에게 양보한 뒤 다음 frame에서 이어지는 흐름을 확인합니다.',
    buttons: {
      start: '긴 렌더링 시작',
      input: '사용자 입력 발생',
      resume: '다음 frame으로 재개',
      reset: '초기화',
    },
    timelineTitle: '프레임 타임라인',
    frame1Title: 'Frame 1',
    frame2Title: 'Frame 2',
    fiberItems: [
      { frame: 1, label: 'Fiber A' },
      { frame: 1, label: 'Fiber B' },
      { frame: 2, label: 'Fiber C' },
      { frame: 2, label: 'Fiber D' },
    ],
    statusTitle: '현재 상태',
    statusLabels: {
      idle: '대기 중',
      running: '렌더링 작업 실행 중',
      yielded: 'host에게 양보함',
      'input-handled': '사용자 입력 먼저 처리됨',
      continued: 'continuation으로 재개됨',
      completed: '작업 완료',
    },
    inputTaskLabel: '사용자 입력 task',
    yieldMarker: 'deadline → yield',
    completeMarker: '완료',
  },
  mission: {
    number: '9',
    title: '직접 코드에서 따라가 보기',
    cards: [
      {
        title: 'Scheduler.js에서 workLoop를 찾는다',
        description: 'task를 처리하는 반복 루프가 어디에 있는지 확인합니다.',
        accent: 'blue',
      },
      {
        title: 'shouldYieldToHost 호출 지점을 본다',
        description: '언제 host에게 양보할지 판단하는 조건을 찾습니다.',
        accent: 'teal',
      },
      {
        title: 'frameInterval 비교를 확인한다',
        description: '작업 시간이 프레임 예산을 넘겼는지 보는 흐름을 확인합니다.',
        accent: 'violet',
      },
      {
        title: 'continuation이 어떻게 이어지는지 Root Scheduler 파일까지 연결해본다',
        description: 'yield 이후 남은 작업이 다음 실행 기회에 이어지는 경로를 추적합니다.',
        accent: 'emerald',
      },
    ],
  },
  takeaways: {
    number: '10',
    title: '핵심 정리',
    cards: [
      {
        number: '01',
        title: '긴 렌더링은 중단될 수 있다.',
        description: 'React는 모든 render work를 끝까지 한 번에 밀어붙이지 않을 수 있습니다.',
        accent: 'blue',
      },
      {
        number: '02',
        title: 'shouldYieldToHost가 양보 시점을 판단한다.',
        description: '작업이 오래 이어졌는지 확인하고 host에게 제어권을 돌려줄 수 있습니다.',
        accent: 'teal',
      },
      {
        number: '03',
        title: 'React는 continuation을 통해 이후에 다시 이어간다.',
        description: 'yield는 취소가 아니라, 남은 작업을 다음 기회에 이어가기 위한 중단입니다.',
        accent: 'emerald',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '전체 흐름 복습',
    description: '클릭/전환/지연 업데이트가 한 화면에서 어떻게 다르게 흐르는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/scheduler-overall-flow',
  },
};

const en: RenderYieldingContent = {
  hero: {
    badge: 'Scheduler · 9/10',
    titleLines: ['Rendering does not always', 'push through to the end'],
    highlight: 'push through to the end',
    subtitle:
      "Even during heavy rendering, input doesn't feel as blocked because React can split work and yield to the host.",
    mainFlow: [
      'Heavy render begins',
      'shouldYieldToHost()',
      'yield',
      'continuation',
      'Resume in the next frame',
    ],
    frame1: {
      title: 'Frame 1',
      items: ['Process Fiber A', 'Process Fiber B', 'Reach deadline → yield'],
      yieldBadge: 'yield',
    },
    frame2: {
      title: 'Frame 2',
      items: ['Resume from Fiber C', 'Process Fiber D', 'Done'],
      continuationBadge: 'continuation',
    },
    bridge: { top: 'Yield to the host', bottom: 'Resume next chance' },
  },
  question: {
    eyebrow: "Today's question",
    question: 'Why does input still feel responsive during heavy rendering?',
    cards: [
      {
        title: 'Main-thread occupancy',
        description: 'Long work can delay input and paint',
        accent: 'rose',
      },
      {
        title: 'Yield to the host',
        description: 'Hand control back if the frame budget is exceeded',
        accent: 'blue',
      },
      {
        title: 'Resume via continuation',
        description: 'Pick up the remaining work in the next chance',
        accent: 'emerald',
      },
    ],
  },
  problem: {
    number: '1',
    title: 'Why long renders are a problem',
    mainCopy:
      "When a single render runs too long, the browser can't process input, scrolling, and paint on time.",
    timelineTitle: 'A single frame fully occupied by long work',
    timelineLabels: [
      'Frame start',
      'Fiber A',
      'Fiber B',
      'Fiber C',
      'Input waits...',
      'Paint delayed',
    ],
    badInputLabel: 'Input delayed',
    busyLabel: 'main thread busy',
    cards: [
      {
        title: 'Long render work',
        description: 'Tries to process many fibers at once',
        accent: 'blue',
      },
      {
        title: 'Input queued',
        description: 'User input waits behind the busy main thread',
        accent: 'rose',
      },
      {
        title: 'Perceived lag',
        description: 'Typing, clicking, scrolling feel late to react',
        accent: 'rose',
      },
    ],
  },
  workLoop: {
    number: '2',
    title: 'Scheduler workLoop flow',
    steps: [
      { title: 'Pick current task', description: 'Take the head of taskQueue', accent: 'blue' },
      {
        title: 'Check expiration',
        description: 'See if expirationTime has passed',
        emphasis: 'check',
        accent: 'blue',
      },
      {
        title: 'Check if yield is needed',
        description: 'Call shouldYieldToHost()',
        emphasis: 'check',
        accent: 'teal',
      },
      {
        title: 'Continue if possible',
        description: 'Run the callback and move to the next task',
        emphasis: 'continue',
        accent: 'emerald',
      },
      {
        title: 'Break the loop if needed',
        description: 'Exit workLoop and hand off to the host',
        emphasis: 'yield',
        accent: 'violet',
      },
    ],
    supportingCopy:
      "The Scheduler's workLoop decides, while processing tasks, whether to keep pushing forward or return control to the host.",
  },
  shouldYield: {
    number: '3',
    title: 'shouldYieldToHost',
    mainConcept: 'Checks whether the current work has been holding the main thread too long.',
    formula: 'timeElapsed = getCurrentTime() - startTime',
    continueCase: {
      title: 'Continue',
      condition: 'timeElapsed < frameInterval',
      result: ['Still within the frame budget', 'Keep going'],
    },
    yieldCase: {
      title: 'Consider yielding',
      condition: 'timeElapsed >= frameInterval',
      result: ['Frame budget exceeded', 'Consider yielding to the host'],
    },
    note: 'The point is not memorizing a number — it is judging whether the work has been running long enough to yield.',
  },
  deadline: {
    number: '4',
    title: 'Deadline & frame interval',
    markers: [
      { label: 'Work starts', phase: 'work' },
      { label: 'Fiber A', phase: 'work' },
      { label: 'Fiber B', phase: 'budget' },
      { label: 'frame interval exceeded', phase: 'overflow' },
      { label: 'Consider yielding', phase: 'yield' },
    ],
    description:
      'React may avoid pushing long work all the way to completion so the browser gets a chance to handle input and paint.',
  },
  yieldMoment: {
    number: '5',
    title: 'When yield happens',
    continueCard: {
      title: 'Continue',
      description:
        "When the task has expired, or there's no reason to yield yet, work keeps going.",
    },
    yieldCard: {
      title: 'Yield',
      description:
        'If the current task has not expired and shouldYieldToHost() is true, we exit the workLoop.',
    },
    conditionFlow: ['currentTask', 'not expired', 'shouldYieldToHost() === true', 'break'],
  },
  continuation: {
    number: '6',
    title: 'Resuming via continuation',
    mainCopy:
      'Yielding does not mean cancelling the render. Unfinished work remains as a continuation and can be resumed at the next chance.',
    flow: [
      'Render pauses',
      'Returns a continuation callback',
      'Runs again on the next chance',
      'Process the remaining fibers',
    ],
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
  },
  code: {
    number: '7',
    title: 'Source code preview',
    cardA: {
      title: 'Scheduler.js - workLoop',
      fileLabel: 'Scheduler.js',
      code: CODE_A,
    },
    cardB: {
      title: 'Scheduler.js - shouldYieldToHost',
      fileLabel: 'Scheduler.js',
      code: CODE_B,
    },
    explanationTitle: 'Explanation',
    explanation: [
      'workLoop breaks out when the current task is not yet expired and yielding is needed.',
      'shouldYieldToHost checks whether the current work exceeded the frame budget.',
    ],
    button: { label: 'See the code on GitHub', href: SCHEDULER_JS_URL },
  },
  simulator: {
    number: '8',
    title: 'Pause & resume simulator',
    helper:
      "Watch how a long render doesn't finish in one go — it yields mid-way and resumes in the next frame.",
    buttons: {
      start: 'Start long render',
      input: 'Fire user input',
      resume: 'Resume next frame',
      reset: 'Reset',
    },
    timelineTitle: 'Frame timeline',
    frame1Title: 'Frame 1',
    frame2Title: 'Frame 2',
    fiberItems: [
      { frame: 1, label: 'Fiber A' },
      { frame: 1, label: 'Fiber B' },
      { frame: 2, label: 'Fiber C' },
      { frame: 2, label: 'Fiber D' },
    ],
    statusTitle: 'Current status',
    statusLabels: {
      idle: 'Idle',
      running: 'Render work running',
      yielded: 'Yielded to host',
      'input-handled': 'User input handled first',
      continued: 'Resumed via continuation',
      completed: 'Work complete',
    },
    inputTaskLabel: 'User input task',
    yieldMarker: 'deadline → yield',
    completeMarker: 'complete',
  },
  mission: {
    number: '9',
    title: 'Walk it in the source',
    cards: [
      {
        title: 'Find workLoop in Scheduler.js',
        description: 'Locate the loop that processes tasks.',
        accent: 'blue',
      },
      {
        title: 'See where shouldYieldToHost is called',
        description: 'Find the condition that decides when to yield.',
        accent: 'teal',
      },
      {
        title: 'Check the frameInterval comparison',
        description: 'See how the elapsed time is compared to the budget.',
        accent: 'violet',
      },
      {
        title: 'Trace continuation through Root Scheduler',
        description: 'Follow how unfinished work resumes after a yield.',
        accent: 'emerald',
      },
    ],
  },
  takeaways: {
    number: '10',
    title: 'Key takeaways',
    cards: [
      {
        number: '01',
        title: 'Long renders can be paused.',
        description: "React doesn't always push all render work to completion in one go.",
        accent: 'blue',
      },
      {
        number: '02',
        title: 'shouldYieldToHost decides when to yield.',
        description: 'It can hand control back to the host once work has run long enough.',
        accent: 'teal',
      },
      {
        number: '03',
        title: 'React continues via continuation.',
        description: 'Yielding is a pause, not a cancel — the remaining work resumes later.',
        accent: 'emerald',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'end-to-end recap',
    description: 'See in one place how click / transition / deferred renders differ.',
    cta: 'Go to the next page',
    href: '/scheduler-overall-flow',
  },
};

export const renderYieldingContent: Record<Locale, RenderYieldingContent> = { ko, en };

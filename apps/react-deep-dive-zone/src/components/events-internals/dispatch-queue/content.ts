import type { Locale } from '@it-tech-blog/preferences';

export type Tone = 'sky' | 'cyan' | 'teal' | 'emerald' | 'violet' | 'blue' | 'amber' | 'rose';

export type CollectedListener = {
  step: string;
  label: string;
  phase: string;
  tone: 'violet' | 'teal' | 'rose';
};

export type TimelineEntry = {
  step: string;
  label: string;
  phase?: string;
  tone: 'violet' | 'teal' | 'rose';
  blocked?: boolean;
};

export type FlowStep = {
  title: string;
  body: string;
  code?: string;
  tone: Tone;
};

export type DispatchQueueOrderContent = {
  hero: {
    badges: { label: string; tone: 'blue' | 'cyan' }[];
    titleLines: [string, string];
    description: string;
    listenerTitle: string;
    collected: CollectedListener[];
    diagram: {
      title: string;
      queueTitle: string;
      eventLabel: string;
      listenersLabel: string;
      listeners: CollectedListener[];
      timelineTitle: string;
      timeline: TimelineEntry[];
    };
  };
  question: {
    eyebrow: string;
    title: string;
    badges: string[];
  };
  separation: {
    step: number;
    eyebrow: string;
    title: string;
    cards: { title: string; body: string; tone: 'violet' | 'teal' }[];
    note: string;
  };
  structure: {
    step: number;
    eyebrow: string;
    title: string;
    queue: {
      title: string;
      entry: string;
      event: string;
      listenersLabel: string;
      listeners: string[];
    };
    listener: {
      title: string;
      rows: { key: string; value: string }[];
    };
  };
  flow: {
    step: number;
    eyebrow: string;
    title: string;
    steps: FlowStep[];
  };
  phases: {
    step: number;
    eyebrow: string;
    title: string;
    capture: {
      title: string;
      body: string;
      pathTitle: string;
      path: string[];
      exampleTitle: string;
      example: string[];
    };
    bubble: {
      title: string;
      body: string;
      pathTitle: string;
      path: string[];
      exampleTitle: string;
      example: string[];
    };
  };
  stop: {
    step: number;
    eyebrow: string;
    title: string;
    steps: FlowStep[];
  };
  currentTarget: {
    step: number;
    eyebrow: string;
    title: string;
    steps: {
      title: string;
      body: string;
      inspectorTitle?: string;
      inspector?: { key: string; value: string; highlight?: boolean }[];
      code?: string;
    }[];
  };
  realCode: {
    step: number;
    eyebrow: string;
    title: string;
    fileLabel: string;
    code1: string;
    code1Caption: string;
    code2: string;
    code2Caption: string;
    explanation: { label: string; body: string };
    fileLocation: { label: string; path: string };
    button: { label: string; href: string };
  };
  timeline: {
    step: number;
    eyebrow: string;
    title: string;
    code: string;
    cases: {
      key: 'none' | 'stopped';
      title: string;
      entries: TimelineEntry[];
      note: string;
    }[];
    toggles: { value: 'none' | 'stopped'; label: string }[];
    defaultCase: 'none' | 'stopped';
  };
  mission: {
    step: number;
    eyebrow: string;
    title: string;
    items: { title: string; body: string }[];
  };
  takeaways: {
    step: number;
    eyebrow: string;
    title: string;
    cards: { title: string; body: string; tone: Tone }[];
  };
  cta: {
    text: string;
    href: string;
  };
};

const REAL_CODE_1 = `// 코드 1: dispatchQueue 실행 진입
processDispatchQueue(dispatchQueue, eventSystemFlags);`;

const REAL_CODE_2 = `// 코드 2: stopPropagation 체크
for (let i = 0; i < dispatchListeners.length; i++) {
  const { instance, currentTarget, listener } = dispatchListeners[i];

  if (instance !== previousInstance && event.isPropagationStopped()) {
    return;
  }

  executeDispatch(event, listener, currentTarget);
  previousInstance = instance;
}`;

const TIMELINE_CODE = `<section onClickCapture={handleSectionCapture}>
  <div onClick={handleDivClick}>
    <button onClick={handleButtonClick}>저장</button>
  </div>
</section>`;

const TIMELINE_CODE_EN = `<section onClickCapture={handleSectionCapture}>
  <div onClick={handleDivClick}>
    <button onClick={handleButtonClick}>Save</button>
  </div>
</section>`;

const COLLECTED_KO: CollectedListener[] = [
  { step: '1', label: 'section capture', phase: 'onClickCapture', tone: 'violet' },
  { step: '2', label: 'button click', phase: 'onClick', tone: 'teal' },
  { step: '3', label: 'div click', phase: 'onClick', tone: 'teal' },
];

const COLLECTED_EN: CollectedListener[] = [
  { step: '1', label: 'section capture', phase: 'onClickCapture', tone: 'violet' },
  { step: '2', label: 'button click', phase: 'onClick', tone: 'teal' },
  { step: '3', label: 'div click', phase: 'onClick', tone: 'teal' },
];

const ko: DispatchQueueOrderContent = {
  hero: {
    badges: [
      { label: 'React 내부 탐구', tone: 'blue' },
      { label: '이벤트 시스템 심화', tone: 'cyan' },
    ],
    titleLines: ['React는 listener를 찾는 즉시', '바로 실행하지 않는다'],
    description:
      '먼저 dispatchQueue를 만들고, phase 규칙에 따라 정해진 순서로 handler를 실행합니다.',
    listenerTitle: '수집된 listener 목록 예시',
    collected: COLLECTED_KO,
    diagram: {
      title: 'dispatchQueue가 실행 타임라인으로 바뀌는 과정',
      queueTitle: 'dispatchQueue',
      eventLabel: 'SyntheticEvent(click)',
      listenersLabel: 'listeners[]',
      listeners: COLLECTED_KO,
      timelineTitle: '실행 타임라인 (phase 규칙 적용)',
      timeline: [
        { step: '1', label: 'section capture', phase: 'capture · 부모 → 자식', tone: 'violet' },
        { step: '2', label: 'button click', phase: 'bubble · target', tone: 'teal' },
        { step: '3', label: 'div click', phase: 'bubble · 자식 → 부모', tone: 'teal' },
      ],
    },
  },
  question: {
    eyebrow: '오늘의 질문',
    title: 'section capture, button click, div click은 어떤 순서로 실제 실행될까?',
    badges: [
      '수집과 실행은 분리된 과정',
      'phase 규칙에 따라 순서가 결정됨',
      'stopPropagation은 중간에서 흐름을 끊는다',
    ],
  },
  separation: {
    step: 1,
    eyebrow: 'collect-vs-execute',
    title: 'listener 수집과 실행의 분리',
    cards: [
      {
        title: '1단계: listener 수집 (accumulate)',
        body: 'Fiber 경로를 따라 모든 관련 listener를 찾아 dispatchQueue에 담는다.',
        tone: 'teal',
      },
      {
        title: '2단계: dispatchQueue 실행 (process)',
        body: 'phase 규칙에 따라 정해진 순서로 handler를 실행한다.',
        tone: 'violet',
      },
    ],
    note: 'React는 성능과 일관성을 위해 수집과 실행을 명확히 분리합니다.',
  },
  structure: {
    step: 2,
    eyebrow: 'dispatch-queue-structure',
    title: 'dispatchQueue 구조',
    queue: {
      title: 'dispatchQueue',
      entry: 'entry(0)',
      event: 'SyntheticEvent(click)',
      listenersLabel: 'listeners: Array<DispatchListener>',
      listeners: [
        '#1 DispatchListener (capture)',
        '#2 DispatchListener (target)',
        '#3 DispatchListener (bubble)',
      ],
    },
    listener: {
      title: 'DispatchListener 구조',
      rows: [
        { key: 'currentTarget', value: 'DOM node' },
        { key: 'instance', value: 'Fiber' },
        { key: 'listener', value: 'Function' },
        { key: 'capture', value: 'boolean' },
      ],
    },
  },
  flow: {
    step: 3,
    eyebrow: 'process-dispatch-queue',
    title: 'processDispatchQueue 흐름',
    steps: [
      {
        title: 'dispatchQueue 순회',
        body: 'entry를 순서대로 꺼낸다.',
        tone: 'sky',
      },
      {
        title: 'event와 listeners 추출',
        body: 'entry.event와 entry.listeners를 꺼낸다.',
        tone: 'cyan',
      },
      {
        title: 'processDispatchQueueItemsInOrder 호출',
        body: 'capture/bubble 규칙에 따라 listeners를 순서대로 실행한다.',
        tone: 'violet',
      },
      {
        title: 'executeDispatch로 각 listener 실행',
        body: 'currentTarget을 주입 후 handler를 호출한다.',
        tone: 'emerald',
      },
    ],
  },
  phases: {
    step: 4,
    eyebrow: 'capture-bubble-order',
    title: 'capture / bubble 실행 순서',
    capture: {
      title: 'Capture phase (부모 → 자식)',
      body: '이벤트가 아래로 내려가기 전에, 부모에서 자식 방향으로 처리됩니다.',
      pathTitle: '실행 경로',
      path: ['Section (ancestor)', 'Div (parent)', 'Button (target)'],
      exampleTitle: '실제 예시',
      example: ['1 section capture'],
    },
    bubble: {
      title: 'Bubble phase (자식 → 부모)',
      body: '이벤트가 위로 올라오면서, 자식부터 부모 순으로 처리됩니다.',
      pathTitle: '실행 경로',
      path: ['Button (target)', 'Div (parent)', 'Section (ancestor)'],
      exampleTitle: '실제 예시',
      example: ['1 button click', '2 div click'],
    },
  },
  stop: {
    step: 5,
    eyebrow: 'stop-propagation',
    title: 'stopPropagation이 끊는 지점',
    steps: [
      {
        title: 'button handler 실행',
        body: 'bubble phase에서 button의 onClick 실행',
        code: 'e.stopPropagation();',
        tone: 'teal',
      },
      {
        title: 'e.stopPropagation() 호출',
        body: 'event 객체 내부 flag가 true로 변경된다.',
        code: 'isPropagationStopped = true',
        tone: 'violet',
      },
      {
        title: 'isPropagationStopped() === true',
        body: '이후 listener 실행 전에 중단 여부를 확인한다.',
        code: 'event.isPropagationStopped()',
        tone: 'amber',
      },
      {
        title: '다음 listener 실행 중단',
        body: '이후로 올라가는 bubble 전파가 더 이상 진행되지 않는다.',
        tone: 'rose',
      },
    ],
  },
  currentTarget: {
    step: 6,
    eyebrow: 'current-target',
    title: 'currentTarget이 주입되는 순간',
    steps: [
      {
        title: 'handler 실행 직전',
        body: 'event.currentTarget = currentTarget DOM',
        inspectorTitle: 'Event Inspector',
        inspector: [
          { key: 'type', value: 'click' },
          { key: 'target', value: 'button' },
          { key: 'currentTarget', value: 'button', highlight: true },
        ],
      },
      {
        title: 'handler 실행 중',
        body: 'handler는 currentTarget을 통해 현재 처리 중인 DOM을 알 수 있다.',
        code: 'console.log(e.currentTarget);\n// <button id="save">',
      },
      {
        title: 'handler 실행 직후',
        body: 'event.currentTarget = null',
        inspectorTitle: 'Event Inspector',
        inspector: [
          { key: 'type', value: 'click' },
          { key: 'target', value: 'button' },
          { key: 'currentTarget', value: 'null', highlight: true },
        ],
      },
    ],
  },
  realCode: {
    step: 7,
    eyebrow: 'real-code',
    title: '실제 코드 미리보기',
    fileLabel: 'DOMPluginEventSystem.js',
    code1: REAL_CODE_1,
    code1Caption: 'dispatchQueue 실행 진입',
    code2: REAL_CODE_2,
    code2Caption: 'stopPropagation 체크 루프',
    explanation: {
      label: '설명',
      body: 'processDispatchQueue는 각 entry를 순회하며 실제 실행 루프를 시작합니다. processDispatchQueueItemsInOrder는 각 listener마다 stopPropagation 여부를 확인해 순서를 제어합니다.',
    },
    fileLocation: {
      label: '파일 위치',
      path: 'packages/react-dom-bindings/src/events/DOMPluginEventSystem.js',
    },
    button: {
      label: 'GitHub에서 전체 코드 보기',
      href: 'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/DOMPluginEventSystem.js',
    },
  },
  timeline: {
    step: 8,
    eyebrow: 'propagation-timeline',
    title: 'Propagation Timeline',
    code: TIMELINE_CODE,
    cases: [
      {
        key: 'none',
        title: '케이스 A: stopPropagation 없음',
        entries: [
          { step: '1', label: 'section capture', phase: 'capture', tone: 'violet' },
          { step: '2', label: 'button click', phase: 'bubble · target', tone: 'teal' },
          { step: '3', label: 'div click', phase: 'bubble', tone: 'teal' },
        ],
        note: '모든 listener가 순서대로 실행됩니다.',
      },
      {
        key: 'stopped',
        title: '케이스 B: button에서 stopPropagation 실행',
        entries: [
          { step: '1', label: 'section capture', phase: 'capture', tone: 'violet' },
          {
            step: '2',
            label: 'button click',
            phase: 'bubble · target · stopPropagation()',
            tone: 'teal',
          },
          {
            step: '—',
            label: 'div click 실행 안 됨',
            phase: 'blocked',
            tone: 'rose',
            blocked: true,
          },
        ],
        note: 'button handler에서 전파가 중단되어 이후 listener는 실행되지 않습니다.',
      },
    ],
    toggles: [
      { value: 'none', label: 'stopPropagation 없음' },
      { value: 'stopped', label: 'button에서 stopPropagation 실행' },
    ],
    defaultCase: 'none',
  },
  mission: {
    step: 9,
    eyebrow: 'follow-along',
    title: '직접 코드에서 따라가 보기',
    items: [
      {
        title: 'processDispatchQueue를 찾는다',
        body: '실행 루프의 진입점을 확인한다.',
      },
      {
        title: 'processDispatchQueueItemsInOrder를 찾는다',
        body: 'capture/bubble 순서가 어떻게 정해지는지 본다.',
      },
      {
        title: 'event.isPropagationStopped() 분기를 확인한다',
        body: 'listener 실행 직전의 중단 조건을 본다.',
      },
      {
        title: 'executeDispatch가 currentTarget을 어떻게 쓰는지 확인한다',
        body: '주입과 정리(null로 되돌리기) 흐름을 직접 본다.',
      },
    ],
  },
  takeaways: {
    step: 10,
    eyebrow: 'key-takeaways',
    title: '핵심 정리',
    cards: [
      {
        title: 'React는 listener 실행 전에 dispatchQueue를 만든다.',
        body: '수집과 실행을 분리해 일관성과 성능을 확보합니다.',
        tone: 'teal',
      },
      {
        title: 'capture와 bubble에 따라 실행 순서가 달라진다.',
        body: 'Capture는 부모 → 자식, Bubble은 자식 → 부모 순서로 처리됩니다.',
        tone: 'violet',
      },
      {
        title: 'stopPropagation은 queue 처리 중간에서 실행을 끊는다.',
        body: '이후 listener는 더 이상 실행되지 않습니다.',
        tone: 'rose',
      },
    ],
  },
  cta: {
    text: '다음: Hydration Replay와 Form Action 보기',
    href: '/priority-replay-action',
  },
};

const en: DispatchQueueOrderContent = {
  hero: {
    badges: [
      { label: 'React Internals', tone: 'blue' },
      { label: 'Event System Deep Dive', tone: 'cyan' },
    ],
    titleLines: ['React does not run a listener', 'the instant it finds one'],
    description:
      'It first builds a dispatchQueue and then runs handlers in the order dictated by phase rules.',
    listenerTitle: 'Sample of collected listeners',
    collected: COLLECTED_EN,
    diagram: {
      title: 'How dispatchQueue becomes an execution timeline',
      queueTitle: 'dispatchQueue',
      eventLabel: 'SyntheticEvent(click)',
      listenersLabel: 'listeners[]',
      listeners: COLLECTED_EN,
      timelineTitle: 'Execution timeline (phase rules applied)',
      timeline: [
        { step: '1', label: 'section capture', phase: 'capture · parent → child', tone: 'violet' },
        { step: '2', label: 'button click', phase: 'bubble · target', tone: 'teal' },
        { step: '3', label: 'div click', phase: 'bubble · child → parent', tone: 'teal' },
      ],
    },
  },
  question: {
    eyebrow: "Today's question",
    title: 'In what order do section capture, button click, and div click actually run?',
    badges: [
      'Collection and execution are separate processes',
      'Phase rules decide the order',
      'stopPropagation can cut the chain mid-way',
    ],
  },
  separation: {
    step: 1,
    eyebrow: 'collect-vs-execute',
    title: 'Listener collection vs execution',
    cards: [
      {
        title: 'Stage 1: listener collection (accumulate)',
        body: 'Walk the Fiber path, find every relevant listener, and place them in dispatchQueue.',
        tone: 'teal',
      },
      {
        title: 'Stage 2: dispatchQueue execution (process)',
        body: 'Run handlers in the order dictated by phase rules.',
        tone: 'violet',
      },
    ],
    note: 'React separates collection from execution to ensure both consistency and performance.',
  },
  structure: {
    step: 2,
    eyebrow: 'dispatch-queue-structure',
    title: 'dispatchQueue structure',
    queue: {
      title: 'dispatchQueue',
      entry: 'entry(0)',
      event: 'SyntheticEvent(click)',
      listenersLabel: 'listeners: Array<DispatchListener>',
      listeners: [
        '#1 DispatchListener (capture)',
        '#2 DispatchListener (target)',
        '#3 DispatchListener (bubble)',
      ],
    },
    listener: {
      title: 'DispatchListener shape',
      rows: [
        { key: 'currentTarget', value: 'DOM node' },
        { key: 'instance', value: 'Fiber' },
        { key: 'listener', value: 'Function' },
        { key: 'capture', value: 'boolean' },
      ],
    },
  },
  flow: {
    step: 3,
    eyebrow: 'process-dispatch-queue',
    title: 'processDispatchQueue flow',
    steps: [
      {
        title: 'Walk the dispatchQueue',
        body: 'Pull each entry in order.',
        tone: 'sky',
      },
      {
        title: 'Extract event and listeners',
        body: 'Pull entry.event and entry.listeners.',
        tone: 'cyan',
      },
      {
        title: 'Call processDispatchQueueItemsInOrder',
        body: 'Run listeners in the order dictated by capture/bubble rules.',
        tone: 'violet',
      },
      {
        title: 'Run each listener with executeDispatch',
        body: 'Inject currentTarget and invoke the handler.',
        tone: 'emerald',
      },
    ],
  },
  phases: {
    step: 4,
    eyebrow: 'capture-bubble-order',
    title: 'capture / bubble execution order',
    capture: {
      title: 'Capture phase (parent → child)',
      body: 'Processed from parent toward child before the event flows downward.',
      pathTitle: 'Execution path',
      path: ['Section (ancestor)', 'Div (parent)', 'Button (target)'],
      exampleTitle: 'Concrete example',
      example: ['1 section capture'],
    },
    bubble: {
      title: 'Bubble phase (child → parent)',
      body: 'As the event bubbles up, handlers run from the child toward the parents.',
      pathTitle: 'Execution path',
      path: ['Button (target)', 'Div (parent)', 'Section (ancestor)'],
      exampleTitle: 'Concrete example',
      example: ['1 button click', '2 div click'],
    },
  },
  stop: {
    step: 5,
    eyebrow: 'stop-propagation',
    title: 'Where stopPropagation cuts the chain',
    steps: [
      {
        title: 'button handler runs',
        body: 'In the bubble phase, button onClick runs',
        code: 'e.stopPropagation();',
        tone: 'teal',
      },
      {
        title: 'e.stopPropagation() called',
        body: 'The internal flag on the event flips to true.',
        code: 'isPropagationStopped = true',
        tone: 'violet',
      },
      {
        title: 'isPropagationStopped() === true',
        body: 'Before each subsequent listener, check whether propagation has stopped.',
        code: 'event.isPropagationStopped()',
        tone: 'amber',
      },
      {
        title: 'Next listener skipped',
        body: 'Bubble propagation stops climbing further.',
        tone: 'rose',
      },
    ],
  },
  currentTarget: {
    step: 6,
    eyebrow: 'current-target',
    title: 'When currentTarget is injected',
    steps: [
      {
        title: 'Right before handler runs',
        body: 'event.currentTarget = currentTarget DOM',
        inspectorTitle: 'Event Inspector',
        inspector: [
          { key: 'type', value: 'click' },
          { key: 'target', value: 'button' },
          { key: 'currentTarget', value: 'button', highlight: true },
        ],
      },
      {
        title: 'During handler execution',
        body: 'The handler can read currentTarget to know which DOM is being processed right now.',
        code: 'console.log(e.currentTarget);\n// <button id="save">',
      },
      {
        title: 'Right after handler returns',
        body: 'event.currentTarget = null',
        inspectorTitle: 'Event Inspector',
        inspector: [
          { key: 'type', value: 'click' },
          { key: 'target', value: 'button' },
          { key: 'currentTarget', value: 'null', highlight: true },
        ],
      },
    ],
  },
  realCode: {
    step: 7,
    eyebrow: 'real-code',
    title: 'Real source preview',
    fileLabel: 'DOMPluginEventSystem.js',
    code1: REAL_CODE_1,
    code1Caption: 'dispatchQueue execution entry',
    code2: REAL_CODE_2,
    code2Caption: 'stopPropagation check loop',
    explanation: {
      label: 'Explanation',
      body: 'processDispatchQueue iterates each entry to start the execution loop. processDispatchQueueItemsInOrder checks stopPropagation per listener and gates the order.',
    },
    fileLocation: {
      label: 'File location',
      path: 'packages/react-dom-bindings/src/events/DOMPluginEventSystem.js',
    },
    button: {
      label: 'View full code on GitHub',
      href: 'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/DOMPluginEventSystem.js',
    },
  },
  timeline: {
    step: 8,
    eyebrow: 'propagation-timeline',
    title: 'Propagation Timeline',
    code: TIMELINE_CODE_EN,
    cases: [
      {
        key: 'none',
        title: 'Case A: no stopPropagation',
        entries: [
          { step: '1', label: 'section capture', phase: 'capture', tone: 'violet' },
          { step: '2', label: 'button click', phase: 'bubble · target', tone: 'teal' },
          { step: '3', label: 'div click', phase: 'bubble', tone: 'teal' },
        ],
        note: 'Every listener runs in order.',
      },
      {
        key: 'stopped',
        title: 'Case B: button calls stopPropagation',
        entries: [
          { step: '1', label: 'section capture', phase: 'capture', tone: 'violet' },
          {
            step: '2',
            label: 'button click',
            phase: 'bubble · target · stopPropagation()',
            tone: 'teal',
          },
          {
            step: '—',
            label: 'div click is skipped',
            phase: 'blocked',
            tone: 'rose',
            blocked: true,
          },
        ],
        note: 'The button handler stopped propagation so later listeners do not run.',
      },
    ],
    toggles: [
      { value: 'none', label: 'no stopPropagation' },
      { value: 'stopped', label: 'button calls stopPropagation' },
    ],
    defaultCase: 'none',
  },
  mission: {
    step: 9,
    eyebrow: 'follow-along',
    title: 'Walk it in the source',
    items: [
      {
        title: 'Find processDispatchQueue',
        body: 'Locate the execution loop entry.',
      },
      {
        title: 'Find processDispatchQueueItemsInOrder',
        body: 'See how capture/bubble order is decided.',
      },
      {
        title: 'Inspect the event.isPropagationStopped() branch',
        body: 'See the early-return condition right before each listener runs.',
      },
      {
        title: 'See how executeDispatch uses currentTarget',
        body: 'Trace injection and the cleanup that resets it to null.',
      },
    ],
  },
  takeaways: {
    step: 10,
    eyebrow: 'key-takeaways',
    title: 'Key takeaways',
    cards: [
      {
        title: 'React builds the dispatchQueue before running listeners.',
        body: 'Separating collection from execution keeps things consistent and fast.',
        tone: 'teal',
      },
      {
        title: 'Capture and bubble drive different execution orders.',
        body: 'Capture goes parent → child, bubble goes child → parent.',
        tone: 'violet',
      },
      {
        title: 'stopPropagation cuts the queue execution mid-way.',
        body: 'Later listeners no longer run.',
        tone: 'rose',
      },
    ],
  },
  cta: {
    text: 'Next: Hydration Replay and Form Action',
    href: '/priority-replay-action',
  },
};

export const dispatchQueueOrderContent: Record<Locale, DispatchQueueOrderContent> = { ko, en };

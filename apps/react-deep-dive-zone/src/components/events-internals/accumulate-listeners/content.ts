import type { Locale } from '@it-tech-blog/preferences';

export type Tone = 'sky' | 'cyan' | 'teal' | 'emerald' | 'violet' | 'blue' | 'amber' | 'rose';

export type FiberNode = {
  name: string;
  type: string;
  prop: string;
  propKind: 'capture' | 'bubble' | 'none';
};

export type ListenerEntry = {
  step: string;
  handler: string;
  tone: 'violet' | 'teal';
};

export type CollectorTarget = 'section' | 'div' | 'button';

export type CollectorState = {
  capture: ListenerEntry[];
  bubble: ListenerEntry[];
  currentLabel: string;
};

export type TakeawayCard = {
  title: string;
  body: string;
  tone: Tone;
};

export type ListenerCollectionContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    description: string;
    code: { fileLabel: string; code: string };
    diagram: {
      title: string;
      nodes: FiberNode[];
    };
  };
  question: {
    eyebrow: string;
    title: string;
    badges: string[];
  };
  nested: {
    step: number;
    eyebrow: string;
    title: string;
    fileLabel: string;
    code: string;
    legend: { label: string; description: string; tone: 'violet' | 'teal' }[];
  };
  compare: {
    step: number;
    eyebrow: string;
    title: string;
    dom: { title: string; lines: string[] };
    fiber: { title: string; lines: string[] };
    note: string;
  };
  capture: {
    step: number;
    eyebrow: string;
    title: string;
    subtitle: string;
    flow: string[];
    resultTitle: string;
    results: ListenerEntry[];
    note: string;
  };
  bubble: {
    step: number;
    eyebrow: string;
    title: string;
    subtitle: string;
    flow: string[];
    resultTitle: string;
    results: ListenerEntry[];
    note: string;
  };
  accumulate: {
    step: number;
    eyebrow: string;
    title: string;
    steps: { title: string; body: string; tone: Tone }[];
    diagramTitle: string;
    diagramNodes: FiberNode[];
    listenersTitle: string;
    notes: string[];
  };
  realCode: {
    step: number;
    eyebrow: string;
    title: string;
    fileLabel: string;
    code: string;
    explanation: { label: string; body: string };
    fileLocation: { label: string; path: string };
    button: { label: string; href: string };
  };
  collector: {
    step: number;
    eyebrow: string;
    title: string;
    code: string;
    targetSelectorLabel: string;
    targets: { value: CollectorTarget; label: string; recommended?: boolean }[];
    defaultTarget: CollectorTarget;
    tabs: { value: 'capture' | 'bubble'; label: string }[];
    defaultTab: 'capture' | 'bubble';
    captureTitle: string;
    bubbleTitle: string;
    emptyMessage: string;
    states: Record<CollectorTarget, CollectorState>;
    currentSelectionLabel: string;
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

const HERO_CODE = `<section onClickCapture={handleSectionCapture}>
  <div onClick={handleDivClick}>
    <button onClick={handleButtonClick}>저장</button>
  </div>
</section>`;

const HERO_CODE_EN = `<section onClickCapture={handleSectionCapture}>
  <div onClick={handleDivClick}>
    <button onClick={handleButtonClick}>Save</button>
  </div>
</section>`;

const REAL_CODE = `// DOMPluginEventSystem.js
let instance = targetFiber;

while (instance !== null) {
  const listener = getListener(instance, reactEventName);

  if (listener != null) {
    listeners.push(
      createDispatchListener(instance, listener, lastHostComponent),
    );
  }

  instance = instance.return;
}`;

const FIBER_NODES_KO: FiberNode[] = [
  { name: 'Section Fiber', type: "type: 'section'", prop: 'onClickCapture', propKind: 'capture' },
  { name: 'Div Fiber', type: "type: 'div'", prop: 'onClick', propKind: 'bubble' },
  { name: 'Button Fiber', type: "type: 'button'", prop: 'onClick', propKind: 'bubble' },
];

const FIBER_NODES_EN = FIBER_NODES_KO;

const ko: ListenerCollectionContent = {
  hero: {
    badge: '이벤트 시스템 · 8/10단계',
    titleLines: ['React는 이벤트 listener를', 'Fiber 경로를 따라 모은다'],
    description:
      'target Fiber에서 시작해 부모 방향으로 올라가며 capture와 bubble listener를 수집합니다.',
    code: { fileLabel: 'JSX', code: HERO_CODE },
    diagram: {
      title: 'Fiber 트리 (React가 보는 구조)',
      nodes: FIBER_NODES_KO,
    },
  },
  question: {
    eyebrow: '오늘의 질문',
    title: '중첩된 컴포넌트에서 어떤 handler가 어떤 순서로 실행될지 React는 어떻게 준비할까?',
    badges: [
      'React는 Fiber 경로를 기준으로 수집한다',
      'capture와 bubble은 다른 방향으로 수집된다',
      '최종 실행은 dispatchQueue가 담당한다',
    ],
  },
  nested: {
    step: 1,
    eyebrow: 'nested-jsx',
    title: '중첩 JSX 예제',
    fileLabel: 'JSX',
    code: HERO_CODE,
    legend: [
      { label: 'onClickCapture', description: 'capture phase', tone: 'violet' },
      { label: 'onClick', description: 'bubble phase', tone: 'teal' },
    ],
  },
  compare: {
    step: 2,
    eyebrow: 'dom-vs-fiber',
    title: 'DOM 트리와 Fiber 트리 비교',
    dom: {
      title: 'DOM 트리 (브라우저가 보는 구조)',
      lines: ['<section>', '└─ <div>', '   └─ <button>저장</button>'],
    },
    fiber: {
      title: 'Fiber 트리 (React가 보는 구조)',
      lines: ['Section Fiber', '└─ Div Fiber', '   └─ Button Fiber'],
    },
    note: '구조는 유사하지만, React는 DOM이 아닌 Fiber 경로를 따라 listener를 찾습니다.',
  },
  capture: {
    step: 3,
    eyebrow: 'capture-collection',
    title: 'capture listener 수집',
    subtitle: '부모 → 자식 방향으로 실행되도록 준비',
    flow: [
      'Button Fiber (시작)',
      'Div Fiber (부모)',
      'Section Fiber (부모의 부모)',
      'onClickCapture 확인',
    ],
    resultTitle: '최종 수집 결과 (capture phase)',
    results: [{ step: '1', handler: 'section capture (handleSectionCapture)', tone: 'violet' }],
    note: 'capture phase에서는 부모에서 자식 방향으로 실행됩니다.',
  },
  bubble: {
    step: 4,
    eyebrow: 'bubble-collection',
    title: 'bubble listener 수집',
    subtitle: '자식 → 부모 방향 그대로 유지',
    flow: ['Button Fiber (시작)', 'Div Fiber (부모)', 'Section Fiber (부모의 부모)'],
    resultTitle: '최종 수집 결과 (bubble phase)',
    results: [
      { step: '1', handler: 'button click (handleButtonClick)', tone: 'teal' },
      { step: '2', handler: 'div click (handleDivClick)', tone: 'teal' },
    ],
    note: 'bubble phase에서는 target부터 부모 방향으로 실행됩니다.',
  },
  accumulate: {
    step: 5,
    eyebrow: 'accumulate-flow',
    title: 'accumulateSinglePhaseListeners 흐름',
    steps: [
      { title: 'targetFiber부터 시작', body: '이벤트가 발생한 Fiber에서 시작합니다.', tone: 'sky' },
      {
        title: 'instance.return으로 부모 이동',
        body: '부모 Fiber로 이동하며 트리를 거슬러 올라갑니다.',
        tone: 'cyan',
      },
      {
        title: 'HostComponent 여부 확인',
        body: 'listener를 가질 수 있는 호스트 컴포넌트인지 검사합니다.',
        tone: 'violet',
      },
      {
        title: 'reactEventName listener 찾기',
        body: 'onClick / onClickCapture 등 phase별 prop을 조회합니다.',
        tone: 'teal',
      },
      {
        title: 'listeners 배열에 push',
        body: '찾은 dispatchListener를 listeners 배열에 누적합니다.',
        tone: 'emerald',
      },
    ],
    diagramTitle: '수집 방향과 listeners[]',
    diagramNodes: FIBER_NODES_KO,
    listenersTitle: 'listeners[]',
    notes: [
      'capture 수집: 위에서 아래로 실행되도록 역순으로 정리됩니다.',
      'bubble 수집: target → 부모 순서 그대로 유지됩니다.',
    ],
  },
  realCode: {
    step: 6,
    eyebrow: 'real-code',
    title: '실제 코드 미리보기',
    fileLabel: 'DOMPluginEventSystem.js',
    code: REAL_CODE,
    explanation: {
      label: '설명',
      body: 'targetFiber에서 시작해 부모 방향으로 올라갑니다. 각 Fiber에서 reactEventName에 해당하는 listener를 찾고, 발견되면 DispatchListener 형태로 listeners 배열에 추가됩니다.',
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
  collector: {
    step: 7,
    eyebrow: 'listener-collector',
    title: 'Listener Collector',
    code: HERO_CODE,
    targetSelectorLabel: '이벤트 발생 위치 선택',
    targets: [
      { value: 'section', label: 'section' },
      { value: 'div', label: 'div' },
      { value: 'button', label: 'button', recommended: true },
    ],
    defaultTarget: 'button',
    tabs: [
      { value: 'capture', label: 'Capture 보기' },
      { value: 'bubble', label: 'Bubble 보기' },
    ],
    defaultTab: 'capture',
    captureTitle: 'Capture phase listeners (부모 → 자식)',
    bubbleTitle: 'Bubble phase listeners (자식 → 부모)',
    emptyMessage: '이 phase에서 수집된 listener가 없습니다.',
    currentSelectionLabel: '현재 선택 위치',
    states: {
      button: {
        capture: [{ step: '1', handler: 'section capture (handleSectionCapture)', tone: 'violet' }],
        bubble: [
          { step: '1', handler: 'button click (handleButtonClick)', tone: 'teal' },
          { step: '2', handler: 'div click (handleDivClick)', tone: 'teal' },
        ],
        currentLabel: '<button>저장</button>',
      },
      div: {
        capture: [{ step: '1', handler: 'section capture (handleSectionCapture)', tone: 'violet' }],
        bubble: [{ step: '1', handler: 'div click (handleDivClick)', tone: 'teal' }],
        currentLabel: '<div>',
      },
      section: {
        capture: [{ step: '1', handler: 'section capture (handleSectionCapture)', tone: 'violet' }],
        bubble: [],
        currentLabel: '<section>',
      },
    },
  },
  mission: {
    step: 8,
    eyebrow: 'follow-along',
    title: '직접 코드에서 따라가 보기',
    items: [
      {
        title: 'accumulateSinglePhaseListeners를 찾는다',
        body: '함수 정의 위치와 호출 시점을 확인한다.',
      },
      {
        title: 'targetFiber에서 시작해 부모 방향으로 이동하는지 확인한다',
        body: 'while 루프 조건과 초기값을 따라간다.',
      },
      {
        title: 'instance.return으로 올라가는 흐름을 본다',
        body: '루프 종료 조건과 부모 이동 순서를 확인한다.',
      },
      {
        title: 'getListener 결과가 listeners 배열에 들어가는지 확인한다',
        body: 'push 호출 직전의 분기를 따라간다.',
      },
    ],
  },
  takeaways: {
    step: 9,
    eyebrow: 'key-takeaways',
    title: '핵심 정리',
    cards: [
      {
        title: 'React는 Fiber 경로를 따라 listener를 수집한다.',
        body: 'target Fiber에서 시작해 부모 방향으로 올라가며 listener를 찾습니다.',
        tone: 'teal',
      },
      {
        title: 'capture와 bubble은 서로 다른 reactEventName을 기준으로 모인다.',
        body: 'onClickCapture와 onClick은 서로 다른 phase의 listener로 분리됩니다.',
        tone: 'violet',
      },
      {
        title: '실제 실행은 dispatchQueue가 담당한다.',
        body: '수집된 listener들은 DispatchQueue에 담긴 뒤 이후 단계에서 순서대로 실행됩니다.',
        tone: 'rose',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '다음: dispatchQueue 실행 순서 보기',
    description: '수집된 listener들이 dispatchQueue에서 어떤 순서로 실행되는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/dispatch-queue',
  },
};

const en: ListenerCollectionContent = {
  hero: {
    badge: 'Event System · 8/10',
    titleLines: ['React collects event listeners', 'along the Fiber path'],
    description:
      'Starting at the target Fiber, React walks toward the parent direction to gather both capture and bubble listeners.',
    code: { fileLabel: 'JSX', code: HERO_CODE_EN },
    diagram: {
      title: 'Fiber tree (what React sees)',
      nodes: FIBER_NODES_EN,
    },
  },
  question: {
    eyebrow: "Today's question",
    title: 'In nested components, how does React prepare which handler runs in which order?',
    badges: [
      'React collects along the Fiber path',
      'capture and bubble are collected in different directions',
      'Final execution is handled by the dispatchQueue',
    ],
  },
  nested: {
    step: 1,
    eyebrow: 'nested-jsx',
    title: 'Nested JSX example',
    fileLabel: 'JSX',
    code: HERO_CODE_EN,
    legend: [
      { label: 'onClickCapture', description: 'capture phase', tone: 'violet' },
      { label: 'onClick', description: 'bubble phase', tone: 'teal' },
    ],
  },
  compare: {
    step: 2,
    eyebrow: 'dom-vs-fiber',
    title: 'DOM tree vs Fiber tree',
    dom: {
      title: 'DOM tree (what the browser sees)',
      lines: ['<section>', '└─ <div>', '   └─ <button>Save</button>'],
    },
    fiber: {
      title: 'Fiber tree (what React sees)',
      lines: ['Section Fiber', '└─ Div Fiber', '   └─ Button Fiber'],
    },
    note: 'The shape is similar, but React follows the Fiber path — not the DOM path — to find listeners.',
  },
  capture: {
    step: 3,
    eyebrow: 'capture-collection',
    title: 'capture listener collection',
    subtitle: 'Prepared so it runs parent → child',
    flow: [
      'Button Fiber (start)',
      'Div Fiber (parent)',
      'Section Fiber (grandparent)',
      'check onClickCapture',
    ],
    resultTitle: 'Final result (capture phase)',
    results: [{ step: '1', handler: 'section capture (handleSectionCapture)', tone: 'violet' }],
    note: 'In the capture phase, handlers run from the parent toward the child.',
  },
  bubble: {
    step: 4,
    eyebrow: 'bubble-collection',
    title: 'bubble listener collection',
    subtitle: 'Kept in child → parent order',
    flow: ['Button Fiber (start)', 'Div Fiber (parent)', 'Section Fiber (grandparent)'],
    resultTitle: 'Final result (bubble phase)',
    results: [
      { step: '1', handler: 'button click (handleButtonClick)', tone: 'teal' },
      { step: '2', handler: 'div click (handleDivClick)', tone: 'teal' },
    ],
    note: 'In the bubble phase, handlers run from the target toward the parents.',
  },
  accumulate: {
    step: 5,
    eyebrow: 'accumulate-flow',
    title: 'accumulateSinglePhaseListeners flow',
    steps: [
      {
        title: 'Start from targetFiber',
        body: 'Begin at the Fiber where the event fired.',
        tone: 'sky',
      },
      {
        title: 'Move to parent via instance.return',
        body: 'Climb the Fiber tree toward the parent.',
        tone: 'cyan',
      },
      {
        title: 'Check whether it is a HostComponent',
        body: 'Inspect whether the Fiber is a host component that can hold listeners.',
        tone: 'violet',
      },
      {
        title: 'Find the reactEventName listener',
        body: 'Look up the per-phase prop like onClick / onClickCapture.',
        tone: 'teal',
      },
      {
        title: 'Push into the listeners array',
        body: 'Accumulate the found dispatchListener into the listeners array.',
        tone: 'emerald',
      },
    ],
    diagramTitle: 'Collection direction and listeners[]',
    diagramNodes: FIBER_NODES_EN,
    listenersTitle: 'listeners[]',
    notes: [
      'Capture collection: reversed so it runs top → bottom.',
      'Bubble collection: kept in target → parent order.',
    ],
  },
  realCode: {
    step: 6,
    eyebrow: 'real-code',
    title: 'Real source preview',
    fileLabel: 'DOMPluginEventSystem.js',
    code: REAL_CODE,
    explanation: {
      label: 'Explanation',
      body: 'Starting at targetFiber, it walks toward the parent direction. At each Fiber it looks up the listener for the reactEventName; whenever found, the dispatchListener is added to the listeners array.',
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
  collector: {
    step: 7,
    eyebrow: 'listener-collector',
    title: 'Listener Collector',
    code: HERO_CODE_EN,
    targetSelectorLabel: 'Pick where the event fires',
    targets: [
      { value: 'section', label: 'section' },
      { value: 'div', label: 'div' },
      { value: 'button', label: 'button', recommended: true },
    ],
    defaultTarget: 'button',
    tabs: [
      { value: 'capture', label: 'Capture view' },
      { value: 'bubble', label: 'Bubble view' },
    ],
    defaultTab: 'capture',
    captureTitle: 'Capture phase listeners (parent → child)',
    bubbleTitle: 'Bubble phase listeners (child → parent)',
    emptyMessage: 'No listeners collected for this phase.',
    currentSelectionLabel: 'Current selection',
    states: {
      button: {
        capture: [{ step: '1', handler: 'section capture (handleSectionCapture)', tone: 'violet' }],
        bubble: [
          { step: '1', handler: 'button click (handleButtonClick)', tone: 'teal' },
          { step: '2', handler: 'div click (handleDivClick)', tone: 'teal' },
        ],
        currentLabel: '<button>Save</button>',
      },
      div: {
        capture: [{ step: '1', handler: 'section capture (handleSectionCapture)', tone: 'violet' }],
        bubble: [{ step: '1', handler: 'div click (handleDivClick)', tone: 'teal' }],
        currentLabel: '<div>',
      },
      section: {
        capture: [{ step: '1', handler: 'section capture (handleSectionCapture)', tone: 'violet' }],
        bubble: [],
        currentLabel: '<section>',
      },
    },
  },
  mission: {
    step: 8,
    eyebrow: 'follow-along',
    title: 'Walk it in the source',
    items: [
      {
        title: 'Find accumulateSinglePhaseListeners',
        body: 'Locate the function definition and where it is called.',
      },
      {
        title: 'Confirm it starts at targetFiber and moves toward parents',
        body: 'Trace the while-loop initial value and condition.',
      },
      {
        title: 'See the instance.return upward step',
        body: 'Read how the parent traversal terminates.',
      },
      {
        title: 'Confirm getListener results land in the listeners array',
        body: 'Inspect the branch right before push is called.',
      },
    ],
  },
  takeaways: {
    step: 9,
    eyebrow: 'key-takeaways',
    title: 'Key takeaways',
    cards: [
      {
        title: 'React collects listeners along the Fiber path.',
        body: 'Starting at the target Fiber, it climbs toward the parent to gather listeners.',
        tone: 'teal',
      },
      {
        title: 'capture and bubble are collected via different reactEventNames.',
        body: 'onClickCapture and onClick are separated into different phase listeners.',
        tone: 'violet',
      },
      {
        title: 'Actual execution is handled by the dispatchQueue.',
        body: 'The collected listeners go into the DispatchQueue and are invoked in order later.',
        tone: 'rose',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Next: dispatchQueue execution order',
    description: 'See the order in which the collected listeners run inside the dispatchQueue.',
    cta: 'Go to the next page',
    href: '/dispatch-queue',
  },
};

export const listenerCollectionContent: Record<Locale, ListenerCollectionContent> = { ko, en };

import type { Locale } from '@it-tech-blog/preferences';

export type Tone = 'sky' | 'cyan' | 'teal' | 'emerald' | 'violet' | 'blue' | 'amber' | 'rose';

export type ListenerKind = 'mouse' | 'pointer' | 'keyboard' | 'input' | 'focus' | 'form' | 'misc';

export type ListenerEntry = { label: string; kind: ListenerKind };

export type FlowStep = {
  title: string;
  description: string;
  tone: Tone;
};

export type ExceptionCard = {
  title: string;
  body: string;
  tone: Tone;
};

export type TakeawayCard = {
  title: string;
  body: string;
  tone: Tone;
};

export type RootNativeEventContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    description: string;
    codeCard: { fileLabel: string; code: string };
    diagram: {
      browserTitle: string;
      browserBullets: string[];
      rootTitle: string;
      rootDom: string;
      listeners: ListenerEntry[];
      caption: string;
    };
  };
  question: {
    eyebrow: string;
    title: string;
    insight: {
      label: string;
      body: string;
    };
  };
  createRoot: {
    step: number;
    eyebrow: string;
    title: string;
    fileLabel: string;
    code: string;
    explanation: {
      label: string;
      body: string;
    };
    badges: string[];
  };
  rootViz: {
    step: number;
    eyebrow: string;
    title: string;
    domCode: string;
    rootBadgeTitle: string;
    rootBadgeBody: string;
    listeners: ListenerEntry[];
    explanation: { label: string; body: string };
    note: string;
  };
  flow: {
    step: number;
    eyebrow: string;
    title: string;
    steps: FlowStep[];
  };
  allEvents: {
    step: number;
    eyebrow: string;
    title: string;
    rootLabel: string;
    listeners: ListenerEntry[];
    emphasis: string;
  };
  realCode: {
    step: number;
    eyebrow: string;
    title: string;
    smallDescription: string;
    fileLabel: string;
    code: string;
    explanation: { label: string; body: string };
    fileLocation: { label: string; path: string };
    button: { label: string; href: string };
  };
  exceptions: {
    step: number;
    eyebrow: string;
    title: string;
    cards: ExceptionCard[];
  };
  mission: {
    step: number;
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
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

const HERO_CODE = `const root = createRoot(document.getElementById("root"));

root.render(<App />);`;

const CREATE_ROOT_CODE = `import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(<App />);`;

const REAL_CODE = `import { listenToAllSupportedEvents } from "./DOMPluginEventSystem";

function createRoot(container, options) {
  // ... 생략

  const rootContainerElement =
    !disableCommentsAsDOMContainers && container.nodeType === COMMENT_NODE
      ? container.parentNode
      : container;

  listenToAllSupportedEvents(rootContainerElement);

  // ... 이후 root 객체 생성 및 반환
}`;

const REAL_CODE_EN = `import { listenToAllSupportedEvents } from "./DOMPluginEventSystem";

function createRoot(container, options) {
  // ... omitted

  const rootContainerElement =
    !disableCommentsAsDOMContainers && container.nodeType === COMMENT_NODE
      ? container.parentNode
      : container;

  listenToAllSupportedEvents(rootContainerElement);

  // ... then create the root object and return it
}`;

const ROOT_DOM = `<div id="root" data-reactroot>
  <App />
</div>`;

const HERO_ROOT_DOM = `<div id="root">
  <App />
</div>`;

const HERO_LISTENERS: ListenerEntry[] = [
  { label: 'click', kind: 'mouse' },
  { label: 'keydown', kind: 'keyboard' },
  { label: 'input', kind: 'input' },
  { label: 'pointerdown', kind: 'pointer' },
  { label: 'focusin', kind: 'focus' },
  { label: '...', kind: 'misc' },
];

const FULL_LISTENERS: ListenerEntry[] = [
  { label: 'click', kind: 'mouse' },
  { label: 'dblclick', kind: 'mouse' },
  { label: 'mousedown', kind: 'mouse' },
  { label: 'mouseup', kind: 'mouse' },
  { label: 'pointerdown', kind: 'pointer' },
  { label: 'pointerup', kind: 'pointer' },
  { label: 'pointermove', kind: 'pointer' },
  { label: 'keydown', kind: 'keyboard' },
  { label: 'keyup', kind: 'keyboard' },
  { label: 'input', kind: 'input' },
  { label: 'change', kind: 'input' },
  { label: 'focusin', kind: 'focus' },
  { label: 'focusout', kind: 'focus' },
  { label: 'submit', kind: 'form' },
  { label: '...', kind: 'misc' },
];

const ko: RootNativeEventContent = {
  hero: {
    badge: '이벤트 시스템 · 2/10단계',
    titleLines: ['React 앱이 시작될 때', '이벤트 시스템도 함께 준비된다'],
    description: 'onClick을 만나기 전부터 React root는 이벤트를 받을 준비를 합니다.',
    codeCard: { fileLabel: 'JSX', code: HERO_CODE },
    diagram: {
      browserTitle: 'Browser',
      browserBullets: ['사용자 상호작용', 'Native Events'],
      rootTitle: 'root container',
      rootDom: HERO_ROOT_DOM,
      listeners: HERO_LISTENERS,
      caption: 'React root에 다양한 Native Event 리스너가 미리 등록된다.',
    },
  },
  question: {
    eyebrow: '오늘의 질문',
    title:
      'React는 onClick을 처음 만났을 때 listener를 붙일까? 아니면 root를 만들 때 미리 준비해둘까?',
    insight: {
      label: '이 페이지의 핵심',
      body: 'React는 root 생성 시점에 이벤트 수신 체계를 미리 구축합니다.',
    },
  },
  createRoot: {
    step: 1,
    eyebrow: 'create-root-start',
    title: 'createRoot 코드에서 출발',
    fileLabel: 'JavaScript',
    code: CREATE_ROOT_CODE,
    explanation: {
      label: '핵심 포인트',
      body: 'React 이벤트 시스템 초기화는 root.render보다 앞선 root 생성 흐름에서 이루어집니다.',
    },
    badges: ['root 초기화', '이벤트 시스템 준비', '이후 onClick 처리 가능'],
  },
  rootViz: {
    step: 2,
    eyebrow: 'root-container',
    title: 'rootContainerElement 시각화',
    domCode: ROOT_DOM,
    rootBadgeTitle: 'rootContainerElement',
    rootBadgeBody: '이곳에 이벤트 리스너가 등록됩니다',
    listeners: HERO_LISTENERS,
    explanation: {
      label: '설명',
      body: 'React는 이 root container 하나만 보고 모든 자식 요소에서 발생하는 이벤트를 수신합니다.',
    },
    note: '앱 내부의 여러 버튼, input, 링크 등의 이벤트가 모두 이 root로 모입니다.',
  },
  flow: {
    step: 3,
    eyebrow: 'listen-flow',
    title: 'listenToAllSupportedEvents 호출',
    steps: [
      {
        title: 'createRoot',
        description: 'createRoot() 호출 (ReactDOMRoot.js)',
        tone: 'sky',
      },
      {
        title: 'rootContainerElement 결정',
        description: '컨테이너 요소를 root 기준으로 설정',
        tone: 'cyan',
      },
      {
        title: 'listenToAllSupportedEvents(...)',
        description: '이벤트 시스템 초기화 함수 호출 (DOMPluginEventSystem.js)',
        tone: 'violet',
      },
      {
        title: '지원 이벤트 순회',
        description: 'allNativeEvents 목록을 순회하며 각 이벤트 등록',
        tone: 'teal',
      },
      {
        title: 'root listener 등록',
        description: 'root에 capture/bubble listener를 통한 분기 준비',
        tone: 'emerald',
      },
    ],
  },
  allEvents: {
    step: 4,
    eyebrow: 'all-native-events',
    title: 'allNativeEvents가 root에 붙는 모습',
    rootLabel: 'root container (#root)',
    listeners: FULL_LISTENERS,
    emphasis: '개별 버튼마다 붙는 것이 아니라, root에서 한 번만 등록하여 모든 이벤트를 수신한다.',
  },
  realCode: {
    step: 5,
    eyebrow: 'real-code',
    title: '실제 코드 미리보기',
    smallDescription: 'React DOM 이벤트 시스템의 초기화와 관련',
    fileLabel: 'ReactDOMRoot.js',
    code: REAL_CODE,
    explanation: {
      label: '설명',
      body: 'listenToAllSupportedEvents가 호출되는 순간, React는 root 기준으로 모든 Native Event 수신을 준비합니다. 이후 자식 요소에서 이벤트가 발생하면 이 root의 listener를 통해 React 내부로 들어옵니다.',
    },
    fileLocation: {
      label: '파일 위치',
      path: 'packages/react-dom/src/client/ReactDOMRoot.js',
    },
    button: {
      label: 'GitHub에서 전체 코드 보기',
      href: 'https://github.com/facebook/react/blob/main/packages/react-dom/src/client/ReactDOMRoot.js',
    },
  },
  exceptions: {
    step: 6,
    eyebrow: 'exceptions',
    title: '예외 이벤트 힌트',
    cards: [
      {
        title: 'selectionchange',
        body: '문서(document) 계열에 등록되는 특수 이벤트입니다. 일반적인 위임 방식이 그대로 적용되지 않습니다.',
        tone: 'blue',
      },
      {
        title: '일부 non-delegated event',
        body: 'scroll, media event 등 위임이 어려운 이벤트는 특수한 방식으로 처리됩니다.',
        tone: 'teal',
      },
      {
        title: '심화 학습에서 다시 다룹니다',
        body: '지금은 root 기준 이벤트 초기화라는 큰 관점을 기억하는 것이 중요합니다.',
        tone: 'violet',
      },
    ],
  },
  mission: {
    step: 7,
    eyebrow: 'follow-along',
    title: '직접 코드에서 따라가 보기',
    description: 'React 저장소를 직접 열어 root 기준 초기화 흐름을 손으로 확인해 보세요.',
    items: [
      'ReactDOMRoot.js를 연다',
      'createRoot 흐름을 찾는다',
      'listenToAllSupportedEvents 호출 지점을 확인한다',
      'root 기준 이벤트 초기화라는 관점을 기억한다',
      '이후 onClick 처리 흐름과 연결해본다',
    ],
  },
  takeaways: {
    step: 8,
    eyebrow: 'key-takeaways',
    title: '이번 페이지에서 반드시 기억할 것',
    cards: [
      {
        title: 'React 이벤트 시스템은 root 생성 시점부터 준비된다.',
        body: 'onClick을 만나기 전에 이미 이벤트 리스너가 등록된다.',
        tone: 'teal',
      },
      {
        title: '이벤트 수신 기준점은 root container다.',
        body: '앱 내부 어디서 이벤트가 발생해도 root로 모인다.',
        tone: 'blue',
      },
      {
        title: 'onClick 처리의 바닥에는 listenToAllSupportedEvents가 있다.',
        body: '이 함수가 React 이벤트 시스템의 시작점이다.',
        tone: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'onClick과 click 매핑 보기',
    description:
      'root에 등록된 native event를 바탕으로, onClick prop이 어떤 native click 이벤트로 매핑되는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/onclick-to-click',
  },
};

const en: RootNativeEventContent = {
  hero: {
    badge: 'Event System · 2/10',
    titleLines: ['When a React app starts', 'the event system gets ready too'],
    description:
      'Before any onClick is touched, the React root is already preparing to receive events.',
    codeCard: { fileLabel: 'JSX', code: HERO_CODE },
    diagram: {
      browserTitle: 'Browser',
      browserBullets: ['User interaction', 'Native Events'],
      rootTitle: 'root container',
      rootDom: HERO_ROOT_DOM,
      listeners: HERO_LISTENERS,
      caption: 'A variety of native event listeners are pre-registered on the React root.',
    },
  },
  question: {
    eyebrow: "Today's question",
    title:
      'Does React attach listeners the first time it sees onClick — or set them up when the root is created?',
    insight: {
      label: 'Key idea of this page',
      body: 'React builds the event-receiving system at the moment the root is created.',
    },
  },
  createRoot: {
    step: 1,
    eyebrow: 'create-root-start',
    title: 'Start from the createRoot code',
    fileLabel: 'JavaScript',
    code: CREATE_ROOT_CODE,
    explanation: {
      label: 'Key point',
      body: "React's event system is initialized during the root-creation flow that runs before root.render.",
    },
    badges: ['root setup', 'event system ready', 'onClick can now be handled'],
  },
  rootViz: {
    step: 2,
    eyebrow: 'root-container',
    title: 'Visualizing the rootContainerElement',
    domCode: ROOT_DOM,
    rootBadgeTitle: 'rootContainerElement',
    rootBadgeBody: 'event listeners are registered here',
    listeners: HERO_LISTENERS,
    explanation: {
      label: 'Explanation',
      body: 'React watches this single root container and receives events from every descendant element.',
    },
    note: 'Events from all the buttons, inputs and links inside the app funnel into this root.',
  },
  flow: {
    step: 3,
    eyebrow: 'listen-flow',
    title: 'How listenToAllSupportedEvents is called',
    steps: [
      {
        title: 'createRoot',
        description: 'createRoot() is invoked (ReactDOMRoot.js)',
        tone: 'sky',
      },
      {
        title: 'rootContainerElement decided',
        description: 'The container element is fixed as the root reference',
        tone: 'cyan',
      },
      {
        title: 'listenToAllSupportedEvents(...)',
        description: 'The event-system init function runs (DOMPluginEventSystem.js)',
        tone: 'violet',
      },
      {
        title: 'Iterate supported events',
        description: 'Loop through allNativeEvents and register each one',
        tone: 'teal',
      },
      {
        title: 'Root listener registered',
        description: 'Capture/bubble dispatch listeners are wired onto the root',
        tone: 'emerald',
      },
    ],
  },
  allEvents: {
    step: 4,
    eyebrow: 'all-native-events',
    title: 'How allNativeEvents land on the root',
    rootLabel: 'root container (#root)',
    listeners: FULL_LISTENERS,
    emphasis:
      'Listeners are not attached per button — they are registered once on the root, which receives every event.',
  },
  realCode: {
    step: 5,
    eyebrow: 'real-code',
    title: 'Real source preview',
    smallDescription: 'Related to the React DOM event system initialization',
    fileLabel: 'ReactDOMRoot.js',
    code: REAL_CODE_EN,
    explanation: {
      label: 'Explanation',
      body: 'The moment listenToAllSupportedEvents runs, React is ready to receive every native event at the root. From that point, every child event flows into React through this root listener.',
    },
    fileLocation: {
      label: 'File location',
      path: 'packages/react-dom/src/client/ReactDOMRoot.js',
    },
    button: {
      label: 'View full code on GitHub',
      href: 'https://github.com/facebook/react/blob/main/packages/react-dom/src/client/ReactDOMRoot.js',
    },
  },
  exceptions: {
    step: 6,
    eyebrow: 'exceptions',
    title: 'Exception event hints',
    cards: [
      {
        title: 'selectionchange',
        body: 'A special event registered on the document. The usual delegation pattern does not apply directly.',
        tone: 'blue',
      },
      {
        title: 'Some non-delegated events',
        body: 'scroll, media events and other hard-to-delegate events are handled specially.',
        tone: 'teal',
      },
      {
        title: 'Covered later in depth',
        body: 'For now, just hold on to the big picture: events are initialized at the root.',
        tone: 'violet',
      },
    ],
  },
  mission: {
    step: 7,
    eyebrow: 'follow-along',
    title: 'Walk it in the source',
    description: 'Open the React repository and verify the root-level init flow by hand.',
    items: [
      'Open ReactDOMRoot.js',
      'Find the createRoot flow',
      'Locate the listenToAllSupportedEvents call site',
      'Remember the perspective: root-level event initialization',
      'Connect this to the onClick handling flow you will learn next',
    ],
  },
  takeaways: {
    step: 8,
    eyebrow: 'key-takeaways',
    title: 'Must remember from this page',
    cards: [
      {
        title: "React's event system is ready from the moment the root is created.",
        body: 'Listeners are registered before any onClick is encountered.',
        tone: 'teal',
      },
      {
        title: 'The receiving point for events is the root container.',
        body: 'No matter where in the app an event fires, it converges on the root.',
        tone: 'blue',
      },
      {
        title: 'listenToAllSupportedEvents sits at the bottom of onClick handling.',
        body: "It is the starting point of React's event system.",
        tone: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'How onClick maps to click',
    description:
      'With native events attached to the root, see how the onClick prop maps to the native click event.',
    cta: 'Go to the next page',
    href: '/onclick-to-click',
  },
};

export const rootNativeEventContent: Record<Locale, RootNativeEventContent> = { ko, en };

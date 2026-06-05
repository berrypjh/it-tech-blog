import type { Locale } from '@it-tech-blog/preferences';

import type { Domain } from './tone';

export type FlowStep = { label: string; highlight?: boolean };

export type HydrationStateCard = {
  name: string;
  summary: string;
  mini: { title: string; lines: string[] };
  description: string;
  domain: Domain;
};

export type MatchOption = {
  key: 'root' | 'button' | 'next';
  label: string;
};

export type MatchResult = {
  step: string;
  description: string;
  highlight: 'root' | 'button' | 'next';
};

export type ChecklistItem = { title: string; description: string };

export type TakeawayCard = {
  number: string;
  title: string;
  body: string;
  tone: 'blue' | 'teal' | 'violet';
};

export type HydrationStartContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    description: string;
    serverHtml: {
      title: string;
      fileLabel: string;
      content: string;
    };
    matchLabel: string;
    fiberTree: {
      title: string;
      lines: { label: string; kind: 'root' | 'component' }[];
    };
  };
  question: {
    number: string;
    title: string;
    question: string;
  };
  compare: {
    number: string;
    title: string;
    createRoot: {
      name: string;
      lead: string;
      domLabel: string;
      domCode: string;
      domState: string;
    };
    hydrateRoot: {
      name: string;
      lead: string;
      domLabel: string;
      domCode: string;
      domState: string;
    };
  };
  serverHtml: {
    number: string;
    title: string;
    codeLabel: string;
    code: string;
    bullets: string[];
  };
  hydrateCall: {
    number: string;
    title: string;
    code: { fileLabel: string; content: string };
    statusTitle: string;
    statusBody: string;
    statusPill: string;
  };
  enterFlow: {
    number: string;
    title: string;
    steps: FlowStep[];
  };
  states: {
    number: string;
    title: string;
    cards: HydrationStateCard[];
  };
  code: {
    number: string;
    title: string;
    fileLabel: string;
    content: string;
    sideTitle: string;
    sideBody: string;
    bullets: string[];
    button: { label: string; href: string };
  };
  matcher: {
    number: string;
    title: string;
    domTitle: string;
    domTree: string[];
    fiberTitle: string;
    fiberTree: string[];
    matchLabel: string;
    checklist: string[];
    options: MatchOption[];
    results: Record<MatchOption['key'], MatchResult>;
    stepLabel: string;
    descriptionLabel: string;
  };
  followAlong: {
    number: string;
    title: string;
    items: ChecklistItem[];
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

const HERO_HTML = `<div id="root">
  <button>저장</button>
</div>`;

const HYDRATE_CALL_CODE = `hydrateRoot(
  document.getElementById("root"),
  <App />,
);`;

const ENTER_HYDRATION_CODE = `function enterHydrationState(fiber) {
  const parentInstance = fiber.stateNode.containerInfo;

  nextHydratableInstance =
    getFirstHydratableChildWithinContainer(parentInstance);

  hydrationParentFiber = fiber;
  isHydrating = true;
  hydrationErrors = null;
}`;

const BROWSER_DOM = `<div id="root">
  <button>저장</button>
  <h1>안녕하세요</h1>
  #text: "환영합니다."
</div>`;

const THROW_URL =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHydrationContext.js';

const ko: HydrationStartContent = {
  hero: {
    badge: 'Suspense/Error · 7/10단계',
    titleLines: ['Hydration은 DOM을 새로 만드는', '렌더링이 아니다'],
    description: '이미 있는 서버 HTML을 React Fiber 트리와 연결해가는 과정입니다.',
    serverHtml: {
      title: '서버 HTML (브라우저에 이미 존재)',
      fileLabel: 'index.html',
      content: HERO_HTML,
    },
    matchLabel: 'match / hydrate',
    fiberTree: {
      title: 'React Fiber 트리',
      lines: [
        { label: 'HostRoot', kind: 'root' },
        { label: 'HostComponent(button)', kind: 'component' },
      ],
    },
  },
  question: {
    number: '1',
    title: '오늘 해결할 질문',
    question: '서버가 이미 만든 HTML을 React는 클라이언트에서 어떻게 다시 인수할까?',
  },
  compare: {
    number: '2',
    title: 'createRoot vs hydrateRoot',
    createRoot: {
      name: 'createRoot',
      lead: '비어 있는 container에서 렌더 시작',
      domLabel: 'DOM 상태',
      domCode: '<div id="root"></div>',
      domState: '(비어 있음)',
    },
    hydrateRoot: {
      name: 'hydrateRoot',
      lead: '서버 HTML이 이미 있는 container를 연결',
      domLabel: 'DOM 상태',
      domCode: HERO_HTML,
      domState: '(서버 HTML 존재)',
    },
  },
  serverHtml: {
    number: '3',
    title: '서버 HTML이 이미 존재하는 상태',
    codeLabel: '브라우저 DOM',
    code: BROWSER_DOM,
    bullets: ['서버 렌더 결과가 브라우저 DOM에 이미 들어와 있다.', 'React는 이 DOM을 재사용한다.'],
  },
  hydrateCall: {
    number: '4',
    title: 'hydrateRoot 호출',
    code: { fileLabel: 'main.tsx', content: HYDRATE_CALL_CODE },
    statusTitle: '연결 시작 (Hydrating...)',
    statusBody: '서버 DOM과 Fiber를 연결하는 중...',
    statusPill: 'isHydrating = true',
  },
  enterFlow: {
    number: '5',
    title: 'enterHydrationState 흐름',
    steps: [
      { label: 'hydrateRoot' },
      { label: 'root 생성' },
      { label: 'enterHydrationState', highlight: true },
      { label: '첫 hydratable DOM 찾기' },
      { label: 'Fiber 매칭 시작' },
    ],
  },
  states: {
    number: '6',
    title: '주요 hydration state',
    cards: [
      {
        name: 'nextHydratableInstance',
        summary: '다음에 매칭할 서버 DOM',
        mini: { title: 'DOM', lines: ['root', '└─ button', '└─ ...'] },
        description: '다음으로 매칭할 DOM 노드를 가리킨다.',
        domain: 'dom',
      },
      {
        name: 'hydrationParentFiber',
        summary: '현재 hydration 상위 Fiber',
        mini: {
          title: 'Fiber',
          lines: ['HostRoot', '└─ HostComponent(button)'],
        },
        description: '현재 매칭을 진행 중인 상위 Fiber를 가리킨다.',
        domain: 'fiber',
      },
      {
        name: 'isHydrating',
        summary: 'hydration 진행 중 여부',
        mini: { title: '값', lines: ['true', '(hydrating...)'] },
        description: 'hydration이 진행 중인지 나타내는 플래그이다.',
        domain: 'hydrating',
      },
    ],
  },
  code: {
    number: '7',
    title: '실제 코드 미리보기',
    fileLabel: 'ReactFiberHydrationContext.js',
    content: ENTER_HYDRATION_CODE,
    sideTitle: 'GitHub에서 소스 보기',
    sideBody: 'React 저장소에서 실제 구현을 확인하세요.',
    bullets: [
      'parentInstance는 root container DOM입니다.',
      'nextHydratableInstance는 첫 hydratable child를 가리킵니다.',
      'hydrationParentFiber는 현재 기준 Fiber입니다.',
      'isHydrating을 true로 바꿔 hydration 모드로 진입합니다.',
    ],
    button: { label: 'GitHub에서 보기', href: THROW_URL },
  },
  matcher: {
    number: '8',
    title: 'DOM-Fiber 매칭 인터랙션',
    domTitle: 'DOM (브라우저)',
    domTree: ['root', '└─ button', '└─ ...'],
    fiberTitle: 'Fiber (React 내부)',
    fiberTree: ['HostRoot', '└─ HostComponent(button)', '└─ ...'],
    matchLabel: 'match / hydrate',
    checklist: ['노드 타입 일치', '순서 검증', '속성 비교 (나중 단계)'],
    options: [
      { key: 'root', label: '1. root 매칭' },
      { key: 'button', label: '2. button 매칭' },
      { key: 'next', label: '3. 다음 노드 대기' },
    ],
    results: {
      root: {
        step: 'root container 확인',
        description:
          'React는 root container 안에서 첫 hydratable DOM을 찾고, HostRoot Fiber를 hydrationParentFiber로 설정합니다.',
        highlight: 'root',
      },
      button: {
        step: 'button 노드 매칭',
        description:
          '다음 DOM 노드와 HostComponent(button) Fiber를 비교해 같은 타입의 노드인지 확인합니다.',
        highlight: 'button',
      },
      next: {
        step: '다음 hydratable DOM 대기',
        description: '현재 노드가 매칭되면 nextHydratableInstance를 다음 DOM 후보로 이동합니다.',
        highlight: 'next',
      },
    },
    stepLabel: '현재 단계',
    descriptionLabel: '설명',
  },
  followAlong: {
    number: '9',
    title: '직접 코드에서 따라가 보기',
    items: [
      { title: 'hydrateRoot 공식 문서 확인', description: 'docs/react.dev' },
      {
        title: 'ReactFiberHydrationContext.js 열기',
        description: 'packages/react-reconciler/src',
      },
      { title: 'enterHydrationState 찾기', description: '함수 위치 확인' },
      {
        title: 'hydration이 DOM 재사용이라는 점 정리',
        description: '핵심 개념 정리',
      },
    ],
  },
  takeaways: {
    number: '10',
    title: '핵심 정리',
    cards: [
      {
        number: '1',
        title: 'Hydration은 이미 존재하는 서버 HTML을 연결하는 과정이다.',
        body: '새로 DOM을 만드는 렌더링이 아닙니다.',
        tone: 'blue',
      },
      {
        number: '2',
        title: 'enterHydrationState가 hydration 진행 상태를 초기화한다.',
        body: 'nextHydratableInstance · hydrationParentFiber · isHydrating을 세팅합니다.',
        tone: 'teal',
      },
      {
        number: '3',
        title: '이후 React는 DOM과 Fiber를 순차적으로 매칭한다.',
        body: '같은 타입과 순서를 확인하며 같은 트리로 연결합니다.',
        tone: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Hydration Mismatch는 어떻게 감지되고 복구되는가?',
    description: 'Hydration 과정에서 문제가 발생했을 때의 감지와 복구 로직을 알아봅니다.',
    cta: '다음 강의로 이동',
    href: '/mismatch-detect-recover',
  },
};

const en: HydrationStartContent = {
  hero: {
    badge: 'Suspense·Error · 7/10',
    titleLines: ['Hydration is not a render', 'that creates new DOM'],
    description: 'It connects existing server HTML with the React Fiber tree.',
    serverHtml: {
      title: 'Server HTML (already in the browser)',
      fileLabel: 'index.html',
      content: HERO_HTML,
    },
    matchLabel: 'match / hydrate',
    fiberTree: {
      title: 'React Fiber tree',
      lines: [
        { label: 'HostRoot', kind: 'root' },
        { label: 'HostComponent(button)', kind: 'component' },
      ],
    },
  },
  question: {
    number: '1',
    title: "Today's question",
    question:
      'How does React take over the HTML that the server has already produced, on the client?',
  },
  compare: {
    number: '2',
    title: 'createRoot vs hydrateRoot',
    createRoot: {
      name: 'createRoot',
      lead: 'Start rendering into an empty container',
      domLabel: 'DOM state',
      domCode: '<div id="root"></div>',
      domState: '(empty)',
    },
    hydrateRoot: {
      name: 'hydrateRoot',
      lead: 'Connect a container that already has server HTML',
      domLabel: 'DOM state',
      domCode: HERO_HTML,
      domState: '(server HTML present)',
    },
  },
  serverHtml: {
    number: '3',
    title: 'Server HTML is already there',
    codeLabel: 'Browser DOM',
    code: BROWSER_DOM,
    bullets: ['The server render is already in the browser DOM.', 'React reuses that DOM.'],
  },
  hydrateCall: {
    number: '4',
    title: 'Calling hydrateRoot',
    code: { fileLabel: 'main.tsx', content: HYDRATE_CALL_CODE },
    statusTitle: 'Connecting (Hydrating...)',
    statusBody: 'Linking server DOM and Fiber together...',
    statusPill: 'isHydrating = true',
  },
  enterFlow: {
    number: '5',
    title: 'enterHydrationState flow',
    steps: [
      { label: 'hydrateRoot' },
      { label: 'root created' },
      { label: 'enterHydrationState', highlight: true },
      { label: 'find first hydratable DOM' },
      { label: 'start Fiber matching' },
    ],
  },
  states: {
    number: '6',
    title: 'Key hydration state',
    cards: [
      {
        name: 'nextHydratableInstance',
        summary: 'Next server DOM to match',
        mini: { title: 'DOM', lines: ['root', '└─ button', '└─ ...'] },
        description: 'Points to the next DOM node to match.',
        domain: 'dom',
      },
      {
        name: 'hydrationParentFiber',
        summary: 'Current hydration parent Fiber',
        mini: {
          title: 'Fiber',
          lines: ['HostRoot', '└─ HostComponent(button)'],
        },
        description: 'Points to the parent Fiber that the matching is happening on.',
        domain: 'fiber',
      },
      {
        name: 'isHydrating',
        summary: 'Whether hydration is in progress',
        mini: { title: 'Value', lines: ['true', '(hydrating...)'] },
        description: 'A flag that indicates hydration is in progress.',
        domain: 'hydrating',
      },
    ],
  },
  code: {
    number: '7',
    title: 'Source code preview',
    fileLabel: 'ReactFiberHydrationContext.js',
    content: ENTER_HYDRATION_CODE,
    sideTitle: 'View source on GitHub',
    sideBody: 'Check the actual implementation in the React repo.',
    bullets: [
      'parentInstance is the root container DOM.',
      'nextHydratableInstance points to the first hydratable child.',
      'hydrationParentFiber is the current parent Fiber.',
      'isHydrating becomes true to enter hydration mode.',
    ],
    button: { label: 'View on GitHub', href: THROW_URL },
  },
  matcher: {
    number: '8',
    title: 'DOM-Fiber matching interaction',
    domTitle: 'DOM (browser)',
    domTree: ['root', '└─ button', '└─ ...'],
    fiberTitle: 'Fiber (React)',
    fiberTree: ['HostRoot', '└─ HostComponent(button)', '└─ ...'],
    matchLabel: 'match / hydrate',
    checklist: ['Node type matches', 'Order verified', 'Attributes compared (later)'],
    options: [
      { key: 'root', label: '1. Match root' },
      { key: 'button', label: '2. Match button' },
      { key: 'next', label: '3. Wait for next node' },
    ],
    results: {
      root: {
        step: 'Confirm the root container',
        description:
          'React finds the first hydratable DOM inside the root container, and sets the HostRoot Fiber as hydrationParentFiber.',
        highlight: 'root',
      },
      button: {
        step: 'Match the button node',
        description:
          'Compare the next DOM node with the HostComponent(button) Fiber to check the node type matches.',
        highlight: 'button',
      },
      next: {
        step: 'Wait for the next hydratable DOM',
        description:
          'Once the current node matches, move nextHydratableInstance to the next DOM candidate.',
        highlight: 'next',
      },
    },
    stepLabel: 'Current step',
    descriptionLabel: 'Description',
  },
  followAlong: {
    number: '9',
    title: 'Walk it yourself',
    items: [
      { title: 'Read the hydrateRoot docs', description: 'docs/react.dev' },
      {
        title: 'Open ReactFiberHydrationContext.js',
        description: 'packages/react-reconciler/src',
      },
      { title: 'Find enterHydrationState', description: 'Locate the function' },
      {
        title: 'Internalize: hydration is DOM reuse',
        description: 'Lock in the core idea',
      },
    ],
  },
  takeaways: {
    number: '10',
    title: 'Key recap',
    cards: [
      {
        number: '1',
        title: 'Hydration is connecting existing server HTML.',
        body: 'It is not a render that creates new DOM.',
        tone: 'blue',
      },
      {
        number: '2',
        title: 'enterHydrationState initializes the hydration progress.',
        body: 'It sets nextHydratableInstance · hydrationParentFiber · isHydrating.',
        tone: 'teal',
      },
      {
        number: '3',
        title: 'React then matches DOM and Fiber in order.',
        body: 'Same type and order are verified to link the same tree.',
        tone: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'How are Hydration Mismatches detected and recovered?',
    description:
      'Learn the detection and recovery logic when something goes wrong during hydration.',
    cta: 'Go to the next lesson',
    href: '/mismatch-detect-recover',
  },
};

export const hydrationStartContent: Record<Locale, HydrationStartContent> = { ko, en };

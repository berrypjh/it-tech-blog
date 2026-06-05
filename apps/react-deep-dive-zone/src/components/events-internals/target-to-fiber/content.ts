import type { Locale } from '@it-tech-blog/preferences';

export type Tone = 'sky' | 'cyan' | 'teal' | 'emerald' | 'violet' | 'blue' | 'amber' | 'rose';

export type FlowStep = {
  label: string;
  description: string;
  tone: Tone;
};

export type FiberRow = { key: string; value: string };

export type TakeawayCard = {
  title: string;
  body: string;
  tone: Tone;
};

export type LabTarget = 'button' | 'div';

export type LabResult = {
  domLabel: string;
  fiberLabel: string;
};

export type TargetFiberContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    description: string;
    domCard: {
      title: string;
      code: string;
      caption: string;
      tag: string;
    };
    fiberCard: {
      title: string;
      rows: FiberRow[];
      caption: string;
      tag: string;
    };
  };
  question: {
    eyebrow: string;
    title: string;
  };
  domTarget: {
    step: number;
    eyebrow: string;
    title: string;
    nativeEventLabel: string;
    nativeEventCode: string;
    valueCard: {
      title: string;
      input: string;
      output: string;
      caption: string;
    };
  };
  fiberTarget: {
    step: number;
    eyebrow: string;
    title: string;
    description: string;
    fiberCardTitle: string;
    rows: FiberRow[];
    caption: string;
  };
  flow: {
    step: number;
    eyebrow: string;
    title: string;
    steps: FlowStep[];
  };
  hydration: {
    step: number;
    eyebrow: string;
    title: string;
    description: string;
    centerLabel: string;
    centerHint: string;
    button: { label: string; href: string };
  };
  handoff: {
    step: number;
    eyebrow: string;
    title: string;
    steps: { title: string; body: string; tone: Tone }[];
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
    button: { label: string; href: string };
  };
  lab: {
    step: number;
    eyebrow: string;
    title: string;
    domTree: string;
    fiberTree: { label: string; depth: number; tone: LabTarget | 'root' }[];
    selector: { label: string; targets: { value: LabTarget; label: string }[] };
    resultLabels: {
      domTarget: string;
      matched: string;
    };
    results: Record<LabTarget, LabResult>;
    defaultTarget: LabTarget;
  };
  mission: {
    step: number;
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; badge: string }[];
  };
  takeaways: {
    step: number;
    eyebrow: string;
    title: string;
    cards: TakeawayCard[];
  };
  cta: {
    text: string;
    href: string;
  };
};

const REAL_CODE = `// ReactDOMEventListener.js
const return_targetInst = findInstanceBlockingTarget(targetNode);

if (blockedOn === null) {
  dispatchEventForPluginEventSystem(
    domEventName,
    eventSystemFlags,
    nativeEvent,
    return_targetInst,
    targetContainer,
  );
}`;

const NATIVE_EVENT_CODE = `{
  type: 'click',
  target: <button id="save">...</button>,
  currentTarget: <div>...</div>,
  ...
}`;

const DOM_TREE = `<div id="app">
  <button id="save">저장</button>
</div>`;

const DOM_TREE_EN = `<div id="app">
  <button id="save">Save</button>
</div>`;

const HOST_FIBER_ROWS: FiberRow[] = [
  { key: 'type', value: "'button'" },
  { key: 'stateNode', value: '<button id="save">' },
  { key: 'memoizedProps', value: '{ onClick: handleClick }' },
];

const ko: TargetFiberContent = {
  hero: {
    badge: '이벤트 시스템 · 5/10단계',
    titleLines: ['event.target은 DOM,', 'React는 Fiber를 원한다'],
    description:
      '브라우저는 DOM 요소를 알려주지만, React는 그 DOM을 가장 가까운 Fiber 노드로 해석합니다.',
    domCard: {
      title: 'DOM (브라우저가 주는 것)',
      code: '<button id="save">저장</button>',
      caption: '실제 DOM 노드',
      tag: 'HTMLElement',
    },
    fiberCard: {
      title: 'HostComponent Fiber (React가 원하는 것)',
      rows: HOST_FIBER_ROWS,
      caption: 'Fiber 노드',
      tag: 'FiberNode',
    },
  },
  question: {
    eyebrow: '오늘의 질문',
    title: '브라우저가 알려준 button DOM을 React는 어떻게 Button Fiber로 연결할까?',
  },
  domTarget: {
    step: 1,
    eyebrow: 'browser-dom-target',
    title: '브라우저가 주는 것은 DOM target',
    nativeEventLabel: '브라우저 이벤트 (NativeEvent)',
    nativeEventCode: NATIVE_EVENT_CODE,
    valueCard: {
      title: '브라우저가 알려주는 값',
      input: 'nativeEvent.target',
      output: '<button id="save">',
      caption: '실제 DOM 노드만 제공',
    },
  },
  fiberTarget: {
    step: 2,
    eyebrow: 'react-fiber-target',
    title: 'React가 필요한 것은 Fiber target',
    description:
      'React는 이 DOM에 연결된 Fiber를 찾아야 이벤트 핸들러(onClick 등)를 사용할 수 있습니다.',
    fiberCardTitle: 'HostComponent Fiber (Target)',
    rows: HOST_FIBER_ROWS,
    caption: '이벤트 핸들러 정보는 Fiber에 있습니다.',
  },
  flow: {
    step: 3,
    eyebrow: 'dom-to-fiber-flow',
    title: 'DOM node → Fiber 변환 흐름',
    steps: [
      {
        label: 'nativeEvent',
        description: '브라우저가 발생시킨 원본 이벤트 객체',
        tone: 'sky',
      },
      {
        label: 'getEventTarget(nativeEvent)',
        description: '이벤트 타입에 따라 실제 target이 될 노드를 정규화합니다.',
        tone: 'blue',
      },
      {
        label: 'targetNode',
        description: '최종적으로 이벤트가 발생한 DOM Node',
        tone: 'violet',
      },
      {
        label: 'findInstanceBlockingTarget(targetNode)',
        description:
          'DOM Node로부터 해당되는 Fiber(Node)를 찾아 변환합니다. hydration/blocked 상태도 함께 확인합니다.',
        tone: 'teal',
      },
      {
        label: 'return_targetInst',
        description: '이벤트 시스템으로 전달할 Fiber target (예: HostComponent Fiber 등)',
        tone: 'emerald',
      },
    ],
  },
  hydration: {
    step: 4,
    eyebrow: 'hydration-preview',
    title: 'blockedOn / hydration 분기 미리보기',
    description: '어떤 상황에서는 이벤트를 바로 처리하지 못하고 hydration 상태를 먼저 확인합니다.',
    centerLabel: 'Hydration Boundary',
    centerHint: 'blockedOn check',
    button: { label: '10장에서 다시 보기', href: '/priority-replay-action' },
  },
  handoff: {
    step: 5,
    eyebrow: 'plugin-handoff',
    title: 'Plugin Event System으로 전달',
    steps: [
      {
        title: 'Fiber target 확보',
        body: 'return_targetInst',
        tone: 'teal',
      },
      {
        title: 'dispatchEventForPluginEventSystem(...)',
        body: '이벤트 시스템으로 전달',
        tone: 'blue',
      },
      {
        title: 'Plugin Event System 진입',
        body: '누적 → 추출 → 호출',
        tone: 'violet',
      },
    ],
    emphasis: '이 지점부터는 DOM이 아니라 Fiber를 기준으로 이벤트가 처리됩니다.',
  },
  realCode: {
    step: 6,
    eyebrow: 'real-code',
    title: '실제 코드 미리보기',
    smallDescription: 'Fiber target을 확보한 뒤 Plugin Event System으로 전달',
    fileLabel: 'ReactDOMEventListener.js',
    code: REAL_CODE,
    explanation: {
      label: '설명',
      body: '이 시점부터 이벤트는 DOM 기준이 아니라 Fiber 기준으로 처리됩니다.',
    },
    button: {
      label: 'GitHub에서 전체 코드 보기',
      href: 'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/ReactDOMEventListener.js',
    },
  },
  lab: {
    step: 7,
    eyebrow: 'mapping-lab',
    title: 'DOM-Fiber 매핑 실험',
    domTree: DOM_TREE,
    fiberTree: [
      { label: 'App Fiber (HostRoot)', depth: 0, tone: 'root' },
      { label: "Div Fiber (HostComponent: 'div')", depth: 1, tone: 'div' },
      { label: "Button Fiber (HostComponent: 'button')", depth: 2, tone: 'button' },
    ],
    selector: {
      label: '클릭 대상 선택',
      targets: [
        { value: 'button', label: '버튼 클릭' },
        { value: 'div', label: 'div 클릭' },
      ],
    },
    resultLabels: {
      domTarget: 'DOM target',
      matched: 'Matched Fiber',
    },
    results: {
      button: { domLabel: 'button#save', fiberLabel: 'HostComponent(button)' },
      div: { domLabel: 'div#app', fiberLabel: 'HostComponent(div)' },
    },
    defaultTarget: 'button',
  },
  mission: {
    step: 8,
    eyebrow: 'follow-along',
    title: '직접 코드에서 따라가 보기',
    description: 'React 저장소를 직접 열어 DOM→Fiber 변환 흐름을 손으로 확인해 보세요.',
    items: [
      {
        title: 'ReactDOMEventListener.js에서 dispatchEvent를 찾는다',
        badge: '파일 탐색',
      },
      {
        title: 'findInstanceBlockingTarget 흐름을 확인한다',
        badge: '흐름 추적',
      },
      {
        title: 'return_targetInst가 dispatchEventForPluginEventSystem으로 전달되는지 본다',
        badge: '핵심 연결',
      },
    ],
  },
  takeaways: {
    step: 9,
    eyebrow: 'key-takeaways',
    title: '핵심 정리',
    cards: [
      {
        title: '브라우저는 DOM target을 준다.',
        body: 'nativeEvent.target은 실제 DOM 노드다.',
        tone: 'blue',
      },
      {
        title: 'React는 이를 Fiber target으로 재해석한다.',
        body: 'DOM → Fiber 매핑을 통해 가장 가까운 Fiber를 찾는다.',
        tone: 'teal',
      },
      {
        title: '이후 이벤트 처리는 Fiber 기준으로 진행된다.',
        body: 'Plugin Event System은 Fiber 정보를 기준으로 동작한다.',
        tone: 'violet',
      },
    ],
  },
  cta: {
    text: '다음: Plugin Event System 보기',
    href: '/plugin-event-system',
  },
};

const en: TargetFiberContent = {
  hero: {
    badge: 'Event System · 5/10',
    titleLines: ['event.target is DOM,', 'React wants a Fiber'],
    description:
      'The browser hands you a DOM element, but React reinterprets it as the closest Fiber node.',
    domCard: {
      title: 'DOM (what the browser hands you)',
      code: '<button id="save">Save</button>',
      caption: 'Actual DOM node',
      tag: 'HTMLElement',
    },
    fiberCard: {
      title: 'HostComponent Fiber (what React wants)',
      rows: HOST_FIBER_ROWS,
      caption: 'Fiber node',
      tag: 'FiberNode',
    },
  },
  question: {
    eyebrow: "Today's question",
    title: 'The browser gives you the button DOM — how does React connect it to the Button Fiber?',
  },
  domTarget: {
    step: 1,
    eyebrow: 'browser-dom-target',
    title: 'What the browser gives you is a DOM target',
    nativeEventLabel: 'Browser event (NativeEvent)',
    nativeEventCode: NATIVE_EVENT_CODE,
    valueCard: {
      title: 'What the browser exposes',
      input: 'nativeEvent.target',
      output: '<button id="save">',
      caption: 'Only the actual DOM node',
    },
  },
  fiberTarget: {
    step: 2,
    eyebrow: 'react-fiber-target',
    title: 'What React needs is a Fiber target',
    description:
      'React has to find the Fiber linked to that DOM before it can reach your event handlers (like onClick).',
    fiberCardTitle: 'HostComponent Fiber (Target)',
    rows: HOST_FIBER_ROWS,
    caption: 'Event handler information lives on the Fiber.',
  },
  flow: {
    step: 3,
    eyebrow: 'dom-to-fiber-flow',
    title: 'DOM node → Fiber conversion flow',
    steps: [
      {
        label: 'nativeEvent',
        description: 'The raw event object fired by the browser.',
        tone: 'sky',
      },
      {
        label: 'getEventTarget(nativeEvent)',
        description: 'Normalize the actual target node based on event type.',
        tone: 'blue',
      },
      {
        label: 'targetNode',
        description: 'The DOM node where the event eventually originated.',
        tone: 'violet',
      },
      {
        label: 'findInstanceBlockingTarget(targetNode)',
        description:
          'Find and convert the matching Fiber node from the DOM node. Also checks hydration/blocked state.',
        tone: 'teal',
      },
      {
        label: 'return_targetInst',
        description: 'The Fiber target handed to the event system (e.g. a HostComponent Fiber).',
        tone: 'emerald',
      },
    ],
  },
  hydration: {
    step: 4,
    eyebrow: 'hydration-preview',
    title: 'blockedOn / hydration preview',
    description:
      'In some situations the event cannot be processed immediately — hydration state has to be checked first.',
    centerLabel: 'Hydration Boundary',
    centerHint: 'blockedOn check',
    button: { label: 'Revisit in Chapter 10', href: '/priority-replay-action' },
  },
  handoff: {
    step: 5,
    eyebrow: 'plugin-handoff',
    title: 'Handed off to the Plugin Event System',
    steps: [
      {
        title: 'Secure the Fiber target',
        body: 'return_targetInst',
        tone: 'teal',
      },
      {
        title: 'dispatchEventForPluginEventSystem(...)',
        body: 'Forward to the event system',
        tone: 'blue',
      },
      {
        title: 'Enter the Plugin Event System',
        body: 'accumulate → extract → invoke',
        tone: 'violet',
      },
    ],
    emphasis: 'From this point on, events are processed against the Fiber, not the DOM.',
  },
  realCode: {
    step: 6,
    eyebrow: 'real-code',
    title: 'Real source preview',
    smallDescription: 'Once the Fiber target is secured, hand it to the Plugin Event System',
    fileLabel: 'ReactDOMEventListener.js',
    code: REAL_CODE,
    explanation: {
      label: 'Explanation',
      body: 'From here, events are handled on Fiber terms — not DOM terms.',
    },
    button: {
      label: 'View full code on GitHub',
      href: 'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/ReactDOMEventListener.js',
    },
  },
  lab: {
    step: 7,
    eyebrow: 'mapping-lab',
    title: 'DOM-Fiber mapping lab',
    domTree: DOM_TREE_EN,
    fiberTree: [
      { label: 'App Fiber (HostRoot)', depth: 0, tone: 'root' },
      { label: "Div Fiber (HostComponent: 'div')", depth: 1, tone: 'div' },
      { label: "Button Fiber (HostComponent: 'button')", depth: 2, tone: 'button' },
    ],
    selector: {
      label: 'Pick a click target',
      targets: [
        { value: 'button', label: 'Click button' },
        { value: 'div', label: 'Click div' },
      ],
    },
    resultLabels: {
      domTarget: 'DOM target',
      matched: 'Matched Fiber',
    },
    results: {
      button: { domLabel: 'button#save', fiberLabel: 'HostComponent(button)' },
      div: { domLabel: 'div#app', fiberLabel: 'HostComponent(div)' },
    },
    defaultTarget: 'button',
  },
  mission: {
    step: 8,
    eyebrow: 'follow-along',
    title: 'Walk it in the source',
    description: 'Open the React repository and verify the DOM→Fiber conversion flow by hand.',
    items: [
      {
        title: 'Find dispatchEvent in ReactDOMEventListener.js',
        badge: 'file search',
      },
      {
        title: 'Confirm the findInstanceBlockingTarget flow',
        badge: 'flow trace',
      },
      {
        title: 'See return_targetInst hand off to dispatchEventForPluginEventSystem',
        badge: 'key link',
      },
    ],
  },
  takeaways: {
    step: 9,
    eyebrow: 'key-takeaways',
    title: 'Key takeaways',
    cards: [
      {
        title: 'The browser gives you a DOM target.',
        body: 'nativeEvent.target is a real DOM node.',
        tone: 'blue',
      },
      {
        title: 'React reinterprets it as a Fiber target.',
        body: 'It locates the closest Fiber via DOM → Fiber mapping.',
        tone: 'teal',
      },
      {
        title: 'Subsequent event handling runs against the Fiber.',
        body: 'The Plugin Event System works off Fiber information.',
        tone: 'violet',
      },
    ],
  },
  cta: {
    text: 'Next: the Plugin Event System',
    href: '/plugin-event-system',
  },
};

export const targetFiberContent: Record<Locale, TargetFiberContent> = { ko, en };

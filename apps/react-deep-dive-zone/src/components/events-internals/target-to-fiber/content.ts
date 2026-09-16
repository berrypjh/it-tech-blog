import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type FiberRow = { key: string; value: string };

export type ConvertStepId = 'native' | 'get-target' | 'closest' | 'blocked' | 'handoff';

export type ConvertStep = {
  id: ConvertStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type KeyFactId = 'random' | 'closest' | 'props';

export type KeyFact = {
  id: KeyFactId;
  title: string;
  role: string;
  description: string;
  tone: ToneKey;
};

export type TargetToFiberContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    domLabel: string;
    domCode: string;
    fiberLabel: string;
    fiberRows: FiberRow[];
  };
  gap: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    dom: { label: string; caption: string; bullets: string[] };
    fiber: { label: string; caption: string; bullets: string[] };
    note: string;
  };
  conversion: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: ConvertStep[];
    note: string;
  };
  internalKey: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    codeHeader: string;
    code: string;
    facts: KeyFact[];
    note: string;
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePath: string;
    lookForLabel: string;
    lookFor: string;
    whyLabel: string;
    why: string;
    code: string;
    primaryCta: string;
    primaryHref: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const INTERNAL_KEY_CODE = `const randomKey = Math.random().toString(36).slice(2);
const internalInstanceKey = '__reactFiber$' + randomKey;
const internalPropsKey = '__reactProps$' + randomKey;

export function precacheFiberNode(hostInst, node) {
  node[internalInstanceKey] = hostInst;
}

export function getClosestInstanceFromNode(targetNode) {
  let targetInst = targetNode[internalInstanceKey];

  if (targetInst) {
    return targetInst;
  }

  // 노드에 키가 없으면 부모로 올라가며 찾는다
  let parentNode = targetNode.parentNode;
  while (parentNode) {
    targetInst = parentNode[internalInstanceKey];
    if (targetInst) {
      return targetInst;
    }
    parentNode = parentNode.parentNode;
  }

  return null;
}`;

const INTERNAL_KEY_CODE_EN = `const randomKey = Math.random().toString(36).slice(2);
const internalInstanceKey = '__reactFiber$' + randomKey;
const internalPropsKey = '__reactProps$' + randomKey;

export function precacheFiberNode(hostInst, node) {
  node[internalInstanceKey] = hostInst;
}

export function getClosestInstanceFromNode(targetNode) {
  let targetInst = targetNode[internalInstanceKey];

  if (targetInst) {
    return targetInst;
  }

  // no key on the node, so walk up to the parents
  let parentNode = targetNode.parentNode;
  while (parentNode) {
    targetInst = parentNode[internalInstanceKey];
    if (targetInst) {
      return targetInst;
    }
    parentNode = parentNode.parentNode;
  }

  return null;
}`;

const DISPATCH_CODE = `function dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay(
  domEventName, eventSystemFlags, targetContainer, nativeEvent,
) {
  const blockedOn = findInstanceBlockingEvent(nativeEvent);

  if (blockedOn === null) {
    dispatchEventForPluginEventSystem(
      domEventName,
      eventSystemFlags,
      nativeEvent,
      return_targetInst,
      targetContainer,
    );
    return;
  }

  // hydration이 끝나지 않았으면 이벤트를 큐에 담아 다시 재생한다
  queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent);
}`;

const DOM_COMPONENT_TREE_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/client/ReactDOMComponentTree.js';

const HOST_FIBER_ROWS: FiberRow[] = [
  { key: 'tag', value: 'HostComponent' },
  { key: 'type', value: "'button'" },
  { key: 'stateNode', value: '<button id="save">' },
  { key: 'memoizedProps', value: '{ onClick: handleClick }' },
];

const ko: TargetToFiberContent = {
  hero: {
    badge: '이벤트 시스템 · 5/10단계',
    title: { line1: '브라우저는 DOM을 주는데', line2: '핸들러는 Fiber에 있다' },
    description:
      'event.target에는 onClick이 없습니다. React는 DOM 노드에 미리 심어 둔 내부 키로 대응하는 Fiber를 찾아 건너갑니다.',
    diagramBadge: 'target lookup',
    diagramCaption: 'dom node → fiber',
    domLabel: 'event.target',
    domCode: '<button id="save">저장</button>',
    fiberLabel: 'HostComponent Fiber',
    fiberRows: HOST_FIBER_ROWS,
  },
  gap: {
    badge: '01',
    eyebrow: 'the gap',
    title: 'DOM에는 핸들러가 없다',
    description:
      '브라우저가 넘겨주는 정보와 React가 실행에 필요한 정보는 서로 다른 곳에 있습니다. 이 간극을 메우는 것이 이 페이지의 주제입니다.',
    dom: {
      label: '브라우저가 주는 것',
      caption: 'nativeEvent.target은 순수한 DOM 노드입니다.',
      bullets: [
        '태그 이름과 id, class 같은 DOM 속성',
        '부모와 자식으로 이어지는 DOM 트리',
        'onClick 같은 React prop은 어디에도 없다',
      ],
    },
    fiber: {
      label: 'React가 필요한 것',
      caption: '실행할 핸들러는 Fiber의 memoizedProps에 있습니다.',
      bullets: [
        'memoizedProps에 담긴 onClick과 onClickCapture',
        'return 포인터로 이어지는 Fiber 트리',
        '리스너를 모으려면 이 트리를 타야 한다',
      ],
    },
    note: 'React 트리와 DOM 트리는 모양이 비슷하지만 같지 않습니다. Portal이 있으면 부모 관계가 아예 달라집니다.',
  },
  conversion: {
    badge: '02',
    eyebrow: 'conversion',
    title: 'DOM 노드가 Fiber가 되기까지',
    description:
      'root 리스너가 이벤트를 받은 직후, 플러그인에 넘기기 전에 이 다섯 단계가 먼저 끝납니다.',
    steps: [
      {
        id: 'native',
        num: '01',
        title: 'nativeEvent 수신',
        description: '브라우저가 만든 원본 이벤트 객체가 wrapper에 도착합니다.',
        tone: 'sky',
      },
      {
        id: 'get-target',
        num: '02',
        title: 'getEventTarget으로 정규화',
        description: 'target이 없거나 텍스트 노드인 경우를 정리해 실제 요소를 얻습니다.',
        tone: 'cyan',
      },
      {
        id: 'closest',
        num: '03',
        title: 'getClosestInstanceFromNode',
        description: '내부 키를 읽어 Fiber를 꺼내고, 없으면 부모로 올라가며 찾습니다.',
        tone: 'indigo',
      },
      {
        id: 'blocked',
        num: '04',
        title: 'blockedOn 확인',
        description: '아직 hydration이 끝나지 않았다면 여기서 멈추고 이벤트를 큐에 담습니다.',
        tone: 'amber',
      },
      {
        id: 'handoff',
        num: '05',
        title: 'Plugin Event System으로 전달',
        description: '찾은 Fiber를 targetInst로 넘깁니다. 이 뒤로는 DOM을 보지 않습니다.',
        tone: 'violet',
      },
    ],
    note: '04에서 막히는 경우는 10페이지에서 다시 봅니다. 서버에서 온 HTML이 아직 React와 연결되기 전에 클릭이 들어온 상황입니다.',
  },
  internalKey: {
    badge: '03',
    eyebrow: 'internal key',
    title: 'DOM에 심어 둔 비밀 열쇠',
    description:
      '변환이 빠른 이유는 탐색을 하지 않기 때문입니다. React는 DOM을 만들 때 그 노드에 Fiber 참조를 직접 박아 둡니다.',
    codeHeader: 'packages/react-dom-bindings/src/client/ReactDOMComponentTree.js',
    code: INTERNAL_KEY_CODE,
    facts: [
      {
        id: 'random',
        title: '__reactFiber$xxxxx',
        role: '무작위 접미사',
        description:
          '키 이름에 난수가 붙습니다. 두 React 버전이 한 페이지에 있어도 서로의 키를 건드리지 않습니다.',
        tone: 'violet',
      },
      {
        id: 'closest',
        title: '가장 가까운 것 찾기',
        role: '부모로 거슬러 오름',
        description:
          '텍스트 노드나 React가 만들지 않은 노드에는 키가 없어, 있을 때까지 부모로 올라갑니다.',
        tone: 'indigo',
      },
      {
        id: 'props',
        title: '__reactProps$xxxxx',
        role: 'props 바로가기',
        description:
          'Fiber를 거치지 않고 현재 props를 바로 읽을 수 있게 같은 노드에 함께 심어 둡니다.',
        tone: 'teal',
      },
    ],
    note: '개발자 도구 콘솔에서 DOM 노드를 선택하고 키 목록을 보면 이 두 키가 실제로 보입니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-dom-bindings/src/events/ReactDOMEventListener.js',
    lookForLabel: '볼 것',
    lookFor: 'findInstanceBlockingEvent, return_targetInst, dispatchEventForPluginEventSystem',
    whyLabel: '설명',
    why: 'blockedOn이 null일 때만 플러그인으로 넘어간다는 분기가, 이벤트가 미뤄질 수 있다는 사실을 그대로 보여 줍니다.',
    code: DISPATCH_CODE,
    primaryCta: 'ReactDOMComponentTree.js 읽기',
    primaryHref: DOM_COMPONENT_TREE_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '플러그인은 이 Fiber로 무엇을 하는가',
    description:
      'Fiber를 손에 쥔 채 Plugin Event System에 들어갑니다. 이벤트 타입마다 다른 플러그인이 기다립니다.',
    cta: '다음 페이지로 이동',
    href: '/plugin-event-system',
  },
};

const en: TargetToFiberContent = {
  hero: {
    badge: 'Event System · 5/10',
    title: {
      line1: 'The browser hands over a DOM node',
      line2: 'but the handler lives on a Fiber',
    },
    description:
      'There is no onClick on event.target. React crosses over by reading an internal key it planted on the DOM node when it created it.',
    diagramBadge: 'target lookup',
    diagramCaption: 'dom node → fiber',
    domLabel: 'event.target',
    domCode: '<button id="save">Save</button>',
    fiberLabel: 'HostComponent Fiber',
    fiberRows: HOST_FIBER_ROWS,
  },
  gap: {
    badge: '01',
    eyebrow: 'the gap',
    title: 'The DOM carries no handler',
    description:
      'What the browser provides and what React needs in order to run live in different places. Closing that gap is the subject of this page.',
    dom: {
      label: 'What the browser gives',
      caption: 'nativeEvent.target is a plain DOM node.',
      bullets: [
        'DOM attributes such as tag name, id and class',
        'The DOM tree of parents and children',
        'React props like onClick appear nowhere',
      ],
    },
    fiber: {
      label: 'What React needs',
      caption: 'The handler to run sits in the Fiber memoizedProps.',
      bullets: [
        'onClick and onClickCapture inside memoizedProps',
        'The Fiber tree linked by return pointers',
        'Collecting listeners means walking that tree',
      ],
    },
    note: 'The React tree and the DOM tree look alike but are not the same. With a Portal the parent relationship differs entirely.',
  },
  conversion: {
    badge: '02',
    eyebrow: 'conversion',
    title: 'From DOM node to Fiber',
    description:
      'Right after the root listener receives the event, and before anything reaches a plugin, these five steps complete.',
    steps: [
      {
        id: 'native',
        num: '01',
        title: 'Receive the nativeEvent',
        description: 'The original browser event object arrives at the wrapper.',
        tone: 'sky',
      },
      {
        id: 'get-target',
        num: '02',
        title: 'Normalize with getEventTarget',
        description: 'Handle missing targets and text nodes to land on a real element.',
        tone: 'cyan',
      },
      {
        id: 'closest',
        num: '03',
        title: 'getClosestInstanceFromNode',
        description: 'Read the internal key for a Fiber, walking up to parents when absent.',
        tone: 'indigo',
      },
      {
        id: 'blocked',
        num: '04',
        title: 'Check blockedOn',
        description: 'If hydration has not finished, stop here and queue the event instead.',
        tone: 'amber',
      },
      {
        id: 'handoff',
        num: '05',
        title: 'Hand off to the plugins',
        description: 'Pass the Fiber along as targetInst. Nothing after this looks at the DOM.',
        tone: 'violet',
      },
    ],
    note: 'Getting blocked at step 04 returns on page 10 — a click arriving before server HTML has been wired to React.',
  },
  internalKey: {
    badge: '03',
    eyebrow: 'internal key',
    title: 'The key planted on the DOM',
    description:
      'The lookup is fast because there is no search. React stamps a Fiber reference onto each node as it creates it.',
    codeHeader: 'packages/react-dom-bindings/src/client/ReactDOMComponentTree.js',
    code: INTERNAL_KEY_CODE_EN,
    facts: [
      {
        id: 'random',
        title: '__reactFiber$xxxxx',
        role: 'Random suffix',
        description:
          'A random string is appended, so two React copies on one page never touch each other keys.',
        tone: 'violet',
      },
      {
        id: 'closest',
        title: 'Find the closest one',
        role: 'Walks up parents',
        description:
          'Text nodes and non-React nodes carry no key, so the search climbs until it finds one.',
        tone: 'indigo',
      },
      {
        id: 'props',
        title: '__reactProps$xxxxx',
        role: 'Props shortcut',
        description:
          'Planted on the same node so current props can be read without going through the Fiber.',
        tone: 'teal',
      },
    ],
    note: 'Select a DOM node in the devtools console and list its keys — both of these are genuinely visible.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-dom-bindings/src/events/ReactDOMEventListener.js',
    lookForLabel: 'Look for',
    lookFor: 'findInstanceBlockingEvent, return_targetInst, dispatchEventForPluginEventSystem',
    whyLabel: 'Why',
    why: 'Only proceeding to the plugins when blockedOn is null shows plainly that an event can be deferred.',
    code: DISPATCH_CODE,
    primaryCta: 'Read ReactDOMComponentTree.js',
    primaryHref: DOM_COMPONENT_TREE_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'What the plugins do with that Fiber',
    description:
      'Holding the Fiber, we step into the Plugin Event System, where a different plugin waits per event type.',
    cta: 'Go to the next page',
    href: '/plugin-event-system',
  },
};

export const targetToFiberContent: Record<Locale, TargetToFiberContent> = { ko, en };

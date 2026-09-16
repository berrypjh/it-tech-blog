import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type ListenerGroupId = 'mouse' | 'pointer' | 'keyboard' | 'input' | 'focus' | 'form';

export type ListenerGroup = {
  id: ListenerGroupId;
  label: string;
  events: string[];
  tone: ToneKey;
};

export type SetupStepId =
  | 'create-root'
  | 'resolve-container'
  | 'listen-all'
  | 'iterate'
  | 'register'
  | 'mark';

export type SetupStep = {
  id: SetupStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type ExceptionRow = {
  event: string;
  where: string;
  why: string;
};

export type RootNativeEventContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    rootLabel: string;
    rootDom: string;
    listenerLabel: string;
    listeners: string[];
    tailLabel: string;
  };
  setup: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: SetupStep[];
    note: string;
  };
  coverage: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    groups: ListenerGroup[];
    note: string;
  };
  exceptions: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: ExceptionRow[];
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

const ROOT_DOM = `<div id="root">
  <App />
</div>`;

const LISTEN_TO_ALL_CODE = `export function listenToAllSupportedEvents(rootContainerElement) {
  if (!rootContainerElement[listeningMarker]) {
    rootContainerElement[listeningMarker] = true;

    allNativeEvents.forEach((domEventName) => {
      if (domEventName !== 'selectionchange') {
        if (!nonDelegatedEvents.has(domEventName)) {
          listenToNativeEvent(domEventName, false, rootContainerElement);
        }
        listenToNativeEvent(domEventName, true, rootContainerElement);
      }
    });

    const ownerDocument =
      rootContainerElement.nodeType === DOCUMENT_NODE
        ? rootContainerElement
        : rootContainerElement.ownerDocument;

    if (ownerDocument !== null) {
      listenToNativeEvent('selectionchange', false, ownerDocument);
    }
  }
}`;

const DOM_PLUGIN_EVENT_SYSTEM_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/DOMPluginEventSystem.js';

const ko: RootNativeEventContent = {
  hero: {
    badge: '이벤트 시스템 · 2/10단계',
    title: { line1: 'onClick을 만나기 전에', line2: '리스너는 이미 다 걸려 있다' },
    description:
      'createRoot가 호출되는 순간 React는 지원하는 모든 이벤트 타입을 root 컨테이너에 한 번에 등록합니다. 컴포넌트는 아직 렌더되지도 않았습니다.',
    diagramBadge: 'root setup',
    diagramCaption: 'createRoot → listeners',
    rootLabel: 'root container',
    rootDom: ROOT_DOM,
    listenerLabel: '등록된 native listener',
    listeners: ['click', 'keydown', 'input', 'pointerdown', 'focusin', 'submit', '...'],
    tailLabel: 'capture · bubble 두 벌씩',
  },
  setup: {
    badge: '01',
    eyebrow: 'createRoot',
    title: 'root가 만들어질 때 벌어지는 여섯 단계',
    description:
      'render를 부르기 전, createRoot 안에서 이미 이벤트 수신 체계가 완성됩니다. 순서를 보면 렌더보다 먼저라는 점이 분명해집니다.',
    steps: [
      {
        id: 'create-root',
        num: '01',
        title: 'createRoot 호출',
        description: 'ReactDOMRoot.js의 createRoot가 컨테이너를 인자로 받습니다.',
        tone: 'sky',
      },
      {
        id: 'resolve-container',
        num: '02',
        title: 'rootContainerElement 결정',
        description: '컨테이너가 주석 노드면 부모를, 아니면 자신을 컨테이너로 씁니다.',
        tone: 'cyan',
      },
      {
        id: 'listen-all',
        num: '03',
        title: 'listenToAllSupportedEvents 호출',
        description: '이벤트 시스템 초기화가 여기서 시작됩니다. render보다 앞섭니다.',
        tone: 'violet',
      },
      {
        id: 'iterate',
        num: '04',
        title: 'allNativeEvents 순회',
        description: 'React가 지원하는 native 이벤트 이름 집합을 처음부터 끝까지 돕니다.',
        tone: 'indigo',
      },
      {
        id: 'register',
        num: '05',
        title: 'capture · bubble 두 번 등록',
        description: '하나의 이벤트 타입마다 캡처용과 버블용 리스너를 각각 붙입니다.',
        tone: 'teal',
      },
      {
        id: 'mark',
        num: '06',
        title: '중복 등록 방지 표시',
        description: '컨테이너에 내부 마커를 찍어 두 번째 createRoot에서 다시 붙지 않게 합니다.',
        tone: 'emerald',
      },
    ],
    note: '05 때문에 실제 리스너 수는 이벤트 종류의 두 배입니다. 그래도 노드 수와는 무관한 상수입니다.',
  },
  coverage: {
    badge: '02',
    eyebrow: 'allNativeEvents',
    title: 'root 하나가 받는 이벤트들',
    description:
      '특정 컴포넌트가 그 이벤트를 쓰는지와 무관하게 전부 등록됩니다. 미리 걸어 두는 편이 나중에 붙였다 떼는 것보다 단순하기 때문입니다.',
    groups: [
      {
        id: 'mouse',
        label: '마우스',
        events: ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover'],
        tone: 'sky',
      },
      {
        id: 'pointer',
        label: '포인터',
        events: ['pointerdown', 'pointerup', 'pointermove', 'pointercancel'],
        tone: 'cyan',
      },
      {
        id: 'keyboard',
        label: '키보드',
        events: ['keydown', 'keyup', 'keypress'],
        tone: 'violet',
      },
      {
        id: 'input',
        label: '입력',
        events: ['input', 'change', 'compositionstart', 'compositionend'],
        tone: 'teal',
      },
      {
        id: 'focus',
        label: '포커스',
        events: ['focusin', 'focusout'],
        tone: 'indigo',
      },
      {
        id: 'form',
        label: '폼',
        events: ['submit', 'reset', 'invalid'],
        tone: 'emerald',
      },
    ],
    note: '버튼이 천 개여도 click 리스너는 여전히 두 개(capture·bubble)입니다. 이것이 위임의 실제 이득입니다.',
  },
  exceptions: {
    badge: '03',
    eyebrow: 'exceptions',
    title: '위임되지 않는 것들',
    description:
      '모든 이벤트가 root로 위임되지는 않습니다. 버블링하지 않거나, 문서 단위로만 의미가 있는 이벤트는 따로 처리합니다.',
    headers: ['이벤트', '등록 위치', '이유'],
    rows: [
      {
        event: 'selectionchange',
        where: 'ownerDocument',
        why: 'document에서만 발생하는 이벤트라 root 컨테이너에 걸어도 잡히지 않습니다.',
      },
      {
        event: 'scroll · scrollend',
        where: '해당 DOM 노드에 직접',
        why: '버블링하지 않으므로 위임이 성립하지 않습니다. nonDelegatedEvents 목록에 있습니다.',
      },
      {
        event: 'load · error (미디어)',
        where: '해당 DOM 노드에 직접',
        why: 'img, video 같은 요소에서만 발생하고 위로 전파되지 않습니다.',
      },
    ],
    note: 'nonDelegatedEvents에 든 이벤트도 capture 리스너는 root에 걸립니다. 캡처 단계는 위에서 아래로 내려오기 때문입니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-dom-bindings/src/events/DOMPluginEventSystem.js',
    lookForLabel: '볼 것',
    lookFor: 'listenToAllSupportedEvents, allNativeEvents, nonDelegatedEvents, listeningMarker',
    whyLabel: '설명',
    why: 'listenToNativeEvent가 같은 이벤트 이름으로 두 번 불리는 모습이 capture와 bubble 두 벌 등록의 증거입니다.',
    code: LISTEN_TO_ALL_CODE,
    primaryCta: 'DOMPluginEventSystem.js 읽기',
    primaryHref: DOM_PLUGIN_EVENT_SYSTEM_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'onClick이라는 이름은 어디서 click이 되는가',
    description:
      'root에 걸린 것은 click인데 우리가 쓰는 것은 onClick입니다. 둘을 잇는 표를 다음 페이지에서 봅니다.',
    cta: '다음 페이지로 이동',
    href: '/onclick-to-click',
  },
};

const en: RootNativeEventContent = {
  hero: {
    badge: 'Event System · 2/10',
    title: { line1: 'Long before onClick exists', line2: 'the listeners are already there' },
    description:
      'The moment createRoot runs, React registers every supported event type on the root container at once — before a single component has rendered.',
    diagramBadge: 'root setup',
    diagramCaption: 'createRoot → listeners',
    rootLabel: 'root container',
    rootDom: ROOT_DOM,
    listenerLabel: 'registered native listeners',
    listeners: ['click', 'keydown', 'input', 'pointerdown', 'focusin', 'submit', '...'],
    tailLabel: 'one capture and one bubble each',
  },
  setup: {
    badge: '01',
    eyebrow: 'createRoot',
    title: 'Six steps while the root is built',
    description:
      'The whole receiving apparatus is finished inside createRoot, before render is ever called. The order makes that explicit.',
    steps: [
      {
        id: 'create-root',
        num: '01',
        title: 'createRoot is called',
        description: 'createRoot in ReactDOMRoot.js receives the container element.',
        tone: 'sky',
      },
      {
        id: 'resolve-container',
        num: '02',
        title: 'Resolve rootContainerElement',
        description: 'Use the parent when the container is a comment node, otherwise itself.',
        tone: 'cyan',
      },
      {
        id: 'listen-all',
        num: '03',
        title: 'Call listenToAllSupportedEvents',
        description: 'Event system setup starts here — ahead of render.',
        tone: 'violet',
      },
      {
        id: 'iterate',
        num: '04',
        title: 'Iterate allNativeEvents',
        description: 'Walk the full set of native event names React supports.',
        tone: 'indigo',
      },
      {
        id: 'register',
        num: '05',
        title: 'Register capture and bubble',
        description: 'Attach one capture and one bubble listener per event type.',
        tone: 'teal',
      },
      {
        id: 'mark',
        num: '06',
        title: 'Mark to avoid re-registering',
        description: 'Stamp an internal marker so a second createRoot does not attach again.',
        tone: 'emerald',
      },
    ],
    note: 'Because of step 05 the listener count is twice the number of event types — still a constant, unrelated to node count.',
  },
  coverage: {
    badge: '02',
    eyebrow: 'allNativeEvents',
    title: 'What a single root receives',
    description:
      'Everything is registered whether or not any component uses it. Attaching up front is simpler than adding and removing later.',
    groups: [
      {
        id: 'mouse',
        label: 'Mouse',
        events: ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover'],
        tone: 'sky',
      },
      {
        id: 'pointer',
        label: 'Pointer',
        events: ['pointerdown', 'pointerup', 'pointermove', 'pointercancel'],
        tone: 'cyan',
      },
      {
        id: 'keyboard',
        label: 'Keyboard',
        events: ['keydown', 'keyup', 'keypress'],
        tone: 'violet',
      },
      {
        id: 'input',
        label: 'Input',
        events: ['input', 'change', 'compositionstart', 'compositionend'],
        tone: 'teal',
      },
      {
        id: 'focus',
        label: 'Focus',
        events: ['focusin', 'focusout'],
        tone: 'indigo',
      },
      {
        id: 'form',
        label: 'Form',
        events: ['submit', 'reset', 'invalid'],
        tone: 'emerald',
      },
    ],
    note: 'A thousand buttons still means two click listeners, capture and bubble. That is the real payoff of delegation.',
  },
  exceptions: {
    badge: '03',
    eyebrow: 'exceptions',
    title: 'What does not get delegated',
    description:
      'Not every event is delegated to the root. Events that do not bubble, or only make sense per document, are handled separately.',
    headers: ['Event', 'Where it attaches', 'Why'],
    rows: [
      {
        event: 'selectionchange',
        where: 'ownerDocument',
        why: 'It only fires on the document, so a listener on the root container would never see it.',
      },
      {
        event: 'scroll · scrollend',
        where: 'Directly on the DOM node',
        why: 'It does not bubble, so delegation cannot work. It sits in nonDelegatedEvents.',
      },
      {
        event: 'load · error (media)',
        where: 'Directly on the DOM node',
        why: 'Fires only on elements like img or video and never propagates upward.',
      },
    ],
    note: 'Even events in nonDelegatedEvents still get a capture listener on the root, because the capture phase travels downward.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-dom-bindings/src/events/DOMPluginEventSystem.js',
    lookForLabel: 'Look for',
    lookFor: 'listenToAllSupportedEvents, allNativeEvents, nonDelegatedEvents, listeningMarker',
    whyLabel: 'Why',
    why: 'Seeing listenToNativeEvent called twice for the same event name is the proof that capture and bubble are registered separately.',
    code: LISTEN_TO_ALL_CODE,
    primaryCta: 'Read DOMPluginEventSystem.js',
    primaryHref: DOM_PLUGIN_EVENT_SYSTEM_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Where the name onClick becomes click',
    description:
      'The root listens for click while we write onClick. The next page opens the table that connects them.',
    cta: 'Go to the next page',
    href: '/onclick-to-click',
  },
};

export const rootNativeEventContent: Record<Locale, RootNativeEventContent> = { ko, en };

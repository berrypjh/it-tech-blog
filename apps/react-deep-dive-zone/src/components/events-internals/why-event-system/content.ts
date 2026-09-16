import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type LayerId = 'jsx' | 'system' | 'handler';

export type Layer = {
  id: LayerId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type PipelineStepId =
  | 'jsx'
  | 'root-listener'
  | 'priority'
  | 'target'
  | 'plugin'
  | 'synthetic'
  | 'accumulate'
  | 'dispatch';

export type PipelineStep = {
  id: PipelineStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type EntryFileId = 'root' | 'listener' | 'plugin';

export type EntryFile = {
  id: EntryFileId;
  fileName: string;
  role: string;
  description: string;
  tone: ToneKey;
};

export type WhyEventSystemContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    layers: Layer[];
  };
  misconception: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    wrong: { label: string; caption: string; code: string };
    right: { label: string; caption: string; steps: string[] };
    note: string;
  };
  pipeline: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: PipelineStep[];
    note: string;
  };
  entryFiles: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    files: EntryFile[];
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

const NAIVE_CODE = `// 우리가 상상하는 모습
const button = document.getElementById('save');

button.addEventListener('click', handleClick);`;

const NAIVE_CODE_EN = `// what we picture happening
const button = document.getElementById('save');

button.addEventListener('click', handleClick);`;

const DISPATCH_CODE = `export function dispatchEventForPluginEventSystem(
  domEventName,
  eventSystemFlags,
  nativeEvent,
  targetInst,
  targetContainer,
) {
  batchedUpdates(() =>
    dispatchEventsForPlugins(
      domEventName,
      eventSystemFlags,
      nativeEvent,
      targetInst,
      targetContainer,
    ),
  );
}

function dispatchEventsForPlugins(...) {
  const nativeEventTarget = getEventTarget(nativeEvent);
  const dispatchQueue = [];

  extractEvents(dispatchQueue, ...);
  processDispatchQueue(dispatchQueue, eventSystemFlags);
}`;

const DOM_PLUGIN_EVENT_SYSTEM_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/DOMPluginEventSystem.js';

const ko: WhyEventSystemContent = {
  hero: {
    badge: '이벤트 시스템 · 1/10단계',
    title: { line1: 'onClick은 button에 붙은', line2: 'listener가 아니다' },
    description:
      'React는 root 하나에 native listener를 걸어 두고, 이벤트가 들어오면 Fiber 트리를 훑어 실행할 핸들러를 직접 찾습니다.',
    diagramBadge: 'event layer',
    diagramCaption: 'jsx → system → handler',
    layers: [
      {
        id: 'jsx',
        label: '<button onClick={handleClick}>',
        caption: '우리가 선언한 prop',
        tone: 'sky',
      },
      {
        id: 'system',
        label: 'React Event System',
        caption: '수신 · 우선순위 · 플러그인 · 수집',
        tone: 'violet',
      },
      {
        id: 'handler',
        label: 'handleClick()',
        caption: '마지막에야 우리 함수가 불린다',
        tone: 'emerald',
      },
    ],
  },
  misconception: {
    badge: '01',
    eyebrow: 'misconception',
    title: 'button에는 listener가 없다',
    description:
      '개발자 도구로 button의 이벤트 리스너를 열어 보면 비어 있습니다. 클릭을 받는 것은 button이 아니라 React root입니다.',
    wrong: {
      label: '흔한 오해',
      caption: 'JSX의 onClick이 그대로 addEventListener로 번역된다고 생각하기 쉽습니다.',
      code: NAIVE_CODE,
    },
    right: {
      label: '실제 구조',
      caption: 'root에 걸린 하나의 listener가 모든 클릭을 먼저 받습니다.',
      steps: [
        '브라우저가 button에서 click 이벤트를 발생시킨다',
        '이벤트가 버블링되어 React root에 도달한다',
        'root의 native listener가 이벤트를 받는다',
        'React가 target DOM으로 Fiber를 찾는다',
        '그 Fiber의 onClick을 찾아 실행한다',
      ],
    },
    note: '리스너가 노드 수만큼 필요 없다는 것이 이 구조의 첫 번째 이득입니다. 노드가 천 개여도 listener는 하나입니다.',
  },
  pipeline: {
    badge: '02',
    eyebrow: 'pipeline',
    title: '클릭 한 번이 지나는 여덟 칸',
    description:
      '이 챕터의 나머지 아홉 페이지는 이 여덟 칸을 하나씩 확대해 읽습니다. 지금은 순서만 잡아 두면 됩니다.',
    steps: [
      {
        id: 'jsx',
        num: '01',
        title: 'JSX의 onClick prop',
        description: 'Fiber의 props에 함수가 담길 뿐, DOM에는 아무것도 붙지 않습니다.',
        tone: 'sky',
      },
      {
        id: 'root-listener',
        num: '02',
        title: 'root의 native listener',
        description: 'createRoot가 지원하는 모든 이벤트 타입을 root 컨테이너에 미리 걸어 둡니다.',
        tone: 'cyan',
      },
      {
        id: 'priority',
        num: '03',
        title: '우선순위 결정',
        description: '이벤트 타입에 따라 discrete인지 continuous인지 나누고 lane을 고릅니다.',
        tone: 'amber',
      },
      {
        id: 'target',
        num: '04',
        title: 'DOM target → Fiber',
        description: 'event.target에 붙어 있는 내부 키로 대응하는 Fiber를 찾아냅니다.',
        tone: 'indigo',
      },
      {
        id: 'plugin',
        num: '05',
        title: 'Plugin Event System',
        description: '이벤트 타입을 맡은 플러그인이 무엇을 만들지 결정합니다.',
        tone: 'violet',
      },
      {
        id: 'synthetic',
        num: '06',
        title: 'SyntheticEvent 생성',
        description: 'native event를 감싼 React 전용 이벤트 객체를 만듭니다.',
        tone: 'teal',
      },
      {
        id: 'accumulate',
        num: '07',
        title: 'capture / bubble 수집',
        description: 'Fiber를 타고 올라가며 실행할 리스너를 순서대로 모읍니다.',
        tone: 'blue',
      },
      {
        id: 'dispatch',
        num: '08',
        title: 'dispatchQueue 실행',
        description: '모아 둔 리스너를 capture는 역순, bubble은 정순으로 실행합니다.',
        tone: 'emerald',
      },
    ],
    note: '이벤트 시스템은 브라우저 이벤트와 React 핸들러 사이의 번역기입니다. 여덟 칸 전부가 그 번역 과정입니다.',
  },
  entryFiles: {
    badge: '03',
    eyebrow: 'entry files',
    title: '열어 둘 파일 세 개',
    description:
      '이벤트 코드는 react-dom-bindings/src/events 아래에 모여 있습니다. 그중 이 셋만 열어 두면 챕터 전체를 따라갈 수 있습니다.',
    files: [
      {
        id: 'root',
        fileName: 'ReactDOMRoot.js',
        role: 'root 초기화',
        description: 'createRoot가 컨테이너를 만들고 이벤트 시스템을 켜는 지점입니다.',
        tone: 'sky',
      },
      {
        id: 'listener',
        fileName: 'ReactDOMEventListener.js',
        role: 'native event 수신',
        description: 'root에 걸린 리스너가 이벤트를 받아 우선순위와 함께 넘기는 쪽입니다.',
        tone: 'cyan',
      },
      {
        id: 'plugin',
        fileName: 'DOMPluginEventSystem.js',
        role: '이벤트 시스템 중심',
        description: '플러그인 실행, 리스너 수집, dispatchQueue 처리가 전부 여기 있습니다.',
        tone: 'violet',
      },
    ],
    note: '셋 중 DOMPluginEventSystem.js가 가장 깁니다. 나머지 두 파일은 이 파일로 들어가는 입구라고 봐도 됩니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-dom-bindings/src/events/DOMPluginEventSystem.js',
    lookForLabel: '볼 것',
    lookFor: 'dispatchEventForPluginEventSystem, extractEvents, processDispatchQueue',
    whyLabel: '설명',
    why: '이벤트를 만들고(extract) 실행하는(process) 두 단계가 한 함수 안에 나란히 있습니다. 챕터 후반의 뼈대입니다.',
    code: DISPATCH_CODE,
    primaryCta: 'DOMPluginEventSystem.js 읽기',
    primaryHref: DOM_PLUGIN_EVENT_SYSTEM_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'root에 리스너는 언제 걸리는가',
    description:
      'createRoot가 호출되는 순간 무슨 이벤트가 몇 개나 등록되는지 다음 페이지에서 세어 봅니다.',
    cta: '다음 페이지로 이동',
    href: '/root-native-event',
  },
};

const en: WhyEventSystemContent = {
  hero: {
    badge: 'Event System · 1/10',
    title: { line1: 'onClick is not a listener', line2: 'attached to the button' },
    description:
      'React keeps native listeners on a single root and, when an event arrives, walks the Fiber tree to find the handler to run.',
    diagramBadge: 'event layer',
    diagramCaption: 'jsx → system → handler',
    layers: [
      {
        id: 'jsx',
        label: '<button onClick={handleClick}>',
        caption: 'the prop we declared',
        tone: 'sky',
      },
      {
        id: 'system',
        label: 'React Event System',
        caption: 'receive · prioritize · plugins · collect',
        tone: 'violet',
      },
      {
        id: 'handler',
        label: 'handleClick()',
        caption: 'our function runs only at the end',
        tone: 'emerald',
      },
    ],
  },
  misconception: {
    badge: '01',
    eyebrow: 'misconception',
    title: 'The button carries no listener',
    description:
      'Open the event listeners panel on that button in devtools and it is empty. What receives the click is the React root, not the button.',
    wrong: {
      label: 'The common assumption',
      caption: 'It is easy to assume the JSX onClick translates straight into addEventListener.',
      code: NAIVE_CODE_EN,
    },
    right: {
      label: 'The real structure',
      caption: 'A single listener on the root receives every click first.',
      steps: [
        'The browser fires a click event on the button',
        'The event bubbles up and reaches the React root',
        "The root's native listener receives it",
        'React maps the target DOM node back to a Fiber',
        "It finds that Fiber's onClick and runs it",
      ],
    },
    note: 'The first payoff is that listeners do not scale with nodes. A thousand nodes still need only one listener.',
  },
  pipeline: {
    badge: '02',
    eyebrow: 'pipeline',
    title: 'Eight stops behind one click',
    description:
      'The remaining nine pages of this chapter zoom into these eight stops one at a time. For now the order is enough.',
    steps: [
      {
        id: 'jsx',
        num: '01',
        title: 'The onClick prop in JSX',
        description: 'The function only lands in the Fiber props; nothing attaches to the DOM.',
        tone: 'sky',
      },
      {
        id: 'root-listener',
        num: '02',
        title: 'Native listeners on the root',
        description: 'createRoot pre-attaches every supported event type to the root container.',
        tone: 'cyan',
      },
      {
        id: 'priority',
        num: '03',
        title: 'Pick a priority',
        description: 'Split discrete from continuous by event type and choose a lane.',
        tone: 'amber',
      },
      {
        id: 'target',
        num: '04',
        title: 'DOM target → Fiber',
        description: 'Use the internal key on event.target to find the matching Fiber.',
        tone: 'indigo',
      },
      {
        id: 'plugin',
        num: '05',
        title: 'Plugin Event System',
        description: 'The plugin that owns this event type decides what to build.',
        tone: 'violet',
      },
      {
        id: 'synthetic',
        num: '06',
        title: 'Create the SyntheticEvent',
        description: 'Build the React-specific event object wrapping the native one.',
        tone: 'teal',
      },
      {
        id: 'accumulate',
        num: '07',
        title: 'Collect capture / bubble',
        description: 'Walk up the Fibers gathering the listeners to run, in order.',
        tone: 'blue',
      },
      {
        id: 'dispatch',
        num: '08',
        title: 'Run the dispatchQueue',
        description: 'Invoke the gathered listeners, capture in reverse and bubble in order.',
        tone: 'emerald',
      },
    ],
    note: 'The event system is a translator between browser events and React handlers. All eight stops are that translation.',
  },
  entryFiles: {
    badge: '03',
    eyebrow: 'entry files',
    title: 'Three files to keep open',
    description:
      'The event code lives under react-dom-bindings/src/events. These three are enough to follow the whole chapter.',
    files: [
      {
        id: 'root',
        fileName: 'ReactDOMRoot.js',
        role: 'Root setup',
        description: 'Where createRoot builds the container and switches the event system on.',
        tone: 'sky',
      },
      {
        id: 'listener',
        fileName: 'ReactDOMEventListener.js',
        role: 'Native event reception',
        description: 'The root listener that receives events and hands them on with a priority.',
        tone: 'cyan',
      },
      {
        id: 'plugin',
        fileName: 'DOMPluginEventSystem.js',
        role: 'Core of the system',
        description: 'Plugin execution, listener accumulation and dispatchQueue all live here.',
        tone: 'violet',
      },
    ],
    note: 'DOMPluginEventSystem.js is the longest of the three. The other two are effectively doorways into it.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-dom-bindings/src/events/DOMPluginEventSystem.js',
    lookForLabel: 'Look for',
    lookFor: 'dispatchEventForPluginEventSystem, extractEvents, processDispatchQueue',
    whyLabel: 'Why',
    why: 'Building the events (extract) and running them (process) sit side by side in one function — the spine of the later pages.',
    code: DISPATCH_CODE,
    primaryCta: 'Read DOMPluginEventSystem.js',
    primaryHref: DOM_PLUGIN_EVENT_SYSTEM_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'When do the root listeners get attached',
    description:
      'The next page counts exactly which events, and how many, are registered the moment createRoot runs.',
    cta: 'Go to the next page',
    href: '/root-native-event',
  },
};

export const whyEventSystemContent: Record<Locale, WhyEventSystemContent> = { ko, en };

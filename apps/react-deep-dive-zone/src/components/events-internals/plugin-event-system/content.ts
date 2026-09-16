import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type StageId = 'native' | 'extract' | 'queue' | 'process';

export type Stage = {
  id: StageId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type KindId = 'simple' | 'interpreted' | 'action';

export type EventKind = {
  id: KindId;
  title: string;
  plugin: string;
  description: string;
  examples: string[];
  tone: ToneKey;
};

export type PluginRow = {
  name: string;
  owns: string;
  work: string;
};

export type ExtractStepId = 'queue-init' | 'extract' | 'accumulate' | 'process';

export type ExtractStep = {
  id: ExtractStepId;
  badge: string;
  title: string;
  body: string;
  tone: ToneKey;
};

export type PluginEventSystemContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    stages: Stage[];
  };
  kinds: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: EventKind[];
    note: string;
  };
  plugins: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: PluginRow[];
    note: string;
  };
  extraction: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: ExtractStep[];
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

const EXTRACT_CODE = `function extractEvents(
  dispatchQueue, domEventName, targetInst, nativeEvent,
  nativeEventTarget, eventSystemFlags, targetContainer,
) {
  SimpleEventPlugin.extractEvents(dispatchQueue, domEventName, ...);

  const shouldProcessPolyfillPlugins =
    (eventSystemFlags & SHOULD_NOT_PROCESS_POLYFILL_PLUGINS) === 0;

  if (shouldProcessPolyfillPlugins) {
    EnterLeaveEventPlugin.extractEvents(dispatchQueue, domEventName, ...);
    ChangeEventPlugin.extractEvents(dispatchQueue, domEventName, ...);
    SelectEventPlugin.extractEvents(dispatchQueue, domEventName, ...);
    BeforeInputEventPlugin.extractEvents(dispatchQueue, domEventName, ...);
    FormActionEventPlugin.extractEvents(dispatchQueue, domEventName, ...);
  }
}

function dispatchEventsForPlugins(...) {
  const nativeEventTarget = getEventTarget(nativeEvent);
  const dispatchQueue = [];

  extractEvents(dispatchQueue, ...);
  processDispatchQueue(dispatchQueue, eventSystemFlags);
}`;

const DOM_PLUGIN_EVENT_SYSTEM_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/DOMPluginEventSystem.js';

const ko: PluginEventSystemContent = {
  hero: {
    badge: '이벤트 시스템 · 6/10단계',
    title: { line1: 'native event 하나가', line2: '여러 플러그인을 거친다' },
    description:
      'React는 이벤트를 그대로 넘기지 않습니다. 등록된 플러그인들이 차례로 들여다보며 무엇을 만들지 각자 결정합니다.',
    diagramBadge: 'plugins',
    diagramCaption: 'extract → queue → process',
    stages: [
      {
        id: 'native',
        label: 'nativeEvent + targetInst',
        caption: '이름과 Fiber를 손에 쥔 상태',
        tone: 'sky',
      },
      {
        id: 'extract',
        label: 'extractEvents()',
        caption: '플러그인들이 차례로 훑는다',
        tone: 'violet',
      },
      {
        id: 'queue',
        label: 'dispatchQueue',
        caption: '만들어진 이벤트와 리스너가 쌓인다',
        tone: 'indigo',
      },
      {
        id: 'process',
        label: 'processDispatchQueue()',
        caption: '쌓인 것을 순서대로 실행',
        tone: 'emerald',
      },
    ],
  },
  kinds: {
    badge: '01',
    eyebrow: 'why plugins',
    title: '이벤트마다 해석의 깊이가 다르다',
    description:
      '이름만 바꿔 주면 되는 이벤트가 있고, 값을 비교해 봐야 의미가 생기는 이벤트가 있습니다. 플러그인은 이 차이를 흡수합니다.',
    items: [
      {
        id: 'simple',
        title: '거의 그대로',
        plugin: 'SimpleEventPlugin',
        description:
          '브라우저 이벤트를 React 이름으로 바꾸고 감싸기만 하면 끝입니다. 대부분이 여기 속합니다.',
        examples: ['click', 'keydown', 'pointerdown'],
        tone: 'sky',
      },
      {
        id: 'interpreted',
        title: '해석이 필요한',
        plugin: 'ChangeEventPlugin',
        description:
          '브라우저의 change만으로는 부족합니다. 이전 값과 비교하고 여러 이벤트를 합쳐 하나의 onChange를 만듭니다.',
        examples: ['input', 'change', 'select'],
        tone: 'violet',
      },
      {
        id: 'action',
        title: 'React 기능과 엮인',
        plugin: 'FormActionEventPlugin',
        description:
          'form의 action prop이 함수면 기본 제출을 막고 React 19의 action 흐름으로 연결합니다.',
        examples: ['submit'],
        tone: 'teal',
      },
    ],
    note: 'React의 onChange가 브라우저 change와 다르게 동작하는 이유가 여기 있습니다. 실제로는 input 이벤트를 해석해 만듭니다.',
  },
  plugins: {
    badge: '02',
    eyebrow: 'plugin list',
    title: '등록된 플러그인과 담당 범위',
    description:
      'extractEvents는 이 목록을 위에서 아래로 한 번씩 부릅니다. 자기 이벤트가 아니면 각 플러그인은 아무것도 하지 않고 돌아갑니다.',
    headers: ['플러그인', '담당 이벤트', '하는 일'],
    rows: [
      {
        name: 'SimpleEventPlugin',
        owns: 'click, keydown 등 대부분',
        work: '이름 매핑 후 알맞은 SyntheticEvent 생성자를 골라 감쌉니다.',
      },
      {
        name: 'EnterLeaveEventPlugin',
        owns: 'mouseover, mouseout',
        work: 'onMouseEnter / onMouseLeave처럼 버블링하지 않는 이벤트를 합성해 만듭니다.',
      },
      {
        name: 'ChangeEventPlugin',
        owns: 'input, change, click',
        work: '요소 종류별로 값 변화를 감지해 일관된 onChange를 만들어 냅니다.',
      },
      {
        name: 'SelectEventPlugin',
        owns: 'focus, select, keyup',
        work: '선택 영역이 실제로 바뀌었는지 비교해 onSelect를 만듭니다.',
      },
      {
        name: 'BeforeInputEventPlugin',
        owns: 'compositionstart, textInput',
        work: '한글 같은 조합 입력을 정리해 onBeforeInput으로 정규화합니다.',
      },
      {
        name: 'FormActionEventPlugin',
        owns: 'submit',
        work: 'action이 함수면 기본 동작을 막고 React action 실행을 예약합니다.',
      },
    ],
    note: 'SimpleEventPlugin만 항상 돌고, 나머지는 polyfill 플래그가 꺼져 있을 때만 돕니다. 순서도 고정되어 있습니다.',
  },
  extraction: {
    badge: '03',
    eyebrow: 'extract to process',
    title: '큐 하나를 돌려 가며 채운다',
    description:
      '플러그인들은 각자 결과를 반환하지 않습니다. 빈 배열 하나를 받아 거기에 직접 밀어 넣습니다.',
    steps: [
      {
        id: 'queue-init',
        badge: 'step 1',
        title: '빈 dispatchQueue',
        body: '배열 하나를 만들어 모든 플러그인에 같은 참조로 넘깁니다.',
        tone: 'sky',
      },
      {
        id: 'extract',
        badge: 'step 2',
        title: '플러그인 순회',
        body: '각 플러그인이 자기 이벤트인지 보고, 맞으면 SyntheticEvent를 만듭니다.',
        tone: 'violet',
      },
      {
        id: 'accumulate',
        badge: 'step 3',
        title: '리스너와 함께 push',
        body: 'Fiber 트리를 훑어 모은 리스너 목록을 이벤트와 한 쌍으로 담습니다.',
        tone: 'indigo',
      },
      {
        id: 'process',
        badge: 'step 4',
        title: 'processDispatchQueue',
        body: '쌓인 쌍들을 순서대로 꺼내 리스너를 실행합니다.',
        tone: 'emerald',
      },
    ],
    note: '한 번의 native 이벤트가 큐에 두 개 이상을 넣을 수 있습니다. click 하나가 onClick과 onChange를 동시에 만들 수 있습니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-dom-bindings/src/events/DOMPluginEventSystem.js',
    lookForLabel: '볼 것',
    lookFor: 'extractEvents, SimpleEventPlugin, ChangeEventPlugin, dispatchQueue',
    whyLabel: '설명',
    why: '플러그인들이 반환값 없이 dispatchQueue를 인자로만 받는다는 점이, 큐가 공유 버퍼라는 사실을 드러냅니다.',
    code: EXTRACT_CODE,
    primaryCta: 'DOMPluginEventSystem.js 읽기',
    primaryHref: DOM_PLUGIN_EVENT_SYSTEM_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '플러그인이 만드는 그 객체는 무엇인가',
    description:
      'SyntheticEvent가 native event와 무엇이 다르고 왜 필요한지 다음 페이지에서 뜯어봅니다.',
    cta: '다음 페이지로 이동',
    href: '/synthetic-event',
  },
};

const en: PluginEventSystemContent = {
  hero: {
    badge: 'Event System · 6/10',
    title: { line1: 'One native event', line2: 'passes through several plugins' },
    description:
      'React never forwards the event as-is. Registered plugins each inspect it in turn and decide for themselves what to produce.',
    diagramBadge: 'plugins',
    diagramCaption: 'extract → queue → process',
    stages: [
      {
        id: 'native',
        label: 'nativeEvent + targetInst',
        caption: 'name and Fiber both in hand',
        tone: 'sky',
      },
      {
        id: 'extract',
        label: 'extractEvents()',
        caption: 'plugins inspect it one by one',
        tone: 'violet',
      },
      {
        id: 'queue',
        label: 'dispatchQueue',
        caption: 'built events and listeners pile up',
        tone: 'indigo',
      },
      {
        id: 'process',
        label: 'processDispatchQueue()',
        caption: 'run what piled up, in order',
        tone: 'emerald',
      },
    ],
  },
  kinds: {
    badge: '01',
    eyebrow: 'why plugins',
    title: 'Events differ in how much interpretation they need',
    description:
      'Some events only need renaming; others only mean something once values are compared. Plugins absorb that difference.',
    items: [
      {
        id: 'simple',
        title: 'Almost as-is',
        plugin: 'SimpleEventPlugin',
        description: 'Rename the browser event, wrap it, done. The majority of events land here.',
        examples: ['click', 'keydown', 'pointerdown'],
        tone: 'sky',
      },
      {
        id: 'interpreted',
        title: 'Needs interpretation',
        plugin: 'ChangeEventPlugin',
        description:
          'The browser change event is not enough. It compares the previous value and merges several events into one onChange.',
        examples: ['input', 'change', 'select'],
        tone: 'violet',
      },
      {
        id: 'action',
        title: 'Tied to React features',
        plugin: 'FormActionEventPlugin',
        description:
          'When a form action prop is a function, it prevents the default submit and routes into the React 19 action flow.',
        examples: ['submit'],
        tone: 'teal',
      },
    ],
    note: "That React's onChange behaves unlike the browser change event follows from this: it is really built by interpreting input.",
  },
  plugins: {
    badge: '02',
    eyebrow: 'plugin list',
    title: 'The registered plugins and what they own',
    description:
      'extractEvents calls this list top to bottom once. A plugin that does not own the event simply returns without doing anything.',
    headers: ['Plugin', 'Events it owns', 'What it does'],
    rows: [
      {
        name: 'SimpleEventPlugin',
        owns: 'click, keydown and most others',
        work: 'Maps the name, then picks the right SyntheticEvent constructor to wrap it.',
      },
      {
        name: 'EnterLeaveEventPlugin',
        owns: 'mouseover, mouseout',
        work: 'Synthesises non-bubbling events such as onMouseEnter and onMouseLeave.',
      },
      {
        name: 'ChangeEventPlugin',
        owns: 'input, change, click',
        work: 'Detects value changes per element type to produce a consistent onChange.',
      },
      {
        name: 'SelectEventPlugin',
        owns: 'focus, select, keyup',
        work: 'Compares whether the selection actually moved before producing onSelect.',
      },
      {
        name: 'BeforeInputEventPlugin',
        owns: 'compositionstart, textInput',
        work: 'Normalises composition input, such as IME, into onBeforeInput.',
      },
      {
        name: 'FormActionEventPlugin',
        owns: 'submit',
        work: 'When action is a function, blocks the default and schedules the React action.',
      },
    ],
    note: 'Only SimpleEventPlugin always runs; the rest run when the polyfill flag is off. The order is fixed too.',
  },
  extraction: {
    badge: '03',
    eyebrow: 'extract to process',
    title: 'One queue, filled as it goes around',
    description:
      'Plugins do not return their results. They receive a single empty array and push into it directly.',
    steps: [
      {
        id: 'queue-init',
        badge: 'step 1',
        title: 'An empty dispatchQueue',
        body: 'Create one array and pass the same reference to every plugin.',
        tone: 'sky',
      },
      {
        id: 'extract',
        badge: 'step 2',
        title: 'Walk the plugins',
        body: 'Each checks whether the event is theirs and builds a SyntheticEvent if so.',
        tone: 'violet',
      },
      {
        id: 'accumulate',
        badge: 'step 3',
        title: 'Push with the listeners',
        body: 'The listener list gathered from the Fiber tree is stored paired with the event.',
        tone: 'indigo',
      },
      {
        id: 'process',
        badge: 'step 4',
        title: 'processDispatchQueue',
        body: 'Take the pairs in order and invoke the listeners.',
        tone: 'emerald',
      },
    ],
    note: 'A single native event can add more than one entry: one click may produce both onClick and onChange.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-dom-bindings/src/events/DOMPluginEventSystem.js',
    lookForLabel: 'Look for',
    lookFor: 'extractEvents, SimpleEventPlugin, ChangeEventPlugin, dispatchQueue',
    whyLabel: 'Why',
    why: 'Plugins taking dispatchQueue as an argument and returning nothing reveals that the queue is a shared buffer.',
    code: EXTRACT_CODE,
    primaryCta: 'Read DOMPluginEventSystem.js',
    primaryHref: DOM_PLUGIN_EVENT_SYSTEM_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'What exactly is the object plugins build',
    description:
      'The next page takes apart how SyntheticEvent differs from the native event, and why it exists at all.',
    cta: 'Go to the next page',
    href: '/synthetic-event',
  },
};

export const pluginEventSystemContent: Record<Locale, PluginEventSystemContent> = { ko, en };

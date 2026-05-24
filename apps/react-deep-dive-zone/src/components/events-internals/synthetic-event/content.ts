import type { Locale } from '@it-tech-blog/preferences';

export type Tone = 'sky' | 'cyan' | 'teal' | 'emerald' | 'violet' | 'blue' | 'amber' | 'rose';

export type PropertyRow = { name: string; meaning: string };

export type TableRow = { name: string; meaning: string; note: string };

export type FlowCard = { label: string; main: string; sub: string; tone: Tone };

export type ChecklistItem = { title: string; body: string };

export type TakeawayCard = {
  title: string;
  body: string;
  tone: Tone;
};

export type SyntheticEventContent = {
  hero: {
    badges: { label: string; tone: 'blue' | 'cyan' }[];
    titleLines: [string, string];
    description: string;
    code: { fileLabel: string; code: string };
    diagram: {
      title: string;
      properties: PropertyRow[];
      helper: { title: string; body: string };
    };
  };
  question: {
    eyebrow: string;
    title: string;
    badges: string[];
  };
  handlerE: {
    step: number;
    eyebrow: string;
    title: string;
    fileLabel: string;
    code: string;
    explanation: { label: string; body: string };
    badges: string[];
  };
  structure: {
    step: number;
    eyebrow: string;
    title: string;
    rows: PropertyRow[];
  };
  relationship: {
    step: number;
    eyebrow: string;
    title: string;
    columns: { name: string; meaning: string; note: string };
    rows: TableRow[];
  };
  methods: {
    step: number;
    eyebrow: string;
    title: string;
    preventDefault: {
      title: string;
      body: string;
      example: string;
      chip: string;
    };
    stopPropagation: {
      title: string;
      body: string;
      example: string;
      chip: string;
    };
  };
  propagation: {
    step: number;
    eyebrow: string;
    title: string;
    steps: FlowCard[];
  };
  persist: {
    step: number;
    eyebrow: string;
    title: string;
    label: string;
    description: string;
    oldLabel: string;
    oldText: string;
    modernLabel: string;
    modernText: string;
  };
  realCode: {
    step: number;
    eyebrow: string;
    title: string;
    fileLabel: string;
    code1: string;
    code2: string;
    code1Caption: string;
    code2Caption: string;
    fileLocation: { label: string; path: string };
    explanation: string;
    button: { label: string; href: string };
  };
  inspector: {
    step: number;
    eyebrow: string;
    title: string;
    testUiTitle: string;
    panelLabel: string;
    buttonLabel: string;
    usageTitle: string;
    usageBody: string;
    inspectorLabel: string;
    fields: { key: string; value: string }[];
    afterStopPropagationField: { key: string; value: string };
    controls: {
      stopPropagation: string;
      reset: string;
    };
    logTitle: string;
    logEntries: {
      initial: string;
      afterStop: string;
      afterReset: string;
    };
  };
  mission: {
    step: number;
    eyebrow: string;
    title: string;
    items: ChecklistItem[];
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

const HERO_CODE = `function SaveButton() {
  return (
    <button onClick={(e) => e.stopPropagation()}>
      저장
    </button>
  );
}`;

const HERO_CODE_EN = `function SaveButton() {
  return (
    <button onClick={(e) => e.stopPropagation()}>
      Save
    </button>
  );
}`;

const HANDLER_CODE = `function Button() {
  const handleClick = (e) => {
    console.log("event object:", e);
    e.stopPropagation();
  };

  return <button onClick={handleClick}>저장</button>;
}`;

const HANDLER_CODE_EN = `function Button() {
  const handleClick = (e) => {
    console.log("event object:", e);
    e.stopPropagation();
  };

  return <button onClick={handleClick}>Save</button>;
}`;

const REAL_CODE_1 = `function SyntheticBaseEvent(
  reactName,
  reactEventType,
  targetInst,
  nativeEvent,
  nativeEventTarget,
) {
  this._reactName = reactName;
  this.type = reactEventType;
  this.nativeEvent = nativeEvent;
  this.target = nativeEventTarget;
  this.currentTarget = null;
}`;

const REAL_CODE_2 = `this.isDefaultPrevented = functionThatReturnsFalse;
this.isPropagationStopped = functionThatReturnsFalse;

this.preventDefault = function () {
  const event = this.nativeEvent;
  if (event.preventDefault) {
    event.preventDefault();
  }
  this.isDefaultPrevented = functionThatReturnsTrue;
};

this.stopPropagation = function () {
  const event = this.nativeEvent;
  if (event.stopPropagation) {
    event.stopPropagation();
  }
  this.isPropagationStopped = functionThatReturnsTrue;
};`;

const SYNTHETIC_PROPS: PropertyRow[] = [
  { name: 'nativeEvent', meaning: '브라우저의 원본 Event 객체' },
  { name: 'target', meaning: '이벤트가 실제로 발생한 DOM 요소' },
  { name: 'currentTarget', meaning: '현재 listener가 붙은 DOM 요소' },
  { name: 'type', meaning: 'React가 해석한 이벤트 타입' },
  { name: 'preventDefault()', meaning: '기본 브라우저 동작 방지' },
  { name: 'stopPropagation()', meaning: '이후 React listener 전파 중단' },
  { name: 'isDefaultPrevented()', meaning: '기본 동작이 방지되었는지 여부' },
  { name: 'isPropagationStopped()', meaning: '전파가 중단되었는지 여부' },
];

const SYNTHETIC_PROPS_EN: PropertyRow[] = [
  { name: 'nativeEvent', meaning: "The browser's raw Event object" },
  { name: 'target', meaning: 'The DOM element where the event actually fired' },
  { name: 'currentTarget', meaning: 'The DOM element where the current listener lives' },
  { name: 'type', meaning: 'The event type interpreted by React' },
  { name: 'preventDefault()', meaning: 'Prevent the default browser action' },
  { name: 'stopPropagation()', meaning: 'Stop later React listener propagation' },
  { name: 'isDefaultPrevented()', meaning: 'Whether the default action has been prevented' },
  { name: 'isPropagationStopped()', meaning: 'Whether propagation has been stopped' },
];

const ko: SyntheticEventContent = {
  hero: {
    badges: [
      { label: 'React 내부 탐구', tone: 'blue' },
      { label: '이벤트 시스템 입문', tone: 'cyan' },
    ],
    titleLines: ['handler가 받는 e는', '그냥 브라우저 Event일까?'],
    description:
      'React는 일관된 인터페이스를 제공하기 위해 SyntheticEvent 객체를 만들어 handler에 전달합니다.',
    code: { fileLabel: 'JSX', code: HERO_CODE },
    diagram: {
      title: 'React가 handler에 전달하는 e (SyntheticEvent)',
      properties: SYNTHETIC_PROPS,
      helper: {
        title: 'React 전용 이벤트 객체',
        body: '일관된 인터페이스 제공',
      },
    },
  },
  question: {
    eyebrow: '오늘의 질문',
    title: 'e.stopPropagation()은 React 이벤트 흐름 어디에 영향을 줄까?',
    badges: [
      '이벤트 흐름의 전달 단계',
      'dispatchQueue 처리 중 제어',
      '이후 listener 실행 여부 결정',
    ],
  },
  handlerE: {
    step: 1,
    eyebrow: 'handler-event',
    title: 'handler가 받는 e는 무엇인가?',
    fileLabel: 'Button.jsx',
    code: HANDLER_CODE,
    explanation: {
      label: '설명',
      body: 'handleClick의 매개변수 e는 브라우저 Event를 감싼 React의 SyntheticEvent 객체입니다.',
    },
    badges: ['React 내부 생성', '일관된 인터페이스', 'plugin system에서 생성'],
  },
  structure: {
    step: 2,
    eyebrow: 'synthetic-structure',
    title: 'SyntheticEvent 구조',
    rows: SYNTHETIC_PROPS,
  },
  relationship: {
    step: 3,
    eyebrow: 'native-event-relationship',
    title: 'nativeEvent와의 관계',
    columns: { name: '속성', meaning: '의미', note: '비고' },
    rows: [
      {
        name: 'nativeEvent',
        meaning: '브라우저의 원본 Event 객체',
        note: '원본 이벤트 접근 가능',
      },
      {
        name: 'target',
        meaning: '이벤트가 실제로 발생한 DOM',
        note: '이벤트 발생 지점',
      },
      {
        name: 'currentTarget',
        meaning: '현재 handler가 등록된 DOM',
        note: 'bubble 단계마다 달라질 수 있음',
      },
      {
        name: 'type',
        meaning: 'React가 해석한 이벤트 타입',
        note: '예: click, change',
      },
    ],
  },
  methods: {
    step: 4,
    eyebrow: 'event-methods',
    title: 'preventDefault / stopPropagation',
    preventDefault: {
      title: 'preventDefault()',
      body: '기본 브라우저 동작을 방지합니다. 예: <a> 이동, form submit, 입력 기본 동작',
      example: '브라우저 기본 동작 차단',
      chip: 'e.preventDefault()',
    },
    stopPropagation: {
      title: 'stopPropagation()',
      body: '이후 React listener의 전파를 중단합니다. 버블 단계에서 더 이상 상위로 올라가지 않습니다.',
      example: '이후 listener 실행 차단',
      chip: 'e.stopPropagation()',
    },
  },
  propagation: {
    step: 5,
    eyebrow: 'propagation-state',
    title: 'Propagation 상태 변화',
    steps: [
      {
        label: 'Before',
        main: 'isPropagationStopped = false',
        sub: '전파 계속 진행',
        tone: 'teal',
      },
      {
        label: 'Action',
        main: 'e.stopPropagation() 호출',
        sub: '전파 중단 요청',
        tone: 'violet',
      },
      {
        label: 'After',
        main: 'isPropagationStopped = true',
        sub: '이후 listener 실행 중단',
        tone: 'rose',
      },
    ],
  },
  persist: {
    step: 6,
    eyebrow: 'persist-modern',
    title: 'persist 최신 기준 보정',
    label: '최신 기준 보정',
    description:
      '과거 React에서는 이벤트 풀링(event pooling) 때문에 persist()가 자주 언급됐지만, 현대 React 이벤트 시스템은 이전과 같은 방식의 pooling에 의존하지 않습니다. 따라서 대부분의 경우 persist()를 호출할 필요가 없습니다.',
    oldLabel: '과거',
    oldText: 'e.persist() 필요',
    modernLabel: '현재',
    modernText: 'persist() 대부분 불필요',
  },
  realCode: {
    step: 7,
    eyebrow: 'real-code',
    title: '실제 코드 미리보기',
    fileLabel: 'SyntheticEvent.js',
    code1: REAL_CODE_1,
    code2: REAL_CODE_2,
    code1Caption: 'SyntheticEvent 초기화',
    code2Caption: 'preventDefault / stopPropagation 구현',
    fileLocation: {
      label: '파일 위치',
      path: 'packages/react-dom-bindings/src/events/SyntheticEvent.js',
    },
    explanation:
      'SyntheticEvent는 React 내부에서 생성됩니다. nativeEvent, target, currentTarget을 감싸고, preventDefault / stopPropagation은 상태 플래그를 함께 바꿉니다.',
    button: {
      label: 'GitHub에서 전체 코드 보기',
      href: 'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/SyntheticEvent.js',
    },
  },
  inspector: {
    step: 8,
    eyebrow: 'event-inspector',
    title: 'Interactive Event Inspector',
    testUiTitle: '테스트 UI',
    panelLabel: '패널 영역 (div#panel)',
    buttonLabel: '저장 버튼 (button#save)',
    usageTitle: '사용 방법',
    usageBody:
      '버튼 요소를 클릭하면 SyntheticEvent 객체의 상태가 인스펙터에 실시간으로 반영됩니다. stopPropagation을 호출하면 isPropagationStopped 플래그가 true로 바뀝니다.',
    inspectorLabel: '이벤트 인스펙터',
    fields: [
      { key: 'type', value: 'click' },
      { key: 'target', value: 'button#save' },
      { key: 'currentTarget', value: 'button#save' },
      { key: 'isDefaultPrevented', value: 'false' },
      { key: 'isPropagationStopped', value: 'false' },
    ],
    afterStopPropagationField: { key: 'isPropagationStopped', value: 'true' },
    controls: {
      stopPropagation: 'stopPropagation 실행',
      reset: '상태 초기화',
    },
    logTitle: '실행 로그',
    logEntries: {
      initial: '[init] SyntheticEvent 생성: isPropagationStopped = false',
      afterStop: '[action] e.stopPropagation() 호출: isPropagationStopped = true',
      afterReset: '[reset] SyntheticEvent 상태 초기화',
    },
  },
  mission: {
    step: 9,
    eyebrow: 'follow-along',
    title: '직접 코드에서 따라가 보기',
    items: [
      {
        title: 'SyntheticEvent.js를 연다',
        body: '구현 파일을 펼쳐 어떤 정보가 wrapping되는지 확인한다.',
      },
      {
        title: 'nativeEvent, target, currentTarget 초기화를 찾는다',
        body: '생성자 안에서 무엇이 어떻게 채워지는지 본다.',
      },
      {
        title: 'stopPropagation 구현을 본다',
        body: '내부에서 nativeEvent와 플래그가 어떻게 함께 바뀌는지 본다.',
      },
      {
        title: 'isPropagationStopped가 어떻게 바뀌는지 확인한다',
        body: 'functionThatReturnsFalse → functionThatReturnsTrue 패턴을 기억한다.',
      },
    ],
  },
  takeaways: {
    step: 10,
    eyebrow: 'key-takeaways',
    title: '핵심 정리',
    cards: [
      {
        title: 'React handler가 받는 e는 SyntheticEvent다.',
        body: '브라우저 Event를 감싼 React 전용 이벤트 객체입니다.',
        tone: 'teal',
      },
      {
        title: '원본 native event를 감싸며 공통 인터페이스를 제공한다.',
        body: 'target, currentTarget, type, 메서드 등이 일관된 형태로 제공됩니다.',
        tone: 'violet',
      },
      {
        title: 'stopPropagation은 이후 dispatch 흐름에 영향을 준다.',
        body: '이후 React listener 실행 여부를 결정하는 핵심 플래그가 됩니다.',
        tone: 'rose',
      },
    ],
  },
  cta: {
    text: '다음: Capture / Bubble listener 수집 보기',
    href: '/accumulate-listeners',
  },
};

const en: SyntheticEventContent = {
  hero: {
    badges: [
      { label: 'React Internals', tone: 'blue' },
      { label: 'Event System Intro', tone: 'cyan' },
    ],
    titleLines: ['Is the e your handler receives', 'just the browser Event?'],
    description:
      'React builds a SyntheticEvent object and passes it to your handler so the interface stays consistent.',
    code: { fileLabel: 'JSX', code: HERO_CODE_EN },
    diagram: {
      title: 'The e React hands to your handler (SyntheticEvent)',
      properties: SYNTHETIC_PROPS_EN,
      helper: {
        title: "React's own event object",
        body: 'Consistent interface guaranteed',
      },
    },
  },
  question: {
    eyebrow: "Today's question",
    title: 'Where exactly does e.stopPropagation() take effect in the React event flow?',
    badges: [
      'Event propagation stage',
      'Mid-dispatchQueue control',
      'Decides whether later listeners run',
    ],
  },
  handlerE: {
    step: 1,
    eyebrow: 'handler-event',
    title: 'What is the e your handler receives?',
    fileLabel: 'Button.jsx',
    code: HANDLER_CODE_EN,
    explanation: {
      label: 'Explanation',
      body: "The e parameter on handleClick is React's SyntheticEvent — a wrapper around the browser Event.",
    },
    badges: ['Built inside React', 'Consistent interface', 'Created in the plugin system'],
  },
  structure: {
    step: 2,
    eyebrow: 'synthetic-structure',
    title: 'SyntheticEvent structure',
    rows: SYNTHETIC_PROPS_EN,
  },
  relationship: {
    step: 3,
    eyebrow: 'native-event-relationship',
    title: 'Relationship with nativeEvent',
    columns: { name: 'Property', meaning: 'Meaning', note: 'Note' },
    rows: [
      {
        name: 'nativeEvent',
        meaning: "The browser's raw Event object",
        note: 'Lets you reach the underlying event',
      },
      {
        name: 'target',
        meaning: 'DOM where the event actually fired',
        note: 'Origin of the event',
      },
      {
        name: 'currentTarget',
        meaning: 'DOM where the current handler is registered',
        note: 'Changes per bubble step',
      },
      {
        name: 'type',
        meaning: 'Event type interpreted by React',
        note: 'e.g. click, change',
      },
    ],
  },
  methods: {
    step: 4,
    eyebrow: 'event-methods',
    title: 'preventDefault / stopPropagation',
    preventDefault: {
      title: 'preventDefault()',
      body: 'Prevents the default browser action. e.g. <a> navigation, form submit, input default behavior.',
      example: 'Blocks the browser default',
      chip: 'e.preventDefault()',
    },
    stopPropagation: {
      title: 'stopPropagation()',
      body: 'Stops further React listener propagation. The bubble phase will not go any higher.',
      example: 'Blocks later listeners',
      chip: 'e.stopPropagation()',
    },
  },
  propagation: {
    step: 5,
    eyebrow: 'propagation-state',
    title: 'Propagation state transitions',
    steps: [
      {
        label: 'Before',
        main: 'isPropagationStopped = false',
        sub: 'Propagation keeps going',
        tone: 'teal',
      },
      {
        label: 'Action',
        main: 'e.stopPropagation() called',
        sub: 'Propagation halt requested',
        tone: 'violet',
      },
      {
        label: 'After',
        main: 'isPropagationStopped = true',
        sub: 'No more listeners run',
        tone: 'rose',
      },
    ],
  },
  persist: {
    step: 6,
    eyebrow: 'persist-modern',
    title: 'persist — modern correction note',
    label: 'modern correction',
    description:
      'persist() used to be mentioned often because of event pooling, but the modern React event system no longer relies on the same kind of pooling — so persist() is unnecessary in most cases.',
    oldLabel: 'Past',
    oldText: 'e.persist() needed',
    modernLabel: 'Now',
    modernText: 'persist() mostly unnecessary',
  },
  realCode: {
    step: 7,
    eyebrow: 'real-code',
    title: 'Real source preview',
    fileLabel: 'SyntheticEvent.js',
    code1: REAL_CODE_1,
    code2: REAL_CODE_2,
    code1Caption: 'SyntheticEvent initialization',
    code2Caption: 'preventDefault / stopPropagation implementation',
    fileLocation: {
      label: 'File location',
      path: 'packages/react-dom-bindings/src/events/SyntheticEvent.js',
    },
    explanation:
      'SyntheticEvent is built inside React. It wraps nativeEvent, target, currentTarget — and preventDefault / stopPropagation flip status flags as they go.',
    button: {
      label: 'View full code on GitHub',
      href: 'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/SyntheticEvent.js',
    },
  },
  inspector: {
    step: 8,
    eyebrow: 'event-inspector',
    title: 'Interactive Event Inspector',
    testUiTitle: 'Test UI',
    panelLabel: 'Panel area (div#panel)',
    buttonLabel: 'Save button (button#save)',
    usageTitle: 'How to use',
    usageBody:
      'Clicking the button updates the SyntheticEvent state in the inspector live. Calling stopPropagation flips isPropagationStopped to true.',
    inspectorLabel: 'Event inspector',
    fields: [
      { key: 'type', value: 'click' },
      { key: 'target', value: 'button#save' },
      { key: 'currentTarget', value: 'button#save' },
      { key: 'isDefaultPrevented', value: 'false' },
      { key: 'isPropagationStopped', value: 'false' },
    ],
    afterStopPropagationField: { key: 'isPropagationStopped', value: 'true' },
    controls: {
      stopPropagation: 'Call stopPropagation',
      reset: 'Reset state',
    },
    logTitle: 'Execution log',
    logEntries: {
      initial: '[init] SyntheticEvent created: isPropagationStopped = false',
      afterStop: '[action] e.stopPropagation() called: isPropagationStopped = true',
      afterReset: '[reset] SyntheticEvent state reset',
    },
  },
  mission: {
    step: 9,
    eyebrow: 'follow-along',
    title: 'Walk it in the source',
    items: [
      {
        title: 'Open SyntheticEvent.js',
        body: 'Open the implementation file and see what information is wrapped.',
      },
      {
        title: 'Find where nativeEvent, target, currentTarget are initialized',
        body: 'Inspect what is filled in inside the constructor.',
      },
      {
        title: 'Read the stopPropagation implementation',
        body: 'See how nativeEvent and the flags flip together.',
      },
      {
        title: 'Confirm how isPropagationStopped flips',
        body: 'Remember the functionThatReturnsFalse → functionThatReturnsTrue pattern.',
      },
    ],
  },
  takeaways: {
    step: 10,
    eyebrow: 'key-takeaways',
    title: 'Key takeaways',
    cards: [
      {
        title: 'The e your React handler receives is a SyntheticEvent.',
        body: "It is React's own event object wrapping the browser Event.",
        tone: 'teal',
      },
      {
        title: 'It wraps the native event with a consistent interface.',
        body: 'target, currentTarget, type, and methods are exposed in a uniform shape.',
        tone: 'violet',
      },
      {
        title: 'stopPropagation drives the rest of the dispatch flow.',
        body: 'It becomes the flag that decides whether later React listeners run.',
        tone: 'rose',
      },
    ],
  },
  cta: {
    text: 'Next: capture / bubble listener accumulation',
    href: '/accumulate-listeners',
  },
};

export const syntheticEventContent: Record<Locale, SyntheticEventContent> = { ko, en };

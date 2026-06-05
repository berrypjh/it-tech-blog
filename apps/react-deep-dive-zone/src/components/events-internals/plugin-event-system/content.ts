import type { Locale } from '@it-tech-blog/preferences';

export type Tone =
  | 'sky'
  | 'cyan'
  | 'teal'
  | 'emerald'
  | 'violet'
  | 'blue'
  | 'amber'
  | 'rose'
  | 'mint';

export type FlowStep = {
  title: string;
  description: string;
  example?: string;
  tone: Tone;
};

export type PluginCard = {
  name: string;
  summary: string;
  bullets?: string[];
  tone: Tone;
};

export type TakeawayCard = {
  title: string;
  body: string;
  tone: Tone;
};

export type WhyCard = {
  number: string;
  title: string;
  body: string;
  example: string;
  tone: Tone;
};

export type ResponsibilityStep = {
  title: string;
  body: string;
  tone: Tone;
};

export type RouteStep = {
  title: string;
  body: string;
  tone: Tone;
  isCore?: boolean;
};

export type ChecklistItem = { title: string; body: string };

export type FormActionStep = { name: string; body: string; tone: Tone };

export type PluginEventSystemContent = {
  hero: {
    badge: string;
    title: string;
    description: string;
    steps: FlowStep[];
  };
  question: {
    sectionNumber: string;
    label: string;
    title: string;
    highlightTokens: string[];
  };
  why: {
    sectionNumber: string;
    title: string;
    cards: WhyCard[];
  };
  dispatchRoute: {
    sectionNumber: string;
    title: string;
    steps: RouteStep[];
  };
  responsibilities: {
    sectionNumber: string;
    title: string;
    steps: ResponsibilityStep[];
  };
  extract: {
    sectionNumber: string;
    title: string;
    centerCard: { title: string; body: string };
    plugins: PluginCard[];
  };
  pluginRoles: {
    sectionNumber: string;
    title: string;
    large: PluginCard[];
    small: PluginCard[];
    more: PluginCard;
  };
  queue: {
    sectionNumber: string;
    title: string;
    flow: FlowStep[];
    entry: { title: string; fields: string[] };
    indexLabels: string[];
  };
  realCode: {
    sectionNumber: string;
    title: string;
    code: string;
    explanation: string;
    fileLabel: string;
    button: { label: string; href: string };
  };
  formAction: {
    sectionNumber: string;
    title: string;
    description: string;
    flow: FormActionStep[];
  };
  mission: {
    sectionNumber: string;
    title: string;
    items: ChecklistItem[];
  };
  takeaways: {
    sectionNumber: string;
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

const REAL_CODE = `// DOMPluginEventSystem.js
const dispatchQueue = [];

extractEvents(
  dispatchQueue,
  domEventName,
  targetInst,
  nativeEvent,
  nativeEventTarget,
  eventSystemFlags,
  targetContainer,
);

processDispatchQueue(dispatchQueue, eventSystemFlags);`;

const ko: PluginEventSystemContent = {
  hero: {
    badge: '이벤트 시스템 · 6/10단계',
    title: 'React는 native event를 그대로 handler에 넘기지 않는다',
    description:
      'Plugin Event System은 이벤트를 어떤 React 이벤트로 다룰지 분석하는 중앙 처리소입니다.',
    steps: [
      {
        title: 'native event',
        description: '브라우저가 발생시킨 원시 이벤트',
        example: '예) click, keydown, submit',
        tone: 'sky',
      },
      {
        title: 'plugin extraction',
        description: 'Plugin들이 이벤트를 분석하고 React 이벤트 의미를 추출',
        tone: 'teal',
      },
      {
        title: 'SyntheticEvent + listeners',
        description: '적절한 SyntheticEvent 객체와 연결된 listener들을 구성',
        tone: 'blue',
      },
      {
        title: 'dispatchQueue',
        description: 'listener 실행 순서가 담긴 dispatchQueue 생성',
        tone: 'violet',
      },
    ],
  },
  question: {
    sectionNumber: '02',
    label: '오늘의 질문',
    title: 'click, change, submit은 모두 같은 방식으로 처리될까?',
    highlightTokens: ['click', 'change', 'submit'],
  },
  why: {
    sectionNumber: '03',
    title: 'Plugin System이 필요한 이유',
    cards: [
      {
        number: '1',
        title: '단순 이벤트',
        body: '브라우저 이벤트를 거의 그대로 React 이벤트로 매핑하면 충분합니다.',
        example: '예) click, keydown',
        tone: 'teal',
      },
      {
        number: '2',
        title: '해석이 필요한 이벤트',
        body: '브라우저 이벤트만으로는 부족해서 추가적인 상태 비교나 조합이 필요합니다.',
        example: '예) change, select',
        tone: 'amber',
      },
      {
        number: '3',
        title: 'React 19와 연결되는 이벤트',
        body: 'UI 선언 수준의 새 API와 연결되며 별도 플러그인에서 해석됩니다.',
        example: '예) submit → form action',
        tone: 'violet',
      },
    ],
  },
  dispatchRoute: {
    sectionNumber: '04',
    title: 'dispatchEventForPluginEventSystem 흐름',
    steps: [
      {
        title: 'dispatchEvent',
        body: '최상위 이벤트 진입점',
        tone: 'sky',
      },
      {
        title: 'dispatchEventForPluginEventSystem',
        body: '이벤트 시스템 핵심 라우터',
        tone: 'violet',
        isCore: true,
      },
      {
        title: 'batchedUpdates 안에서 dispatchEventsForPlugins 호출',
        body: '플러그인 분석 및 큐 생성',
        tone: 'teal',
      },
    ],
  },
  responsibilities: {
    sectionNumber: '05',
    title: 'dispatchEventsForPlugins가 하는 일',
    steps: [
      {
        title: 'nativeEventTarget 구하기',
        body: '실제 DOM 타깃을 정규화하고 내부 타깃 기준을 준비합니다.',
        tone: 'sky',
      },
      {
        title: 'dispatchQueue 생성',
        body: 'listener 실행 순서를 담을 빈 큐를 만듭니다.',
        tone: 'violet',
      },
      {
        title: 'extractEvents 실행',
        body: '모든 plugin들이 이벤트를 분석하며 React 이벤트로 의미를 추출합니다.',
        tone: 'teal',
      },
      {
        title: 'processDispatchQueue 실행',
        body: 'dispatchQueue에 담긴 listener를 순서대로 실행합니다.',
        tone: 'emerald',
      },
    ],
  },
  extract: {
    sectionNumber: '06',
    title: 'extractEvents 흐름',
    centerCard: {
      title: 'extractEvents',
      body: '모든 plugin에 이벤트를 맡기고, 추출한 결과를 dispatchQueue에 누적',
    },
    plugins: [
      {
        name: 'SimpleEventPlugin',
        summary: 'click, keydown 등 기본 이벤트 추출',
        tone: 'blue',
      },
      {
        name: 'ChangeEventPlugin',
        summary: 'input/change 계열의 변경 감지 및 합성',
        tone: 'emerald',
      },
      {
        name: 'SelectEventPlugin',
        summary: 'select 변경 감지 및 option 선택 추출',
        tone: 'amber',
      },
      {
        name: 'BeforeInputEventPlugin',
        summary: 'composition / beforeinput 등 입력 전 단계 처리',
        tone: 'violet',
      },
      {
        name: 'ScrollEndEventPlugin',
        summary: 'scroll 종료 시점을 감지하여 scrollend 이벤트 추출',
        tone: 'cyan',
      },
      {
        name: 'FormActionEventPlugin',
        summary: 'submit과 action을 연결하고 React 19 흐름으로 진입',
        tone: 'rose',
      },
    ],
  },
  pluginRoles: {
    sectionNumber: '07',
    title: 'Plugin별 역할',
    large: [
      {
        name: 'SimpleEventPlugin',
        summary: 'click, keydown 같은 기본 이벤트',
        bullets: [
          '브라우저 이벤트를 거의 그대로 매핑',
          '대부분의 이벤트를 담당',
          '생활 이벤트의 주 담당',
        ],
        tone: 'blue',
      },
      {
        name: 'ChangeEventPlugin',
        summary: 'input/change 계열 해석',
        bullets: ['값 비교, 상태 변경 감지', '여러 이벤트 조합 가능', '일관된 change 이벤트 제공'],
        tone: 'emerald',
      },
      {
        name: 'FormActionEventPlugin',
        summary: 'submit과 React 19 action 연결',
        bullets: [
          'form action 찾기 및 확인',
          'pending/transition과 연동',
          '서버 액션/선언 흐름 준비',
        ],
        tone: 'violet',
      },
    ],
    small: [
      {
        name: 'BeforeInputEventPlugin',
        summary: '조합 입력(composition)과 beforeinput을 다룹니다.',
        tone: 'violet',
      },
      {
        name: 'SelectEventPlugin',
        summary: 'select의 값/옵션 변경 해석을 담당합니다.',
        tone: 'amber',
      },
      {
        name: 'ScrollEndEventPlugin',
        summary: 'scroll이 끝나는 시점을 감지합니다.',
        tone: 'cyan',
      },
    ],
    more: {
      name: '그리고 더 많은 plugin들...',
      summary: '추가 도메인별 이벤트 plugin이 확장 가능합니다.',
      tone: 'rose',
    },
  },
  queue: {
    sectionNumber: '08',
    title: 'dispatchQueue가 만들어지는 순간',
    flow: [
      {
        title: 'native event',
        description: '브라우저에서 이벤트 발생',
        example: 'click',
        tone: 'sky',
      },
      {
        title: 'plugin extraction',
        description: 'Plugin들이 이벤트 분석 및 React 의미 추출',
        tone: 'teal',
      },
      {
        title: 'SyntheticEvent + listeners',
        description: '재현된 SyntheticEvent와 관련 listener 구성',
        tone: 'blue',
      },
      {
        title: 'dispatchQueue',
        description: '실행 순서를 담을 queue 생성',
        tone: 'violet',
      },
    ],
    entry: {
      title: 'dispatchQueue entry 생성',
      fields: ['event', 'listeners[]', 'priority', '...'],
    },
    indexLabels: ['0', '1', '2', '...', 'n'],
  },
  realCode: {
    sectionNumber: '09',
    title: '실제 코드 미리보기',
    code: REAL_CODE,
    explanation:
      '이 단계에서 plugin들이 이벤트를 해석하고, dispatchQueue를 만든 뒤, 수집된 listener를 순서대로 실행할 준비를 합니다.',
    fileLabel: 'DOMPluginEventSystem.js',
    button: {
      label: 'GitHub에서 전체 코드 보기',
      href: 'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/DOMPluginEventSystem.js',
    },
  },
  formAction: {
    sectionNumber: '10',
    title: 'React 19 보충: FormActionEventPlugin',
    description:
      'React 19의 form action은 UI 선언 수준의 새 API이고, 내부적으로는 submit 이벤트 해석과 연결됩니다.',
    flow: [
      { name: 'submit', body: '폼 제출 발생', tone: 'mint' },
      { name: 'action', body: '서버/클라이언트 액션 호출', tone: 'teal' },
      { name: 'pending', body: '진행 상태 표시', tone: 'amber' },
      { name: 'transition', body: 'UI 전환 및 결과 반영', tone: 'violet' },
    ],
  },
  mission: {
    sectionNumber: '11',
    title: '직접 코드에서 따라가 보기',
    items: [
      {
        title: 'DOMPluginEventSystem.js를 연다',
        body: '이벤트 시스템 진입점을 직접 펼쳐 본다.',
      },
      {
        title: 'dispatchEventsForPlugins를 찾는다',
        body: '핵심 라우터 함수의 위치를 확인한다.',
      },
      {
        title: 'extractEvents가 어떤 plugin들을 부르는지 훑는다',
        body: 'plugin 배열을 따라 의미 해석 흐름을 본다.',
      },
      {
        title: 'FormActionEventPlugin 이름을 기억한다',
        body: 'React 19 form action과 어떻게 만나는지 기억한다.',
      },
    ],
  },
  takeaways: {
    sectionNumber: '12',
    title: '핵심 정리',
    cards: [
      {
        title: 'React는 plugin system에서 이벤트 의미를 해석한다.',
        body: '브라우저의 native event를 그대로 넘기지 않고, plugin들이 분석해 React 이벤트로 변환합니다.',
        tone: 'blue',
      },
      {
        title: '그 결과 dispatchQueue가 만들어진다.',
        body: '실행 순서와 listener 정보를 담아 처리 단계로 넘깁니다.',
        tone: 'teal',
      },
      {
        title: '기본 이벤트와 특수 이벤트는 여기서 갈라진다.',
        body: 'Plugin별 역할에 따라 click, change, submit 등이 서로 다르게 해석됩니다.',
        tone: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'SyntheticEvent 이해하기',
    description:
      'Plugin이 만들어 내는 SyntheticEvent가 어떤 구조이고 어떻게 동작하는지 이어서 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/synthetic-event',
  },
};

const en: PluginEventSystemContent = {
  hero: {
    badge: 'Event System · 6/10',
    title: 'React does not hand the native event directly to your handler',
    description:
      'The Plugin Event System is the central interpreter that decides which React event a native event becomes.',
    steps: [
      {
        title: 'native event',
        description: 'The raw event fired by the browser',
        example: 'e.g. click, keydown, submit',
        tone: 'sky',
      },
      {
        title: 'plugin extraction',
        description: 'Plugins analyze the event and extract React event meaning',
        tone: 'teal',
      },
      {
        title: 'SyntheticEvent + listeners',
        description: 'Build the proper SyntheticEvent and the listeners attached to it',
        tone: 'blue',
      },
      {
        title: 'dispatchQueue',
        description: 'Build the queue that captures listener execution order',
        tone: 'violet',
      },
    ],
  },
  question: {
    sectionNumber: '02',
    label: "Today's question",
    title: 'Are click, change, and submit all handled the same way?',
    highlightTokens: ['click', 'change', 'submit'],
  },
  why: {
    sectionNumber: '03',
    title: 'Why a plugin system?',
    cards: [
      {
        number: '1',
        title: 'Simple events',
        body: 'Mapping the browser event almost directly to a React event is enough.',
        example: 'e.g. click, keydown',
        tone: 'teal',
      },
      {
        number: '2',
        title: 'Events that need interpretation',
        body: 'The browser event alone is not enough — state comparison or composition is needed.',
        example: 'e.g. change, select',
        tone: 'amber',
      },
      {
        number: '3',
        title: 'Events wired into React 19',
        body: 'Tied to a new UI-declarative API and interpreted by dedicated plugins.',
        example: 'e.g. submit → form action',
        tone: 'violet',
      },
    ],
  },
  dispatchRoute: {
    sectionNumber: '04',
    title: 'dispatchEventForPluginEventSystem flow',
    steps: [
      {
        title: 'dispatchEvent',
        body: 'Top-level event entry',
        tone: 'sky',
      },
      {
        title: 'dispatchEventForPluginEventSystem',
        body: 'The core event-system router',
        tone: 'violet',
        isCore: true,
      },
      {
        title: 'Calls dispatchEventsForPlugins inside batchedUpdates',
        body: 'Plugin analysis and queue creation',
        tone: 'teal',
      },
    ],
  },
  responsibilities: {
    sectionNumber: '05',
    title: 'What dispatchEventsForPlugins does',
    steps: [
      {
        title: 'Resolve nativeEventTarget',
        body: 'Normalize the real DOM target and prepare the internal target reference.',
        tone: 'sky',
      },
      {
        title: 'Create dispatchQueue',
        body: 'Make an empty queue to hold listener execution order.',
        tone: 'violet',
      },
      {
        title: 'Run extractEvents',
        body: 'All plugins analyze the event and extract React event meaning.',
        tone: 'teal',
      },
      {
        title: 'Run processDispatchQueue',
        body: 'Invoke the listeners on the dispatchQueue in order.',
        tone: 'emerald',
      },
    ],
  },
  extract: {
    sectionNumber: '06',
    title: 'extractEvents flow',
    centerCard: {
      title: 'extractEvents',
      body: 'Hands the event to every plugin and accumulates the extracted results in dispatchQueue.',
    },
    plugins: [
      {
        name: 'SimpleEventPlugin',
        summary: 'Extract basic events like click, keydown',
        tone: 'blue',
      },
      {
        name: 'ChangeEventPlugin',
        summary: 'Detect and synthesize input/change family changes',
        tone: 'emerald',
      },
      {
        name: 'SelectEventPlugin',
        summary: 'Detect select changes and extract option selection',
        tone: 'amber',
      },
      {
        name: 'BeforeInputEventPlugin',
        summary: 'Handle composition / beforeinput pre-input stages',
        tone: 'violet',
      },
      {
        name: 'ScrollEndEventPlugin',
        summary: 'Detect when scrolling ends and extract scrollend',
        tone: 'cyan',
      },
      {
        name: 'FormActionEventPlugin',
        summary: 'Link submit and action and enter the React 19 flow',
        tone: 'rose',
      },
    ],
  },
  pluginRoles: {
    sectionNumber: '07',
    title: 'Plugin responsibilities',
    large: [
      {
        name: 'SimpleEventPlugin',
        summary: 'Basic events like click, keydown',
        bullets: [
          'Maps browser events almost directly',
          'Covers most events',
          'Primary owner of common events',
        ],
        tone: 'blue',
      },
      {
        name: 'ChangeEventPlugin',
        summary: 'Interpret input/change family',
        bullets: [
          'Value comparison and state change detection',
          'Can combine several events',
          'Provides a consistent change event',
        ],
        tone: 'emerald',
      },
      {
        name: 'FormActionEventPlugin',
        summary: 'Connects submit with React 19 actions',
        bullets: [
          'Find and verify form action',
          'Works with pending/transition',
          'Prepares server actions / declarative flow',
        ],
        tone: 'violet',
      },
    ],
    small: [
      {
        name: 'BeforeInputEventPlugin',
        summary: 'Handles composition input and beforeinput.',
        tone: 'violet',
      },
      {
        name: 'SelectEventPlugin',
        summary: 'Interprets select value / option changes.',
        tone: 'amber',
      },
      {
        name: 'ScrollEndEventPlugin',
        summary: 'Detects when scrolling stops.',
        tone: 'cyan',
      },
    ],
    more: {
      name: 'And many more plugins...',
      summary: 'Additional domain-specific event plugins are extensible.',
      tone: 'rose',
    },
  },
  queue: {
    sectionNumber: '08',
    title: 'The moment dispatchQueue is built',
    flow: [
      {
        title: 'native event',
        description: 'An event fires in the browser',
        example: 'click',
        tone: 'sky',
      },
      {
        title: 'plugin extraction',
        description: 'Plugins analyze the event and extract React meaning',
        tone: 'teal',
      },
      {
        title: 'SyntheticEvent + listeners',
        description: 'A SyntheticEvent is reconstructed with its listeners',
        tone: 'blue',
      },
      {
        title: 'dispatchQueue',
        description: 'A queue is built to hold the execution order',
        tone: 'violet',
      },
    ],
    entry: {
      title: 'dispatchQueue entry built',
      fields: ['event', 'listeners[]', 'priority', '...'],
    },
    indexLabels: ['0', '1', '2', '...', 'n'],
  },
  realCode: {
    sectionNumber: '09',
    title: 'Real source preview',
    code: REAL_CODE,
    explanation:
      'At this stage the plugins interpret the event, build the dispatchQueue, and prepare to invoke the collected listeners in order.',
    fileLabel: 'DOMPluginEventSystem.js',
    button: {
      label: 'View full code on GitHub',
      href: 'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/DOMPluginEventSystem.js',
    },
  },
  formAction: {
    sectionNumber: '10',
    title: 'React 19 supplement: FormActionEventPlugin',
    description:
      "React 19's form action is a new UI-declarative API, internally tied to submit event interpretation.",
    flow: [
      { name: 'submit', body: 'Form submission fires', tone: 'mint' },
      { name: 'action', body: 'Server/client action invoked', tone: 'teal' },
      { name: 'pending', body: 'Indicates progress', tone: 'amber' },
      { name: 'transition', body: 'UI transition and result applied', tone: 'violet' },
    ],
  },
  mission: {
    sectionNumber: '11',
    title: 'Walk it in the source',
    items: [
      {
        title: 'Open DOMPluginEventSystem.js',
        body: 'Open the event system entry file by hand.',
      },
      {
        title: 'Find dispatchEventsForPlugins',
        body: 'Locate the core router function.',
      },
      {
        title: 'Skim which plugins extractEvents calls',
        body: 'Follow the plugin array and see how interpretations are dispatched.',
      },
      {
        title: 'Remember the FormActionEventPlugin name',
        body: 'Note how it meets React 19 form actions.',
      },
    ],
  },
  takeaways: {
    sectionNumber: '12',
    title: 'Key takeaways',
    cards: [
      {
        title: 'React interprets event meaning in the plugin system.',
        body: 'It does not pass native events straight through — plugins analyze them and convert them into React events.',
        tone: 'blue',
      },
      {
        title: 'The result is a dispatchQueue.',
        body: 'It carries execution order and listener info into the processing stage.',
        tone: 'teal',
      },
      {
        title: 'Simple and special events diverge here.',
        body: 'Click, change, and submit are interpreted differently depending on each plugin.',
        tone: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'understanding SyntheticEvent',
    description: 'See the structure and behavior of the SyntheticEvent that plugins produce.',
    cta: 'Go to the next page',
    href: '/synthetic-event',
  },
};

export const pluginEventSystemContent: Record<Locale, PluginEventSystemContent> = { ko, en };

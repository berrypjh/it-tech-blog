import type { Locale } from '@it-tech-blog/preferences';

export type Tone = 'sky' | 'cyan' | 'teal' | 'emerald' | 'violet' | 'blue' | 'amber' | 'rose';

export type FlowStep = {
  title: string;
  description: string;
  tone: Tone;
};

export type LayerRow = {
  title: string;
  description: string;
  tone: Tone;
};

export type EntryFile = {
  fileName: string;
  badge: string;
  description: string;
  tone: Tone;
};

export type TakeawayCard = {
  title: string;
  body: string;
  tone: Tone;
};

export type WhyEventSystemContent = {
  hero: {
    badges: { label: string; tone: 'blue' | 'cyan' }[];
    titleLines: [string, string];
    highlight: string;
    description: string;
    codeCard: {
      fileLabel: string;
      code: string;
    };
    diagram: {
      title: string;
      columns: {
        title: string;
        subtitle: string;
        kind: 'code' | 'bullet';
        code?: string;
        bullets?: string[];
        tone: Tone;
      }[];
    };
  };
  question: {
    eyebrow: string;
    title: string;
    badges: { label: string; description: string; tone: Tone }[];
  };
  userOnClick: {
    eyebrow: string;
    title: string;
    fileName: string;
    code: string;
    explanation: {
      label: string;
      body: string;
    };
    badges: string[];
  };
  misconception: {
    eyebrow: string;
    title: string;
    misconception: {
      label: string;
      title: string;
      code: string;
      question: string;
    };
    reality: {
      label: string;
      title: string;
      flow: { label: string; tone: Tone }[];
    };
  };
  overview: {
    eyebrow: string;
    title: string;
    steps: FlowStep[];
  };
  middle: {
    eyebrow: string;
    title: string;
    layers: LayerRow[];
    closingNote: string;
  };
  sourceMap: {
    eyebrow: string;
    title: string;
    entries: EntryFile[];
  };
  mission: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };
  takeaways: {
    eyebrow: string;
    title: string;
    cards: TakeawayCard[];
  };
  cta: {
    eyebrow: string;
    question: string;
    nextLabel: string;
    nextTitle: string;
    href: string;
    button: string;
  };
};

const HERO_CODE = `function SaveButton() {
  const handleClick = () => {
    console.log("저장 버튼 클릭!");
  };

  return <button onClick={handleClick}>저장</button>;
}`;

const HERO_CODE_EN = `function SaveButton() {
  const handleClick = () => {
    console.log("Save button clicked!");
  };

  return <button onClick={handleClick}>Save</button>;
}`;

const USER_CODE = `function SaveButton() {
  const handleClick = () => {
    alert("저장 완료!");
  };

  return <button onClick={handleClick}>저장</button>;
}`;

const USER_CODE_EN = `function SaveButton() {
  const handleClick = () => {
    alert("Saved!");
  };

  return <button onClick={handleClick}>Save</button>;
}`;

const ko: WhyEventSystemContent = {
  hero: {
    badges: [
      { label: 'React 내부 탐구', tone: 'blue' },
      { label: '이벤트 시스템 입문', tone: 'cyan' },
    ],
    titleLines: ['React 이벤트 시스템은', '왜 따로 존재할까?'],
    highlight: 'onClick은 단순히 DOM에 붙은 listener가 아닙니다.',
    description:
      'React는 Native Event를 수신하고, Fiber 트리 기준으로 적절한 핸들러를 찾아 실행합니다.',
    codeCard: {
      fileLabel: 'JSX',
      code: HERO_CODE,
    },
    diagram: {
      title: 'onClick은 이 흐름을 거칩니다',
      columns: [
        {
          title: 'JSX 코드',
          subtitle: 'onClick prop 선언',
          kind: 'code',
          code: '<button onClick={handleClick}>저장</button>',
          tone: 'sky',
        },
        {
          title: 'React Event System',
          subtitle: '중간 처리 계층',
          kind: 'bullet',
          bullets: [
            'Native Event 수신',
            'Fiber 트리 기준 탐색',
            '우선순위 & 플러그인 처리',
            'SyntheticEvent 생성',
            'listener 수집 & 실행',
          ],
          tone: 'violet',
        },
        {
          title: 'handleClick 실행',
          subtitle: '사용자 함수 호출',
          kind: 'code',
          code: 'const handleClick = () => {\n  console.log("저장!");\n};',
          tone: 'emerald',
        },
      ],
    },
  },
  question: {
    eyebrow: '오늘 해결할 질문',
    title: 'React는 왜 브라우저 이벤트를 그대로 handler에 넘기지 않고, 중간 이벤트 시스템을 둘까?',
    badges: [
      { label: '이벤트 위임', description: '생성 최적화', tone: 'sky' },
      { label: 'React 트리 기준 실행', description: '정확한 핸들러 탐색', tone: 'cyan' },
      { label: '우선순위 연결', description: '스케줄링과 통합', tone: 'violet' },
    ],
  },
  userOnClick: {
    eyebrow: 'user-view',
    title: '사용자가 보는 onClick',
    fileName: 'SaveButton.jsx',
    code: USER_CODE,
    explanation: {
      label: '사용자 입장에서는',
      body: '버튼을 클릭하면 handleClick이 실행되는 것처럼 보입니다.',
    },
    badges: ['코드가 간단하다', '직관적이다', '동작이 예측 가능해 보인다'],
  },
  misconception: {
    eyebrow: 'misconception-vs-reality',
    title: '흔한 오해 vs 실제 구조',
    misconception: {
      label: '오해',
      title: 'button DOM에 onClick listener가 직접 등록된다.',
      code: '<button id="btn">저장</button>',
      question: "addEventListener('click', ...) 직접 등록?",
    },
    reality: {
      label: '실제 구조',
      title:
        'React root가 native event를 수신하고, 내부에서 target에 맞는 listener를 찾아 실행한다.',
      flow: [
        { label: 'Browser Native Event', tone: 'sky' },
        { label: 'React Root', tone: 'cyan' },
        { label: 'React 내부 이벤트 시스템', tone: 'violet' },
        { label: '해당 Fiber의 onClick 실행', tone: 'emerald' },
      ],
    },
  },
  overview: {
    eyebrow: 'event-pipeline',
    title: '이벤트 시스템 전체 미리보기',
    steps: [
      { title: 'JSX onClick', description: 'onClick prop 선언', tone: 'sky' },
      {
        title: 'root native listener',
        description: 'React root가 하나의 listener로 이벤트 수신',
        tone: 'cyan',
      },
      {
        title: 'priority dispatch',
        description: '이벤트 타입에 맞는 우선순위 결정 및 스케줄러 연동',
        tone: 'teal',
      },
      {
        title: 'DOM target → Fiber target',
        description: 'DOM node를 Fiber node로 매핑',
        tone: 'emerald',
      },
      {
        title: 'Plugin Event System',
        description: '이벤트 타입에 맞는 플러그인 로직 실행',
        tone: 'amber',
      },
      {
        title: 'SyntheticEvent 생성',
        description: 'NativeEvent를 감싸는 SyntheticEvent',
        tone: 'violet',
      },
      {
        title: 'capture / bubble 수집',
        description: 'Fiber 트리를 따라 캡처 → 버블 listener 수집',
        tone: 'blue',
      },
      {
        title: 'dispatchQueue 실행',
        description: '수집된 listener를 순서대로 실행',
        tone: 'rose',
      },
    ],
  },
  middle: {
    eyebrow: 'middle-layer',
    title: 'DOM 이벤트와 React 이벤트 사이의 중간 계층',
    layers: [
      {
        title: 'Browser Native click event',
        description: '브라우저가 발생시키는 실제 이벤트 (MouseEvent)',
        tone: 'sky',
      },
      {
        title: 'React DOM Event Layer',
        description: 'React 내부 이벤트 시스템. 우선순위, 플러그인, SyntheticEvent, 위임을 담당',
        tone: 'violet',
      },
      {
        title: 'React handler props (onClick / onClickCapture)',
        description: '개발자가 작성한 핸들러 실행',
        tone: 'emerald',
      },
    ],
    closingNote:
      'React 이벤트 시스템은 브라우저 이벤트와 React 컴포넌트 이벤트 사이의 번역기입니다.',
  },
  sourceMap: {
    eyebrow: 'source-entry-map',
    title: '실제 코드 진입점 지도',
    entries: [
      {
        fileName: 'ReactDOMRoot.js',
        badge: 'root 초기화',
        description:
          'createRoot 호출 시 root container 생성 및 이벤트 시스템 초기화 흐름을 확인합니다.',
        tone: 'sky',
      },
      {
        fileName: 'DOMPluginEventSystem.js',
        badge: '이벤트 시스템 중심',
        description: '플러그인 시스템, 이벤트 추출, listener 수집의 중심 파일입니다.',
        tone: 'violet',
      },
      {
        fileName: 'ReactDOMEventListener.js',
        badge: 'native event 수신',
        description:
          'root에 등록된 native listener가 이벤트를 수신하고 우선순위와 함께 dispatch합니다.',
        tone: 'emerald',
      },
    ],
  },
  mission: {
    eyebrow: 'follow-along',
    title: '직접 코드에서 따라가 보기',
    description: '실제 React 소스를 열어 아래 5가지 흐름을 손으로 확인해 보세요.',
    items: [
      'React 공식 이벤트 문서에서 onClick과 전파 설명 확인',
      'ReactDOMRoot.js 이름 기억하기',
      'DOMPluginEventSystem.js가 이벤트 파트 중심 파일임을 확인하기',
      '이벤트가 root에서 수신된다는 구조를 코드에서 확인하기',
      'SyntheticEvent가 생성되는 위치를 찾아보기',
    ],
  },
  takeaways: {
    eyebrow: 'key-takeaways',
    title: '이번 페이지에서 반드시 기억할 것',
    cards: [
      {
        title: 'React의 onClick은 내부 이벤트 시스템을 거쳐 실행된다.',
        body: 'root → 이벤트 시스템 → Fiber → handler 실행 순으로 흐른다.',
        tone: 'blue',
      },
      {
        title: '브라우저 이벤트와 React handler 사이에는 해석 계층이 있다.',
        body: '우선순위, 플러그인, SyntheticEvent 등이 여기서 관여한다.',
        tone: 'teal',
      },
      {
        title: '이후 페이지에서는 이 계층을 단계별로 분해한다.',
        body: '각 단계의 역할을 이해해야 디버깅과 성능 분석이 쉬워진다.',
        tone: 'violet',
      },
    ],
  },
  cta: {
    eyebrow: '다음 여정',
    question: '그렇다면 React는 이 이벤트 시스템을 언제 준비할까?',
    nextLabel: '다음 페이지',
    nextTitle: 'createRoot는 왜 root에 Native Event를 등록할까?',
    href: '/root-native-event',
    button: '다음 페이지로 이동',
  },
};

const en: WhyEventSystemContent = {
  hero: {
    badges: [
      { label: 'React Internals', tone: 'blue' },
      { label: 'Event System Intro', tone: 'cyan' },
    ],
    titleLines: ['Why does React have', 'its own event system?'],
    highlight: 'onClick is not a plain listener bound to the DOM button.',
    description:
      'React receives the native event and walks the Fiber tree to find the right handler to run.',
    codeCard: {
      fileLabel: 'JSX',
      code: HERO_CODE_EN,
    },
    diagram: {
      title: 'How onClick actually travels',
      columns: [
        {
          title: 'JSX code',
          subtitle: 'onClick prop declaration',
          kind: 'code',
          code: '<button onClick={handleClick}>Save</button>',
          tone: 'sky',
        },
        {
          title: 'React Event System',
          subtitle: 'Intermediate processing layer',
          kind: 'bullet',
          bullets: [
            'Receive Native Event',
            'Walk the Fiber tree',
            'Priority & plugin handling',
            'Create SyntheticEvent',
            'Collect & execute listeners',
          ],
          tone: 'violet',
        },
        {
          title: 'handleClick runs',
          subtitle: 'User function is invoked',
          kind: 'code',
          code: 'const handleClick = () => {\n  console.log("Save!");\n};',
          tone: 'emerald',
        },
      ],
    },
  },
  question: {
    eyebrow: "Today's question",
    title:
      "Why doesn't React pass the browser event straight to your handler — what is the middle event system for?",
    badges: [
      { label: 'Event delegation', description: 'Creation optimized', tone: 'sky' },
      { label: 'React-tree-aware', description: 'Exact handler lookup', tone: 'cyan' },
      { label: 'Priority hookup', description: 'Wired to scheduling', tone: 'violet' },
    ],
  },
  userOnClick: {
    eyebrow: 'user-view',
    title: 'onClick as the user sees it',
    fileName: 'SaveButton.jsx',
    code: USER_CODE_EN,
    explanation: {
      label: 'From the user point of view',
      body: 'Click the button and handleClick appears to run directly.',
    },
    badges: ['Simple code', 'Intuitive', 'Behavior looks predictable'],
  },
  misconception: {
    eyebrow: 'misconception-vs-reality',
    title: 'Common misconception vs. real structure',
    misconception: {
      label: 'Misconception',
      title: 'An onClick listener is attached directly to the button DOM.',
      code: '<button id="btn">Save</button>',
      question: "addEventListener('click', ...) attached directly?",
    },
    reality: {
      label: 'Real structure',
      title:
        'The React root receives the native event, then internally finds the right listener for the target and runs it.',
      flow: [
        { label: 'Browser Native Event', tone: 'sky' },
        { label: 'React Root', tone: 'cyan' },
        { label: 'React internal event system', tone: 'violet' },
        { label: "Run that Fiber's onClick", tone: 'emerald' },
      ],
    },
  },
  overview: {
    eyebrow: 'event-pipeline',
    title: 'The full event system at a glance',
    steps: [
      { title: 'JSX onClick', description: 'Declare the onClick prop', tone: 'sky' },
      {
        title: 'root native listener',
        description: 'The React root receives the event via one listener',
        tone: 'cyan',
      },
      {
        title: 'priority dispatch',
        description: 'Pick a priority for the event type and hand off to the scheduler',
        tone: 'teal',
      },
      {
        title: 'DOM target → Fiber target',
        description: 'Map the DOM node back to its Fiber',
        tone: 'emerald',
      },
      {
        title: 'Plugin Event System',
        description: 'Run the right plugin logic for the event type',
        tone: 'amber',
      },
      {
        title: 'SyntheticEvent creation',
        description: 'Wrap the native event into a SyntheticEvent',
        tone: 'violet',
      },
      {
        title: 'capture / bubble collection',
        description: 'Walk the Fiber tree to gather capture → bubble listeners',
        tone: 'blue',
      },
      {
        title: 'dispatchQueue execution',
        description: 'Invoke the collected listeners in order',
        tone: 'rose',
      },
    ],
  },
  middle: {
    eyebrow: 'middle-layer',
    title: 'The middle layer between DOM events and React events',
    layers: [
      {
        title: 'Browser native click event',
        description: 'The real event the browser fires (MouseEvent).',
        tone: 'sky',
      },
      {
        title: 'React DOM Event Layer',
        description:
          "React's internal event system. Handles priority, plugins, SyntheticEvent, delegation.",
        tone: 'violet',
      },
      {
        title: 'React handler props (onClick / onClickCapture)',
        description: 'The handler you actually wrote runs.',
        tone: 'emerald',
      },
    ],
    closingNote:
      "React's event system is a translator between browser events and React component events.",
  },
  sourceMap: {
    eyebrow: 'source-entry-map',
    title: 'Source entry-point map',
    entries: [
      {
        fileName: 'ReactDOMRoot.js',
        badge: 'root setup',
        description:
          'See how createRoot builds the root container and bootstraps the event system.',
        tone: 'sky',
      },
      {
        fileName: 'DOMPluginEventSystem.js',
        badge: 'event system core',
        description: 'Plugins, event extraction, and listener accumulation live here.',
        tone: 'violet',
      },
      {
        fileName: 'ReactDOMEventListener.js',
        badge: 'native event reception',
        description:
          'The native listener attached to the root receives the event and dispatches it with priority.',
        tone: 'emerald',
      },
    ],
  },
  mission: {
    eyebrow: 'follow-along',
    title: 'Walk it in the source',
    description: 'Open the React repo and confirm the following five things by hand.',
    items: [
      'Read about onClick and event propagation in the official React docs',
      'Remember the file name ReactDOMRoot.js',
      'Confirm DOMPluginEventSystem.js is the central file of the event system',
      'Confirm in code that events are received at the root',
      'Find where SyntheticEvent is created',
    ],
  },
  takeaways: {
    eyebrow: 'key-takeaways',
    title: 'Must remember from this page',
    cards: [
      {
        title: "React's onClick goes through the internal event system before running.",
        body: 'Flow: root → event system → Fiber → handler execution.',
        tone: 'blue',
      },
      {
        title: 'There is an interpretation layer between browser events and React handlers.',
        body: 'Priority, plugins, SyntheticEvent — they all live here.',
        tone: 'teal',
      },
      {
        title: 'Later pages break this layer apart step by step.',
        body: 'Understanding each stage makes debugging and perf work much easier.',
        tone: 'violet',
      },
    ],
  },
  cta: {
    eyebrow: 'Next stop',
    question: 'So when does React actually set up this event system?',
    nextLabel: 'Next page',
    nextTitle: 'Why does createRoot attach native events to the root?',
    href: '/root-native-event',
    button: 'Go to the next page',
  },
};

export const whyEventSystemContent: Record<Locale, WhyEventSystemContent> = { ko, en };

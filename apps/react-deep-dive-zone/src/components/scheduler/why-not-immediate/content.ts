import type { Locale } from '@it-tech-blog/preferences';

export type Tone = 'sky' | 'cyan' | 'teal' | 'emerald' | 'violet' | 'blue' | 'amber' | 'rose';

export type FlowStep = { title: string; description: string; tone: Tone };

export type ConceptCard = { title: string; description: string; tone: Tone };

export type ScenarioCard = {
  title: string;
  description: string;
  mockup: 'search-input' | 'skeleton-list' | 'offscreen-placeholder';
  note: string;
  tone: Tone;
};

export type ComparisonRow = {
  situation: string;
  urgency: string;
  example: string[];
  processing: string[];
  goal: string[];
  mockup: 'search-input' | 'skeleton-list' | 'offscreen-placeholder';
  tone: Tone;
};

export type MissionCard = { title: string; description: string; tone: Tone };

export type TakeawayCard = { title: string; body: string; tone: Tone };

export type WhyNotImmediateContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    subtitle: string;
    codeCard: { fileLabel: string; code: string };
    diagram: { title: string; steps: FlowStep[] };
  };
  question: {
    eyebrow: string;
    title: string;
    question: string;
    badges: ConceptCard[];
  };
  intuition: {
    eyebrow: string;
    title: string;
    wrong: {
      label: string;
      title: string;
      flow: string[];
      warning: string;
    };
    real: {
      label: string;
      title: string;
      flow: string[];
      success: string;
    };
  };
  scenarios: {
    eyebrow: string;
    title: string;
    cases: ScenarioCard[];
  };
  flow: {
    eyebrow: string;
    title: string;
    steps: FlowStep[];
  };
  comparison: {
    eyebrow: string;
    title: string;
    headers: { situation: string; example: string; processing: string; goal: string };
    rows: ComparisonRow[];
  };
  code: {
    eyebrow: string;
    title: string;
    code: string;
    fileLabel: string;
    explanationLabel: string;
    explanation: string[];
    apiBadges: string[];
    button: { label: string; href: string };
  };
  mission: {
    eyebrow: string;
    title: string;
    description: string;
    items: MissionCard[];
  };
  takeaways: {
    eyebrow: string;
    title: string;
    cards: TakeawayCard[];
  };
  cta: {
    eyebrow: string;
    mainText: string;
    description: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string }[];
  };
};

const HERO_CODE = `function SearchBox() {
  const [query, setQuery] = useState("");

  function onChange(e) {
    const nextQuery = e.target.value;
    setQuery(nextQuery);
  }

  // ...
}`;

const HERO_CODE_EN = HERO_CODE;

const FLOW_CODE = `// setState / dispatch 내부에서 호출되는 흐름의 핵심

const lane = requestUpdateLane(fiber);

scheduleUpdateOnFiber(root, fiber, lane);`;

const FLOW_CODE_EN = `// Core of what setState / dispatch invokes internally

const lane = requestUpdateLane(fiber);

scheduleUpdateOnFiber(root, fiber, lane);`;

const REACT_FIBER_WORK_LOOP_URL =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js';

const ko: WhyNotImmediateContent = {
  hero: {
    badge: 'Scheduler · 1/10단계',
    titleLines: ['React는 왜', '업데이트를 바로 실행하지 않을까?'],
    subtitle: '상태가 바뀌었다고 React가 즉시 전체 렌더링을 밀어붙이지는 않습니다.',
    codeCard: { fileLabel: 'SearchBox.jsx', code: HERO_CODE },
    diagram: {
      title: 'React가 업데이트를 다루는 높은 수준의 흐름',
      steps: [
        {
          title: 'Update 생성',
          description: '상태 변경 요청이 업데이트 객체로 기록',
          tone: 'violet',
        },
        {
          title: '우선순위 결정',
          description: '어떤 긴급도로 처리할지 lane을 통해 분류',
          tone: 'blue',
        },
        {
          title: '렌더링 시점 조율',
          description: '스케줄링을 거쳐 적절한 시점에 렌더링',
          tone: 'teal',
        },
      ],
    },
  },
  question: {
    eyebrow: '오늘 해결할 질문',
    title: '오늘 해결할 질문',
    question:
      '사용자가 클릭하거나 입력했을 때, React는 왜 어떤 업데이트는 먼저 처리하고 어떤 업데이트는 뒤로 미룰까?',
    badges: [
      {
        title: '입력 반응성',
        description: '사용자 경험을 지키기 위해 빠르게 반영',
        tone: 'blue',
      },
      {
        title: '렌더링 우선순위',
        description: '작업의 중요도에 따라 순서를 조율',
        tone: 'violet',
      },
      {
        title: '작업 조율',
        description: '여러 작업을 동시에 효율적으로 관리',
        tone: 'teal',
      },
    ],
  },
  intuition: {
    eyebrow: 'setState에 대한 흔한 직관',
    title: 'setState에 대한 흔한 직관',
    wrong: {
      label: '흔한 직관',
      title: '흔한 직관, 실제로는 아님',
      flow: ['setState 호출', '즉시 렌더링', '바로 DOM 반영'],
      warning: '모든 업데이트를 즉시 처리하면 사용자 경험이 나빠질 수 있습니다.',
    },
    real: {
      label: '실제 흐름',
      title: 'React의 실제 흐름',
      flow: ['setState 호출', '업데이트 기록', '우선순위 분류', '스케줄링', '렌더링', '커밋'],
      success: '필요한 작업을, 적절한 때에, 가장 효율적으로 처리합니다.',
    },
  },
  scenarios: {
    eyebrow: '즉시 렌더링이 항상 좋은가?',
    title: '즉시 렌더링이 항상 좋은가?',
    cases: [
      {
        title: '검색창 입력',
        description: '입력 반응은 즉각적이어야 한다.',
        mockup: 'search-input',
        note: '키 입력 지연은 사용자가 바로 체감합니다.',
        tone: 'blue',
      },
      {
        title: '무거운 검색 결과 리스트',
        description: '조금 늦어져도 입력을 막으면 안 된다.',
        mockup: 'skeleton-list',
        note: '큰 리스트 렌더링이 입력을 블로킹하면 안 됩니다.',
        tone: 'violet',
      },
      {
        title: '화면 밖 또는 중요 낮은 업데이트',
        description: '가장 늦게 처리되어도 괜찮다.',
        mockup: 'offscreen-placeholder',
        note: '당장 보이지 않는 UI는 뒤로 미뤄도 무방합니다.',
        tone: 'teal',
      },
    ],
  },
  flow: {
    eyebrow: 'React의 실제 처리 흐름',
    title: 'React의 실제 처리 흐름',
    steps: [
      { title: '사용자 상호작용', description: '클릭, 입력, 스크롤 등 발생', tone: 'sky' },
      { title: 'setState / dispatch', description: '업데이트 요청이 발생', tone: 'cyan' },
      {
        title: 'requestUpdateLane',
        description: '업데이트에 맞는 lane 우선순위 선택',
        tone: 'violet',
      },
      {
        title: 'scheduleUpdateOnFiber',
        description: '해당 fiber와 root에 업데이트 예약',
        tone: 'blue',
      },
      { title: 'root scheduling', description: '스케줄러가 전체 작업 순서 조율', tone: 'teal' },
      {
        title: 'render work 시작',
        description: '정해진 우선순위에 따라 렌더링 수행',
        tone: 'emerald',
      },
    ],
  },
  comparison: {
    eyebrow: '세 가지 업데이트 상황 비교',
    title: '세 가지 업데이트 상황 비교',
    headers: {
      situation: '상황',
      example: '예시',
      processing: 'React가 원하는 처리 방식',
      goal: '사용자 경험 목표',
    },
    rows: [
      {
        situation: '텍스트 입력',
        urgency: '즉각 반응',
        example: ['검색창에 키 입력', '매 키 입력마다 setState'],
        processing: ['높은 우선순위', '빠르게 반영'],
        goal: ['입력 지연 최소화', '즉각적인 피드백'],
        mockup: 'search-input',
        tone: 'blue',
      },
      {
        situation: '큰 UI 전환',
        urgency: '무거운 렌더링',
        example: ['검색 결과 리스트 표시', '수천 개 아이템 렌더링'],
        processing: ['중간 우선순위', '입력보다 뒤로'],
        goal: ['입력은 막지 않고', '적절한 시점에 반영'],
        mockup: 'skeleton-list',
        tone: 'violet',
      },
      {
        situation: 'Deferred UI',
        urgency: '중요도 낮음',
        example: ['덜 비싼 캐싱 업데이트', '화면 밖 UI 업데이트'],
        processing: ['낮은 우선순위', '가장 뒤로 미룸'],
        goal: ['필요할 때 처리해도', '사용성에 영향 없음'],
        mockup: 'offscreen-placeholder',
        tone: 'teal',
      },
    ],
  },
  code: {
    eyebrow: '실제 코드 흐름 예고',
    title: '실제 코드 흐름 예고',
    code: FLOW_CODE,
    fileLabel: 'ReactFiberWorkLoop.js',
    explanationLabel: '설명',
    explanation: [
      'requestUpdateLane은 어떤 우선순위, 현재 상황 등을 종합해 lane을 결정합니다.',
      'scheduleUpdateOnFiber는 해당 lane을 가진 업데이트를 root의 pending lanes에 기록하고, 스케줄러가 작업을 수행하도록 연결합니다.',
    ],
    apiBadges: ['requestUpdateLane', 'scheduleUpdateOnFiber'],
    button: { label: 'GitHub에서 전체 코드 보기', href: REACT_FIBER_WORK_LOOP_URL },
  },
  mission: {
    eyebrow: '직접 코드에서 따라가 보기',
    title: '직접 코드에서 따라가 보기',
    description: '실제 React 소스를 열고 아래 흐름을 손으로 확인해 보세요.',
    items: [
      {
        title: 'ReactFiberWorkLoop.js를 연다',
        description: '업데이트가 시작되는 위치를 찾기 위해 방문합니다.',
        tone: 'sky',
      },
      {
        title: 'requestUpdateLane을 찾는다',
        description: '업데이트 우선순위가 결정되는 함수를 확인합니다.',
        tone: 'violet',
      },
      {
        title: 'scheduleUpdateOnFiber를 찾는다',
        description: 'lane이 root 스케줄러로 전달되는 진입점을 확인합니다.',
        tone: 'blue',
      },
      {
        title: '두 함수가 업데이트 진입점임을 기억한다',
        description: '업데이트 파이프라인의 시작이라는 관점을 갖습니다.',
        tone: 'teal',
      },
    ],
  },
  takeaways: {
    eyebrow: '이번 페이지에서 반드시 기억할 것',
    title: '이번 페이지에서 반드시 기억할 것',
    cards: [
      {
        title: 'setState는 즉시 렌더링을 뜻하지 않는다.',
        body: '업데이트는 기록되고, 적절한 시점에 처리됩니다.',
        tone: 'blue',
      },
      {
        title: 'React는 먼저 업데이트를 분류한다.',
        body: 'lane으로 작업의 중요도를 구분합니다.',
        tone: 'violet',
      },
      {
        title: 'Scheduler 파트는 그 분류와 실행 순서를 다룬다.',
        body: '어떤 작업을 언제, 어떻게 실행할지 조율합니다.',
        tone: 'teal',
      },
    ],
  },
  cta: {
    eyebrow: '다음 여정',
    mainText: '업데이트가 왜 즉시 실행되지 않는지, 이제 전체 그림이 보이나요?',
    description: '다음 파트에서 Scheduler와 우선순위 시스템을 더 깊이 파헤쳐 봅니다.',
    primary: { label: '다음: React 내부의 3가지 우선순위 축', href: '/priority-axes' },
    secondary: [
      { label: '전체 흐름 다시 보기', href: '#flow-heading' },
      { label: 'React 소스코드 열기', href: REACT_FIBER_WORK_LOOP_URL },
    ],
  },
};

const en: WhyNotImmediateContent = {
  hero: {
    badge: 'Scheduler · 1/10',
    titleLines: ['Why does React not', 'run updates immediately?'],
    subtitle: "A state change doesn't push React into rendering everything right away.",
    codeCard: { fileLabel: 'SearchBox.jsx', code: HERO_CODE_EN },
    diagram: {
      title: 'How React handles updates at a high level',
      steps: [
        {
          title: 'Create an update',
          description: 'The state change is recorded as an update object',
          tone: 'violet',
        },
        {
          title: 'Pick a priority',
          description: 'A lane classifies how urgent this update is',
          tone: 'blue',
        },
        {
          title: 'Schedule the render',
          description: 'The scheduler runs the work at the right time',
          tone: 'teal',
        },
      ],
    },
  },
  question: {
    eyebrow: "Today's question",
    title: "Today's question",
    question:
      'When a user clicks or types, why does React process some updates first and defer others?',
    badges: [
      { title: 'Input responsiveness', description: 'Reflect quickly to protect UX', tone: 'blue' },
      { title: 'Render priority', description: 'Order work by importance', tone: 'violet' },
      { title: 'Work coordination', description: 'Manage several tasks efficiently', tone: 'teal' },
    ],
  },
  intuition: {
    eyebrow: 'Common intuition about setState',
    title: 'Common intuition about setState',
    wrong: {
      label: 'Common intuition',
      title: "Common intuition — that's not it",
      flow: ['Call setState', 'Render immediately', 'Reflect to the DOM'],
      warning: 'Processing every update immediately can hurt the user experience.',
    },
    real: {
      label: 'Real flow',
      title: "React's actual flow",
      flow: [
        'Call setState',
        'Record the update',
        'Classify priority',
        'Schedule',
        'Render',
        'Commit',
      ],
      success: 'Run the needed work, at the right time, in the most efficient way.',
    },
  },
  scenarios: {
    eyebrow: 'Is immediate rendering always good?',
    title: 'Is immediate rendering always good?',
    cases: [
      {
        title: 'Typing in a search box',
        description: 'Input feedback must feel instantaneous.',
        mockup: 'search-input',
        note: 'Users feel even tiny keystroke delays immediately.',
        tone: 'blue',
      },
      {
        title: 'Heavy search result list',
        description: 'It can lag a little, but must never block typing.',
        mockup: 'skeleton-list',
        note: 'Rendering a big list must not block input.',
        tone: 'violet',
      },
      {
        title: 'Offscreen or low-importance update',
        description: 'Totally fine to run last.',
        mockup: 'offscreen-placeholder',
        note: 'UI that is not visible right now can wait.',
        tone: 'teal',
      },
    ],
  },
  flow: {
    eyebrow: "React's actual processing flow",
    title: "React's actual processing flow",
    steps: [
      { title: 'User interaction', description: 'Click, type, scroll, etc.', tone: 'sky' },
      { title: 'setState / dispatch', description: 'An update request is made', tone: 'cyan' },
      {
        title: 'requestUpdateLane',
        description: 'Pick the lane that matches the update',
        tone: 'violet',
      },
      {
        title: 'scheduleUpdateOnFiber',
        description: 'Mark the fiber and root with pending work',
        tone: 'blue',
      },
      {
        title: 'root scheduling',
        description: 'Scheduler coordinates the work order',
        tone: 'teal',
      },
      {
        title: 'Render work begins',
        description: 'Rendering runs at the chosen priority',
        tone: 'emerald',
      },
    ],
  },
  comparison: {
    eyebrow: 'Three update situations compared',
    title: 'Three update situations compared',
    headers: {
      situation: 'Situation',
      example: 'Example',
      processing: 'How React wants to handle it',
      goal: 'UX goal',
    },
    rows: [
      {
        situation: 'Text input',
        urgency: 'Instant feedback',
        example: ['Typing in the search box', 'setState on every keystroke'],
        processing: ['High priority', 'Reflect immediately'],
        goal: ['Minimize input lag', 'Instant feedback'],
        mockup: 'search-input',
        tone: 'blue',
      },
      {
        situation: 'Large UI transition',
        urgency: 'Heavy rendering',
        example: ['Show the search result list', 'Render thousands of items'],
        processing: ['Medium priority', 'After input work'],
        goal: ['Never block typing', 'Reflect at the right time'],
        mockup: 'skeleton-list',
        tone: 'violet',
      },
      {
        situation: 'Deferred UI',
        urgency: 'Low importance',
        example: ['Cheap cache update', 'Offscreen UI update'],
        processing: ['Low priority', 'Push to the end'],
        goal: ['Run when needed without', 'hurting usability'],
        mockup: 'offscreen-placeholder',
        tone: 'teal',
      },
    ],
  },
  code: {
    eyebrow: 'Source code preview',
    title: 'Source code preview',
    code: FLOW_CODE_EN,
    fileLabel: 'ReactFiberWorkLoop.js',
    explanationLabel: 'Explanation',
    explanation: [
      'requestUpdateLane decides the lane based on the current priority and context.',
      'scheduleUpdateOnFiber records that lane in the root pending lanes and hands control to the scheduler.',
    ],
    apiBadges: ['requestUpdateLane', 'scheduleUpdateOnFiber'],
    button: { label: 'See the full code on GitHub', href: REACT_FIBER_WORK_LOOP_URL },
  },
  mission: {
    eyebrow: 'Walk it in the source',
    title: 'Walk it in the source',
    description: 'Open the real React source and verify the following by hand.',
    items: [
      {
        title: 'Open ReactFiberWorkLoop.js',
        description: 'Visit the file where updates start.',
        tone: 'sky',
      },
      {
        title: 'Find requestUpdateLane',
        description: 'See the function that picks the update priority.',
        tone: 'violet',
      },
      {
        title: 'Find scheduleUpdateOnFiber',
        description: 'See where the lane is handed off to the root scheduler.',
        tone: 'blue',
      },
      {
        title: 'Remember: both are entry points',
        description: 'Treat them as the entrance of the update pipeline.',
        tone: 'teal',
      },
    ],
  },
  takeaways: {
    eyebrow: 'Must remember from this page',
    title: 'Must remember from this page',
    cards: [
      {
        title: 'setState does not mean immediate rendering.',
        body: 'Updates are recorded and processed at the right time.',
        tone: 'blue',
      },
      {
        title: 'React classifies updates first.',
        body: 'A lane carries the importance of the work.',
        tone: 'violet',
      },
      {
        title: 'The Scheduler chapter is about that classification and execution order.',
        body: 'It coordinates what runs when and how.',
        tone: 'teal',
      },
    ],
  },
  cta: {
    eyebrow: 'Next stop',
    mainText: 'Can you see the whole picture of why updates are not run immediately?',
    description: "Next we'll dive deeper into the Scheduler and its priority system.",
    primary: {
      label: "Next: React's three priority axes",
      href: '/priority-axes',
    },
    secondary: [
      { label: 'Replay the whole flow', href: '#flow-heading' },
      { label: 'Open the React source', href: REACT_FIBER_WORK_LOOP_URL },
    ],
  },
};

export const whyNotImmediateContent: Record<Locale, WhyNotImmediateContent> = { ko, en };

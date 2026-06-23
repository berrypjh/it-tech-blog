import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from './tone';

export type IconKey =
  | 'plug'
  | 'plug-zap'
  | 'unplug'
  | 'refresh'
  | 'zap'
  | 'palette'
  | 'bell'
  | 'split'
  | 'sparkles'
  | 'shield-alert'
  | 'shield-check'
  | 'route'
  | 'compass'
  | 'search'
  | 'workflow'
  | 'settings'
  | 'timer'
  | 'check'
  | 'x'
  | 'ban'
  | 'globe'
  | 'network'
  | 'target'
  | 'layers';

export type SupportQuestion = { body: string; iconKey: IconKey };

export type ProblemCard = {
  tone: ToneKey;
  title: string;
  caption: string;
  conclusion: string;
  iconKey: IconKey;
  connector?: '+' | '→' | null;
};

export type ProblemListItem = { text: string };

export type SeparationCard = {
  tone: ToneKey;
  title: string;
  description: string;
  items: string[];
  iconKey: IconKey;
};

export type FlowStep = {
  tone: ToneKey;
  title: string;
  body: string;
  iconKey: IconKey;
};

export type ConstraintCard = {
  tone: ToneKey;
  title: string;
  items: string[];
  iconKey: IconKey;
};

export type ComparisonRow = {
  topic: string;
  beforeLines: string[];
  afterLines: string[];
  explanation: string;
};

export type SimulatorTabKey = 'theme' | 'roomId';

export type SimulatorStep = {
  title: string;
  caption?: string;
  legend: 'detect' | 'rerun' | 'disconnect' | 'connect' | 'connected' | 'notify' | 'keep';
};

export type SimulatorScenario = {
  key: SimulatorTabKey;
  tabLabel: string;
  scenarioLabel: string;
  beforeFlow: SimulatorStep[];
  beforeResult: string;
  beforeResultTone: ToneKey;
  afterFlow: SimulatorStep[];
  afterResult: string;
  afterResultTone: ToneKey;
};

export type Mission = {
  number: string;
  title: string;
  helper: string;
  iconKey: IconKey;
};

export type TakeawayCard = {
  number: string;
  tone: ToneKey;
  title: string;
  body: string;
  iconKey: IconKey;
};

export type LegendItem = { label: string; legend: SimulatorStep['legend'] };

export type UseEffectEventContent = {
  hero: {
    badge: string;
    titleLines: [string, string, string];
    subtitleLines: [string, string];
    beforeCode: {
      title: string;
      langBadge: 'JSX';
      code: string;
      footerLines: [string, string];
    };
    reconnect: {
      title: string;
      beforeLabel: string;
      beforeBody: string;
      afterLabel: string;
      afterBody: string;
    };
    afterCode: {
      title: string;
      langBadge: 'JSX';
      code: string;
      footerLines: [string, string];
    };
  };
  question: {
    number: string;
    eyebrow: string;
    questionLines: [string, string];
    supportQuestions: SupportQuestion[];
  };
  problem: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: ProblemCard[];
  };
  before: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    code: { fileName: string; langBadge: 'JSX'; code: string };
    problemCardTitle: string;
    problems: ProblemListItem[];
    summary: string;
  };
  after: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    code: { fileName: string; langBadge: 'JSX'; code: string };
    improvementCardTitle: string;
    improvements: ProblemListItem[];
    summary: string;
  };
  separation: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    left: SeparationCard;
    center: string;
    right: SeparationCard;
  };
  dependency: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    flow: FlowStep[];
    dependencyCardTitle: string;
    beforeLabel: string;
    beforeValue: string;
    beforeBody: string;
    afterLabel: string;
    afterValue: string;
    afterBody: string;
  };
  restriction: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: ConstraintCard[];
  };
  comparison: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    columns: { topic: string; before: string; after: string; explanation: string };
    rows: ComparisonRow[];
  };
  simulator: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    tabsLabel: string;
    defaultScenario: SimulatorTabKey;
    scenarios: SimulatorScenario[];
    legendTitle: string;
    legendItems: LegendItem[];
    beforeTitle: string;
    afterTitle: string;
  };
  mission: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    missions: Mission[];
  };
  takeaways: {
    number: string;
    eyebrow: string;
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

const BEFORE_CODE = `useEffect(() => {
  const connection = createConnection(serverUrl, roomId);

  connection.on("connected", () => {
    showNotification("Connected!", theme);
  });

  connection.connect();

  return () => connection.disconnect();
}, [roomId, theme]);`;

const AFTER_CODE = `const onConnected = useEffectEvent(() => {
  showNotification("Connected!", theme);
});

useEffect(() => {
  const connection = createConnection(serverUrl, roomId);

  connection.on("connected", () => {
    onConnected();
  });

  connection.connect();

  return () => connection.disconnect();
}, [roomId]);`;

const ko: UseEffectEventContent = {
  hero: {
    badge: 'React 19 변화 · 9/10단계',
    titleLines: ['useEffectEvent는', 'Effect 설계에 무엇을', '새로 추가했나?'],
    subtitleLines: [
      'Effect가 하는 일과 Effect 안에서',
      '발생하는 이벤트성 로직을 분리하는 API입니다.',
    ],
    beforeCode: {
      title: 'Before (기존 useEffect)',
      langBadge: 'JSX',
      code: BEFORE_CODE,
      footerLines: ['Dependency: [roomId, theme]', 'theme 변경 시에도 reconnect 발생'],
    },
    reconnect: {
      title: 'reconnect 감소',
      beforeLabel: 'Before',
      beforeBody: 'theme 변경 시 reconnect 발생',
      afterLabel: 'After',
      afterBody: 'theme 변경 시 reconnect 없음',
    },
    afterCode: {
      title: 'After (useEffectEvent 적용)',
      langBadge: 'JSX',
      code: AFTER_CODE,
      footerLines: ['Dependency: [roomId]', 'theme 변경 시에도 reconnect 없음'],
    },
  },
  question: {
    number: '02',
    eyebrow: '오늘 해결할 질문',
    questionLines: ['theme만 바뀌었는데 왜 채팅 연결까지', '다시 열어야 할까?'],
    supportQuestions: [
      { body: 'Effect 본체와 이벤트 로직 분리', iconKey: 'split' },
      { body: '불필요한 재연결 감소', iconKey: 'plug' },
      { body: '최신 props/state 안전하게 사용', iconKey: 'shield-check' },
      { body: '더 명확한 Effect 설계', iconKey: 'sparkles' },
    ],
  },
  problem: {
    number: '01',
    eyebrow: '기존 Effect의 한계',
    title: '기존 Effect의 문제',
    description:
      '같은 dependency 배열에 묶여 있지만, roomId와 theme는 성격이 완전히 다른 값입니다.',
    cards: [
      {
        tone: 'concept',
        title: 'roomId 변경',
        caption: '연결 대상 변경',
        conclusion: '재연결 필요',
        iconKey: 'network',
        connector: '+',
      },
      {
        tone: 'advanced',
        title: 'theme 변경',
        caption: '알림 텍스트만 변경',
        conclusion: '알림 텍스트만 바꾸면 됨',
        iconKey: 'palette',
        connector: '→',
      },
      {
        tone: 'problem',
        title: '하지만 기존 Effect는',
        caption: '둘 다 dependency라서 둘 다 재실행',
        conclusion: '불필요한 reconnect 발생',
        iconKey: 'shield-alert',
        connector: null,
      },
    ],
  },
  before: {
    number: '02',
    eyebrow: '기존 접근',
    title: 'Before 코드 (기존 접근)',
    description:
      'theme도 dependency에 포함되어 있으면, 알림 문구만 바꾸고 싶을 때도 연결을 끊고 다시 엽니다.',
    code: { fileName: 'ChatRoom.jsx', langBadge: 'JSX', code: BEFORE_CODE },
    problemCardTitle: '문제점',
    problems: [
      { text: 'theme가 바뀌어도 Effect 전체가 다시 실행됩니다.' },
      { text: '연결을 끊고 다시 열기 때문에 비용이 발생합니다.' },
      { text: '의도상 알림 문구만 최신이면 되는 조건이 복잡해집니다.' },
    ],
    summary: 'theme 변경은 알림 문구만 바꾸면 되는데, 연결까지 다시 열고 있습니다.',
  },
  after: {
    number: '03',
    eyebrow: '개선 접근',
    title: 'useEffectEvent 도입 (After)',
    description:
      'Effect Event로 알림 로직을 분리하면, Effect 본체는 연결 관리에만 집중하고 알림 로직은 최신 theme를 그대로 읽습니다.',
    code: { fileName: 'ChatRoom.jsx', langBadge: 'JSX', code: AFTER_CODE },
    improvementCardTitle: '개선 효과',
    improvements: [
      { text: 'theme가 바뀌어도 Effect 본체는 다시 실행되지 않습니다.' },
      { text: '알림 문구만 최신 theme로 업데이트됩니다.' },
      { text: '의존성 배열이 [roomId]로 줄어 재실행 조건이 명확해집니다.' },
    ],
    summary: '연결 로직은 안정적으로 유지되고, 알림 로직은 항상 최신 값을 사용합니다.',
  },
  separation: {
    number: '04',
    eyebrow: '역할 분리',
    title: 'Effect와 Effect Event 분리',
    description:
      'Effect는 외부 시스템 연결과 정리 같은 구조적 작업을, Effect Event는 그 위에서 일어나는 이벤트성 반응을 담당합니다.',
    left: {
      tone: 'concept',
      title: 'Effect (본체)',
      description: '연결을 만들고 정리하는 구조적 작업',
      items: ['연결 생성 / 연결하지 않음 점검', '외부 시스템과의 생명주기 관리'],
      iconKey: 'settings',
    },
    center: '분리',
    right: {
      tone: 'advanced',
      title: 'Effect Event (이벤트 로직)',
      description: '연결 성공 시 실행되는 이벤트성 로직',
      items: ['최신 props/state 읽기', 'UI 반응, 알림, 로그 등 처리'],
      iconKey: 'zap',
    },
  },
  dependency: {
    number: '05',
    eyebrow: '의존성 변화',
    title: '의존성 배열이 줄어드는 이유',
    description:
      'theme는 실행 시점마다 “최신 값”을 그대로 읽기만 하면 되므로, Effect 본체의 재실행 조건에 들어갈 필요가 없습니다.',
    flow: [
      {
        tone: 'concept',
        title: 'theme',
        body: '알림 문구',
        iconKey: 'palette',
      },
      {
        tone: 'advanced',
        title: 'Effect Event가 읽는 최신 값',
        body: '실행 시점에 최신으로 읽음',
        iconKey: 'zap',
      },
      {
        tone: 'improvement',
        title: 'Effect 본체의 재실행 조건이 아님',
        body: 'dependency에서 빠짐',
        iconKey: 'shield-check',
      },
    ],
    dependencyCardTitle: 'Dependency 변화',
    beforeLabel: 'Before',
    beforeValue: '[roomId, theme]',
    beforeBody: 'theme도 재실행 조건',
    afterLabel: 'After',
    afterValue: '[roomId]',
    afterBody: '연결 대상만 재실행 조건',
  },
  restriction: {
    number: '06',
    eyebrow: '사용 규칙',
    title: '사용 위치 제약 (규칙 중요)',
    description:
      'useEffectEvent는 강력한 만큼 사용 위치가 제한됩니다. 잘못된 위치에서 부르면 의도가 무너집니다.',
    cards: [
      {
        tone: 'improvement',
        title: '허용되는 호출 위치',
        items: ['Effect 내부에서', '다른 Effect Event 내부에서'],
        iconKey: 'shield-check',
      },
      {
        tone: 'problem',
        title: '이렇게 쓰면 안 됩니다',
        items: ['dependency 회피용 꼼수', 'Effect 밖에서 직접 호출'],
        iconKey: 'ban',
      },
      {
        tone: 'problem',
        title: '규칙 중요',
        items: ['올바른 설계를 위한 대상 구조', '규칙을 어기면 의도된 효과가 사라짐'],
        iconKey: 'shield-alert',
      },
    ],
  },
  comparison: {
    number: '07',
    eyebrow: '동작 비교',
    title: 'Before / After 동작 비교',
    description:
      'theme 변경과 roomId 변경 두 시나리오에서, Before와 After가 어떻게 다르게 동작하는지 한 표로 비교합니다.',
    columns: {
      topic: '변화 상황',
      before: 'Before (기존)',
      after: 'After (useEffectEvent)',
      explanation: '설명',
    },
    rows: [
      {
        topic: 'theme 변경',
        beforeLines: ['reconnect 발생', 'Effect 전체 재실행', '연결 끊고 다시 연결'],
        afterLines: ['reconnect 없음', '알림만 최신 theme로 업데이트', '연결 유지'],
        explanation: 'Effect Event가 최신 theme를 읽어 알림만 업데이트',
      },
      {
        topic: 'roomId 변경',
        beforeLines: ['reconnect 발생(필요)', 'Effect 전체 재실행', '연결 끊고 새 연결'],
        afterLines: ['reconnect 발생(동일)', 'Effect 재실행', '연결 끊고 새 연결'],
        explanation: '연결 대상이 바뀌므로 둘 다 재연결이 필요',
      },
    ],
  },
  simulator: {
    number: '08',
    eyebrow: '재연결 시뮬레이터',
    title: 'Effect Reconnect 비교기',
    description:
      '시나리오를 선택해 Before / After 흐름을 직접 비교해 보세요. 같은 변경이라도 결과가 어떻게 갈리는지 보입니다.',
    tabsLabel: '시나리오 선택',
    defaultScenario: 'theme',
    scenarios: [
      {
        key: 'theme',
        tabLabel: 'theme 변경',
        scenarioLabel: '시나리오: theme 변경',
        beforeFlow: [
          {
            title: 'theme 변경 감지',
            caption: '이벤트성 변경',
            legend: 'detect',
          },
          { title: 'Effect 전체 재실행', legend: 'rerun' },
          { title: 'disconnect', legend: 'disconnect' },
          { title: 'connect', legend: 'connect' },
          { title: 'connected', legend: 'connected' },
          {
            title: '알림 표시',
            caption: '새 theme',
            legend: 'notify',
          },
        ],
        beforeResult: '불필요한 reconnect 발생',
        beforeResultTone: 'problem',
        afterFlow: [
          {
            title: 'theme 변경 감지',
            caption: 'EffectEvent 로직만 읽음',
            legend: 'detect',
          },
          { title: '연결 유지', legend: 'keep' },
          {
            title: '알림 표시',
            caption: '최신 theme',
            legend: 'notify',
          },
        ],
        afterResult: 'reconnect 없이 알림만 업데이트',
        afterResultTone: 'improvement',
      },
      {
        key: 'roomId',
        tabLabel: 'roomId 변경',
        scenarioLabel: '시나리오: roomId 변경',
        beforeFlow: [
          {
            title: 'roomId 변경 감지',
            caption: '연결 대상이 바뀜',
            legend: 'detect',
          },
          { title: 'Effect 전체 재실행', legend: 'rerun' },
          { title: 'disconnect', legend: 'disconnect' },
          { title: 'connect', legend: 'connect' },
          { title: 'connected', legend: 'connected' },
          {
            title: '알림 표시',
            caption: '새 roomId',
            legend: 'notify',
          },
        ],
        beforeResult: '필요한 reconnect 발생',
        beforeResultTone: 'concept',
        afterFlow: [
          {
            title: 'roomId 변경 감지',
            caption: '연결 대상이 바뀜',
            legend: 'detect',
          },
          { title: 'Effect 재실행', legend: 'rerun' },
          { title: 'disconnect', legend: 'disconnect' },
          { title: 'connect', legend: 'connect' },
          { title: 'connected', legend: 'connected' },
          {
            title: '알림 표시',
            caption: '최신 theme',
            legend: 'notify',
          },
        ],
        afterResult: '필요한 reconnect 발생 (대상이 바뀌므로)',
        afterResultTone: 'concept',
      },
    ],
    legendTitle: '범례',
    legendItems: [
      { label: '변경 감지', legend: 'detect' },
      { label: 'Effect 재실행', legend: 'rerun' },
      { label: '연결 끊김', legend: 'disconnect' },
      { label: '연결 생성', legend: 'connect' },
      { label: '연결 성공', legend: 'connected' },
      { label: '알림 표시', legend: 'notify' },
      { label: '연결 유지', legend: 'keep' },
    ],
    beforeTitle: 'Before (기존)',
    afterTitle: 'After (useEffectEvent)',
  },
  mission: {
    number: '09',
    eyebrow: '코드 따라가기',
    title: '직접 따라가기 보기',
    description:
      'API 사용법만이 아니라, Effect 설계 관점에서 useEffectEvent를 다루도록 손에 익혀 봅니다.',
    missions: [
      {
        number: '01',
        title: 'Effect 본체와 이벤트성 로직을 분리해본다',
        helper: '연결/구독 등 구조적 작업과 UI 반응 로직을 구분한다.',
        iconKey: 'split',
      },
      {
        number: '02',
        title: 'useEffectEvent를 dependency 배열 회피용으로 쓰지 않는다',
        helper: '올바른 목적의 이벤트 로직을 지키며 사용한다.',
        iconKey: 'shield-alert',
      },
      {
        number: '03',
        title: 'theme 변경 시 어떤 코드가 재실행되는지 비교한다',
        helper: 'Before/After의 실행 범위를 직접 확인한다.',
        iconKey: 'refresh',
      },
    ],
  },
  takeaways: {
    number: '10',
    eyebrow: '핵심 정리',
    title: '핵심 정리',
    cards: [
      {
        number: '01',
        tone: 'concept',
        title: 'useEffectEvent는 Effect 내부 이벤트 로직을 분리한다.',
        body: '연결/구독 등의 생명주기와 UI 반응 로직을 명확하게 나눌 수 있다.',
        iconKey: 'split',
      },
      {
        number: '02',
        tone: 'improvement',
        title: '최신 props/state를 읽으면서도 불필요한 재연결을 줄일 수 있다.',
        body: 'Effect 본체 재실행 없이도 이벤트 로직이 항상 최신 값을 안전하게 사용한다.',
        iconKey: 'shield-check',
      },
      {
        number: '03',
        tone: 'advanced',
        title: 'dependency 회피 꼼수로 이해하면 안 된다.',
        body: '올바른 설계 문맥과 사용 규칙 안에서만 사용해야 효과가 있다.',
        iconKey: 'shield-alert',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'React 19.2 이후 변화 읽기',
    description:
      'cacheSignal, Partial Pre-rendering, SSR batching 등 React 19.2 이후 변화를 읽는 기준을 정리합니다.',
    cta: '다음 페이지로 이동',
    href: '/react-19-2-reading-method',
  },
};

const en: UseEffectEventContent = {
  hero: {
    badge: 'React 19 Changes · 9/10',
    titleLines: ['What did useEffectEvent', 'add to Effect design', 'in React 19.2?'],
    subtitleLines: [
      'An API for separating what an Effect does',
      'from event-like logic that happens inside it.',
    ],
    beforeCode: {
      title: 'Before (plain useEffect)',
      langBadge: 'JSX',
      code: BEFORE_CODE,
      footerLines: ['Dependency: [roomId, theme]', 'Reconnects even when theme changes'],
    },
    reconnect: {
      title: 'Fewer reconnects',
      beforeLabel: 'Before',
      beforeBody: 'Reconnects on theme change',
      afterLabel: 'After',
      afterBody: 'No reconnect on theme change',
    },
    afterCode: {
      title: 'After (with useEffectEvent)',
      langBadge: 'JSX',
      code: AFTER_CODE,
      footerLines: ['Dependency: [roomId]', 'No reconnect on theme change'],
    },
  },
  question: {
    number: '02',
    eyebrow: "Today's question",
    questionLines: ['Why should the chat reconnect', 'just because the theme changed?'],
    supportQuestions: [
      { body: 'Separate Effect body from event logic', iconKey: 'split' },
      { body: 'Reduce unnecessary reconnects', iconKey: 'plug' },
      { body: 'Read the latest props/state safely', iconKey: 'shield-check' },
      { body: 'Clearer Effect design', iconKey: 'sparkles' },
    ],
  },
  problem: {
    number: '01',
    eyebrow: 'EXISTING LIMITATION',
    title: 'The problem with the existing Effect',
    description:
      'They share a dependency array, but roomId and theme are completely different in nature.',
    cards: [
      {
        tone: 'concept',
        title: 'roomId change',
        caption: 'Connection target changes',
        conclusion: 'Needs reconnect',
        iconKey: 'network',
        connector: '+',
      },
      {
        tone: 'advanced',
        title: 'theme change',
        caption: 'Only the notification text changes',
        conclusion: 'Only the notification needs to update',
        iconKey: 'palette',
        connector: '→',
      },
      {
        tone: 'problem',
        title: 'But the existing Effect…',
        caption: 'Both are dependencies, so both re-run',
        conclusion: 'Unnecessary reconnect',
        iconKey: 'shield-alert',
        connector: null,
      },
    ],
  },
  before: {
    number: '02',
    eyebrow: 'EXISTING APPROACH',
    title: 'Before (existing approach)',
    description:
      'When theme is in the dependency array, even a notification-only update tears the connection down and rebuilds it.',
    code: { fileName: 'ChatRoom.jsx', langBadge: 'JSX', code: BEFORE_CODE },
    problemCardTitle: 'Problems',
    problems: [
      { text: 'The whole Effect re-runs even on a theme change.' },
      { text: 'Disconnecting and reconnecting costs time.' },
      { text: 'Hard to express “the notification just needs the latest theme.”' },
    ],
    summary:
      "All you needed was to update the notification text, but you're reopening the connection too.",
  },
  after: {
    number: '03',
    eyebrow: 'IMPROVED APPROACH',
    title: 'Adopting useEffectEvent (After)',
    description:
      'With Effect Event, the Effect body focuses on connection management while the notification logic reads the latest theme.',
    code: { fileName: 'ChatRoom.jsx', langBadge: 'JSX', code: AFTER_CODE },
    improvementCardTitle: 'Improvements',
    improvements: [
      { text: "The Effect body doesn't re-run on theme change." },
      { text: 'Only the notification text updates with the latest theme.' },
      { text: 'Dependency shrinks to [roomId] — re-run conditions become clear.' },
    ],
    summary: 'Connection logic stays stable; notification logic always uses the latest value.',
  },
  separation: {
    number: '04',
    eyebrow: 'ROLE SPLIT',
    title: 'Effect vs Effect Event',
    description:
      'Effect handles structural work like external-system lifecycle. Effect Event handles event-like reactions on top.',
    left: {
      tone: 'concept',
      title: 'Effect (body)',
      description: 'Structural work of creating and cleaning up connections',
      items: ['Create / decide not to connect', 'Manage external-system lifecycle'],
      iconKey: 'settings',
    },
    center: 'split',
    right: {
      tone: 'advanced',
      title: 'Effect Event (event logic)',
      description: 'Event-like logic that runs on connection success',
      items: ['Reads the latest props/state', 'UI reactions, notifications, logs'],
      iconKey: 'zap',
    },
  },
  dependency: {
    number: '05',
    eyebrow: 'DEPENDENCY SHIFT',
    title: 'Why the dependency array shrinks',
    description:
      "theme just needs the latest value at run time — it doesn't need to be a re-run trigger for the Effect body.",
    flow: [
      {
        tone: 'concept',
        title: 'theme',
        body: 'Notification text',
        iconKey: 'palette',
      },
      {
        tone: 'advanced',
        title: 'Read by Effect Event',
        body: 'Latest value at call time',
        iconKey: 'zap',
      },
      {
        tone: 'improvement',
        title: 'Not a re-run trigger',
        body: 'Removed from dependencies',
        iconKey: 'shield-check',
      },
    ],
    dependencyCardTitle: 'Dependency shift',
    beforeLabel: 'Before',
    beforeValue: '[roomId, theme]',
    beforeBody: 'theme is also a re-run trigger',
    afterLabel: 'After',
    afterValue: '[roomId]',
    afterBody: 'Only the connection target triggers a re-run',
  },
  restriction: {
    number: '06',
    eyebrow: 'USAGE RULE',
    title: 'Usage location rules (important)',
    description:
      'useEffectEvent is powerful, so its call site is restricted. Using it in the wrong place breaks the intent.',
    cards: [
      {
        tone: 'improvement',
        title: 'Where you can call it',
        items: ['Inside an Effect', 'Inside another Effect Event'],
        iconKey: 'shield-check',
      },
      {
        tone: 'problem',
        title: "Don't use it as",
        items: ['A way to dodge dependencies', 'A direct call from outside an Effect'],
        iconKey: 'ban',
      },
      {
        tone: 'problem',
        title: 'Rules matter',
        items: ['Designed for proper separation', 'Breaking the rule loses the intended benefit'],
        iconKey: 'shield-alert',
      },
    ],
  },
  comparison: {
    number: '07',
    eyebrow: 'BEHAVIOR COMPARISON',
    title: 'Before / After behavior comparison',
    description:
      'See in one table how Before / After differ across theme change and roomId change.',
    columns: {
      topic: 'Scenario',
      before: 'Before (existing)',
      after: 'After (useEffectEvent)',
      explanation: 'Note',
    },
    rows: [
      {
        topic: 'theme change',
        beforeLines: ['Reconnects', 'Whole Effect re-runs', 'Disconnect + reconnect'],
        afterLines: [
          'No reconnect',
          'Only notification updates with latest theme',
          'Connection kept',
        ],
        explanation: 'Effect Event reads the latest theme; only the notification updates.',
      },
      {
        topic: 'roomId change',
        beforeLines: ['Reconnect (needed)', 'Whole Effect re-runs', 'Disconnect + new connect'],
        afterLines: ['Reconnect (same)', 'Effect re-runs', 'Disconnect + new connect'],
        explanation: 'The connection target changes, so both need to reconnect.',
      },
    ],
  },
  simulator: {
    number: '08',
    eyebrow: 'RECONNECT SIMULATOR',
    title: 'Effect Reconnect simulator',
    description:
      'Pick a scenario and compare the Before / After flows. See how the same change diverges in outcome.',
    tabsLabel: 'Pick a scenario',
    defaultScenario: 'theme',
    scenarios: [
      {
        key: 'theme',
        tabLabel: 'theme change',
        scenarioLabel: 'Scenario: theme change',
        beforeFlow: [
          { title: 'Detect theme change', caption: 'Event-like change', legend: 'detect' },
          { title: 'Whole Effect re-runs', legend: 'rerun' },
          { title: 'disconnect', legend: 'disconnect' },
          { title: 'connect', legend: 'connect' },
          { title: 'connected', legend: 'connected' },
          { title: 'Show notification', caption: 'new theme', legend: 'notify' },
        ],
        beforeResult: 'Unnecessary reconnect',
        beforeResultTone: 'problem',
        afterFlow: [
          { title: 'Detect theme change', caption: 'Only Effect Event reads it', legend: 'detect' },
          { title: 'Connection kept', legend: 'keep' },
          { title: 'Show notification', caption: 'latest theme', legend: 'notify' },
        ],
        afterResult: 'Notification updates without reconnect',
        afterResultTone: 'improvement',
      },
      {
        key: 'roomId',
        tabLabel: 'roomId change',
        scenarioLabel: 'Scenario: roomId change',
        beforeFlow: [
          { title: 'Detect roomId change', caption: 'Connection target changes', legend: 'detect' },
          { title: 'Whole Effect re-runs', legend: 'rerun' },
          { title: 'disconnect', legend: 'disconnect' },
          { title: 'connect', legend: 'connect' },
          { title: 'connected', legend: 'connected' },
          { title: 'Show notification', caption: 'new roomId', legend: 'notify' },
        ],
        beforeResult: 'Needed reconnect',
        beforeResultTone: 'concept',
        afterFlow: [
          { title: 'Detect roomId change', caption: 'Connection target changes', legend: 'detect' },
          { title: 'Effect re-runs', legend: 'rerun' },
          { title: 'disconnect', legend: 'disconnect' },
          { title: 'connect', legend: 'connect' },
          { title: 'connected', legend: 'connected' },
          { title: 'Show notification', caption: 'latest theme', legend: 'notify' },
        ],
        afterResult: 'Needed reconnect (target changed)',
        afterResultTone: 'concept',
      },
    ],
    legendTitle: 'Legend',
    legendItems: [
      { label: 'Change detected', legend: 'detect' },
      { label: 'Effect re-runs', legend: 'rerun' },
      { label: 'Disconnected', legend: 'disconnect' },
      { label: 'Connecting', legend: 'connect' },
      { label: 'Connected', legend: 'connected' },
      { label: 'Notification', legend: 'notify' },
      { label: 'Connection kept', legend: 'keep' },
    ],
    beforeTitle: 'Before (existing)',
    afterTitle: 'After (useEffectEvent)',
  },
  mission: {
    number: '09',
    eyebrow: 'FOLLOW ALONG',
    title: 'Follow-along missions',
    description:
      'Beyond the API surface — practice useEffectEvent from an Effect-design perspective.',
    missions: [
      {
        number: '01',
        title: 'Separate Effect body from event-like logic',
        helper: 'Split structural work (connect / subscribe) from UI reactions.',
        iconKey: 'split',
      },
      {
        number: '02',
        title: "Don't use useEffectEvent to dodge dependencies",
        helper: 'Use it for genuine event logic, not as a shortcut.',
        iconKey: 'shield-alert',
      },
      {
        number: '03',
        title: 'Compare what re-runs on a theme change',
        helper: 'Confirm the Before/After execution scope yourself.',
        iconKey: 'refresh',
      },
    ],
  },
  takeaways: {
    number: '10',
    eyebrow: 'KEY TAKEAWAYS',
    title: 'Key takeaways',
    cards: [
      {
        number: '01',
        tone: 'concept',
        title: 'useEffectEvent separates event logic inside an Effect.',
        body: 'Lifecycle of connect/subscribe vs UI reactions become clearly split.',
        iconKey: 'split',
      },
      {
        number: '02',
        tone: 'improvement',
        title: 'Read the latest props/state without unnecessary reconnects.',
        body: 'Without re-running the Effect body, event logic still uses the latest value safely.',
        iconKey: 'shield-check',
      },
      {
        number: '03',
        tone: 'advanced',
        title: "Don't treat it as a dependency-dodging trick.",
        body: 'It only works as intended when used inside the right design context and rules.',
        iconKey: 'shield-alert',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Reading React 19.2 and beyond',
    description:
      "We'll set up a frame for reading cacheSignal, Partial Pre-rendering, SSR batching, and beyond.",
    cta: 'Go to the next page',
    href: '/react-19-2-reading-method',
  },
};

export const useEffectEventContent: Record<Locale, UseEffectEventContent> = { ko, en };

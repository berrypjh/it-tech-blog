import type { Locale } from '@it-tech-blog/preferences';

import type { FinaleBannerContent } from '../../shared/banner';

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

export type ExpansionCard = {
  title: string;
  description: string;
  bullets?: string[];
  tone: Tone;
};

export type FlowStep = {
  step: string;
  title: string;
  body: string;
  tone: Tone;
};

export type StepCard = {
  title: string;
  body: string;
  example?: string;
  tone: Tone;
};

export type TableRow = {
  cells: string[];
  tone?: Tone;
};

export type TakeawayCard = {
  num: string;
  title: string;
  body: string;
  tone: Tone;
};

export type AdvancedWrapupContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    description: string;
    diagramTitle: string;
    expansionCards: ExpansionCard[];
  };
  question: {
    eyebrow: string;
    title: string;
    badges: string[];
  };
  review: {
    step: number;
    eyebrow: string;
    title: string;
    steps: { title: string; body: string; tone: Tone }[];
  };
  priority: {
    step: number;
    eyebrow: string;
    title: string;
    tableColumns: string[];
    tableRows: { cells: string[]; tone: 'teal' | 'violet' | 'amber' }[];
    flowSteps: string[];
    description: string;
  };
  hydration: {
    step: number;
    eyebrow: string;
    title: string;
    steps: { title: string; body: string; example?: string; tone: 'sky' | 'violet' | 'rose' }[];
  };
  replay: {
    step: number;
    eyebrow: string;
    title: string;
    description: string;
    flow: FlowStep[];
    bufferLabel: string;
    bufferItems: string[];
  };
  formAction: {
    step: number;
    eyebrow: string;
    title: string;
    label: string;
    code: string;
    flow: { step: string; title: string; body: string }[];
    pendingLabel: string;
    pendingText: string;
  };
  expansionMap: {
    step: number;
    eyebrow: string;
    title: string;
    centerLabel: string;
    leftTitle: string;
    leftItems: { title: string; body: string }[];
    rightTitle: string;
    rightItems: { title: string; body: string }[];
  };
  comparison: {
    step: number;
    eyebrow: string;
    title: string;
    columns: string[];
    rows: TableRow[];
  };
  realCode: {
    step: number;
    eyebrow: string;
    title: string;
    cardA: {
      fileLabel: string;
      caption: string;
      code: string;
      description: string;
      buttonLabel: string;
      href: string;
    };
    cardB: {
      fileLabel: string;
      caption: string;
      code: string;
      description: string;
      buttonLabel: string;
      href: string;
    };
  };
  mission: {
    step: number;
    eyebrow: string;
    title: string;
    items: { title: string; body: string }[];
  };
  takeaways: {
    step: number;
    eyebrow: string;
    title: string;
    cards: TakeawayCard[];
  };
  finale: FinaleBannerContent;
};

const REPLAY_CODE = `// 보류 가능한 이벤트를 queue에 넣기
export function queueIfContinuousEvent(
  blockedOn,
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent,
) {
  // ... queued event 생성 및 보관
}

// hydration 완료 후 replay
export function replayUnblockedEvents() {
  // ... queue를 순회하며 이벤트 재실행
}`;

const FORM_ACTION_CODE = `export function extractEvents(
  dispatchQueue,
  domEventName,
  maybeTargetInst,
  nativeEvent,
  nativeEventTarget,
  eventSystemFlags,
  targetContainer,
) {
  if (domEventName !== "submit") {
    return;
  }

  // submit 이벤트를 action 흐름으로 연결
  // startHostTransition / action 실행 준비
}`;

const FORM_CODE = `<form action={saveTodo}>
  <input name="text" />
  <button type="submit">저장</button>
</form>`;

const FORM_CODE_EN = `<form action={saveTodo}>
  <input name="text" />
  <button type="submit">Save</button>
</form>`;

const ko: AdvancedWrapupContent = {
  hero: {
    badge: '이벤트 시스템 · 10/10단계',
    titleLines: ['React 이벤트 시스템은', 'handler 실행기로 끝나지 않는다'],
    description:
      '이벤트는 업데이트 우선순위를 만들고, hydration 중에는 보류될 수 있으며, React 19의 form action 흐름과도 연결됩니다.',
    diagramTitle: 'React 이벤트 시스템 확장 지도',
    expansionCards: [
      {
        title: 'Event Priority',
        description: '업데이트 우선순위 결정',
        bullets: ['dispatch wrapper 선택'],
        tone: 'violet',
      },
      {
        title: 'Hydration Replay',
        description: 'hydration 중 이벤트 보류 & replay',
        tone: 'sky',
      },
      {
        title: 'Form Action (React 19)',
        description: 'submit → action 연결',
        bullets: ['pending & transition'],
        tone: 'mint',
      },
    ],
  },
  question: {
    eyebrow: '오늘의 질문',
    title: 'React 이벤트 시스템은 단순 클릭 처리 이상의 어떤 역할을 할까?',
    badges: [
      '우선순위로 상태 업데이트 조율',
      'Hydration 중 사용자 입력 보존',
      'UI 선언 기반 form action 연결',
      '하나의 일관된 파이프라인',
    ],
  },
  review: {
    step: 1,
    eyebrow: 'full-flow-review',
    title: '지금까지의 전체 이벤트 흐름 복습',
    steps: [
      { title: 'onClick', body: 'JSX prop', tone: 'sky' },
      { title: 'root listener', body: 'native event 수신', tone: 'cyan' },
      { title: 'priority wrapper', body: 'dispatch 결정', tone: 'violet' },
      { title: 'DOM → Fiber', body: 'target 찾기', tone: 'teal' },
      { title: 'Plugin System', body: '이벤트 해석', tone: 'amber' },
      { title: 'SyntheticEvent', body: 'event 객체 생성', tone: 'blue' },
      { title: 'listener 수집', body: 'capture & bubble', tone: 'emerald' },
      { title: 'dispatchQueue', body: '생성', tone: 'rose' },
      { title: 'queue 실행', body: 'handler 실행', tone: 'mint' },
    ],
  },
  priority: {
    step: 2,
    eyebrow: 'priority-reconnect',
    title: '이벤트 우선순위 재연결',
    tableColumns: ['이벤트 예시', '우선순위', '특징', 'update priority → setState'],
    tableRows: [
      {
        cells: [
          'click, keydown',
          'Discrete',
          '즉각적 사용자 입력',
          '더 높은 우선순위로 즉시 처리 지향',
        ],
        tone: 'teal',
      },
      {
        cells: [
          'mousemove, pointermove',
          'Continuous',
          '연속적인 입력 흐름',
          '연속 입력 흐름에 맞춘 우선순위',
        ],
        tone: 'violet',
      },
      {
        cells: ['기타(load 등)', 'Default', '기본/비긴급 이벤트', '기본 우선순위'],
        tone: 'amber',
      },
    ],
    flowSteps: ['Event Priority', 'Current Update Priority', 'setState() inside handler'],
    description:
      '이벤트 dispatch 과정에서 설정된 우선순위 문맥은 handler 내부 상태 업데이트에도 영향을 줍니다.',
  },
  hydration: {
    step: 3,
    eyebrow: 'hydration-blocked',
    title: 'Hydration 중 blocked event 상황',
    steps: [
      {
        title: 'SSR HTML',
        body: '화면에는 보이지만 hydration 전',
        example: '<div id="root"><button>저장</button></div>',
        tone: 'sky',
      },
      {
        title: 'Hydration Boundary',
        body: '아직 React가 연결 중',
        tone: 'violet',
      },
      {
        title: '사용자 클릭 발생',
        body: '즉시 처리 불가 → blocked event 판단',
        tone: 'rose',
      },
    ],
  },
  replay: {
    step: 4,
    eyebrow: 'replay-queue',
    title: 'Replay Queue 개념',
    description: 'hydration이 완료되면, 보류됐던 이벤트를 순서대로 다시 재생(replay)합니다.',
    flow: [
      { step: '1', title: 'blocked event', body: '이벤트 도착', tone: 'rose' },
      { step: '2', title: 'queue 보관', body: '보류(buffer)', tone: 'violet' },
      { step: '3', title: 'hydration 완료', body: 'React 연결 완료', tone: 'sky' },
      { step: '4', title: 'event replay', body: '순서대로 재생', tone: 'emerald' },
    ],
    bufferLabel: 'event buffer (Replay Queue)',
    bufferItems: ['click', 'focusin', 'mouseover', 'keydown', '...'],
  },
  formAction: {
    step: 5,
    eyebrow: 'form-action-flow',
    title: 'Form Action (React 19) submit 흐름',
    label: 'React 19',
    code: FORM_CODE,
    flow: [
      { step: '1', title: 'submit', body: '사용자 제출' },
      { step: '2', title: 'FormActionEventPlugin', body: 'submit 추출 & 해석' },
      { step: '3', title: 'action 해석', body: 'action 함수 식별' },
      { step: '4', title: 'pending 상태 연결', body: 'useFormStatus 등 연동' },
      { step: '5', title: 'transition 흐름 진입', body: 'startTransition / action 실행' },
    ],
    pendingLabel: 'pending',
    pendingText: '저장 중...',
  },
  expansionMap: {
    step: 6,
    eyebrow: 'expansion-map',
    title: 'React 19 이벤트 시스템 확장 지도',
    centerLabel: 'React 이벤트 시스템',
    leftTitle: '기본 이벤트 시스템',
    leftItems: [
      { title: 'priority', body: '이벤트 우선순위 계산' },
      { title: 'plugin dispatch', body: 'Plugin Event System 진입' },
      { title: 'SyntheticEvent', body: 'event 객체 생성' },
      { title: 'dispatchQueue', body: 'listener 수집 & queue 생성' },
    ],
    rightTitle: '확장 (React 18/19)',
    rightItems: [
      { title: 'hydration replay', body: 'blocked event 보관 → replay' },
      { title: 'form actions', body: 'submit → action 연결 (pending & transition)' },
    ],
  },
  comparison: {
    step: 7,
    eyebrow: 'comparison-table',
    title: '종합 비교 테이블',
    columns: ['주제', '기본 이벤트 흐름과 연결되는 지점', '핵심 역할'],
    rows: [
      {
        cells: ['priority', 'dispatch wrapper 선택', 'update priority 문맥 생성'],
        tone: 'violet',
      },
      {
        cells: [
          'Hydration Replay',
          'DOM → Fiber 이후 blocked 보기',
          'hydration 중 보류, 완료 후 순서대로 재생',
        ],
        tone: 'sky',
      },
      {
        cells: [
          'Form Action (React 19)',
          'Plugin System 단계',
          'FormActionEventPlugin에서 submit을 action으로 해석',
        ],
        tone: 'mint',
      },
      {
        cells: [
          '상태 업데이트 문맥',
          'dispatch 실행 단계 관련',
          '이벤트 priority 문맥이 setState/transition에 적용',
        ],
        tone: 'amber',
      },
    ],
  },
  realCode: {
    step: 8,
    eyebrow: 'real-code',
    title: '실제 코드 미리보기',
    cardA: {
      fileLabel: 'ReactDOMEventReplaying.js',
      caption: 'Replay Queue',
      code: REPLAY_CODE,
      description: 'hydrate 중 보류된 이벤트를 queue에 넣고 replay한다.',
      buttonLabel: 'GitHub에서 전체 코드 보기',
      href: 'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/ReactDOMEventReplaying.js',
    },
    cardB: {
      fileLabel: 'FormActionEventPlugin.js',
      caption: 'Form Action',
      code: FORM_ACTION_CODE,
      description: 'submit을 action으로 연결하는 plugin 흐름이다.',
      buttonLabel: 'GitHub에서 전체 코드 보기',
      href: 'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/plugins/FormActionEventPlugin.js',
    },
  },
  mission: {
    step: 9,
    eyebrow: 'follow-along',
    title: '직접 코드에서 따라가 보기',
    items: [
      {
        title: 'ReactDOMEventReplaying.js를 연다',
        body: 'queueIfContinuousEvent / replayUnblockedEvents를 찾는다.',
      },
      {
        title: 'replay 관련 흐름을 확인한다',
        body: 'blocked → queue → replay 흐름을 추적한다.',
      },
      {
        title: 'FormActionEventPlugin.js를 연다',
        body: 'submit 이벤트가 별도 plugin으로 처리되는지 확인한다.',
      },
      {
        title: 'startHostTransition / action 흐름을 본다',
        body: 'pending → action 실행 → transition 흐름을 확인한다.',
      },
    ],
  },
  takeaways: {
    step: 10,
    eyebrow: 'whole-chapter',
    title: '전체 파트 핵심 정리',
    cards: [
      {
        num: '1',
        title: 'React 이벤트 시스템은 root 수신에서 시작된다.',
        body: 'Native Event를 받은 뒤 전체 흐름으로 연결되는 출발점입니다.',
        tone: 'sky',
      },
      {
        num: '2',
        title: 'Native Event는 priority와 Fiber target을 거쳐 해석된다.',
        body: '정확한 대상과 우선순위를 결정합니다.',
        tone: 'violet',
      },
      {
        num: '3',
        title: 'Plugin System은 React 이벤트 의미를 만든다.',
        body: '단순 / 특수 / React 19 이벤트를 각 plugin이 해석합니다.',
        tone: 'teal',
      },
      {
        num: '4',
        title: 'SyntheticEvent와 dispatchQueue가 실행 단계를 맡는다.',
        body: 'event 객체 구성과 listener 실행 순서를 보장합니다.',
        tone: 'amber',
      },
      {
        num: '5',
        title: 'React 19에서는 hydration replay와 form action까지 연결된다.',
        body: '입력 보존과 선언적 action 흐름을 지원합니다.',
        tone: 'mint',
      },
    ],
  },
  finale: {
    progressLabel: '11/15 챕터 완료',
    copyLine1: '이벤트 시스템의 내부',
    copyLine2: '흐름을 끝까지 봤습니다.',
    copyLine3: '이제 Scheduler와 우선순위로.',
    primaryCta: 'Scheduler와 우선순위 읽기',
    primaryHref: '/why-not-immediate',
    secondaryCta: '이벤트 챕터 처음부터 다시 보기',
    secondaryHref: '/why-event-system',
  },
};

const en: AdvancedWrapupContent = {
  hero: {
    badge: 'Event System · 10/10',
    titleLines: ['React event system', "doesn't end at the handler"],
    description:
      'Events create update priority context, can be deferred during hydration, and connect to the React 19 form action flow.',
    diagramTitle: 'React event system expansion map',
    expansionCards: [
      {
        title: 'Event Priority',
        description: 'Decide update priority',
        bullets: ['Pick the dispatch wrapper'],
        tone: 'violet',
      },
      {
        title: 'Hydration Replay',
        description: 'Defer and replay events during hydration',
        tone: 'sky',
      },
      {
        title: 'Form Action (React 19)',
        description: 'Wire submit → action',
        bullets: ['pending & transition'],
        tone: 'mint',
      },
    ],
  },
  question: {
    eyebrow: "Today's question",
    title: 'Beyond simple click handling, what else does the React event system do?',
    badges: [
      'Orchestrates state updates by priority',
      'Preserves user input during hydration',
      'Wires UI-declarative form actions',
      'A single, consistent pipeline',
    ],
  },
  review: {
    step: 1,
    eyebrow: 'full-flow-review',
    title: 'Recap of the full event flow so far',
    steps: [
      { title: 'onClick', body: 'JSX prop', tone: 'sky' },
      { title: 'root listener', body: 'Receives native event', tone: 'cyan' },
      { title: 'priority wrapper', body: 'Decides dispatch', tone: 'violet' },
      { title: 'DOM → Fiber', body: 'Find the target', tone: 'teal' },
      { title: 'Plugin System', body: 'Interpret event', tone: 'amber' },
      { title: 'SyntheticEvent', body: 'Build event object', tone: 'blue' },
      { title: 'listener collection', body: 'capture & bubble', tone: 'emerald' },
      { title: 'dispatchQueue', body: 'Built', tone: 'rose' },
      { title: 'queue execution', body: 'Run handlers', tone: 'mint' },
    ],
  },
  priority: {
    step: 2,
    eyebrow: 'priority-reconnect',
    title: 'Event priority reconnected',
    tableColumns: ['Event examples', 'Priority', 'Trait', 'update priority → setState'],
    tableRows: [
      {
        cells: [
          'click, keydown',
          'Discrete',
          'Immediate user input',
          'Aims for higher-priority immediate processing',
        ],
        tone: 'teal',
      },
      {
        cells: [
          'mousemove, pointermove',
          'Continuous',
          'Continuous input stream',
          'Priority tuned for continuous input',
        ],
        tone: 'violet',
      },
      {
        cells: [
          'Others (load, etc.)',
          'Default',
          'Non-urgent / default events',
          'Default priority',
        ],
        tone: 'amber',
      },
    ],
    flowSteps: ['Event Priority', 'Current Update Priority', 'setState() inside handler'],
    description:
      'The priority context set during event dispatch also affects state updates that happen inside the handler.',
  },
  hydration: {
    step: 3,
    eyebrow: 'hydration-blocked',
    title: 'Blocked events during hydration',
    steps: [
      {
        title: 'SSR HTML',
        body: 'Visible on screen but before hydration',
        example: '<div id="root"><button>Save</button></div>',
        tone: 'sky',
      },
      {
        title: 'Hydration Boundary',
        body: 'React is still wiring things up',
        tone: 'violet',
      },
      {
        title: 'User clicks',
        body: "Can't be processed immediately → marked as a blocked event",
        tone: 'rose',
      },
    ],
  },
  replay: {
    step: 4,
    eyebrow: 'replay-queue',
    title: 'Replay Queue idea',
    description: 'Once hydration finishes, the deferred events are replayed in order.',
    flow: [
      { step: '1', title: 'blocked event', body: 'Event arrives', tone: 'rose' },
      { step: '2', title: 'Queue holds it', body: 'Buffered', tone: 'violet' },
      { step: '3', title: 'Hydration done', body: 'React wired up', tone: 'sky' },
      { step: '4', title: 'Event replay', body: 'Replayed in order', tone: 'emerald' },
    ],
    bufferLabel: 'event buffer (Replay Queue)',
    bufferItems: ['click', 'focusin', 'mouseover', 'keydown', '...'],
  },
  formAction: {
    step: 5,
    eyebrow: 'form-action-flow',
    title: 'Form Action (React 19) submit flow',
    label: 'React 19',
    code: FORM_CODE_EN,
    flow: [
      { step: '1', title: 'submit', body: 'User submits the form' },
      { step: '2', title: 'FormActionEventPlugin', body: 'Extract & interpret submit' },
      { step: '3', title: 'Resolve action', body: 'Identify the action function' },
      { step: '4', title: 'Wire pending state', body: 'Hooks like useFormStatus' },
      { step: '5', title: 'Enter the transition', body: 'startTransition / action runs' },
    ],
    pendingLabel: 'pending',
    pendingText: 'Saving...',
  },
  expansionMap: {
    step: 6,
    eyebrow: 'expansion-map',
    title: 'React 19 event system expansion map',
    centerLabel: 'React event system',
    leftTitle: 'Base event system',
    leftItems: [
      { title: 'priority', body: 'Compute event priority' },
      { title: 'plugin dispatch', body: 'Enter the Plugin Event System' },
      { title: 'SyntheticEvent', body: 'Build the event object' },
      { title: 'dispatchQueue', body: 'Collect listeners & build queue' },
    ],
    rightTitle: 'Extension (React 18/19)',
    rightItems: [
      { title: 'hydration replay', body: 'Hold blocked events → replay later' },
      { title: 'form actions', body: 'submit → action (pending & transition)' },
    ],
  },
  comparison: {
    step: 7,
    eyebrow: 'comparison-table',
    title: 'Comprehensive comparison',
    columns: ['Topic', 'Hook-in point in the base flow', 'Core role'],
    rows: [
      {
        cells: ['priority', 'Pick the dispatch wrapper', 'Builds the update-priority context'],
        tone: 'violet',
      },
      {
        cells: [
          'Hydration Replay',
          'After DOM → Fiber, see blocked',
          'Defer during hydration, replay in order',
        ],
        tone: 'sky',
      },
      {
        cells: [
          'Form Action (React 19)',
          'Plugin System stage',
          'FormActionEventPlugin maps submit to an action',
        ],
        tone: 'mint',
      },
      {
        cells: [
          'State-update context',
          'Dispatch execution stage',
          'Event priority context flows into setState / transition',
        ],
        tone: 'amber',
      },
    ],
  },
  realCode: {
    step: 8,
    eyebrow: 'real-code',
    title: 'Real source preview',
    cardA: {
      fileLabel: 'ReactDOMEventReplaying.js',
      caption: 'Replay Queue',
      code: REPLAY_CODE,
      description: 'Hold events deferred during hydration in a queue and replay them.',
      buttonLabel: 'View full code on GitHub',
      href: 'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/ReactDOMEventReplaying.js',
    },
    cardB: {
      fileLabel: 'FormActionEventPlugin.js',
      caption: 'Form Action',
      code: FORM_ACTION_CODE,
      description: 'The plugin flow that wires submit to an action.',
      buttonLabel: 'View full code on GitHub',
      href: 'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/plugins/FormActionEventPlugin.js',
    },
  },
  mission: {
    step: 9,
    eyebrow: 'follow-along',
    title: 'Walk it in the source',
    items: [
      {
        title: 'Open ReactDOMEventReplaying.js',
        body: 'Find queueIfContinuousEvent and replayUnblockedEvents.',
      },
      {
        title: 'Trace the replay flow',
        body: 'Follow blocked → queue → replay end-to-end.',
      },
      {
        title: 'Open FormActionEventPlugin.js',
        body: 'Confirm submit is handled by a dedicated plugin.',
      },
      {
        title: 'Read startHostTransition / action flow',
        body: 'Trace pending → action execution → transition.',
      },
    ],
  },
  takeaways: {
    step: 10,
    eyebrow: 'whole-chapter',
    title: 'Whole chapter takeaways',
    cards: [
      {
        num: '1',
        title: 'The React event system starts at the root.',
        body: 'Receiving the native event is the entry point of the whole pipeline.',
        tone: 'sky',
      },
      {
        num: '2',
        title: 'Native events get a priority and a Fiber target.',
        body: 'It decides the right target and the right urgency.',
        tone: 'violet',
      },
      {
        num: '3',
        title: 'The Plugin System builds the React event meaning.',
        body: 'Simple, special, and React-19 events each have a plugin.',
        tone: 'teal',
      },
      {
        num: '4',
        title: 'SyntheticEvent and dispatchQueue own execution.',
        body: 'They build the event object and guarantee listener order.',
        tone: 'amber',
      },
      {
        num: '5',
        title: 'React 19 extends the system to replay and form actions.',
        body: 'Inputs survive hydration, declarative actions flow natively.',
        tone: 'mint',
      },
    ],
  },
  finale: {
    progressLabel: 'Chapter 11 of 15 complete',
    copyLine1: 'You followed the event',
    copyLine2: "system's inner flow.",
    copyLine3: 'Now the Scheduler & priorities.',
    primaryCta: 'Read the Scheduler & priorities',
    primaryHref: '/why-not-immediate',
    secondaryCta: 'Review events from the start',
    secondaryHref: '/why-event-system',
  },
};

export const advancedWrapupContent: Record<Locale, AdvancedWrapupContent> = { ko, en };
